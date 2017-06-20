//- •Â‚¶‚éƒ{ƒ^ƒ“
close-btn
  div.close(onclick = '{closeDetail}')
    div.left
    div.right
    span close

  style(type = 'scss').
    .close {
      position: relative;
      width: 16px;
      height: 16px;
      div {
        width: 100%;
        height: 1px;
        border-top: 1px solid #000;
        position: absolute;
        top: 0;
        left: 0;
        transition: .8s;
        position: relative;
        left: 4px;
      }
      .left {
        position: relative;
        top: 1px;
        transform: rotate(45deg);
      }
      .right {
        position: relative;
        top: -1px;
        transform: rotate(-45deg);
      }
      span {
        font-size: .9rem;
        transition: .8s;
      }
    }

    .close:hover {
      cursor: pointer;
      div {
        border-top: 1px solid #666;
        transition: .2s;
      }
      span {
        color: #666;
        transition: .2s;
      }
    }

  script.
    this.closeDetail = function(e) {
      location.href = '#home';
    }

