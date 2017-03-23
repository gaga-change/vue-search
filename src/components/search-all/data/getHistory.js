/**
 * Created by 严俊东 on 2017/3/14.
 */
let data = require('./games.json')

/**
 * 搜索返回数据
 * @param num 数量
 * @returns {Promise} 返回一个含游戏名数组的一个对象
 *  {
   *    list: [<Object>]
   *  }
 */

function getHistory(num) {

    //
    // this.vm.$http.get(
    //     '/api/mobile-user-service/rs/account/login/loginbyverifycode?callback=jQuery1111005482065579084616_1490073131896&promotionUserId=0&phone=18958478815&verifyCode=7777&_=1490073131897',
    // ).then((res) => {
    //     this.vm.$http.post(
    //         '/api/mobile-searchCenter-service/rs/userCache/save',
    //         {mapRequest: {gameId: 'YX17030721534971800222'}}
    //     ).then((res) => {
    //
    //     });
    // });

    // this.vm.$http.post(
    //     '/api/mobile-searchCenter-service/rs/gameSearch/searchKeyword',
    //     {mapRequest:{'keyword': '英雄'}}
    // ).then((res) => {
    //
    // });
    // this.vm.$http.get(
    //     '/api/mobile-user-service/rs/account/login/loginbyverifycode?callback=jQuery1111005482065579084616_1490073131896&promotionUserId=0&phone=18958478815&verifyCode=7777&_=1490073131897',
    // ).then((res) => {
    //     this.vm.$http.post(
    //         '/api/mobile-searchCenter-service/rs/gameSearch/searchKeyword',
    //         {mapRequest:{'keyword': '英雄'}}
    //     ).then((res) => {
    //
    //     });
    // });


    // this.vm.$http.get(
    //     '/api/mobile-user-service/rs/account/login/loginbyverifycode?callback=jQuery1111005482065579084616_1490073131896&promotionUserId=0&phone=18958478815&verifyCode=7777&_=1490073131897',
    // ).then((res) => {
    //     this.vm.$http.post(
    //         '/api/mobile-searchCenter-service/rs/userCache/listCache',
    //         {pageSize: 4}
    //     ).then((res) => {
    //
    //     });
    // });

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let res = data;
            if (
                res == null
                || res['success'] == null
                || res['categoryList'] == null
                || res['success'] == false
            ) {
                reject()
            }
            else if (res.success) {
                if (
                    typeof res['categoryList'] == 'object'
                    &&
                    res['categoryList'] instanceof Array
                ) {
                    let list = res['categoryList'].filter((val, index) => {
                        if (index < num) {
                            return true;
                        } else {
                            return false;
                        }
                    });
                    resolve({list: list})
                }
            }
        }, 200);
        return []
    })
}

export {getHistory};

// module.exports = getSearch;
// return;
//
// getSearch(15).then(function (res) {
//   console.log(res.list.length)
// }, function () {
//   console.log("err");
// });
//
