import { action } from '@storybook/addon-actions'

import Counter from '../Counter.svelte'

export default {
  title: 'Counter',
  component: Counter,
}

export const BasicCounter = () => ({
  Component: Counter,
})

export const StartValueTen = () => ({
  Component: Counter,
  props: {
    value: 10,
  },
})
StartValueTen.story = { name: 'Start value of ten' }

export const StepsOfFive = () => ({
  Component: Counter,
  props: {
    step: 5,
  },
})
StepsOfFive.story = { name: 'Increments by five' }

export const CustomEventDispatch = () => ({
  Component: Counter,
  on: { counter: action('clicked') },
})
CustomEventDispatch.story = { name: 'CustomEvent dispatched' }
