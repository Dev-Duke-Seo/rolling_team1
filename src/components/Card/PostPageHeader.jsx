import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EmojiPicker from 'emoji-picker-react';
import EmojiList from '../Common/EmojiList';
import ImageList from '../Common/ImageList';
import MessageCount from '../Common/MessageCount';
import * as S from './PostPageHeader.style';
import arrowDown from '../../assets/images/arrow-down.svg';
import shareIcon from '../../assets/images/share-icon.svg';
import addEmoji from '../../assets/images/add-emoji-icon.svg';
import fetchData from '../../apis/fetchData';
import useClickOutside from '../../hooks/useClickOutside';
import Dropdown from './Dropdown';

export default function PostPageHeader({
  recipientId,
  recentMessages,
  name,
  messageCount,
  topReactions,
  addToast
}) {
  const [isEmojiPickerShow, setIsEmojiPickerShow] = useState(false);
  const [recentTopReactions, setRecentTopReactions] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  const currentPath = useLocation();

  const handleDropdown = () => {
    setDropdown(true);
  };
  const handleClickShareURL = async () => {
    addToast('success', '링크가 복사되었습니다.');
    console.log(currentPath);
    // 복사로직 추가필요
  };

  const emojiRef = useRef(null);
  const shareRef = useRef(null);

  const handleReactionClick = async event => {
    const body = { emoji: event.emoji, type: 'increase' };
    try {
      await fetchData(`3-1/recipients/${recipientId}/reactions/`, 'POST', body);
      const response = await fetchData(
        `3-1/recipients/${recipientId}/reactions/?limit=3`
      );
      setRecentTopReactions(response.results);
    } catch (error) {
      throw new Error(error);
    }
  };

  useClickOutside(emojiRef, setIsEmojiPickerShow);
  useClickOutside(shareRef, setDropdown);

  return (
    <S.BackgroundArea>
      <S.PaperTitle>To. {name}</S.PaperTitle>
      <S.PaperBox>
        <ImageList
          recentMessages={recentMessages}
          messageCount={messageCount}
        />
        <MessageCount messageCount={messageCount} />
        <S.HorizonLine $margin="1.6rem" />
        <EmojiList topReactions={recentTopReactions || topReactions} />
        <img src={arrowDown} alt="arrow-down" style={{ margin: '0.6rem' }} />
        <div ref={emojiRef}>
          <button
            type="button"
            onClick={() => setIsEmojiPickerShow(!isEmojiPickerShow)}
          >
            <img src={addEmoji} alt="emoji-icon" />
          </button>
          {isEmojiPickerShow && (
            <S.EmojiPickerBox>
              <EmojiPicker onEmojiClick={event => handleReactionClick(event)} />
            </S.EmojiPickerBox>
          )}
        </div>
        <S.HorizonLine />
        <S.DropdownWrapper ref={shareRef}>
          <button type="button" onClick={handleDropdown}>
            <img src={shareIcon} alt="share-icon" />
          </button>
          {dropdown && <Dropdown onClick={handleClickShareURL} />}
        </S.DropdownWrapper>
      </S.PaperBox>
    </S.BackgroundArea>
  );
}
