<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Books</h4>
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
          <button type="button" @click="saveBook" class="btn btn-primary" style="width: 200px;">Save</button>
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
  name: 'bookCreate',
  data() {
    return {
      books: {
        author: '',
        title: '',
        publisher: '',
      },
    };
  },
  methods: {
    async saveBook() {
      await axios.post('api/create_books', this.books).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
        // eslint-disable-next-line no-alert
        alert(res.data.message);
        this.books = {
          author: '',
          title: '',
          publisher: '',
        };
      });
    },
  },
};
</script>
