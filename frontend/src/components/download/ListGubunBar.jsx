import React from 'react';
import { ButtonWrapper, ListGubunBarWrapper } from '../../styles/Download';
import { ReactComponent as ListSvg } from '../../assets/list.svg';
import { ReactComponent as WidgetsSvg } from '../../assets/widgets.svg';

const ListGubunBar = (props) => {
  const { onToggleView } = props;

  return (
    <ListGubunBarWrapper>
      <div style={{ display: 'flex' }}>
        <ButtonWrapper onClick={() => onToggleView(false)}>
          <WidgetsSvg width="30" height="30" fill="black" />
        </ButtonWrapper>
        <ButtonWrapper onClick={() => onToggleView(true)}>
          <ListSvg width="30" height="30" fill="black" />
        </ButtonWrapper>
      </div>
    </ListGubunBarWrapper>
  );
};

export default ListGubunBar;
