import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, IconButton, Paper} from '@mui/material';
import {YouTube, KeyboardVoice, Search, VideoCall, Home} from '@mui/icons-material' ;
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setsearchTerm] = useState('');

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      setsearchTerm('');
    }
  }
  
  return (
      <div>
        <div className="nav">
          <Link to={'/'} className='youtube'>
              <YouTube className='yutube'/>
              <h2>Embliss<span>Tv</span></h2>
          </Link>
          <div className="search">
            <Paper className="search-items" component={'form'} onSubmit={handlesubmit}>
              <input value={searchTerm} onChange={(e)=> setsearchTerm(e.target.value)} 
              placeholder='search movie name...'/>
              <IconButton className='icon-button' type='submit' sx={{ color: 'grey', position: 'absolute', right:'11%'}}>
              <Search className='search-icon'/>
              </IconButton>
              <KeyboardVoice className='keyvoice' sx={{ color:'red', marginLeft:'10px', cursor:'pointer'}}/>
            </Paper>
          </div>
          <div className="account">
            <VideoCall className='videocall'  sx={{ color:'white', marginLeft:'10px', cursor:'pointer'}}/>
            <Link to='/'>
              <IconButton>
                <Home className='home-btn' sx={{ color:'red', marginLeft:'10px', cursor:'pointer'}}/>
              </IconButton>
            </Link>
            <Avatar className='avatar' src = 'images/mercy.jpg'/>
          </div>
        </div>
        <div className="search-videos">
            <Paper className="search-items" component={'form'} onSubmit={handlesubmit}>
              <input value={searchTerm} onChange={(e)=> setsearchTerm(e.target.value)} 
              placeholder='search movie name...'/>
              <IconButton className='icon-button' type='submit' sx={{ color: 'grey', position: 'absolute', right:'11%'}}>
              <Search className='search-icon'/>
              </IconButton>
              <KeyboardVoice className='keyvoice' sx={{ color:'red', marginLeft:'10px', cursor:'pointer'}}/>
            </Paper>
          </div>
      </div>
  )
}

export default Navbar