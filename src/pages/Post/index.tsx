import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faComment,
  faCalendarDay,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  ContentContainer,
  FooterInfo,
  FooterInfoContainer,
  HeaderLinks,
  InfoContainer,
  Title,
} from './styles'
import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContextProvider'
import { getFormattedDateWithSuffix } from '../../utils/formatter'

export function Post() {
  const { selectedPost } = useContext(PostsContext)

  return (
    <>
      <InfoContainer>
        <HeaderLinks>
          <a href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </a>
          <a href={selectedPost.html_url}>
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderLinks>
        <Title>{selectedPost.title}</Title>
        <FooterInfoContainer>
          <FooterInfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>{selectedPost.user.login}</span>
          </FooterInfo>
          <FooterInfo>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{getFormattedDateWithSuffix(selectedPost.created_at)}</span>
          </FooterInfo>
          <FooterInfo>
            <FontAwesomeIcon icon={faComment} />
            <span>{selectedPost.comments} comentários</span>
          </FooterInfo>
        </FooterInfoContainer>
      </InfoContainer>
      <ContentContainer>
        <p>{selectedPost.body}</p>
      </ContentContainer>
    </>
  )
}
