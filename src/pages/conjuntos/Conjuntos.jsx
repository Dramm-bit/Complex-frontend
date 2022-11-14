import Grid from '@mui/material/Grid'
import { Box } from '@mui/system';
import React from "react";
import Card  from '../../components/card/Card.jsx';
import { Header } from '../../components/header/Header.jsx';
import { fakeConjuntos } from "../../utils/fakedata/fakeConjuntos";

export function Conjuntos(){
  return (
    <div>
      <Header />
      <Box sx={{width: '100%'}} >    
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {fakeConjuntos && fakeConjuntos.map(conjunto =><Card key={conjunto.id} text={conjunto.ciudad} name={conjunto.Nombre} />)}
        </Grid>
      </Box>
    </div>
  )
}