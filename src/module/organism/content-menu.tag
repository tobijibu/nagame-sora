//- メニュー
content-menu
  section
    about-link
    span |
    blog-link

  style(type = 'scss').
    section {
      writing-mode: vertical-rl;
      position: fixed;
      bottom: 104px;
      left: calc((100vw - 880px) / 2);
      font-size: 1rem;
      z-index: 99;
      span {
        display: inline-block;
        margin: 8px 0;
      }
    }


