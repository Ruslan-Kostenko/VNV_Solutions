import styled from 'styled-components';

export const AboutS = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;

  height: 100vh;
  width: 100%;
  position: relative;
`;

export const AboutContainerS = styled.div`
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
`;

export const AboutContentS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-right: 80px;
`;

export const AboutListS = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const AboutItemS = styled.li`
  padding: 8px;

  max-width: 320px;
  min-height: 80px;
  border-radius: 12px;
  border: 1px solid #FFF;
`;
