import { useNavigate } from 'react-router-dom'
import { Container, Content, Header } from './styles'
import { IGithubPost } from '../PostsList'
import { getFormattedDateWithSuffix } from '../../../../utils/formatter'
import ReactMarkdown from 'react-markdown'

export function PostCard(props: IGithubPost) {
  const navigate = useNavigate()

  function handleCardOnClick() {
    const user = props.gitUsername || 'dantevicenzo'
    navigate(`/${user}/post/${props.number}`)
  }

  return (
    <Container onClick={handleCardOnClick}>
      <Header>
        <strong>{props.title}</strong>
        <span>{getFormattedDateWithSuffix(props.created_at)}</span>
      </Header>
      <Content>
        <ReactMarkdown>{props.body}</ReactMarkdown>
      </Content>
    </Container>
  )
}
