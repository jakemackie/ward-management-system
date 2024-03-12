<template>
  <li
    :class="[
      'relative mx-auto flex w-fit cursor-pointer items-center justify-center overflow-clip rounded-lg p-3 text-zinc-900',
      { 'hover:text-zinc-500': !active },
      { 'bg-gray-100': active },
      'lg:mx-6 lg:w-auto lg:justify-start',
    ]"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
