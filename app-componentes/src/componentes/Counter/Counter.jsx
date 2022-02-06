import React, {useState} from 'react'



const Counter = () => {
    const [counter, setCounter] = useState(0)

    function getModifier(){
        if(counter > 0) return 'counter__title--increment'
        if(counter < 0) return 'counter__title--decrement'
        return ''
    }

    return (
        <div className="counter">
            <span className={`counter__title ${getModifier()}`}>{counter}</span>
            <div>
                <button className="button button--incrementar" onClick={()=>setCounter(counter+1)}>Incrementar</button>
                <button className="button button--decrementar" onClick={()=>setCounter(counter-1)}>Decrementar</button>
            </div>
        </div>
    )
}

export default Counter