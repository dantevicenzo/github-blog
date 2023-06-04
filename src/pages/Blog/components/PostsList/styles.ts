import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 54rem;
  margin: 4.5rem auto 14.625rem;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  strong {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.125rem;
  }

  span {
    color: ${(props) => props.theme.baseSpan};
    font-size: 0.875rem;
  }
`

export const StyledInput = styled.input`
  margin-top: 0.75rem;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme.baseInput};
  color: ${(props) => props.theme.baseText};
  font-size: 1rem;
  border: none;
  box-shadow: 0 0 0 1px ${(props) => props.theme.baseBorder};

  flex: 1;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
  }
`
export const ListContainer = styled.main`
  margin: 3rem auto 0;
  width: 54rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
