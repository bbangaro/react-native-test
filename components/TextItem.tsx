import React,  { FC } from "react";
import styled from 'styled-components/native';

interface Props {
  text: string
}
const TextItem: FC<Props> = ({text}) => {
  return <StyledText>{text}</StyledText>;
}

// styled components
const StyledText = styled.Text`
  font-size: 25px;
`;

export default TextItem;