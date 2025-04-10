



interface Ingredient {
  label: string
  value: string
  images?: string
}

interface BurgerImagesProps {
  selectedIngredients: Ingredient[]
}

function BurgerImages({ selectedIngredients }: BurgerImagesProps) {
  console.log(selectedIngredients)
  return (
    <div>
      {selectedIngredients.map((ingredient, index) => (
        <img
          key={index}

          src={ingredient.images}
          alt=''
        />
      ))}
    </div>
  );
};

export default BurgerImages