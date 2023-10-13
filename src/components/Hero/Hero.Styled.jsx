import styled from 'styled-components';
import imageHero from '../Images/backg.png';

export const HeroS = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;

  height: 100vh;
  width: 100%;
  position: relative;

  ::before {
    content: '';
    background: url('${imageHero}') no-repeat center center/cover;

    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const HeroContentS = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 580px;
  padding: 1rem;
`;

export const HeroTextS = styled.h1`
  font-size: 64px;
  margin-bottom: 72px;
  font-weight: 100;
`;

export const BoldS = styled.span`
  font-weight: 700;
`;

export const HeroBtnS = styled.button`
  width: 320px;
  font-weight: 400;
  border: 2px solid var(--color-orange);
  transition: background-color 0.5s ease;
  
  
`;

export const HeroImageS = styled.img`
  max-width: 680px;
`;
