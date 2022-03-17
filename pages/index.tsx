import type { NextPage } from 'next'
import MenuList from "../components/MenuList";
import { Container, Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Contents from '../components/Contents';
import { ListItemsType } from '../types/ListItemsType';

const Home: NextPage = () => {

  const [activeIndex, setActive] = useState(0);
  const handleClick = (index: number) => {
    setActive(index);
  }

  const ListItems: ListItemsType[] = [
    {
      "label": "Square Image Card",
      "component": <>1</>
    },
    {
      "label": "Image Tile",
      "component": <>2</>
    },
    {
      "label": "OGP Card",
      "component": <>3</>
    },
  ]

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
          <MenuList listItems={ListItems} onClick={handleClick} activeIndex={activeIndex}/>
        </Box>
        <Box width={"100%"} sx={{bgcolor: 'white'}}>
          <Contents>
            {
              ListItems[activeIndex].component
            }
          </Contents>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
