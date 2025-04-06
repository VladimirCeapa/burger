
import { useEffect, useState } from 'react'
import styles from './select.module.css'
// import burger from'./burgerImg.module.css'

export type SelectOption = {
    label: string
    value: string
    images?:string

}


export type SelectProps = {
    options: SelectOption[]
    value?: SelectOption
    name: string
    onChange: (value: SelectOption) => void
    hasAddButton?: boolean | undefined;
    onAdd?: () => void;
    onRemove?: () => void;
}


export function Select({ value, name, onChange, options, hasAddButton = false, onAdd, onRemove }: SelectProps) {

    const [isOpen, setIsOpen] = useState(false)
    const [highlightIndex, setHighlightIndex] = useState(0)
    function clearOptions() {
        onChange(undefined)
    }
    function selectOption(option: SelectOption) {
        if (option.value !== value?.label) {
            onChange(option)

        }


    }
    function isOptionSelected(option: SelectOption) {

        return option.value === value?.label

    }
    useEffect(() => {
        if (isOpen) setHighlightIndex(0)
    }, [isOpen])
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
            } className={styles['clear-btn']}>{ }</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>

                {options.map((option, index) => (
                    <li onClick={e => {
                        e.stopPropagation()
                        selectOption(option)
                        setIsOpen(false)
                    }}

                        onMouseEnter={() => setHighlightIndex(index)
                        }
                        key={option.value}
                        className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ''}
                     ${index === highlightIndex ? styles.highlighted : ''}
                     `} >
                        {option.label}
                    </li>
                ))}
            </ul>
            {hasAddButton && onAdd && (<span
                onClick={e => {
                    e.stopPropagation()

                }} className={styles.adauga}>

                <button onClick={onAdd} className={styles.cross}>✖</button> Adaugă item</span>)}

            {onRemove && (
                <button className={styles.btnRemove} onClick={onRemove} >
                    x
                </button>
            )}


        </div>



    )
}