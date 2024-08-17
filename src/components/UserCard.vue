<template>
  <div v-if="short" class="user-card-short" :class="{active:active}" @click="$emit('userClicked', user)">
    <div class="img-wrapper"><img src="@/assets/images/image.png" /></div>
    <div class="user-info-wrapper">
      <div class="semibold-text fs-16px">{{ user.username }}</div>
      <div class="text-color-gray-3">{{ user.email }}</div>
    </div>
  </div>
  <div v-else class="user-card-full">
    <div class="img-wrapper"><img src="@/assets/images/image.png" /></div>
    <div class="user-info-wrapper">
      <div class="semibold-text fs-16px">{{ user.name }}</div>
      <div class="user-info">
        <div class="semibold-text">email:</div>
        <div class="text-color-gray-3">{{ user.email }}</div>
      </div>
      <div class="user-info">
        <div class="semibold-text">phone:</div>
        <div class="text-color-gray-3">{{ user.phone }}</div>
      </div>
      <div class="semibold-text fs-16px about-user-title">О себе:</div>
      <p class="text-color-gray-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    short: Boolean,
    user: Object,
    active: Boolean,
  },
  emits: ["userClicked"],
};
</script>
  
<style lang="scss" scope>
.user-info-wrapper {
  display: flex;
  flex-direction: column;
}
.user-card-short,
.user-card-full {
  img {
    object-fit: cover;
  }
  .img-wrapper {
    background: white;
  }
}
.user-card-short {
  border: 2px solid var(--color-gray-1);
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  margin: 20px 0;
  cursor: pointer;
  &:first-child {
    margin-top: 0;
  }
  .img-wrapper {
    img {
      width: 70px;
      height: 70px;
    }
  }
  .user-info-wrapper {
    border-left: 2px solid var(--color-gray-1);
    flex: 1;
    padding: 15px;
    gap: 5px;
  }
  &.active .user-info-wrapper {
    background: var(--color-gray-1);
  }
}
.user-card-short:hover {
  .user-info-wrapper {
    background: var(--color-gray-1);
  }
}
.user-card-full {
  display: flex;
  gap: 60px;
  .img-wrapper {
    width: 100%;
    height: 100%;
  }
  .user-info-wrapper {
    gap: 10px;
    .user-info {
      display: flex;
      gap: 5px;
    }
    .about-user-title {
      padding: 10px 0;
    }
  }
}
@media all and (max-width: 1170px) {
  .user-card-full {
    flex-direction: column;
    height: 100%;
    overflow: auto;
    .img-wrapper {
      display: flex;
      justify-content: center;
      img {
        height: 200px;
      }
    }
  }
}
@media all and (max-width: 750px) {
  .user-card-full {
    overflow: hidden;
    height: unset;
  }
}
</style>
  