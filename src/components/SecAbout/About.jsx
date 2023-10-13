import ceoImage from '../Images/Heroimg.png';
import { AboutContainerS, AboutContentS, AboutItemS, AboutListS, AboutS } from './About.Styled';

const About = () => {
  return (
    <AboutS>
      <AboutContainerS>
        <AboutContentS>
        <h2>About us</h2>
          <AboutListS>
            <AboutItemS>
              <p>
              VNV Solutions is aimed at supporting entrepreneurs who want to achieve high results and are ready to grow and optimize their businesses.
              </p>
            </AboutItemS>
            <AboutItemS>
              <p>
              Our sites are the best solution for your business and a full-fledged sales channel that constantly brings new customers.
              </p>
            </AboutItemS>
            <AboutItemS>
              <p>
              In our work, we use a variety of modern tools to meet the needs of the client and create a quality product!
              </p>
            </AboutItemS>
            <AboutItemS>
              <p>
              1100+ successfully completed projects and satisfied customers!
              </p>
            </AboutItemS>
            <AboutItemS>
              <p>
              16+ countries of the world trust us with their projects and software
              </p>
            </AboutItemS>
            <AboutItemS>
              <p>
              77+ number of professionals in our team who know their business!
              </p>
            </AboutItemS>
          </AboutListS>
        </AboutContentS>
        <div>
          <img src={ceoImage} width="480" alt="ceoImage" />
          <h3>Lubomyr Lugniy CEO FOUNDER</h3>
          <p>We code beautiful and interactive Websites & eCommerce</p>
          <p>
            Monitoring the organization of the global process and the
            fulfillment of technical goals
          </p>
        </div>
      </AboutContainerS>
    </AboutS>
  );
};

export default About;
