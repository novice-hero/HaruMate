import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import ModalChildren from './post/ModalChildren';

import Modal from '../ui/modal/Modal';
import { RootState } from '../../store';
import useToggleModal from '../../hooks/useToggleModal';
import { DeleteCommunityPost, DeleteMyPageCourses } from '../../apis/api';
import useMovePage from '../../hooks/useMovePage';
import EventButton from '../ui/button/EventButton';

const DeleteButton = ({
  type,
  postId,
}: {
  type?: 'mypage';
  postId: string;
}) => {
  const url = type ? '/mypage' : '/community';
  const goToPage = useMovePage(url);
  const modalIsOpen = useSelector((state: RootState) => state.overlay.isOpen);
  const toggleModal = useToggleModal();
  const queryClient = useQueryClient();
  const query = type ? DeleteMyPageCourses : DeleteCommunityPost;
  const mutate = useMutation(query, {
    onSuccess: async () => {
      toggleModal();
      await queryClient.invalidateQueries(['community']);
      await queryClient.invalidateQueries(['mypage']);
      await queryClient.invalidateQueries(['user']);
      goToPage();
    },
  });
  return (
    <>
      <EventButton
        onClick={(e) => {
          e.stopPropagation();
          toggleModal();
        }}
      >
        삭제
      </EventButton>
      {modalIsOpen && (
        <Modal
          styles={{
            width: '47.0625rem',
            height: '28.375rem',
          }}
        >
          <ModalChildren
            leftBtnCallback={(e) => {
              e.stopPropagation();

              toggleModal();
            }}
            rightBtnCallback={(e) => {
              e.stopPropagation();
              mutate.mutate({ postId });
            }}
            content="정말 삭제하시겠습니까?"
          />
        </Modal>
      )}
    </>
  );
};

export default DeleteButton;
