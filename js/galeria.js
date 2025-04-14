$(function () {
  let totalImages = 84; // Número total de imágenes
  let imagePath = "images/galeria/gallery-"; // Ruta base de las imágenes

  for (let i = 1; i <= totalImages; i++) {
    let imageUrl = `${imagePath}${i}.jpeg`;

    let nuevaCard = $(`
            <div class="photo-gallery-item">
                <a href="${imageUrl}">
                    <figure class="image-anime">
                        <img src="${imageUrl}" alt="">
                    </figure>
                </a>
            </div>
        `);

    $(".restaurants-gallery").append(nuevaCard);
  }
});
