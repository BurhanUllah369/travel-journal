import React from 'react'
import Card from './components/Card'
import Header from "./components/Header"
import data from './data'

export default function App() {
    const els = data.map(el => <Card
        {...el}
    />)
  return (
    <div className='container'>
      <Header/>
      {els}
    </div>
  )
}
