<template>
    <div class="container mt-5">
      <div class="card">
        <div class="card-header">
          <h4>Edit Books</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="Author">Author<input type="text" v-model="books.author" class="form-control" style="margin-right: 250px;"/></label>
          </div>
          <div class="mb-3">
            <label for="Title">Title<input type="text" v-model="books.title" class="form-control" style="margin-right: 250px;"/></label>
          </div>
          <div class="mb-3">
            <label for="Publisher">Publisher<input type="text" v-model="books.publisher" class="form-control" style="margin-right: 250px;"/></label>
          </div>
          <div class="mb-3">
          <button type="button" @click="updateBook" class="btn btn-primary" style="width: 200px;">Update</button>
        </div>
        <div class="mb-3">
          <router-link to="/bookView" type="button"  class="btn btn-info" style="width: 200px;">Back</router-link>
        </div>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from '@/utils/axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'bookEdit',
  data() {
    return {
      bookId: '',
      books: {
        author: '',
        title: '',
        publisher: '',
      },
    };
  },
  mounted() {
    // console.log(this.$route.params.id);
    this.bookId = this.$route.params.id;
    this.getBookData(this.$route.params.id);
  },
  methods: {
    async getBookData(bookId) {
      await axios.get(`api/get_books/${bookId}`).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
        this.books = res.data;
      });
    },

    async updateBook() {
      await axios.put(`api/update_books/${this.bookId}`, this.books).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
        // eslint-disable-next-line no-alert
        alert(res.data.message);
      });
    },
  },
};
</script>
