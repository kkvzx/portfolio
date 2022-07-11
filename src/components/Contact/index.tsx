import React from "react";
import {
  AboutMeText,
  AboutmeTitleContainer,
} from "../AboutSection/AboutElements";
import AnimatedTitle from "../AnimatedTitle";
import { PortfolioText } from "../projects/ProjectsElements";
import {
  ContactTitleContainer,
  ContactWrapper,
  Forms,
  FormSection,
  InfoDiv,
  InfoText,
  InfoTextBig,
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
  return (
    <ContactWrapper id="contact">
      <FormSection>
        <ContactTitleContainer>
          <AnimatedTitle
            text="Contact me"
            color="var(--additional-color)"
            size="var(--big-font-size)"
            sizesmall="var(--big-font-sizeMobile)"
            colorSwap={false}
          />
        </ContactTitleContainer>
        <PortfolioText>Have a question or want to work together?</PortfolioText>
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
          <InputButton type="submit" value="Send message!" required />
        </Forms>
      </FormSection>
      <MapSection>
        <MapImg src={mapPhoto} />
        <InfoDiv>
          <InfoTextBig>KONRAD KAZUSEK</InfoTextBig>
          <InfoText>EMAIL:</InfoText>
          <InfoTextBig>KONRAD.KAZUSEK3@GMAIL.COM</InfoTextBig>
          <InfoText>PHONE NUMBER:</InfoText>
          <InfoTextBig>+48 737 919 224</InfoTextBig>
        </InfoDiv>
      </MapSection>
    </ContactWrapper>
  );
};

export default Contact;
