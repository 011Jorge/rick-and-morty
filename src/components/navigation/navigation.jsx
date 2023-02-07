import React from 'react'
import Loading from '../loading/loading'
import { Container } from './navigationStyles'

function Navigation({
  pagesNumber,
  setPagesNumber,
  removeLoading,
  setRemoveLoading,
}) {
  const next = () => {
    if (pagesNumber === 0) {
      setPagesNumber(2)
    } else {
      setPagesNumber((prevState) => prevState + 1)
    }
  }

  const prev = () => {
    if (pagesNumber === 1 || pagesNumber === 0) return
    setPagesNumber((prevState) => prevState - 1)
  }

  return (
    <Container>
      <button onClick={prev} type="button">
        Anterior
      </button>
      <h1>{pagesNumber}</h1>
      <button onClick={next} type="button">
        Próximo
      </button>
    </Container>
  )
}

export default Navigation
