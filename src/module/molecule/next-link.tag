//- 次へリンク
next-link
  div.next(onclick = '{changePage}')
    div.cursor
    span next

  style(type = 'scss').
    .next {
      position: relative;
      div {
        width: 8px;
        height: 8px;
        border-top: 1px solid #000;
        border-left: 1px solid #000;
        transition: .8s;
        transform: rotate(-45deg);
        position: relative;
        left: 8px;
      }
      span {
        font-size: .9rem;
        transition: .8s;
      }
    }

    .next:hover {
      cursor: pointer;
      div {
        border-top: 1px solid #666;
        border-left: 1px solid #666;
        transition: .2s;
      }
      span {
        color: #666;
        transition: .2s;
      }
    }

  script.
    this.changePage = function(e) {
      location.href = '#detail/'+ opts.img_id;
    }

