import React from 'react'
import Trader from './Trader';
import AllNews from './AllNews';

export default function index() {
  return (
    <div className='flex flex-col gap-4'>
       <Trader/>
       <AllNews/>
    </div>
  )
}
