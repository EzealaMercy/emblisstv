import React from 'react';
import { categories } from '../../Utility/data';
import { Stack} from '@mui/material';
import './sidebar.css'


const Sidebar = ({selectedCategory, setselectedcategory}) => {
  return (
    <Stack direction={'row'} sx={{overflowY:'auto', backgroundColor : 'rgba(0, 0, 0, 0.978)', height:{sx: 'auto', md: '90%'},
    flexDirection: {md: 'column'}}}>
        {categories.map((category) => (
            <button className='category-btn' style={{background: category.name === selectedCategory && 'rgba(255, 0, 0, 0.923)', color: 'white', borderRadius: '20px'}} key={category.name}
              onClick={()=> setselectedcategory(category.name)}
            >
                <span className='category-icon' style={{color: category.name === selectedCategory? 'white' : 'rgba(255, 0, 0, 0.923)'}}>{category.icon}</span>
                <span className='category-name' style={{opacity: category.name === selectedCategory? '1' : '0.8'}}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar