import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MaoyanApp from "../components/maoyanApp/maoyanApp.vue"
import Login from "../components/maoyanApp/login.vue"
import Reg from "../components/maoyanApp/reg.vue"
import Users from "../components/maoyanApp/user/users.vue"
import addUsers from "../components/maoyanApp/user/addUsers.vue"
//电影列表
import movies from "../components/maoyanApp/movies/movies.vue"
import addMovies from "../components/maoyanApp/movies/addMovies.vue"
import moviesList from "../components/maoyanApp/movies/moviesList.vue"
import moviesImg from "../components/maoyanApp/movies/movieImg.vue"
import addtheaters from "../components/maoyanApp/theater/addtheaters.vue"
import theaterList from "../components/maoyanApp/theater/theaterList.vue"

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Login',
		component: Login
	}, {
		path: '/reg',
		name: 'Reg',
		component: Reg
	}, {
		path: '/maoyanApp',
		name: 'MaoyanApp',
		component: MaoyanApp,
		children: [{
			path: "user",
			name: "user",
			component: Users,
			children: [{
				path: "addUsers",
				name: "addUsers",
				component: addUsers,
			}]
		}, {
			path: "theaters/addtheaters",
			name: "addtheaters",
			component: addtheaters
		}, {
			path: "theaters/theaterList",
			name: "theaterList",
			component: theaterList
		}, {
			path: "movies",
			name: "movies",
			component: movies,
			children: [{
				path: "addMovies",
				name: "addMovies",
				component: addMovies,
			}, {
				path: "moviesList",
				name: "moviesList",
				component: moviesList,
			}, {
				path: "/moviesImg/:newMovieId",
				name: "moviesImg",
				component: moviesImg,
			}]
		}, {
			path: "studios",
			name: "studios",
			component: {
				template: "<div>studios</div>"
			}
		}, {
			path: "schedules",
			name: "schedules",
			component: {
				template: "<div>schedules</div>"
			}
		}]

	}, ]
})