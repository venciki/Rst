<template>
  <div class="tab_bar">
    <slot>

    </slot>
  </div>
</template>

<script>
  export default {
    name: 'tabbar',
    data() {
      return {

      }
    }
  }

</script>

<style lang="" scoped>
  .tab_bar {
    display: flex;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2); 
  }

 
</style>
