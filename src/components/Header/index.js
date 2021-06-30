import React from 'react'

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'

import { Nav } from './styles'

export default function Header() {
  return (
    <Nav>
      <a href="http://www.google.com">
        <FaHome size={24} />
      </a>
      <a href="http://www.google.com">
        <FaUserAlt size={24} />
      </a>
      <a href="http://www.google.com">
        <FaSignInAlt size={24} />
      </a>

    </Nav>
  )
}
