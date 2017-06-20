//- ‘O‚ÖƒŠƒ“ƒN
prev-link
  div.prev(onclick = '{changePage}')
    div.cursor
    span prev

  style(type = 'scss').
    .prev {
      position: relative;
      div {
        width: 8px;
        height: 8px;
        border-top: 1px solid #000;
        border-left: 1px solid #000;
        transition: .8s;
        transform: rotate(135deg);
        position: relative;
        left: 4px;
      }
      span {
        font-size: .9rem;
        transition: .8s;
      }
    }

    .prev:hover {
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

