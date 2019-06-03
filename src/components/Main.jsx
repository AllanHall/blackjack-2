import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Main() {
  useEffect(() => {
    Axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=2').then(
      resp => {
        console.log({ resp })
      }
    )
  })
  return (
    <>
      <section>Hello There</section>
    </>
  )
}
