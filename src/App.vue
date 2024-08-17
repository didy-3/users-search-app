<template>
  <div class="app-wrapper">
    <header class="header">
      <h1 class="logo-text bold-text">Жилфонд</h1>
      <div class="fs-16px">Пользователь</div>
    </header>
    <DefaultLayout>
      <template #side>
        <SideBar />
      </template>
      <template #main>
        <div v-if="employeeChosen==null" class="no-data-text-wrapper">
          <div class="no-data-text">Выберите сотрудника, чтобы посмотреть его профиль</div>          
        </div>
        <UserCard v-else :user="employeeChosen" />      
      </template>
    </DefaultLayout>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SideBar from '@/components/SideBar.vue';
import UserCard from '@/components/UserCard.vue';
import DefaultLayout from '@/components/DefaultLayout.vue';
export default {
  name: 'App',
  components: {
    DefaultLayout, UserCard, SideBar
  },
  computed:{
    ...mapState({
      employeeChosen:state=>state.employeeChosen
    })
  }
}
</script>

<style lang="scss" scope>
.app-wrapper{
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1366px;
  margin: 0 auto;
}
.header{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px 50px 45px 50px;
}
.logo-text{
  color:var(--color-red);
  font-size: 32px;
  margin: 0;
}
.no-data-text-wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .no-data-text{text-align: center;width: 100%;}
}
</style>
