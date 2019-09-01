<template>
    <div class="grid-loader">
        <vue-loaders-line-scale-party color="#3EAAFD"></vue-loaders-line-scale-party>
    </div>
</template>
<script>
export default {
    name:'Loader',
}  
</script>
<style lang="scss">
@import '../../node_modules/vue-loaders/dist/vue-loaders.css';

    .grid-loader{
      text-align:center;
        width:100%;
        padding:20px 0px;
        min-height:100px;
    }
</style>
