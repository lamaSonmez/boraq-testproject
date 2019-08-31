<template>
  <div class="widget widget_search">
    <form role="search" method="post" class="searchform" id="searchForm" action="">
      <div class="input-holder clearfix">
        <input type="search" class="search-field" placeholder="Search..." value="" name="s" title="Search for:">
        <button type="submit" class="search-submit"><i class="fas fa-search "></i></button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'SearchWidget'
  }

</script>

<style lang="scss" scoped>
  @import "../../../node_modules/handy.sass.mixins/scss/shared";
  @import "../../assets/sass/_variables";

  .widget {
    // @include prefixer(box-shadow,-1px 2px 10px 0 rgba(#000,.08),($prefix-list));
    background-color: #fff;

    .input-holder {
      @include prefixer(box-shadow, -1px 2px 5px 0 rgba(0, 0, 0, .08), ($prefix-list));
      @include prefixer(border-radius, 4px, ($prefix-list));
    display:flex;
      .search-field {
        width: calc(100% - 60px);
        padding: 0 0 0 21px;
        @include prefixer(border-radius, 4px 0 0 4px, ($prefix-list));
        height: 60px;
        outline: 0;
        position: relative;
        @include prefixer(box-shadow, none, ($prefix-list));
        border: none;
      }

      .search-submit {
        @include prefixer(border-radius, 0 4px 4px 0, ($prefix-list));
        color: $text-color;
        cursor: pointer;
        font-size: 16px;
        border:none;
        background-color:transparent;
        width: 60px;
        padding: 0 8px 0 0;
        @include prefixer(transition, color 0.2s ease-in-out, ($prefix-list));
        &:hover{
            color:$main-color;
        }
      }
    }
  }

</style>
