import { useNavigate } from 'react-router-dom'
import { Container, Content, Header } from './styles'
import { useContext } from 'react'
import {
  IGithubPost,
  PostsContext,
} from '../../../../contexts/PostsContextProvider'

import { getFormattedDateWithSuffix } from '../../../../utils/formatter'

export function PostCard(props: IGithubPost) {
  const navigate = useNavigate()

  const { handleSetSelectedPost } = useContext(PostsContext)

  function handleCardOnClick() {
    handleSetSelectedPost(props)
    navigate('/post')
  }

  return (
    <Container onClick={handleCardOnClick}>
      <Header>
        <strong>{props.title}</strong>
        <span>{getFormattedDateWithSuffix(props.created_at)}</span>
      </Header>
      <Content>{props.body}</Content>
    </Container>
  )
}
