var IMG_LIST_TRI = IMG_LIST_TRI || {};
IMG_LIST_TRI = {
  /*
  * 画像リストを6,7,7,7,7,6に分割
  */
  devideImgList : function() {
    let objKey = 0,
        cnt    = 0;
        img_group_list = {};
    for (let i in Object.keys(img_list)) {
      //1つ目は△1個のみ
      if (i == 0) {
        img_group_list[objKey] = {};
        img_group_list[objKey][cnt] = img_list[i];
        continue;
      }
      //1番目と6番目は6つセット
      if (objKey % 6 === 0 || objKey % 6 === 1) {
        if (cnt % 6 == 0) {
          cnt = 0;
          objKey++;
          img_group_list[objKey] = {};
        }
      } else {
        //2～5番目は7つセット
        if (cnt % 7 == 0) {
          cnt = 0;
          objKey++;
          img_group_list[objKey] = {};
        }
      }
      img_group_list[objKey][cnt] = img_list[i];
      cnt++;
    }
    return img_group_list;
  },

  set_style_str : function(styleObj) {
    let res = '';
    for (let i in styleObj) {
      res += i + ':' + styleObj[i] + ';';
    }
    return res;
  },

  /*
  * 各ボックスの位置調整
  */
  setPosition : function(boxCnt, img_group) {
    let styleObj = {};
    let cnt  = boxCnt % 6;
    let row  = parseInt((boxCnt - 1) / 6);
    let imgCnt = Object.keys(img_group).length;
    styleObj = {
      'width' : IMG_LIST_TRI.set_width(cnt) + 'px',
      'top'   : IMG_LIST_TRI.set_top(cnt, row, imgCnt) + 'px',
      'left'  : IMG_LIST_TRI.set_left(cnt) + 'px',
      'z-index' : IMG_LIST_TRI.set_zindex(cnt),
      'flex-wrap' : IMG_LIST_TRI.set_flex_wrap(cnt),
      'flex-direction' : IMG_LIST_TRI.set_flex_direction(cnt),
      'align-content' : IMG_LIST_TRI.set_align_content(cnt),
    };
    if (boxCnt == 0) {
      styleObj = {
        'top'   : 0,
        'left'  : '175px',
        'width' : '120px',
      };
    }
    res = IMG_LIST_TRI.set_style_str(styleObj);
    return res;
  },

  /*
  * トップ位置
  * (ボックスの要素順に応じてトップの位置を出し分け)
  */
  set_top : function(cnt, row, imgCnt) {
    let top_base = 108;
    if (cnt === 1) {
      return (6 * top_base * row) + top_base;
    } else if (cnt === 2 || cnt === 3) {
      return (6 * top_base * row) + top_base * 2;
    } else if (cnt === 4 || cnt === 5) {
      let num = imgCnt < 5 ? 5 : 4;
      return (6 * top_base * row) + top_base * num;
    } else {
      return (6 * top_base * row) + top_base * 5;
    }
  },

  /*
  * 左からの位置
  * (ボックスの要素順に応じて左からの位置を出し分け)
  */
  set_left : function(cnt) {
    if (cnt === 2 || cnt === 4) {
      return -315;
    } else if (cnt === 3 || cnt === 5) {
      return 305;
    } else {
      return 0;
    }
  },

  /*
  * 要素の重ね順
  */
  set_zindex : function(cnt) {
    if (cnt === 2 || cnt === 4) {
      return 3;
    } else if (cnt === 3 || cnt === 5) {
      return 1;
    } else {
      return 2;
    }
  },

  /*
  * ボックス幅
  */
  set_width : function(cnt, imgCnt) {
    let width_base = 120;
    return (cnt === 1 || cnt === 0) ? width_base * 3 : width_base * 4;
  },

  /*
  * 要素並び方向
  */
  set_flex_direction : function(cnt) {
    return (cnt === 3 || cnt === 5) ? 'row' : 'row-reverse';
  },

  /*
  * 要素積み重ね方向
  */
  set_flex_wrap : function(cnt, imgCnt) {
    return (cnt === 4 || cnt === 5) ? 'wrap-reverse' : 'wrap';
  },

  /*
  * 要素積み重ねの軸
  */
  set_align_content : function(cnt) {
    return (cnt === 4 || cnt === 5) ? 'flex-end' : 'flex-start';
  },

  /*
  * △と▽の間を詰めるためのposition指定
  */
  posi_align : function(cnt, k) {
    if (cnt == 0) {
      return;
    }
    if (cnt % 6 == 1 || cnt % 6 == 0) {
      let _k = k % 3;
      return 'right:' + (-55 * _k) + 'px';
    }
    if (cnt % 6 == 2 || cnt % 6 == 4) {
      let _k = k % 4;
      return 'right:' + (-55 * _k) + 'px';
    }
    if (cnt % 6 == 3 || cnt % 6 == 5) {
      let _k = k % 4;
      return 'left:' + (-55 * _k) + 'px';
    }
  },

  /*
  * SVG向きを指定するクラス名を取得
  */
  direction : function(cnt, k) {
    if (cnt == 0) {
      return 'up';
    }
    if (cnt % 6 == 1 || cnt % 6 == 0) {
      return k % 2 == 1 ? 'dw' : 'up';
    }
    if (cnt % 6 == 2 || cnt % 6 == 3) {
      if (k <= 3) {
        return k % 2 == 1 ? 'dw' : 'up';
      } else {
        return k % 2 == 1 ? 'up' : 'dw';
      }
    }
    if (cnt % 6 == 4 || cnt % 6 == 5) {
      if (k <= 3) {
        return k % 2 == 0 ? 'dw' : 'up';
      } else {
        return k % 2 == 0 ? 'up' : 'dw';
      }
    }
  }


};
