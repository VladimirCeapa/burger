import { useState } from "react";
import { Select, SelectOption } from "./components/Select";
import app from "./app.module.css";
import Cifla from "./components/ingridientMenu/Cifla";
import ChiflaBottum from "./components/ingridientMenu/CiflaBottom";
import BurgerImages from "./components/BurgerImages";
import { INITIAL_SELECTS, SelectControl } from "./components/InitialSelect";
import InfoPanel from "./components/InfoPanel";




interface Ingredient {
  label: string
  value: string
  images: string | undefined
}


function App() {
  //  acesta este useState unde tu trebuie sa adaugi selecturi
  const [selects, setSelects] = useState(INITIAL_SELECTS);
  //  acesta este useState unde tu trebuie sa adaugi ingredientele alese de utilizator
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([
    { label: "CHIFLA (10 lei)", value: "10", images: '' },
    { label: "PÂRJOALĂ VITĂ (35lei)", value: "35", images: ' ../src/img/pirjoala-de-vita.svg' },
    { label: "-", value: "0", images: '' },
    { label: "-", value: "0", images: '' },
    { label: "-", value: "0", images: '' },
    { label: "CHIFLA (10 lei)", value: "10", images: '' },
  ]);
  // logica cum sa adaugi in array o las pe tine sa o faci

  const handleChange = (indexIngridient: number, value: SelectOption) => {
    setSelectedIngredients((prevSelects) =>
      prevSelects.map((select, index) =>
        indexIngridient === index ? { ...select, label: value.label, value: value.value, images: value.images }
          : select
      )
    );
  };
  const handleAdd = (index: number) => {

    const parentSelect = selects[index];
    if (parentSelect) {
      const newSelect: SelectControl = {
        options: parentSelect.options,
        value: { label: ``, value: `` },
        name: '',
        isInitial: true,
        isRemove: true,

      };

      selects[index].isInitial = false
      selectedIngredients.splice(index + 1, 0, { label: '-', value: '', images: '' })// tut
      selects.splice(index + 1, 0, newSelect)
      // console.log(selects)
      // console.log( countComponents)
      setSelects((prevSelects) => [...prevSelects]);

    }
  };

  const handleRemove = (index: number) => {
    selects.splice(index, 1)
    selectedIngredients.splice(index, 1)
    setSelects(() => [...selects])
    selects[index - 1].isInitial = true


  };

  return (
    <div className={app.wrapper}>
      <div className={app.left}>
        <div>
          {selects.map((select, index) => (
            <div key={select.name + index}>
              <Select
                options={select.options}
                value={selectedIngredients[index]}
                onChange={(value) => {

                  handleChange(index, value)

                }}
                name={select.name}
                onAdd={() => handleAdd(index)}
                isRemove={select.isRemove}
                onRemove={() => handleRemove(index)} // Удаляем кнопку удаления для первого компонента
                isInitial={select.isInitial}
              />

            </div>
          ))}
        </div>
        <InfoPanel selectedIngredients={selectedIngredients} />
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
