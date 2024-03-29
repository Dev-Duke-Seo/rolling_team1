import * as S from './ProfileImagesMain.style';
import ProfileImagesOptionList from './ProfileImagesOptionList';

export default function ProfileImagesMain({
  selectedProfileImage,
  profileImages,
  onChange
}) {
  return (
    <S.ProfileImageWrapper>
      <S.SelectedProfileImage $selectedImage={selectedProfileImage} />
      <ProfileImagesOptionList
        profileImages={profileImages}
        onChange={onChange}
      />
    </S.ProfileImageWrapper>
  );
}
