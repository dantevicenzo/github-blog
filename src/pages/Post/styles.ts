import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 0 1rem;
`

export const InfoContainer = styled.div`
  width: 864px;
  margin: -88px auto 0;
  background-color: ${(props) => props.theme.baseProfile};
  padding: 32px;
  border-radius: 10px;
`
export const HeaderLinks = styled.header`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.blue};
    line-height: 0;
  }
`
export const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.baseTitle};
  margin-top: 20px;
`
export const FooterInfoContainer = styled.footer`
  display: flex;
  gap: 32px;

  margin-top: 8px;
`
export const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.baseSpan};
    height: 18px;
  }

  span {
    color: ${(props) => props.theme.baseSpan};
    font-size: 1rem;
    line-height: 0;
  }
`
export const ContentContainer = styled.div`
  width: 864px;
  max-width: 864px;

  img {
    max-width: 790px;
  }

  margin: 0 auto;
  padding: 40px 32px;
`
