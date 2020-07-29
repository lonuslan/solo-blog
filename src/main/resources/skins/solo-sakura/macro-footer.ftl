<#--

    Solo - A small and beautiful blogging system written in Java.
    Copyright (c) 2010-present, b3log.org

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

-->
<footer id="colophon" class="site-footer" role="contentinfo">
    <div class="site-info">
        <div class="footertext">
            <div class="img-preload">
                <img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/wordpress-rotating-ball-o.svg"><img
                        src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/disqus-preloader.svg">
            </div>
            <p class="foo-logo"
               style="background-image: url('https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sakura.svg');">
            </p>
            <p style="font-family: 'Ubuntu', sans-serif;">
                <span style="color: #666666;">Crafted with <i class='fa fa-heart animated' style="color: #e74c3c;"></i> by <a rel="me" href="https://github.com/88250/solo" target="_blank" style="color: #000000;text-decoration:none;">Solo</a> X <a rel="me" href="https://github.com/adlered" target="_blank" style="color: #000000;text-decoration:none;">adlered</a></span>
            </p>
            Theme <a rel="friend" href="https://github.com/mashirozx/Sakura" target="_blank">${skinDirName}</a><br>
            © ${year} <a href="${servePath}">${blogTitle}</a><br>
            ${statistic.statisticPublishedBlogArticleCount} ${articleLabel} &nbsp;
            <span data-uvstaturl="${servePath}">${statistic.statisticBlogViewCount}</span> ${viewLabel} &nbsp;
            <#if !staticSite>${onlineVisitorCnt} ${onlineVisitorLabel}</#if>
            ${footerContent}
        </div>
        <div class="footer-device">
        </div>
    </div>
</footer>
<div class="openNav no-select">
    <div class="iconflat no-select">
        <div class="icon">
        </div>
    </div>
    <div class="site-branding">
        <h1 class="site-title"><a href="${staticServePath}/">${blogTitle}</a></h1>
    </div>
</div>