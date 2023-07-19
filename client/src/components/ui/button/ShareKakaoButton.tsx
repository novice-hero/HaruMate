import { debounce } from 'lodash';

import shareKakao from '../../../utils/shareKakao';
import { KakaoIcon } from '../../../assets/index';
import { ShareBtn } from '../../../styles/styles';

const ShareKakaoButton = ({
  endpoint,
  title,
  description,
}: {
  endpoint: string;
  title?: string;
  description?: string;
}) => {
  const ClickKakao = debounce(() => {
    shareKakao({ url: endpoint, title, description });
  }, 200);
  return (
    <ShareBtn
      className="kakao"
      type="button"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        ClickKakao();
      }}
    >
      <KakaoIcon />
    </ShareBtn>
  );
};

export default ShareKakaoButton;
