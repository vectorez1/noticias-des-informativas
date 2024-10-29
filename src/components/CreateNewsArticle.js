import { GoBack } from "./Events.js"

export const CreateNewsArticle = (_news) =>{
    const newsArticle = $(`
        <div class='news-article flex flex-col gap-2 p-2'>
            <div >
                <a class='text-xl font-bold hover:underline hover:cursor-pointer w-fit text-[var(--main-color)]'> Volver</a>
            </div>
            <div>
                <h1 class='text-4xl font-bold'>${_news.title}</h1>
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
             ${_news.imgSrc !== "" ?
            `<div class='bg-cover bg-center h-[600px] w-full ' style="background-image: url('${_news.imgSrc}');">
                
            </div>`:``
            }
            <p class='max-h-[300px] overflow-clip'>
                ${_news.article}
            </p>
        </div>
    `)

    newsArticle.find('a').on('click',()=>{GoBack.emmit()})
    return newsArticle
}