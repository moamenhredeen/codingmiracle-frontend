import {
    Post
} from './Post.js'
import {
    PostStorage
} from '../PostStorage.js'

export class PostList {
    constructor() {
        this.postStorage = new PostStorage();
    }

    addPost(post) {
        this.postStorage.addPost(post)
        this.render();
    }

    async render() {
        const postsDOM = document.getElementById('post-list');
        // postsDOM.innerHTML = ''
        const posts = await this.postStorage.getPosts()
        for (const el of posts) {
            const post = new Post(el.id, el.header, el.body)
            const postDOM = post.render();
            postsDOM.prepend(postDOM);
        }
    }
}
