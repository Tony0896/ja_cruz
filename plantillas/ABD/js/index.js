$(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,
    autoplayTimeout: 300000,
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
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                editaInfoModal(ID);
                break;

            case 14:
                editaTestimonios(ID);
                break;

            case 16:
                editRedesSociales(ID);
                break;

            case 17:
                editaPromos();
                break;

            default:
                console.log("Defaut =>", ID);
                break;
        }
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
                        traeRedes();
                        // preloader.hide();
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

function editaInfoModal(ID) {
    $("#exampleModalLabel").html("Editar");
    html = `<div class="mb-3">
        <label for="nuevoTexto" class="form-label">Nuevo Título</label>
        <input type="text" class="form-control obligatorio" id="nuevoTexto" name="Nuevo Texto" autocomplete="off"/>
    </div>`;

    htmlFooter = `<button type="button" class="btn btn-secondary" onclick="hideModal2('exampleModal')">Cerrar</button>
    <button type="button" class="btn btn-primary" onclick="guardarCambios(${ID})">Guardar Cambios</button>`;

    $("#modalBody").html(html);
    $("#modalFooter").html(htmlFooter);
    $("#exampleModal").modal("show");
}

function editRedesSociales(ID) {
    preloader.show();
    $("#exampleModalLabel").html("Editar Redes Sociales");
    let html = '<div class="mb-3"> <table> <thead> <tr> <td></td> <td>Red</td><td>Visible</td><td>URL</td></tr></thead><tbody>';
    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traeRedesSociales.php",
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
                            let estatus = "";
                            if (data.estatus == 1) {
                                estatus = "Checked";
                            } else {
                                estatus = "";
                            }

                            html += `<tr> 
                                <td>${data.icon}</td>
                                <td>${data.name}</td>
                                <td> <input type="checkbox" class="ui-checkbox" onchange="cambiaVisibleRed(${data.ID})" id="cbox_${
                                data.ID
                            }" ${estatus}> </td>
                                <td> <input type="text" class="form-control" onchange="cambiaURLRed(${data.ID})" value='${
                                data.url ? data.url : ""
                            }' id="input_${data.ID}"> </td>
                            </tr>`;
                        });

                        html += `</tbody>
                            </table>
                        </div>`;
                        htmlFooter = `<button type="button" class="btn btn-secondary" onclick="hideModal2('exampleModal')">Cerrar</button>
                        <button type="button" class="btn btn-primary" onclick="guardarCambios()">Guardar Cambios</button>`;

                        $("#modalBody").html(html);
                        $("#modalFooter").html("");
                        $("#exampleModal").modal("show");
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

function cambiaVisibleRed(ID) {
    preloader.show();
    let visible;

    if ($("#cbox_" + ID).prop("checked")) {
        visible = 1;
    } else {
        visible = 0;
    }

    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/cambiaVisibleRed.php",
        data: { ID, visible },
    })
        .done(function (results) {
            let success = results.success;
            let result = results.result;
            switch (success) {
                case true:
                    traeRedes();
                    Swal.fire({ icon: "success", title: "", text: "Guardado correctamente." });
                    preloader.hide();
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

function cambiaURLRed(ID) {
    preloader.show();
    let valor = $("#input_" + ID).val();

    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/cambiaURLRed.php",
        data: { ID, valor },
    })
        .done(function (results) {
            let success = results.success;
            let result = results.result;
            switch (success) {
                case true:
                    traeRedes();
                    Swal.fire({ icon: "success", title: "", text: "Guardado correctamente." });
                    preloader.hide();
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

function traeRedes() {
    preloader.show();
    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traeRedesSociales.php",
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
                        let html = "";
                        result.forEach((data, index) => {
                            if (data.estatus == 1) {
                                html += `<a class="btn btn-lg btn-outline-light btn-lg-square mr-2" href="${data.url ? data.url : "#"}">${
                                    data.icon
                                }</a>`;
                            }
                        });
                        $("#divRedesSociales").html(html);
                        preloader.hide();
                    }
                    traePromos();
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

function editaPromos() {
    preloader.show();
    $("#exampleModalLabel").html("Editar");
    let html = '<div class="mb-3"> <table> <thead> <tr><td>Texto</td><td></td></tr></thead><tbody>';
    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traePromos.php",
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
                            html += `<tr>
                                <td>${data.promo}</td>
                                <td id="td_btn_${data.ID}"> 
                                    <button type="button" class="btn btn-outline-danger btn_editInfo" onclick="eliminaPromo(${data.ID})"> 
                                        <i class="fas fa-trash"></i> 
                                    </button>
                                </td>
                            </tr>`;
                        });

                        html += `</tbody>
                            </table>
                        </div>
                        <div class="row" style="display:none;" id="divNuevaPromo">
                            <div class="col-10">
                                <input type="text" class="form-control" id="input_promo" autocomplete="off">
                            </div>
                            <div class="col-2">
                                <button type="button" class="btn btn-outline-primary btn_editInfo" onclick="guardaPromo()"> 
                                    <i class="fas fa-save"></i> 
                                </button>
                            </div>
                        </div>
                        `;
                        htmlFooter = `<button type="button" class="btn btn-primary" onclick="nuevaPromo()" style="color:#FFF;">Nuevo</button>`;

                        $("#modalBody").html(html);
                        $("#modalFooter").html(htmlFooter);
                        $("#exampleModal").modal("show");
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

function nuevaPromo() {
    $("#divNuevaPromo").css("display", "flex");
}

function guardaPromo() {
    let input_promo = $("#input_promo").val();

    if (input_promo) {
        preloader.show();
        $.ajax({
            method: "POST",
            dataType: "JSON",
            url: "./views/edita/guardaPromo.php",
            data: { input_promo },
        })
            .done(function (results) {
                let success = results.success;
                let result = results.result;
                switch (success) {
                    case true:
                        traePromos();
                        Swal.fire({ icon: "success", title: "", text: "Guardado correctamente." });
                        preloader.hide();
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
    } else {
        Swal.fire({ icon: "warning", title: "", text: "Indica primero lo que quieras guardar." });
    }
}

function eliminaPromo(ID) {
    Swal.fire({
        title: "Aviso",
        text: "¿Esta seguro de querer eliminar este registro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            preloader.show();

            $.ajax({
                method: "POST",
                dataType: "JSON",
                url: "./views/edita/eliminaPromo.php",
                data: { ID },
            })
                .done(function (results) {
                    let success = results.success;
                    let result = results.result;
                    switch (success) {
                        case true:
                            traePromos();
                            Swal.fire({ icon: "success", title: "", text: "Eliminado correctamente." });
                            preloader.hide();
                            $("#td_btn_" + ID).html("");
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
    });
}

function traePromos() {
    preloader.show();
    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traePromos.php",
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
                        let html = "";
                        result.forEach((data, index) => {
                            html += `<li class="py-2"><i class="fa fa-check text-primary mr-3"></i>${data.promo}</li>`;
                        });
                        html += `<button type="button" class="btn btn-outline-warning btn_editInfo" onclick="editInfo(17)"><i class="fas fa-edit"></i></button>`;
                        $("#div_list").html(html);
                        preloader.hide();
                    }
                    traeTestimonios();
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

function traeTestimonios() {
    preloader.show();
    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traeTestimonios.php",
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
                        let html = "";
                        let htmlOl = "";
                        result.forEach((data, index) => {
                            htmlOl += ``;
                            if (index == 0) {
                                html += `<div class="carousel-item active">
                                    <div class="d-flex align-items-center mb-3">
                                        <img class="img-fluid" src="${data.imgUrl ? data.imgUrl : "./img/testimonios/base.png"}" alt="" />
                                        <div class="ml-3">
                                            <h4>${data.name}</h4>
                                            <i>${data.profession}</i>
                                        </div>
                                    </div>
                                    <p class="m-0">${data.comentarios}</p>
                                </div>`;
                                htmlOl += `<li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="active" style="opacity: 1;"></li>`;
                            } else {
                                html += `<div class="carousel-item">
                                    <div class="d-flex align-items-center mb-3">
                                        <img class="img-fluid" src="${data.imgUrl ? data.imgUrl : "./img/testimonios/base.png"}" alt="" />
                                        <div class="ml-3">
                                            <h4>${data.name}</h4>
                                            <i>${data.profession}</i>
                                        </div>
                                    </div>
                                    <p class="m-0">${data.comentarios}</p>
                                </div>`;
                                htmlOl += `<li data-target="#carouselExampleIndicators" data-slide-to="${index}" style="opacity: 1;"></li>`;
                            }
                        });
                        let htmlHeadel = `
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                            <div class="carousel-inner">
                                ${html}
                            </div>
                            <ol class="carousel-indicators" style="position: relative;margin-top: 40px;">
                                ${htmlOl}
                            </ol>
                        </div>`;
                        $("#div_testimonios").html(htmlHeadel);
                        $(".carousel").carousel({
                            interval: 3000,
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

function editaTestimonios() {
    preloader.show();
    $("#exampleModalLabel1").html("Editar");
    let html = `<div class="mb-3"> 
        <table> 
            <thead> 
                <tr>
                    <td>Nombre</td>
                    <td>Imagen</td>
                    <td>Profesión</td>
                    <td>Testimonio</td>
                    <td>Acciones</td>
                </tr>
            </thead>
        <tbody>`;
    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traeTestimonios.php",
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
                            html += `<tr id="tr_testimonio_${data.ID}">
                                <td>${data.name}</td>
                                <td><img class="img-fluid imgtb" src="${data.imgUrl ? data.imgUrl : "./img/testimonios/base.png"}" alt="" /></td>
                                <td>${data.profession}</td>
                                <td>${data.comentarios}</td>
                                <td id="td_btn_${data.ID}"> 
                                    <button type="button" class="btn btn-outline-danger btn_editInfo" onclick="eliminaTestimonio(${data.ID})"> 
                                        <i class="fas fa-trash"></i> 
                                    </button>
                                </td>
                            </tr>`;
                        });

                        html += `</tbody>
                            </table>
                        </div>
                        <hr>
                        <div style="display:none;" id="divNuevoTestimonio">
                            <div class="row">
                                <div class="col-12">
                                    <label for="nameTestimonio" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="nameTestimonio" autocomplete="off">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="profesionTestimonio" class="form-label">Profesión</label>
                                    <input type="text" class="form-control" id="profesionTestimonio" autocomplete="off">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="testimonioTestimonio" class="form-label">Testimonio</label>
                                    <input type="text" class="form-control" id="testimonioTestimonio" autocomplete="off">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="imageTestimonio" class="form-label">Imagen</label>
                                    <div class="dropzone" id="dropzoneBF">
                                        <div class="dz-message needsclick" style="color: #FF0037;">
                                            <h1><i class="fas fa-cloud" style="color: #ff0037c9;"></i></h1>
                                            <span class="fs-7 fw-semibold text-gray-400">Subir Imagen</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="margin-top: 20px;">
                                <div class="col-5"> &nbsp; </div>
                                <div class="col-2">
                                    <button type="button" class="btn btn-outline-primary btn_editInfo" id="guardarDocumentos"> 
                                        <i class="fas fa-save"></i>
                                    </button>
                                </div>
                                <div class="col-5"> &nbsp; </div>
                            </div>
                        </div>
                        `;
                        htmlFooter = `<button type="button" class="btn btn-primary" onclick="nuevoTestimonio()" style="color:#FFF;">Nuevo</button>`;

                        $("#modalBody1").html(html);
                        $("#modalFooter1").html(htmlFooter);
                        $("#modalTemplate").modal("show");

                        function limpiaDrop() {
                            myDropzone.removeAllFiles();
                        }

                        let fileInput = [];
                        let myDropzone = new Dropzone("#dropzoneBF", {
                            url: "/",
                            maxFilesize: 500, // MB
                            maxFiles: 1, //CANTIDAD DE ARCHIVOS A SUBIR
                            acceptedFiles: "image/jpeg, image/png, image/jpg",
                            addRemoveLinks: true, // QUITAR ARCHIVOS AGREGADOS
                            dictRemoveFile: "Remover",
                            paramName: "file", // The name that will be used to transfer the file
                            createImageThumbnails: true,
                            dictDefaultMessage: "Agregar archivo(s).",
                            dictMaxFilesExceeded: "Solo puedes subir como máximo 1 imagen.",
                            dictInvalidFileType: "No puedes subir archivos de este tipo.",
                        });

                        myDropzone.on("addedfile", (file) => {
                            fileInput.push(file);
                        });

                        myDropzone.on("removedfile", (file) => {
                            let i = fileInput.indexOf(file);
                            fileInput.splice(i, 1);
                        });

                        preloader.hide();

                        $("#modalTemplate").modal({
                            backdrop: "static",
                            keyboard: false,
                        });

                        $("#modalTemplate").modal("show");

                        $("#btnClose").on("click", () => {
                            limpiaDrop();
                            $("#modalTemplate").modal("hide");
                            $("#btnClose").off("click");
                        });

                        $("#guardarDocumentos").on("click", () => {
                            let nameTestimonio = $("#nameTestimonio").val();
                            let profesionTestimonio = $("#profesionTestimonio").val();
                            let testimonioTestimonio = $("#testimonioTestimonio").val();

                            if (nameTestimonio && profesionTestimonio && testimonioTestimonio) {
                            } else {
                                Swal.fire({
                                    icon: "warning",
                                    title: "",
                                    text: "Debes llenar los datos para poder guardar.",
                                });
                                return false;
                            }

                            let formData = new FormData();
                            if (fileInput.length > 0) {
                                for (i = 0; i < fileInput.length; i++) {
                                    if (fileInput[i].status != "success") {
                                        console.log(fileInput[i].status);
                                        if (fileInput[i].status == "uploading") {
                                            Swal.fire({
                                                icon: "warning",
                                                title: "",
                                                text: "Espera a que la imagen se termine de subir.",
                                            });
                                        } else {
                                            Swal.fire({
                                                icon: "warning",
                                                title: "",
                                                text: "Recuerda que solo puedes subir una imagen.",
                                            });
                                        }
                                        return false;
                                    }
                                    formData.append("Adjunto_" + i, fileInput[i]);
                                }
                                formData.append("NoDocs", fileInput.length);
                                formData.append("fechaRegistro", new Date().toLocaleString("sv-SE").split(" ")[0]);
                            } else {
                                formData.append("NoDocs", 0);
                                formData.append("fechaRegistro", new Date().toLocaleString("sv-SE").split(" ")[0]);
                            }
                            formData.append(
                                "fechaRegistroH",
                                new Date().toLocaleString("sv-SE").split(" ")[0] + "T" + new Date().toLocaleString("sv-SE").split(" ")[1]
                            );

                            formData.append("nameTestimonio", nameTestimonio);
                            formData.append("profesionTestimonio", profesionTestimonio);
                            formData.append("testimonioTestimonio", testimonioTestimonio);

                            Swal.fire({
                                title: "",
                                text: "¿Estas seguro de querer guardar este testimonio?",
                                icon: "question",
                                showCancelButton: true,
                                confirmButtonColor: "#7066e0",
                                cancelButtonColor: "#FF0037",
                                confirmButtonText: "OK",
                                cancelButtonText: "Cancelar",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    preloader.show();
                                    guardaTestimonios(formData);
                                }
                            });
                        });

                        function guardaTestimonios(adjuntos) {
                            $.ajax({
                                url: "./views/edita/guardaTestimonios.php",
                                type: "POST",
                                data: adjuntos,
                                contentType: false,
                                processData: false,
                            }).done(function (results) {
                                if (results == "200") {
                                    preloader.hide();
                                    limpiaDrop();
                                    $("#nameTestimonio").val("");
                                    $("#profesionTestimonio").val("");
                                    $("#testimonioTestimonio").val("");
                                    $("#divNuevoTestimonio").css("display", "none");
                                    $("#modalTemplate").modal("hide");
                                    $("#btnClose").off("click");
                                    traeTestimonios();
                                    Swal.fire({
                                        icon: "success",
                                        title: "",
                                        text: "Guardado correctamente.",
                                    });
                                } else {
                                    // $("#modalIncidencias").modal("hide");
                                    // $("#btnCloseIncidencias").off("click");
                                    preloader.hide();
                                    limpiaDrop();
                                    Swal.fire({
                                        icon: "warning",
                                        title: "",
                                        text: "Algo salio mal vuelve a intentarlo.",
                                    });
                                }
                            });
                        }
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

function nuevoTestimonio() {
    $("#divNuevoTestimonio").css("display", "block");
}

function eliminaTestimonio(ID) {
    Swal.fire({
        title: "Aviso",
        text: "¿Esta seguro de querer eliminar este registro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            preloader.show();

            $.ajax({
                method: "POST",
                dataType: "JSON",
                url: "./views/edita/eliminaTestimonio.php",
                data: { ID },
            })
                .done(function (results) {
                    let success = results.success;
                    let result = results.result;
                    switch (success) {
                        case true:
                            traeTestimonios();
                            Swal.fire({ icon: "success", title: "", text: "Eliminado correctamente." });
                            preloader.hide();
                            $("#tr_testimonio_" + ID).hide();
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
    });
}
