import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { ListItemsType } from '../types/ListItemsType';
import { List, ListSubheader } from '@mui/material';
import { useState } from 'react';

interface Props {
  listItems: ListItemsType[]
  onClick: (index: number) => void
  activeIndex: number
}

export default function MenuList(props: Props) {
  // const [activeIndex, setActive] = useState(0);
  // const handleClick = (index: number) => {
  //   setActive(index);
  // }
  return (
    <Box sx={{ width: '100%', height: "100vh", maxWidth: 300, bgcolor: 'background.paper' }}>
      <nav aria-label="main folders">
        <List subheader={<ListSubheader sx={{paddingTop: 2, paddingBottom: 2, whiteSpace: "nowrap"}}>コンポーネント一覧</ListSubheader>}>
          {
            props.listItems.map((listItem, index) => (
              <ListItem disablePadding key={index} onClick={(() => props.onClick(index))}>
                <ListItemButton selected={index === props.activeIndex ? true : false}>
                  <ListItemText primary={listItem.label} />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </nav>
    </Box>
    //   {/* <ListItem disablePadding>
    //           <ListItemButton>
    //             <ListItemIcon>
    //               <InboxIcon />
    //             </ListItemIcon>
    //             <ListItemText primary="Inbox" />
    //           </ListItemButton>
    //         </ListItem>
    //         <ListItem disablePadding>
    //           <ListItemButton selected>
    //             <ListItemIcon>
    //               <DraftsIcon />
    //             </ListItemIcon>
    //             <ListItemText primary="Drafts" />
    //           </ListItemButton>
    //         </ListItem>
    //       </List>
    //   </nav>
    //   <Divider />
    //   <nav aria-label="secondary mailbox folders">
    //     <List>
    //       <ListItem disablePadding>
    //         <ListItemButton>
    //           <ListItemText primary="Trash" />
    //         </ListItemButton>
    //       </ListItem>
    //       <ListItem disablePadding>
    //         <ListItemButton component="a" href="#simple-list">
    //           <ListItemText primary="Spam" />
    //         </ListItemButton>
    //       </ListItem>
    //     </List>
    //   </nav>
    // </Box> */}
  );
}