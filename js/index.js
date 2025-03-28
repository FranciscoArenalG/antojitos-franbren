$(function () {
  let productos = [
    /* Frappes */
    {nombre: "Fresa.",descripcion: "Delicioso y refrescante frappe de fresa.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "menu.html",},
    {nombre: "Oreo.",descripcion: "Delicioso y refrescante frappe de oreo.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "menu.html",},
    {nombre: "3 leches.",descripcion: "Delicioso y refrescante frappe de 3 leches.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "menu.html",},
    {nombre: "Mazapán.",descripcion: "Delicioso y refrescante frappe de mzapán.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "menu.html",},
    {nombre: "Rompope.",descripcion: "Delicioso y refrescante frappe de rompope.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "menu.html",},
    {nombre: "Chocolate abuelita.",descripcion: "Delicioso y refrescante frappe de chocolate abuelita.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "menu.html",},
    /* Malteadas */
        {nombre: "Fresa",descripcion: "Deliciosa y refrescante malteada de fresa.<br>Cambio de leche +$5.",precio: "$60",categoria: "malteadas",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Cookies & cream",descripcion: "Deliciosa y refrescante malteada de cookies & cream.<br>Cambio de leche +$5.",precio: "$60",categoria: "malteadas",imagen: "images/menu-1.jpg",link: "menu.html",},
    /* Eskimos */
        {nombre: "Fresa",descripcion: "Delicioso y refrescante eskimo de fresa.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Moka",descripcion: "Delicioso y refrescante eskimo de vainilla.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Capuchino",descripcion: "Delicioso y refrescante eskimo de rompope.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Chocolate abuelita",descripcion: "Delicioso y refrescante eskimo de chocolate abuelita.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "menu.html",},
        /* Mini donas */
        {nombre: "Tradicionales 8pzas",descripcion: "Deliciosas mini donas espolvoreadas con azúcar y canela.",precio: "$40",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Tradicionales 20pzas",descripcion: "Deliciosas mini donas espolvoreadas con azúcar y canela.",precio: "$100",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Cubiertas 20pzas",descripcion: "Deliciosas mini donas cubiertas con chocolate.",precio: "$120",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Bañadas 20pzas",descripcion: "Deliciosas mini donas bañadas con nutella, cajeta, maple, lechera, hershey, mermelada de fresa.",precio: "$120",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Rellenas 8pzas",descripcion: "Deliciosas mini donas rellenas con nutella.",precio: "$65",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Chocolate 15pzas",descripcion: "Deliciosas mini donas sabor a chocolate.",precio: "$90",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "menu.html",},
        /* Mini hotcakes */
        {nombre: "Orden grande",descripcion: "25 deliciosos mini hotcakes acompañados con 2 salsas a elegir,1 topping a elegir,1 fruta a elegir.",precio: "$60",categoria: "minihotcakes",imagen: "images/menu-1.jpg",link: "menu.html",},
        /* Hotcakes */
        {nombre: "Orden chica",descripcion: "Deliciosa orden de 3 hotcakes acompañados de 2 salsas a elegir, 1 topping a elegir y mantequilla.",precio: "$45",categoria: "hotcakes",imagen: "images/menu-1.jpg",link: "menu.html",},
        /* Waffles */
        {nombre: "Sencillo",descripcion: "Delicioso waffle acompañado de 2 salsas a elegir y  1 fruta a elegir.",precio: "$50",categoria: "waffles",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Ice",descripcion: "Delicioso waffle acompañado de 2 salsas a elegir y 2 bolas de helado a elegir.",precio: "$55",categoria: "waffles",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Mix",descripcion: "Delicioso waffle acompañado de 4 salsas a elegir,3 frutas a elegir y 2 bolas de helado a elegir.",precio: "$45",categoria: "waffles",imagen: "images/menu-1.jpg",link: "menu.html",},
        /* Snacks */
        {nombre: "Papas a la francesa de la casa",descripcion: "Deliciosas papas a la francesa cubiertas con salsa de la casa (picosa).",precio: "$55",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "javascript:;",},
        {nombre: "Papas a la francesa con arrachera",descripcion: "...",precio: "$80",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Salchipapas",descripcion: "Deliciosas salchipapas bañadas con catsup, queso, bbq y valentina.",precio: "$50",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "javascript:;",},
        {nombre: "Alitas con papas",descripcion: "Deliciosas alitas bañadas en la salsa a elegir, acompañadas con papas a la francesa.",precio: "$90",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Boneless con papas",descripcion: "Deliciosos boneless bañados en la salsa a elegir, acompañados con papas a la francesa.",precio: "$95",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "menu.html",},
        /* Tacos */
        {nombre: "Bistec",descripcion: "Acompañados con papas y/o nopales, tortilla de harina +$2.",precio: "$28",categoria: "tacos",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Longaniza",descripcion: "Acompañados con papas y/o nopales, tortilla de harina +$2.",precio: "$28",categoria: "tacos",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Chistorra",descripcion: "Acompañados con papas y/o nopales, tortilla de harina +$2.",precio: "$28",categoria: "tacos",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Pechuga",descripcion: "Acompañados con papas y/o nopales, tortilla de harina +$2.",precio: "$28",categoria: "tacos",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Arrachera",descripcion: "Acompañados con papas y/o nopales, tortilla de harina +$2.",precio: "$30",categoria: "tacos",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Chorizo argentino",descripcion: "Acompañados con papas y/o nopales, tortilla de harina +$2.",precio: "$30",categoria: "tacos",imagen: "images/menu-1.jpg",link: "menu.html",},
        {nombre: "Parrillada",descripcion: "1kg de arrachera, 1/2kg de chistorra, 2 piezas chorizo argentino, nopales, papas, habaneros, limones, tortillas y salsas.",precio: "$550",categoria: "tacos",imagen: "images/menu-1.jpg",link: "javascript:;",},
  ];

  productos.forEach((producto) => {
    let nuevaCard = $(`
        <div class="col-lg-3 col-md-6 menu-item-box p-3 mb-2 ${producto.categoria}">
            <div class="menu-item">
                <div class="menu-item-img">
                    <figure class="image-anime">
                        <img src="${producto.imagen}" alt="" />
                    </figure>
                </div>
                <div class="menu-item-body">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <a href="${producto.link}" class="form-control btn-default wow fadeInUp">Ver menú</a>
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
