import {news, addNews, createNewsItem} from './utils/news.js'


const createNewsElement = (_news) => {
    const newsItem = $(`
        <div class="news-item flex flex-col gap-2 p-5 newsItem min-w-[200px] w-auto bg-white rounded-[5px]" >
            ${_news.imgSrc !== "" ?
            `<div class='bg-cover bg-center h-[250px] w-full ' style="background-image: url('${_news.imgSrc}');">
                
            </div>`:``
            }
            <div>
                <h3 class='font-bold text-[20px]'>
                    ${_news.title}
                </h3>
                <div class='flex gap-2 overflow-hidden'>
                    <p class=' font-thin '>
                        ${_news.date}
                    </p>/
                    ${
                        _news.categories.map((categorie)=>(
                            `<p class= 'first-letter:capitalize text-[var(--main-color)]'>${categorie}</p>`
                        ))
                    }
                </div>
            </div>
            <p class='max-h-[300px] overflow-clip'>
                ${_news.article}
            </p>
        </div>
        `)

    return(newsItem)
}

const newsList = $(`<div class='news-list bg-[var(--main-color)] gap-2 p-2'></div>`)
const newsArticle = $(`
        <div class='news-article'></div>
    `)
news.map((e)=>{
    newsList.append(createNewsElement(e))
})
    
$('.content').append(newsList)