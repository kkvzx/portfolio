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
const FORM_ENDPOINT = "https://formsubmit.co/0a2e73ee5eeb3a0c900ca5e8e3823519";

const Contact = () => {
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <ContactWrapper id="contact">
      <FormSection>
        <AboutTitle>Contact me</AboutTitle>
        <AboutMeText>Have a question or want to work together?</AboutMeText>
        <Forms action={FORM_ENDPOINT} method="POST">
          <Input
            name="name"
            type="text"
            className="left"
            placeholder="Name"
            required
          />
          <Input
            name="email"
            type="email"
            className="right"
            placeholder="Email"
            required
          />
          <InputSubject
            name="_subject"
            type="text"
            placeholder="Subject"
            required
          />
          <Input type="hidden" name="_captcha" value="false" />

          <InputMessage name="message" placeholder="Message" />
          <InputButton
            type="submit"
            value="Send message!"
            onClick={(e) => handleSubmit(e)}
            required
          />
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
