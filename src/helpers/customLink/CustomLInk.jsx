import React from 'react'
import { useMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CustomLInk = ({children, to, ...props}) => {
  const match = useMatch(to)
  return (
    <Link to={to}
    style={{
      color: match ? 'yellow': 'white',
      backgroundColor: match?  'rgba(130, 130, 130, 0.549)': '',
      ":hover": { cursor: "pointer", backgroundColor: "#ffff9b", color: "#fd0808" }

    }}

   {...props}>{children}</Link>
  )
}

export {CustomLInk}
