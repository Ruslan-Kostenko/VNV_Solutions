// import { Button } from 'react-bootstrap';
// import { Button } from 'bootstrap';
// import hero from '../Images/Heroimg.png';
// import logo from '../Images/vnv_Logo.png';
import {
  BoldS,
  HeroBtnS,
  HeroContentS,
  HeroImageS,
  HeroS,
  HeroTextS,
} from './Hero.Styled';
import LogoImg from '../Images/vnv_Logo.png';

const Hero = () => {
  return (
    <HeroS>
      <HeroContentS>
        <HeroTextS>
          Easy, quality, IT - <BoldS>w</BoldS>inning <BoldS>solutions</BoldS>{' '}
          for your business
        </HeroTextS>
        <HeroBtnS type="button">Order Service</HeroBtnS>
      </HeroContentS>
      <HeroImageS src={LogoImg} alt="hero" />
    </HeroS>
  );
};

export default Hero;
