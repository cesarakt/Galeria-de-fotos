import { Container } from './styles'

interface PhotoItemProps {
  url: string
  name: string
}

export function PhotoItem({ name, url }: PhotoItemProps) {
  return (
    <Container>
      <img src={url} alt={name} />
      <span>{name}</span>
    </Container>
  )
}
