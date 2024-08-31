<template>
    <div class="p-16">
      <Table 
        :header="['Tahun', 'Semester', 'Status']"
        :data="tahunAjaranData"
        :create-fun="createPageHandler"
        :edit-fun="editPageHandler"
        alert-text="Ingin menghapus data user?"
        :delete-fun="deleteHandler"
        @on-change-page="handleChangePage"
        @on-search="handleSearch"
      />
    </div>
  </template>
  
  <script>
  import Table from './components/Table.vue'; // Import komponen Table
  
  export default {
    components: {
      Table,
    },
    data() {
      return {
        tahunAjaranData: {
            data:[
                { tahun: '2023/2024', semester: 'Semester 1', status: 'Aktif' },
                { tahun: '2022/2023', semester: 'Semester 2', status: 'Tidak Aktif' },
                { tahun: '2021/2022', semester: 'Semester 1', status: 'Aktif' },
            ]
        },
        searchParam: '',
        page: 1,
      };
    },
    methods: {
      createPageHandler() {
        console.log('Create button clicked');
      },
      editPageHandler(id) {
        console.log('Edit button clicked for ID:', id);
      },
      deleteHandler(id) {
        console.log('Delete button clicked for ID:', id);
      },
      handleChangePage(url) {
        console.log('Page changed to:', url);
        // Simulate fetch data
        this.fetch(url);
      },
      handleSearch(value) {
        console.log('Search value:', value);
        this.searchParam = value;
        this.page = 1;
        // Simulate fetch data
        this.fetch();
      },
      fetch(url = '') {
        // Simulate fetch function
        console.log('Fetching data with URL:', url);
        // Implement your fetch logic here
      },
    },
  };
  </script>
  
  <style>
  /* Tambahkan style jika perlu */
  </style>
  