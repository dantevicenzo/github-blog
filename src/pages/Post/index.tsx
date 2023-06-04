import { Header } from '../../components/Header'
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

export function Post() {
  return (
    <>
      <InfoContainer>
        <HeaderLinks>
          <a href="">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </a>
          <a href="">
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderLinks>
        <Title>JavaScript data types and data structures</Title>
        <FooterInfoContainer>
          <FooterInfo>
            <FontAwesomeIcon icon={faGithub} /> <span>dantevicenzo</span>
          </FooterInfo>
          <FooterInfo>
            <FontAwesomeIcon icon={faCalendarDay} /> <span>Há 1 dia</span>
          </FooterInfo>
          <FooterInfo>
            <FontAwesomeIcon icon={faComment} /> <span>5 comentários</span>
          </FooterInfo>
        </FooterInfoContainer>
      </InfoContainer>
      <ContentContainer>
        <p>
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </strong>
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn. Dynamic typing JavaScript is a loosely typed and
          dynamic language. Variables in JavaScript are not directly associated
          with any particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </ContentContainer>
    </>
  )
}
