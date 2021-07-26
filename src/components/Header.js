import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return ( 
    <header>
      <div className="container-header">
      <nav>
        <ul>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/' className="logo">gmllshrn</Link>
          </li>
          <li>
            <a href="assets/Resume Gamalliel Sharon.pdf">resume</a>
          </li>
        </ul>
      </nav>
      </div>
    </header>
   );
}

export default Header;