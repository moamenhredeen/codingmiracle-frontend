export class Post {

    constructor(id, header, body) {
        this.id = id;
        this.header = header;
        this.body = body;
    }

    onClickHandler() {
        console.log(this.id, this.body);
    }

    // render the new post to the dom
    render() {
        const inputPostContent = document.getElementById('post-content')
        const newPost = document
            .querySelector('.post-output')
            .cloneNode(true);
        newPost.classList.remove('hide');
        newPost.setAttribute('id', this.id);
        const button = newPost.querySelector('.action-comment > span')
        button.addEventListener('click', this.onClickHandler.bind(this));
        newPost.querySelector('.post-content > p').innerHTML = this.body;
        return newPost;
    }
}