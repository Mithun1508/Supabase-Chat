<template>
  <div class="max-w-screen-sm relative h-full w-full bg-gray-100 flex flex-col">
    <ul
      class="flex flex-col-reverse flex-1 overflow-y-auto"
      @scroll="handleScroll"
    >
      <Message
        v-for="message in messages"
        :personal="message.username === username"
        :username="message.username"
        >{{ message.text }}</Message
      >
    </ul>
    <div
      class="
        w-[calc(100%-2rem)]
        h-16
        m-4
        p-4
        bg-gray-200
        rounded-lg
        flex
        justify-center
        items-center
      "
    >
      <input
        placeholder="Message"
        class="
          bg-white
          rounded-lg
          px-2
          py-1
          mr-2
          w-full
          focus:outline-none focus:ring focus:ring-gray-300
        "
        v-model="input"
        @keydown="handleSend"
      />
      <button
        :disabled="!input"
        class="
          bg-blue-500
          px-2
          py-1
          text-white
          rounded-lg
          hover:bg-blue-600
          disabled:opacity-50
        "
        @click="handleSend"
      >
        Send
      </button>
    </div>
  </div>
</template>
<script>
import { useMessages } from "./api";
import Message from "./components/Message.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { Message },
  setup() {
    const { username, messages, send, loadOlder } = useMessages();
    const input = ref();
    const handleScroll = (event) => {
      if (event.target.scrollTop === 0) {
        loadOlder();
      }
    };
    const handleSend = (event) => {
      if (!event.key || event.key === "Enter") {
        send(input.value);
        input.value = "";
      }
    };

    return {
      input,
      username,
      messages,
      handleScroll,
      handleSend,
    };
  },
});
</script>
<style>
html,
body,
#app {
  @apply h-full;
}
#app {
  @apply flex justify-center items-center;
}
</style>
