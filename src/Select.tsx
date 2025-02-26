import { useEffect, useState } from 'react'
import styles from './select.module.css'

type SelectOption = {
    label: string
    value:string
}


type SelectProps = {
    options: SelectOption[]
    value?: SelectOption
    name:string
    onChange: (value: SelectOption | undefined) => void
    

}


export function Select({ value,name, onChange, options }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const[highlightIndex,setHighlightIndex]=useState(0)
    function clearOptions() {
        onChange(undefined)
    }
function selectOption(option:SelectOption){
   if(option !==value) onChange(option)
}
function isOptionSelected(option:SelectOption){
   return option === value
}
useEffect(()=>{
    if(isOpen)setHighlightIndex(0)
},[isOpen])
    return (

        <div onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen(prev => !prev)}
            tabIndex={0}
            className={styles.container}
        >
             <span className={styles.name}>{name}</span>
            <span className={styles.value}>{value?.label}</span>
            <button onClick={e => {
                e.stopPropagation()
                clearOptions() 
            }
            } className={styles['clear-btn']}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>

                {options.map((option,index )=> (
                    <li onClick={e=>{
                        e.stopPropagation()
                        selectOption(option)
                        console.log(e.currentTarget)
                        setIsOpen(false)
                    }} 
                    
                    onMouseEnter={()=>setHighlightIndex(index)}
                    key={option.value}
                     className={`${styles.option} ${isOptionSelected(option)?styles.selected:''}
                     ${index===highlightIndex ? styles.highlighted:''}
                     `} >
                        {option.label}
                    </li>
                ))}
            </ul>
            <span onClick={e=>{
                e.stopPropagation()
                // console.log('click')
            }}  className={styles.adauga}>
    <span className={styles.cross}>✖</span> Adaugă item</span>
        </div>



    )
}