<div class="rightside rin" id="rightside" style="opacity: 1; transform: translateX(-38px);">
    <div id="rightside-config-hide" class="rightside-out">
<#--        <button id="readmode" type="button" title="閱讀模式"><i class="fas fa-book-open"></i></button>-->
        <button id="font_plus" type="button" title="放大字型"><i class="fas fa-plus"></i></button>
        <button id="font_minus" type="button" title="縮小字型"><i class="fas fa-minus"></i></button>
<#--        <button class="translate_chn_to_cht" id="translateLink" type="button" title="簡繁轉換"> 簡</button>-->
        <button id="darkmode" type="button" title="淺色和深色模式轉換(暂未开发)"><i class="fas fa-adjust"></i></button>
    </div>
    <div id="rightside-config-show">
        <button id="rightside_config" type="button" title="設定"><i class="fas fa-cog"></i></button>
<#--        TODO     修改样式 -->
        <button id="to_comment" type="button" title="直達評論"><i class="scroll_to_comment fas fa-comments"></i></button>
<#--        <button class="close" id="mobile-toc-button" type="button" title="目錄"><i class="fas fa-list-ul"></i></button>-->
        <button id="go-up" type="button" title="回到頂部"><i class="fas fa-arrow-up"></i></button>
    </div>
</div>
<script>

    // var E = GLOBAL_CONFIG.copyright;
    // if (void 0 !== E && (document.body.oncopy = function (e) {
    //     var t;
    //     e.preventDefault();
    //     var i = window.getSelection(0).toString();
    //     return t = 45 < i.length ? i + "\n\n\n" + E.languages.author + "\n" + E.languages.link + window.location.href + "\n" + E.languages.source + "\n" + E.languages.info : i, e.clipboardData ? e.clipboardData.setData("text", t) : window.clipboardData.setData("text", t)
    // }), $("#darkmode").click(function () {
    //     "light" == ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(), Cookies.set("theme", "dark", 2), a && snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode(), Cookies.set("theme", "light", 2), a && snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)), "function" == typeof utterancesTheme && utterancesTheme()
    // }), GLOBAL_CONFIG.runtime) {
    //     var j = $("#webinfo-runtime-count"), R = j.attr("publish_date"), M = function () {
    //         var e = new Date(R), t = (new Date).getTime() - e.getTime(), i = Math.floor(t / 864e5);
    //         j.text(i + " " + GLOBAL_CONFIG.runtime_unit)
    //     };
    //     M(), setInterval(M, 1e4)
    // }
</script>


