<script>
  import { createEventDispatcher } from 'svelte'
  export let value = 0
  export let step = 1

  const dispatch = createEventDispatcher()

  const onClick = value => {
    dispatch('counter', value)
  }
</script>

<div>
  <slot>Default Counter</slot>
  <div>
    {value}
    <button on:click={() => onClick((value += step))}>+</button>
    <button on:click={() => onClick((value -= step))}>-</button>
  </div>
</div>
