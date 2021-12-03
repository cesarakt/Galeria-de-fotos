import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--background);
  color: #fff;
  min-height: 100vh;
`

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`

export const TitleHeader = styled.h1`
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
`
export const ScreenLoading = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    opacity: 0.6;
  }
`

export const PhotoListArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  margin: 0 1.5rem;
`
