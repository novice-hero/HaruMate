import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import cssToken from '../../styles/cssToken';
import SkyBlueButton from '../ui/button/SkyBlueButton';
import { showDetailActions } from '../../store/showDetail-slice';
import GrayButton from '../ui/button/GrayButton';
import { PlacesSearchResultItem } from '../../types/type';
import { scheduleListActions } from '../../store/scheduleList-slice';
import { RootState } from '../../store';
import scheduleDetailState from '../../utils/constant/scheduleDetailState';

const RegisterDetailContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  width: 58rem;
  height: ${cssToken.HEIGHT['h-screen']};
  background: ${cssToken.COLOR.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlaceEmbedBox = styled.embed`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${cssToken.WIDTH['w-full']};
  height: 100vh;
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${cssToken.SPACING['gap-12']};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const RegisterDetail = ({
  detailItem,
}: {
  detailItem: PlacesSearchResultItem;
}) => {
  const scheduleList = useSelector(
    (state: RootState) => state.scheduleList.list
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(showDetailActions.setIsShow(false));
    dispatch(showDetailActions.setItem(scheduleDetailState));
  };

  const addSchedule = () => {
    if (scheduleList.length < 10) {
      dispatch(
        scheduleListActions.addList({
          placeName: detailItem.place_name,
          placeUrl: detailItem.place_url,
          roadAddressName: detailItem.road_address_name,
          id: detailItem.id,
          phone: detailItem.phone,
          categoryGroupCode: detailItem.category_group_code,
          categoryGroupName: detailItem.category_group_name,
          x: detailItem.x,
          y: detailItem.y,
        })
      );
    }
    dispatch(showDetailActions.setIsShow(false));
  };

  return (
    <RegisterDetailContainer>
      <PlaceEmbedBox src={`${detailItem.place_url}`} />
      <ButtonWrapper>
        <GrayButton
          width="7rem"
          height="3rem"
          borderRadius={cssToken.BORDER['rounded-md']}
          onClick={handleClose}
        >
          닫기
        </GrayButton>
        <SkyBlueButton
          width="7rem"
          height="3rem"
          borderRadius={cssToken.BORDER['rounded-md']}
          onClick={addSchedule}
        >
          추가 하기
        </SkyBlueButton>
      </ButtonWrapper>
    </RegisterDetailContainer>
  );
};

export default RegisterDetail;