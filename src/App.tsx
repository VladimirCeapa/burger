import { useState } from "react";
import { Select, SelectOption } from "./components/Select";
import app from "./app.module.css";
import Cifla from "./components/ingridientMenu/Cifla";
import ChiflaBottum from "./components/ingridientMenu/CiflaBottom";
import BurgerImages from "./components/ingridientMenu/BurgerImages";
import { INITIAL_SELECTS, SelectControl } from "./components/InitialSelect";




interface Ingredient {
  id: number
  label: string
  value: string
  images: string | undefined
}


function App() {
  //  acesta este useState unde tu trebuie sa adaugi selecturi
  const [selects, setSelects] = useState(INITIAL_SELECTS);

  //  acesta este useState unde tu trebuie sa adaugi ingredientele alese de utilizator
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([
    { id: 1, label: "chifla", value: "25", images: '' },
    { id: 2, label: "-", value: "0", images: '' },
    { id: 3, label: "-", value: "0", images: '' },
    { id: 4, label: "-", value: "0", images: '' },
    { id: 5, label: "-", value: "0", images: '' },
    { id: 6, label: "chifla", value: "0", images: '' },
  ]);
  // logica cum sa adaugi in array o las pe tine sa o faci

  const handleChange = (id: number, value: SelectOption) => {
    setSelectedIngredients((prevSelects) =>
      prevSelects.map((select) =>
        select.id === id ? { ...select, label: value.label, value: value.value, images: value.images }
          : select
      )
    );
  };

  const handleAdd = (id: number, index: number) => {
    const parentSelect = selects.find((select) => select.id === id);
    if (parentSelect) {
      const newSelect: SelectControl = {
        id: Date.now(),
        options: parentSelect.options,
        value: { label: '', value: '' },
        name: '',
        isInitial: false
      };

      selectedIngredients.splice(index, 0, { id: newSelect.id, label: "-", value: "0", images: '' })

      selects.splice(index, 0, newSelect)
      console.log(selects)
      setSelects((prevSelects) => [...prevSelects]);

    }
  };

  const handleRemove = (id: number, index: number) => {
    setSelects((prevSelects) => prevSelects.filter((select) => select.id !== id));
    selectedIngredients.splice(index, 1)
  };

  return (
    <div className={app.wrapper}>
      <div className={app.left}>
        <div>
          {selects.map((select, index) => (
            <div key={index}>
              <Select
                options={select.options}
                value={selectedIngredients[index]}
                onChange={(value) => {

                  handleChange(select.id, value)

                }}
                name={select.name}
                onAdd={() => handleAdd(select.id, index)}
                onRemove={select.id > 6 ? () => handleRemove(select.id, index) : undefined} // Удаляем кнопку удаления для первого компонента
                hasAddButton={select.id < 6 && select.id !== 0 && select.id !== 5} // Кнопка добавления только у первого компонента
              />

            </div>
          ))}
        </div>
      </div>

      <div className={app.right}>

        <Cifla />

        <BurgerImages selectedIngredients={selectedIngredients} />
        {/* aici tu mai adaugi o componeta si ca props sai ii dai ingredientele tale (selectedIngredients) de exemplu : <BurgerImages selectedIngredients={selectedIngredients} /> */}

        <ChiflaBottum />

      </div>
    </div>
  );
}

export default App;
