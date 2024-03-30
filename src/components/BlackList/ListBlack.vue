<script>
import { ref, computed } from 'vue';

export default {
  data() {
    return {
      sortKey: '',
      search: '',
      reverse: false,
      columns: ['ID', 'IP адрес', 'age'],
      people: [
        { name: 'John', age: 50 },
        { name: 'Jack', age: 35 },
        { name: 'Keith', age: 28 },
        { name: 'Alain', age: 17 },
        { name: 'Neil', age: 1 },
        { name: 'Mark', age: 72 },
        { name: 'Don', age: 47 },
        { name: 'Walter', age: 41 },
        { name: 'Jessy', age: 33 },
        { name: 'Henck', age: 22 },
        { name: 'Sal', age: 9 },
        { name: 'Skyler', age: 42 },
        { name: 'Holly', age: 55 },
      ],
    };
  },
  methods: {
    sortBy(sortKey) {
      this.reverse = this.sortKey === sortKey ? !this.reverse : false;
      this.sortKey = sortKey;
    },
  },
  computed: {
    sortedPeople() {
      return this.people
        .filter((person) => person.name.toLowerCase().includes(this.search.toLowerCase()))
        .sort((a, b) => {
          const modifier = this.reverse ? -1 : 1;
          if (a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
          if (a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
          return 0;
        });
    },
  },
};
</script>

<template>
    <div class="container">
      <div id="vue-table">
        <input type="text" v-model="search" class="form-control" />
        <table class="table table-striped">
          <thead>
            <tr>
              <th v-for="column in columns" :key="column">
                <a href="#" @click="sortBy(column)" :class="{ active: sortKey === column }">
                  {{ column }}
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="person in sortedPeople" :key="person.name">
              <td>{{ person.name }}</td>
              <td>{{ person.age }}</td>
              <td>{{ person.age }}</td>
              <td><Button>bu</Button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <style scoped>
  #vue-table {
    margin: 2em 0;
    background: #343549;
  }
  
  #vue-table a {
    font-weight: bold;
    text-decoration: none;
  }
  
  #vue-table a.active {
    font-weight: bold;
    color: black;
    text-decoration: underline;
  }
  </style>
  