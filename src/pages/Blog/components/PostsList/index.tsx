import { Container, StyledInput, Header, ListContainer } from './styles'
import { PostCard } from '../PostCard'
import { useState, KeyboardEvent, useEffect, ChangeEvent } from 'react'
import { api } from '../../../../lib/axios'

interface ILabel {
  color: string
  default: boolean
  description: string
  id: number
  name: string
  node_id: string
  url: string
}
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
  labels: ILabel[]
  gitUsername: string | undefined
}

interface IPostsListProps {
  gitUsername?: string
}

export function PostsList({ gitUsername }: IPostsListProps) {
  const [query, setQuery] = useState('')
  const [posts, setPosts] = useState<IGithubPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<IGithubPost[]>([])

  async function loadPosts(query?: string) {
    const user = gitUsername || 'dantevicenzo'
    const response = await api.get(
      `search/issues?q=${
        query != null ? query : ''
      }%20repo:${user}/github-blog`,
    )
    const articlesList = response.data.items.filter((item: IGithubPost) => {
      if (item.body !== null) {
        const hasArticleLabel = item.labels.some(
          (label) => label.name === 'article',
        )
        return hasArticleLabel
      }
      return false
    })
    setPosts(articlesList)
    setFilteredPosts(articlesList)
    console.log(articlesList)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  const handleKeyDownSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      loadPosts(query)
    }
  }

  const handleOnChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const queryTerm = event.target.value

    if (queryTerm === '') {
      loadPosts()
    } else {
      filterPosts(queryTerm)
    }

    setQuery(queryTerm)
  }

  const filterPosts = (queryTerm: string) => {
    const filteredList = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(queryTerm.toLowerCase()) ||
        post.title.toLowerCase().includes(queryTerm.toLowerCase()),
    )
    setFilteredPosts(filteredList)
  }

  return (
    <Container>
      <Header>
        <strong>Publicações</strong>
        <span>{filteredPosts.length} publicações</span>
      </Header>
      <StyledInput
        type="text"
        value={query}
        onChange={handleOnChangeSearch}
        onKeyDown={handleKeyDownSearch}
        placeholder="Buscar conteúdo"
      />

      <ListContainer>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} {...post} gitUsername={gitUsername} />
        ))}
      </ListContainer>
    </Container>
  )
}
