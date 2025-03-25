
import burger from '/src/components/burgerImg.module.css'
import { v4 as uuidv4 } from 'uuid';


function FileuPuiPane(){

    return(

        <div className={burger.fileuPuiPane} key={uuidv4()}  >
        <img className={burger.fileuPuiPaneImag} src="../src/img/pirjoala-de-pui.svg" alt="" /> 
         <span className={burger.fileuPuiPaneText}>FILEU PUI PANE </span>
       </div>
    )
}

export default FileuPuiPane