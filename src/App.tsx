import { Router } from './Router'
import { PostsContextProvider } from './contexts/PostsContextProvider'

export function App() {
  return (
    <>
      <PostsContextProvider>
        <Router />
      </PostsContextProvider>
    </>
  )
}
