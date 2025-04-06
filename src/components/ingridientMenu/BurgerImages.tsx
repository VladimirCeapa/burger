



interface Ingredient {
  id: number
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
      {selectedIngredients.map(ingredient => (
        <img
          key={ingredient.id}

          src={ingredient.images}
          alt=''
        />
      ))}
    </div>
  );
};

export default BurgerImages