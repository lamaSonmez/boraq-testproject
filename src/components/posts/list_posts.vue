<template>
  <div id="posts_page">
    <div class="page_title" style="">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="wrapper">
              <h1>Blog</h1>
              <div id="breadcrumbs">
                <div id="crumbs">
                  <a href="/">Home</a>
                  <i class="fas fa-angle-righ crumbs_delimiter"></i>
                  <span>Our Blog</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="posts-section">
        <div class="container">
           <div class="row">
             <div class="col-lg-8 col-md-8 col-12">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <post></post>
                        </div>
                        <div class="col-md-6 col-12">
                            <post></post>
                        </div>
                        <div class="col-md-6 col-12">
                            <post></post>
                        </div>
                        <div class="col-md-6 col-12">
                            <post></post>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-3 col-12">
                <search-widget></search-widget>
            </div>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
import Post from '@/components/posts/_partials/post'
import SearchWidget from '@/components/layout/search_widget'
  export default {
    name: 'PostsHome',
    components:{
        Post,
        SearchWidget
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../node_modules/handy.sass.mixins/scss/shared';
  @import '../../assets/sass/_variables';

  .page_title {
    padding: 43px 0px;
    background: url('../../assets/images/breadcrumb.jpg') top center;
    @include prefixer(background-size, cover, ($prefix-list));
    border-bottom: 1px solid $text-color;

    .wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items:center;

      h1 {
        color: #fff;
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
      }

      #breadcrumbs {
        #crumbs {
          color: #fff;
          font-size: 14px;
          padding: 2px 0px 0px;

          a {
            color: #fff;
          }

          .crumbs_delimiter {
            font-size: 16px;
            padding: 0 13px;
          }
          span{
              color:rgba(#fff,0.8)
          }
        }
      }
    }
  }
  .posts-section{
      margin-top:50px;
      margin-bottom:50px;
  }

</style>
