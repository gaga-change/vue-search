<template>
    <div>

        <h1 style="font-size:.5rem">辅助菜单</h1>
        <hr>
        <h1 style="font-size:.5rem">当前登入状态： <span v-text="loginAccount == null? '还没登入': '已登入' + loginAccount"></span>
        </h1>
        <ul>
            <li>
                <router-link :to="{path:'/search-all', query:{hotNum, searchNum,historyNum } }">进入搜索功能</router-link>
            </li>
            <li>
                <router-link :to="{name: 'QuickLogin'}">进入登入页面</router-link>
            </li>
        </ul>
        <h1 style="font-size:.3rem">配置条数</h1>
        <hr>
        <ul>
            <li>
                <span>热门条数：</span><input type="text" v-model="hotNum">条
            </li>
            <li>
                <span>搜索条数：</span><input type="text" v-model="searchNum">条
            </li>
            <li>
                <span>历史条数：</span><input type="text" v-model="historyNum">条
            </li>
        </ul>
    </div>
</template>

<script>
    import loginHttp from './quickLogin/http'
    export default{
        data(){
            return {
                hotNum: 10,
                searchNum: 6,
                historyNum: 4,
                loginAccount: null
            }
        },
        created(){
            loginHttp.getAccount().then((resq) => {
                console.log(resq);
                if (resq.success ) {
                    this.loginAccount = resq.userInfo.loginAccount;
                    console.log(this.loginAccount)
                }
            })
        }
    }
</script>

<style scoped>
    input {
        border: 1px solid rgba(109, 109, 109, 0.46);
        border-bottom: 1px solid gainsboro;
        padding: 6px;
        margin: 14px 10px;
        border-radius: 5px;
    }

    li > span {
        padding-left: 30px;
    }

    h1 {
        text-align: center;
        margin-top: 2em;
        margin-bottom: 1em;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    ul > li:nth-child(even) {
        background-color: #bbefa0;
    }

    ul > li:nth-child(odd) {
        background-color: #efbdcb;
    }

    li a {
        border-bottom: 1px solid gainsboro;
        padding: 20px 30px;
        display: block;
    }


</style>
