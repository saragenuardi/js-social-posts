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




   
   
    const container = document.querySelector(".post");
    posts.forEach(myImage => {
        console.log(myImage);
        container.innerHTML += `
    <div class="card post">
    <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${myImage.author.image}" alt="${myImage.author.name}">               
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author"> ${myImage.author.name}</div>
            <div class="post-meta__time"> ${myImage.created}</div>
        </div>                    
    </div>
    </div>
    <div class="post__text"> ${myImage.content} </div>
    <div class="post__image">
    <img src="${myImage.media}" alt="">
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
                Piace a <b id="like-counter-1" class="js-likes-counter">${myImage.likes}</b> persone
            </div>
        </div>  
    </div>
    </div>
    
    `;
});

const like=[];                                                                           //mi creo una array vuota dove andrò ad inserire i like che riceverò una volta premuto il tasto like

const likeConteggio = document.querySelectorAll(`.js-likes-counter`);                    
const likeBottone = document.querySelectorAll(`.js-like-button`);

for (let i = 0 ; i < likeBottone.length ; i++){
    const element = likeBottone[i];                                                     //mi prendo il singolo elemento ovvero il likebottone 

    element.addEventListener('click', (event) => {
        event.preventDefault();                                                           // con questa funzione farò in modo di annulare il bottono de default e cosi facendo premendo il bottone del like non tornerà a inizio pagina

        if ( element.classList.contains('like-button--liked') ){                        // se l'elemento contiene la classe like button bene altrimenti verràa rimosso sempre dall stesso bottone ma con la funzionalità remove
            element.classList.remove('like-button--liked');


            likeConteggio[i].innerHTML = parseInt(likeConteggio[i].innerHTML) - 1;
            like.splice( like.indexOf(likeBottone[i].getAttribute('data-postid') ));         //splice rimuove 

        } else {
            element.classList.add('like-button--liked');


            likeConteggio[i].innerHTML = parseInt(likeConteggio[i].innerHTML) + 1;
            like.push(likeBottone[i].getAttribute('data-postid'));                                      //quando avrò il like da parte del bottone mi verrà pushato all'inetrno della array vuota
        }
    })
}