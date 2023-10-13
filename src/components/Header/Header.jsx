import logo from '../Images/vnv_Logo.png';
import {
  BurgerS,
  HeaderS,
  LineS,
  LogoS,
  MenuItemS,
  NavMenuS,
  NavbarS,
} from './Header.Styled';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [click, setClick] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setClick(!click);
  const handleModal = () => setShowModal(!showModal);

  return (
    <HeaderS>
      <NavbarS>
        <a href="/" className="logo">
          <LogoS src={logo} alt="logo" />
        </a>
        <BurgerS
          onClick={() => {
            handleClick();
            handleModal();
          }}
        >
          {click ? (
            <FaTimes size={30} style={{ color: '#fff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#fff' }} />
          )}
        </BurgerS>
        <NavMenuS active={click}>
          <MenuItemS>
            <LineS href="/">Home</LineS>
          </MenuItemS>
          <MenuItemS>
            <LineS href="/">About</LineS>
          </MenuItemS>
          <MenuItemS>
            <LineS href="/">Services</LineS>
          </MenuItemS>
          <MenuItemS>
            <LineS href="/">Projects</LineS>
          </MenuItemS>
          <MenuItemS>
            <LineS href="/">Contacts</LineS>
          </MenuItemS>
        </NavMenuS>
      </NavbarS>
    </HeaderS>
  );
};

export default Header;
