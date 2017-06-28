//- 三角形画像生成
polygon-img-link(style="{posi_align()}")
  div(class="{direction()}")
    a(href="#detail/{opts.img.id}")
      //- img(src="{opts.img.url}?imgmax=160", class="svg-{direction()}")
      img(data-echo="{opts.img.url}?imgmax=160", class="svg-{direction()}")

  style(type = 'scss').
    polygon-img-link {
      position: relative;
      margin-top: 4px;
    }

    div {
      height: 104px;
      width: 120px;
    }
    .up,
    .dw {
      font-size: 0;
      filter: grayscale(100%) brightness(.7);
      transition: 8s;
    }
    .up:hover,
    .dw:hover {
      cursor:pointer;
      filter: grayscale(0) brightness(1);
      transition: .2s;
    }

    /* SVGで画像を切り抜き */
    .svg-up {
      -webkit-clip-path: polygon(0 103.8px, 60px 0, 120px 103.8px);
      clip-path: polygon(0 103.8px, 60px 0, 120px 103.8px);
    }
    .svg-dw {
      -webkit-clip-path: polygon(0 0, 60px 103.8px, 120px 0);
      clip-path: polygon(0 0, 60px 103.8px, 120px 0);
    }

    /* divからはみ出た部分を隠す */
    img {
      overflow: hidden;
      min-height: 104px;
      width: 120px;
    }

  script.
    /*
    * SVG向きを指定するクラス名を取得
    */
    direction() {
      return IMG_LIST_TRI.direction(opts.i, opts.k);
    }

    /*
    * △と▽の間を詰めるためのposition指定
    */
    posi_align() {
      return IMG_LIST_TRI.posi_align(opts.i, opts.k);
    }


