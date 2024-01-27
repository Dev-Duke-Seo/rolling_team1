import { useRef, useState } from 'react';
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
import ImageButton from '../Button/ImageButton';

export default function PostPageHeader({
  recipientId,
  recentMessages,
  name,
  messageCount,
  topReactions
}) {
  const [isEmojiPickerShow, setIsEmojiPickerShow] = useState(false);
  const [isEmojiListShow, setIsEmojiListShow] = useState(false);
  const [recentTopReactions, setRecentTopReactions] = useState(null);
  const [recentReactions, setRecentReactions] = useState(null);

  const emojiListRef = useRef(null);
  const emojiPickerRef = useRef(null);

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

  const handleReactionListClick = async () => {
    const response = await fetchData(
      `3-1/recipients/${recipientId}/reactions/?limit=9`
    );
    setRecentReactions(response.results);
    setIsEmojiListShow(!isEmojiListShow);
  };

  useClickOutside(emojiListRef, setIsEmojiListShow);
  useClickOutside(emojiPickerRef, setIsEmojiPickerShow);

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
        <div ref={emojiListRef}>
          <ImageButton
            imageURL={arrowDown}
            imageAlt="arrow-down"
            handleClick={handleReactionListClick}
          />
          {isEmojiListShow && (
            <S.EmojiListBox>
              <EmojiList topReactions={recentReactions} />
            </S.EmojiListBox>
          )}
        </div>
        <div ref={emojiPickerRef}>
          <ImageButton
            imageURL={addEmoji}
            imageAlt="emoji-icon"
            handleClick={() => setIsEmojiPickerShow(!isEmojiPickerShow)}
          />
          {isEmojiPickerShow && (
            <S.EmojiPickerBox>
              <EmojiPicker onEmojiClick={event => handleReactionClick(event)} />
            </S.EmojiPickerBox>
          )}
        </div>
        <S.HorizonLine />
        <img src={shareIcon} alt="share-icon" />
      </S.PaperBox>
    </S.BackgroundArea>
  );
}
