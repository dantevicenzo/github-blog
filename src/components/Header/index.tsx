import { Container } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <a href="/">
        <img src={logo} alt="" />
      </a>
    </Container>
  )
}
