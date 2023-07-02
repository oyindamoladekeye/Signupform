import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='main'>
      <div className='content'>
        <h1>Learn to code by watching others</h1>
        {/* <p>See how experienced developers solve problems in real time.<br/>Watching scripted tutorials is great but understanding how<br /> 
        developers think is invaluable. 
        </p> */}
        <p className='experience'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
        but understanding how developers think is invaluable.</p>
      </div>
      <div className='form-group'>
        <a href='./' className='trial'><a  href="./" className='try'>Try it free 7 days</a>then $20/mo.thereafter</a>
        <form action="" className='form'>
        <div className='firstname'>
          <input type="text"
          placeholder="First Name"
           />
        </div>
        <div>
          <input type="text"
          placeholder="Last Name"
           />
        </div>
        <div>
          <input type="text"
          placeholder="Email Address"
           />
        </div>
        <div>
          <input type="text"
          placeholder="Password"
           />
        </div>
        <button type='submit' className='submit'>CLAIM YOUR FREE TRIAL</button>
        <p className='terms'>By clicking the button, you are agreeing to our <a href="./" className='terms-link'>Terms and Services</a></p>
      </form>
      </div>
    </div>
  )
}

export default App
{/* <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>2
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div> */}
