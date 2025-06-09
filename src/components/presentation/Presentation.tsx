'use client';
import React from 'react';

import Box from '@mui/material/Box';

import InitialSection from './InitialSection';
import ObjectiveSection from './ObjectiveSection';
import StructureSection from './StructureSection';
import TestingSection from './TestingSection';
import ImprovementsSection from './ImprovementSection';
import DeploymentSection from './DeploymentSection';
import OrganizationSection from './OrganizationSection';
import DatabaseSection from './DatabaseSection';
import ImagesSection from './ImagesSection';

const Presentation = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <InitialSection />
      <ObjectiveSection />
      <StructureSection />
      <OrganizationSection />
      <DatabaseSection />
      <TestingSection />
      <ImprovementsSection />
      <DeploymentSection />
      <ImagesSection />
    </Box>
  );
};

export default Presentation;
