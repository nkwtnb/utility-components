import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import List from "../components/List";
import { Container, Drawer } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Contains from '../components/Contains';

const Home: NextPage = () => {
  return (
    <Container fixed>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          bgcolor: 'background.paper',
        }}
      >
        <Box>
          <List menuItems={["1", "2", "3"]}/>
        </Box>
        <Box width={"100%"} sx={{bgcolor: 'white'}}>
          <Contains></Contains>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
