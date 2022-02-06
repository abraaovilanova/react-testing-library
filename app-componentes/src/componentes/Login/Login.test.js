import Login from './Login'

import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const userName = 'abraao'
const userPassword = '123456'

describe('Test for Login Component',()=>{
    test('Should inicialize with login btn disable', ()=>{
        render(<Login />)

        const nodeButton = screen.getByRole('button', {name : 'Login'})
        
        expect(nodeButton).toBeInTheDocument()
        expect(nodeButton).toBeDisabled()
    })

    test('Should enable the button after the form is filled', ()=>{
        render(<Login />)
        
        const nodeButton = screen.getByRole('button', {name : 'Login'})
        const nodeInputName = screen.getByRole('textbox', {name : 'Name:'})
        const nodeInputPassword = screen.getByTestId('fpassword')

        expect(nodeButton).toBeInTheDocument()
        expect(nodeButton).toBeDisabled()
        
        fireEvent.change(nodeInputName, { target: { value: userName }})
        fireEvent.change(nodeInputPassword, { target: { value: userPassword }})

        expect(nodeButton).toBeInTheDocument()
        expect(nodeButton).toBeEnabled()
    })
})