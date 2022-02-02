import React, {useState} from 'react'

export default () => {

    /**
     * 1. O contador deve iniciar com zero
     * 2. Ao clicar no botão +1 deve ser adicionado 1 ao valor do contador
     * 3. ao clicar no botão -1 deve ser adicionado -1 ao valor do contador
     * 4. Ao clicar no botão Restaurar o contador deve voltar para Zero
     * 5. Se o contador estiver zerado o botão de subtrair deve está desabilitado (ou seja, o contador não pode ter valores negativos)
     * 6. Se o contador estiver com um número maior que zero deve aparecer um botão de restaurar
     * 7. Ao clicar no botão restaurar o contador deve voltar para zero
     */

    const [contador, setContador] = useState(0)

    return (
        <>
            <h1 data-testid="titulo-componente">Contador</h1>

            <span data-testid="display-contador">{contador}</span>

            <br /><br />

            <div>
                <button
                    data-testid="btn-add"
                    onClick={()=>setContador(contador + 1)}
                >+1</button>

                <button
                    data-testid="btn-sub"
                    disabled={contador <= 0}
                    onClick={()=>setContador(contador - 1)}
                >-1</button>
            </div>


            <br />

            {contador > 0 && (
                <button
                data-testid="btn-restaurar"
                    onClick={()=>setContador(0)}
                >Restaurar</button>
            )}
        
        </>
    )
}