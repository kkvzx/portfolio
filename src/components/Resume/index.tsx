import { nanoid } from "nanoid";
import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiFillLinkedin,
  AiFillGithub,
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
} from "./ResumeElements";
import { Stroke } from "../AboutSection/AnimatedTechnologies/AnimatedTechnologiesElements.tsx";
import {
  ProjectInformation,
  SingleProject,
  InfoSection,
  ProjectTitle,
} from "../projects/ProjectsElements";

const Resume = () => {
  return (
    <ResumeContainer>
      <FirstContainer>
        <NameH1>Konrad Kazusek</NameH1>
        <Title>Front-end developer</Title>
      </FirstContainer>
      <SecondContainer>
        <StandardText left={true}>
          <IconSpan>
            <AiOutlineMail></AiOutlineMail>
          </IconSpan>{" "}
          konrad.kazusek3@gmail.com
        </StandardText>
        <StandardText left={false}>
          <IconSpan>
            <AiOutlinePhone></AiOutlinePhone>
          </IconSpan>{" "}
          +48 737 919 224
        </StandardText>
        <StandardText left={true}>
          <IconSpan>
            <AiOutlineHome></AiOutlineHome>
          </IconSpan>{" "}
          Katowice, Polska
        </StandardText>
        <StandardText left={false}>
          <IconSpan>
            <FiMonitor></FiMonitor>
          </IconSpan>{" "}
          www.konradkvzxsek.com
        </StandardText>
        <StandardText left={true}>
          <IconSpan>
            <AiFillLinkedin></AiFillLinkedin>
          </IconSpan>{" "}
          linkedin.konradkazusek.com
        </StandardText>
        <StandardText left={false}>
          <IconSpan>
            <AiFillGithub></AiFillGithub>
          </IconSpan>{" "}
          github.kkvzx.com
        </StandardText>
      </SecondContainer>
      <ThirdDiv>
        <SecondaryHeader>Summary</SecondaryHeader>
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
      <SixthDiv>
        <SecondaryHeader>Work History</SecondaryHeader>
        {/* <ExpContainer>
          <InfoSection>
            <ProjectTitle>
              Linetech Aircraft Maintenance in Pyrzowice
            </ProjectTitle>
            <ProjectTitle>Period of work:2018-2021</ProjectTitle>
            <ProjectInformation>Position: Apprentice</ProjectInformation>
            <ProjectInformation>
              Assistance in the work of aviation mechanics during daily repairs,
            </ProjectInformation>
            <ProjectInformation>
              Gaining knowledge in the field of reading complex documentation -
              similiar to technologies documentation
            </ProjectInformation>
          </InfoSection>
        </ExpContainer> */}
      </SixthDiv>
      <ThirdDiv>
        <SecondaryHeader>Education</SecondaryHeader>
        <TechnologiesList>
          <TechnologiesLi>
            2015- 2018: Extramural three-year IT technical college
          </TechnologiesLi>
          <TechnologiesLi>
            2015- 2018: High School in Poręba by the name of Nicolaus Copernicus
          </TechnologiesLi>
          <TechnologiesLi>
            2018- 2022: Silesian University of Technology, Facult of Transport
            and Aviation Engineering - <Stroke>ENG title</Stroke>
          </TechnologiesLi>
        </TechnologiesList>
      </ThirdDiv>
      <FourthDiv>
        <SecondaryHeader>Foreign Languages</SecondaryHeader>
        <NormalText>
          English - very good written and spoken knowledge
        </NormalText>
      </FourthDiv>
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
    </ResumeContainer>
  );
};

export default Resume;
