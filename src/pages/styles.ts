import { FlexCSS, Paragraph, Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div``;

export const HomeSection = styled.section`
  ${FlexCSS}
  height: 100%;
  flex-direction: column;
  padding-top: 18rem;
  padding-bottom: 14rem;
  gap: 4rem;
  text-align: center;
  background: linear-gradient(180deg, transparent 100%, black 100%), url(/HomeBackground.png);
  background-position: center;
  background-size: cover;

  h1{
    ${Title};
    padding-bottom: 0;
    font-size: var(--5xl);
  }
  p{
    ${Paragraph};
    font-size: var(--xl);
    padding: 0 10rem;
  }

  .ButtonsContainer{
    ${FlexCSS};
    gap: 4rem;
  }

  @media (max-width: 64rem) {
    >p{
      padding: 0;
    }
  }
  
  @media (max-width: 26.563rem) {
    padding-top: 8rem;

    .ButtonsContainer{
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

//------------------ABOUT SECTION------------------

export const AboutSection = styled.section`
  background: ${({theme}) => theme.colors.gray};

  .about-container{
    ${FlexCSS};
    overflow: hidden;
    
    .text{
      h2{
        padding-bottom: 3.2rem;
      }

      p{
        padding-bottom: 8rem;
      }
    }

    &:nth-child(even){
      flex-direction: row-reverse;
    }
  }

  @media (max-width: 64rem){
    .about-container{
      flex-wrap: wrap;

      .text{
        padding-bottom: 8rem;

        p{
          padding-bottom: 2rem;
        }
      }
    }
  }

  @media (max-width: 48rem){
    .about-container img{
      width: 44rem;
      height: 40rem;
    }
  }
`;

//------------------PROGRAMMING SECTION------------------

export const ProgrammingSection = styled.section`
  background: ${({theme}) => theme.colors.blueGradient}; 
`;

//------------------TICKET SECTION------------------

export const TicketsSection = styled.section`
  padding-top: 0;  
  ${FlexCSS}
  flex-direction: column;
  background: ${({theme}) => theme.colors.gray}; 
`;

//------------------PARTNER COMPANIES SECTION------------------

export const PartnerCompaniesSection = styled.section`
  text-align: center;
`;

//------------------REPORTS SECTION------------------

export const ReportsSection = styled.section`
  text-align: center;
  overflow: hidden;
  position: relative;
`;