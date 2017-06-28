//- 三角形がセットになった画像ボックス生成
img-box(class="img_box", style="{set_position()}")
  virtual(each="{img, k in opts.img_group}")
    //- 三角形画像生成
    polygon-img-link(i="{parent.opts.i}", k="{k}", img="{img}")

  style(type = 'scss').
    /* 三角形を並べて六角形にする */
    .img_box {
      display: flex;
      justify-content: flex-start;
      align-content: flex-start;
      margin: 0 auto;
      position: absolute;
      overflow-x: visible;

      flex-wrap: wrap;
      flex-direction: row-reverse;
      margin-left: 164px;
      width: 360px;
    }

  script.
    /*
    * 六角形の位置調整
    */
    set_position() {
      return IMG_LIST_TRI.setPosition(opts.i, opts.img_group);
    }

    this.on('mount', function(){
      /* 画像遅延ロード(ここじゃないとダメぽい) */
      echo.init();
    });

