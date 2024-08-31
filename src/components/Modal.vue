<template>
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <div
        class="relative w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
      >
        <div class="text-lg font-medium text-gray-900 dark:text-white">
          Confirm
        </div>
        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {{ text }}
        </p>
        <div class="flex justify-end mt-6">
          <button
            @click="$emit('cancel')"
            class="px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600"
          >
            Cancel
          </button>
          <button
            @click="$emit('confirm')"
            class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        default: 'Are you sure you want to delete this item?',
      },
    },
  };
  </script>
  