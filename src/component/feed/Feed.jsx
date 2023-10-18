import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { Box, Stack, Typography } from '@mui/material';
import './feed.css';
import { fetchApi } from '../../Utility/fetchApi';
import Videos from '../videos/Videos';

const Feed = () => {
  const [selectedCategory, setselectedcategory] = useState('Rokmovies');
  const [videos, setvideos] = useState([]);

  useEffect(()=>{
    fetchApi(`search?part=snippet&q=${selectedCategory}`)
     .then((data) => setvideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{background: 'black', flexDirection: {sx:'column', md: 'row'}}}>
        <Box sx={{mt:'15px', height: {sx: 'auto', md:'100vh'},
         borderRight:'1px solid whitesmoke', px: { sx: 0}}}>
            <Sidebar selectedCategory= {selectedCategory}
             setselectedcategory= {setselectedcategory}/>
        </Box>
        <Box  sx={{overflowY:'auto', height: '90vh', flex: 2, padding:{md:'15px'}}} className='video-feed'>
          <Typography p={2} variant='h5' fontWeight={'bold'} mb={2} sx={{color: 'white'}}>
            {selectedCategory}<span style={{color:'#f31503', marginLeft: '10px'}}>videos</span>
          </Typography>

          <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed