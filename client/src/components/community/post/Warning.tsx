import { styled } from 'styled-components';

import WarningIcon from '../../../assets/WarningIcon';
import cssToken from '../../../styles/cssToken';
import { FlexDiv } from '../../../styles/styles';
import Text from '../../ui/text/Text';

const WarningDiv = styled(FlexDiv)`
  background-color: ${cssToken.COLOR['red-100']};
  padding-top: ${cssToken.SPACING['gap-16']};
  padding-bottom: ${cssToken.SPACING['gap-16']};
  padding-left: ${cssToken.SPACING['gap-16']};
  column-gap: ${cssToken.SPACING['gap-12']};
  align-items: center;

  @media screen and (max-width: 768px) {
    p {
      font-size: 0.75rem;
    }
  }
`;

const Warning = () => {
  return (
    <WarningDiv>
      <WarningIcon
        style={{
          iconWidth: 24,
          iconHeight: 24,
        }}
      />
      <Text
        styles={{
          color: cssToken.COLOR['red-900'],
        }}
      >
        게시물 등록 시 수정은 할 수 없습니다. 게시물 작성 시 참고하세요!
      </Text>
    </WarningDiv>
  );
};

export default Warning;
