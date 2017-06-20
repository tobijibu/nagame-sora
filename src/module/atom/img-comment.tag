//- 画像コメント
img-comment
  section.comment

  style(type = 'scss').
    img-comment {
      position: absolute;
      writing-mode: tb-rl;
      top: 0;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0%);
    }

    section {
      writing-mode: vertical-rl;
    }

    .comment {
      height: 20em;
      line-height: 1.6;
    }

  script.
    // テキスト整形
    setComments = function(str) {
      let replaceEntity = [
        ['(&(?!#*\\w+;)|&amp;|&#38;)', '&#x26;'],
        ['(\\"|&quot;|&#34;)',         '&#x22;'],
        ['(\\\'|&#39;)',               '&#x27;'],
        ['(<|&lt;|&#60;)',             '&#x3C;'],
        ['(>|&gt;|&#62;)',             '&#x3E;'],
      ];
      let _sentence = '';
      let regExp = new Object();
      for (let k in Object.keys(replaceEntity)) {
        regExp = new RegExp(replaceEntity[k][0], 'ig');
        str = str.replace(regExp, replaceEntity[k][1]);
      }
      //str = str.split('');
      //for (let i in Object.keys(str)) {
      //  _sentence += '<span class="opacity" style="filter: opacity(1)">' + str[i] + '</span>';
      //}
      //return _sentence.replace(/\n/g, '<br>');
      return str.replace(/\n/g, '<br>');
    };

    // テキスト表示アニメーション
    setCommentAnimation = function() {
      let anime = require('animejs');
      let elemDelay = 2000;
      let idx = 0;
      anime({
        targets: '.opacity',
        filter: 'opacity(1)',
        delay: function(el, index) {
          idx = index;
          if (el.innerHTML == '<br>') {
            elemDelay = elemDelay + index * 150;
            return 0;
          } else {
            return elemDelay + index * 100;
          }
        },
      });
    };

    this.on('mount', function() {
      this.root.querySelector('.comment').innerHTML = setComments(opts.comment);
      //setCommentAnimation();
    });

