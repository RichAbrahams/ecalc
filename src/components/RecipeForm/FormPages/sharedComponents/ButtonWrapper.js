import styled from 'styled-components';

const stc = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;
  flex-direction: column-reverse;
  & > button {
    margin-bottom: 1em !important;
  }

  @media screen and (min-width: 480px) {
    flex-direction: row;
    margin-top: 2rem;
  }
`;

export default stc;
