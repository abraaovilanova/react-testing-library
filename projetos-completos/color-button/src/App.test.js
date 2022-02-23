import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCameWithSpaces } from './App'

/*
test('button has correct initial color', () => {
  render(<App />)

  // find an element with a role of button and test of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'})
})
*/

test('button turn blue when clicked', () => {
  render(<App />)

  // find an element with a role of button and test of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'})

  // click button
  fireEvent.click(colorButton)

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red')

})

test('initial conditions', () => {
  render(<App />)

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})
  expect(colorButton).toBeEnabled()

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()

})

test('When checkbox is checked, button should be disabled', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const colorButton = screen.getByRole('button', 'Change to blue')

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test('Disabled button has gray background and reverts to red', () => {
  render(<App />)
  
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  
  // disable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  // re-enable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
})

test('Clicked disabled button has gray background and reverts to blue', ()=> {
  render(<App />)
  
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  
  // change button to blue
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  // disable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  // re-enable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCameWithSpaces('Red')).toBe('Red')
  })

  test('Works for one inner capital letter', ()=>{
    expect(replaceCameWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('Works for multiple inner capital letters', ()=>{
    expect(replaceCameWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })

})