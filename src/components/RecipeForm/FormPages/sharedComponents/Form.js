import styled from 'styled-components';

const stc = styled.form`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid rgba(34,36,38,.15);
  padding: 1rem;
  box-shadow: 0px 3px 16px 1px rgba(0,0,0,0.2);
  @media screen and (min-width: 480px) {
    padding: 2rem;
  }
`;

export default stc;
