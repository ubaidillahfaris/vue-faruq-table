<template>
    <div class="flex items-center space-x-2">
      <div class="relative">
        <input
          v-model="search"
          @input="handleSearch"
          type="text"
          class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Search"
        />
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 11-1.414 1.415l-4.387-4.386zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div class="flex space-x-4">
        <Button
            v-if="createFun"
            @click="createFun"
            class="inline-flex hover:bg-neutral-100 items-center px-3 py-2
            text-neutral-700 hover:text-neutral-900 text-xs space-x-1
            dark:focus:ring-blue-800 rounded-md"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13v3q0 .425.288.713T12 17t.713-.288T13 16v-3h3q.425 0 .713-.288T17 12t-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7t-.712.288T11 8v3H8q-.425 0-.712.288T7 12t.288.713T8 13zm-6 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"/></svg>
            <span class="">Create data</span>
        </Button>

        <button
          v-if="isCheckAll"
          @click="handleMassDelete"
          class="inline-flex hover:bg-neutral-100 items-center px-3 py-2
            text-neutral-700 hover:text-red-500 text-xs space-x-1
            dark:focus:ring-blue-800 rounded-md"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13zm5 7.9l1.9 1.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"/></svg>
          <span>Delete</span>
        </button>
        <slot name="filter"></slot>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isCheckAll: {
        type: Boolean,
        required: true,
      },
      createFun:{
        type:Function
      }
    },
    data() {
      return {
        search: '',
      };
    },
    methods: {
      handleSearch() {
        this.$emit('on-search', this.search);
      },
      handleMassDelete() {
        this.$emit('mass-delete');
      },
    },
  };
  </script>
  