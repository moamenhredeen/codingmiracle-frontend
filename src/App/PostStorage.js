import {
    HttpClient
} from './HttpClient.js'

// singleton storage
export class PostStorage {
    constructor() {
        this.posts = null
        // this.posts = [{
        //     id: 1,
        //     header: "header",
        //     body: "body"
        // }, {
        //     id: 2,
        //     header: "some header",
        //     body: "some body"
        // }];
    }

    fetchPosts() {
        return HttpClient.get('http://localhost:8080/posts/')
            .then(res => res)
            .catch(res => res)
    }

    async getPosts() {
        const res = await HttpClient.get('http://localhost:8080/posts/')
        return res.json()
    }

    async addPost(post) {
        const res = await HttpClient.post('http://localhost:8080/posts/', post)
        return res
    }

    remove(post) {
        this.posts = this.posts.filter(el => el.id !== post.id)
        return post
    }

    update(post) {
        this.remove(post)
        this.posts.push(post)
        return post
    }
}
