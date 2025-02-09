import React, { useState } from 'react'
import Btmbar from './Btmbar'

function Bgwork() {
  let [col, setcol] = useState('bg-gray-200');
  const changeColor = (color) => {
    setcol(color);
  }
  return (
    <>
      <div className={`flex flex-col items-center justify-end min-h-screen py-5 ${col}`}>
        <Btmbar changeColor={changeColor} />
      </div>
    </>
  )
}

export default Bgwork