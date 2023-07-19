import { GrayButton, SkyBlueButton } from '../ui/button/index';
import cssToken from '../../styles/cssToken';
import { BtnDiv } from '../../styles/styles';

const PageMoveBtnDiv = ({
  grayCallback,
  skyblueCallback,
  disabled,
}: {
  grayCallback: () => void;
  skyblueCallback: () => void;
  disabled?: boolean;
}) => {
  return (
    <BtnDiv>
      <GrayButton
        width="222px"
        height="53px"
        brradius={cssToken.BORDER['rounded-md']}
        onClick={grayCallback}
      >
        뒤로가기
      </GrayButton>
      <SkyBlueButton
        width="222px"
        height="53px"
        brradius={cssToken.BORDER['rounded-md']}
        onClick={skyblueCallback}
        disabled={disabled}
      >
        작성하기
      </SkyBlueButton>
    </BtnDiv>
  );
};

export default PageMoveBtnDiv;
