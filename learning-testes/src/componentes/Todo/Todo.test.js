import Todo from './Todo'

import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const newTask = 'testing'

describe('Teste for Todo component', () => {
    test('Should add a new task when form has been submitted', ()=>{
        /**
         *  1. Renderizar o componente
         *  2. Buscar o input
         *  3. digitar no input
         *  4. buscar botão
         *  5. Clicar no botão
         *  6. Buscar tabela
         *  7. Verificar se a tarefa foi adicionada na tabela
         */

        render(<Todo />)

        const fieldNode = screen.getByTestId('form-input')
        fireEvent.change(fieldNode, { target: { value: newTask }})
        expect(fieldNode.value).toEqual(newTask)

        const btnNode = screen.getByTestId('form-button')
        fireEvent.click(btnNode)

        const tdNode = screen.getByText(newTask)
        expect(tdNode).toBeDefined()
    })
})