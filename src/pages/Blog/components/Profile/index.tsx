import {
  Container,
  Content,
  Image,
  Info,
  InfoContainer,
  TitleContainer,
  TitleContentInfoWrapper,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { api } from '../../../../lib/axios'
import { useEffect, useState } from 'react'

interface IGithubUser {
  avatar_url: string
  bio: string
  login: string
  name: string
  html_url: string
  followers: number
  company: string
  location: string
}

interface IProfileProps {
  gitUsername?: string
}

export function Profile({ gitUsername }: IProfileProps) {
  const [user, setUser] = useState({} as IGithubUser)

  async function loadProfile() {
    const user = gitUsername || 'dantevicenzo'
    const response = await api.get(`/users/${user}`)
    setUser(response.data)
  }

  useEffect(() => {
    loadProfile()
  }, [])

  return (
    <Container>
      <Image src={user.avatar_url} alt="" />
      <TitleContentInfoWrapper>
        <TitleContainer>
          <h3>{user.name}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </TitleContainer>
        <Content>{user.bio}</Content>
        <InfoContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} /> <span>{user.login}</span>
          </Info>
          {user.company && (
            <Info>
              <FontAwesomeIcon icon={faBuilding} /> <span>{user.company}</span>
            </Info>
          )}
          {user.location && (
            <Info>
              <FontAwesomeIcon icon={faLocationDot} />{' '}
              <span>{user.location}</span>
            </Info>
          )}

          <Info>
            <FontAwesomeIcon icon={faUserGroup} />{' '}
            <span>{user.followers} seguidores</span>
          </Info>
        </InfoContainer>
      </TitleContentInfoWrapper>
    </Container>
  )
}
