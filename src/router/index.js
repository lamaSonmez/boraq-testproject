import Vue from 'vue'
import Router from 'vue-router'
import PostsHome from '@/components/posts/list_posts'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'PostsHome',
        component: PostsHome
    }]
})