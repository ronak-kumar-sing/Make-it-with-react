import React from 'react'

function Btmbar({ changeColor }) {
  return (
    <div className="bg-gray-800 text-white text-center px-3 py-4 inline-flex items-center justify-center gap-3 rounded-full w-2xl ">
      <button className="bg-rose-800 hover:bg-rose-900 text-white font-medium py-1 px-2  rounded cursor-pointer transition-colors" onClick={() => changeColor("bg-rose-800")}> Rose </button>
      <button className="bg-blue-700 hover:bg-blue-900 text-white font-medium py-1 px-2  rounded cursor-pointer transition-colors" onClick={() => changeColor("bg-blue-700")}> Blue </button>
      <button className="bg-black hover:bg-zinc-700 text-white font-medium py-1 px-2  rounded cursor-pointer transition-colors" onClick={() => changeColor("bg-black")}> Black </button>
      <button className="bg-purple-700 hover:bg-purple-900 text-white font-medium py-1 px-2  rounded cursor-pointer transition-colors" onClick={() => changeColor("bg-purple-700")}> Purple </button>
      <button className="bg-white hover:bg-amber-100 text-black font-medium py-1 px-2  rounded cursor-pointer transition-colors" onClick={() => changeColor("bg-white")}> White </button>
      <button className="bg-yellow-400 hover:bg-amber-200 text-white font-medium py-1 px-2  rounded cursor-pointer transition-colors" onClick={() => changeColor("bg-yellow-400")}> Yellow </button>
      <button className="bg-zinc-700 hover:bg-zinc-950 text-white font-medium py-1 px-2  rounded cursor-pointer transition-colors" onClick={() => changeColor("bg-zice-700")}> Zinc </button>
    </div>
  )
}

export default Btmbar