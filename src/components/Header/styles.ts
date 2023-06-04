import { styled } from 'styled-components'
import logo from '../../assets/header-cover.svg'

export const Container = styled.header`
  height: 18.5rem;
  background-image: url('${logo}');

  display: flex;
  justify-content: center;

  img {
    height: 6.125rem;
    margin-top: 4rem;
  }
`
