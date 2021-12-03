import { storage } from './firebaseConnection'
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'

import { v4 as uuid } from 'uuid'
import { Photo } from '../types/Photo'

export async function getAllPhotos() {
  const list: Photo[] = []

  const imagesFolder = ref(storage, 'images')
  const photoList = await listAll(imagesFolder)
  const photoListItems = photoList.items

  for (let i in photoListItems) {
    const urlPhoto = await getDownloadURL(photoListItems[i])

    list.push({
      name: photoListItems[i].name,
      url: urlPhoto
    })
  }
  return list
}

export async function insertPhoto(file: File) {
  if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
    const randomName = uuid()
    const newFile = ref(storage, `images/${randomName}`)

    const upload = await uploadBytes(newFile, file)
    const photoUrl = await getDownloadURL(upload.ref)

    const photoItem = {
      name: upload.ref.name,
      url: photoUrl
    } as Photo

    return photoItem
  } else {
    return new Error('Tipo de arquivo inválido!')
  }
}
