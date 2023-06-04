import { Container, Content, Header } from './styles'

export function PostCard() {
  return (
    <Container>
      <Header>
        <strong>JavaScript data types and data structures</strong>
        <span>Há 1 dia</span>
      </Header>
      <Content>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </Content>
    </Container>
  )
}
