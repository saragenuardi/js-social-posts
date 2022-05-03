const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
     {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Sara Genu",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 120,
        created: "2022-02-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Filippo Taurino",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 12,
        created: "2010-05-01"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/300/300?image=10",
        author: {
            name: "Luca Possa",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 56,
        created: "2021-08-02"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Alessia Spedicati",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 87,
        created: "2019-05-05"
    } 
   
];
console.log(posts);




    const myImage = document.querySelector(".post");
    posts.forEach(myImage)
    myImage.innerHTML += `
    <div class="card post g-3 mt-5 p-3">
    <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${posts[i].author.image}" alt="">               
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author"> ${posts[i].author.name}</div>
            <div class="post-meta__time"> ${posts[i].created}</div>
        </div>                    
    </div>
    </div>
    <div class="post__text"> ${posts[i].content} </div>
    <div class="post__image">
    <img src="${posts[i].media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
            </div>
        </div>  
    </div>
    </div>
    
    ` 

