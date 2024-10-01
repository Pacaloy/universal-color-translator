import { describe, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

describe(App, () => {
  it('renders the title and initial UI elements correctly', () => {
    render(<App />)

    expect(screen.getByText('Universal Color Translator')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter color name...')).toBeInTheDocument()
    expect(screen.getByText('convert')).toBeInTheDocument()
    expect(screen.getByText('#FFFFFF')).toBeInTheDocument()
  })

  it('changes hex code on input red', () => {
    const { getByTestId } = render(<App />)

    const input = screen.getByPlaceholderText('Enter color name...')
    fireEvent.change(input, { target: { value: 'red' } })

    const button = screen.getByText('convert')
    fireEvent.click(button)

    const hexCode = getByTestId('hexCode').textContent
    expect(hexCode).toEqual('#FF0000')
  })

  it('changes hex code on input blue', () => {
    const { getByTestId } = render(<App />)

    const input = screen.getByPlaceholderText('Enter color name...')
    fireEvent.change(input, { target: { value: 'blue' } })

    const button = screen.getByText('convert')
    fireEvent.click(button)

    const hexCode = getByTestId('hexCode').textContent
    expect(hexCode).toEqual('#0000FF')
  })

  it('changes hex code on input green', () => {
    const { getByTestId } = render(<App />)

    const input = screen.getByPlaceholderText('Enter color name...')
    fireEvent.change(input, { target: { value: 'green' } })

    const button = screen.getByText('convert')
    fireEvent.click(button)

    const hexCode = getByTestId('hexCode').textContent
    expect(hexCode).toEqual('#008000')
  })

  // TODO
  it('no changes on invalid input', () => {
    const { getByTestId } = render(<App />)
    
    const hexCode1 = getByTestId('hexCode').textContent

    const input = screen.getByPlaceholderText('Enter color name...')
    fireEvent.change(input, { target: { value: 'invalid' } })
    
    const button = screen.getByText('convert')
    fireEvent.click(button)

    const hexCode2 = getByTestId('hexCode').textContent
    expect(hexCode1).toEqual(hexCode2)
  })
})
