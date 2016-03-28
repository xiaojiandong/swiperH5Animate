/**
 * Created by zuofu.dong on 15/10/28.
 */

var IndexPageView = CYZS.PageView.extend({
    tplId: 'indexPageTpl',

    initElView:function(){
        var that = this;
        CYZS.PageView.prototype.initElView.apply(this, arguments);
        var data = {'name':'heimi ',
                    'age':20,
                    'sex':'male'};

        that.renderMovieContentView(data);
        that.setShareConfig();
    },

    renderMovieContentView:function(data){
        new MovieContentView({
            el: ("#js_movie_content"),
            dataObj: data
        });

    },

    /**
     * 设置分享链接，右上角分享
     */
    setShareConfig:function(){
        var link = CYZS.Config.MAIN_HOST +"/m/activity/151028/index";
        CYZS.ShareHelper.setShareConfig({
            title : '蜕变，只此一刻',
            content : '时尚，是女人一生的事业。穿衣助手，每天都要美美搭。',
            imageUrl : 'http://ichuanyi.com/m/image/activity/151029/res/img_for_share2_e061a6a.png',
            shareLink :link
            //shareLink :window.location.href
        });

    }

});
