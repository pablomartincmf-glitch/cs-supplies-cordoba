{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 const contenedor = document.getElementById("productos");\
const buscador = document.getElementById("buscar");\
\
let productos = [];\
\
async function cargarDatos() \{\
\
\'a0\'a0\'a0 const response = await fetch("stock.csv");\
\'a0\'a0\'a0 const texto = await response.text();\
\
\'a0\'a0\'a0 const filas = texto.split("\\n").slice(1);\
\
\'a0\'a0\'a0 productos = filas\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 .map(fila => fila.split(","))\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 .map(item => (\{\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 codigo: item[0],\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 descripcion: item[1],\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 precio: item[2],\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 vendido: item[3] || ""\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}))\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 .filter(item => item.vendido.trim() === "");\
\
\'a0\'a0\'a0 renderizar(productos);\
\}\
\
function renderizar(lista)\{\
\
\'a0\'a0\'a0 contenedor.innerHTML = "";\
\
\'a0\'a0\'a0 lista.forEach(item => \{\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const codigo6 = item.codigo.padStart(6,"0");\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const imagen =\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 `https://TU_RUTA_PUBLICA_DE_ONEDRIVE/$\{codigo6\}.png`;\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const whatsapp =\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 `https://wa.me/5493513998168?text=$\{encodeURIComponent(\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 "Hola, me interesa el art\'edculo " +\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 item.codigo +\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 " - " +\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 item.descripcion\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 )\}`;\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 contenedor.innerHTML += `\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div class="card">\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <img\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 src="$\{imagen\}"\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 onerror="this.src='img/sin-imagen.png'"\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 >\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div class="card-info">\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <h3>C\'f3digo $\{item.codigo\}</h3>\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p>$\{item.descripcion\}</p>\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div class="precio">\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 USD $\{item.precio\}\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <a\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 class="btn-whatsapp"\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 href="$\{whatsapp\}"\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 target="_blank"\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 >\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 Consultar por WhatsApp\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </a>\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>\
\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 `;\
\'a0\'a0\'a0 \});\
\}\
\
buscador.addEventListener("input", ()=>\{\
\
\'a0\'a0\'a0 const texto = buscador.value.toLowerCase();\
\
\'a0\'a0\'a0 const filtrados = productos.filter(item =>\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 item.codigo.toLowerCase().includes(texto)\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ||\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 item.descripcion.toLowerCase().includes(texto)\
\'a0\'a0\'a0 );\
\
\'a0\'a0\'a0 renderizar(filtrados);\
\
\});\
\
cargarDatos();\
}