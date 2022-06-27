import React from "react";
import { AboutMeText, AboutTitle } from "../AboutSection/AboutElements";
import {
  ContactWrapper,
  Forms,
  FormSection,
  InfoDiv,
  InfoText,
  Input,
  InputButton,
  InputMessage,
  InputSubject,
  MapImg,
  MapSection,
} from "./ContactElements";
const mapPhoto = require("../../img/map.png");

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <FormSection>
        <AboutTitle>Contact me</AboutTitle>
        <AboutMeText>
          Im intrested in working opportunities. Do not hesitate to use form
          below.
        </AboutMeText>
        <Forms>
          <Input type="text" className="left" placeholder="Name" />
          <Input type="email" className="right" placeholder="Email" />
          <InputSubject type="text" placeholder="Subject" />
          <InputMessage placeholder="Message" />
          <InputButton type="submit" value="Send message!" />
        </Forms>
      </FormSection>
      <MapSection>
        <MapImg src={mapPhoto} />
        <InfoDiv>
          <InfoText>Konrad Kazusek</InfoText>
          <InfoText>Poland, ul.Dąbrowskiego</InfoText>
          <InfoText>2/7, 40-035 Katowice</InfoText>
          <InfoText className="email">@:</InfoText>
          <InfoText>konrad.kazusek3@gmail.com</InfoText>
        </InfoDiv>
      </MapSection>
    </ContactWrapper>
  );
};

export default Contact;
