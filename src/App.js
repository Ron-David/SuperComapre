import Box from '@mui/material/Box';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import ProductsScreen from './screens/ProductsScreen';
import ResultsScreen from './screens/ResultsScreen';
import { productsList, storesList } from './services/superGetService';
import * as S from './config/styles'

function App() {
  const [clicked, setClicked] = useState(false)
  const [selected, setSelected] = useState([])

  const handleSelect = id => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => id !== s))
    } else {
      setSelected([...selected, id])
    }
  }


  return (
    <Box sx={S.container}>
      <Grid container sx={S.box}>
        <Grid item xs={12} >
          <Typography>{!clicked ? "Choose Products:" : "Results:"}</Typography>
        </Grid>
        {
          !clicked ? <ProductsScreen products={productsList} selected={selected} handleSelect={handleSelect} onCompare={() => setClicked(true)} />
            : <ResultsScreen data={storesList} selected={selected} onBack={() => setClicked(false)} />
        }
      </Grid>
    </Box>
  );
}

export default App;
