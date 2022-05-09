import React from 'react'
import { Link } from 'react-router-dom'

import './SigUpScreen.css'
function SigInScreen() {
  return (
    <div className='sigupScreen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type='email'></input>
        <input placeholder='Password' type='password'></input>

        <Link
          className='justClickMe'
          to='browser'
          style={{
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          {' '}
          Just click me!
        </Link>

        <h4>
          <span>New to Netflix?</span>
          Sign Up Now.
        </h4>
      </form>
    </div>
  )
}

export default SigInScreen
