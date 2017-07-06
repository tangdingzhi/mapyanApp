<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <img class="logo" src="../../assets/logo.png" alt="">
        </el-col>
            <aside class="menu-collapsed">
            <el-col :span="24">
                <el-menu default-active="2" class="el-menu-vertical-demo">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-message"></i>员工管理
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">
                                <router-link :to="'/maoyanApp/user/addUsers'">新增用户</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link :to="'/maoyanApp/user/addUsers'">用户列表</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>电影管理
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">
                                <router-link :to="'/maoyanApp/movies/addmovies'" @click="INITADDMOVIE">新增电影</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <router-link :to="'/maoyanApp/movies/moviesList'">电影列表</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-setting"></i>放映厅管理
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">
                                <router-link :to="'/maoyanApp/theaters/addtheaters'">新增放映厅</router-link>
                            </el-menu-item>
                            <el-menu-item index="3-2">
                                <router-link :to="'/maoyanApp/theaters/theaterList'">放映厅列表</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-star-off"></i>影院管理
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">
                                <router-link :to="'/maoyanApp/studios/addstudios'">新增</router-link>
                            </el-menu-item>
                            <el-menu-item index="4-2">
                                <router-link :to="'/maoyanApp/studios/studiosList'">列表</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-date"></i>排片管理
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="5-1">
                                <router-link :to="'/maoyanApp/schedules/addSchedules'">新增</router-link>
                            </el-menu-item>
                            <el-menu-item index="5-2">
                                <router-link :to="'/maoyanApp/schedules/schedulesList'">电影</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
                </el-col>
            </aside>
        <section class="content-container">
            <router-view></router-view>
        </section>
    </el-row>
</template>
<script>
import {
    mapState,
    mapMutations,
    mapActions
} from "vuex"
export default {
    name: 'maoyanApp',
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        ...mapMutations("movies", ["INITADDMOVIE"]),
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-menu a {
    text-decoration: none;
    color: #48576A;
}

.el-col {
    margin-right: 30px;
}

.container {
    position: absolute;
    top: 20px;
    bottom: 0px;
    width: 100%;
}

.header {
    height: 60px;
    line-height: 60px;
}

.logo {
    padding-left: 20px;
    padding-right: 20px;
    height: "40";
    width: "133";
}

.menu-collapsed {
    width: 200px;
}

.content-container {
    position: absolute;
    right: 200px;
    top: 0px;
    bottom: 0px;
    left: 230px;

}
</style>
