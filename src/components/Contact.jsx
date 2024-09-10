import React from 'react'
import { base_url } from '../utils/constants'
import useCachedData from './useCachedData'
import '../Contacts.css'

const Contact = () => {

  const { data = ['Wait...'] } = useCachedData(
    'planets',
    `${base_url}/v1/planets`
  );
  const planets = data.map(item => item.name);

  return (
    <form className="containerContact">
      <label>First Name
        <input type="text" name="firstname" placeholder="Your name.." />
      </label>
      <label>Last Name
        <input type="text" name="lastname" placeholder="Your last name.." />
      </label>
      <label>Planets
        <select name="planet">
          {
            planets.map((item) => <option key={item} value={item}>{item}</option>)
          }
        </select></label>

      <label>Subject
        <textarea name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Contact