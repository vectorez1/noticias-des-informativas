import {news, addNews, createNewsItem} from '../src/utils/news.js'
import { createNewsElement } from './components/CreateNewsElement.js'
import { CreateNewsArticle } from './components/CreateNewsArticle.js'
import { GoBack, NewsClicked } from './components/Events.js'

const newsPage = $(`
    <div class='news-page flex flex-col gap-2'>
        <div class='ml-4 flex flex-row gap-4 '>
            <button>Animales</button>
            <button>Mundo</button>
            <button>Conspiraciones</button>
            <button>Deportes</button>
        </div>
        <div class='news-list bg-[var(--main-color)] gap-2 p-2'></div>
    </div>`)
//const newsList = $(`<div class='news-list bg-[var(--main-color)] gap-2 p-2'></div>`)

newsPage.find('button').on('click',(b)=>{
    resetList(news.filter((n)=> n.categories.find(c=>c==b.target.innerText.toLowerCase())))
})
//newsPage.append(newsList)
/*news.map((e)=>{
    newsList.append(createNewsElement(e))
})*/

//let newNews = news.filter(n => n.categories.find(c => c == 'animales'))

    
//$('.content').append(CreateNewsArticle(news[0]))
$('.content').append(newsPage);
news.map((n)=>{
    newsPage.find('.news-list').append(createNewsElement(n))
})

export const GoTo = (to) =>{
    $('.content').html('')
    $('.content').append(to);
}

NewsClicked.addListener(e=>GoTo(CreateNewsArticle(e)))
GoBack.addListener(e=>{GoTo(newsPage)})
GoBack.addListener(()=>{
    newsPage.find('button').on('click',(b)=>{
        resetList(news.filter((n)=> n.categories.find(c=>c==b.target.innerText.toLowerCase())))
    })
    resetList(news)  
})


const resetList = (list = []) =>{
    $('.news-list').html('')
    list.map((e)=>{
        newsPage.find('.news-list').append(createNewsElement(e))
    })
}