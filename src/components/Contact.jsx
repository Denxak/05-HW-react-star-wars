import React from 'react'
import { base_url } from '../utils/constants'
import useCachedData from './useCachedData'
// import '../Contacts.css'

const Contact = () => {

  const { data = ['Wait...'] } = useCachedData(
    'planets',
    `${base_url}/v1/planets`
  );
  const planets = data.map(item => item.name);

  return (
    <form className="rounded-[5px] bg-[#f2f2f2] p-5">
      <label className='w-full text-red-color'>First Name
        <input className='w-full p-3 border-[#ccc] border border-solid rounded-[4px] mt-1.5 mb-4 resize-y' type="text" name="firstname" placeholder="Your name.." />
      </label>
      <label className='w-full text-red-color'>Last Name
        <input className='w-full p-3 border-[#ccc] border border-solid rounded-[4px] mt-1.5 mb-4 resize-y' type="text" name="lastname" placeholder="Your last name.." />
      </label>
      <label className='w-full text-red-color'>Planets
        <select name="planet" className='w-full p-3 border-[#ccc] border border-solid rounded-[4px] mt-1.5 mb-4 resize-y'>
          {
            planets.map((item) => <option key={item} value={item}>{item}</option>)
          }
        </select></label>

      <label className='w-full text-red-color'>Subject
        <textarea className='h-[200px] w-full p-3 border-[#ccc] border border-solid rounded-[4px] mt-1.5 mb-4 resize-y' name="subject" placeholder="Write something.."></textarea>
      </label>
      <button className='bg-[#04AA6D] text-white p-3 py-5 border-none rounded-[4px] cursor-pointer hover:bg-[#45a049]' type="submit">Submit</button>
    </form>
  )
}

export default Contact