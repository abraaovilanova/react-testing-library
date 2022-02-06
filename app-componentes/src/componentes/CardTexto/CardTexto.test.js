import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import CardTexto from './CardTexto'

const texto1 = 'Meu titulo'
const texto2 = 'Meu subtitulo'
const texto3 = 'Meu paragrafo de informações'

describe('Testes Unitários para o componente CardTexto', () => {
    test('1. O componente deve mostrar o titulo passado pelo usuario',() => {
        render(<CardTexto texto1={texto1} />)

        const nodeTitle1 = screen.getByTestId('titulo1')
        expect(nodeTitle1).toHaveTextContent(texto1)
    })

    test('2. O componente deve mostrar o Titulo 1 quando nenhum texto é passado pelo usuario',() => {
        render(<CardTexto />)

        const nodeTitle1 = screen.getByTestId('titulo1')
        expect(nodeTitle1).toHaveTextContent('Titulo 1')
    })

    test('3. O componente deve mostrar o subtitulo passado pelo usuário', async () => {
        render(<CardTexto texto2={texto2} />)

        const nodeTitle2 = await screen.findByText(texto2)
        expect(nodeTitle2).toHaveTextContent(texto2)
    })

    test('4. O componente deve mostrar o subtitulo Subtitulo quando nenhum texto for passado pelo usuario', async () => {
        render(<CardTexto />)

        const nodeTitle2 = await screen.findByText('Titulo 2')
        expect(nodeTitle2).toHaveTextContent('Titulo 2')
    })

    test('5. Quando não passar uma informação deve aparecer o lorem ', async () => {
        render(<CardTexto />)

        const nodeTitle2 = await waitFor(() => screen.findByText(/Lorem/i),{ timeout: 3000 });
        expect(nodeTitle2).toHaveTextContent(/Lorem ipsum/i)
    })
    test('6. Quando não passar uma informação deve aparecer o texto informado no paragrafo ', async () => {
        render(<CardTexto />)

        const nodeTitle2 = await waitFor(() => screen.findByText(/Lorem/i),{ timeout: 3000 });
        expect(nodeTitle2).toHaveTextContent(/Lorem ipsum/i)
    })
})

