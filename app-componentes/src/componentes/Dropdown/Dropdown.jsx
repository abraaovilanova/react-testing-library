import React, { useState } from 'react'

export default ({title, options, onSelect}) => {
    /**
     * 1. Dropdown comece fechado
     * 2. Dropdown mostre as opções de menu quando for clicado
     * 3. Quando selecionar um item do menu, fechar o dropdown e indicar a opção selecionada
     */
    const [isOpen, setIsOpen] = useState(false)
    const handleSelection = (option) => {
        onSelect(option)
        setIsOpen(false)
    }

    return ( 
        <div className="component-dropdown">
            <button onClick={()=>setIsOpen(true)}>{title}</button>
            {
                isOpen && (
                    <ul role="menu">
                        {options.map(option => {
                            return (
                                <li 
                                    key={option} 
                                    role="menuitem"
                                    onClick={() => handleSelection(option)}
                                >
                                    {option}
                                </li>
                            )
                        })}
                        
                    </ul>
                )
            }
        </div>
    )
}