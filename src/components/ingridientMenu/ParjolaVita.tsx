
import burger from '/src/components/burgerImg.module.css'
import { v4 as uuidv4 } from 'uuid';


function ParjolaVita(){

    return(

        <div className={burger.carne}  key={uuidv4()} >
        <img className={burger.carneImag} src="../src/img/pirjoala-de-vita.svg" alt="" /> 
         <span className={burger.carneText}>PÂRJOALĂ VITĂ </span>
       </div>
    )
}

export default ParjolaVita