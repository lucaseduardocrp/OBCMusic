import { FlexCSS, Paragraph } from "@/styles/Mixins";
import { css, styled } from "styled-components";
interface FilterItemProps {
  selected: boolean,
}

export const FilterBarContainer = styled.ul`
  ${FlexCSS}
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const FilterItem = styled.li<FilterItemProps>`
  width: 30rem;
  cursor: pointer;
  
  h3{
    font-size: var(--2xl);
    font-weight: 800;
    line-height: 1.8;
    color: ${(props) => props.selected ? '#222' : '#C9C9C9'};
    transition: all .20s ease;
  }
  
  h4{
    font-size: var(--base);
    font-weight: 700;
    color: ${({theme}) => theme.colors.dark};
    opacity: ${props => props.selected ? '100%' : '40%'};
    border-bottom: ${props => props.selected ? '0.5rem solid #222' : '0.5rem solid #333333'};
    padding-bottom: 2rem;
    transition: all .50s ease;
  }
`;

export const Container = styled.div`
  ${({theme}) => css`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 0.1rem solid ${theme.colors.gray100};
    border-radius: 2.4rem;

    .content{
      display: grid;
      grid-template-columns: 1fr 2fr 1fr 1fr;
      padding: 4rem;
      gap: 3rem;
      background: rgba(34,34,34,0.08);
      border-top-left-radius: 2.4rem;
      border-top-right-radius: 2.4rem;

      p{
        font-size: var(--2xl);
        font-weight: 700;
      }
    }
  `}
`;

export const Grid = styled.div`
  ${({theme}) => css`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    padding: 4rem;
    gap: 3rem;

    &:nth-child(odd){
      border-top: 0.1rem solid ${theme.colors.gray100};
      border-bottom: 0.1rem solid ${theme.colors.gray100};
    }

    .artist-container .artist-box{
      ${FlexCSS}
      justify-content: start;
      gap: 1rem;
      margin-bottom: 3.2rem;
        
      .artist-info{
        p{
          font-weight: 700;
        }

        span{
          ${Paragraph}
          font-weight: 400;
          color: ${theme.colors.gray100};
        }
      }
    }

    .preview-container{
      ${FlexCSS}
      gap: 0.8rem;
      
      p{
        font-weight: 700;
        cursor: pointer;
      }
    }
  `}

  @media (max-width: 64rem) {
    grid-template-columns: 1fr;
  }
`;