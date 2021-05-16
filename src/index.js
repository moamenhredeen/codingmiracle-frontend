import {
    PostList
} from './script/components/PostList.js'

const inputPost = document.getElementById('post-input')

const list = new PostList()
list.render()

const create = document.getElementById('action-submit')
create.addEventListener('click', () => {
    list.addPost({
        id: inputPost.getAttribute('id'),
        header: inputPost.getAttribute('id'),
        body: inputPost.querySelector('#post-content').value
    })
})
