// $(".owl-carousel").owlCarousel({
//     items: 2,
//     loop: true,
//     margin: 10,
//     dots: true,
//     autoplay: true,
//     autoplayTimeout: 300000,
//     autoplayHoverPause: false,
//     touchDrag: false,
//     mouseDrag: false,
// });

function Imgs(imga, video) {
    if (video) {
        let modal = document.getElementById("popUp1");
        let img = document.getElementById(imga);
        let modalImg = document.getElementById("img011");
        let captionText = document.getElementById("caption1");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;

        let span = document.getElementsByClassName("close")[1];
        let span2 = document.getElementsByClassName("modal")[1];
        span2.onclick = function () {
            modal.style.display = "none";
        };
        span.onclick = function () {
            modal.style.display = "none";
        };
    } else {
        let modal = document.getElementById("popUp");
        let img = document.getElementById(imga);
        let modalImg = document.getElementById("img01");
        let captionText = document.getElementById("caption");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;

        let span = document.getElementsByClassName("close")[0];
        let span2 = document.getElementsByClassName("modal")[0];
        span2.onclick = function () {
            modal.style.display = "none";
        };
        span.onclick = function () {
            modal.style.display = "none";
        };
    }
}

function hideModal(modal) {
    $("#" + modal).trigger("click");
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

            case 12:
                editaInfoServicios(ID);
                break;

            case 13:
                editaServicios(ID);
                break;

            case 14:
                editaTestimonios(ID);
                break;

            case 15:
                editGaleria(ID);
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
        $(".modal_152").css("z-index", "1052");
        $(".modals").modal("hide");
        $(".modals").data("bs.modal", null);
        $(".modalAlerts").css("z-index", "1057");
    }, 1000);
};

function traerElemtos() {
    traeSeccionesGaleria();
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
    let html =
        '<div class="mb-3" style="overflow: auto;"> <table> <thead> <tr> <td></td> <td>Red</td><td>Visible</td><td>URL</td></tr></thead><tbody>';
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
    let html = '<div class="mb-3" style="overflow: auto;"> <table> <thead> <tr><td>Texto</td><td></td></tr></thead><tbody>';
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
                        $("#divNuevaPromo").css("display", "none");
                        $("#input_promo").val("");
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
                        let html = "",
                            display = "";
                        result.forEach((data, index) => {
                            html += `<li class="py-2"><i class="fa fa-check text-primary mr-3"></i>${data.promo}</li>`;
                        });
                        localStorage.getItem("AccesoUsuario") ? (display = "") : (display = 'style="display: none"');
                        html += `<button type="button" class="btn btn-outline-warning btn_editInfo" onclick="editInfo(17)" ${display}><i class="fas fa-edit"></i></button>`;
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
                        traeServicios();
                        let html = "";
                        let htmlOl = "";
                        result.forEach((data, index) => {
                            htmlOl += ``;
                            if (index == 0) {
                                html += `<div class="carousel-item active">
                                    <div class="d-flex align-items-center mb-3">
                                        <img class="img-fluid img100px" src="${data.imgUrl ? data.imgUrl : "./img/testimonios/base.png"}" alt="" />
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
                                        <img class="img-fluid img100px" src="${data.imgUrl ? data.imgUrl : "./img/testimonios/base.png"}" alt="" />
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
    let html = `<div class="mb-3" style="overflow: auto;"> 
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
                                let reresult = String(results).replace(/(\r\n|\n|\r)/gm, "");
                                console.log(reresult);
                                if (reresult == "200") {
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

function editaServicios() {
    preloader.show();
    $("#exampleModalLabel1").html("Editar");
    let html = `<div class="mb-3" style="overflow: auto;max-height: 70vh;"> 
        <table> 
            <thead> 
                <tr>
                    <td>Nombre</td>
                    <td>Imagen</td>
                    <td>Icon</td>
                    <td>Mini Descripción</td>
                    <td>Descripción</td>
                    <td>¿Conocer más?</td>
                    <td>Acciones</td>
                </tr>
            </thead>
        <tbody>`;
    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traeServicios.php",
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
                                <td><i class="${data.icon}"></i> </td>
                                <td>${data.mini_descripcion}</td>
                                <td>${data.descripcion ? data.descripcion : ""}</td>
                                <td>${data.conocer_mas == 1 ? "Si" : "No"}</td>
                                <td id="td_btn_Service_${data.ID}"> 
                                    <button type="button" class="btn btn-outline-danger btn_editInfo" onclick="eliminaServicio(${data.ID})"> 
                                        <i class="fas fa-trash"></i> 
                                    </button>
                                </td>
                            </tr>`;
                        });

                        html += `</tbody>
                            </table>
                        </div>
                        <hr>
                        <div style="display:none;" id="divNuevoServicio">
                            <div class="row">
                                <div class="col-12">
                                    <label for="nameServicio" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="nameServicio" autocomplete="off">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="imageServicio" class="form-label">Imagen</label>
                                    <div class="dropzone" id="dropzoneBF">
                                        <div class="dz-message needsclick" style="color: #FF0037;">
                                            <h1><i class="fas fa-cloud" style="color: #ff0037c9;"></i></h1>
                                            <span class="fs-7 fw-semibold text-gray-400">Subir Imagen</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-12">
                                    <label for="iconService" class="form-label">Icon</label>
                                    <a href="https://www.w3schools.com/icons/fontawesome5_result.asp"  target="_blank">Ir a Icons</a>
                                    <input type="text" class="form-control" id="iconService" autocomplete="off">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="mini_Descipcion" class="form-label">Mini Descipcion</label>
                                    <input type="text" class="form-control" id="mini_Descipcion" autocomplete="off">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="descipcion" class="form-label">Descripción</label>
                                    <input type="text" class="form-control" id="descipcion" autocomplete="off">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="conocer_mas" class="form-label">¿Conocer más?</label>
                                    <select class="form-control" id="conocer_mas">
                                        <option value="0">No</option>
                                        <option value="1">Sí</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row" style="display: none;" id="conocerMasImgs">
                                <div class="col-12">
                                    <label for="imageServicio" class="form-label">Imagenes</label>
                                    <div class="dropzone" id="dropzoneBF1">
                                        <div class="dz-message needsclick" style="color: #FF0037;">
                                            <h1><i class="fas fa-cloud" style="color: #ff0037c9;"></i></h1>
                                            <span class="fs-7 fw-semibold text-gray-400">Subir Imagenes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>
                            
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
                        htmlFooter = `<button type="button" class="btn btn-primary" onclick="nuevoServicio()" style="color:#FFF;">Nuevo</button>`;

                        $("#modalBody1").html(html);
                        $("#modalFooter1").html(htmlFooter);
                        $("#modalTemplate").modal("show");

                        function limpiaDrop() {
                            myDropzone.removeAllFiles();
                        }

                        function limpiaDrop1() {
                            myDropzone1.removeAllFiles();
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

                        let fileInput1 = [];
                        let myDropzone1 = new Dropzone("#dropzoneBF1", {
                            url: "/",
                            maxFilesize: 500, // MB
                            maxFiles: 10, //CANTIDAD DE ARCHIVOS A SUBIR
                            acceptedFiles: "image/jpeg, image/png, image/jpg, video/mp4, video/webm, video/ogg, video/x-msvideo",
                            addRemoveLinks: true, // QUITAR ARCHIVOS AGREGADOS
                            dictRemoveFile: "Remover",
                            paramName: "file", // The name that will be used to transfer the file
                            createImageThumbnails: true,
                            dictDefaultMessage: "Agregar archivo(s).",
                            dictMaxFilesExceeded: "Solo puedes subir como máximo 10 imagenes.",
                            dictInvalidFileType: "No puedes subir archivos de este tipo.",
                        });

                        myDropzone1.on("addedfile", (file) => {
                            fileInput1.push(file);
                        });

                        myDropzone1.on("removedfile", (file) => {
                            let i = fileInput1.indexOf(file);
                            fileInput1.splice(i, 1);
                        });

                        preloader.hide();

                        $("#modalTemplate").modal({
                            backdrop: "static",
                            keyboard: false,
                        });

                        $("#modalTemplate").modal("show");

                        $("#btnClose").on("click", () => {
                            limpiaDrop();
                            limpiaDrop1();
                            $("#modalTemplate").modal("hide");
                            $("#btnClose").off("click");
                        });

                        $("#guardarDocumentos").on("click", () => {
                            let nameServicio = $("#nameServicio").val();
                            let mini_Descipcion = $("#mini_Descipcion").val();
                            let descipcion = $("#descipcion").val();
                            let iconService = $("#iconService").val();
                            let conocer_mas = $("#conocer_mas").val();

                            if (nameServicio && mini_Descipcion && descipcion && iconService && conocer_mas) {
                            } else {
                                Swal.fire({
                                    icon: "warning",
                                    title: "",
                                    text: "Debes llenar los datos para poder guardar.",
                                });
                                return false;
                            }

                            if (fileInput.length > 0) {
                            } else {
                                Swal.fire({
                                    icon: "warning",
                                    title: "",
                                    text: "Debes agregar una imagen poder guardar.",
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

                            if (fileInput1.length > 0) {
                                for (i = 0; i < fileInput1.length; i++) {
                                    if (fileInput1[i].status != "success") {
                                        console.log(fileInput1[i].status);
                                        if (fileInput1[i].status == "uploading") {
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
                                    formData.append("Adjunto1_" + i, fileInput1[i]);
                                }
                                formData.append("NoDocs1", fileInput1.length);
                            } else {
                                formData.append("NoDocs1", 0);
                            }

                            formData.append(
                                "fechaRegistroH",
                                new Date().toLocaleString("sv-SE").split(" ")[0] + "T" + new Date().toLocaleString("sv-SE").split(" ")[1]
                            );

                            formData.append("nameServicio", nameServicio);
                            formData.append("mini_Descipcion", mini_Descipcion);
                            formData.append("descipcion", descipcion);
                            formData.append("icon", iconService);
                            formData.append("conocer_mas", conocer_mas);

                            Swal.fire({
                                title: "",
                                text: "¿Estas seguro de querer guardar este Servicio?",
                                icon: "question",
                                showCancelButton: true,
                                confirmButtonColor: "#7066e0",
                                cancelButtonColor: "#FF0037",
                                confirmButtonText: "OK",
                                cancelButtonText: "Cancelar",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    preloader.show();
                                    guardaServicios(formData);
                                }
                            });
                        });

                        function guardaServicios(adjuntos) {
                            $.ajax({
                                url: "./views/edita/guardaServicios.php",
                                type: "POST",
                                data: adjuntos,
                                contentType: false,
                                processData: false,
                            }).done(function (results) {
                                console.log(results);
                                let reresult = String(results).replace(/(\r\n|\n|\r)/gm, "");
                                console.log(reresult);
                                if (reresult == "200") {
                                    preloader.hide();
                                    limpiaDrop();
                                    limpiaDrop1();
                                    $("#nameServicio").val("");
                                    $("#mini_Descipcion").val("");
                                    $("#descipcion").val("");
                                    $("#iconService").val("");
                                    $("#divNuevoServicio").css("display", "none");
                                    $("#modalTemplate").modal("hide");
                                    $("#btnClose").off("click");
                                    traeServicios();
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
                                    limpiaDrop1();
                                    Swal.fire({
                                        icon: "warning",
                                        title: "",
                                        text: "Algo salio mal vuelve a intentarlo.",
                                    });
                                }
                            });
                        }

                        $("#conocer_mas").change(() => {
                            if ($("#conocer_mas").val() == 1) {
                                $("#conocerMasImgs").css("display", "block");
                            } else {
                                $("#conocerMasImgs").css("display", "none");
                            }
                        });
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

function nuevoServicio() {
    $("#divNuevoServicio").css("display", "block");
}

function traeServicios() {
    preloader.show();
    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traeServicios.php",
        data: {},
    })
        .done(function (results) {
            let success = results.success;
            let result = results.result;
            let aux = 0,
                html = "";
            switch (success) {
                case true:
                    if (result == "Sin Datos") {
                        preloader.hide();
                    } else {
                        result.forEach((data, index) => {
                            div_Servicios;
                            if (aux == 0) {
                                aux++;
                                html += `<div class="row">
                                <div class="col-lg-6 mb-5">
                                    <div class="row align-items-center">
                                        <div class="col-sm-5">
                                            <img class="img-fluid mb-3 mb-sm-0" src="${data.imgUrl}" alt="" />
                                        </div>
                                        <div class="col-sm-7">
                                            <h4><i class="${data.icon}"></i>${data.name}</h4>
                                            <p class="m-0">${data.mini_descripcion}</p>
                                            ${
                                                data.conocer_mas == 1
                                                    ? `
                                            <div>
                                                <button
                                                    class="btn btn-primary btn-block font-weight-bold py-3"
                                                    onclick="traeDetallesServicio(${data.ID}, '${data.name}', '${data.icon}', '${data.descripcion}')"
                                                    style="color: #fff"
                                                >
                                                    Conocer más
                                                </button>
                                            </div>`
                                                    : ``
                                            }
                                        </div>
                                    </div>
                                </div>`;
                            } else {
                                aux = 0;
                                html += `
                                    <div class="col-lg-6 mb-5">
                                        <div class="row align-items-center">
                                            <div class="col-sm-5">
                                                <img class="img-fluid mb-3 mb-sm-0" src="${data.imgUrl}" alt="" />
                                            </div>
                                            <div class="col-sm-7">
                                                <h4><i class="${data.icon}"></i>${data.name}</h4>
                                                <p class="m-0">${data.mini_descripcion}</p>
                                                ${
                                                    data.conocer_mas == 1
                                                        ? `
                                                <div>
                                                    <button
                                                        class="btn btn-primary btn-block font-weight-bold py-3"
                                                        onclick="traeDetallesServicio(${data.ID}, '${data.name}', '${data.icon}', '${data.descripcion}')"
                                                        style="color: #fff"
                                                    >
                                                        Conocer más
                                                    </button>
                                                </div>`
                                                        : ``
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                            }
                        });

                        if (aux == 0) {
                        } else {
                            html += `</div>`;
                        }
                        $("#div_Servicios").html(html);
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

function saveDataContacto() {
    let nombre_in = $("#nombre_in").val();
    let email_in = $("#email_in").val();
    let mensaje = $("#mensaje").val();
    if (!nombre_in) {
        return false;
    }

    if (!email_in) {
        return false;
    }

    if (!mensaje) {
        return false;
    }

    preloader.show();
    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/contacto/saveDataContacto.php",
        data: { nombre_in, email_in, mensaje },
    })
        .done(function (results) {
            let success = results.success;
            let result = results.result;
            switch (success) {
                case true:
                    Swal.fire({ icon: "success", title: "", text: "Mensaje enviado correctamente." });
                    $("#nombre_in").val("");
                    $("#email_in").val("");
                    $("#mensaje").val("");
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
