import styled from 'styled-components'

export const Container = styled.div`
  width: 54rem;
  margin: 0 auto;
  margin-top: -5.5rem;
  background-color: ${(props) => props.theme.baseProfile};

  padding: 2rem 2rem 2rem 2.5rem;

  display: flex;

  gap: 2rem;
`

export const Image = styled.img`
  height: 9.25rem;
  width: 9.25rem;
  border-radius: 8px;
`
export const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;

    color: ${(props) => props.theme.blue};
    line-height: 0;
  }

  h3 {
    color: ${(props) => props.theme.baseTitle};
    font-weight: bold;
    font-size: 1.5rem;
  }
`
export const Content = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`
export const InfoContainer = styled.footer`
  display: flex;
  gap: 24px;

  margin-top: 1.438rem;
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.baseLabel};
    height: 18px;
  }

  span {
    color: ${(props) => props.theme.baseSubtitle};
    line-height: 0;
  }
`
