//- 画像
img-main
  img(src="{opts.img_url}?imgmax=640")

  style(type = 'scss').
    img {
      object-fit: contain;
      max-width: 640px;
      max-height: 480px;
    }

