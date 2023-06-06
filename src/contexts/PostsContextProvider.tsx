import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '../lib/axios'

export interface IGithubPost {
  id: number
  title: string
  created_at: string
  body: string
  html_url: string
  comments: number
  user: {
    login: string
  }
}

interface IPostsContext {
  posts: IGithubPost[]
  selectedPost: IGithubPost
  loadPosts: (query?: string) => Promise<void>
  handleSetSelectedPost: (post: IGithubPost) => void
}

export const PostsContext = createContext({} as IPostsContext)

interface IPostsContextProviderProps {
  children: ReactNode
}

export function PostsContextProvider({ children }: IPostsContextProviderProps) {
  const [posts, setPosts] = useState<IGithubPost[]>([])
  const [selectedPost, setSelectedPost] = useState({} as IGithubPost)

  async function loadPosts(query?: string) {
    const response = await api.get(
      `search/issues?q=${
        query != null ? query : ''
      }%20repo:rocketseat-education/reactjs-github-blog-challenge`,
    )

    setPosts(
      response.data.items.filter((item: IGithubPost) => item.body != null),
    )
  }

  useEffect(() => {
    loadPosts()
  }, [])

  function handleSetSelectedPost(post: IGithubPost) {
    setSelectedPost(post)
  }

  return (
    <PostsContext.Provider
      value={{ posts, loadPosts, selectedPost, handleSetSelectedPost }}
    >
      {children}
    </PostsContext.Provider>
  )
}
