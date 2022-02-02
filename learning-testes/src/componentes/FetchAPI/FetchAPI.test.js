import FetchAPI from './FetchAPI'

import '@testing-library/jest-dom'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Test for FetchAPI Component',() => {
    // test('Deve encontrar o primeiro elemento da lista de filmes', async ()=>{
    //     render(<FetchAPI />)

    //     const popularMovieListElem = await screen.findByTestId('movieid-0')
    //     expect(popularMovieListElem).toBeInTheDocument()

    // })
    test('Deve encontrar todos os elementos da lista de filmes', async ()=>{
        render(<FetchAPI />)

        // const popularMovieListElem = await screen.findAllByTestId(/movieid/)
        // expect(popularMovieListElem.length).toBe(14)

    })

})