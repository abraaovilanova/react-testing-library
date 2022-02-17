import { render, screen, fireEvent } from '@testing-library/react'
import Contador from './Contador'

describe('testes para o componente Contador', ()=>{
    test('1. O contador deve iniciar com zero', ()=>{
        render(<Contador />)

        // encontrar o elemento com função spam
        const contador = screen.getByTestId('contador-valor')

        // verificar se o valor do contador é zero
        expect(contador).toHaveTextContent('0')
    })

    test('2. Ao clicar no botão +1 deve ser adicionado 1 ao valor do contador', () => {
        render(<Contador />)

        // encontrar o elemento com testid 'contador-valor'
        const contador = screen.getByTestId('contador-valor')

        // verificar se o valor do contador é zero
        expect(contador).toHaveTextContent('0')

        // encontrar o botão
        const addButton = screen.getByRole('button', { name: '+1'})

        // clicar no botão
        fireEvent.click(addButton)

        // verificar se o contador agora possui o valor 1
        expect(contador).toHaveTextContent('1')
    })

    test('3. O botão -1 deve iniciar desabilitado', ()=>{
        render(<Contador />)

        // encontrar o botão '-1'
        const subButton = screen.getByRole('button', { name: '-1'})

        // verificar se o botão está desabilitado
        expect(subButton).toBeDisabled()
    })

    test('4. Quando o contador estiver com um valor maior que zero o botão -1 deve ser habilitado', () => {
        render(<Contador />)

        // encontrar o elemento com testid 'contador-valor'
        const contador = screen.getByTestId('contador-valor')

        // verificar se o valor do contador é zero
        expect(contador).toHaveTextContent('0')

        // encontrar os botões
        const addButton = screen.getByRole('button', { name: '+1'})
        const subButton = screen.getByRole('button', {name: '-1' })

        // verifica se o botão de subtrair está desabilitado
        expect(subButton).toBeDisabled()

        // clicar no botão '+1'
        fireEvent.click(addButton)

        // verificar se o contador agora possui o valor 1
        expect(contador).toHaveTextContent('1')

        //  verifica se o botão '-1' está habilitado
        expect(subButton).toBeEnabled()
    })

    test('5. Ao clicar no botão -1 deve ser subtraido -1 ao valor do contador', () => {
        render(<Contador />)

        // encontrar o elemento com testid 'contador-valor'
        const contador = screen.getByTestId('contador-valor')

        // encontrar os botões
        const addButton = screen.getByRole('button', { name: '+1' })
        const subButton = screen.getByRole('button', { name: '-1' })

        // clicando no botão '+1' 
        fireEvent.click(addButton)

        // verifica se o contador adicionou +1
        expect(contador).toHaveTextContent('1')

        // clicando no botão -1
        fireEvent.click(subButton)

        // verifica se contador subtraiu -1
        expect(contador).toHaveTextContent('0')
    })

    test('6. O botão restaurar não deve está do documento', () => {
        render(<Contador />)

        // procurar por botão 'Restaurar'
        const restButton = screen.queryByRole('button', { name: 'Restaurar' })

        // verificar se o botão não está na DOM
        expect(restButton).not.toBeInTheDocument()
    })

    test('7. Quando o contador for maior que 1 o botão restaurar deve está no documento', ()=>{
        render(<Contador />)

        // encontrando display do contador
        const contador = screen.getByTestId('contador-valor')

        // encontrando botão '+1'
        const addButton = screen.getByRole('button', '+1')


        // clicando no botão '+1'
        fireEvent.click(addButton)

        // encontrnado o botão restaurar
        const restButton = screen.getByRole('button', 'Restaurar')

        // verificando se o botão está na DOM
        expect(restButton).toBeInTheDocument()
    })

    test('8. Ao clicar no botão Restaurar o contador deve voltar para Zero', () => {
        render(<Contador />)

        // encontrando display do contador
        const contador = screen.getByTestId('contador-valor')

        // encontrando botão '+1'
        const addButton = screen.getByRole('button', '+1')


        // clicando no botão '+1'
        fireEvent.click(addButton)

        // encontrnado o botão restaurar
        const restButton = screen.getByRole('button', 'Restaurar')

        // verificando se o botão está na DOM
        expect(restButton).toBeInTheDocument()

        // clicando no botão restaurar
        fireEvent.click(restButton)

        // verificando se o display do contador é igual a zero
        expect(contador).toHaveTextContent('0')

    })

})