<template>
  <li class="flex" :class="personal ? 'flex-row-reverse' : 'flex-row'">
    <div
      class="p-2 rounded-lg mx-4 my-3 relative"
      :class="personal ? 'bg-blue-500 text-white' : 'bg-gray-200'"
    >
      <slot></slot>
      <div v-if="!personal" class="absolute text-xs bg-gray-300 p-0.5 rounded-lg">{{username}}</div>
    </div>
    <div class="flex-1"></div>
  </li>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    personal: Boolean,
    username: String
  },
});
</script>
