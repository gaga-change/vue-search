<template>
    <div>
        <div class="header pl-30 clearfix border-bottom">
            <div class="header-l ps-r">
                <input
                        class="f30"
                        ref="input"
                        type="text"
                        placeholder="请输入游戏名称或首字母"
                        :value="value"
                        @input="updateValue($event.target.value)">
                <div class="header-l-ico ps-a" @click="clearValue">
                    <img src="/images/common/del.png">
                </div>
            </div>
            <a class="color-f7 f32 header-r" :href='host'>取消</a>
        </div>

        <div v-if="!showOther" class="rake pl-30 bg-fff " style="position: absolute;width: 100%">
            <div class=" rake-con clearfix border-bottom" v-for="item in searchList">
                <router-link
                        :to="{name:'ChooseClass', query:{gid:item.gameId, gname:item.name, gameType:item.gameType} }"
                        class="dis-b clearfix ps-r">
                    <div class="search-all-head rake-con-l  ps-a">
                        <i :class="{'ph': item.gameType == 2}"></i>
                        <h4 class=" f32 color-000 dis-in" v-text="item.name"></h4>
                    </div>
                    <img src="/images/common/right.png" class="ps-a "/>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export  default {
        props: {
            value: {
                default: ''
            },
            searchList: {
                type: Array,
                default(){
                    return [];
                }
            },
            showOther: {}
        },
        data(){
            return {
                host: this.$CONSTANTS.HOST
            }
        },
        methods: {
            updateValue: function (val) {
                /**
                 * 得到新输入的
                 * 有空格
                 *    回退输入的值
                 *
                 *    触发回调事件，传回新的value值
                 *
                 */
                let filterVal = val.trim().substr(0, 20);
                if (filterVal !== val) { //不等于，还原（有空格）
                    this.$refs.input.value = filterVal;
                } else {
                    this.$emit('input', val)
                }
            },
            clearValue(){
                if (this.value != null && this.value.length > 0) {
                    this.$refs.input.value = '';
                    this.$emit('input', '');
                }
            }
        }
    }
</script>
<style>
    .search-all-head {
        width: 100%;
    }

    .search-all-head i {
        position: absolute;
        top: 40%;
    }

    .search-all-head h4 {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: 0.2rem;
        width: 91%;
        padding-left: 0.5rem;
    }

</style>