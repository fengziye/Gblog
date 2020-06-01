<template>
    <div class="comment" :id="`comment${comment.id}`">
        <div class="comment-head">
            <div class="user-avatar"><img :src="comment.fromUserAvatar" alt=""></div>
            <div class="head-right">
                <section-title>
                    <div style="display: flex;align-items: center;justify-content: space-between;">
                        <div>
                            <span class="from-user user-name">{{comment.fromUserName}}</span>
                            <span class="to-user" v-if="comment.toUserId"><span style="margin: 0 5px;">@</span><span class="user-name">{{comment.toUserName}}</span></span>
                        </div>
                        <div style="font-size: 13px;">
                            <span style="color: #9c9c9c;margin-right: 20px;">{{comment.createTime | parseTime}}</span>
                            <span @click.stop="showCommentEditor=true" style="cursor: pointer;">回复</span>
                        </div>
                    </div>
                </section-title>
            </div>
        </div>
        <div class="comment-body">
            <div class="content-text">
                <p>{{comment.content}}</p>
            </div>
            <div v-if="showCommentEditor" @click.stop="">
                <comment-message-editor :inline="true" buttonText="回复" @submit="submitReply"></comment-message-editor>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/section-title'
    import commentMessageEditor from 'comment-message-editor'
    export default {
        name: "comment",
        props: {
          comment: {
              type: Object
          }
        },
        data(){
          return{
              showCommentEditor: false
          }
        },
        watch:{
            showCommentEditor(value) {
                if (value) {
                    document.body.addEventListener('click', this.close)
                } else {
                    document.body.removeEventListener('click', this.close)
                }
            }
        },
        components: {
            sectionTitle,
            commentMessageEditor
        },
        methods: {
            reply(id){
                const ref = `comment${id}`
            },
            submitReply(v){
                console.log(v)
            },
            close(){
                this.showCommentEditor = false
            }
        }
    }
</script>

<style scoped lang="less">
    .comment{
        margin: 20px 0;
    }
    .comment-head{
        display: flex;
        .head-right{
            flex: 1;
        }
        .user-name{
            color: #8fd0cc;
        }
    }
    .comment-body{
        padding-left: 80px;
        .content-text{
            /*padding-bottom: 30px;*/
            margin-bottom: 30px;
            font-size: 14px;
            color: #9c9c9c;
            line-height: 1.3rem;
        }
    }
    .user-avatar{
        width: 50px;
        height: 50px;
        margin-right: 30px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 100%;
        }
    }
    @media (max-width: 600px){
        .comment-body{
            padding-left: 15px;
            .content-text{
                margin-top: 10px;
            }
        }
        .user-avatar{
            margin-right: 10px;
        }
    }
</style>
