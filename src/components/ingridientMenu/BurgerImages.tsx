
import burger from'/src/components/burgerImg.module.css'
 type images={
    img:string;
}

function BurgerImages({img}:images){
    return(
        <div className={burger.chifla}>
        <span className={burger.chiflaText}>CHIFLA BRIOCHE</span>
        <img className={burger.chiflaImag} src={`../src/img/${img}.svg`} alt="" />
      </div>
    
    )
}

export default BurgerImages