// Cantidad de noticias que se cargarán cada vez que se presione siguiente (5 + 1)
let cantidadNoticias = 5;
let pageFinal = cantidadNoticias;
let pageInicial = 0;
let temaActual = "arte";

let noticias = {
    apiKey: "f7afa0797d7744d69519e3d551df849f",
    fetchNoticias: function (categoria) {
        fetch(
            "https://newsapi.org/v2/everything?q=" +
            categoria +
            "&language=es&apiKey=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayNoticias(data));
    },
    displayNoticias: function (data) {
        // Elimino todo si ha seleccionado un nuevo tema
        if (pageInicial == 0) {
            document.querySelector(".container-noticias").textContent = "";
        }

        for (i = pageInicial; i <= pageFinal; i++) {
            const { title } = data.articles[i];
            let h2 = document.createElement("h2");
            h2.textContent = title;

            const { urlToImage } = data.articles[i];
            let img = document.createElement("img");
            img.setAttribute("src", urlToImage);

            let info_item = document.createElement("div");
            info_item.className = "info_item";
            const { publishedAt } = data.articles[i];
            let fecha = document.createElement("span");
            let date = publishedAt;
            date = date.split("T")[0].split("-").reverse().join("-");
            fecha.className = "fecha";
            fecha.textContent = date;

            const { name } = data.articles[i].source;
            let fuente = document.createElement("span");
            fuente.className = "fuente";
            fuente.textContent = name;

            info_item.appendChild(fecha);
            info_item.appendChild(fuente);

            // Actualiza la card correspondiente
            updateCard(i - pageInicial + 1, data.articles[i]);
        }
    }
}

// Función para actualizar el contenido de una card específica
function updateCard(cardNumber, eventData) {
    $(`.card:nth-child(${cardNumber}) img`).attr('src', eventData.urlToImage || 'https://picsum.photos/seed/picsum/500/300');
    $(`.card:nth-child(${cardNumber}) .card-title`).text(eventData.title || 'Título no disponible');
    $(`.card:nth-child(${cardNumber}) .card-text`).text(eventData.description || 'Descripción no disponible');
    $(`.card:nth-child(${cardNumber}) a`).attr('href', eventData.url || '');
}

// Llamada inicial al cargar la página
noticias.fetchNoticias(temaActual);