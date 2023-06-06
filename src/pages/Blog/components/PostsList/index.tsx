import { Container, StyledInput, Header, ListContainer } from './styles'
import { PostCard } from '../PostCard'
import { useState, KeyboardEvent, useEffect } from 'react'
import { api } from '../../../../lib/axios'

export interface IGithubPost {
  id: number
  number: number
  title: string
  created_at: string
  body: string
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function PostsList() {
  const [query, setQuery] = useState('')
  const [posts, setPosts] = useState<IGithubPost[]>([])

  async function loadPosts(query?: string) {
    const response = await api.get(
      `search/issues?q=${
        query != null ? query : ''
      }%20repo:rocketseat-education/reactjs-github-blog-challenge`,
    )

    console.log(response.data.items)
    setPosts(
      response.data.items.filter((item: IGithubPost) => item.body != null),
    )
  }

  useEffect(() => {
    loadPosts()
  }, [])

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
