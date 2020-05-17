<template>
    <div class="articles">
        <banner></banner>
        <div class="site-content">
            <main class="site-main">
                <article class="hentry">
                    <!-- 文章头部 -->
                    <header class="entry-header">
                        <!-- 标题输出 -->
                        <h1 class="entry-title">公安联网备案记录</h1>
                        <hr>
                        <div class="breadcrumbs">
                            <div id="crumbs">最后更新时间：2020年04月21日</div>
                        </div>
                    </header>
                    <!-- 正文输出 -->
                    <div class="entry-content">
                        <p>@[TOC]</p>
                        <h4 id="引言：">引言：</h4>
                        <p>Lua 是一种轻量小巧的脚本语言，能为应用程序提供灵活的扩展和定制功能。</p>
                        <h4 id="lua-应用场景">Lua 应用场景</h4>
                        <ul>
                            <li>游戏开发</li>
                            <li>独立应用脚本</li>
                            <li>Web 应用脚本</li>
                            <li>扩展和数据库插件如：MySQL Proxy 和 MySQL WorkBench</li>
                            <li>安全系统，如入侵检测系统</li>
                        </ul>
                        <hr>
                        <h4 id="安装">安装</h4>
                        <pre><code> curl -R -O http://www.lua.org/ftp/lua-5.3.5.tar.gz #下载
 tar zxf lua-5.3.5.tar.gz #解压
 cd lua-5.3.3 #进入解压文件夹
 make linux test #安装&amp;测试</code></pre>
                        <hr>
                        <h4 id="安装过程可能出现的问题">安装过程可能出现的问题</h4>
                        <ol>
                            <li>没有gcc命令(lua是C语言编写的，安装时依赖gcc)
                                <blockquote>
                                    <p>使用<code>which gcc</code>命令可以查看是否有gcc，如果没有使用下面命令进行安装gcc 与gcc-c++，</p>
                                    <pre><code>yum -y install gcc
yum -y install gcc-c++</code></pre>
                                </blockquote>
                            </li>
                        </ol>
                        <hr>
                        <ol start="2">
                            <li>致命错误：readline/readline.h：没有那个文件或目录
                                <blockquote>
                                    <p>执行如下命令即可:</p>
                                    <pre><code>yum install libtermcap-devel ncurses-devel libevent-devel readline-devel</code></pre>
                                </blockquote>
                            </li>
                        </ol>
                        <hr>
                        <h4 id="安装成功验证">安装成功验证</h4>
                        <blockquote>
                            <p>执行<code>lua -v</code>,出现如下信息代表安装成功<br/>
                                Lua 5.1.4 Copyright (C) 1994-2008 Lua.org, PUC-Rio</p>
                        </blockquote>
                        <pre><code>lua -v</code></pre>

                    </div>
                    <!-- 文章底部 -->
                    <footer class="post-footer">
                        <!-- 阅读次数 -->
                        <div class="post-like">
                            <a href="javascript:;" data-action="ding" data-id="58" class="specsZan ">
                                <i class="iconfont iconeyes"></i>
                                <span class="count">685</span>
                            </a>
                        </div>
                        <!-- 分享按钮 -->
                        <div class="post-share">
                            <!--                            <ul class="sharehidden">-->
                            <!--                                <li><a href="http://qr.liantu.com/api.php?text=https://zhebk.cn/Web/gongan.html"-->
                            <!--                                       onclick="window.open(this.href, 'renren-share', 'width=490,height=700');return false;"-->
                            <!--                                       class="s-weixin" target="_blank" rel="nofollow noopener noreferrer"><img src="https://cdn.zhebk.cn/usr/themes/Akina/images/wechat.png"></a></li>-->
                            <!--                                <li>-->
                            <!--                                    <a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://zhebk.cn/Web/gongan.html/&amp;title=公安联网备案记录"-->
                            <!--                                       onclick="window.open(this.href, 'weibo-share', 'width=730,height=500');return false;"-->
                            <!--                                       class="s-qq" target="_blank" rel="nofollow noopener noreferrer"><img src="https://cdn.zhebk.cn/usr/themes/Akina/images/qzone.png"></a></li>-->
                            <!--                                <li>-->
                            <!--                                    <a href="http://service.weibo.com/share/share.php?url=https://zhebk.cn/Web/gongan.html/&amp;title=公安联网备案记录"-->
                            <!--                                       onclick="window.open(this.href, 'weibo-share', 'width=550,height=235');return false;"-->
                            <!--                                       class="s-sina" target="_blank" rel="nofollow noopener noreferrer"><img src="https://cdn.zhebk.cn/usr/themes/Akina/images/sina.png"></a></li>-->
                            <!--                                <li>-->
                            <!--                                    <a href="http://shuo.douban.com/!service/share?https://zhebk.cn/Web/gongan.html/&amp;title=公安联网备案记录"-->
                            <!--                                       onclick="window.open(this.href, 'renren-share', 'width=490,height=600');return false;"-->
                            <!--                                       class="s-douban" target="_blank" rel="nofollow noopener noreferrer"><img src="https://cdn.zhebk.cn/usr/themes/Akina/images/douban.png"></a></li>-->
                            <!--                            </ul>-->
                            <i class="iconfont show-share"></i>
                        </div>
                        <!-- 赞助按钮 -->
                        <div class="donate">
                            <a>赏</a>
                            <ul class="donate_inner">
                                <li class="wedonate"><img
                                        src="https://cdn.zhebk.cn/usr/themes/Akina/images/donate/wedo.jpg">
                                    <p>微信</p></li>
                                <li class="alidonate"><img
                                        src="https://cdn.zhebk.cn/usr/themes/Akina/images/donate/alido.jpg">
                                    <p>支付宝</p></li>
                            </ul>
                        </div>
                        <!-- 文章标签 -->
                        <div class="post-tags">
                            <i class="iconfont"></i>
                            <a href="https://zhebk.cn/tag/Web/">Web</a>
                        </div>
                    </footer>
                </article>
            </main>
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/banner'

    export default {
        name: 'articles',
        components: {
            Banner
        }
    }
</script>
<style scoped lang="less">
    .site-content {
        .site-main {
            padding: 80px 0 0 0;
        }
    }

    article.hentry {
        .entry-header {
            .entry-title {
                font-size: 23px;
                font-weight: 600;
                color: #737373;
                margin: 0.67em 0;

                &:before {
                    content: "#";
                    margin-right: 6px;
                    color: #ff6d6d;
                    font-size: 20px;
                    font-weight: 600;
                }
            }

            hr {
                height: 1px;
                border: 0;
                background: #EFEFEF;
                margin: 15px 0;
            }

            .breadcrumbs {
                font-size: 14px;
                color: #D2D2D2;
                text-decoration: none;
                margin-bottom: 30px;
            }
        }

        .entry-content {


        }

        footer.post-footer {
            padding: 20px 10px;
            margin-top: 30px;
            height: 65px;
            position: relative;

            .post-like {
                float: right;
            }

            .post-share {
                float: right;
                list-style: none;
                margin-right: 20px;
            }

            .donate {
                float: left;
                line-height: 36px;
                border-radius: 100%;
                -webkit-border-radius: 100%;
                -moz-border-radius: 100%;
                border: 1px solid #2B2B2B;

                a {
                    color: #2B2B2B;
                    padding: 10px;
                    position: relative;
                    cursor: pointer;
                }

                .donate_inner {
                    display: none;
                    margin: 0;
                    list-style: none;
                    position: absolute;
                    left: 80px;
                    top: -40px;
                    background: #FFF;
                    padding: 10px;
                    border: 1px solid #ddd;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, .08);
                    border-radius: 3px;

                    li {
                        float: left;
                    }

                    img {
                        width: 100px;
                    }

                    p {
                        text-align: center;
                        font-size: 15px;
                        color: #D2D2D2;
                    }
                }

                .donate_inner:after, .donate_inner:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 45%;
                    margin-left: -8px;
                    border-top: 8px solid transparent;
                    border-bottom: 8px solid transparent;
                    border-right: 8px solid #fff;
                }

                .donate_inner:before {
                    left: -1px;
                    border-right: 8px solid #ddd;
                }

            }

            .post-tags {
                margin: 7px 0 0 20px;
                float: left;
                font-size: 13px;
                color: #B3B3B3;
                text-transform: uppercase;
                font-family: din, 'Hiragino Sans GB', 'Microsoft Yahei', Arial, sans-serif;
            }
        }
    }
</style>