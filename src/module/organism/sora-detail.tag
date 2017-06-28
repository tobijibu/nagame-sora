//- 詳細ページ
sora-detail
  div.btn
    close-btn
    virtual(if = '{next_img_id}')
      next-link(img_id='{next_img_id}')
    virtual(if = '{prev_img_id}')
      prev-link(img_id='{prev_img_id}')
  div.sora
    img-main(img_url="{img_url}")
    img-date(img_date="{img_date}")
  div.txt
    virtual(if = '{img_comment}')
      img-comment(comment="{img_comment}")

  style(type = 'scss').
    div.btn,
    div.sora {
      width: 100%;
    }

    .sora {
      position: relative;
      text-align: center;
      margin: 80px auto;
    }
    .txt {
      position: relative;
    }

    .btn {
      position: relative;
      top: 8px;
      z-index: 99;
    }

    close-btn {
      position: absolute;
      top: 0;
      left: 0;
    }

    next-link {
      position: absolute;
      top: 64px;
      left: 0;
    }

    prev-link {
      position: absolute;
      top: 112px;
      left: 0;
    }

  script.
    let list_cnt = Object.keys(img_list).length;
    for (let i in Object.keys(img_list)) {
      if (img_list[i].id != opts.id) continue;
      let next = parseInt(i)+1, prev = parseInt(i)-1;
      this.img_url     = img_list[i].url;
      this.img_comment = img_list[i].comment;
      this.img_date    = img_list[i].date;
      this.prev_img_id = prev < 0 ? null : img_list[prev].id;
      this.next_img_id = next >= list_cnt ? null :  img_list[next].id;
      break;
    }
    pageview('/#detail/' + opts.id);

