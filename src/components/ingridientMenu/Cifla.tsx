import burger from'/src/components/burgerImg.module.css'

function Chifla(){
    return(
        <div className={burger.chifla}>
        <span className={burger.chiflaText}>CHIFLA BRIOCHE</span>
        <img src="../src/img/asset-1.svg" alt="" />
      </div>
    
    )
}

export default Chifla