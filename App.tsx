import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App () {
  return (
    <div>
      <h1>Lista de regalos</h1>
      <GiftList />
      <TotalGifts />
    </div>
  )
}

function GiftList () {
  const [gifts, setGifts] = useState([])

  const addGift = () => {
    const newGift = prompt('¿Qué regalo quieres añadir?')
    newGift?.length  ? setGifts([...gifts, newGift ]) : "No" 
  }

  return (
    <div>
      <h2>Regalos</h2>
      <ul>
        {gifts.map(gift => (
          <li key={gift}>{gift}</li>
        ))}
      </ul>
      <button onClick={addGift}>Añadir regalo</button>
    </div>
  )
}

function TotalGifts () {
  const [totalGifts, setTotalGifts] = useState(0)

  return (
    <div>
      <h2>Total de regalos</h2>
      <p>{totalGifts}</p>
    </div>
  )
}