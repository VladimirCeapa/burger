import burger from'/src/components/burgerImg.module.css'

function ChiflaBottum(){
    return(
        <div className={burger.chiflaBottom}>
        <span className={burger.chiflaTextBottom}>CHIFLA BRIOCHE</span>
        <img className={burger.chiflaImagBottom} src="../src/img/asset-23.svg" alt="" />
      </div>
    )
}

export default ChiflaBottum