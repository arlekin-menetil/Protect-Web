<script>
export default {
  
  data() {
    return {
      sortKey: '',
      search: '',
      reverse: false,
      columns: [/*
    { icon: ['fa', 'bars'], icon2: ['fas', 'arrow-down-wide-short'], name: 'ID' },
    { icon: ['far', 'user'], icon2: ['fa', 'repeat'], name: 'IP' },
    { icon: ['far', 'calendar'], icon2:  ['fa', 'repeat'], name: 'Date' },
    { icon: ['fas', 'share'], icon2: ['fa', 'repeat'], name: 'Redirection' },*/
    { icon: ['fa', 'globe'], icon2: ['fa', 'repeat'], name: 'Autobahn' },
    { icon: ['fa', 'cog'], icon2: ['fa', 'repeat'], name: 'Details' }],
  people: [

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
      <h3 style="margin:20px 0 8px 20px ;">Заблокированный Интернет-провайдер</h3>
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
                <font-awesome-icon class="icon" :icon=column.icon /><div>{{ column.name }}</div><font-awesome-icon class="icon" :icon=column.icon2 />

              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in sortedPeople" :key="person.ID">
           <!-- <td>{{ person.ID }}</td>
            <td>{{ person.IP }}</td>
            <td>{{ person.Date }}</td>
            <td>{{ person.Redirection }}</td>-->
            <td>{{ person.Autobahn }}</td>
            <td>{{ person.Details }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="No_data">
        <h4>No data available in table</h4>
    </div>
    <div class="delete_all">
      <p>Showing 1 to 1 of 1 entries</p>
      <div class="button">
      <button class="material-symbols-outlined">
        arrow_back_ios
        </button>
      <button class="material-symbols-outlined">
        arrow_forward_ios
        </button>
    </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 552px;
  height: 281px;
  background: #343549;
  margin-top: 72px;
  border-radius: 12px;
  display: flex;
  padding: 0 5px;
}

#vue-table a {
  font-weight: bold;
  text-decoration: none;
}

table {
  width: 100%;
  height: 281px;
  padding: 10px 20px;
}

.container_search input {
  width: 223px;
  height: 44px;
  outline: none;
  background: url(../../../public/icons/search\ 2.png) no-repeat center left 12px #28293B;
  padding-left: 36px;
  color: #fff;
  border: none;
  border-radius: 10px;
}

table thead {
  background: #28293B;
}

table th {
  height: 44px;
}

table a {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;
  width: 256px;
  height: 20px;
}

table .icon {
  padding:0 15px;
}

table a:first-child {
  background: url('../../../public/logo/gerb.png');
}

table td {
  background: #454659;
  height: 52px;
  padding-left: 12px;
}

table button {
  width: 70px;
  height: 32px;
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 5px;
  color: #fff;
}

.detals {
  background: #6C5DD3;
}

.unban {
  background:url(../../../public/icons/ban.svg) no-repeat #4DD137 center left 6px;
  padding-left: 23px;
}

.delete {
  background:url(../../../public/icons/ban.svg) no-repeat #C30000 center left 6px;
  padding-left: 23px;
}

.container_search {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
}

.choose {
  width: 160px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.choose select {
  width: 99px;
  height: 44px;
  border-radius: 10px;
  background: #28293B;
  color: #fff;
  padding-left: 5px;
}

.choose option {
  height: 100%;
}

.No_data{
  position: absolute;
  background: #515266;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 41px;
  width: 512px;
  border-radius: 8px;
  top: 230%;
  left: 3.1%;
}
.delete_all {
  position: absolute;
  top: 242%;
  left: 3.1%;
  width: 512px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 32px 20px;
  text-align: center;
  align-items: center;
}

.delete_all button {
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 5px;
  color: #fff;
  background: inherit;
  border: 1px solid #515266;
}
.delete_all button:first-child{
 padding-left:7px ;
}
.delete_all button:last-child{
  padding-left:2px ;
 }
</style>
