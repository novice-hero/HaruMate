import { useSelector } from 'react-redux';
import styled from 'styled-components';

import KakaoMap from '../../components/map/KakaoMap';
import Marker from '../../components/map/Marker';
import { IScheduleListItem, PlacesSearchResultItem } from '../../types/type';
import { RootState } from '../../store';
import ScheduleBox from '../../components/schedule/Schedulebox';
import cssToken from '../../styles/cssToken';
import { MarkerOff } from '../../components/map/index';
import CircleButton from '../../components/ui/button/CircleButton';
import SaveIcon from '../../assets/SaveIcon';
import CloseIcon from '../../assets/CloseIcon';

const Wrapper = styled.div`
  width: ${cssToken.WIDTH['w-screen']};
  height: ${cssToken.HEIGHT['h-screen']};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FixedDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${cssToken.SPACING['gap-16']};
  position: fixed;
  right: ${cssToken.SPACING['gap-40']};
  bottom: ${cssToken.SPACING['gap-40']};
  z-index: 999;
`;

const ButtonDiv = styled.div`
  margin-bottom: 0.25rem;
`;

const ScheduleRegister = () => {
  const places = useSelector((state: RootState) => state.placeList.list);
  const scheduleList = useSelector(
    (state: RootState) => state.scheduleList.list
  );
  // FIXME 숫자 마커가 일반 마커에 가려지는 현상 수정해야함
  console.log(places);

  return (
    <Wrapper>
      <ScheduleBox />
      <KakaoMap width="100vw" height="100vh">
        {places.map((place: PlacesSearchResultItem) => (
          <Marker
            img={MarkerOff[0]}
            key={place.id}
            lat={Number(place.y)}
            lng={Number(place.x)}
            id={Number(place.id)}
          />
        ))}
        {scheduleList.map((place: IScheduleListItem, idx: number) => (
          <Marker
            key={place.id}
            lat={Number(place.y)}
            lng={Number(place.x)}
            id={Number(place.id)}
            idx={idx}
          />
        ))}
      </KakaoMap>
      <FixedDiv>
        <CircleButton width="100px" height="100px">
          <ButtonDiv>
            <CloseIcon
              style={{ iconWidth: 19, iconHeight: 19, color: 'black' }}
            />
          </ButtonDiv>
          <div>취소하기</div>
        </CircleButton>
        <CircleButton width="100px" height="100px">
          <ButtonDiv>
            <SaveIcon
              style={{ iconWidth: 22, iconHeight: 22, color: 'black' }}
            />
          </ButtonDiv>
          <div>저장하기</div>
        </CircleButton>
      </FixedDiv>
    </Wrapper>
  );
};

export default ScheduleRegister;