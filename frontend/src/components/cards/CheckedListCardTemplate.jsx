import { Button } from '@material-ui/core';
import React from 'react';
import {
  CheckedListCardContainer,
  ListCardContentBottom,
  CheckedListCardLayout,
} from '../../styles/Card';
import { useStyles } from '../../styles/materialsStyle';
import CheckboxDefault from '../ui/CheckboxDefault';
import HalfRating from '../ui/HalfRating';
import TextDefault from '../ui/TextDefault';

const CheckedListCardTemplate = ({ content, onChangeChecked }) => {
  const classes = useStyles();

  return (
    <CheckedListCardLayout>
      <CheckedListCardContainer>
        {/* Content Checkbox - 시작 */}
        <div style={{ textAlign: 'start', lineHeight: '65px' }}>
          <CheckboxDefault
            name={`item-${content.id}`}
            checked={content.checked}
            onChange={() => {
              onChangeChecked(content.id);
            }}
          />
        </div>
        {/* Content Checkbox - 끝 */}

        {/* Content 이미지 */}
        <img alt="" height="70" src={content.imgSrc} />
        {/* Content - 시작 */}
        <div>
          {/* Content 타이틀 - 시작 */}
          <div>
            <TextDefault size="18px" lineHeight="25px">
              {content.title}
            </TextDefault>
          </div>
          {/* Content 타이틀 - 끝 */}

          {/* Content 설명 - 시작 */}
          <div>
            <TextDefault size="14px" lineHeight="25px" color="#808080">
              {content.description}
            </TextDefault>
          </div>
          {/* Content 설명 - 끝 */}

          {/* Content Bottom - 시작 */}
          <ListCardContentBottom>
            <HalfRating />
            <div style={{ marginLeft: 5 }}>
              <TextDefault size="14px" color="#808080">
                (
              </TextDefault>
              <TextDefault size="14px" color="#808080">
                {content.commentNum}
              </TextDefault>
              <TextDefault size="14px" color="#808080">
                )
              </TextDefault>
            </div>
          </ListCardContentBottom>
          {/* Content Bottom - 끝 */}
        </div>
        {/* Content - 끝 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <TextDefault size="14px" color="#00bfff">
            Free
          </TextDefault>
          <Button className={`${classes.checkedListUpdateBtn}`}>수정</Button>
        </div>
      </CheckedListCardContainer>
    </CheckedListCardLayout>
  );
};

export default CheckedListCardTemplate;
