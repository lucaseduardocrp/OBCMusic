import { FlexCSS, Paragraph, Title } from "@/styles/Mixins";
import { styled } from "styled-components";

export const Container = styled.div``;

export const HomeSection = styled.section`
  ${FlexCSS}
  height: 100%;
  flex-direction: column;
  padding: 0 0 14rem;
  gap: 4rem;
  text-align: center;
  background: linear-gradient(180deg, transparent 100%, black 100%), url(/HomeBackground.png);
  background-position: center;
  background-size: cover;

  .home-text{
    ${FlexCSS}
    flex-direction: column;
    gap: 4rem;
    padding: 18rem 20% 0;

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
      margin-bottom: 1rem;
    }
  }
  
  @media (max-width: 90rem) {      
    .home-text{
      padding: 22rem 4% 0; 
    }
  }

  @media (max-width: 64rem) {
    .home-text{
      padding: 12rem 4% 0;

      >p{
        padding: 0;
      }
    }
  }
  
  @media (max-width: 26.563rem) {
    padding-top: 2rem;

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