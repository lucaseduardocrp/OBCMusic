import { styled } from "styled-components"

const MenuIcon = styled.div`
   border-top: 0.2rem solid ${({theme}) => theme.colors.white};
    width: 3rem;
    
    &::before, &::after{
      content: '';
      position: relative;
      display: block;
      width: 3rem;
      height: 0.2rem;
      background: ${({theme}) => theme.colors.white};
      margin-top: 1rem;
      transition: .3s;
    }

    .menuActive{
      border-top-color: transparent;

      &::before{
        transform: rotate(135deg);
      }
      &::after{
        transform: rotate(-135deg);
        top: -1.18rem;
      }
    }
`;

export default function BurgerMenu(props: {className: string}) {
  return <MenuIcon className={props.className} />
}