import { nanoid } from "nanoid";
import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineFilePdf,
} from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import {
  TechnologiesLi,
  TechnologiesList,
  TechnologiesUsed,
} from "../ProjectBox/ProjectBoxElements";
import { technologiesData } from "../AboutSection/TechnologiesData";
import {
  PersonalInfomrationContainer,
  ResumeContainer,
  NameH1,
  FirstContainer,
  Title,
  SecondContainer,
  StandardText,
  IconSpan,
  SecondaryHeader,
  ThirdDiv,
  NormalText,
  FourthDiv,
  FifthUl,
  FifthLi,
  SixthDiv,
  FifthDiv,
  SeventhDiv,
  ExpContainer,
  Colored,
  Bolder,
  EducationDiv,
  EightDiv,
  DownloadLink,
  AddressTo,
} from "./ResumeElements";

const cv = require("../../files/Curriculum_vitae_Kazusek_Konrad.pdf");

const Resume = () => {
  return (
    <ResumeContainer>
      <FirstContainer>
        <NameH1>Konrad Kazusek</NameH1>
        <Title>Junior Front-end developer</Title>
      </FirstContainer>
      <SecondContainer>
        <StandardText>
          <IconSpan>
            <AiOutlineMail></AiOutlineMail>
          </IconSpan>{" "}
          <AddressTo href="mailto:konrad.kazusek3@gmail.com">
            konrad.kazusek3@gmail.com
          </AddressTo>
        </StandardText>
        <StandardText>
          <IconSpan>
            <AiOutlinePhone></AiOutlinePhone>
          </IconSpan>
          <AddressTo href="tel:+48-737-919-224">+48 737 919 224</AddressTo>
        </StandardText>
        <StandardText>
          <IconSpan>
            <AiOutlineHome></AiOutlineHome>
          </IconSpan>{" "}
          Katowice, Polska
        </StandardText>
        <StandardText>
          <IconSpan>
            <FiMonitor></FiMonitor>
          </IconSpan>{" "}
          <AddressTo href="http://www.konrvdkvzxsek.com/" target="_blank">
            www.konrvdkvzxsek.com
          </AddressTo>{" "}
        </StandardText>
        <StandardText>
          <IconSpan>
            <AiFillLinkedin></AiFillLinkedin>
          </IconSpan>
          <AddressTo
            href="https://www.linkedin.com/in/konrad-kazusek-630b1716a/"
            target="_blank"
          >
            linkedin.konradkazusek.com
          </AddressTo>
        </StandardText>
        <StandardText>
          <IconSpan>
            <AiFillGithub></AiFillGithub>
          </IconSpan>{" "}
          <AddressTo href="https://github.com/kkvzx" target="_blank">
            github.kkvzx.com
          </AddressTo>
        </StandardText>
      </SecondContainer>
      <ThirdDiv>
        <SecondaryHeader>About me</SecondaryHeader>
        <NormalText>
          I recently started my journey in tech industry after graduation
          Aircraft Engineering at Silesian University of Technology. I'm self
          motivated learner with strong organisation, time managment and
          communication skills. I'm able to work independently and
          collaboratively in a team with a meticulous attention to detail.
        </NormalText>
      </ThirdDiv>
      <FourthDiv>
        <SecondaryHeader>Key skills</SecondaryHeader>
        <NormalText>
          <TechnologiesUsed>
            <TechnologiesList>
              {technologiesData.map((singleObj) => (
                <TechnologiesLi key={singleObj.id}>
                  {singleObj.name}
                </TechnologiesLi>
              ))}
            </TechnologiesList>
          </TechnologiesUsed>
        </NormalText>
      </FourthDiv>
      <FifthDiv>
        <SecondaryHeader>Interests</SecondaryHeader>
        <NormalText>
          <FifthUl>
            <FifthLi>Developing general development skills</FifthLi>
            <FifthLi>Design Proccess</FifthLi>
            <FifthLi>Technical processes</FifthLi>
            <FifthLi>Mechanical Engineering</FifthLi>
            <FifthLi>Mountaing hiking</FifthLi>
          </FifthUl>
        </NormalText>
      </FifthDiv>
      {/* ================= */}
      <EducationDiv>
        <SecondaryHeader>Education</SecondaryHeader>
        <NormalText>
          <Bolder>2015- 2018:</Bolder> Extramural three-year IT technical
          college
          <br />
          <Bolder>2015- 2018:</Bolder> High School in Poręba by the name of
          Nicolaus Copernicus
          <br />
          <Bolder>2018- 2022:</Bolder> Silesian University of Technology
          <br /> Facult of Transport and Aviation Engineering -{" "}
          <Colored>ENG title</Colored>
          <br />
        </NormalText>
      </EducationDiv>
      {/* ================= */}

      <SixthDiv>
        <SecondaryHeader>Work History</SecondaryHeader>
        <ExpContainer>
          <NormalText>
            <Bolder>Linetech Aircraft Maintenance in Pyrzowice</Bolder>
            <br />
            <Bolder>2018- 2021</Bolder>
            <br />
            <Bolder>Position:</Bolder> Apprentice
            <br />
            -Assistance in the work of aviation mechanics during daily repairs.
            <br />
            -Gaining knowledge in the field of technical documentation of
            aircraft systems
          </NormalText>
        </ExpContainer>
        <ExpContainer>
          <NormalText>
            <Bolder>Aircom in Pyrzowice</Bolder>
            <br />
            <Bolder>2018- 2021</Bolder>
            <br />
            <Bolder>Position:</Bolder> Apprentice
            <br />
            -Assistance in the work of aviation mechanics during daily repairs.
            <br />
            -Gaining knowledge in the field of technical documentation of
            aircraft systems
          </NormalText>
        </ExpContainer>
        <ExpContainer>
          <NormalText>
            <Bolder>Wroclaw Airport Maintanance Services - Ryanair </Bolder>
            <br />
            <Bolder>2022- 2022</Bolder>
            <br />
            <Bolder>Position:</Bolder> Mechanic
            <br />
            -Work of aviation mechanics during periodical services.
            <br />
            -Gaining knowledge in the field of technical documentation of
            aircraft systems
          </NormalText>
        </ExpContainer>
      </SixthDiv>
      <EightDiv>
        <SecondaryHeader>Foreign Languages</SecondaryHeader>
        <NormalText>
          English - very good written and spoken knowledge
        </NormalText>
      </EightDiv>
      <SeventhDiv>
        <SecondaryHeader>Soft skills</SecondaryHeader>
        <NormalText>
          <TechnologiesUsed>
            <TechnologiesList>
              <TechnologiesLi>
                Ability to quickly learn and adapt to working conditions,
              </TechnologiesLi>
              <TechnologiesLi>Ability to work under pressure</TechnologiesLi>
              <TechnologiesLi>Good manners</TechnologiesLi>
              <TechnologiesLi>
                Communicativeness, optimism and ease of working in a team
              </TechnologiesLi>
              <TechnologiesLi>
                Punctuality, diligence, good time organization
              </TechnologiesLi>
              <TechnologiesLi>Ability to manage human resources</TechnologiesLi>
              <TechnologiesLi>Advanced knowledge of MS Office</TechnologiesLi>
              <TechnologiesLi>Availability for full time job</TechnologiesLi>
            </TechnologiesList>
          </TechnologiesUsed>
        </NormalText>
      </SeventhDiv>
      <DownloadLink href={cv} download={cv}>
        <AiOutlineFilePdf />
      </DownloadLink>
    </ResumeContainer>
  );
};

export default Resume;
