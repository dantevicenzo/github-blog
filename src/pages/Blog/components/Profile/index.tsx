import {
  Container,
  Content,
  Image,
  Info,
  InfoContainer,
  TitleContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <Container>
      <Image src="https://github.com/dantevicenzo.png" alt="" />
      <div>
        <TitleContainer>
          <h3>Dante Vicenzo</h3>
          <a
            href="https://github.com/dantevicenzo/"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </TitleContainer>
        <Content>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Content>
        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} /> <span>dantevicenzo</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faBuilding} /> <span>Rocketseat</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faUserGroup} /> <span>32 seguidores</span>
          </Info>
        </InfoContainer>
      </div>
    </Container>
  )
}
