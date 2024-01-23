import styled from 'styled-components';
import defaultImage from '../../assetes/images/default-profile-image.png';

export const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

export const SelectedProfileImage = styled.span`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 2.4rem;
  width: 8rem;
  height: 8rem;
  border-radius: 10rem;
  background: ${({ $selectedImage }) =>
    $selectedImage ? `url(${$selectedImage})` : `url(${defaultImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;