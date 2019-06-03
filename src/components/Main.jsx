import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Main() {
  const [playerHand, setPlayerHand] = useState([])
  // const [dealerHand, setDealerHand] = useState([])

  useEffect(() => {
    Axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1').then(
      resp => {
        console.log({ resp })
        setPlayerHand(resp.data.cards[0].image)
        console.log(resp.data.cards)
      }
    )
  }, [])
  return (
    <>
      <section>Hello There</section>
      <section className="player-hand">
        <img src={playerHand} />
      </section>
    </>
  )
}
