<script>
export default {
  data() {
    return {
      sortKey: '',
      search: '',
      reverse: false,
      columns: ['ID', 'IP', 'Date', 'Browser', 'OS', 'Country', 'Type'],
      people: [
        { ID: 0, IP: '127.0.0.1', Date: '10.05.2024', Browser: 'Unkown', OS: 'Windows 7', Country: 'United State', Type: '</>SQLI' },
        { ID: 3, IP: '127.0.0.2', Date: '10.05.2023', Browser: 'Unkown', OS: 'Windows 8', Country: 'United State', Type: '</>SQLI' },
        { ID: 5, IP: '127.0.0.5', Date: '10.05.2021', Browser: 'Unkown', OS: 'Windows 7', Country: 'United State', Type: '</>SQLI' },
        { ID: 87, IP: '127.0.0.7', Date: '10.05.2020', Browser: 'Unkown', OS: 'Windows 9', Country: 'United State', Type: '</>SQLI' },
        { ID: 12, IP: '127.0.0.8', Date: '10.05.2025', Browser: 'Unkown', OS: 'Windows 7', Country: 'United State', Type: '</>SQLI' },
        { ID: 1, IP: '127.0.0.9', Date: '10.05.2026', Browser: 'Unkown', OS: 'Windows 7', Country: 'Brazil', Type: '</>SQLI' },
        { ID: 6, IP: '127.0.0.10', Date: '10.05.2028', Browser: 'Unkown', OS: 'Windows 7', Country: 'Kanada', Type: '</>SQLI' },
        { ID: 2, IP: '127.0.0.12', Date: '10.05.2027', Browser: 'Unkown', OS: 'Windows 7', Country: 'United State', Type: '</>SQLI' },
        { ID: 4, IP: '127.0.0.15', Date: '10.05.2018', Browser: 'Unkown', OS: 'Windows 7', Country: 'Spanish', Type: '</>SQLI' },
        { ID: 9, IP: '127.0.0.17', Date: '10.05.2019', Browser: 'Unkown', OS: 'Windows 7', Country: 'Italia', Type: '</>SQLI' },
        { ID: 10, IP: '127.0.0.19', Date: '10.05.2016', Browser: 'Unkown', OS: 'Windows 7', Country: 'France', Type: '</>SQLI' },
        { ID: 11, IP: '127.0.0.13', Date: '10.05.2015', Browser: 'Unkown', OS: 'Windows 7', Country: 'Germany', Type: '</>SQLI' },
        { ID: 7, IP: '127.0.0.14', Date: '10.05.2014', Browser: 'Unkown', OS: 'Windows 7', Country: 'Great Britan', Type: '</>SQLI' },
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
        .filter((person) => person.ID.toString().includes(this.search.toLowerCase()))
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
          <tr v-for="person in sortedPeople" :key="person.ID">
            <td>{{ person.ID }}</td>
            <td>{{ person.IP }}</td>
            <td>{{ person.Date }}</td>
            <td>{{ person.Browser }}</td>
            <td>{{ person.OS }}</td>
            <td>{{ person.Country }}</td>
            <td>{{ person.Type }}</td>
            <td><a href="#">Детяли</a><a href=""></a><a href=""></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container{
  background: #343549;  
}
#vue-table {
  margin: 2em 0;
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
