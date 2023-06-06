import { styled } from 'styled-components'
import logo from '../../assets/header-cover.svg'

export const Container = styled.header`
  height: 18.5rem;
  min-width: 56rem;
  background-image: url('${logo}');
  background-size: cover;

  display: flex;
  justify-content: center;

  a {
    height: 6.125rem;
    margin-top: 4rem;

    img {
      height: 6.125rem;
    }
  }
`
