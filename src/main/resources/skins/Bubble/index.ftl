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
<#include "../../common-template/macro-common_head.ftl">
<!DOCTYPE html>
<html>
<head>
<@head title="${blogTitle}">
    <link rel="stylesheet" href="${staticServePath}/skins/${skinDirName}/css/base.css?${staticResourceVersion}"/>
</@head>

</head>
<body class="fn__flex-column">
<div id="pjax" class="fn__flex-1">
    <#if pjax><!---- pjax {#pjax} start ----></#if>
<#--    <#include "macro-header.ftl">-->
    <#include "define-header.ftl">
    <@header type='index'></@header>
    <div class="wrapper_main web-topage">
        <#include "article-list.ftl">
    </div>

    <!-- require APlayer -->
    <link rel="stylesheet" href="https://img.lonuslan.com/lonuslan/20200729/APlayer.min.css">
    <script src="https://img.lonuslan.com/lonuslan/20200729/APlayer.min.js"></script>
    <!-- require MetingJS -->
    <script src="https://img.lonuslan.com/lonuslan/20200729/Meting.min.js"></script>
    <meting-js
            server="netease"
            type="playlist"
            id="3002544701"
            theme="#33ccff"
            fixed="true"
            list-max-height="150px"
            list-folded="true">
    </meting-js>
    <#if pjax><!---- pjax {#pjax} end ----></#if>
</div>
<#include "footer.ftl">
</body>
</html>