<template>
  <div class="widget widget_tags">
    <div class="widget-title">
      <h3>Related Posts</h3>
    </div>
    <div class="widget-content">
      <div class="item-post">
        <div class="item-img">
          <div class="image-container">
            <div class="content">
              <img src="../../../assets/images/article.jpg">
            </div>
          </div>
        </div>
        <div class="item-content">
          <div class="title">
            <h4>What is Lorem Ipusm</h4>
          </div>
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
        </div>
      </div>
       <div class="item-post">
        <div class="item-img">
          <div class="image-container">
            <div class="content">
              <img src="../../../assets/images/article.jpg">
            </div>
          </div>
        </div>
        <div class="item-content">
          <div class="title">
            <h4>What is Lorem Ipusm</h4>
          </div>
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
        </div>
      </div>
       <div class="item-post">
        <div class="item-img">
          <div class="image-container">
            <div class="content">
              <img src="../../../assets/images/article.jpg">
            </div>
          </div>
        </div>
        <div class="item-content">
          <div class="title">
            <h4>What is Lorem Ipusm</h4>
          </div>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'RelatedhWidget'
  }

</script>

<style lang="scss" scoped>
  @import "../../../../node_modules/handy.sass.mixins/scss/shared";
  @import "../../../assets/sass/_variables";

  .widget {
    @include prefixer(box-shadow, -1px 2px 10px 0 rgba(#000, .08), ($prefix-list));
    background-color: #fff;
    padding: 20px 15px;

    &.widget_tags {
      margin-top: 20px;
    }

    .widget-title {
      h3 {
        font-weight: 600;
        font-size: 18px;
      }


    }

    .widget-content {
      .item-post {
        margin: 20px 0 20px;
        padding: 0 0 20px;
        border-bottom: 1px solid #ddd;
        display: flex;

        .item-img {
          width: 30%;

          .image-container {
            width: 100%;
            @include aspect-ratio(4, 3);

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }

        .item-content {
          width: 70%;
          padding-left: 20px;

          .title {
            h4 {
              color: $text-color-dark;
              @include multiline-ellipses(18px, 1.2, 2);

            }
          }
          .meta{
              width:100%;
              display:flex;
              justify-content:flex-start;
              .tag-item{
                  font-size:12px;
                  color:#999;
                  &:first-child{
                      margin-right:10px;
                  }


              }
          }
        }
      }
    }
  }

</style>
