import { styled } from 'styled-components';
import { useRef } from 'react';

import Search from '../../../assets/Search';
import cssToken from '../../../styles/cssToken';

const InputWrapper = styled.div`
  position: relative;
  width: ${cssToken.WIDTH['min-w-fit']};
`;

const Input = styled.input`
  background-color: ${cssToken.COLOR['gray-300']};
  width: ${(props) => props.width || '700px'};
  height: ${(props) => props.height};
  color: #424242;
  font-size: ${cssToken.TEXT_SIZE['text-16']};
  padding-top: ${cssToken.SPACING['gap-16']};
  padding-bottom: ${cssToken.SPACING['gap-16']};
  padding-left: 1.125rem;
  padding-right: 3.2rem;
  border: none;
  border-radius: ${cssToken.BORDER['rounded-input']};

  ::-webkit-input-placeholder {
    color: ${cssToken.COLOR['gray-700']};
  }
  &:focus {
    outline: none;
  }
`;

const SearchContainer = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const PostSearch = () => {
    if (inputRef.current) {
      if (inputRef.current.value.trim().length) {
        // Todo 입력값이 제대로 있는 경우 POST하도록
      }
    }
  };
  return (
    <InputWrapper>
      <Input ref={inputRef} type="text" placeholder="성심당" />
      <Search
        style={{ width: 25, height: 25, color: 'none' }}
        onClick={PostSearch}
      />
    </InputWrapper>
  );
};

export default SearchContainer;