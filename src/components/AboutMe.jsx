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
        <div className='text-3xl leading-normal text-justify tracking-widest ml-8'>
          {Object.keys(hero).map((key, index) => <p key={key}><span className='text-[1.5em] capitalize'>{key.replace('_', ' ')}:</span> {hero[key]}</p>)}
        </div>
      }
    </>
  )
}

export default AboutMe