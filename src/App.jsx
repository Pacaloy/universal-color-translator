import { useRef, useState } from 'react'
import colorDictionary from './utils/colorDictionary'
import './App.css'

function App() {
  const [colorName, setColorName] = useState('')
  const [colorHexCode, setColorHexCode] = useState('#FFFFFF')
  const colorBoxRef = useRef(null)

  const convertHandler = (event) => {
    event.preventDefault()
    const userInput = colorName.toLowerCase()
    const hexCode = colorDictionary[userInput]

    if (!hexCode) {
      alert('Please enter a valid color name')
      return
    }

    setColorHexCode(hexCode)
    if (colorBoxRef.current) colorBoxRef.current.style.backgroundColor = hexCode
  }

  return (
    <>
      <h1>Universal Color Translator</h1>

      <div className="box">
        <div className='color_box' ref={colorBoxRef}></div>
        <div className='hex_code'>{colorHexCode}</div>
      </div>

      <div className="controls">
        <form onSubmit={(e) => convertHandler(e)}>
          <div className='input_container'>
            <input
              onChange={(e) => setColorName(e.target.value)}
              placeholder='Enter color name...'
              type='text'
              value={colorName}
            />
            {colorName && <span className='clear' onClick={() => setColorName('')}>X</span>}
          </div>
          <button type='submit'>
            convert
          </button>
        </form>
      </div>
    </>
  )
}

export default App
