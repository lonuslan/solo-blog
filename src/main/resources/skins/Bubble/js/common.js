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
        document.title = 'lonus lan 欢迎回来！'
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
      //主页打字机效果
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
      show_animation();
      // //文章页article图片交替出现
      $("article").each(function (index, element) {
        if (index % 2 == 0){
          $(element).find(".post-thumb-show").addClass("post-thumb").removeClass("post-left-thumb");
        }
        else{
          $(element).find(".post-thumb-show").addClass("post-left-thumb").removeClass("post-thumb");
        }
      });
      $("body").append("<meting-js\n" +
          "        server=\"netease\"\n" +
          "        type=\"playlist\"\n" +
          "        id=\"3002544701\"\n" +
          "        theme=\"#33ccff\"\n" +
          "        fixed=\"true\"\n" +
          "        list-max-height=\"150px\"\n" +
          "        list-folded=\"true\">\n" +
          // "        lrc-type=\"1\">\n" +
          "</meting-js>");
      $(window).scroll(function () {
        if ($(this).scrollTop() > 0){
          $("#rightside").addClass("rout").removeClass("rin");
        }else {
          $("#rightside").removeClass("rout").addClass("rin");
        }
      });
      if ($(".commentFont")[0]){
        $("#to_comment").show();
        //添加输入框文本提示
        // $(".vnick").before("<span class = \"popuptext\" id = \"thepopup\" style = \"width: 240px;\">输入QQ号将自动拉取昵称和头像</span>");
        // $(".vmail").before("<span class = \"popuptext\" id = \"thepopup\" style = \"width: 230px;\">你将收到邮箱回复通知</span>");
        // $(".vlink").before("<span class = \"popuptext\" id = \"thepopup\" style = \"width: 230px;\">禁止小广告😀</span>");
        // $(".vnick").focus(function () {
        //   var popup = $("#thepopup");
        //   popup.addClass("poptextshow");
        //   $(".vnick").blur(function () {
        //     popup.removeClass("poptextshow");
        //   });
        // });
        // $(".vmail").focus(function () {
        //   var popup = $("#thepopup");
        //   popup.addClass("poptextshow");
        //   $(".vmial").blur(function () {
        //     popup.removeClass("poptextshow");
        //   });
        // });
        // $(".vlink").focus(function () {
        //   var popup = $("#thepopup");
        //   popup.addClass("poptextshow");
        //   $(".vlink").blur(function () {
        //     popup.removeClass("poptextshow");
        //   });
        // });
      }else{
        $("#to_comment").hide();
      };
      // $("#rightside-config-hide").removeClass("rightside-in").addClass("rightside-out");
      // $(".rightside-in").hide();
      var nowMode = "lightMode";
      $("#readmode").click(function () {
        // $("body").toggleClass("read-mode")
      }), $("#font_plus").click(function () {
        $("body").css("font-size", parseFloat($("body").css("font-size")) + 1)
      }), $("#font_minus").click(function () {
        $("body").css("font-size", parseFloat($("body").css("font-size")) - 1)
      }), $("#to_comment").click(function () {
        var scoll_offset = $(".commentFont").offset().top;
        $("body,html").animate({
          scrollTop: scoll_offset //让body的scrollTop等于pos的top，就实现了滚动
        },1000);
      }), $("#rightside_config").on("click", function () {
        // $(".rightside-in").show();
        $("#rightside-config-hide").hasClass("rightside-in") ? $("#rightside-config-hide").removeClass("rightside-in").addClass("rightside-out") : $("#rightside-config-hide").removeClass("rightside-out").addClass("rightside-in")
      }), $("#go-up").on("click", function () {
        Util.goTop();
      }), $("#darkmode").click(function () {
        if (nowMode === "lightMode"){
          $("body").addClass("body-dark").removeClass("body-light");
          $("p").addClass("p-dark").removeClass("p-light");
          $(".articles").addClass("article-dark").removeClass("article-light");
          nowMode = "darkMode";
        }else {
          $("body").addClass("body-light").removeClass("body-dark");
          $("p").addClass("p-light").removeClass("p-dark");
          $(".articles").addClass("article-light").removeClass("article-dark");
          nowMode = "lightMode";
        }
      });
    })
  },
  four : function () {
    //write here to do something interesting things.



    // $(document).ready(function () {
    //   var apSwitchTag = 0;
    //   $(".aplayer-body").addClass("ap-hover");
    //   $(".aplayer-miniswitcher").click(function () {
    //     if (apSwitchTag == 0) {
    //       $(".aplayer-body").removeClass("ap-hover");
    //       // $("#secondary").addClass("active");
    //       apSwitchTag = 1;
    //     } else {
    //       $(".aplayer-body").addClass("ap-hover");
    //       // $("#secondary").removeClass("active");
    //       apSwitchTag = 0;
    //     }
    //   });
    //
    // })
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
function show_animation(ajax) {
  var land_at_home = false;
  $("article.post-list-thumb").each(
      function (i) {
        if (ajax) {
          var window_height = $(window).height();
        } else {
          if ($(".headertop").hasClass("headertop-bar")) {
            var window_height = 0;
          } else {
            if (land_at_home) {
              var window_height = $(window).height() - 300;
            } else {
              var window_height = $(window).height();
            }
          }
        }
        var article_height = $("article.post-list-thumb").eq(i).offset().top;
        if ($(window).height() + $(window).scrollTop() >= article_height)
          $("article.post-list-thumb").eq(i).addClass('post-list-show');
        $(window).scroll(function () {
          var scrolltop = $(window).scrollTop();
          if (scrolltop + window_height >= article_height && scrolltop)
            $("article.post-list-thumb").eq(i).addClass("post-list-show");
        });
      });
};


function aplayerF() {
  'use strict';
  var aplayers = [],
      loadMeting = function () {
        function a(a, b) {
          var c = {
            container: a,
            audio: b,
            mini: null,
            fixed: null,
            autoplay: !1,
            mutex: !0,
            lrcType: 3,
            listFolded: 1,
            preload: 'auto',
            theme: '#2980b9',
            loop: 'all',
            order: 'list',
            volume: null,
            listMaxHeight: null,
            customAudioType: null,
            storageName: 'metingjs'
          };
          if (b.length) {
            b[0].lrc || (c.lrcType = 0);
            var d = {};
            for (var e in c) {
              var f = e.toLowerCase();
              (a.dataset.hasOwnProperty(f) || a.dataset.hasOwnProperty(e) || null !== c[e]) && (d[e] = a.dataset[f] || a.dataset[e] || c[e], ('true' === d[e] || 'false' === d[e]) && (d[e] = 'true' == d[e]))
            }
            aplayers.push(new APlayer(d))
          }
          for (var f = 0; f < aplayers.length; f++) try {
            aplayers[f].lrc.hide();
          } catch (a) {
            console.log(a)
          }
          var lrcTag = 1;
          $(".aplayer.aplayer-fixed").click(function () {
            if (lrcTag == 1) {
              for (var f = 0; f < aplayers.length; f++) try {
                aplayers[f].lrc.show();
              } catch (a) {
                console.log(a)
              }
            }
            lrcTag = 2;
          });
          var apSwitchTag = 0;
          $(".aplayer.aplayer-fixed .aplayer-body").addClass("ap-hover");
          $(".aplayer-miniswitcher").click(function () {
            if (apSwitchTag == 0) {
              $(".aplayer.aplayer-fixed .aplayer-body").removeClass("ap-hover");
              $("#secondary").addClass("active");
              apSwitchTag = 1;
            } else {
              $(".aplayer.aplayer-fixed .aplayer-body").addClass("ap-hover");
              $("#secondary").removeClass("active");
              apSwitchTag = 0;
            }
          });
        }
        var b = mashiro_option.meting_api_url + '?server=:server&type=:type&id=:id&_wpnonce=' + Poi.nonce;
        'undefined' != typeof meting_api && (b = meting_api);
        for (var f = 0; f < aplayers.length; f++) try {
          aplayers[f].destroy()
        } catch (a) {
          console.log(a)
        }
        aplayers = [];
        for (var c = document.querySelectorAll('.aplayer'), d = function () {
          var d = c[e],
              f = d.dataset.id;
          if (f) {
            var g = d.dataset.api || b;
            g = g.replace(':server', d.dataset.server), g = g.replace(':type', d.dataset.type), g = g.replace(':id', d.dataset.id);
            var h = new XMLHttpRequest;
            h.onreadystatechange = function () {
              if (4 === h.readyState && (200 <= h.status && 300 > h.status || 304 === h.status)) {
                var b = JSON.parse(h.responseText);
                a(d, b)
              }
            }, h.open('get', g, !0), h.send(null)
          } else if (d.dataset.url) {
            var i = [{
              name: d.dataset.name || d.dataset.title || 'Audio name',
              artist: d.dataset.artist || d.dataset.author || 'Audio artist',
              url: d.dataset.url,
              cover: d.dataset.cover || d.dataset.pic,
              lrc: d.dataset.lrc,
              type: d.dataset.type || 'auto'
            }];
            a(d, i)
          }
        }, e = 0; e < c.length; e++) d()
      };
  document.addEventListener('DOMContentLoaded', loadMeting, !1);
}


$(document).ready(function () {
  Skin.init();
  Skin.next();
  Skin.three();
  Skin.four();
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


