import { useState } from "react";
import { Select, SelectOption } from "./components/Select";
import app from "./app.module.css";
import Cifla from "./components/ingridientMenu/Cifla";
import ChiflaBottum from "./components/ingridientMenu/CiflaBottom";
// import BurgerImages from "./components/ingridientMenu/BurgerImages";


interface SelectControl {
  options: SelectOption[];
  value: SelectOption;
  name: string;
  id: number
  isInitial: boolean;
}

// acestea sunt toate selecturile initiale
const INITIAL_SELECTS: SelectControl[] = [
  {
    options: [{ label: "-", value: " 0" }],
    value: { label: "-", value: " 0" },
    name: "chifla",
    id: 0,
    isInitial: false,
  },
  {
    options: [
      { label: "-", value: " 0" },
      { label: "PÂRJOALĂ VITĂ (45lei)", value: "35" },

    ],
    value: { label: "-", value: " 0" },
    name: "carne",
    id: 1,
    isInitial: true,
  },
  {
    options: [
      { label: "-", value: " 0" },
      { label: "SOS KETCHUP (10lei)", value: "25" },
      { label: "SOS TARTAR (10lei)", value: "25" },
      { label: "SOS MAIONEZA (10lei)", value: "25" },
    ],
    value: { label: "-", value: " 0" },
    name: "sos-jos",
    id: 2,
    isInitial: true,
  },
  {
    options: [
      { label: "-", value: " 0" },
      { label: "SOS KETCHUP (10lei)", value: "25" },
      { label: "SOS TARTAR (10lei)", value: "25" },
      { label: "SOS MAIONEZA (10lei)", value: "25" },
    ],
    value: { label: "-", value: " 0" },
    name: "chifla",
    id: 3,
    isInitial: true,
  },
  {
    options: [
      { label: "-", value: " 0" },
      { label: "SOS KETCHUP (10lei)", value: "25" },
      { label: "SOS TARTAR (10lei)", value: "25" },
      { label: "SOS MAIONEZA (10lei)", value: "25" },
    ],
    value: { label: "-", value: " 0" },
    name: "cheese",
    id: 4,
    isInitial: true,
  },
  {
    options: [
      { label: "-", value: " 0" },

    ],
    value: { label: "-", value: " 0" },
    name: "chifla",
    id: 5,
    isInitial: true,
  },
];

function App() {
  //  acesta este useState unde tu trebuie sa adaugi selecturi
  const [selects, setSelects] = useState(INITIAL_SELECTS);

  //  acesta este useState unde tu trebuie sa adaugi ingredientele alese de utilizator
  const [selectedIngredients, setSelectedIngredients] = useState([
    { id: 0, label: "chifla", value: "25" },
    { id: 1, label: "-", value: "25" },
    { id: 2, label: "-", value: "25" },
    { id: 3, label: "-", value: "25" },
    { id: 4, label: "-", value: "25" },
    { id: 5, label: "-", value: "25" },
  ]);
  // logica cum sa adaugi in array o las pe tine sa o faci

  const handleChange = (id: number, value: SelectOption) => {
    setSelectedIngredients((prevSelects) =>
      prevSelects.map((select) =>
        select.id === id ? { ...select, label: value.label, value: value.value }
          : select
      )
    );
  };

  const handleAdd = (id: number) => {
    const parentSelect = selects.find((select) => select.id === id);
    if (parentSelect) {
      const newSelect: SelectControl = {
        id: Date.now(), // Уникальный ID для нового компонента
        options: parentSelect.options,
        value: { label: parentSelect.value.label, value: parentSelect.value.value },
        name: "",
        isInitial: false
      };
      setSelects((prevSelects) => [...prevSelects, newSelect]);
      selectedIngredients.push({ id: newSelect.id, label: "-", value: "0" })
      selects.push(newSelect)

    }
  };

  const handleRemove = (id: number) => {
    setSelects((prevSelects) => prevSelects.filter((select) => select.id !== id));
  };




  return (
    <div className={app.wrapper}>
      <div className={app.left}>z
        <div>
          {selects.map((select, index) => (
            <div key={index}>
              <Select
                options={select.options}
                value={selectedIngredients[index]}

                onChange={(value) => {
                  handleChange(select.id, value)


                }}
                hasAddButton={select.isInitial}
                name={select.name}
                onAdd={() => handleAdd(select.id)}
                onRemove={select.id > 6 ? () => handleRemove(select.id) : undefined}
              // hasAddButton={select.id !== 0 && select.id <= 6} // Кнопка добавления только у первого компонента
              />

            </div>
          ))}
        </div>
      </div>

      <div className={app.right}>
        <Cifla />

        {selectedIngredients.map((e) => console.log(e))}
        {/* <BurgerImages img={""} /> */}
        {/* aici tu mai adaugi o componeta si ca props sai ii dai ingredientele tale (selectedIngredients) de exemplu : <BurgerImages selectedIngredients={selectedIngredients} /> */}

        <ChiflaBottum />
      </div>
    </div>
  );
}

export default App;
