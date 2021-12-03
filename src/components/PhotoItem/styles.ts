import styled from 'styled-components'

export const Container = styled.div`
  background: var(--grey);
  border-radius: 0.75rem;
  padding: 1rem;
  position: relative;

  img {
    max-width: 100%;
    display: block;
    margin-bottom: 1rem;
    border-radius: 0.75rem;
  }

  span {
    font-size: 1.25rem;
  }

  button {
    background: transparent;
    border: 0;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }
`
