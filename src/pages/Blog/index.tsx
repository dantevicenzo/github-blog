import { Profile } from './components/Profile'
import { PostsList } from './components/PostsList'
import { useParams } from 'react-router-dom'
import { Container } from './styles'

export function Blog() {
  const { gitUsername } = useParams()
  return (
    <Container>
      <Profile gitUsername={gitUsername} />
      <PostsList gitUsername={gitUsername} />
    </Container>
  )
}
