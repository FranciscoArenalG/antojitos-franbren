$(function () {
  let productos = [
    /* Frappes */
    {
      nombre: "Fresa",
      descripcion: "Delicioso y refrescante frappe de fresa.",
      precio: "$60",
      categoria: "frappes",
      imagen: "images/menu-1.jpg",
      link: "#",
    },
    {
      nombre: "Oreo",
      descripcion: "Delicioso y refrescante frappe de oreo.",
      precio: "$60",
      categoria: "frappes",
      imagen: "images/menu-1.jpg",
      link: "#",
    },
    {
      nombre: "Moka",
      descripcion: "Delicioso y refrescante frappe de moka.",
      precio: "$60",
      categoria: "frappes",
      imagen: "images/menu-1.jpg",
      link: "#",
    },
    {
      nombre: "3 leches",
      descripcion: "Delicioso y refrescante frappe de 3 leches.",
      precio: "$60",
      categoria: "frappes",
      imagen: "images/menu-1.jpg",
      link: "#",
    },
    {
      nombre: "Mazapán",
      descripcion: "Delicioso y refrescante frappe de mzapán.",
      precio: "$60",
      categoria: "frappes",
      imagen: "images/menu-1.jpg",
      link: "#",
    },
    {
      nombre: "Rompope",
      descripcion: "Delicioso y refrescante frappe de rompope.",
      precio: "$60",
      categoria: "frappes",
      imagen: "images/menu-1.jpg",
      link: "#",
    },
    {
      nombre: "Chocolate abuelita",
      descripcion: "Delicioso y refrescante frappe de chocolate abuelita.",
      precio: "$60",
      categoria: "frappes",
      imagen: "images/menu-1.jpg",
      link: "#",
    },
    {
      nombre: "Piña colada (sin alcohol)",
      descripcion:
        "Delicioso y refrescante frappe de piña colada (sin alcohol).",
      precio: "$60",
      categoria: "frappes",
      imagen: "images/menu-1.jpg",
      link: "#",
    },
    /* Malteadas */
        {nombre: "Fresa",descripcion: "Delicioso y refrescante malteada de fresa.",precio: "$60",categoria: "malteadas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Vainilla",descripcion: "Delicioso y refrescante malteada de vainilla.",precio: "$60",categoria: "malteadas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Chocolate",descripcion: "Delicioso y refrescante malteada de chocolate.",precio: "$60",categoria: "malteadas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Cookies & cream",descripcion: "Delicioso y refrescante malteada de cookies & cream.",precio: "$60",categoria: "malteadas",imagen: "images/menu-1.jpg",link: "#",},
    /* Eskimos */
        {nombre: "Fresa",descripcion: "Delicioso y refrescante eskimo de fresa.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Moka",descripcion: "Delicioso y refrescante eskimo de vainilla.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Vainilla",descripcion: "Delicioso y refrescante eskimo de chocolate.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Rompope",descripcion: "Delicioso y refrescante eskimo de rompope.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Chocolate",descripcion: "Delicioso y refrescante eskimo de rompope.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Capuchino",descripcion: "Delicioso y refrescante eskimo de rompope.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Chocolate abuelita",descripcion: "Delicioso y refrescante eskimo de chocolate abuelita.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "#",},
        /* Mini donas */
        {nombre: "Tradicionales 8pzas",descripcion: "Deliciosas mini donas espolvoreadas con azúcar y canela.",precio: "$40",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Tradicionales 15pzas",descripcion: "Deliciosas mini donas espolvoreadas con azúcar y canela.",precio: "$70",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Tradicionales 20pzas",descripcion: "Deliciosas mini donas espolvoreadas con azúcar y canela.",precio: "$100",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Cubiertas 8pzas",descripcion: "Deliciosas mini donas cubiertas con chocolate.",precio: "$50",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Cubiertas 15pzas",descripcion: "Deliciosas mini donas cubiertas con chocolate.",precio: "$90",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Cubiertas 20pzas",descripcion: "Deliciosas mini donas cubiertas con chocolate.",precio: "$120",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Bañadas 8pzas",descripcion: "Deliciosas mini donas bañadas con nutella, cajeta, maple, lechera, hershey, mermelada de fresa.",precio: "$50",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Bañadas 15pzas",descripcion: "Deliciosas mini donas bañadas con nutella, cajeta, maple, lechera, hershey, mermelada de fresa.",precio: "$90",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Bañadas 20pzas",descripcion: "Deliciosas mini donas bañadas con nutella, cajeta, maple, lechera, hershey, mermelada de fresa.",precio: "$120",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Rellenas 8pzas",descripcion: "Deliciosas mini donas rellenas con nutella.",precio: "$65",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Rellenas 15pzas",descripcion: "Deliciosas mini donas rellenas con nutella.",precio: "$120",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Rellenas 20pzas",descripcion: "Deliciosas mini donas rellenas con nutella.",precio: "$160",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Chocolate 8pzas",descripcion: "Deliciosas mini donas sabor a chocolate.",precio: "$50",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Chocolate 15pzas",descripcion: "Deliciosas mini donas sabor a chocolate.",precio: "$90",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Chocolate 20pzas",descripcion: "Deliciosas mini donas sabor a chocolate.",precio: "$120",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "#",},
        /* Mini hotcakes */
        {nombre: "Orden chica",descripcion: "15 deliciosos mini hotcakes acompañados con 2 salsas a elegir,1 topping a elegir,1 fruta a elegir.",precio: "$45",categoria: "minihotcakes",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Orden grande",descripcion: "25 deliciosos mini hotcakes acompañados con 2 salsas a elegir,1 topping a elegir,1 fruta a elegir.",precio: "$60",categoria: "minihotcakes",imagen: "images/menu-1.jpg",link: "#",},
        /* Hotcakes */
        {nombre: "Orden chica",descripcion: "Deliciosa orden de 3 hotcakes acompañados de 2 salsas a elegir, 1 topping a elegir y mantequilla.",precio: "$45",categoria: "hotcakes",imagen: "images/menu-1.jpg",link: "#",},
        /* Waffles */
        {nombre: "Sencillo",descripcion: "Delicioso waffle acompañado de 2 salsas a elegir y  1 fruta a elegir.",precio: "$50",categoria: "waffles",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Ice",descripcion: "Delicioso waffle acompañado de 2 salsas a elegir y 2 bolas de helado a elegir.",precio: "$55",categoria: "waffles",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Bacon",descripcion: "Delicioso waffle con tocino y maple.",precio: "$55",categoria: "waffles",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Pizza",descripcion: "Delicioso waffle acompañado de salsa pizzera, mozarella,pepperoni y papas fritas.",precio: "$45",categoria: "waffles",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Mix",descripcion: "Delicioso waffle acompañado de 4 salsas a elegir,3 frutas a elegir y 2 bolas de helado a elegir.",precio: "$45",categoria: "waffles",imagen: "images/menu-1.jpg",link: "#",},
        /* Snacks */
        {nombre: "Papas a la francesa",descripcion: "Deliciosas papas a la francesa.",precio: "$45",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Papas a la francesa de la casa",descripcion: "Deliciosas papas a la francesa cubiertas con salsa de la casa (picosa).",precio: "$55",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Papas a la francesa con arrachera",descripcion: "...",precio: "$80",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Salchipapas",descripcion: "...",precio: "$50",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Salchipulpos",descripcion: "...",precio: "$35",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Alitas (solas)",descripcion: "...",precio: "$75",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Alitas con papas",descripcion: "...",precio: "$90",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Boneless (solos)",descripcion: "...",precio: "$80",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Boneless con papas",descripcion: "...",precio: "$95",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Banana split",descripcion: "...",precio: "$80",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "#",},
        /* Tacos */
        {nombre: "Bistec",descripcion: "...",precio: "$50",categoria: "waffles",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Longaniza",descripcion: "...",precio: "$55",categoria: "waffles",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Chistorra",descripcion: "...",precio: "$55",categoria: "waffles",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Pechuga",descripcion: "...",precio: "$45",categoria: "waffles",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Arrachera",descripcion: "...",precio: "$45",categoria: "waffles",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Chorizo argentino",descripcion: "...",precio: "$45",categoria: "waffles",imagen: "images/menu-1.jpg",link: "#",},
        {nombre: "Parrillada",descripcion: "...",precio: "$45",categoria: "waffles",imagen: "images/menu-1.jpg",link: "#",},
  ];

  productos.forEach((producto) => {
    let nuevaCard = $(`
        <div class="col-lg-4 col-md-6 menu-item-box ${producto.categoria}">
            <div class="menu-item">
                <div class="menu-item-img">
                    <figure class="image-anime">
                        <img src="${producto.imagen}" alt="" />
                    </figure>
                </div>
                <div class="menu-item-body">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                </div>
            </div>
        </div>
    `);

    $(".menu-item-boxes").append(nuevaCard);

    // 🔹 Actualizar Isotope
    $(".menu-item-boxes").isotope("appended", nuevaCard);
    $(".menu-item-boxes").isotope("layout");
    setTimeout(() => {
        $('.active-menu-dises').click();
    }, 300);
  });
});
