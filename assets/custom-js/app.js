const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ad03db722cabd3857ccb826571257a6a&page=1';
const IMG_PATH='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=ad03db722cabd3857ccb826571257a6a&query=";

const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

let returnMovies=(url)=>{
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data)
        console.log(data.results)
        data.results.forEach(el=>{
            const div_card=document.createElement('div')
            div_card.setAttribute('class','card')
            
            const div_row=document.createElement('div')
            div_row.setAttribute('class','row')

            const div_col=document.createElement('div')
            div_col.setAttribute('class','column')

            const image=document.createElement('img')
            image.setAttribute('class','thumbnail')
            image.setAttribute('id','image')

            const title=document.createElement('h3')
            title.setAttribute('id','title')

            const center=document.createElement('center')


            title.innerHTML=`${el.title}`
            image.src=IMG_PATH+el.poster_path

            center.appendChild(image)
            div_card.appendChild(center)
            div_card.appendChild(title)
            div_col.appendChild(div_card)
            div_row.appendChild(div_col)
            main.appendChild(div_row)

        })
    })
    
}
returnMovies(APILINK)

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    main.innerHTML='';

    const searchItem= search.value;

    if(searchItem){
        returnMovies(SEARCHAPI + searchItem)
        search.value="";
    }
})
