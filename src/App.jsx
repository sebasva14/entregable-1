import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from "./utils/phrases.json"
import getRamdomElemArray from './utils/getRamdomElemArray'

function App() {
  
  const phraseRamdom = getRamdomElemArray(phrases)
  const numberRandom = getRamdomElemArray([1, 2, 3, 4])

  const [quote, setQuote] = useState(phraseRamdom)
  const [numberBg, setnumberBg,] = useState(numberRandom)

  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`
  }

  return (
    <div className='container' style={bgStyle}>
      <h1 className='container_title'>Galleta de la fortuna</h1>
      <Quote phrase={quote} />
      <BtnQuote
        setQuote={setQuote}
        phrases={phrases}
        setnumberBg={setnumberBg}
      />
    </div>
  )
}

export default App
