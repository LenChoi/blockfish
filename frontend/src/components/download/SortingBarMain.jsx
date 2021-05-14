import React from 'react';
import {
  ButtonWrapper,
  MenuBarWrapper,
  SortItem,
  SortItems,
  SortItemWrapper,
} from '../../styles/Download';
import TextDefault from '../ui/TextDefault';
import { ReactComponent as ListSvg } from '../../assets/list.svg';
import { ReactComponent as WidgetsSvg } from '../../assets/widgets.svg';

const SortingBar = (props) => {
  const { onToggleView } = props;

  return (
    <MenuBarWrapper>
      <SortItems>
        <SortItem>
          <SortItemWrapper>
            <TextDefault size="15px" color="#808080">
              Windows
            </TextDefault>
          </SortItemWrapper>
        </SortItem>
        <SortItem>
          <TextDefault size="15px" color="#808080">
            |
          </TextDefault>
        </SortItem>
        <SortItem>
          <SortItemWrapper>
            <TextDefault size="15px" color="#808080">
              Mac
            </TextDefault>
          </SortItemWrapper>
        </SortItem>
        <SortItem>
          <TextDefault size="15px" color="#808080">
            |
          </TextDefault>
        </SortItem>
        <SortItem>
          <SortItemWrapper>
            <TextDefault size="15px" color="#808080">
              Android
            </TextDefault>
          </SortItemWrapper>
        </SortItem>
        <SortItem>
          <TextDefault size="15px" color="#808080">
            |
          </TextDefault>
        </SortItem>
        <SortItem>
          <SortItemWrapper>
            <TextDefault size="15px" color="#808080">
              iOS
            </TextDefault>
          </SortItemWrapper>
        </SortItem>
      </SortItems>
      <div style={{ display: 'flex' }}>
        <ButtonWrapper onClick={() => onToggleView(false)}>
          <WidgetsSvg width="30" height="30" fill="black" />
        </ButtonWrapper>
        <ButtonWrapper onClick={() => onToggleView(true)}>
          <ListSvg width="30" height="30" fill="black" />
        </ButtonWrapper>
      </div>
    </MenuBarWrapper>
  );
};

export default SortingBar;
