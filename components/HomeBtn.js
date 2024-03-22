import React from 'react'
import Link from 'next/link'
import { House, HouseFill } from 'react-bootstrap-icons';

const HomeBtn = () => {
  return (
    <Link className='homeBtn' href="/"><HouseFill/></Link>
  )
}

export default HomeBtn
