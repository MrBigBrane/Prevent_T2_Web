'use client';

import Box from '@mui/material/Box';
import userViewInitialize from '../serverfunctions/coach/coachview/userViewInitialize'
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { useState } from 'react';

// Will add an "invite" button somewhere on the screen that will redirect to page specifying invite code for each class

// Need to add prop to handle selection of tree item other than the tree titles
// This can be done by ignoring clicks on items with ids that are the same as any of a coach's join codes

// When a child element is clicked (which needs to have the name of the individual as the label) it should
// redirect dynamically to that person's profile which displays their graphs and their coach table


export default function BasicRichTreeView({ data, codes }) {

  const handleItemSelectionToggle = (event, itemId, isSelected) => {
    if(isSelected) {
      let matches = false;
      for(let i = 0; i < codes.length; i++){
        if(itemId === codes[i]){
          matches = true;
          break;
        }
      }
    if(!matches){
      userViewInitialize(itemId);
    }
  }
    
  };

  return (
    <>
        <Box sx={{ minHeight: 200, minWidth: 300, flexGrow: 1 }}>
          <RichTreeView
            items={data}
            onItemSelectionToggle={handleItemSelectionToggle}
          />
        </Box>
    </>
      
  );
}

