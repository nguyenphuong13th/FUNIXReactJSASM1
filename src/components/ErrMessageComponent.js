import React from 'react'

function ErrMessageComponent(props) {
  return (
    <div>
        <h4 className='text-danger text-center mt-3'>{props.error}</h4>
    </div>
  )
}

export default ErrMessageComponent