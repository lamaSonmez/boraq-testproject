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
                  <i class="fas fa-angle-right crumbs_delimiter"></i>
                  <a href="/">Our Blog</a>
                  <i class="fas fa-angle-right crumbs_delimiter"></i>
                  <span>What is Lorem Ipsum ? </span>
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
            <div class="container view-post">
              <div class="row">
                <div class="col-12">
                  <div class="single-image">
                    <img src="../../assets/images/article.jpg" alt="single">
                  </div>
                  <h3>What is Lorem Ipsum ???</h3>
                  <div class="meta">
                    <div class="tag-item">
                      <span class="fas fa-tags icon"></span>
                      <span>HTMl</span>
                    </div>
                    <div class="tag-item">
                      <span class="far fa-clock icon"></span>
                      <span>31 Aug 2019</span>
                    </div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is has been the try’s
                    stasn ndard dummy text ever since the 1500s, when an unknown printer took a galley of it to make.
                    Lorem Ipsum is the simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the indus try’s standard they dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scram bled it to make a type specimen book.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-3 col-12">
            <search-widget></search-widget>
            <tags-widget></tags-widget>
            <related-widget></related-widget>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Post from '@/components/posts/_partials/post'
  import TagsWidget from '@/components/posts/_partials/tags_widget'
  import RelatedWidget from '@/components/posts/_partials/related_posts'
  import SearchWidget from '@/components/layout/search_widget'
  export default {
    name: 'PostsHome',
    components: {
      Post,
      SearchWidget,
      TagsWidget,
      RelatedWidget
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
      align-items: center;

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

          span {
            color: rgba(#fff, 0.8)
          }
        }
      }
    }
  }

  .posts-section {
    margin-top: 50px;
    margin-bottom: 50px;

    .view-post {
      h3 {
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 600;
      }

      .meta {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-bottom:10px;
        .tag-item {
          font-size: 12px;
          color: #999;
            .icon{
                color:$main-color;
            }
          &:first-child {
            margin-right: 10px;
          }


        }
      }

      p {
        color: $text-color;
      }
    }
  }

</style>
