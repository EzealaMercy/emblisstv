import { Box, Stack } from '@mui/material'
import React from 'react';
import Vidcard from '../vidcard/Vidcard';
import './video.css'

const Videos = ({videos}) => {
  if(!videos?.length) return 'loading...'
  return (
    <Stack className='video' direction={'row'} flexWrap={'wrap'} justifyContent={'start'} gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <Vidcard video={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos