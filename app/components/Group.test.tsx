import { render, screen } from '@testing-library/react'

import { Group } from './Group'

describe('Group', () => {
  it('should render correctly', () => {
    const { container, debug } = render(<Group>Teste</Group>)
    expect(container).toBeInTheDocument()
  })

  it('should render with children', () => {
    render(<Group>Teste</Group>)
    expect(screen.getByText(/teste/i)).toBeInTheDocument()
  })
})
