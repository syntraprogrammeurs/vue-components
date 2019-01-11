Vue.component('mycard',{
    props:['title', 'content'],
    data() {
        return{
            likes: 0
        }
    },
    template:`<div class="card">
					<div class="card-body">
						<div class="card-title">
							<p>{{title}}</p>
						</div>
						<div class="card-text">
							<p>{{content}}</p>
						</div>
						<div class="text-center text-muted display-4">
						    {{ likes }}
                        </div>
                        <button @click="likeArticle" class="btn btn-warning btn-sm">
						    Like me
                        </button>
						<button @click="deleteArticle" class="btn btn-danger btn-sm">
						    Delete
                        </button>
					</div>
				</div>`,
    methods:{
        deleteArticle(){
            this.$emit('delete-article', this.title)
        },
        likeArticle(){
            this.likes++
        }
    }
})


new Vue({
    el: '#app',
    data:{
        articles:[
            {
                title: 'Vue beginners',
                content: 'Beginners cursus vue'
            },
            {
                title: 'Php beginners',
                content: 'Beginners cursus php'
            },
            {
                title: 'Laravel beginners',
                content: 'Beginners cursus Laravel'
            }
        ]
    },
    methods: {
        removeArticle(event) {
            console.log(event)
            this.articles = this.articles.filter(article => article.title != event)
        }
    }
})