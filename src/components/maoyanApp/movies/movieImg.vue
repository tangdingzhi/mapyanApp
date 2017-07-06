<template>
    <div class="box">
        <h2>上传图片</h2>
        <el-select v-model="select" slot="prepend" placeholder="图片类型" class="options">
            <el-option label="主页图片" value="1"></el-option>
            <el-option label="剧情图片" value="2"></el-option>
        </el-select>
        <el-upload class="upload-demo" action="http://localhost:3000/imgs/upload" :file-list="movieIMG" :on-success="getUrl" :data="imgInfo" :before-upload="upload" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
import {
    mapState,
    mapMutations,
    mapActions
} from "vuex"
export default {
    name: 'movies',
    data() {
        return {
            select: "1",
            imgInfo: {
                movieId: this.$route.params.newMovieId,
                type: "1"
            }
        }
    },
    computed: {
        ...mapState("movies", ["movieIMG"]),
    },
    methods: {
        ...mapActions("movies", ["GETURL"]),
        getUrl(response, file, fileList) {
            //  this.GETURL({
            // 	movieid:this.$route.params.newMovieId,
            // 	type:this.type,
            // 	imgUrl:file.url
            // })
        },
        upload() {
            this.imgInfo.type = this.select
            console.log(this.imgInfo.type)
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- scoped作用域的意思 就是说这里面声明的样式其他组件不能使用。 -->
<style scoped>


h2 {
    width: 600px;
    margin: 0 auto;
    text-align: center;
    color: #666666;
}

.options {
    margin-bottom: 20px;
}
</style>
