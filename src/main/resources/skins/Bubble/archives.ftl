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
<@head title="${archiveLabel} - ${blogTitle}">
    <link rel="stylesheet" href="${staticServePath}/skins/${skinDirName}/css/base.css?${staticResourceVersion}"/>
</@head>
</head>
<body class="fn__flex-column">
<div id="pjax" class="fn__flex-1">
    <#if pjax><!---- pjax {#pjax} start ----></#if>
<#include "define-header.ftl">
    <@header type='index'></@header>
    <div class="wrapper web-topage">
        <h2 class="other__title"><a href="${servePath}" class="ft__a">${blogTitle}</a> - ${archiveLabel}</h2>
        <div class="ft__center">
        ${archiveDates?size} ${cntMonthLabel}
        ${statistic.statisticPublishedBlogArticleCount} ${cntArticleLabel}
        </div>
        <div class="articles">
            <#list archiveDates as archiveDate>
                <div class="other__item other__item--archive">
                    <a href="${servePath}/archives/${archiveDate.archiveDateYear}/${archiveDate.archiveDateMonth}">
                    <#if "en" == localeString?substring(0, 2)>
                        ${archiveDate.monthName} ${archiveDate.archiveDateYear}
                    <#else>
                        ${archiveDate.archiveDateYear} ${yearLabel} ${archiveDate.archiveDateMonth} ${monthLabel}
                    </#if>
                    </a>
                    <span>
                        ${archiveDate.archiveDatePublishedArticleCount}
                        ${cntArticleLabel}
                    </span>
                </div>
            </#list>
            <br><br><br>
        </div>
    </div>
    <#if pjax><!---- pjax {#pjax} end ----></#if>
</div>
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
<#include "footer.ftl">
</body>
</html>
