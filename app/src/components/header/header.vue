<template>
    <div class="header">
        <div class="content-wrapper">
            <img class="avatar" width="64" height="64" :src="seller.avatar"></img>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span><span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count" @touchstart="onTouchStart" @touchend="onTouchEnd" ref="supportCount">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bullentin-wrapper">
            <span class="bullentin-title"></span><span class="bullentin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%"></img>
        </div>
        <div v-show="detailShow" class="detail">
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="star-wrapper">
                        <star :size="48" :score="seller.score"></star>
                    </div>
                </div>
            </div>
            <div class="detail-close">
                <i class="icon-close" @click="closeDetail"></i>
            </div>
        </div>
    </div>
</template>


<script type="text/javascript">
   import star from 'components/star/star.vue'
   export default{
     props: {
       seller: {
         type: Object
       }
     },
     data () {
       return {
         detailShow: false
         // classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
       }
     },
     methods: {
       closeDetail() { 
         this.detailShow = false;
       },
       onTouchStart() { 
         this.$refs.supportCount.style.backgroundColor = '#cccccc';
         this.$refs.supportCount.style.opacity = 0.6
       },
       onTouchEnd() { 
         this.$refs.supportCount.style.backgroundColor = '#000000';
         this.$refs.supportCount.style.opacity = 0.2;
         this.detailShow = true;
       }
     },
     created () {
       this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
     },
     components: { star }
   }
</script>
<style lang="stylus">
  @import "../../common/stylus/mixin"
  .header
     position: relative
     color: #fff 
     overflow: hidden
     background: rgba(7,17,27,0.5)
     .content-wrapper 
        position: relative 
        padding: 24px 12px 18px 24px 
        font-size:0 
        .avatar
          display: inline-block
          vertical-align: top 
          border-radius: 4px 
        .content
          display: inline-block
          margin-left: 16px
          font-size: 14px
          .title
             margin:2px 0 8px 0
             .brand
                display: inline-block 
                vertical-align: top 
                width: 30px 
                height: 18px 
                bg-image('brand') 
                background-size: 30px 18px 
                background-repeat: no-repeat 
             .name
                margin-left: 6px 
                font-size: 16px 
                line-height: 18px 
                font-weight: bold
          .description
             margin-bottom: 10px 
             line-height: 12px 
             font-size: 12px 
          .support
            .icon
               display: inline-block 
               width: 12px 
               height: 12px 
               margin-right: 4px 
               background-size: 12px 12px 
               background-repeat: no-repeat 
               &.decrease
                 bg-image('decrease_1')
               &.discount
                 bg-image('discount_1')
               &.guarantee
                 bg-image('guarantee_1')
               &.invoice
                 bg-image('invoice_1')
               &.special
                 background-image(url(special_3@3x.png))
            .text
               font-size: 10px 
               line-height: 10px 
               vertical-align: top 
        .support-count
          position: absolute 
          right: 12px 
          bottom: 18px 
          padding: 0 8px 
          height: 24px 
          border-radius: 14px 
          background: rgba(0,0,0,0.2) 
          text-align: center 
          .count 
            line-height: 24px 
            font-size: 10px 
            vertical-align: top 
          .icon-keyboard_arrow_right 
            line-height: 24px
            font-size: 10px 
            margin-left: 2px 
     .bullentin-wrapper
       height: 28px 
       line-height: 28px 
       padding: 0 22px 0 12px 
       background:rgba(7,17,27,0.8)
       white-space: nowrap 
       overflow: hidden 
       text-overflow: ellipsis 
       .bullentin-title
         display: inline-block 
         width: 22px 
         height: 12px 
         bg-image('bulletin') 
         background-size: 22px 12px 
         background-repeat: no-repeat 
       .bullentin-text 
         margin: 0 4px 
         height: 12px 
         font-size: 10px 
         vertical-align: top 
     .background 
       position: absolute 
       top: 0
       left: 0 
       width: 100% 
       height: 100% 
       z-index: -1 
       filter:blur(10px)
      .detail
        position: fixed 
        z-index: 100 
        width: 100% 
        height: 100% 
        top: 0
        left: 0
        overflow: auto 
        background: rgba(7, 17, 27, .8)
        .detail-wrapper 
          min-height: 100% 
          width: 100%
          .detail-main 
            margin-top: 64px 
            padding-bottom: 64px 
            .name
              line-height: 16px 
              text-align: center 
              font-size: 16px 
              font-weight: 700 
            .star-wrapper 
              margin-top: 8px 
              padding: 2px 0 
              text-align: center 
        .detail-close  
          position: relative 
          width: 32px 
          height: 32px 
          margin: -64px auto 0 auto 
          clear: both 
          font-size: 32px 
</style>