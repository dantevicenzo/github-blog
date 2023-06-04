import styled from 'styled-components'

export const Container = styled.div`
  width: 54rem;
  margin: 0 auto;
  margin-top: -88px;
  background-color: ${(props) => props.theme.baseProfile};

  padding: 32px 32px 32px 40px;

  display: flex;

  gap: 32px;
`

export const Image = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 8px;
`
export const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    gap: 8px;

    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;

    color: ${(props) => props.theme.blue};
  }

  h3 {
    color: ${(props) => props.theme.baseTitle};
    font-weight: bold;
    font-size: 24px;
  }
`
export const Content = styled.p`
  font-size: 1rem;
  margin-top: 8px;
`
export const InfoContainer = styled.footer`
  display: flex;
  gap: 24px;

  margin-top: 23px;
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${(props) => props.theme.baseLabel};
    height: 18px;
  }

  span {
    color: ${(props) => props.theme.baseSubtitle};
  }
`
