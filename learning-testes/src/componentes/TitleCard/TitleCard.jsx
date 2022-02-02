import React, { useEffect,useState } from 'react'

export default ({title1}) => {
    const [title2, setTitle2] = useState('')

    const getTitle2 = () =>{
        setTimeout(()=>setTitle2('Hello'),900)
    }

    useEffect(()=>getTitle2(),[])

    return (
        <>
            <h1 data-testid="title-1">{title1}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nihil explicabo neque eos minima debitis vitae aliquid odio culpa ullam sit a autem, tempore quaerat aut dignissimos praesentium quod iste!</p>

            <h1 data-testid="title-2">{title2 ? title2 : '' }</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate aspernatur sed quod et, mollitia molestiae, architecto saepe suscipit labore expedita ullam? Deserunt eos eaque quis, eum magnam optio. Explicabo.</p>
        </>
    )
}