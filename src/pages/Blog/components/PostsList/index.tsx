import { Container, StyledInput, Header, ListContainer } from './styles'
import { PostCard } from '../PostCard'
import { useState, useContext, KeyboardEvent } from 'react'
import { PostsContext } from '../../../../contexts/PostsContextProvider'

export function PostsList() {
  const [query, setQuery] = useState('')
  const { posts, loadPosts } = useContext(PostsContext)

  const handleKeyDownSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      loadPosts(query)
    }
  }

  return (
    <Container>
      <Header>
        <strong>Publicações</strong>
        <span>{posts.length} publicações</span>
      </Header>
      <StyledInput
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDownSearch}
        placeholder="Buscar conteúdo"
      />

      <ListContainer>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </ListContainer>
    </Container>
  )
}
