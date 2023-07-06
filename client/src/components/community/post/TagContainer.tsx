import { KeyboardEvent, useEffect, useRef, useState } from 'react';

import { ChooseTag } from './DescriptionZip';

import { GapDiv, TagDiv } from '../../../styles/styles';
import InputContainer from '../../ui/input/InputContainer';
import TagButton from '../../ui/button/TagButton';
import cssToken from '../../../styles/cssToken';

const TagContainer = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [tags, setTags] = useState<string[] | []>([]);
  const [placeholder, setPlaceholder] = useState<string>(
    '태그 작성 후 엔터를 해주세요. 추가된 태그 클릭시 삭제 됩니다.'
  );
  const makeTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!inputRef.current) return;
      const { current } = inputRef;
      if (current && current?.value.trim().length > 0) {
        const newTag = current.value;
        if (!tags.find((tas) => tas === newTag)) {
          setTags((prev) => [...prev, newTag]);
        }
        current.value = '';
      }
    }
  };
  const removeTag = (selectTag: string | undefined) => {
    const filterTag = tags.filter((tag) => tag !== selectTag);
    setTags(filterTag);
  };

  useEffect(() => {
    if (tags.length >= 5) {
      //
      inputRef.current!.readOnly = true;
      setPlaceholder('최대 태그 개수를 만족하였습니다.');
    } else {
      inputRef.current!.readOnly = false;
      setPlaceholder(
        '태그 작성 후 엔터를 해주세요. 추가된 태그 클릭시 삭제 됩니다.'
      );
    }
  }, [tags]);

  return (
    <GapDiv>
      <ChooseTag />
      <>
        <InputContainer
          ref={inputRef}
          onkeypress={makeTag}
          styles={{
            width: '100%',
          }}
          description={placeholder}
        />
        <TagDiv>
          {tags.length > 0 &&
            tags.map((tag: string) => (
              <TagButton
                tagname={tag}
                onClick={removeTag}
                width={cssToken.WIDTH['min-w-fit']}
                height="30px"
              >
                {tag}
              </TagButton>
            ))}
        </TagDiv>
      </>
    </GapDiv>
  );
};

export default TagContainer;
