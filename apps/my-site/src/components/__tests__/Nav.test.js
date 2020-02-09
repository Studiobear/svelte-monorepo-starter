import { render } from '@testing-library/svelte'
import Nav from '../Nav.svelte'

describe('Nav', () => {
  test('should render component correctly', () => {
    const { getByText } = render(Nav)

    expect(getByText('home')).toBeInTheDocument()
    expect(getByText('about')).toBeInTheDocument()
    expect(getByText('blog')).toBeInTheDocument()
  })
})
