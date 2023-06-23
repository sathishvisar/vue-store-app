<template>
     <div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="stylus">
.loading {
    position: fixed;
    z-index: 4;
    top: 45%;
    left: 50%;
}
</style>