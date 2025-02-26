import { useState } from 'react'
import { Select } from './Select'
import app from './app.module.css'
import burger from './burgerImg.module.css'

const options = [
  { label: 'CHIFLA BRIOCHE(8 lei)', value: '0' },
]
const options2 = [
  { label: '-', value: '1' },
  { label: 'PÂRJOALĂ VITĂ (35 lei)', value: '2' },
  { label: 'FILEU PUI PANE (25 lei)', value: '3' },
  { label: 'FILEU PUI PANE (25 lei)', value: '4' },
]
const options3 = [
  { label: '-', value: '1' },
  { label: 'PÂRJOALĂ VITĂ (35 lei)', value: '2' },
  { label: 'FILEU PUI PANE (25 lei)', value: '3' },
  { label: 'FILEU PUI PANE (25 lei)', value: '4' },
]



function App() {
  const [value, setValue1] = useState<typeof options[0] | undefined>(options[0])
  const [value1, setValue2] = useState<typeof options2[0] | undefined>(options2[0])
  const [value2, setValue3] = useState<typeof options3[0] | undefined>(options3[0])


  return (
    <>
      <div className={app.wrapper}>
        <div className={app.left}>

          <Select options={options} value={value} name={"1. chifla"} onChange={item => setValue1(item)} />
          <Select options={options2} value={value1} name={"2. carne"} onChange={item => setValue2(item)} />
          <Select options={options3} value={value2} name={"3.SOS CHIFLA JOS"} onChange={item => setValue3(item)} />
        </div>
        <div className={app.right}>
          <div className={burger.chifla}>
            <span className={burger.chiflaText}>CHIFLA BRIOCHE</span>
            <img className={burger.chiflaImag} src="../src/img/asset-1.svg" alt="" />
          </div>

          <div className={burger.carne}>
           <img className={burger.carneImag} src="../src/img/pirjoala-de-vita.svg" alt="" /> 
            <span className={burger.carneText}>PÂRJOALĂ VITĂ</span>
          </div>
          <div className={burger.chiflaBottom}>
            <span className={burger.chiflaTextBottom}>CHIFLA BRIOCHE</span>
            <img className={burger.chiflaImagBottom} src="../src/img/asset-23.svg" alt="" />
          </div>
        </div>
        
      </div>


    </>
  )
}



export default App
