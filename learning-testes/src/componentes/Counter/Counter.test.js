import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe("Counter component", ()=>{
    test("Deve iniciar o contador com zero", ()=>{
        render(<Counter />)

        const counterText = screen.getByText('0')

        expect(counterText).toBeInTheDocument()
    })

    test("Deve conter um botão inrementar", ()=>{
        render(<Counter />)

        const buttonIncrement = screen.getByRole('button', { name: 'Incrementar' })

        expect(buttonIncrement).toHaveClass('button')
        expect(buttonIncrement).toHaveClass('button--incrementar')
    })


    test("Deve conter um botão decrementar", ()=>{
        render(<Counter />)
        const buttonDecrementar = screen.getByRole('button', { name: 'Decrementar' })

        expect(buttonDecrementar).toHaveClass('button')
        expect(buttonDecrementar).toHaveClass('button--decrementar')
    })

    test('Deve incrmentar +1 ao clicar no botão incrementar', () => {
        render(<Counter />)

        const buttonIncrement = screen.getByRole('button', { name: 'Incrementar' })
        userEvent.click(buttonIncrement)
        expect(screen.getByText("1")).toBeInTheDocument()
    })

    test('Deve decrementar -1 ao clicar no botão decrementar', () => {
        render(<Counter />)

        const buttonDecrementar = screen.getByRole('button', { name: 'Decrementar' })
        userEvent.click(buttonDecrementar)
        expect(screen.getByText("-1")).toBeInTheDocument()
    })

    test('Deve adicionar a classe counter___title--increment no tituo quando o valor for maior que zero', ()=>{
        render(<Counter />)

        const buttonIncrement = screen.getByRole('button', { name: 'Incrementar' })
        
        expect(screen.queryByText("0")).not.toHaveClass("counter___title--increment")
        userEvent.click(buttonIncrement)
        expect(screen.getByText('1')).toHaveClass('counter__title--increment')


    })
})