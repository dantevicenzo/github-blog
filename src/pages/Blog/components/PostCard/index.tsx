import { useNavigate } from 'react-router-dom'
import { Container, Content, Header } from './styles'
import { IGithubPost } from '../../../../contexts/PostsContextProvider'

import { getFormattedDateWithSuffix } from '../../../../utils/formatter'

export function PostCard(props: IGithubPost) {
  const navigate = useNavigate()

  function handleCardOnClick() {
    navigate(`/${props.number}`)
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
