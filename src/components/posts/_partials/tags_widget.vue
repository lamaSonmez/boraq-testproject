<template>
  <div class="widget widget_tags">
    <div class="widget-title">
      <h3>Blog Tags</h3>
    </div>
    <div class="widget-content">
      <ul class="tag-list">
        <li>
          <a>Html</a>
        </li>
          <li>
          <a>Css</a>
        </li>
          <li>
          <a>sass</a>
        </li>
          <li>
          <a>bootstrap</a>
        </li>
          <li>
          <a>Vue js</a>
        </li>
          <li>
          <a>Angular</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TagshWidget'
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
        ul.tag-list {
          padding: 0px;
          display:flex;
          margin-top:20px;
          flex-wrap:wrap;
          li {
            a {
              border: 1px solid #ddd;
              padding: 5px 18px;
              margin: 0 5px 5px 0;
              display: block;
              color: $text-color-dark;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 2px;
              line-height: 28px;
              @include prefixer(transition,all 0.3s ease-in-out,($prefix-list));
              cursor:pointer;
              &:hover{
                background-color:$main-color;
                color:#fff;
              }
            }
          }
        }
      }
  }

</style>
