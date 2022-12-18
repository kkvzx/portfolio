import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import React from 'react';
import { clouds } from '../../components/Hero/cloudsData';
import { CloudImg, CloudsContainer } from '../../components/Hero/HeroElements';
import {
  CommunicateContainer,
  FlexContainer,
  HeaderText,
  InlineText,
  MainHeader,
} from './UnderMaintananceElements';

// clouds animation
const variants = {
  hiddenL: { x: -2000 },
  hiddenR: { x: 2000 },
  showL: {
    x: [-10, 10, -10],
    y: [-5, 5, -5],
    transition: {
      repeat: Infinity,
      duration: 10,
      type: 'spring',
      stiffness: 100,
    },
  },
  showR: {
    x: [10, -10, 10],
    y: [5, -5, 5],
    transition: {
      repeat: Infinity,
      duration: 10,
      type: 'spring',
      stiffness: 200,
    },
  },
};

const UnderMaintenance = () => {
  return (
    <FlexContainer>
      <CloudsContainer
        as={motion.div}
        initial={{ y: -1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {clouds.map((singleObj) => {
          return (
            <CloudImg
              key={nanoid()}
              alt={'cloud-png'}
              src={singleObj.link}
              top={singleObj.top}
              bottom={singleObj.bottom}
              left={singleObj.left}
              right={singleObj.right}
              width={singleObj.width}
              as={motion.img}
              variants={variants}
              initial={singleObj.direction === 'left' ? 'hiddenL' : 'hiddenR'}
              animate={singleObj.direction === 'left' ? 'showL' : 'showR'}
            />
          );
        })}
      </CloudsContainer>
      <CommunicateContainer>
        <MainHeader>Website is under maintenance.</MainHeader>
        <HeaderText>but I've got something</HeaderText>
        <HeaderText>special for you.</HeaderText>
        <InlineText>Please check back soon.</InlineText>
      </CommunicateContainer>
    </FlexContainer>
  );
};

export default UnderMaintenance;
