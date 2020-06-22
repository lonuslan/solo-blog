<#--

    Solo - A small and beautiful blogging system written in Java.
    Copyright (c) 2010-present, b3log.org

    Solo is licensed under Mulan PSL v2.
    You can use this software according to the terms and conditions of the Mulan PSL v2.
    You may obtain a copy of Mulan PSL v2 at:
            http://license.coscl.org.cn/MulanPSL2
    THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
    See the Mulan PSL v2 for more details.

-->
<#--
-- 添加关于我页面
-- add about me page
-->
<!DOCTYPE html>
<html>
<head>
        <!-- require APlayer -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
        <script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
        <!-- require MetingJS -->
        <script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
        <!-- require DPlayer-->
        <link rel="stylesheet" href="https://cdn.bootcss.com/dplayer/1.25.0/DPlayer.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/dplayer/1.25.1/DPlayer.min.js"></script>
        <script src="https://blog-static.cnblogs.com/files/yjlblog/cursor-effects.js"></script>
        <canvas width="1366" height="662" style="position: fixed; left: 0px; top: 0px; z-index: 2147483647; pointer-events: none;"></canvas>
        <style>
                /*音乐播放器样式*/
                .aplayer.aplayer-fixed .aplayer-body {
                        max-width: 260px!important;
                        margin-bottom: 50px!important;
                }
                .aplayer.aplayer-fixed{
                        margin-bottom:49px!important;
                        max-width:260px!important;
                }
                .aplayer.aplayer-fixed .aplayer-list{
                        margin-bottom: 66px!important;
                }
                .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body{
                        left: -66px!important;
                }
                .aplayer .aplayer-lrc p{
                        font-size: 15px!important;
                        color: greenyellow!important;
                        text-shadow: none!important;
                }
                .aplayer .aplayer-miniswitcher{
                        background: #00cc00!important;
                }
                html{
                        cursor: url("https://img.lonuslan.com/lonuslan/20200502/InKHIJ0NtpfO.ico"), auto;
                        text-align: center;
                }
        </style>
</head>
<body class="fn__flex-column">
<div id="pjax" class="fn__flex-1">
        <#if pjax><!---- pjax {#pjax} start ----></#if>
        <div style="text-align: center;">
        <h1 class="h1_title" style="text-align: center">
                about me 关于我页面
        </h1>
        <h2 class="h2_introduce" style="text-align: center">
                // TODO some interesting things.
        </h2>
        <div class="aboutMeWrapper" style="text-align: center">
                <div class="aboutMeContentBody" style="text-align: center">
                        ready to write something and add some fantastic styles.
                </div>
        </div>
        </div>
<#--        引入音乐播放器！-->
        <meting-js
                server="netease"
                type="playlist"
                id="3002544701"
                theme="#33ccff"
                fixed="true"
                autoplay="false"
                list-max-height="150px"
                list-folded="true">
        </meting-js>
</div>
</body>
</html>