import TitleCard from './TitleCard'

import '@testing-library/jest-dom'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const title1 = 'My Title'
const title2 = 'Hello'

describe('Test for TitleCard Component',() => {
    test('Deve aparecer o titulo informado', async () => {
        render(<TitleCard title1={title1} />)

        const NodeTitle = screen.getByText(title1)
        expect(NodeTitle).toBeInTheDocument() 

        const nodeTitle2 = await waitFor(() => screen.findByText(/Hello/i), {
            timeout: 3000
          });
          expect(nodeTitle2).toBeInTheDocument() 
    })

    test('Deve aparecer o titulo informado 2', async () => {
        render(<TitleCard title1={title1} />)

        const NodeTitle = screen.getByText(title1)
        expect(NodeTitle).toBeInTheDocument() 

        const nodeTitle2 = await waitFor(() => screen.findByText(/Hello/i));
        expect(nodeTitle2).toBeInTheDocument() 
        
    })

    // test('Deve aparecer o titulo informado 3', async () => {
    //     render(<TitleCard title1={title1} />)

    //     const NodeTitle = screen.getByText(title1)
    //     expect(NodeTitle).toBeInTheDocument() 

    //     const nodeTitle2 = await screen.findByText(/Hello/i)
    //     expect(nodeTitle2).toBeInTheDocument() 
    // })
})