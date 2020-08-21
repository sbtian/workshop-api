
async function getNoticias(cantidad) {
    let url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=${cantidad}`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

let noticias = [];

getNoticias(30).then((response) => {
    noticias = response ;
})


const search = () => {
    document.getElementById('noticias_resultado').innerHTML = '';

    const value = document.getElementById('input_search').value;
    let resultado = document.getElementById('noticias_resultado');
    for (let i = 0; i < noticias.length; i++) {
        const quote = noticias[i].character.toLowerCase();        
        if(quote.includes(value) && value != ''){            
            resultado.insertAdjacentHTML('beforeend',
            `<div class="noticia">
                <a style="cursor:pointer" title="Ver noticia"><img src="${noticias[i].image}"></a>
                <h2>${noticias[i].character}</h2>
                <p>${noticias[i].quote}</p>
            </div>`);
        }        
    }
}




