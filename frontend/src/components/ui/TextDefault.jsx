import React from 'react';
import styled from '@emotion/styled';

const TextDefault = (props) => {
  const { children, size, color, weight, lineHeight, letterSpacing } = props;

  return (
    <Text
      size={size && `${size}`}
      color={color && `${color}`}
      weight={weight && `${weight}`}
      lineHeight={lineHeight && `${lineHeight}`}
      letterSpacing={letterSpacing && `${letterSpacing}`}
    >
      {children}
    </Text>
  );
};

const Text = styled.span`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
`;

export default TextDefault;
