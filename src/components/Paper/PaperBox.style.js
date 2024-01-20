import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 5rem;
  flex-direction: column;
  row-gap: 1.6rem;
  width: 100%;

  & > span {
    font-family: Pretendard;
    font-weight: 700;
    font-size: 2.4rem;
    padding-left: 2rem;
  }
`;

export default Container;
