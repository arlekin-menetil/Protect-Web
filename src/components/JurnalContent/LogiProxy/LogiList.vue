<script>


export default {
  
  data() {
    return {
      sortKey: '',
      search: '',
      reverse: false,
      columns: [
        { icon: ['fa', 'bars'], icon2: ['fas', 'arrow-down-wide-short'], name: 'ID' },
        { icon: ['far', 'user'], icon2: ['fa', 'repeat'], name: 'IP' },
        { icon: ['far', 'calendar'], icon2:  ['fa', 'repeat'], name: 'Date' },
        { icon: ['fas', 'globe'], icon2: ['fa', 'repeat'], name: 'Browser' },
        { icon: ['fa', 'laptop'], icon2: ['fa', 'repeat'], name: 'OS' },
        { icon: ['fa', 'flag'], icon2: ['fa', 'repeat'], name: 'Country' },
        { icon: ['fa', 'file'], icon2: ['fa', 'repeat'], name: 'Type' },
        { icon: ['fa', 'cog'], icon2: ['fa', 'repeat'], name: 'Details' }],
      people: [
        { ID: 0, IP: '127.0.0.1', Date: '10.05.2024', Browser: 'Unkown', OS: 'Windows 7', Country: 'United State', Type: '</>SQLI' },
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
};''

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
                <font-awesome-icon class="icon" :icon=column.icon /><div>{{ column.name }}</div><font-awesome-icon class="icon" :icon=column.icon2 />

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
              <button class="detals">
  
                Детали
              </button>
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
.container {
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

table {
  width: 100%;
  padding: 10px 20px;
}

.container_search input {
  width: 233px;
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
  width: 100%;
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
  background:url(../../../public/icons/trash.svg) no-repeat #C30000 center left 6px;
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
  height: 44px;
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

.delete_all {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 32px 20px;
}

.delete_all button {
  background:url(../../../public/icons/trash.svg) no-repeat #C30000 center left 24px;
  padding-left: 30px;
  width: 170px;
  height: 44px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 5px;
  color: #fff;
}
@media(max-width: 1366px) {
  .container {
    width: 100%;
    background: #343549;
    margin-top: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
  }

  #vue-table a {
    font-weight: bold;
    text-decoration: none;
    font-size: 10px;
    padding-left: 10px;
  }
  
  table {
    width: 100%;
    padding: 10px 20px;
  }
  
  .container_search input {
    width: 233px;
    height: 34px;
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
    height: 24px;
  }
  
  table a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #fff;
    width: 100%;
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
    height: 24px;
    padding-left: 12px;
  }
  
  table button {
    width: 70px;
    height: 25px;
    background: none;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 5px;
    color: #fff;
    font-size: 10px;
  }
  
  .detals {
    background: #6C5DD3;
  }
  
  .unban {
    background:url(../../../public/icons/ban.svg) no-repeat #4DD137 center left 6px;
  }
  
  .delete {
    width: 84px; 
    background:url(../../../public/icons/trash.svg) no-repeat #C30000 center left 6px;
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
    height: 34px;
    border-radius: 10px;
    background: #28293B;
    color: #fff;
    padding-left: 5px;
  }
  
  .choose option {
    height: 100%;
  }
  .delete_all {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
    font-size: 14px;
  }
  
  .delete_all button {
    background:url(../../../public/icons/trash.svg) no-repeat #C30000 center left 24px;
    padding-left: 30px;
    width: 170px;
    height: 30px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 5px;
    color: #fff;
  }
}
</style>
