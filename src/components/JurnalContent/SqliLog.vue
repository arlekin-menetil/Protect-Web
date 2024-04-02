<script>
export default {
  data() {
    return {
      sortKey: '',
      search: '',
      reverse: false,
      columns: ['ID', 'IP', 'Date', 'Browser', 'OS', 'Country', 'Type','Details'],
      people: [
        { ID: 0, IP: '127.0.0.1', Date: '10.05.2024', Browser: 'Unkown', OS: 'Windows 7', Country: 'United State', Type: '</>SQLI' },
        { ID: 3, IP: '127.0.0.2', Date: '10.05.2023', Browser: 'Unkown', OS: 'Windows 8', Country: 'United State', Type: '</>SQLI' },
        { ID: 5, IP: '127.0.0.5', Date: '10.05.2021', Browser: 'Unkown', OS: 'Windows 7', Country: 'United State', Type: '</>SQLI' },
        { ID: 87, IP: '127.0.0.7', Date: '10.05.2020', Browser: 'Unkown', OS: 'Windows 9', Country: 'United State', Type: '</>SQLI' },
        { ID: 12, IP: '127.0.0.8', Date: '10.05.2025', Browser: 'Unkown', OS: 'Windows 7', Country: 'United State', Type: '</>SQLI' },
        { ID: 1, IP: '127.0.0.9', Date: '10.05.2026', Browser: 'Unkown', OS: 'Windows 7', Country: 'Brazil', Type: '</>SQLI' },
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
      <div class="container_search">
          <div class="choose">
            <h3>Show</h3>
            <select name="select" id="">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
              <input type="text" v-model="search" placeholder="Search:" class="form-control" />
      </div>

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
            <td>{{ person.Details }}
              <button class="detals">Детали</button>
              <button class="unban">Unban</button>
              <button class="delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="delete_all">
        <h3>Showing 1 to 1 of 1 entries</h3>
        <button>Удалить все</button>
                </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  width: 100%;
  height: auto;
  background: #343549;
  margin-top: 72px;  
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}
#vue-table a {
  font-weight: bold;
  text-decoration: none;
}
table{
width: 100%;
padding:  10px 20px;
}
.container_search input{
  width: 233px;
  height: 44px;
  outline: none;
  background: url(../../../public/icons/search\ 2.png) no-repeat center left 12px #28293B;
  padding-left: 36px;
  color: #fff;
  border: none;
  border-radius: 10px;
}
table thead{
  background: #28293B;
}
table th{
  height: 44px;
}
table a{
  color: #fff;
  width: 83px;
  height: 20px;
  padding:15px 50px;
}
table a:first-child{
  background: url('../../../public/logo/gerb.png');
}
table td{
  background: #454659;
  height: 52px;
  padding-left: 12px;
}
table button{
  width: 70px;
  height: 32px;
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 5px;
  color: #fff;
}
.detals{
  background: #6C5DD3;
}
.unban{
  background: #4DD137;
}
.delete{
  background: #C30000;
}
.container_search{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
}
.choose{
  width: 160px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.choose select{
  width: 99px;
  height: 44px;
  border-radius: 10px;
  background: #28293B;
  color: #fff;
  padding-left: 5px;
}
.choose option{
  height: 100%;
}
.delete_all{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 32px 20px;
}
.delete_all button{
  background: #C30000;
  width: 170px;
  height: 44px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 5px;
  color: #fff;
}
</style>
