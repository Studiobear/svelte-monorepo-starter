import { render, fireEvent } from '@testing-library/svelte'
import Counter from '../Counter.svelte'

describe('Counter', () => {
  test('should render component correctly', () => {
    const { getByText } = render(Counter)

    expect(getByText('Default Counter')).toBeInTheDocument()
  })

  test('increments text on + click', async () => {
    const { getByText } = render(Counter)
    const incrementBttn = getByText('+')

    // Using await when firing events is unique to the svelte testing library because
    // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
    await fireEvent.click(incrementBttn)

    expect(getByText('1')).toBeInTheDocument()
  })

  test('decrements text on - click', async () => {
    const { getByText } = render(Counter)
    const incrementBttn = getByText('-')

    await fireEvent.click(incrementBttn)

    expect(getByText('-1')).toBeInTheDocument()
  })

  test('set start value to ten', async () => {
    const { getByText } = render(Counter, { value: 10 })

    expect(getByText('10')).toBeInTheDocument()
  })

  test('increments step set to five', async () => {
    const { getByText } = render(Counter, { step: 5 })
    const incrementBttn = getByText('+')

    await fireEvent.click(incrementBttn)

    expect(getByText('5')).toBeInTheDocument()
  })

  // TODO: Test CustomEvent from eventDispatcher. Currently no known solutions using testing-library (https://github.com/testing-library/native-testing-library/issues/58).
})
