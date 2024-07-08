$(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    touchDrag: false,
    mouseDrag: false,
});

function Imgs(imga) {
    var modal = document.getElementById("popUp");
    var img = document.getElementById(imga);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    var span = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("modal")[0];
    span2.onclick = function () {
        modal.style.display = "none";
    };
    span.onclick = function () {
        modal.style.display = "none";
    };
}

function hideModal(modal) {
    $("#" + modal).trigger("click");
}

function traeDetallesServicio(val) {
    switch (val) {
        case 1:
            $("#modalContent0").html(
                `<div style="padding: 20px;">
                    <h4><i class="fa fa-lightbulb service-icon"></i>Iluminación para eventos</h4>
                    <p class="m-0">Diseño e instalación de sistemas de iluminación para conciertos, fiestas de quince años, bodas y otros eventos especiales.</p>
                    <hr style="margin-top: 0" />
                </div>`
            );

            $("#myModal").modal("show");
            break;

        case 2:
            $("#modalContent0").html(
                `<div style="padding: 20px;">
                    <h4><i class="fa fa-volume-up service-icon"></i>Audio profesional</h4>
                    <p class="m-0">Suministro y configuración de equipos de audio de alta calidad para garantizar un sonido claro y envolvente en los eventos.</p>
                    <hr style="margin-top: 0" />
                </div>`
            );

            $("#myModal").modal("show");
            break;

        case 3:
            $("#modalContent0").html(
                `<div style="padding: 20px;">
                    <h4><i class="fa fa-video service-icon"></i>Video y pantallas LED</h4>
                    <p class="m-0">Alquiler e instalación de pantallas LED, proyectores y equipos de video para presentaciones, videos musicales y proyecciones durante eventos.</p>
                    <hr style="margin-top: 0" />
                </div>`
            );

            $("#myModal").modal("show");
            break;

        case 4:
            $("#modalContent0").html(
                `<div style="padding: 20px;">
                    <h4><i class="fa fa-audible service-icon"></i>Pista de LED</h4>
                    <p class="m-0">Ofrecemos pistas de baile con tecnología LED que se iluminan con diferentes colores y patrones, añadiendo un toque único a la pista de baile.</p>
                    <hr style="margin-top: 0" />
                </div>`
            );

            $("#myModal").modal("show");
            break;

        case 5:
            $("#modalContent0").html(
                `<div style="padding: 20px;">
                    <h4><i class="fa fa-bomb service-icon"></i>Efectos especiales</h4>
                    <p class="m-0">Uso de efectos especiales como luces estroboscópicas, máquinas de humo, láseres y efectos visuales para crear una atmósfera única en los eventos.</p>
                    <hr style="margin-top: 0" />
                </div>`
            );

            $("#myModal").modal("show");
            break;

        case 6:
            $("#modalContent0").html(
                `<div style="padding: 20px;">
                    <h4><i class="fa fa-university service-icon"></i>Diseño de escenarios y podiums</h4>
                    <p class="m-0">Creación de diseños personalizados para escenarios, podiums y stands que complementen la iluminación y el audio del evento.</p>
                    <hr style="margin-top: 0" />
                </div>`
            );

            $("#myModal").modal("show");
            break;

        case 7:
            $("#modalContent0").html(
                `<div style="padding: 20px;">
                    <h4><i class="fa fa-volume-up service-icon"></i>Control de iluminación y sonido</h4>
                    <p class="m-0"> Implementación de sistemas de control avanzados para gestionar la iluminación y el sonido de manera efectiva durante el evento.</p>
                    <hr style="margin-top: 0" />
                </div>`
            );

            $("#myModal").modal("show");
            break;

        case 8:
            $("#modalContent0").html(
                `<div style="padding: 20px;">
                    <h4><i class="fa fa-pallet service-icon"></i>Instalaciones permanentes</h4>
                    <p class="m-0">Diseño e instalación de sistemas de iluminación y audio permanentes para teatros, salones de eventos, discotecas y otros espacios comerciales.</p>
                    <hr style="margin-top: 0" />
                </div>`
            );

            $("#myModal").modal("show");
            break;

        case 9:
            $("#modalContent0").html(
                `<div>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style="margin-bottom: 0px !important">
                        <li class="nav-item" role="presentation">
                            <button
                                class="nav-link active"
                                id="pills-home-tab"
                                data-toggle="pill"
                                data-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                            >
                                HOTEL GALERÍA PLAZA
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button
                                class="nav-link"
                                id="pills-profile-tab"
                                data-toggle="pill"
                                data-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                            >
                                SALÓN BBC
                            </button>
                        </li>
                    </ul>
                    <hr style="margin-top: 0" />
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active tabContainer" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <h4 class="text-primary text-uppercase" style="color: #00214c !important; text-align: center">HOTEL GALERÍA PLAZA</h4>
                        <div class="containerImages">
                            <div class="boxImage" style="display: flex; justify-content: center; align-items: center">
                                <img
                                    id="img_58"
                                    onclick="Imgs(this.id)"
                                    class="ImageABD"
                                    src="./img/gallery/BBC/img_58.jpeg"
                                    style="max-width: -webkit-fill-available"
                                />
                            </div>
                            <div class="boxImage" style="display: flex; justify-content: center; align-items: center">
                                <img
                                    id="img_59"
                                    onclick="Imgs(this.id)"
                                    class="ImageABD"
                                    src="./img/gallery/BBC/img_59.jpeg"
                                    style="max-width: -webkit-fill-available"
                                />
                            </div>
                            <div class="boxImage" style="display: flex; justify-content: center; align-items: center">
                                <img
                                    id="img_60"
                                    onclick="Imgs(this.id)"
                                    class="ImageABD"
                                    src="./img/gallery/BBC/img_60.jpeg"
                                    style="max-width: -webkit-fill-available"
                                />
                            </div>
                            <div class="boxImage" style="display: flex; justify-content: center; align-items: center">
                                <img
                                    id="img_61"
                                    onclick="Imgs(this.id)"
                                    class="ImageABD"
                                    src="./img/gallery/BBC/img_61.jpeg"
                                    style="max-width: -webkit-fill-available"
                                />
                            </div>
                            <div class="boxImage" style="display: flex; justify-content: center; align-items: center">
                                <img
                                    id="img_62"
                                    onclick="Imgs(this.id)"
                                    class="ImageABD"
                                    src="./img/gallery/BBC/img_62.jpeg"
                                    style="max-width: -webkit-fill-available"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade tabContainer" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <h4 class="text-primary text-uppercase" style="color: #00214c !important; text-align: center">SALÓN BBC</h4>
                        <div class="containerImages">
                            <div class="boxImage" style="display: flex; justify-content: center; align-items: center">
                                <img
                                    id="img_63"
                                    onclick="Imgs(this.id)"
                                    class="ImageABD"
                                    src="./img/gallery/BBC/img_63.jpeg"
                                    style="max-width: -webkit-fill-available"
                                />
                            </div>
                            <div class="boxImage" style="display: flex; justify-content: center; align-items: center">
                                <img
                                    id="img_64"
                                    onclick="Imgs(this.id)"
                                    class="ImageABD"
                                    src="./img/gallery/BBC/img_64.jpeg"
                                    style="max-width: -webkit-fill-available"
                                />
                            </div>
                            <div class="boxImage" style="display: flex; justify-content: center; align-items: center">
                                <img
                                    id="img_65"
                                    onclick="Imgs(this.id)"
                                    class="ImageABD"
                                    src="./img/gallery/BBC/img_65.jpeg"
                                    style="max-width: -webkit-fill-available"
                                />
                            </div>
                            <div class="boxImage" style="display: flex; justify-content: center; align-items: center">
                                <img
                                    id="img_66"
                                    onclick="Imgs(this.id)"
                                    class="ImageABD"
                                    src="./img/gallery/BBC/img_66.jpeg"
                                    style="max-width: -webkit-fill-available"
                                />
                            </div>
                            <div class="boxImage" style="display: flex; justify-content: center; align-items: center">
                                <img
                                    id="img_67"
                                    onclick="Imgs(this.id)"
                                    class="ImageABD"
                                    src="./img/gallery/BBC/img_67.jpeg"
                                    style="max-width: -webkit-fill-available"
                                />
                            </div>
                        </div>
                    </div>
                </div>`
            );

            $("#myModal").modal("show");
            break;

        default:
            break;
    }
}
