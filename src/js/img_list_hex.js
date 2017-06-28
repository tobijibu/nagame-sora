var IMG_LIST_HEX = IMG_LIST_HEX || {};
IMG_LIST_HEX = {
  /*
  * 画像リストを6個ずつに分割
  */
  devideImgList : function() {
    let objKey = 0,
        cnt    = 0;
        img_group_list = {};
    for (let i in Object.keys(img_list)) {
      if (i % 6 == 0) {
        cnt = 0;
        objKey++;
        img_group_list[objKey] = {};
      }
      img_group_list[objKey][cnt] = img_list[i];
      cnt++;
    }
    return img_group_list;
  },

  /*
  * 六角形の位置調整
  */
  setPosition : function(boxCnt) {
    let col  = boxCnt % 6;
    let row  = parseInt((boxCnt - 1) / 6);
    let top    = IMG_LIST_HEX.set_top(col, row);
    let left   = IMG_LIST_HEX.set_left(col);
    let zindex = IMG_LIST_HEX.set_zindex(col);
    if (col === 1 && row === 0) {
      top = 0; left = 0;
    }
    res = 'top:' + top + 'px; left: ' + left + 'px; z-index: ' + zindex + ';';
    return res;
  },

  /*
  * トップ位置
  * (六角形の要素順に応じてトップの位置を出し分け)
  */
  set_top : function(col, row) {
    let top_base = 108;
    if (col === 2 || col === 3) {
      return top_base * (row + 1) + top_base * 5 * row;
    } else if (col === 4 || col === 5) {
      return top_base * (row + 3) + top_base * 5 * row;
    } else {
      return 2 * top_base * (row + 2);
    }
  },

  /*
  * 左からの位置
  * (六角形の要素順に応じて左からの位置を出し分け)
  */
  set_left : function(col) {
    if (col === 2 || col === 4) {
      return -195;
    } else if (col === 3 || col === 5) {
      return 195;
    } else {
      return 0;
    }
  },

  /*
  * 要素の重ね順
  */
  set_zindex : function(col) {
    if (col === 2 || col === 4) {
      return 3;
    } else if (col === 3 || col === 5) {
      return 1;
    } else {
      return 2;
    }
  },

  /*
  * △と▽の間を詰めるためのposition指定
  */
  posi_align : function(cnt, k) {
    let _k = k % 3;
    return 'right:' + (-55 * _k) + 'px';
  },

  /*
  * SVG向きを指定するクラス名を取得
  */
  direction : function(cnt, k) {
    return k % 2 == 1 ? 'up' : 'dw';
  }

};
