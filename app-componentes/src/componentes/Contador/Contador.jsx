import React, {useState} from 'react'

export default () => {

    const [contador, setContador] = useState(0)

    return (
        <div className="contador">
            <h1>Contador</h1>

            <span data-testid="contador-valor">{contador}</span>

            <div>
                <button
                    onClick={()=>setContador(contador + 1)}
                >+1</button>

                <button
                    disabled={contador <= 0}
                    onClick={()=>setContador(contador - 1)}
                >-1</button>
            </div>

            {contador > 0 && (
                <button
                    onClick={()=>setContador(0)}
                >Restaurar</button>
            )}
        
        </div>
    )
}