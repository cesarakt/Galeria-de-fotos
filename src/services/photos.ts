import { storage } from './firebaseConnection'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
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
