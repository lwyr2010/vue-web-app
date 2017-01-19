<template>
  <div>
     <vheader :seller="seller"></vheader>
     <div class="tabbar border-1px">
     	  <router-link to="contentone" class="tag-item">商品</router-link>
        <router-link to="contenttwo" class="tag-item">评价</router-link>
        <router-link to="contentthree" class="tag-item">商家</router-link>
     </div>
     <div class="content">
       	<router-view :seller="seller"></router-view>
     </div>
  </div>
</template>

<script type="text/javascript">
  import vheader from 'components/header/header.vue'
  
  export default{
    data () {
      return {
        seller: {}
      }
    },
    created () {
      this.$http.get(this.$config.baseUrl + '/seller').then((response) => {
        this.seller = response.body
      }, (response) => {
      })
    },
    components: { vheader }
  }
</script>

<style lang="stylus">
  @import 'common/stylus/mixin.styl' 
   .tabbar 
     display: flex 
     width: 100% 
     height: 40px 
     line-height: 40px 
     border-1px: rgba(7,17,27,0.1) 
     .tag-item 
       flex: 1 
       text-align: center 
       display: block 
       color: rgb(77,85,93) 
       font-size: 14px 
     .router-link-active 
       color: rgb(240,20,20) 
</style>
