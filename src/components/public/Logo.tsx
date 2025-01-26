import React, {SVGProps} from 'react'

const Logo: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="24" height="24" viewBox="-12 -12 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M -1 -11 L 8 -2 L 5 1 M 1 11 L -8 2 L -5 -1" stroke="currentColor" strokeWidth="2.828" fill="none"/>
      <path d="M -5 -7 L 0 -2 L 0 2 L 5 7" stroke="currentColor" strokeWidth="2.828" strokeLinejoin="round"
            fill="none"/>
    </svg>
  )
}

export default Logo