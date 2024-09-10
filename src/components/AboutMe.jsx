import React from 'react'
import { base_url } from '../utils/constants'
import useCachedData from './useCachedData'

const AboutMe = () => {

  const { data: hero } = useCachedData(
    'cachedHero',
    `${base_url}/v1/peoples/1`
  );

  return (
    <>
      {(!!hero) &&
        <div className='fs-3 lh-lg text-justify ms-5'>
          <p><span className='display-3'>name:</span> {hero.name}</p>
          <p><span className='display-3'>gender:</span> {hero.gender}</p>
          <p><span className='display-3'>birth_year:</span> {hero.birth_year}</p>
          <p><span className='display-3'>height:</span> {hero.height}</p>
          <p><span className='display-3'>mass:</span> {hero.mass}</p>
          <p><span className='display-3'>skin_color:</span> {hero.skin_color}</p>
          <p><span className='display-3'>hair_color:</span> {hero.hair_color}</p>
          <p><span className='display-3'>eye_color:</span> {hero.eye_color}</p>
        </div>
      }
    </>
  )
}

export default AboutMe