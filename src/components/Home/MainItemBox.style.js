import styled from 'styled-components';

export const ItemBox = styled.div`
  width: 206px;
  height: 162px;
  flex-shrink: 0;

  border-radius: 12px;
  border: 1px solid #dbd9e9;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  /* 테블릿 */
  @media (max-width: 768px) {
    /* width: 50%; */
  }

  /* 모바일 */
  @media (max-width: 360px) {
    /* justify-content: center; */
    /* align-items: center; */
  }
`;

export const BasicBox = styled(ItemBox)`
  position: relative;
`;

export const FirstBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0 24px 0px 24px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const InfoBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
`;

export const ProfileImage = styled.img`
  display: flex;
  height: 34px;
  border-radius: 50px;

  // border: 1px solid;
  // background: url(<path-to-image>);
  // lightgray 50% / cover no-repeat;
  // border: 1.5px solid var(--white);
  // background: var(--white);
`;

export const Image = styled.img`
  position: absolute;
`;

export const MouseImage = styled(Image)`
  right: 40px;
`;

export const WhoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
`;

export const Name = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 12px;
  line-height: 18px; /* 120% */
`;

export const Line = styled.div`
  width: 180px;
  height: 1px;
  flex-shrink: 0;
  background: #e1e1e1;
`;

export const SecondBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 180px;
  height: 54px;
  flex-shrink: 0;

  overflow: hidden;
  color: #555;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Pretendard';
  font-size: 12px;
  line-height: 18px; /* 150% */
  letter-spacing: -0.06px;

  // border: solid 1px;
`;
