<template>
  <div class="default-layout">
    <aside>
      <slot name="side"></slot>
    </aside>
    <main>
      <slot name="main"></slot>
    </main>
  </div>
</template>
  
<script>
export default {};
</script>
  
<style lang="scss" scope>
.default-layout {
  flex: 1;
  display: flex;
  margin: 0 50px 50px 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: var(--color-gray-light);
  max-height: 80vh;
  aside {
    width: 300px;
    display: flex;
    padding: 27px 20px;
  }
  main {
    flex: 1;
    overflow: hidden;
    padding: 30px;
    border-left: 1px solid var(--color-gray-1);
    background: white;
  }
}
@media all and (max-width: 750px) {
  body {
    overflow: auto !important;
  }
  .default-layout {
    flex-direction: column;
    height: unset;
    max-height: unset;
    aside {
      flex: 1;
      width: unset;
    }
    main {
      overflow: visible;
    }
  }
}
</style>
  