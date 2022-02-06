import Dropdown from './Dropdown'

import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

//Mock dos dados
const title = 'Selecione seu Piloto de F1'
const options = ['Hamilton',"Verstappen",'Bottas']


describe('Dropdown', () => {
    test('Should start closed', () => {

        render(<Dropdown 
            title={title} 
            options={options}
            onSelect={() => {}} />)
        
        expect(screen.queryByText(options[0])).not.toBeInTheDocument()
        expect(screen.queryByText(options[1])).not.toBeInTheDocument()
        expect(screen.queryByText(options[2])).not.toBeInTheDocument()

    })
    test('Should show options when open', () => {
        render(<Dropdown 
            title={title} 
            options={options}
            onSelect={() => {}} />)

            expect(screen.queryByText(options[0])).not.toBeInTheDocument()
            expect(screen.queryByText(options[1])).not.toBeInTheDocument()
            expect(screen.queryByText(options[2])).not.toBeInTheDocument()

            const dropdpwnButton = screen.getByRole('button', { name: title})
            userEvent.click(dropdpwnButton)

            // expect(screen.queryByText(options[0])).toBeInTheDocument()
            // expect(screen.queryByText(options[1])).toBeInTheDocument()
            // expect(screen.queryByText(options[2])).toBeInTheDocument()

            expect(screen.getByRole('menuitem', {name: options[0] })).toBeInTheDocument()
            expect(screen.getByRole('menuitem', {name: options[1] })).toBeInTheDocument()
            expect(screen.getByRole('menuitem', {name: options[2] })).toBeInTheDocument()

    })
    test('Should signal an option was selected and close the dropdown', () => {
        const onSelect = jest.fn()

        render(<Dropdown 
            title={title} 
            options={options}
            onSelect={onSelect} />)

        const dropdpwnButton = screen.getByRole('button', { name: title})
        userEvent.click(dropdpwnButton)

        expect(screen.getByRole('menuitem', {name: options[0] })).toBeInTheDocument()
        expect(screen.getByRole('menuitem', {name: options[1] })).toBeInTheDocument()
        expect(screen.getByRole('menuitem', {name: options[2] })).toBeInTheDocument()

        userEvent.click(screen.getByRole('menuitem', {name: options[0] }))

        expect(onSelect).toHaveBeenCalledWith(options[0])

        expect(screen.queryByText(options[0])).not.toBeInTheDocument()
        expect(screen.queryByText(options[1])).not.toBeInTheDocument()
        expect(screen.queryByText(options[2])).not.toBeInTheDocument()

    })
})