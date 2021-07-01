import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'

import { Nav } from './styles'

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="http://www.google.com">
        <FaUserAlt size={24} />
      </Link>
      <Link to="http://www.google.com">
        <FaSignInAlt size={24} />
      </Link>

    </Nav>
  )
}
