import React from 'react'
import styled from "styled-components"
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
  return (

    <Wrapper>
      <nav>
        <Logo/>
        </nav>
        <div className="container page">
          <div className="info">
            <h1>job <span>tracking</span> app </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur modi placeat minus animi commodi harum sed adipisci sit officiis? Nulla totam nobis blanditiis sapiente tempore neque magnam quisquam tempora?
            </p>
            <Link to="/register" className='btn register-link'>
              Register
            </Link>
            <Link to="/login" className='btn '>
              Login / Demo User
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
    </Wrapper>
  )
}

export default Landing