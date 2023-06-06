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
import { useContext, useEffect } from 'react'
import { PostsContext } from '../../contexts/PostsContextProvider'
import { getFormattedDateWithSuffix } from '../../utils/formatter'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useNavigate } from 'react-router-dom'

export function Post() {
  const { selectedPost } = useContext(PostsContext)
  const navigate = useNavigate()

  const selectedPostIsDefined = Object.keys(selectedPost).length > 0

  useEffect(() => {
    if (!selectedPostIsDefined) {
      navigate('/')
    }
  }, [selectedPostIsDefined, navigate])

  return (
    <>
      {selectedPostIsDefined && (
        <>
          <InfoContainer>
            <HeaderLinks>
              <a href="/">
                <FontAwesomeIcon icon={faChevronLeft} />
                Voltar
              </a>
              <a href={selectedPost.html_url} target="_blank" rel="noreferrer">
                Ver no Github{' '}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
                <span>
                  {getFormattedDateWithSuffix(selectedPost.created_at)}
                </span>
              </FooterInfo>
              <FooterInfo>
                <FontAwesomeIcon icon={faComment} />
                <span>{selectedPost.comments} comentários</span>
              </FooterInfo>
            </FooterInfoContainer>
          </InfoContainer>
          <ContentContainer>
            <ReactMarkdown remarkPlugins={[gfm]}>
              {selectedPost.body}
            </ReactMarkdown>
          </ContentContainer>
        </>
      )}
    </>
  )
}
