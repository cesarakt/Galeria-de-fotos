import { useState } from 'react'
import { deletePhoto } from '../../services/photos'

import { Dots } from 'react-activity'
import { Container } from './styles'
import { MdDeleteOutline } from 'react-icons/md'
import { Photo } from '../../types/Photo'

interface PhotoItemProps {
  url: string
  name: string
  getPhotos?: () => Promise<void>
  onChangeItem: (photo: Photo) => void
}

export function PhotoItem({ name, url, onChangeItem }: PhotoItemProps) {
  const [isDelete, setIsDelete] = useState(false)

  async function handleDelete(name: string) {
    setIsDelete(true)
    await deletePhoto(name)
    setIsDelete(false)
    onChangeItem({ name: name, url: url })
  }
  return (
    <Container>
      <img src={url} alt={name} />
      <span>{name}</span>
      <button onClick={() => handleDelete(name)}>
        {isDelete ? (
          <Dots color="#FFF" size={10} />
        ) : (
          <MdDeleteOutline color="#FFF" size={18} />
        )}
      </button>
    </Container>
  )
}
