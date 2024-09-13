import React from 'react'
import { starWarsInfo } from '../utils/constants'

const StarWars = () => {
  return (
    <div className='text-3xl leading-normal text-justify tracking-widest'>{starWarsInfo}</div>
  )
}

export default StarWars