//- 空画像の一覧表示
sora-list
  div.list
    virtual(each="{img_group, i in img_group_list}")
      //- 6個セット(六角形)の画像ボックス
      img-box(i="{i}", img_group="{img_group}")

  style(type = 'scss').
    div.list {
      margin: 16px auto;
    }

  script.
    this.on('mount', function(){
      this.img_group_list = IMG_LIST_TRI.devideImgList();
      pageview('/');
    });


