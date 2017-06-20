var riot  = require('riot');
var route = require('riot-route');

//ヘッダー
require('./module/organism/content-header.tag');
require('./module/molecule/header-title.tag');
require('./module/atom/title-link.tag');
riot.mount('content-header');
//フッター
require('./module/organism/content-footer.tag');
require('./module/atom/copyright-text.tag');
riot.mount('content-footer');
//メニュー
require('./module/organism/content-menu.tag');
require('./module/atom/about-link.tag');
require('./module/atom/blog-link.tag');
riot.mount('content-menu');
//コンテナ
require('./module/organism/content-box.tag');
riot.mount('content-box');

route('detail/*', function(id) {
  fadeOut();
  setTimeout(function() {
    require('./module/organism/sora-detail.tag');
    require('./module/molecule/close-btn.tag');
    require('./module/molecule/next-link.tag');
    require('./module/molecule/prev-link.tag');
    require('./module/atom/img-date.tag');
    require('./module/atom/img-main.tag');
    require('./module/atom/img-comment.tag');
    riot.mount('container', 'sora-detail', {
      id: id
    });
    riot.update();
    fadeIn();
  }, 1000);
});

route('about', function() {
  fadeOut();
  setTimeout(function(){
    require('./module/page/about.tag');
    require('./module/molecule/close-btn.tag');
    riot.mount('container', 'about');
    riot.update();
    fadeIn();
  }, 1000);
});

route(function() {
  fadeOut();
  setTimeout(function() {
    require('./module/organism/sora-list.tag');
    require('./module/molecule/img-box.tag');
    require('./module/atom/polygon-img-link.tag');
    riot.mount('container', 'sora-list');
    riot.update();
    fadeIn();
  }, 1000)
});

route.start(true);

/*
 * ページ遷移アニメーション
 */
var anime = require('animejs');
fadeIn = function() {
  anime({
    targets: '.wrap',
    opacity: 1,
    easing: 'easeInQuad',
    duration: 1000,
    delay: 200,
  });
};

fadeOut = function() {
  anime({
    targets: '.wrap',
    opacity: 0,
    easing: 'linear',
    duration: 400,
    delay: 200,
  });
};

