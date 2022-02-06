import { render, screen, fireEvent } from '@testing-library/react'
import Contador from './Contador'

// Testes Unitários
/**
* 1. O contador deve iniciar com zero
* 2. Ao clicar no botão +1 deve ser adicionado 1 ao valor do contador
* 3. ao clicar no botão -1 deve ser adicionado -1 ao valor do contador
* 4. Ao clicar no botão Restaurar o contador deve voltar para Zero
* 5. O botão restaurar não deve está na DOM se o contador estiver zerado
* 6. Se o contador estiver zerado o botão de subtrair deve está desabilitado (ou seja, o contador não pode ter valores negativos)
* 7. Se o contador estiver com um número maior que zero deve aparecer um botão de restaurar
* 8. Ao clicar no botão restaurar o contador deve voltar para zero
*/

describe('Testes Unitários do componente Contador', ()=>{
    test('1. contador deve iniciar o display com zero', ()=>{
        render(<Contador />)

        const nodeDisplayContador = screen.getByTestId('display-contador')
        expect(nodeDisplayContador).toHaveTextContent('0')
    })

    test('2. Ao clicar no botão +1 deve ser adicionado 1 ao valor do contador', ()=>{
        render(<Contador />)

        const nodeAddBtn = screen.getByTestId('btn-add')
        fireEvent.click(nodeAddBtn)

        const nodeDisplayContador = screen.getByTestId('display-contador')
        expect(nodeDisplayContador).toHaveTextContent('1')
     
    })

    test('3. Ao clicar no botão -1 deve ser subtrair 1 ao valor do contador', ()=>{
        render(<Contador />)

        const nodeAddBtn = screen.getByTestId('btn-add')
        const nodeSubBtn = screen.getByTestId('btn-sub')
        const nodeDisplayContador = screen.getByTestId('display-contador')

        fireEvent.click(nodeAddBtn)
        fireEvent.click(nodeSubBtn)

        expect(nodeDisplayContador).toHaveTextContent('0')
     
    })

    test('4. Ao clicar no botão Restaurar o contador deve voltar para Zero', ()=>{
        render(<Contador />)

        const nodeAddBtn = screen.getByTestId('btn-add')

        const nodeDisplayContador = screen.getByTestId('display-contador')
        
        fireEvent.click(nodeAddBtn)

        const nodeRestBtn = screen.getByTestId('btn-restaurar')

        fireEvent.click(nodeRestBtn)
        
        expect(nodeDisplayContador).toHaveTextContent('0')
     
    })

    test('5. O botão restaurar não deve está na DOM se o contador estiver zerado', ()=>{
        render(<Contador />)
        
        const nodeDisplayContador = screen.getByTestId('display-contador')

        expect(nodeDisplayContador).toHaveTextContent('0')
        
        const nodeRestBtn = screen.queryByTestId('btn-restaurar')

        expect(nodeRestBtn).not.toBeInTheDocument()  // it doesn't exist
     
    })

    test('6. Se o contador estiver zerado o botão de subtrair deve está desabilitado (ou seja, o contador não pode ter valores negativos)', ()=>{
        render(<Contador />)
        
        const nodeDisplayContador = screen.getByTestId('display-contador')

        expect(nodeDisplayContador).toHaveTextContent('0')
        
        const nodeSubBtn = screen.getByTestId('btn-sub')

        expect(nodeSubBtn).toBeDisabled()
     
    })

    test('7. Se o contador estiver com um número maior que zero deve aparecer um botão de restaurar', ()=>{
        render(<Contador />)
        
        const nodeDisplayContador = screen.getByTestId('display-contador')
        const nodeAddBtn = screen.getByTestId('btn-add')
        fireEvent.click(nodeAddBtn)
        expect(nodeDisplayContador).toHaveTextContent('1')


        
        const nodeRestBtn = screen.getByTestId('btn-restaurar')

        expect(nodeRestBtn).toBeInTheDocument()  // it exist
     
    })

    test('8. Ao clicar no botão restaurar o contador deve voltar para zero', ()=>{
        render(<Contador />)
        
        const nodeDisplayContador = screen.getByTestId('display-contador')
        const nodeAddBtn = screen.getByTestId('btn-add')
        fireEvent.click(nodeAddBtn)
        fireEvent.click(nodeAddBtn)
        expect(nodeDisplayContador).toHaveTextContent('2')

        const nodeRestBtn = screen.getByTestId('btn-restaurar')
        expect(nodeRestBtn).toBeInTheDocument()  // it exist

        fireEvent.click(nodeRestBtn)
        expect(nodeDisplayContador).toHaveTextContent('0')
        expect(nodeRestBtn).not.toBeInTheDocument()  // it exist

        const nodeSubBtn = screen.getByTestId('btn-sub')
        expect(nodeSubBtn).toBeDisabled()

    })
 


})