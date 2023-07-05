import { FlexCSS } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.section`
  padding-top: 0;  
  ${FlexCSS}
  flex-direction: column;
  background: ${({theme}) => theme.colors.gray}; 
`;