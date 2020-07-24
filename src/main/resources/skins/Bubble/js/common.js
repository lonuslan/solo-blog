/*
 * Solo - A small and beautiful blogging system written in Java.
 * Copyright (c) 2010-present, b3log.org
 *
 * Solo is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *         http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */
/**
 * @fileoverview util and every page should be used.
 *
 * @author <a href="http://vanessa.b3log.org">Liyuan Li</a>
 * @version 1.0.0.0, Jan 18, 2019
 */

import '../../../js/common'

/**
 * @description 皮肤脚本
 * @static
 */
window.Skin = {
  init: function () {
    $('#headerDown').click(function () {
      $('html, body').animate({scrollTop: $(window).height()}, 300)
    })

    $(window).scroll(function (event) {
      $('.fn__progress').attr('value', parseInt($(window).scrollTop())).
        attr('max', parseInt($('body').outerHeight() -
          $(window).height()))

      if ($(window).scrollTop() > $(window).height() / 2 - 20) {
        $('.side__menu').addClass('side__menu--edge')
        $('#sideTop').removeClass('side__top--bottom')
      } else {
        $('.side__menu').removeClass('side__menu--edge')
        $('#sideTop').addClass('side__top--bottom')
      }
    })

    $('.side__menu').click(function () {
      $('.side__main').addClass('side__main--show').show()
    })
    $('.side__bg, .side__close').click(function () {
      $('.side__main').removeClass('side__main--show')
      setTimeout(function () {
        $('.side__main').hide()
      }, 1000)
    })
    $('#sideTop').click(function () {
      if ($(this).hasClass('side__top--bottom')) {
        Util.goBottom()
      } else {
        Util.goTop()
      }
    })

    var timer = 0
    var blogTitle = $('.header__h1').text()
    document.addEventListener('visibilitychange', function () {
      if (timer) clearTimeout(timer)
      if (document.hidden) {
        timer = setTimeout(function () {
          document.title = '+_+! --> ' + blogTitle
        }, 500)
      } else {
        document.title = 'lonus_lan 欢迎回来！'
        timer = setTimeout(function () {
          document.title = blogTitle
        }, 1000)
      }
    }, false)

    new Ribbons({
      colorSaturation: '60%',
      colorBrightness: '50%',
      colorAlpha: 0.5,
      colorCycleSpeed: 5,
      verticalPosition: 'random',
      horizontalSpeed: 200,
      ribbonCount: 3,
      strokeSize: 0,
      parallaxAmount: -0.2,
      animateSections: true,
    })

    if ($('#comments').length === 1) {
      return
    } else {
      $(window).scroll()
    }

    $('.header').circleMagic({
      clearOffset: 0.3,
      color: 'rgba(255,255,255, .2)',
      density: 0.2,
      radius: 15,
    })
  },
  initArticle: function () {
    page.share()

    initCanvas('articleTop')

    if ($(window).width() >= 768) {
      $('.post__toc').css({
        left: document.querySelector('.article__content').
          getBoundingClientRect().right + 20,
        right: 'auto',
        display: 'block',
      })
    } else {
      $('.side__top--toc').click(function () {
        $('.post__toc').slideToggle()
      })
    }

    var $articleTocs = $('.vditor-reset [id^=toc_h]')
    var $articleToc = $('.article__toc')

    $articleToc.find('a').click(function (event) {
      var id = $(this).attr('href')
      window.location.hash = id
      $(window).scrollTop($(id).offset().top)
      if ($(window).width() < 768) {
        $('.post__toc').slideToggle()
      }
      event.preventDefault()
      event.stopPropagation()
      return false
    })

    $(window).scroll(function (event) {
      if ($('.article__toc li').length === 0) {
        return false
      }

      // 界面各种图片加载会导致帖子目录定位
      var toc = []
      $articleTocs.each(function (i) {
        toc.push({
          id: this.id,
          offsetTop: $(this).offset().top,
        })
      })

      // 当前目录样式
      var scrollTop = $(window).scrollTop() + 10
      for (var i = 0, iMax = toc.length; i < iMax; i++) {
        if (scrollTop < toc[i].offsetTop) {
          $articleToc.find('li').removeClass('current')
          var index = i > 0 ? i - 1 : 0
          $articleToc.find('a[href="#' + toc[index].id + '"]').
            parent().
            addClass('current')
          break
        }
      }
      if (scrollTop >= toc[toc.length - 1].offsetTop) {
        $articleToc.find('li').removeClass('current')
        $articleToc.find('li:last').addClass('current')
      }
    })
    $(window).scroll()
  },
  next: function () {
    // 设置主页图片
    window.cnblogsConfig = {
      homeTopImg: [
        "https://img.lonuslan.com/lonuslan/20200120/AXsi94kr5YSl.jpg",
        "https://img.lonuslan.com/lonuslan/20200120/o6RVlf8Tym1S.jpg",
        "https://img.lonuslan.com/lonuslan/20200120/4Xw4pJJ6wA7X.jpg",
        "https://img.lonuslan.com/lonuslan/20200120/d4yH2omtFThg.jpg",
        "https://img.lonuslan.com/lonuslan/20200120/QOBHhXHWcgBu.jpg",
        "https://img.lonuslan.com/lonuslan/20200120/XznCEJWcH0oG.jpg",
        "https://img.lonuslan.com/lonuslan/20200120/G0pKoHpLTSqp.jpg",
        "https://img.lonuslan.com/lonuslan/20200120/9P2HW1O4DSNl.jpg",
        "https://img.lonuslan.com/lonuslan/20200120/IRiGYHISNvks.jpg"
      ]
    }
    let homeTopImg = window.cnblogsConfig.homeTopImg, bgImg;

    homeTopImg.length > 0 ?
        (homeTopImg.length > 1 ? bgImg = homeTopImg[randomNum(0, homeTopImg.length - 1)] : bgImg = homeTopImg[0])
        : bgImg = "";
    // console.log("bgImg -->" + bgImg)
    // console.log("测试----> 随机获取header图");
    $('.header--index').css({
      'background': '#222 url('+bgImg+')  center center no-repeat',
      'background-size': 'cover'
    });
  },
  three: function () {
    $(document).ready(function () {
      // console.log("aplayer-body------------------------------start");
      // $('.aplayer.aplayer-fixed .aplayer-body').css({
      //   'max-width': '260px',
      //   'margin-bottom': '50px'
      // });
      // console.log("aplayer-fixed-----------------------------start");
      // $('.aplayer.aplayer-fixed').css({
      //   'max-width': '260px',
      //   'margin-bottom': '50px'
      // });
      // console.log("aplayer-miniswitcher----------------------start");
      // $('.aplayer .aplayer-miniswitcher').css({
      //   'background': '#00cc00'
      //   //"cssText": "background:#00cc00"
      // });
      // console.log("left--------------------------------------start");
      // $('.aplayer.aplayer-fixed.aplayer-narrow .aplayer-body').css({
      //   "cssText": "left:-66px!important"
      // });
      // console.log("p------------------------------------------start");
      // $('.aplayer .aplayer-lrc p').css({
      //   'font-size': '14px',
      //   'color': 'red'
      //   //"cssText": "font-size:14px;color:red"
      // });
      const valine = new Valine({
        el: '.Valine',
        appId: 'G9biID9XRxn5YbHGv99L9HQ5-9Nh9j0Va',
        appKey: 'eqfSV7FBGCr0HBqWj0EkbaYS',
        placeholder: '请输入您的评论:',
        lang: 'zh-CN',
        avatar: 'wavatar',
        enableQQ: true
      })
      const elementsString = $('#elements').text();
      //$('#elements').text().empty();
      $('#elements').empty();
      //console.log(elementsString);
      const options = {
        // 闪烁光标必须得有：上面的css和下面字符串内添加 ^1000 ，只要是当输入到^1000就解析闪烁的时间，1000ms。
        strings: [elementsString + '^1000'],
        typeSpeed: 200,
        loop: true,
        cursorChar: '|'
      };
      const typed = new Typed("#elements", options);
    })
  }
};
function randomNum(minNum,maxNum) {
  switch(arguments.length){
    case 1:
      return parseInt(Math.random()*minNum+1);
      break;
    case 2:
      return parseInt(Math.random()*(maxNum-minNum+1)+minNum);
      break;
    default:
      return 0;
      break;
  }
};
$(document).ready(function () {
  Skin.init();
  Skin.next();
  Skin.three();
  // show_animation();
  // postFloat();
  // toAnotherBlog();
})

// function postFloat() {
//   var i = 0;
//   if ($(article) != null){
//     i++;
//     if (i % 2 == 1){
//       $('post-thumb').css('float', 'right');
//     }else {
//       $('post-thumb').css('float', 'left');
//     }
//   }
// }

// function toAnotherBlog() {
//   var otherblog = document.getElementById(".otherblog");
//   console.log("toAnotherBlog js 启动 ... ")
//   otherblog.onclick = function () {
//       window.open("https://www.lonuslan.xyz");
//   }
// }

var show_animation=new function(){
  this.ini=function(ajax){
    $("article.post-list-thumb").each(
        function(i){
          if(ajax){
            var window_height=$(window).height();
          }else{
            if($(".headertop").hasClass("headertop-bar")){
              var window_height=0;
            }else{
              if(mashiro_option.land_at_home){
                var window_height=$(window).height()-300;}
              else{
                var window_height=$(window).height();
              }
            }
          }
  var article_height=$("article.post-list-thumb").eq(i).offset().top;
          if($(window).height()+$(window).scrollTop()>=article_height)
    $("article.post-list-thumb").eq(i).addClass('post-list-show');
          $(window).scroll(function(){var scrolltop=$(window).scrollTop();
          if(scrolltop+window_height>=article_height&&scrolltop)
            $("article.post-list-thumb").eq(i).addClass("post-list-show");
          });
        });
  }
}
//日历js文件
// (function($) {
//   var Checkin = function(ele, options) {
//     this.ele = ele;
//     this.opt = options;
//     this.defaults = {
//       width: 320,
//       height: 'auto',
//       background: '#f90',
//       radius: 10,
//       color: '#fff',
//       padding: 10,
//       // dateArray: [1, 2, 4, 6], // 假设已签到的天数+1
//     };
//     this.obj = $.extend({}, this.defaults, this.opt);
//   }
//   Checkin.prototype.init = function() {
//     var _self = this.ele,
//         html = '',
//         myDate = new Date(),
//         year = myDate.getFullYear(),
//         month = myDate.getMonth(),
//         day = myDate.getDate(),
//         weekText = ['日', '一', '二', '三', '四', '五', '六'];
//     _self.css({
//       width: this.obj.width + 'px',
//       height: this.obj.height,
//       background: this.obj.background,
//       borderRadius: this.obj.radius,
//       color: this.obj.color,
//       padding: this.obj.padding
//     }).append("<div class='title'><p>" + year + '年' + (month + 1) + '月' + day + '日' + "</p><a class=\'checkBtn\' href=\"javascript:;\">签到</a></div>");
//     $("<ul class='week clearfix'></ul><ul class='calendarList clearfix'></ul>").appendTo(_self);
//     for (var i = 0; i < 7; i++) {  /*7列*/
//       _self.find(".week").append("<li>" + weekText[i] + "</li>")
//     };
//     for (var i = 0; i < 42; i++) {
//       html += "<li></li>"
//     };
//     _self.find(".calendarList").append(html);
//     var $li = _self.find(".calendarList").find("li");
//     _self.find(".week li").css({
//       width: (_self.width() / 8) + 'px',
//       height: 40 + 'px',
//       borderRight: '1px solid #f90',
//       boxSizing: 'border-box',
//       background: '#b25d06'
//     });
//     $li.css({
//       width: (_self.width() / 8) + 'px',
//       height: 40 + 'px',
//       borderRight: '1px solid #f90',
//       borderBottom: '1px solid #f90',
//       boxSizing: 'border-box',
//       color: "#b25d06"
//     });
//     _self.find(".calendarList").find("li:nth-child(7n)").css('borderRight', 'none');
//     _self.find(".week li:nth-child(7n)").css('borderRight', 'none');
//     var monthFirst = new Date(year, month, 1).getDay();
//     var d = new Date(year, (month + 1), 0)
//     var totalDay = d.getDate(); //获取当前月的天数
//     for (var i = 0; i < totalDay; i++) {
//       $li.eq(i + monthFirst).html(i + 1);
//       $li.eq(i + monthFirst).addClass('data' + (i + 1))
//       if (isArray(this.obj.dateArray)) {
//         for (var j = 0; j < this.obj.dateArray.length; j++) {
//           if (i == this.obj.dateArray[j]) {
//             // 假设已经签到的
//             $li.eq(i + monthFirst).addClass('checked');
//           }
//         }
//       }
//     }
//     // $li.eq(monthFirst+day-1).css('background','#f7ca8e');
//     /*找到当天的li，添加样式able-qiandao*/
//     _self.find($(".data" + day)).addClass('able-qiandao');
//   }
//   var isChecked = false;
//   Checkin.prototype.events = function() {
//     var _self = this.ele;
//     var $li = _self.find(".calendarList").find("li");
//     $li.on('click', function(event) {
//       event.preventDefault();
//       /* Act on the event */
//       /*判断当天li中存不存在able-qiandao样式*/
//       if ($(this).hasClass('able-qiandao')) {
//         $(this).addClass('checked'); /*样式存在，添加checked样式*/
//         modal(_self);
//         isChecked = true;
//       }
//     });
//     var checkBtn = _self.find(".checkBtn");
//     checkBtn.click(function(event) {
//       modal(_self);
//       _self.find('.able-qiandao').addClass('checked');
//       isChecked = true;
//     });
//   }
//   var modal = function(e) {
//     var mask = e.parents().find(".mask");
//     var close = e.parents().find(".closeBtn");
//     if (mask && !isChecked) {
//       mask.addClass('trf');
//     } else {
//       return
//     };
//     close.click(function(event) {
//       event.preventDefault();
//       mask.removeClass('trf')
//     });
//     e.parents().find('.checkBtn').text("已签到");
//   }
//   $.fn.Checkin = function(options) {
//     var checkin = new Checkin(this, options);
//     var obj = [checkin.init(), checkin.events()]
//     return obj
//   }
//   var isArray = function(arg) {
//     return Object.prototype.toString.call(arg) === '[object Array]';
//   };
// })(jQuery);
// // 插件调用
// $(".checkin").Checkin();

