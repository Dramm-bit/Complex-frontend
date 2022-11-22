import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { MyButton } from '../button/MyButton';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({text, name, linkName, objectInfo}) {
  return (
    <Card sx={{ maxWidth: 345, margin: 10 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.blogs.es/d80b74/luffy-en-one-piece/1366_2000.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
      <MyButton data={objectInfo} to={linkName}>Ver conjunto</MyButton>
      </CardActions>
    </Card>
  );
}