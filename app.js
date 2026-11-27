const contenedor = document.getElementById("productos");
const buscador = document.getElementById("buscar");

let productos = [];

async function cargarDatos() {
    try {
        const response = await fetch("stock.json");

        if (!response.ok) {
            throw new Error(`Error cargando stock.json: ${response.status}`);
        }

        productos = await response.json();

        renderizar(productos);

    } catch (error) {
        console.error(error);

        contenedor.innerHTML = `
            <p style="color:red; text-align:center;">
                Error al cargar el catálogo.
            </p>
        `;
    }
}

function renderizar(lista) {

    contenedor.innerHTML = "";

    lista.forEach(item => {

        const codigo = String(item.codigo);

        // Convierte 173 -> 000173
        const codigoImagen = codigo.padStart(6, "0");

        const imagen = `img/${codigoImagen}.png`;

        const whatsapp =
            `https://wa.me/5493513998168?text=${encodeURIComponent(
                `Hola, me interesa el artículo ${codigo} - ${item.descripcion}`
            )}`;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img
                src="${imagen}"
                alt="${item.descripcion}"
                onerror="this.src='img/sin-imagen.png'"
            >

            <div class="card-info">

                <h3>Código ${codigo}</h3>

                <p>${item.descripcion}</p>

                <div class="precio">
                    USD ${item.precio}
                </div>

                <a
                    class="btn-whatsapp"
                    href="${whatsapp}"
                    target="_blank"
                >
                    Consultar por WhatsApp
                </a>

            </div>
        `;

        contenedor.appendChild(card);
    });
}

buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const filtrados = productos.filter(item =>
        String(item.codigo).toLowerCase().includes(texto)
        ||
        item.descripcion.toLowerCase().includes(texto)
    );

    renderizar(filtrados);
});

cargarDatos();
