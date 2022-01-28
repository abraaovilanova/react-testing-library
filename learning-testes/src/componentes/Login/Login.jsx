import React, {useEffect, useState} from "react"

export default () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [btnIsDisabled, setBtnIsDisabled] = useState(true)

    const handleOnChangeName = (e) => {
        setName(e.target.value)
    }

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value)
    }

    useEffect(()=>{
        if(name.trim() && password){
            setBtnIsDisabled(false)
        }else {
            setBtnIsDisabled(true)
        }

    },[name, password])
    return (
        <div>
            <h2>Login System Component</h2>
            <form>
                <div>
                    <label htmlFor="fname">Name: </label>
                    <input 
                        type="text" 
                        id="fname"
                        value={name}
                        onChange={handleOnChangeName} 
                    />
                </div>
                <div>
                    <label htmlFor="fpassword">Password: </label>
                    <input 
                        type="password" 
                        id="fpassword"
                        data-testid='fpassword'
                        onChange={handleOnChangePassword}
                        value={password}
                    />
                </div>
                    <button 
                        type="submit"
                        disabled={btnIsDisabled}
                        role="button"
                    >
                        Login
                    </button>
            </form>
        </div>
    )
}