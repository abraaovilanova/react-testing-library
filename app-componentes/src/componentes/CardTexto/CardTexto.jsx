import React, {useState, useEffect} from 'react'

export default ({
        texto1 = 'Titulo 1', 
        texto2 = 'Titulo 2',
        info = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    }) => {

    const [titulo1, setTitulo1] = useState(null)
    const [titulo2, setTitulo2] = useState(null)
    const [paragrafo1, setParagrafo1] = useState(null)



    useEffect(()=>{
        setTitulo1(texto1)
        setTimeout(()=>setTitulo2(texto2),600)
        setTimeout(()=>setParagrafo1(info),1200)
        // eslint-disable-next-line
    },[])

    return (
        <div>
            <h1>CardTexto</h1>
            <h2 data-testid="titulo1">{titulo1}</h2>
            <h3 data-testid="titulo2">{titulo2}</h3>
            <p data-testid="paragrafo1">{paragrafo1}</p>
        </div>
    )
}