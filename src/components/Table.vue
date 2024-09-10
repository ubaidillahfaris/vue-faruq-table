<template>
    <TableOptions
      @on-search="onSearchHandler"
      @mass-delete="massDeleteHandler"
      :create-fun="() => createFun()"
      :is-check-all="isCheckAll"
      @clear-check="clearCheckHandler">
    <template v-slot:filter>
      <slot name="filter"></slot>
    </template>
    </TableOptions>
    
    <div class="flex flex-col pt-3">
      <div class="overflow-x-auto">
        <table class="w-full divide-y whitespace-nowrap divide-gray-200 dark:divide-gray-600">
          <thead class="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th v-if="hasCheck" class="p-4 w-6">
                <div class="flex items-center">
                  <input
                    @change="checkAllHandler"
                    v-model="isCheckAll"
                    id="checkbox-all"
                    type="checkbox"
                    class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all" class="sr-only">checkbox</label>
                </div>
              </th>
              <th
                v-for="(item, index) in header"
                :key="index"
                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
              >
                {{ item }}
              </th>
              <th v-show="deleteFun != null || editFun != null" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            <tr
              v-for="(item, index) in data.data"
              :key="index"
              class="hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td v-if="hasCheck" class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    :id="'checkbox-' + item.id"
                    :value="item.id"
                    v-model="checkedItems"
                    type="checkbox"
                    class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label :for="'checkbox-' + item.id" class="sr-only">checkbox</label>
                </div>
              </td>
              <td
                v-for="(itemCol, indexCol) in item"
                :key="indexCol"
                v-show="indexCol != primaryKey && !hiddenIndex?.includes(indexCol)"
                class="p-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ itemCol }}
              </td>
              <td class="p-4 space-x-2 whitespace-nowrap">
                <button
                  v-if="editFun"
                  @click="editFun(item.id)"
                  type="button"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Edit
                </button>
                <button
                  v-if="deleteFun"
                  @click="singleDeleteHandler(item.id)"
                  type="button"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
    <div
      class="sticky bottom-0 right-0 w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex items-center mb-4 sm:mb-0">
        <button
          @click="onChangePage(data.prev_page_url)"
          class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"/></svg>
        </button>
        <button
          @click="onChangePage(data.next_page_url)"
          class="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"/></svg>
        </button>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing
          <span class="font-semibold text-gray-900 dark:text-white">{{ data?.from ?? 0 }}-{{ data?.to ?? 0 }}</span>
          of
          <span class="font-semibold text-gray-900 dark:text-white">{{ data?.total ?? 0 }}</span>
        </span>
      </div>
      <div class="flex items-center space-x-3">
        <button
          @click="onChangePage(data.prev_page_url)"
          class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"/></svg>
          Previous
        </button>
        <button
          @click="onChangePage(data.next_page_url)"
          class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Next
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"/></svg>
        </button>
      </div>
    </div>
  
    <ConfirmationModal
      v-if="showDeleteModal"
      @confirm="acceptDeleteHandler"
      @cancel="toggleDeleteModal"
      :text="alertText"
    />
  </template>
  
  <script>
  import TableOptions from './Options.vue';
  import ConfirmationModal from './Modal.vue';
  
  export default {
    components: {
      TableOptions,
      ConfirmationModal,
    },
    props: {
      hiddenIndex:{
        type:Array,
        required:false
      },
      primaryKey: {
        type: String,
        default: 'id',
      },
      data: {
        type: Object,
        required: true,
      },
      header: {
        type: Array,
        required: true,
      },
      createFun: {
        required:false
      },
      editFun: Function,
      deleteFun: Function,
      alertText: {
        type: String,
        default: 'Are you sure you want to delete this item?',
      },
      customParam: {
        type: Object,
        default: () => ({}),
      },
      hasCheck: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        search: '',
        isCheckAll: false,
        checkedItems: [],
        selectedId: null,
        showDeleteModal: false,
        createUrl:null,
        createFunData:null
      };
    },
    mounted() {
      if (typeof this.createFun == 'string') {
        this.createUrl = this.createFun;
      }else if(typeof this.createFun == 'function'){
        this.createFunData = this.createFun
      }
    },
    methods: {
      onSearchHandler(value) {
        this.$emit('on-search', value);
      },
      checkAllHandler() {
        this.checkedItems = this.isCheckAll ? this.data.data.map((item) => item[this.primaryKey]) : [];
      },
      clearCheckHandler() {
        this.isCheckAll = false;
        this.checkedItems = [];
      },
      onChangePage(url) {
        this.$emit('on-change-page', url);
      },
      toggleDeleteModal() {
        this.showDeleteModal = !this.showDeleteModal;
      },
      singleDeleteHandler(id) {
        this.selectedId = [id];
        this.toggleDeleteModal();
      },
      massDeleteHandler() {
        if (this.checkedItems.length > 0) {
          this.selectedId = this.checkedItems;
          this.toggleDeleteModal();
        }
      },
      acceptDeleteHandler() {
        this.deleteFun(this.selectedId);
        this.toggleDeleteModal();
        this.clearCheckHandler();
      },
    },
  };
  </script>
  