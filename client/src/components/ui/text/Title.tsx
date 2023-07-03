import { styled } from 'styled-components';

import { Props, TextStyleT } from '../../../types/type';
import cssToken from '../../../styles/cssToken';

const H1 = styled.h1<TextStyleT>`
  font-size: ${(props) => (props.size ? props.size : '1rem')};
  color: ${(props) => (props.color ? props.color : 'black')};
  font-weight: ${(props) =>
    props.weight ? props.weight : cssToken.FONT_WEIGHT.bold};
`;

const Title = ({
  children,
  styles,
}: {
  children: Props['children'];
  styles?: TextStyleT;
}) => {
  return <H1 {...styles}>{children}</H1>;
};

export default Title;