import { FlexCSS, Paragraph } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div``;

//------------------PARTNER COMPANIES SECTION------------------

export const PartnerCompaniesSection = styled.section`
  text-align: center;
`;

//------------------REPORTS SECTION------------------

export const ReportsSection = styled.section`
  text-align: center;
  overflow: hidden;
  position: relative;
  height: 90vh;
`;

//------------------GALERY CAROUSEL SECTION------------------

export const GalerySection = styled.section`
  background: url(/GaleryBG.svg);
  background-repeat: no-repeat;
  background-color: ${({theme}) => theme.colors.gray};
  padding: 10rem 0 0;
  position: relative;

  h2{
    padding: 6rem 20%;
  }

  @media (max-width: 48rem){
    h2{
      padding: 0 4% 6rem;
    }
  }
`;

export const ContactSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;

  .left-container{
    max-width: 84.5rem;
    height: 66.2rem;
    padding: 12rem 8rem;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 4rem;
    background: ${({theme}) => theme.colors.dark};
    position: relative;

    >img{
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  .right-container{
    padding: 12rem 8rem;
    position: relative;

    >img{
      position: absolute;
      bottom: 0;
      right: 5.6rem;
    }
  }

  @media (max-width: 48rem){
    grid-template-columns: 1fr;

    .left-container, .right-container{
      padding: 8rem 4%;
    }
  }
`;

export const ContactContainer = styled.div`
  ${FlexCSS}
  gap: 0.8rem;

  h5{
    ${Paragraph}
    font-family: ${({theme}) => theme.fonts.headlines};
    font-weight: 700;
  }
`;