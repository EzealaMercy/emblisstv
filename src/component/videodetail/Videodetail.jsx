import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Typography, Box, Stack} from '@mui/material';
import  {CheckCircle} from '@mui/icons-material';
import Videos from '../videos/Videos';
import { fetchApi } from '../../Utility/fetchApi';
import './videodetail.css'

const Videodetail = () => {
  const [videodetail, setvideodetail] = useState(null);
  const[videos, setvideos] = useState(null);
  const {id} = useParams();

  useEffect(()=>{
    fetchApi(`videos?part=snippet, statistics&id=${id}`)
      .then((data) => setvideodetail(data.items[0]));

    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setvideos(data.items));
  }, [id]);
  if (!videodetail?.snippet) return 'Loading...';
  
  const {snippet : {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videodetail
  return (
    <Box className='video-details' minHeight={'95vh'}>
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position:'sticky', top:'86px'}}>
            <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`} className="react-player" sx={{ width: '300px' }} controls/>
            <Typography marginLeft='15px' marginTop='10px' sx={{color:'whitesmoke'}}>
              {title}
            </Typography>
            <Stack direction={'row'} justifyContent={'space-between'} sx={{color:'whitesmoke'}} py={1} px={2}>
              <Link className='link' to={`/channel/${channelId}`}>
                <Typography variant={{sm: 'subtitle1', md:'h6'}} color={'whitesmoke'}>
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'5px'}}/>
                </Typography>
              </Link>
              <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box className='video-box' px={2} py={{md:1, xs:0}} justifyContent={'center'} alignItems={'center'}>
        <Videos className='video' videos={videos} direction={'column'}/>
        </Box>
      </Stack>
    </Box>
  )
}

export default Videodetail