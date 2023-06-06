import styled from 'styled-components'

export const Container = styled.a`
  max-width: 416px;
  background-color: ${(props) => props.theme.basePost};
  padding: 2rem;
  border-radius: 10px;

  text-decoration: none;

  &:hover {
    box-shadow: 0 0 0 1px ${(props) => props.theme.baseSpan};
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  gap: 1rem;

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseTitle};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseSpan};
    white-space: nowrap;
  }
`
export const Content = styled.p`
  margin-top: 1.25rem;
  font-size: 1rem;
  color: ${(props) => props.theme.baseText};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
