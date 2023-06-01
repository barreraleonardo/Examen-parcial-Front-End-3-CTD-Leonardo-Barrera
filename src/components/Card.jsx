/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const Card = ({props}) => {
  return (
    
    <>
    <div className='card'>
      <h3>Nombre de la cancion: {props.cancion}</h3>
      <h3 className='albumTitulo'>Album: {props.album}</h3>
      <h3>Tiene video: {props.video ? 'Si' : 'No'}</h3>
    </div>

    </>


  )
}

export default Card