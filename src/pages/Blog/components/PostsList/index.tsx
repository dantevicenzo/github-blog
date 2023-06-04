import { Container, StyledInput, Header, ListContainer } from './styles'
import { PostCard } from '../PostCard'
export function PostsList() {
  return (
    <Container>
      <Header>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </Header>
      <StyledInput type="text" placeholder="Buscar conteúdo" />

      <ListContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ListContainer>
    </Container>
  )
}
