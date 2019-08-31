<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <img src="../../assets/images/logo.png" width="130" height="30" alt="">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item"><router-link :to="{ name: 'PostsHome'}" class="nav-link">Posts</router-link></li>
         
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  
  export default {
    name: 'AppNav',
   
     

  }

</script>

<style lang="scss" scoped>
  @import '../../../node_modules/handy.sass.mixins/scss/shared';
  @import '../../assets/sass/_variables';

  .bg-light {
    background-color: #fff !important;
    @include prefixer(box-shadow, 0 20px 40px rgba(0, 0, 0, .06), ($prefix-list));

    li {

      a {
        text-align: center;
        cursor:pointer;
        span {
          &.icon {
            margin-left: 5px;
          }
        }
      }
    }

  }

</style>
