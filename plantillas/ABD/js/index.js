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
                    <h4><i class="fa fa-running service-icon"></i>Pista de LED</h4>
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

function salirSesion() {
    $.ajax({
        method: "GET",
        dataType: "json",
        url: "views/login/cerrarSession.php",
    })
        .done(function (result) {
            let login = result.success;

            switch (login) {
                case true:
                    localStorage.removeItem("AccesoUsuario");
                    window.location.href = "login.html";
                    break;
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("destruirAccesoUsuarioView - Server: " + jqXHR.responseText + "\nEstatus: " + textStatus + "\nError: " + errorThrown);
        });
}

function editInfo(ID) {
    if (localStorage.getItem("AccesoUsuario")) {
        let html = "",
            htmlFooter = "";
        switch (ID) {
            case 1: //* Texto 1 Home
            case 2:
            case 3:
            case 4:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                $("#exampleModalLabel").html("Editar");
                html = `<div class="mb-3">
                <label for="nuevoTexto" class="form-label">Nuevo Título</label>
                <input type="text" class="form-control obligatorio" id="nuevoTexto" name="Nuevo Texto" autocomplete="off"/>
            </div>`;
                htmlFooter = `<button type="button" class="btn btn-secondary" onclick="hideModal2('exampleModal')">Cerrar</button>
                <button type="button" class="btn btn-primary" onclick="guardarCambios(${ID})">Guardar Cambios</button>`;
                break;

            default:
                console.log("Defaut");
                break;
        }

        $("#modalBody").html(html);
        $("#modalFooter").html(htmlFooter);
        $("#exampleModal").modal("show");
    }
}

function hideModal2(modal) {
    $("#" + modal).modal("hide");
}

function guardarCambios(ID) {
    let values = get_datos_completos("modalBody");
    let response = values.response;
    let valido = values.valido;
    let dataSend = values.dataSend;
    dataSend["ID"] = ID;
    console.log(dataSend);
    if (valido) {
        preloader.show();

        $.ajax({
            method: "POST",
            dataType: "JSON",
            url: "./views/edita/guardaCambios.php",
            data: { dataSend },
        })
            .done(function (results) {
                let success = results.success;
                let result = results.result;
                switch (success) {
                    case true:
                        Swal.fire({ icon: "success", title: "", text: "Guardado correctamente." });
                        hideModal2("exampleModal");
                        traerElemtos();

                        break;
                    case false:
                        preloader.hide();
                        Swal.fire({ icon: "warning", title: "", text: "Algo salio mal vuelve a intentarlo." });
                        break;
                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                preloader.hide();
                Swal.fire({ icon: "warning", title: "", text: "Algo salio mal vuelve a intentarlo." });
                console.log("error: " + jqXHR.responseText + "\nEstatus: " + textStatus + "\nError: " + errorThrown);
            });
        preloader.hide(); //!Quitar
    } else {
        let html =
            '<span style="font-weight: 900;">Debes llenar estos campos para poder guardar:</span> <br> <ul style="text-align: left; margin-left: 15px; font-style: italic;"> ';
        response.forEach((data) => {
            html += `<li style="list-style: disc;">${data}.</li> `;
        });
        html += `</ul>`;
        Swal.fire({ icon: "warning", title: "", html: html });
    }
}

function get_datos_completos(form) {
    let campos;
    let trae_los_campos_sin_llennar = [];
    let dataSend = {};
    campos = document.querySelectorAll("#" + form + " .obligatorio");
    let valido = true;

    [].slice.call(campos).forEach(function (campo) {
        if ($(campo).get(0).tagName == "SELECT") {
            if (campo.value.trim() == 0 || campo.value.trim() == "") {
                valido = false;
                trae_los_campos_sin_llennar = [...trae_los_campos_sin_llennar, $(campo).attr("name")];
            } else {
                let idcampo = $(campo).attr("id");
                let value = campo.value.trim();
                value = value.replaceAll("'", '"');
                dataSend[idcampo] = value;
            }
        } else if ($(campo).get(0).tagName == "TEXTAREA") {
            if (campo.value.trim() === "") {
                valido = false;
                trae_los_campos_sin_llennar = [...trae_los_campos_sin_llennar, $(campo).attr("name")];
            } else {
                let idcampo = $(campo).attr("id");
                let value = campo.value.trim();
                value = value.replaceAll("'", '"');
                dataSend[idcampo] = value;
            }
        } else {
            if (campo.value.trim() === "") {
                valido = false;
                trae_los_campos_sin_llennar = [...trae_los_campos_sin_llennar, $(campo).attr("name")];
            } else {
                let idcampo = $(campo).attr("id");
                let value = campo.value.trim();
                value = value.replaceAll("'", '"');
                dataSend[idcampo] = value;
            }
        }
    });

    if (valido) {
        return {
            valido: valido,
            reponse: 1,
            dataSend,
        };
    } else {
        return {
            valido: valido,
            response: trae_los_campos_sin_llennar,
            dataSend,
        };
    }
}

const preloader = function () {};

preloader.show = function () {
    $(".modals").modal({ backdrop: "static", keyboard: false });
    $(".modals").modal("show");
    $(".modal").css("z-index", "1040");
    $(".modals").css("z-index", "1056");
    $(".modalAlerts").css("z-index", "1057");
};

preloader.hide = function () {
    setTimeout(function () {
        $(".modal").css("z-index", "1051");
        $(".modals").modal("hide");
        $(".modals").data("bs.modal", null);
        $(".modalAlerts").css("z-index", "1057");
    }, 1000);
};

function traerElemtos() {
    preloader.show();
    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traerElemtos.php",
        data: {},
    })
        .done(function (results) {
            let success = results.success;
            let result = results.result;
            switch (success) {
                case true:
                    if (result == "Sin Datos") {
                        preloader.hide();
                    } else {
                        result.forEach((data, index) => {
                            let dataID = data.ID;
                            switch (dataID) {
                                case "1":
                                    $("#text_1").html(data.texto);
                                    break;

                                case "2":
                                    $("#text_3").html(data.texto);
                                    break;

                                case "3":
                                    $("#text_2").html(data.texto);
                                    $("#text_4").html(data.texto);
                                    break;

                                case "4":
                                    $("#text_5").html(data.texto);
                                    break;

                                case "5":
                                    $("#text_6").html(data.texto);
                                    break;

                                case "6":
                                    $("#text_7").html(data.texto);
                                    break;

                                case "7":
                                    $("#text_9").html(data.texto);
                                    break;

                                case "8":
                                    $("#text_8").html(data.texto);
                                    break;

                                case "9":
                                    $("#text_10").html(data.texto);
                                    break;

                                case "10":
                                    $("#text_11").html(data.texto);
                                    break;

                                case "11":
                                    $("#text_12").html(data.texto);
                                    break;

                                default:
                                    console.log("ID =>", data.ID, "texto =>", data.texto);
                                    break;
                            }
                        });
                        preloader.hide();
                    }
                    break;
                case false:
                    preloader.hide();
                    Swal.fire({ icon: "warning", title: "", text: "Algo salio mal vuelve a intentarlo." });
                    break;
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            preloader.hide();
            Swal.fire({ icon: "warning", title: "", text: "Algo salio mal vuelve a intentarlo." });
            console.log("error: " + jqXHR.responseText + "\nEstatus: " + textStatus + "\nError: " + errorThrown);
        });
}
