import { render } from '@testing-library/svelte'
import Counter from '../Counter.svelte'

describe('Counter', () => {
  test('should render component correctly', () => {
    const { getByText } = render(Counter)

    expect(getByText('Default Counter')).toBeInTheDocument()
  })
})
