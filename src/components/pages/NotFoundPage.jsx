import React from 'react'
import styled from 'styled-components'

const NotFoundPage = () => {
  return (
    <Norfound>
      <h1>Страница не найдена!</h1>
      <p>
      Возможно, это приватная страница. Если кто-то поделился с вами ссылкой, ему необходимо пригласить вас в одну из досок или рабочих пространств.
      </p>
    </Norfound>
  )
}

const Norfound = styled.main`
padding: 100px;
p,
h1{
  text-align: center;
}

`
export default NotFoundPage
