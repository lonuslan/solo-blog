/*
 * Solo - A small and beautiful blogging system written in Java.
 * Copyright (c) 2010-present, b3log.org
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

    var $articleTocs = $('.vditor-reset [id^=b3_solo_h]')
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
  next : function () {
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
    console.log("bgImg -->" + bgImg)
    console.log("测试----> 随机获取header图");
    $('.header').css({
      'background': '#222 url('+bgImg+')  center center no-repeat',
      'background-size': 'cover'
    });
  }
}
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
  Skin.init()
  Skin.next()
})
