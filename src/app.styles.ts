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
  margin-bottom: 2rem;
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

export const UploadForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--grey);
  padding: 1rem;
  border-radius: 0.75rem;
  margin-bottom: 2rem;
  margin: 2rem 1.5rem;

  input[type='submit'] {
    background: var(--blue-button);
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    color: #fff;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 0 2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
