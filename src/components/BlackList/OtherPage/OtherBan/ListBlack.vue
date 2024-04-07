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
    <div class="vue-table">
    <div id="vue-table-OC">
      <h3>Забанить браузер, ОС или провайдера</h3>
      <div class="container_search">
        <input type="text" v-model="search" placeholder="Search:" class="form-control" />
      </div>

      <div class="choose">
        <h3>Тип:</h3>
        <select name="select" id="">
          <option value="">Браузер</option>
          <option value="">OC</option>
          <option value="">ID</option>
        </select>
      </div>
    <div class="delete_all">
      <div class="button">
      <button>
        Блок
        </button>
      <button>
        Сброс настроек
        </button>
    </div>
    </div>
    </div>
    <div id="vue-table">
      <h3>Заблокированный Интернет-провайдер</h3>
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
    <div id="vue-table">
      <h3>Заблокированный Интернет-провайдер</h3>
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
    <div id="vue-table">
      <h3>Заблокированный Интернет-провайдер</h3>
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
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin-top: 16px;
  border-radius: 12px;
  display: flex;
  padding: 0 5px;
}
.vue-table{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#vue-table{
  height: 251px;
  width: 552px;
  background: #343549;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
}
#vue-table a {
  font-weight: bold;
  text-decoration: none;
}
#vue-table{
  height: 281px;
  background: #343549;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
table {
  width: 100%;
  height: 44px;
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
  padding: 0 20px;
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
  background: #515266;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 41px;
  width: 100%;
  border-radius: 8px;
}
.delete_all {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  text-align: center;
}
.delete_all button {
  width: 30px;
  height: 30px;
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
#vue-table-OC{
  height: 251px;
  width: 552px;
  background: #343549;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 8px;
}
#vue-table-OC input{
  width: 512px;
}
#vue-table-OC button{
  height: 44px;
  width: 245px;
  font-size: 14px;
  cursor: pointer;
}
#vue-table-OC button:first-child{
  background: #C30000;
}
#vue-table-OC button:last-child{
  background: inherit;
  border:1px solid #6C5DD3;
  color: #6C5DD3;
}
#vue-table-OC .choose h3{
  margin-right: 10px; 
}
 @media (max-width: 1366px) {
  .container {
    width: 100%;
    margin-top: 16px;
    border-radius: 12px;
    display: flex;
    padding: 0 5px;
    }
  .vue-table{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  #vue-table{
    height: 170px;
    width: 379px;
    background: #343549;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
  }
  #vue-table h3{
font-size: 13px;
  }
  #vue-table a {
    font-weight: bold;
    text-decoration: none;
  }  
  #vue-table-OC{
    height: 170px;
    width: 379px;
    background: #343549;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 8px;
    padding: 10px;
  }
  #vue-table-OC h3{
    font-size: 16px;
  }
  #vue-table-OC .delete_all {
    width: 279px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    font-size: 13px;
    text-align: center;
  }

  #vue-table-OC button{
    height: 34px;
    width: 115px;
    margin: 5px;
    font-size: 12px;
  }
  #vue-table-OC .choose h3{
    margin-right: 10px; 
  }
  table {
    width: 100%;
    height: 44px;
    padding: 0px 20px;
  }
  .container_search {
    margin: 15px 0;
  }
  .container_search input {
    width: 123px;
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
    width: 140px;
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
  
  .container_search {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  
  .choose {
    width: 80px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .choose h3{
  margin-right: 10px;
  }
  
  .choose select {
    width: 99px;
    height: 24px;
    border-radius: 10px;
    background: #28293B;
    color: #fff;
    padding-left: 5px;
  }
  
  .choose option {
    height: 100%;
  }
  
  .No_data{
    background: #515266;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 100%;
    border-radius: 8px;
  }
  .delete_all {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 13px;
    text-align: center;
  }
  
  .delete_all button {
    width: 18px;
    height: 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 5px;
    color: #fff;
    background: inherit;
    font-size: 8px;
    border: 1px solid #515266;
  }
  .delete_all button:first-child{
   padding-left:2px ;
  }
 }
</style>
