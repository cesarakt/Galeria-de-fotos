import { useState, useEffect, FormEvent } from 'react'
import { getAllPhotos, insertPhoto } from './services/photos'

import { PhotoItem } from './components/PhotoItem'

import { Photo } from './types/Photo'

import { Dots } from 'react-activity'
import 'react-activity/dist/Dots.css'
import { GlobalStyle } from './styles/global'
import {
  Container,
  Area,
  TitleHeader,
  ScreenLoading,
  PhotoListArea,
  UploadForm
} from './app.styles'

export function App() {
  const [isUploading, setIsUploading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  const getPhotos = async () => {
    setIsLoading(true)
    const photos = await getAllPhotos()
    setPhotos(photos)
    setIsLoading(false)
  }

  useEffect(() => {
    getPhotos()
  }, [])

  function onChangeItem(item: Photo) {
    const newList = photos.filter(photo => photo.name !== item.name)
    setPhotos(newList)
  }

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const file = formData.get('image') as File

    if (file && file.size > 0) {
      setIsUploading(true)
      const result = await insertPhoto(file)
      setIsUploading(false)

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        setPhotos(oldPhotos => [...oldPhotos, result])
      }
    }
  }

  return (
    <Container>
      <Area>
        <TitleHeader>Galeria de Fotos</TitleHeader>

        <UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {isUploading && <Dots />}
        </UploadForm>

        {isLoading && (
          <ScreenLoading>
            <Dots />
          </ScreenLoading>
        )}

        {!isLoading && photos.length > 0 && (
          <PhotoListArea>
            {photos.map((item, index) => (
              <PhotoItem
                key={index}
                name={item.name}
                url={item.url}
                getPhotos={getPhotos}
                onChangeItem={onChangeItem}
              />
            ))}
          </PhotoListArea>
        )}

        {!isLoading && photos.length === 0 && (
          <ScreenLoading>
            <h2>Não há fotos cadastradas</h2>
          </ScreenLoading>
        )}
      </Area>
      <GlobalStyle />
    </Container>
  )
}
