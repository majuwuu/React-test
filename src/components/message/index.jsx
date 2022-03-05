import React from 'react'

export const Message = ({title,value}) => {
  const showAlert = (value) => {
    alert(value)
  }
  return (
    <div>
       <button onClick={() => showAlert(value)}> {title} </button>
    </div>
  )
}


