<template>
  <div class="card">
    <div class="card-header">
      <h4>
        Book List
        <router-link to="/books/create" class="btn btn-primary float-end">
          Add Book
        </router-link>
      </h4>
    </div>
  </div>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Author</th>
      <th scope="col">Title</th>
      <th scope="col">Publisher</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(book, index) in this.books" :key="index">
      <td >{{ book.id }}</td>
      <td>{{ book.Author }}</td>
      <td>{{ book.Title }}</td>
      <td>{{ book.Pulisher }}</td>
      <td>
        <router-link :to="{ path:'/books/' + book.id }" class="btn btn-success float-end">Edit</router-link>
        <button type="button" @click="deleteBook()" class="btn btn-danger float-end">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import axios from '@/utils/axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'bookView',
  data() {
    return {
      books: {},
    };
  },
  beforeMount() {
    this.getBook();
  },
  methods: {
    async getBook() {
      await axios.get('api/books').then((res) => {
        this.books = res.data;
        // eslint-disable-next-line no-console
        console.log(this.books);
      // eslint-disable-next-line no-alert
      }).catch((err) => alert(err));
    },
    async deleteBook(bookId) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure, Bro?')) {
        await axios.delete(`api/delete_books/${bookId}`).then((res) => {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
          this.getBook();
        });
      }
    },
  },
};
</script>
