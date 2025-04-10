import app from "../app.module.css"

interface Ingredient {
    label: string
    value: string
    images?: string
}

interface InfoPanelProps {
    selectedIngredients: Ingredient[]
}


function InfoPanel({ selectedIngredients }: InfoPanelProps) {

    const totalPrice = selectedIngredients.reduce((total, ingredient) => {
        return total + Number(ingredient.value)
    }, 0)

    return (
        <div className={app.infoPanel}>
            {selectedIngredients.map(ingredient => (
                ingredient.label === "-" ? null : < h5 > {ingredient.label}</h5> 

            )
            )}
            <h3>TOTAL:<span className={app.total}>{totalPrice} lei</span></h3>
        </div >
    );
};

export default InfoPanel