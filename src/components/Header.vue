<template>
  <header class="header" :class="{ 'sticky': isSticky }">
    <!-- Header content -->
  </header>
</template>

<script>
export default {
  name: 'store-header',
  data() {
    return {
      isSticky: false
    };
  },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isSticky = window.pageYOffset > 100;
        }
    }
}
</script>
<style lang="stylus" scoped>
.header {
    background: #0259AB 0% 0% no-repeat padding-box;
    height: 60px;
    margin-bottom: 50px;

    &.sticky {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }
}
</style>