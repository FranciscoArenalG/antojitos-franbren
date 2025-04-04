$(function () {
  let productos = [
    /* Frappes */
    {nombre: "Fresa.",descripcion: "Delicioso y refrescante frappe de fresa.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "https://wa.me/p/28498964356414796/5215643444614",},
    {nombre: "Oreo.",descripcion: "Delicioso y refrescante frappe de oreo.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9661390897204675/5215643444614",},
    {nombre: "Moka.",descripcion: "Delicioso y refrescante frappe de moka.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9165701623543295/5215643444614",},
    {nombre: "3 leches.",descripcion: "Delicioso y refrescante frappe de 3 leches.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9104155282998192/5215643444614",},
    {nombre: "Mazapán.",descripcion: "Delicioso y refrescante frappe de mzapán.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9266086123439588/5215643444614",},
    {nombre: "Rompope.",descripcion: "Delicioso y refrescante frappe de rompope.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9056641051091273/5215643444614",},
    {nombre: "Capuchino.",descripcion: "Delicioso y refrescante frappe de capuchino.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9307566799304662/5215643444614",},
    {nombre: "Chocolate abuelita.",descripcion: "Delicioso y refrescante frappe de chocolate abuelita.<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "https://wa.me/p/28337426005906093/5215643444614",},
    {nombre: "Piña colada (sin alcohol)",descripcion:"Delicioso y refrescante frappe de piña colada (sin alcohol)..<br>Cambio de leche +$5.",precio: "$60",categoria: "frappes",imagen: "images/menu-1.jpg",link: "https://wa.me/p/29077997485124947/5215643444614",},
    /* Malteadas */
        {nombre: "Fresa",descripcion: "Deliciosa y refrescante malteada de fresa.<br>Cambio de leche +$5.",precio: "$60",categoria: "malteadas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9030640260380457/5215643444614",},
        {nombre: "Vainilla",descripcion: "Deliciosa y refrescante malteada de vainilla.<br>Cambio de leche +$5.",precio: "$60",categoria: "malteadas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/8661411017296694/5215643444614",},
        {nombre: "Chocolate",descripcion: "Deliciosa y refrescante malteada de chocolate.<br>Cambio de leche +$5.",precio: "$60",categoria: "malteadas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9108236402589988/5215643444614",},
        {nombre: "Cookies & cream",descripcion: "Deliciosa y refrescante malteada de cookies & cream.<br>Cambio de leche +$5.",precio: "$60",categoria: "malteadas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/28907260652205552/5215643444614",},
    /* Eskimos */
        {nombre: "Fresa",descripcion: "Delicioso y refrescante eskimo de fresa.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/28653408177639023/5215643444614",},
        {nombre: "Moka",descripcion: "Delicioso y refrescante eskimo de vainilla.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9862200163811817/5215643444614",},
        {nombre: "Vainilla",descripcion: "Delicioso y refrescante eskimo de chocolate.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/28658140047165388/5215643444614",},
        {nombre: "Rompope",descripcion: "Delicioso y refrescante eskimo de rompope.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9806231899408911/5215643444614",},
        {nombre: "Chocolate",descripcion: "Delicioso y refrescante eskimo de rompope.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/8866697230101821/5215643444614",},
        {nombre: "Capuchino",descripcion: "Delicioso y refrescante eskimo de rompope.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9538756232849813/5215643444614",},
        {nombre: "Chocolate abuelita",descripcion: "Delicioso y refrescante eskimo de chocolate abuelita.",precio: "$60",categoria: "eskimos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9397257950360850/5215643444614",},
        /* Mini donas */
        {nombre: "Tradicionales 8pzas",descripcion: "Deliciosas mini donas espolvoreadas con azúcar y canela.",precio: "$40",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/8529400393827121/5215643444614",},
        {nombre: "Tradicionales 15pzas",descripcion: "Deliciosas mini donas espolvoreadas con azúcar y canela.",precio: "$70",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9146561798773146/5215643444614",},
        {nombre: "Tradicionales 20pzas",descripcion: "Deliciosas mini donas espolvoreadas con azúcar y canela.",precio: "$100",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9142477742507747/5215643444614",},
        {nombre: "Cubiertas 8pzas",descripcion: "Deliciosas mini donas cubiertas con chocolate.",precio: "$50",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/24254255914174966/5215643444614",},
        {nombre: "Cubiertas 15pzas",descripcion: "Deliciosas mini donas cubiertas con chocolate.",precio: "$90",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9447207585396273/5215643444614",},
        {nombre: "Cubiertas 20pzas",descripcion: "Deliciosas mini donas cubiertas con chocolate.",precio: "$120",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9351907824901831/5215643444614",},
        {nombre: "Bañadas 8pzas",descripcion: "Deliciosas mini donas bañadas con nutella, cajeta, maple, lechera, hershey, mermelada de fresa.",precio: "$50",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9727581660614722/5215643444614",},
        {nombre: "Bañadas 15pzas",descripcion: "Deliciosas mini donas bañadas con nutella, cajeta, maple, lechera, hershey, mermelada de fresa.",precio: "$90",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9190781197684869/5215643444614",},
        {nombre: "Bañadas 20pzas",descripcion: "Deliciosas mini donas bañadas con nutella, cajeta, maple, lechera, hershey, mermelada de fresa.",precio: "$120",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9208469175886789/5215643444614",},
        {nombre: "Rellenas 8pzas",descripcion: "Deliciosas mini donas rellenas con nutella.",precio: "$65",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9372264949557177/5215643444614",},
        {nombre: "Rellenas 15pzas",descripcion: "Deliciosas mini donas rellenas con nutella.",precio: "$120",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9317032728344941/5215643444614",},
        {nombre: "Rellenas 20pzas",descripcion: "Deliciosas mini donas rellenas con nutella.",precio: "$160",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9608203029202177/5215643444614",},
        {nombre: "Chocolate 8pzas",descripcion: "Deliciosas mini donas sabor a chocolate.",precio: "$50",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/23864335919834244/5215643444614",},
        {nombre: "Chocolate 15pzas",descripcion: "Deliciosas mini donas sabor a chocolate.",precio: "$90",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/28835062409473241/5215643444614",},
        {nombre: "Chocolate 20pzas",descripcion: "Deliciosas mini donas sabor a chocolate.",precio: "$120",categoria: "minidonas",imagen: "images/menu-1.jpg",link: "https://wa.me/p/8817046088401415/5215643444614",},
        /* Mini hotcakes */
        {nombre: "Orden chica",descripcion: "15 deliciosos mini hotcakes acompañados con 2 salsas a elegir,1 topping a elegir,1 fruta a elegir.",precio: "$45",categoria: "minihotcakes",imagen: "images/menu-1.jpg",link: "https://wa.me/p/29651196184479050/5215643444614",},
        {nombre: "Orden grande",descripcion: "25 deliciosos mini hotcakes acompañados con 2 salsas a elegir,1 topping a elegir,1 fruta a elegir.",precio: "$60",categoria: "minihotcakes",imagen: "images/menu-1.jpg",link: "https://wa.me/p/28639637142349675/5215643444614",},
        /* Hotcakes */
        {nombre: "Orden chica",descripcion: "Deliciosa orden de 3 hotcakes acompañados de 2 salsas a elegir, 1 topping a elegir y mantequilla.",precio: "$45",categoria: "hotcakes",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9404563966325075/5215643444614",},
        /* Waffles */
        {nombre: "Sencillo",descripcion: "Delicioso waffle acompañado de 2 salsas a elegir y  1 fruta a elegir.",precio: "$50",categoria: "waffles",imagen: "images/menu-1.jpg",link: "https://wa.me/p/28686909600956174/5215643444614",},
        {nombre: "Ice",descripcion: "Delicioso waffle acompañado de 2 salsas a elegir y 2 bolas de helado a elegir.",precio: "$55",categoria: "waffles",imagen: "images/menu-1.jpg",link: "https://wa.me/p/25867207096267648/5215643444614",},
        {nombre: "Bacon",descripcion: "Delicioso waffle con tocino y maple.",precio: "$55",categoria: "waffles",imagen: "images/menu-1.jpg",link: "https://wa.me/p/28909698108621119/5215643444614",},
        {nombre: "Pizza",descripcion: "Delicioso waffle acompañado de salsa pizzera, mozarella,pepperoni y papas fritas.",precio: "$45",categoria: "waffles",imagen: "images/menu-1.jpg",link: "javascript:;",},
        {nombre: "Mix",descripcion: "Delicioso waffle acompañado de 4 salsas a elegir,3 frutas a elegir y 2 bolas de helado a elegir.",precio: "$45",categoria: "waffles",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9278125475613286/5215643444614",},
        /* Snacks */
        {nombre: "Papas a la francesa",descripcion: "Deliciosas papas a la francesa.",precio: "$45",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9733050100038423/5215643444614",},
        {nombre: "Papas a la francesa de la casa",descripcion: "Deliciosas papas a la francesa cubiertas con salsa de la casa (picosa).",precio: "$55",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "javascript:;",},
        {nombre: "Papas a la francesa con arrachera",descripcion: "...",precio: "$80",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "https://wa.me/p/23906558322266085/5215643444614",},
        {nombre: "Salchipapas",descripcion: "Deliciosas salchipapas bañadas con catsup, queso, bbq y valentina.",precio: "$50",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "javascript:;",},
        {nombre: "Salchipulpos",descripcion: "Deliciosos salchipulpos bañados con catsup, queso, bbq y valentina",precio: "$35",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "javascript:;",},
        {nombre: "Alitas (solas)",descripcion: "Deliciosas alitas bañadas en la salsa a elegir.",precio: "$75",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9083074298469083/5215643444614",},
        {nombre: "Alitas con papas",descripcion: "Deliciosas alitas bañadas en la salsa a elegir, acompañadas con papas a la francesa.",precio: "$90",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9563102017088909/5215643444614",},
        {nombre: "Boneless (solos)",descripcion: "Deliciosos boneless bañados en la salsa a elegir.",precio: "$80",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9656415904379311/5215643444614",},
        {nombre: "Boneless con papas",descripcion: "Deliciosos boneless bañados en la salsa a elegir, acompañados con papas a la francesa.",precio: "$95",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9433575270045070/5215643444614",},
        {nombre: "Banana split",descripcion: "...",precio: "$80",categoria: "snacksextras",imagen: "images/menu-1.jpg",link: "javascript:;",},
        /* Tacos */
        {nombre: "Bistec",descripcion: "Acompañados con papas y/o nopales, tortilla de harina +$2.",precio: "$28",categoria: "tacos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/29424365053828932/5215643444614",},
        {nombre: "Longaniza",descripcion: "Acompañados con papas y/o nopales, tortilla de harina +$2.",precio: "$28",categoria: "tacos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9387548297969578/5215643444614",},
        {nombre: "Chistorra",descripcion: "Acompañados con papas y/o nopales, tortilla de harina +$2.",precio: "$28",categoria: "tacos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9229461823849022/5215643444614",},
        {nombre: "Pechuga",descripcion: "Acompañados con papas y/o nopales, tortilla de harina +$2.",precio: "$28",categoria: "tacos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9239563692801611/5215643444614",},
        {nombre: "Arrachera",descripcion: "Acompañados con papas y/o nopales, tortilla de harina +$2.",precio: "$30",categoria: "tacos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9111546255601379/5215643444614",},
        {nombre: "Chorizo argentino",descripcion: "Acompañados con papas y/o nopales, tortilla de harina +$2.",precio: "$30",categoria: "tacos",imagen: "images/menu-1.jpg",link: "https://wa.me/p/9494797747229648/5215643444614",},
        {nombre: "Parrillada",descripcion: "1kg de arrachera, 1/2kg de chistorra, 2 piezas chorizo argentino, nopales, papas, habaneros, limones, tortillas y salsas.",precio: "$550",categoria: "tacos",imagen: "images/menu-1.jpg",link: "javascript:;",},
        /* Bebidas */
        {nombre: "Coca cola",descripcion: "600 ml.",precio: "$21",categoria: "bebidas",imagen: "images/menu-1.jpg",link: "javascript:;",},
        {nombre: "Sidral mundet",descripcion: "600 ml.",precio: "$21",categoria: "bebidas",imagen: "images/menu-1.jpg",link: "javascript:;",},
        {nombre: "Sangría señorial",descripcion: "600 ml.",precio: "$21",categoria: "bebidas",imagen: "images/menu-1.jpg",link: "javascript:;",},
        {nombre: "Parrillada",descripcion: "1kg de arrachera, 1/2kg de chistorra, 2 piezas chorizo argentino, nopales, papas, habaneros, limones, tortillas y salsas.",precio: "$550",categoria: "tacos",imagen: "images/menu-1.jpg",link: "javascript:;",},
        {nombre: "Parrillada",descripcion: "1kg de arrachera, 1/2kg de chistorra, 2 piezas chorizo argentino, nopales, papas, habaneros, limones, tortillas y salsas.",precio: "$550",categoria: "tacos",imagen: "images/menu-1.jpg",link: "javascript:;",},
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
                    <h3>${producto.nombre} - ${producto.precio}</h3>
                    <p>${producto.descripcion}</p>
                    <a href="${producto.link}" class="form-control btn-default wow fadeInUp">Ver producto</a>
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
