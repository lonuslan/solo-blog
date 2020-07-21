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
<main id="main" class="site-main" role="main">
    <h1 class="main-title" style="font-family: 'Ubuntu', sans-serif;">
        <svg t="1588439558273" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6535" width="260" height="260"><path d="M834.35479 512A53.248 53.248 0 0 0 788.47959 566.0672v329.3184A26.2144 26.2144 0 0 1 762.26519 921.6H261.73399A26.2144 26.2144 0 0 1 235.51959 895.3856V128.6144A26.2144 26.2144 0 0 1 261.73399 102.4h319.2832a12.0832 12.0832 0 0 1 10.0352 5.3248L742.39959 327.68H604.15959v-68.8128A53.248 53.248 0 0 0 558.28439 204.8 51.2 51.2 0 0 0 501.75959 256v115.712A58.5728 58.5728 0 0 0 560.12759 430.08h277.7088a52.224 52.224 0 0 0 50.9952-37.0688 49.9712 49.9712 0 0 0-9.8304-46.4896L656.99799 22.7328v-1.2288l-3.4816-2.8672a37.0688 37.0688 0 0 0-3.6864-4.3008A28.4672 28.4672 0 0 0 645.11959 11.264a28.4672 28.4672 0 0 0-3.072-3.072l-4.5056-2.4576-4.3008-2.048-4.9152-1.4336A17.6128 17.6128 0 0 0 624.63959 1.024a26.0096 26.0096 0 0 0-5.7344 0L614.39959 0H242.27799A109.1584 109.1584 0 0 0 133.11959 109.1584v805.6832A109.1584 109.1584 0 0 0 242.27799 1024h539.4432A109.1584 109.1584 0 0 0 890.87959 914.8416V563.2a51.2 51.2 0 0 0-56.5248-51.2z" fill="#515151" p-id="6536"></path><path d="M389.11959 532.48a51.2 51.2 0 0 0 0 102.4h245.76a51.2 51.2 0 0 0 0-102.4z" fill="#515151" p-id="6537"></path><path d="M337.91959 716.8m51.2 0l143.36 0q51.2 0 51.2 51.2l0 0q0 51.2-51.2 51.2l-143.36 0q-51.2 0-51.2-51.2l0 0q0-51.2 51.2-51.2Z" fill="#515151" p-id="6538"></path></svg>
        <i class="fa fa-envira" aria-hidden="true"></i> Articles </h1>
    <#list articles as article>
        <article class="post post-list-thumb" itemscope="" itemtype="http://schema.org/BlogPosting">
            <div class="post-thumb"
<#--                    <#if article.articleId / 2 == 0 > style="-->
<#--                    .post-thumb{-->
<#--                        float: right;-->
<#--                    }-->
<#--                    "  </#if>-->
<#--                    <#if article.articleId / 2 != 0 > style="-->
<#--                    .post-thumb{-->
<#--                        float: left;-->
<#--                    }-->
<#--                    " </#if>-->
            >
                <a href="${servePath}${article.articlePermalink}">
                    <img class="lazyload" referrerpolicy="origin" src="${article.articleImg1URL}" onerror="imgError(this,3)" data-src="${article.articleImg1URL}">
                </a>
            </div>
            <div class="post-content-wrap">
                <div class="post-content">
                    <div class="post-date">
                        <#if article.articlePutTop>
                            ${topArticleLabel}
                        </#if>
                        <#if article.hasUpdated>
                            ${updatedLabel}
                        </#if>
                        <i class="iconfont icon-time"></i>
                        <svg t="1595317598944" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2333" width="14" height="14"><path d="M505.984 975.317333c-259.2 0-469.333333-210.133333-469.333333-469.333333s210.133333-469.333333 469.333333-469.333333 469.333333 210.133333 469.333333 469.333333-210.090667 469.333333-469.333333 469.333333z m0-850.645333a381.354667 381.354667 0 0 0-381.354667 381.354667 381.354667 381.354667 0 1 0 381.354667-381.354667z m190.677333 425.344h-190.677333a43.946667 43.946667 0 0 1-43.989333-43.989333V242.005333a43.946667 43.946667 0 1 1 87.978666 0v219.989334h146.688a44.032 44.032 0 0 1 0 88.021333z" fill="#d81e06" p-id="2334"></path></svg>
                        ${article.articleUpdateDate?string("yyyy年MM月dd日 HH:mm:ss")}
                    </div>
                    <a href="${servePath}${article.articlePermalink}" class="post-title">
                        <h3>${article.articleTitle}</h3>
                    </a>
                    <div class="post-meta">
<#--                        <span><i class="iconfont icon-attention"></i>${article.articleViewCount} 热度</span>-->
                        <a class="item__tag" href="${servePath}${article.articlePermalink}">
                            <svg t="1588438355038" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3304" width="250" height="250"><path d="M512 608a96 96 0 1 1 0-192 96 96 0 0 1 0 192m0-256c-88.224 0-160 71.776-160 160s71.776 160 160 160 160-71.776 160-160-71.776-160-160-160" p-id="3305" fill="#707070"></path><path d="M512 800c-212.064 0-384-256-384-288s171.936-288 384-288 384 256 384 288-171.936 288-384 288m0-640C265.248 160 64 443.008 64 512c0 68.992 201.248 352 448 352s448-283.008 448-352c0-68.992-201.248-352-448-352" p-id="3306" fill="#707070"></path></svg>
                            <span data-uvstaturl="${servePath}${article.articlePermalink}">
                                ${article.articleViewCount}
                            </span>
                            ${viewLabel}
                        </a>

                        <#if commentable>
                            &nbsp&nbsp
                            <a class="item__tag" href="${servePath}${article.articlePermalink}#b3logsolocomments">
                                <svg t="1588438264776" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2118" width="250" height="250"><path d="M895.469672 127.981836H127.941927c-35.322483 0-63.956637 28.634154-63.956637 63.956638v511.693008c0 35.322483 28.634154 63.956637 63.956637 63.956637h127.921462v160.1597c0 0.048095 0.00921 0.093121 0.010233 0.141216 0.214894 17.477047 14.44192 31.581276 31.970132 31.581276 10.175757 0 19.234063-4.758374 25.091468-12.165064l180.350554-179.717128H895.468648c35.322483 0 63.956637-28.634154 63.956638-63.956637V191.938474c0.001023-35.322483-28.633131-63.956637-63.955614-63.956638z m0 543.92306c0 17.520025-14.202467 31.722492-31.722493 31.722493H456.955336L319.824119 838.711993V703.627389H159.66442c-17.520025 0-31.722492-14.202467-31.722493-31.722493V223.665059c0-17.520025 14.202467-31.722492 31.722493-31.722492h704.082759c17.520025 0 31.722492 14.202467 31.722493 31.722492v448.239837z" fill="#707070" p-id="2119"></path><path d="M767.54821 352.101243c0 17.520025-14.202467 31.722492-31.722492 31.722493H287.585881c-17.520025 0-31.722492-14.202467-31.722492-31.722493v-0.515746c0-17.520025 14.202467-31.722492 31.722492-31.722492h448.239837c17.520025 0 31.722492 14.202467 31.722492 31.722492v0.515746zM639.627772 480.022705c0 17.520025-14.202467 31.722492-31.722492 31.722492H287.585881c-17.520025 0-31.722492-14.202467-31.722492-31.722492v-0.515747c0-17.520025 14.202467-31.722492 31.722492-31.722492h320.318376c17.520025 0 31.722492 14.202467 31.722492 31.722492v0.515747z" fill="#707070" p-id="2120"></path></svg>
                                <span data-uvstatcmt="${article.oId}">${article.articleCommentCount}</span> ${commentLabel}
                            </a>
                        </#if>

                        <#list article.articleTags?split(",") as articleTag>
                            &nbsp&nbsp
                            <a rel="tag" class="item__tag" href="${servePath}/tags/${articleTag?url('UTF-8')}">
                                <svg t="1588438405223" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4108" width="250" height="250"><path d="M926.571214 535.945846l-438.307009-424.391111C476.798906 100.457026 444.82735 87.521368 428.845949 87.521368H87.521368v366.670769c0 14.70359 12.90065 44.863453 23.534495 55.007179l437.816889 417.695727 377.698462-390.957949zM50.639863 572.529778C22.668034 545.827009 0 492.78906 0 454.192137V70.017094c0-38.66694 31.393915-70.017094 70.017094-70.017094h358.837607c38.66694 0 92.483829 21.757812 120.289367 48.679385l450.840069 436.521572a70.060855 70.060855 0 0 1 1.645401 99.012923L600.011487 999.931624c-26.851556 27.796786-71.26865 28.733265-99.266735 2.021744L50.639863 572.521026zM306.324786 437.606838c-72.502701 0-131.282051-58.77935-131.282051-131.282052 0-72.502701 58.77935-131.282051 131.282051-131.282051 72.502701 0 131.282051 58.77935 131.282052 131.282051 0 72.502701-58.77935 131.282051-131.282052 131.282052z m0-87.521368a43.760684 43.760684 0 1 0 0-87.521367 43.760684 43.760684 0 0 0 0 87.521367z" fill="#707070" p-id="4109"></path></svg>
                                ${articleTag}
                            </a> &nbsp;
                        </#list>
<#--                        <span class="comments-number"><i class="iconfont icon-mark"></i><a href="javascript:void(0);">${article.articleCommentCount} 条评论</a></span>-->
<#--                        <#if article.articleCategory?? && article.articleCategory != "">-->
<#--                            <span><i class="iconfont icon-file"></i><a href="${servePath}/category/${article.categoryURI}">${article.articleCategory}</a></span>-->
<#--                        </#if>-->
                    </div>
                    <div class="float-content">
                        <p>
                            ${article.articleAbstractText}
                        <div class="post-bottom">
                            <a href="${servePath}${article.articlePermalink}" class="button-normal"><i class="iconfont icon-caidan"> 阅读全文 </i></a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </#list>
</main>
<#if 0 != paginationPageCount>
    <nav class="pagination">
        <#if 1 != paginationPageNums?first>
            <a href="${servePath}${path}${pagingSep}${paginationPreviousPageNum}"
               aria-label="${previousPageLabel}"
               class="pagination__item vditor-tooltipped__n vditor-tooltipped">&laquo;</a>
            <a class="pagination__item" href="${servePath}${path}">1</a>
            <span class="pagination__item pagination__item--omit">...</span>
        </#if>
        <#list paginationPageNums as paginationPageNum>
            <#if paginationPageNum == paginationCurrentPageNum>
                <span class="pagination__item pagination__item--active">${paginationPageNum}</span>
            <#else>
                <a class="pagination__item" href="${servePath}${path}${pagingSep}${paginationPageNum}">${paginationPageNum}</a>
            </#if>
        </#list>
        <#if paginationPageNums?last != paginationPageCount>
            <span class="pagination__item pagination__item--omit">...</span>
            <a href="${servePath}${path}${pagingSep}${paginationPageCount}" class="pagination__item">${paginationPageCount}</a>
            <a href="${servePath}${path}${pagingSep}${paginationNextPageNum}" aria-label="${nextPagePabel}"
               class="pagination__item vditor-tooltipped__n vditor-tooltipped">&raquo;</a>
        </#if>
    </nav>
</#if>

<#--<div class="articles">-->
<#--    <#list articles as article>-->
<#--        <article class="item">-->
<#--            <h2 class="item__title">-->
<#--                <a rel="bookmark" href="${servePath}${article.articlePermalink}">-->
<#--                    ${article.articleTitle}-->
<#--                </a>-->
<#--                <#if article.articlePutTop>-->
<#--                    <sup>-->
<#--                        ${topArticleLabel}-->
<#--                    </sup>-->
<#--                </#if>-->
<#--                <#if article.hasUpdated>-->
<#--                    <sup>-->
<#--                        <a href="${servePath}${article.articlePermalink}">-->
<#--                        ${updatedLabel}-->
<#--                        </a>-->
<#--                    </sup>-->
<#--                </#if>-->
<#--            </h2>-->
<#--            <a class="item__abstract" pjax-title="${article.articleTitle}"-->
<#--               href="${servePath}${article.articlePermalink}">-->
<#--                <#if article.articleAbstractText?length gt 80>-->
<#--                    ${article.articleAbstractText[0..80]}-->
<#--                <#else>-->
<#--                    ${article.articleAbstractText}-->
<#--                </#if>-->
<#--            </a>-->
<#--            <div class="fn__clear">-->
<#--                ${article.articleUpdateDate?string("yyyy-MM-dd")}   &nbsp;·&nbsp;-->
<#--                <a href="${servePath}/authors/${article.authorId}">${article.authorName}</a>-->
<#--                &nbsp;·&nbsp;-->
<#--                <#list article.articleTags?split(",") as articleTag>-->
<#--                    <a rel="tag" class="item__tag" href="${servePath}/tags/${articleTag?url('UTF-8')}">-->
<#--                        ${articleTag}-->
<#--                    </a> &nbsp;-->
<#--                </#list>-->
<#--                <#if commentable>-->
<#--                    &nbsp;·&nbsp;-->
<#--                    <a class="item__tag" href="${servePath}${article.articlePermalink}#b3logsolocomments">-->
<#--                        <span data-uvstatcmt="${article.oId}">${article.articleCommentCount}</span> ${commentLabel}-->
<#--                    </a>-->
<#--                </#if>-->
<#--                &nbsp;·&nbsp;-->
<#--                <a class="item__tag" href="${servePath}${article.articlePermalink}">-->
<#--                    <span data-uvstaturl="${servePath}${article.articlePermalink}">${article.articleViewCount}</span> ${viewLabel}-->
<#--                </a>-->
<#--            </div>-->
<#--        </article>-->
<#--    </#list>-->

<#--    <#if 0 != paginationPageCount>-->
<#--        <nav class="pagination">-->
<#--            <#if 1 != paginationPageNums?first>-->
<#--                <a href="${servePath}${path}${pagingSep}${paginationPreviousPageNum}"-->
<#--                   aria-label="${previousPageLabel}"-->
<#--                   class="pagination__item vditor-tooltipped__n vditor-tooltipped">&laquo;</a>-->
<#--                <a class="pagination__item" href="${servePath}${path}">1</a>-->
<#--                <span class="pagination__item pagination__item--omit">...</span>-->
<#--            </#if>-->
<#--            <#list paginationPageNums as paginationPageNum>-->
<#--                <#if paginationPageNum == paginationCurrentPageNum>-->
<#--                    <span class="pagination__item pagination__item--active">${paginationPageNum}</span>-->
<#--                <#else>-->
<#--                    <a class="pagination__item" href="${servePath}${path}${pagingSep}${paginationPageNum}">${paginationPageNum}</a>-->
<#--                </#if>-->
<#--            </#list>-->
<#--            <#if paginationPageNums?last != paginationPageCount>-->
<#--                <span class="pagination__item pagination__item--omit">...</span>-->
<#--                <a href="${servePath}${path}${pagingSep}${paginationPageCount}" class="pagination__item">${paginationPageCount}</a>-->
<#--                <a href="${servePath}${path}${pagingSep}${paginationNextPageNum}" aria-label="${nextPagePabel}"-->
<#--                   class="pagination__item vditor-tooltipped__n vditor-tooltipped">&raquo;</a>-->
<#--            </#if>-->
<#--        </nav>-->
<#--    </#if>-->
<#--</div>-->
