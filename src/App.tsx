import { useState } from 'react'
import { Select, SelectOption } from './components/Select'
import app from './app.module.css'
import Cifla from './components/ingridientMenu/Cifla'
import ChiflaBottum from './components/ingridientMenu/CiflaBottom';




interface SelectControl {
  id: string;
  options: SelectOption[];
  value: string;
  isInitial: boolean;
}


const INITIAL_SELECTS = [
  {
    id: '1',
    options: [{ label: '-', value: ' 0' },
    { label: 'SOS KETCHUP (10lei)', value: '25' },
    { label: 'SOS TARTAR (10lei)', value: '25' },
    { label: 'SOS MAIONEZA (10lei)', value: '25' },] as SelectOption[],
    value: "Chifla",
    isInitial: true
  },
  {
    id: '2',
    options: [{ label: '-', value: ' 0' },
    { label: 'PÂRJOALĂ VITĂ (45lei)', value: '35' },
    { label: 'FILEU PUI PANE (32lei)', value: '25' },
    { label: 'FILEU PUI GRILL(32lei)', value: '25' }] as SelectOption[],
    value: "Carne",
    isInitial: true
  },

]






function App() {
  const [selects, setSelects] = useState(INITIAL_SELECTS);


  const handleValueChange = (id: string, newValue: string) => {
    setSelects(prev => prev.map(select =>
      select.id === id ? { ...select, newValue } : select
    ));
  };

 
  const handleAddSelect = (value: string,parentOptions: SelectOption[]) => {
    const newSelect: SelectControl = {
      id: Date.now().toString(),
      options: parentOptions,
      value: value ,
      isInitial: false
    };

    setSelects(prev => [...prev, newSelect]);
  };


  const handleRemoveSelect = (id: string) => {
    setSelects(prev => prev.filter(select => select.id !== id));
  };





  return (
    <>
      <div className={app.wrapper}>
        <div className={app.left}>


          <div>
            {selects.map(select => (
              <div key={select.id} >
                <Select
                  options={select.options}
                  onChange={(value) => handleValueChange(select.id, value.value)}
                  hasAddButton={select.isInitial}
                  onAdd={() => select.isInitial && handleAddSelect(select.value,select.options,)}
                  onRemove={!select.isInitial ? () => handleRemoveSelect(select.id) : undefined} name={select.value} />


              </div>
            ))}
          </div>


        </div>

        <div className={app.right}>


          <Cifla />

          <ChiflaBottum />

        </div>

      </div>


    </>
  )
}



export default App
