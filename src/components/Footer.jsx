import React from "react";
import {
  Container,
  Logo,
  Top,
  Middle,
  BlocLiens,
  MiddleBlocs,
  Linkss,
  TitleMidSize,
  P,
  Down,
} from "../style/FooterCss";
import Facebook from "../images/facebook.ico";
import Twitter from "../images/twitter.ico";
import Instagram from "../images/instagram.ico";
import Linkedin from "../images/linkedin.ico";

const Footer = () => {
  return (
    <Container>
      <Top>
        <Linkss href="https://www.facebook.fr/">
          <Logo src={Facebook} alt="C'est le logo de Facebook" />
        </Linkss>
        <Linkss href="https://www.twitter.fr/">
          <Logo src={Twitter} alt="C'est le logo de Twitter" />
        </Linkss>
        <Linkss href="https://www.linkedin.com/feed/">
          <Logo src={Linkedin} alt="C'est le logo de Linkedin" />
        </Linkss>
        <Linkss href="https://www.instagram.fr/">
          <Logo src={Instagram} alt="C'est le logo de Instagram" />
        </Linkss>
      </Top>
      <Middle>
        <MiddleBlocs>
          <TitleMidSize>Wild Movie</TitleMidSize>
          <P>
            We are pleased to introduce you to our Wild Movie website. Every
            cinema enthusiast can find a lot of information on existing movies,
            and sort them as they please.
          </P>
        </MiddleBlocs>
        <MiddleBlocs>
          <TitleMidSize>About Us</TitleMidSize>
          <P>
            4 wilders studying Web-Developping to get the graduation the next
            year. We are passionate by the cinema and that is why we have
            decided to create a website with React, Node, etc.
          </P>
        </MiddleBlocs>
        <MiddleBlocs>
          <TitleMidSize>Useful Links</TitleMidSize>
          <BlocLiens>
            <Linkss href="https://www.allocine.fr/">
              Allociné (Info service about cinema)
            </Linkss>
            <Linkss href="https://www.imdb.com/">
              Imdb (Info service about cinema)
            </Linkss>
            <Linkss href="http://netflix.com/">
              Netflix (Streaming service)
            </Linkss>
            <Linkss href="https://www.primevideo.com/">
              Amazon Prime Video (Streaming service)
            </Linkss>
            <Linkss href="http://jexoom.com/">
              Jexoom (Free Streaming service)
            </Linkss>
          </BlocLiens>
        </MiddleBlocs>
      </Middle>
      <Down>
        <P>© 2020 Copyright: Wild Movie</P>
      </Down>
    </Container>
  );
};

export default Footer;
