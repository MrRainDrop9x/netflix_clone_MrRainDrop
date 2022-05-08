import React, { useState } from 'react'
import './home.css'
import Rest from '../../components/restHomeScreen/Rest'
import SigUpScreen from '../SigUpScreen/SigUpScreen'
import { Link } from 'react-router-dom'
export default function Home() {
  const [sigin, setSigin] = useState(false)
  return (
    <>
      <div className='loginScreen'>
        <div className='loginScreen_background'>
          <img
            className='loginScreen_logo'
            src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
            alt='NETFLIX LOGO'
          />
          <button className='loginScreen_button' onClick={() => setSigin(true)}>
            Sign in
          </button>
          <div className='loginScreen_gradient'></div>
          <div className='loginScreen_body'>
            {sigin ? (
              <SigUpScreen />
            ) : (
              <>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>
                <div className='loginScreen_input'>
                  <form>
                    <input type='email' placeholder='Email address'></input>
                    <button className='loginScreen_getStart'>
                      <Link
                        to='browser'
                        style={{ color: '#fff', textDecoration: 'none' }}
                      >
                        {' '}
                        Click me!
                      </Link>
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Rest />
    </>
  )
}
