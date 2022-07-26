import AnimatedTitle from "../AnimatedTitle";
import { PortfolioText } from "../projects/ProjectsElements";
import {
  ContactTitleContainer,
  ContactWrapper,
  Forms,
  FormSection,
  InfoDiv,
  InfoTextBig,
  Input,
  InputButton,
  InputMessage,
  InputSubject,
  SingleInfo,
  AddresTo,
} from "./ContactElements";
const mapPhoto = require("../../img/map.png");
const FORM_ENDPOINT = "https://formsubmit.co/56cf9866875d08bc8c85529c9d77b639";

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

          <InputMessage name="message" placeholder="Message" />
          <InputButton type="submit" value="Send message!" required />
        </Forms>
      </FormSection>
      <InfoDiv>
        <SingleInfo>
          <InfoTextBig className="name">KONRAD KAZUSEK</InfoTextBig>{" "}
        </SingleInfo>
        <SingleInfo>
          <InfoTextBig>
            <AddresTo href="mailto:konrad.kazusek@gmail.com">
              KONRAD.KAZUSEK3@GMAIL.COM
            </AddresTo>
          </InfoTextBig>
        </SingleInfo>
        <SingleInfo>
          <InfoTextBig>
            <AddresTo href="tel:+48-737-919-224">+48 737 919 224</AddresTo>
          </InfoTextBig>
        </SingleInfo>
      </InfoDiv>
    </ContactWrapper>
  );
};

export default Contact;
