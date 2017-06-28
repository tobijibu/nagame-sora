about
  div.btn
    close-btn
  div.section
    section
      h1 空を集めました
      span 「空を見上げると何だか落ち着きます」
        br
        br
        | そんな気持ちを大切にしたいと思い、スマホで撮影した空の写真集を立ち上げました。
        br
        | 特別ではない、いつもと同じ空を、ただ集めて並べています。
        br
        br
        | 個人的に何となくお気に入りの写真を選んで載せてみました。
        br
        | 毎日少しずつ増やしていこうと思います。
        br
        br
        | その他の写真は
        a(href="https://goo.gl/photos/gBdznZMfRjCrYaxR8", target="_blank") こちら
        |から。
        br
        br
        br
        br
        br
        | 心の通ふならば、
        br
        | いかに眺めの空ももの忘れしはべらむ
  div.section
    section
      h1 確認環境
      span Mac、Windows7でChrome、FireFoxの最新版で確認しています。
        br
        | Edge、IEは対応していません。ごめんなさい。
    section
      h1 構築環境
      span
        a(href="http://riotjs.com/ja/", target="_blank") Riot.js
        | 　+　
        a(href="https://pugjs.org/api/getting-started.html", target="_blank") Pug(Jade)
        br
        a(href="http://animejs.com/", target="_blank") animejs
        | 　,　
        a(href="https://github.com/toddmotto/echo", target="_blank") echo.js
    section
      h1 連絡先
      span お問い合わせについては
        br
        | 左記のアドレスへご連絡ください。
        br
        br
        span.adr you
          span.dummy 念のため
          | 84815
          span.dummy スパム対策の
          | @gmail
          span.dummy ダミー文字です
          | .com

  style(type = 'scss').
    div.section {
      writing-mode: vertical-rl;
      float: right;
    }

    section {
      margin: 80px 96px;
      height: 20em;
      line-height: 1.6;
    }

    h1 {
      font-size: 1.6rem;
      border-left: 1px solid #ccc;
      font-weight: 100;
      margin-left: 24px;
      padding-left: 8px;
    }

    .adr {
      font-size: 1.2rem;
      .dummy {
        display: none;
      }
    }

    .btn {
      position: relative;
      top: 88px;
    }

    close-btn {
      position: absolute;
      top: 0;
      left: 0;
    }

  script.

    pageview('/#about');
