export const HANDLEEDIT = "HANDLEEDIT"
export const HANDLEDELETE = "HANDLEDELETE"
export const SHOWSEATS = "SHOWSEATS"
export const ASYNC_GETDATA = "ASYNC_GETDATA"
import axios from 'axios'

const theaters = {
    namespaced: true, //使用命名空间，以防其他组件里面有同样的方法污染。
    state: {
        tableData2: [],
        theaters: []
    },
    mutations: {
        [HANDLEEDIT](state, obj) {
            console.log(obj);
        },
        [HANDLEDELETE](state, obj) {
            console.log(obj);
        },
        [SHOWSEATS](state,add) {
            console.log(add);
        }
    },
    actions: {
        async init(context) {
            const {data} = await axios.get('http://127.0.0.1:3000/studio/query',{
                params: {
                    page: "1",
                    rows: "10"
                }
            })
            context.state.tableData2.length = 0
            data.rows.map((item)=>{
                context.state.tableData2.push(item)
            })
        },
        async addTheater(context,obj) {
            const data = await axios.post('http://127.0.0.1:3000/theaters/addTheater',
                    obj
                )
        },
        async removeTheater(context, _id) {
            const data = await axios.get('http://127.0.0.1:3000/theaters/remove',{
                params: {
                    _id
                }
            })
        }


    }

    }

export default theaters;
