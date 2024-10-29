import { NewsClicked } from "./Events.js"


export const createNewsElement = (_news) => {
    const newsItem = $(`
        <div class="news-item flex flex-col gap-2 p-5 newsItem min-w-[200px] w-auto bg-white rounded-[5px]" >
            ${_news.imgSrc !== "" ?
            `<div class='bg-cover bg-center h-[400px] w-full ' style="background-image: url('${_news.imgSrc}');">
                
            </div>`:``
            }
            <div>
                <h3 class='font-bold text-[20px] hover:underline hover:cursor-pointer' >
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

    newsItem.find('h3').on('click', ()=>NewsClicked.emmit(_news))

    return(newsItem)
}