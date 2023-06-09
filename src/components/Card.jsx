/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

const Card = ({props}) => {

  useEffect(() => {
    document.body.style.backgroundImage =  `url(${props.urlImagen})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';

  }, []);
  return (
    
    <>
    <div className='card'>
      <h1 className='titulo'>Cancion agregada</h1>
      <h3><span className='itemsCard'>Nombre:</span> {props.cancion}</h3>
      <h3> <span className='itemsCard'>Album:</span> {props.album}</h3>
      <h3> <span className='itemsCard'>Tiene video:</span>  {props.video ? 'Si' : 'No'}</h3>
    </div>

    </>


  )
}

export default Card