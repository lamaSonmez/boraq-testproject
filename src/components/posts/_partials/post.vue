<template>
  <div class="post-container">
    <div class="post-img">
      <div class="image-contaienr">
        <div class="content">
          <img src="../../../assets/images/article.jpg">
          <div class="overlay"></div>
        </div>
      </div>
    </div>
    <div class="post-content">
      <a class="post-tag" href="/view" tabindex="0">HTML</a>
      <h3><a href="/view" tabindex="0">Learn HTML 5</a></h3>
      <div class="meta-tags">
        <div class="tag">
          <span class="fas fa-calendar-alt icon"></span>
          <span>31 Aug 2019</span>

        </div>
      </div>
      <div class="post-desc">
        <p>HTML is the foundation of all web pages. Without HTML, you wouldn’t be able to organize text or add images or
          videos to your web pages. HTML is the beginning of everything you need to know to create engaging web pages!
        </p>
      </div>
      <div class="post-readmore-container">
        <div class="readmore">
          <a href="/view" tabindex="0">
            <span>Continue Reading</span>
            <span class="far fa-hand-point-right icon"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Post',
  }

</script>

<style lang="scss">
  @import '../../../../node_modules/handy.sass.mixins/scss/shared';
  @import '../../../assets/sass//_variables';

  .post-container {
    display: flex;
    flex-direction: column;
    @include prefixer(border-radius, 10px, ($prefix-list));
    border: 1px solid #eee;
    overflow: hidden;
    @include prefixer(box-shadow, 0 10px 30px 0 rgba(50, 50, 50, .16), ($prefix-list));
    margin-bottom:20px;
    .post-img {
      width: 100%;

      .image-contaienr {
        @include aspect-ratio(4, 3);
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          background-color: rgba(#000, 0.2);
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          z-index: 2;
        }
      }
    }

    .post-content {
      padding: 30px 20px 10px;
      background: #fff;
      width: 100%;
      position: relative;

      .post-tag {
        position: absolute;
        top: -20px;
        left: 20px;
        padding: 10px 25px;
        color: #fff;
        z-index: 5;
        @include prefixer(border-radius, 4px, ($prefix-list));
        @include prefixer(box-shadow, 0px 0px 0px 7px rgba(255, 255, 255, 0.4), ($prefix-list));
        background-color: $main-color;
        background: -webkit-gradient(linear, 0% 0%, 0% 100%, from($main-color), to($accent-color));
        background: -webkit-linear-gradient(top, $main-color, $accent-color);
        font-size: 13px;
      }

      h3 {
        a {
          color: $text-color-dark;
          text-align: left;
        }
      }

      .meta-tags {
        font-size: 12px;
        margin-bottom: 10px;
        .tag{
            color:#999;
            font-weight:500;
            .icon{
                margin-right:5px;
                color:$accent-color;
            }
        }

      }

      .post-desc {
          @include multiline-ellipses(14px,1.4,3);
        p {
          color: $text-color;
        }
      }

      .post-readmore-container {
        padding: 15px 0;
        width: 100%;
        margin-top: 15px;
        font-weight: 500;
        border-top: 1px solid #eee;

        .readmore {
          a {
            color: #999;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .icon {
              color: $main-color;
            }
          }
        }
      }

    }
  }

</style>
