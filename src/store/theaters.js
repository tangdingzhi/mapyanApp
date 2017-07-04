const HANDLEEDIT = "HANDLEEDIT"
const HANDLEDELETE = "HANDLEDELETE"
const SHOWSEATS = "SHOWSEATS"
const ASYNC_GETDATA = "ASYNC_GETDATA"

const theaters = {
    namespaced: true, //使用命名空间，以防其他组件里面有同样的方法污染。
    state: {
        tableData2: [{
            name: 'CC影城莱蒙店',
            address: '武侯区二环路南四段51号莱蒙置地广场6层',
        }, {
            name: 'CGV星聚汇影城(高新店)',
            address: '武侯区剑南大道中段998号世豪广场5F'
        }]
    },
    mutations: {
        [HANDLEEDIT](state, index, row) {
            console.log(index, row);
        },
        [HANDLEDELETE](state, index, row) {
            console.log(index, row);
        },
        [SHOWSEATS](state) {
            console.log('SHOWSEATS12134123145');
        }
    },
    actions: {
        [ASYNC_GETDATA](context) {
            setTimeout(() => {
                context.commit(SHOWSEATS)
            }, 1000)
        }
    }
}
export default theaters;
