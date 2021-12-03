import { useState, useEffect } from 'react'
import { getAllPhotos } from './services/photos'

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
  PhotoListArea
} from './app.styles'

export function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const getPhotos = async () => {
      setIsLoading(true)
      const photos = await getAllPhotos()
      setPhotos(photos)
      setIsLoading(false)
    }
    getPhotos()
  }, [])
  return (
    <Container>
      <Area>
        <TitleHeader>Galeria de Fotos</TitleHeader>
        {
          //Upload Area
        }

        {isLoading && (
          <ScreenLoading>
            <Dots />
          </ScreenLoading>
        )}

        {!isLoading && photos.length > 0 && (
          <PhotoListArea>
            {photos.map((item, index) => (
              <PhotoItem key={index} name={item.name} url={item.url} />
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
