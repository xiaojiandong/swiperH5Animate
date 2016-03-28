# viH5Animate
swiper滑动，移动端H5动画宣传页，局部：
## [对应页面链接及效果图](http://apitest.yourdream.cc/m/activity/151028/index/)<br />
![image](https://github.com/xiaojiandong/blogAndResourceCollect/blob/master/img/tuibian-vi.png)

## [对应脚本链接](https://github.com/xiaojiandong/viH5Animate/blob/master/module/movie_content/MovieContentView.js)
## 初始化swiper：
```js
/**
     * 小电影上下滑动，放在初始页面
     */
    onSwiperTouch : function(){
        //var that = this;  // that = this = MovieContentView   //单个子元素swiper-slide   //最外层父元素swiper-container
        var swiper_slide_items = $('.swiper-slide');
        var that = this;
        var swiper = new Swiper('.swiper-container', {
            direction: 'vertical', //垂直滑动
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            // preventClicksPropagation : true,
            // spaceBetween: 80,
            // spaceBetween: 30,
            centeredSlides: true,
            speed: 800,
            //autoplay: 1500,
            watchActiveIndex : true,
            // autoplay: 200,
            autoplayDisableOnInteraction: false,
            // loop : true
            onInit: function(swiper){ // 第1个页面，羽毛
                this.onSlideChangeEnd(swiper);
            },
            // 每次滑动结束后的回调
            onSlideChangeEnd: function(swiper){
                var currentIndex = swiper.activeIndex; // 当前swiper的索引
                var currentSwiper =  swiper_slide_items.eq(currentIndex); // 当前的swiper
                var dataTag = currentSwiper.attr('data-tag');
                that[dataTag].apply(that, [swiper]);
            }
        });
    }
```
## 第1个页面动画：
```js
   swiperPage100 : function(swiper) {
        $('.down-slide').show();
    },
```

## 第2个页面动画：
```js
swiperPage200 : function(swiper) {
        $('.down-slide').show();
        var currentIndex = swiper.activeIndex;
        if(!this.animationInitDict[currentIndex]){
            var swiper_slide_items = $('.swiper-slide');
            console.log(swiper_slide_items);
            var $swiper = swiper_slide_items.eq(currentIndex);
            $swiper.append('<span class="del-motto">盲目跟随爆款</span>');
            $swiper.append('<span class="del-motto-through-line"></span>');
            $swiper.append('<div class="go-to">到</div>');
            $swiper.append('<div class="fashion-suit">潮流的搭配直觉</div>');
            $swiper.append('<div class="git-it">掌握</div>');
            this.animationInitDict[currentIndex] = true;
        }
    },
```

## 第3个页面动画：
```js
 swiperPage300 : function(swiper) {
        $('.down-slide').show();
        var currentIndex = swiper.activeIndex;
        if( !this.animationInitDict[currentIndex] ){
            // 文字动画 从...
            var timer;
            timer = setTimeout(function(){
                $('.from3').css('display','block');
                $('.dui-qi').css('display','block');
                $('.through-line3').css('display','block');
            },200);
            $('.from3').addClass('from3-move');//从
            $('.dui-qi').addClass('dui-qi-move');//堆砌
            $('.through-line3').addClass('through-line3-move');//删除线
            // 文字动画 到...
            var timer1;
            timer1 = setTimeout(function(){
                $('.to3').css('display','block');
                $('.only-choose').css('display','block');
                $('.cheap-color').css('display','block');
            },1600);
            $('.to3').addClass('to3-move');//到
            $('.only-choose').addClass('only-choose-move');//只选择
            $('.cheap-color').addClass('cheap-color-move');//最便宜的搭配色
            // 九宫格动画
            var timer2;
            timer2 = setTimeout(function(){
                $('.slide3-img1').css('display','block');
                $('.slide3-img2').css('display','block');
                $('.slide3-img3').css('display','block');
                //$('.slide3-img1').addClass('slide3-img1-move');
                console.log(111);
            },2800);
            $('.slide3-img1').addClass('slide3-img1-move');
            $('.slide3-img2').addClass('slide3-img2-move');
            $('.slide3-img3').addClass('slide3-img3-move');
            this.animationInitDict[currentIndex] = true;
        }
    },
```
## 第4个页面动画：
```js
  swiperPage400 : function(swiper) {
        $('.down-slide').show();
        //alert(400);
        var currentIndex = swiper.activeIndex;
        if( !this.animationInitDict[currentIndex] ){
            var timer1;
            timer1 = setTimeout(function(){
                $('.word1').css('display','block'); // 从飞扬跋扈隐于
                $('.word2').css('display','block'); // 不动声色
                $('.word3').css('display','block'); // 从繁华浮夸归于
                $('.word4').css('display','block'); // 简约利落
            },800);
            $('.word1').addClass('move-word1');
            $('.word2').addClass('move-word2');
            $('.word3').addClass('move-word3');
            $('.word4').addClass('move-word4');
            this.animationInitDict[currentIndex] = true;
        }
    },
```

## 第5个页面动画：
```js
 swiperPage500 : function(swiper) {
        $('.down-slide').show();
        var currentIndex = swiper.activeIndex;
        if ( !this.animationInitDict[currentIndex] ){
            $('.zi-tai').css('display','block'); // 姿态逾精致
            $('.zi-tai').addClass('zi-tai-move');
            $('.life').css('display','block'); // 生活越多彩
            $('.life').addClass('life-move');
            this.animationInitDict[currentIndex] = true;
        }
    },
```

## 第6个页面动画：
```js
 swiperPage600 : function(swiper) {
        $('.down-slide').show();
        var currentIndex = swiper.activeIndex;
        if ( !this.animationInitDict[currentIndex] ){
            $('.from-old-to-new').css('display','block'); // 从旧衣到新裳
            $('.group-up').css('display','block'); // 成长一直都有
            $('.but-change').css('display','block'); // 而蜕变
            $('.just-now').css('display','block'); // 只此一刻
            $('.from-old-to-new').addClass('move-left-to-right');
            $('.group-up').addClass('move-right-to-left');  
            $('.but-change').addClass('move-left-to-right'); 
            $('.just-now').addClass('move-right-to-left');  
            var timer;
            timer = setTimeout(function(){
                $('.old-icon-big').addClass('move-old-icon'); // 旧logo增加动画
            },400);
            var timer1;
            timer1 = setTimeout(function(){
                $('.old-icon-big').css('display','none'); // 旧logo隐藏
            },1200);
            var timer2;
            timer2 = setTimeout(function(){
                $('.new-icon-big').css('display','block');
                $('.new-icon-big').addClass('move-new-icon'); // 新logo
            },1100);
            this.animationInitDict[currentIndex] = true;
        }
    },
```

## 第7个页面动画：
```js
 swiperPage700 : function(swiper) {
        $('.down-slide').hide();
        var currentIndex = swiper.activeIndex;
        if ( !this.animationInitDict[currentIndex] ){
           //$('.big-feather1').css('display','block'); // 大的羽毛
           //$('.feather-wrap1').css('display','block'); // 小的羽毛和底阴影
           //$('.big-feather1').addClass('big-feather1-move');  //
           //$('.feather-wrap1').addClass('feather-wrap-move1');  //
          // $('.fashion-way-btn').css('display','block'); // 探索时尚之旅
           //$('.fashion-way-btn').addClass('move-fashion-way-btn');
            //$('.down-slide').hide();
            this.animationInitDict[currentIndex] = true;
        }
    },
```
