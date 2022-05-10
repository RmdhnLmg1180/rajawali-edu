import React, { ReactNode, useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

function ButtonHabib({ children }: { children: ReactNode }) {
  const [sedangMouse, setsedangMouse] = useState(false);

  if (!sedangMouse) {
    return (
      <p onMouseEnter={() => setsedangMouse(true)} onMouseLeave={() => setsedangMouse(false)}>
        arahin mouse kesini
      </p>
    );
  }
  return (
    <button
      style={{
        background: sedangMouse ? 'white' : 'black',
      }}
      onMouseEnter={() => setsedangMouse(true)}
      onMouseLeave={() => setsedangMouse(false)}
    >
      {' '}
      {children}
    </button>
  );
}

export default function Index() {
  return (
    <Box
      sx={{
        backgroundColor: 'Yellow',
      }}
    >
      <ButtonHabib>habibie</ButtonHabib>
    </Box>
  );
}
