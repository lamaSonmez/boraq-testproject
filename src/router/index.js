import Vue from 'vue'
import Router from 'vue-router'
import PostsHome from '@/components/posts/list_posts'
import ViewPost from '@/components/posts/view_post'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'PostsHome',
            component: PostsHome
        },
        {
            path: '/view',
            name: 'ViewPost',
            component: ViewPost
        }
    ]
})