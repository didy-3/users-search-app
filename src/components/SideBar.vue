<template>
  <div class="sidebar-wrapper">
    <div class="semibold-text fs-16px">Поиск сотрудников</div>
    <TextInput
      placeholder="Введите имя"
      :value="searchedText"
      @update:value="setValue"
      @submited="search"
    />
    <div class="semibold-text fs-16px">Результаты</div>
    <div class="employees-list-wrapper">
      <LoaderComponent v-if="loading" />
      <div v-if="employeesList.length == 0">{{ searchState }}</div>
      <div class="employees-list">
        <UserCard
          v-for="employee in employeesList"
          :key="employee.id"
          :user="employee"
          :active="employeeChosen!=null?employeeChosen.id==employee.id:false"
          short
          @userClicked="userClicked"
        />
      </div>
    </div>
  </div>
</template>
  
<script>
import UserCard from "./UserCard.vue";
import TextInput from "./TextInput.vue";
import { mapState } from "vuex";
import LoaderComponent from "./LoaderComponent.vue";
export default {
  components: { TextInput, UserCard, LoaderComponent },
  data() {
    return {
      searchedText: "",
    };
  },
  computed: {
    ...mapState({
      loading: (state) => state.loading,
      employeesList: (state) => state.employeesList,
      searchState:(state)=>state.searchState,
      employeeChosen:(state)=>state.employeeChosen
    }),
  },
  methods: {
    setValue(value) {
      this.searchedText = value;
      if (this.searchedText.length == 0) {
        this.$store.commit("setSearchState", 'Начните поиск');
        this.$store.commit("setEmployeesList", []);
        this.$store.commit("setEmployeeChosen", null);        
        return;
      }
      this.search();
    },
    search() {
      this.$store.dispatch(
        "getEmployeesList",
        this.searchedText.replace(", ", ",").replace(" ,", ",").split(",")
      );
    },
    checkSeatchText() {
      if (this.searchedText.length != 0) return;
      this.$store.commit("setEmployeesList", []);
      this.$store.commit("setEmployeeChosen", null);
      return;
    },
    userClicked(user) {
      this.$store.commit("setEmployeeChosen", user);
    },
  },
};
</script> 
  
<style lang="scss" scope>
.sidebar-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow: hidden;
  .employees-list-wrapper {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .employees-list {
      flex: 1;
      overflow-x: auto;
      overflow-x: hidden;
      padding-right: 5px;
    }
  }
}
</style>
  