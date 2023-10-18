import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { vidurl, channelurl } from '../../Utility/data';
import './vidcard.css'

const Vidcard = ({ video: {id: {videoId}, snippet}}) => {
  return (
    <Card className='card' sx={{ boxShadow:'none', borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}` : vidurl}   className='head' >
        <CardMedia className='media' image= {snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ height:140}} />
      </Link>
      <CardContent className='card-content' sx={{ height: {md: '106px'}}}>
        <Link to= {videoId? `/video/${videoId}` : channelurl}  className='head' >
          <Typography variant='subtitle1' fontWeight={'bold'} color={'whitesmoke'} width={'90%'}>
            {snippet?.title.slice(0,60)}
          </Typography>
        </Link>
        <Link to= {snippet?.channelId ? `/channel/${snippet?.channelId}` : ''}   className='head' >
          <Typography variant='subtitle2' fontWeight={'bold'} color={'gray'}>
            {snippet?.channelTitle}
            <CheckCircle sx={{fontSize: 12, color:'gray', ml:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default Vidcard