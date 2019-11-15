import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (
      <header>
        <div className="logo">Logo</div>

        <nav>
          <a href="#">Skapa annons</a>
          <a href="#">Om oss</a>
          <a href="#">Logga in</a>

          <a href="#" className='register-btn'>Skapa konto</a>


        </nav>
      </header>
    )
  }
}
