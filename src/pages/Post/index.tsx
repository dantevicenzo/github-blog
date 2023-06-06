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
import { useLayoutEffect, useState } from 'react'
import { IGithubPost } from '../Blog/components/PostsList'
import { getFormattedDateWithSuffix } from '../../utils/formatter'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

export function Post() {
  const { postId } = useParams()
  const [post, setPost] = useState({} as IGithubPost)
  const postIsDefined = Object.keys(post).length > 0

  async function loadPost(number?: string) {
    const response = await api.get(
      `https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${number}`,
    )
    setPost(response.data)
  }

  useLayoutEffect(() => {
    loadPost(postId)
  }, [postId])

  return (
    <>
      {postIsDefined && (
        <>
          <InfoContainer>
            <HeaderLinks>
              <a href="/">
                <FontAwesomeIcon icon={faChevronLeft} />
                Voltar
              </a>
              <a href={post.html_url} target="_blank" rel="noreferrer">
                Ver no Github{' '}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </HeaderLinks>
            <Title>{post.title}</Title>
            <FooterInfoContainer>
              <FooterInfo>
                <FontAwesomeIcon icon={faGithub} />
                <span>{post.user.login}</span>
              </FooterInfo>
              <FooterInfo>
                <FontAwesomeIcon icon={faCalendarDay} />
                <span>{getFormattedDateWithSuffix(post.created_at)}</span>
              </FooterInfo>
              <FooterInfo>
                <FontAwesomeIcon icon={faComment} />
                <span>{post.comments} comentários</span>
              </FooterInfo>
            </FooterInfoContainer>
          </InfoContainer>
          <ContentContainer>
            <ReactMarkdown remarkPlugins={[gfm]}>{post.body}</ReactMarkdown>
          </ContentContainer>
        </>
      )}
    </>
  )
}
