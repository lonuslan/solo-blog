<#include "../../common-template/macro-common_head.ftl">
<!DOCTYPE html>
<html>
<head>
    <@head title="时间轴 - ${blogTitle}">
        <link rel="stylesheet" href="${staticServePath}/skins/${skinDirName}/css/base.css?${staticResourceVersion}"/>
    </@head>
</head>
<body class="fn__flex-column">
<div id="pjax" class="fn__flex-1">
    <#if pjax><!---- pjax {#pjax} start ----></#if>
    <#include "define-header.ftl">
    <@header type='index'></@header>

    <div class="time_axis_main">
        <div style="height: 1200px">
            <h1>时间轴</h1>
        </div>
    </div>
    <#if pjax><!---- pjax {#pjax} start ----></#if>
</div>
<#include "footer.ftl">
</body>
</html>