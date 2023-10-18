import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { fetchApi } from '../../Utility/fetchApi';
import Videos from '../videos/Videos';
import { useParams } from 'react-router-dom';

const SearchD = () => {
  const [videos, setvideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(()=>{
    fetchApi(`search?part=snippet&q=${searchTerm}`)
     .then((data) => setvideos(data.items))
  }, [searchTerm]);


  return (
        <Box  sx={{backgroundColor: 'black', overflowY:'auto', height: '90vh', flex: 2, padding:{md:'15px'}}}>
          <Typography p={2} variant='h5' fontWeight={'bold'} mb={2} sx={{color: 'white'}}>
            Search Results for: <span style={{color:'#f31503', marginLeft: '10px'}}>{searchTerm}</span> videos
          </Typography>

          <Videos videos={videos}/>
        </Box>
  )
}

export default SearchD