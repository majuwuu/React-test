import React from 'react'

export const Message = ({title,value}) => {
  const showAlert = value => alert(`Has presionado el botón ${value}`)
  return (
    <button onClick={() => showAlert(value)}> {title} </button>
  )
}


