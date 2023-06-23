<template>
  <header class="header" :class="{ 'sticky': isSticky }">
      <HeaderAction :place='"header"' />
  </header>
</template>

<script>
import HeaderAction from "@/components/HeaderAction.vue";

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
    },
    components: {
      HeaderAction
    }
}
</script>
<style lang="stylus" scoped>
.header {
    height: 72px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    margin-bottom: 50px;
    display: flex;
    place-content: flex-end;
    align-items: center;

    &.sticky {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }
}
</style>