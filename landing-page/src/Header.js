import React from 'react'
import "./logo1.jpg"

const Header = () => {
  return (
    <header>
        <nav>
            <div class="left">
            <ul>
                    <li><img src={require('./logo1.jpg')} alt="Logo" /></li>
                    <li>Whats Inside</li>
                    <li>Author</li>
                    <li>Download</li>                    
            </ul>
            </div>
            <div class="right">
                <p>Share On: </p>
                <button>Post</button>
                <button>Like</button>
            </div>
        </nav>
    </header>
  )
}

export default Header