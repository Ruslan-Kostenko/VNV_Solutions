import styled from 'styled-components';

export const HeaderS = styled.div`
  position: absolute;
  height: 90px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  transition: 0.3s ease-in;
  overflow: hidden;

  @media (max-width: 767px) {
    background-color: rgba(0, 0, 0, 0.9);
  }

  @media (min-width: 1024px) {
  }
`;

export const NavbarS = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: auto;
  height: 100%;
  padding: 0 1rem;

  @media (max-width: 767px) {
    max-width: 100%;

  }

  @media (min-width: 1024px) {
  }
`;

export const LogoS = styled.img`
  width: 120px;
  height: auto;
`;

export const NavMenuS = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;

  @media (max-width: 767px) {
    position: fixed;
    left: ${({ active }) => (active ? '0' : '100%')};
    top: 90px;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 90vh;
    z-index: 1000;
    text-align: center;
    transition: 0.5s;
  }

  @media (min-width: 1024px) {
  }
`;

export const MenuItemS = styled.li`
  padding: 1rem;
  font-weight: 500;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-orange); /* Колір вашої лінії */
    transition: width 0.5s ease; /* Зробимо анімацію для плавного зміщення ширини */
  }

  :hover::after {
    width: 100%; /* При наведенні лінія розшириться на всю ширину */
  }
`;

export const LineS = styled.a`
  color: #fff;
  font-size: 1.8rem ;
  font-weight: 100;
  position: relative; /* Додаємо, щоб можна було позиціонувати ::after відносно цього елемента */
  padding-bottom: 12px;
`;

export const BurgerS = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }

  @media (min-width: 1024px) {
  }

`;



// export const StyledSearchbar = styled.header`
//   top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 64px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   color: #fff;
//   background-color: purple;
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
// `;

// export const StyledSearchForm = styled.form`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   max-width: 600px;
//   background-color: #fff;
//   border-radius: 3px;
//   overflow: hidden;
// `;

// export const StyledSearchBtn = styled.button`
//   display: inline-block;
//   width: 48px;
//   height: 48px;
//   border: 0;
//   background-size: 40%;
//   background-repeat: no-repeat;
//   background-position: center;
//   opacity: 0.6;
//   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   outline: none;

//   &:hover {
//     opacity: 1;
//   }
// `;

// export const StyledInput = styled.input`
//   display: inline-block;
//   width: 100%;
//   font: inherit;
//   font-size: 20px;
//   border: none;
//   outline: none;
//   padding-left: 4px;
//   padding-right: 4px;

//   ::placeholder {
//     padding-left: 100;
//   }
// `;
