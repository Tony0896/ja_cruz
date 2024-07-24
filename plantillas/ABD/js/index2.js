function traeDetallesServicio(ID, name, icon, descipcion) {
    preloader.show();

    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traeDetallesServicio.php",
        data: { ID },
    })
        .done(function (results) {
            let success = results.success;
            let result = results.result;
            let html = "";
            switch (success) {
                case true:
                    if (result == "Sin Datos") {
                        $("#modalContent0").html(
                            `<div style="padding: 20px;">
                                    <h4><i class="${icon}"></i>${name}</h4>
                                    <p class="m-0">${descipcion}</p>
                                    <hr style="margin-top: 0" />
                                </div>
                                ${html}
                                ${
                                    localStorage.getItem("AccesoUsuario")
                                        ? `<div style="text-align: center;margin-top: 50px;">
                                <button
                                        type="button"
                                        class="btn btn-outline-primary btn_editInfo"
                                        onclick="addImagesService(${ID})"
                                        style="margin-left: 20px;"
                                    >
                                        <i class="fas fa-plus-circle"></i>
                                    </button>
                                </div>
                                
                                <div id="div_drop" style="padding: 20px 50px;display:none;"></div>`
                                        : ""
                                }
                                `
                        );
                        $("#myModal").modal("show");
                        preloader.hide();
                        localStorage.getItem("AccesoUsuario") ? crearElementToaddimmg(ID) : null;
                    } else {
                        html = '<div> <div class="containerImages">';
                        result.forEach((data, index) => {
                            html += `<div id="divImg_${data.ID}">
                                <div class="boxImage" style="display: flex; justify-content: center; align-items: center">
                                    <img
                                        id="imgServices_${data.ID}"
                                        onclick="Imgs(this.id)"
                                        class="ImageABD"
                                        src="${data.imgUrl}"
                                        style="max-width: -webkit-fill-available;max-height: -webkit-fill-available;max-height: -webkit-fill-available;"
                                    />
                                    <div style="position: absolute;">
                                    ${
                                        localStorage.getItem("AccesoUsuario")
                                            ? `<div style="text-align: center;">
                                    <button
                                            type="button"
                                            class="btn btn-outline-danger btn_editInfo"
                                            onclick="deleteImgServices(${data.ID})"
                                        >
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div> `
                                            : ""
                                    }
                                    </div>
                                </div>
                            </div>
                            `;
                        });

                        html += ` </div> </div>`;

                        $("#modalContent0").html(
                            `<div style="padding: 20px;">
                                <h4><i class="${icon}"></i>${name}</h4>
                                <p class="m-0">${descipcion}</p>
                                <hr style="margin-top: 0" />
                            </div>
                            ${html}
                            ${
                                localStorage.getItem("AccesoUsuario")
                                    ? `<div style="text-align: center;margin-top: 50px;">
                            <button
                                    type="button"
                                    class="btn btn-outline-primary btn_editInfo"
                                    onclick="addImagesService(${ID})"
                                    style="margin-left: 20px;"
                                >
                                    <i class="fas fa-plus-circle"></i>
                                </button>
                            </div>
                            
                            <div id="div_drop" style="padding: 20px 50px;display:none;"></div>`
                                    : ""
                            }`
                        );

                        $("#myModal").modal("show");
                        preloader.hide();
                        localStorage.getItem("AccesoUsuario") ? crearElementToaddimmg(ID) : null;
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

function editaInfoServicios() {
    preloader.show();
    $("#exampleModalLabel").html("Editar");
    let html = '<div class="mb-3" style="overflow: auto;"> <table> <thead> <tr><td>Servicio</td><td>Visible</td></tr></thead><tbody>';
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
                        let estatus = 1;
                        result.forEach((data, index) => {
                            data.visible_servicios == 1 ? (estatus = "checked") : (estatus = "");
                            html += `<tr>
                                <td>${data.name}</td>
                                <td> <input type="checkbox" class="ui-checkbox" onchange="cambiaVisibleServicio(${data.ID})" id="cboxService_${data.ID}" ${estatus}> </td>
                            </tr>`;
                        });

                        html += `</tbody>
                            </table>
                        </div>
                        `;
                        htmlFooter = `<button type="button" class="btn btn-primary" onclick="nuevaPromo()" style="color:#FFF;">Nuevo</button>`;

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

function eliminaServicio(ID) {
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
                url: "./views/edita/eliminaServicio.php",
                data: { ID },
            })
                .done(function (results) {
                    let success = results.success;
                    let result = results.result;
                    switch (success) {
                        case true:
                            traerServiciosActivos();
                            traeServicios();
                            Swal.fire({ icon: "success", title: "", text: "Eliminado correctamente." });
                            preloader.hide();
                            $("#td_btn_Service_" + ID).html("");
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

function traerServiciosActivos() {
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
            let html = "";
            switch (success) {
                case true:
                    if (result == "Sin Datos") {
                        preloader.hide();
                    } else {
                        result.forEach((data, index) => {
                            if (data.visible_servicios == 1) {
                                html += `<h5 class="mb-3"><i class="fa fa-check text-primary mr-3"></i>${data.name}</h5>`;
                            }
                        });
                        $("#serviciosActivos").html(html);
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

function cambiaVisibleServicio(ID) {
    preloader.show();
    let visible;

    if ($("#cboxService_" + ID).prop("checked")) {
        visible = 1;
    } else {
        visible = 0;
    }

    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/cambiaVisibleServicio.php",
        data: { ID, visible },
    })
        .done(function (results) {
            let success = results.success;
            let result = results.result;
            switch (success) {
                case true:
                    traerServiciosActivos();
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

function deleteImgServices(ID) {
    Swal.fire({
        title: "Aviso",
        text: "¿Esta seguro de querer eliminar esta imagen?",
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
                url: "./views/edita/deleteImgServices.php",
                data: { ID },
            })
                .done(function (results) {
                    let success = results.success;
                    let result = results.result;
                    switch (success) {
                        case true:
                            Swal.fire({ icon: "success", title: "", text: "Eliminado correctamente." });
                            preloader.hide();
                            $("#divImg_" + ID).html("");
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

function crearElementToaddimmg(ID) {
    console.log("crearElementToaddimmg");
    $("#div_drop").html(`<div class="row">
        <div class="col-12">
            <label for="imageTestimonio" class="form-label">Imagenes</label>
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
            <button type="button" class="btn btn-outline-primary btn_editInfo" id="guardarImages"> 
                <i class="fas fa-save"></i>
            </button>
        </div>
        <div class="col-5"> &nbsp; </div>
    </div>`);

    function limpiaDrop() {
        myDropzone.removeAllFiles();
    }

    let fileInput = [];
    let myDropzone = new Dropzone("#dropzoneBF", {
        url: "/",
        maxFilesize: 500, // MB
        maxFiles: 10, //CANTIDAD DE ARCHIVOS A SUBIR
        acceptedFiles: "image/jpeg, image/png, image/jpg",
        addRemoveLinks: true, // QUITAR ARCHIVOS AGREGADOS
        dictRemoveFile: "Remover",
        paramName: "file", // The name that will be used to transfer the file
        createImageThumbnails: true,
        dictDefaultMessage: "Agregar archivo(s).",
        dictMaxFilesExceeded: "Solo puedes subir como máximo 10 imagenes.",
        dictInvalidFileType: "No puedes subir archivos de este tipo.",
    });

    myDropzone.on("addedfile", (file) => {
        fileInput.push(file);
    });

    myDropzone.on("removedfile", (file) => {
        let i = fileInput.indexOf(file);
        fileInput.splice(i, 1);
    });

    $(".close").on("click", () => {
        limpiaDrop();
        $(".close").off("click");
    });

    $("#guardarImages").on("click", () => {
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
            Swal.fire({
                icon: "warning",
                title: "",
                text: "No haz cargado aún imagenes.",
            });
            return false;
        }

        formData.append("fechaRegistroH", new Date().toLocaleString("sv-SE").split(" ")[0] + "T" + new Date().toLocaleString("sv-SE").split(" ")[1]);

        formData.append("FKServicio", ID);

        Swal.fire({
            title: "",
            text: "¿Estas seguro de querer guardar estas Imagenes?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#7066e0",
            cancelButtonColor: "#FF0037",
            confirmButtonText: "OK",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                preloader.show();
                guardarImgservices(formData);
            }
        });
    });

    function guardarImgservices(adjuntos) {
        $.ajax({
            url: "./views/edita/guardarImgservices.php",
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
                $(".close").off("click");
                $("#myModal").modal("hide");
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

function addImagesService() {
    $("#div_drop").css("display", "block");
}

function editGaleria() {
    preloader.show();
    $("#exampleModalLabel").html("Editar");
    let html = '<div class="mb-3" style="overflow: auto;"> <table> <thead> <tr><td>Texto</td><td></td></tr></thead><tbody>';
    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traeSeccionesGaleria.php",
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
                                <td>${data.name}</td>
                                <td id="td_btn_${data.ID}"> 
                                    <button type="button" class="btn btn-outline-danger btn_editInfo" onclick="eliminaSeccionGaleria(${data.ID})"> 
                                        <i class="fas fa-trash"></i> 
                                    </button>
                                </td>
                            </tr>`;
                        });

                        html += `</tbody>
                            </table>
                        </div>
                        <div class="row" style="display:none;" id="divNuevaSeccionGaleria">
                            <div class="col-10">
                                <input type="text" class="form-control" id="input_name" autocomplete="off">
                            </div>
                            <div class="col-2">
                                <button type="button" class="btn btn-outline-primary btn_editInfo" onclick="guardaSeccionGaleria()"> 
                                    <i class="fas fa-save"></i> 
                                </button>
                            </div>
                        </div>
                        `;
                        htmlFooter = `<button type="button" class="btn btn-primary" onclick="nuevaSeccionGaleria()" style="color:#FFF;">Nuevo</button>`;

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

function nuevaSeccionGaleria() {
    $("#divNuevaSeccionGaleria").css("display", "flex");
}

function guardaSeccionGaleria() {
    let input_name = $("#input_name").val();

    if (input_name) {
        preloader.show();
        $.ajax({
            method: "POST",
            dataType: "JSON",
            url: "./views/edita/guardaSeccionGaleria.php",
            data: { input_name },
        })
            .done(function (results) {
                let success = results.success;
                let result = results.result;
                switch (success) {
                    case true:
                        traeSeccionesGaleria();
                        $("#exampleModal").modal("hide");
                        $("#input_name").val("");
                        Swal.fire({ icon: "success", title: "", text: "Guardado correctamente." });
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

function traeSeccionesGaleria() {
    preloader.show();

    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traeSeccionesGaleriaWhitImg.php",
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
                        let auxID = 0,
                            html = ``,
                            objectValores = {},
                            objImgs = [];
                        result.forEach((data, index) => {
                            if (auxID == data.IDSecc) {
                            } else {
                                html += `<div class="row"> 
                                    <div class="col-lg-12"> 
                                        <h1 class="mb-5">${data.name} 
                                        ${
                                            localStorage.getItem("AccesoUsuario")
                                                ? `<button type="button" class="btn btn-outline-danger btn_editInfo" onclick="addImagesServices(${data.IDSecc})">
                                                <i class="fas fa-edit"></i>
                                            </button>`
                                                : ""
                                        }

                                        </h1> 
                                        <div id="carouselExampleIndicators${
                                            data.IDSecc
                                        }" class="carousel slide" data-ride="carousel" data-interval="3000"> 
                                            <div class="carousel-inner">
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                                auxID = data.IDSecc;
                            }
                            // console.log(data);
                            if (data.imgUrl) {
                                if (data.estatus == 1) {
                                    let idcampo = `${data.IDSecc}`;
                                    if (objectValores[idcampo]) {
                                        valor = Number(objectValores[idcampo].valor) + 1;
                                        objectValores[idcampo] = { valor };
                                    } else {
                                        objectValores[idcampo] = { valor: 1 };
                                    }
                                    let IDSecc = data.IDSecc;
                                    let imgUrl = data.imgUrl;
                                    let ID = data.ID;
                                    objImgs = [...objImgs, { IDSecc, imgUrl, ID }];
                                }
                            }
                        });
                        console.log(objectValores);
                        console.log(objImgs);
                        $("#div_seccionesGaleria").html(html);
                        html = "";
                        let auxObjID = 0,
                            auxCouunt = 0,
                            auxObjDot = 0;
                        objImgs.forEach((data, index) => {
                            if (auxObjID == data.IDSecc) {
                                // console.log(auxObjID, data.IDSecc, auxObjDot);
                                // console.log("data =>", data);
                                if (auxObjDot == 0) {
                                    // console.log(1);
                                    html += `<div class="carousel-item">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="item" style="height: 500px; display: flex; justify-content: center; align-items: center">
                                                <img
                                                    id="img_servicess_${data.ID}"
                                                    onclick="Imgs(this.id)"
                                                    class="ImageABD"
                                                    src="${data.imgUrl}"
                                                    style="max-width: -webkit-fill-available;max-height: -webkit-fill-available;max-height: -webkit-fill-available;"
                                                />
                                            </div>
                                        </div>`;

                                    // console.log("<1>", html);
                                    auxObjDot++;
                                    auxCouunt++;
                                } else {
                                    // console.log(2);
                                    html += `<div class="col-lg-6">
                                                <div class="item" style="height: 500px; display: flex; justify-content: center; align-items: center">
                                                    <img
                                                        id="img_servicess_${data.ID}"
                                                        onclick="Imgs(this.id)"
                                                        class="ImageABD"
                                                        src="${data.imgUrl}"
                                                        style="max-width: -webkit-fill-available;max-height: -webkit-fill-available;max-height: -webkit-fill-available;"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
                                    // console.log("<2>", html);
                                    auxObjDot = 0;
                                    auxCouunt++;
                                }
                            } else {
                                // console.log(auxObjID, data.IDSecc, auxObjDot);
                                // console.log("data =>", data);
                                // console.log(3);
                                if (index == 0) {
                                    // console.log(4);
                                    html = `<div class="carousel-item active">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="item" style="height: 500px; display: flex; justify-content: center; align-items: center">
                                                            <img
                                                                id="img_servicess_${data.ID}"
                                                                onclick="Imgs(this.id)"
                                                                class="ImageABD"
                                                                src="${data.imgUrl}"
                                                                style="max-width: -webkit-fill-available;max-height: -webkit-fill-available;max-height: -webkit-fill-available;"
                                                            />
                                                        </div>
                                                    </div>`;
                                    // console.log("<3>", html);
                                    auxObjID = data.IDSecc;
                                    auxObjDot++;
                                    auxCouunt++;
                                } else {
                                    // console.log(5);
                                    let htmlOL = '<ol class="carousel-indicators" style="position: relative; margin-top: 40px">';
                                    let valorFor = Number(auxCouunt / 2).toFixed();
                                    for (let index = 0; index < valorFor; index++) {
                                        // console.log(auxObjID, "v=>", valorFor, index);
                                        if (index == 0) {
                                            htmlOL += `<li data-target="#carouselExampleIndicators${auxObjID}" data-slide-to="${index}" class="active" style="opacity: 1"></li>`;
                                        } else {
                                            htmlOL += `<li data-target="#carouselExampleIndicators${auxObjID}" data-slide-to="${index}" style="opacity: 1"></li>`;
                                        }
                                    }

                                    htmlOL += "</ol>";
                                    auxCouunt = 1;
                                    if (auxObjDot == 1) {
                                        // console.log(51);
                                        html += ` </div> </div>`;
                                    }
                                    // console.log("<5>", html);
                                    // console.log("pinta =>", auxObjDot, auxObjID);

                                    $("#carouselExampleIndicators" + auxObjID + " > div.carousel-inner").html(html);
                                    $("#carouselExampleIndicators" + auxObjID).append(htmlOL);

                                    html = "";
                                    html += `<div class="carousel-item active">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="item" style="height: 500px; display: flex; justify-content: center; align-items: center">
                                                            <img
                                                                id="img_servicess_${data.ID}"
                                                                onclick="Imgs(this.id)"
                                                                class="ImageABD"
                                                                src="${data.imgUrl}"
                                                                style="max-width: -webkit-fill-available;max-height: -webkit-fill-available;max-height: -webkit-fill-available;"
                                                            />
                                                        </div>
                                                    </div>`;
                                    auxObjID = data.IDSecc;
                                    auxObjDot = 1;
                                }
                                // console.log(6);
                            }
                        });

                        // console.log(55);
                        let htmlOL = '<ol class="carousel-indicators" style="position: relative; margin-top: 40px">';
                        let valorFor = Number(auxCouunt / 2).toFixed();
                        for (let index = 0; index < valorFor; index++) {
                            // console.log(auxObjID, "v=>", valorFor, index);
                            if (index == 0) {
                                htmlOL += `<li data-target="#carouselExampleIndicators${auxObjID}" data-slide-to="${index}" class="active" style="opacity: 1"></li>`;
                            } else {
                                htmlOL += `<li data-target="#carouselExampleIndicators${auxObjID}" data-slide-to="${index}" style="opacity: 1"></li>`;
                            }
                        }
                        if (auxObjDot == 1) {
                            // console.log(56);
                            html += ` </div> </div>`;
                        }
                        // console.log("<55>", html);
                        // console.log("pinta =>", auxObjDot, auxObjID);

                        $("#carouselExampleIndicators" + auxObjID + " > div.carousel-inner").html(html);
                        $("#carouselExampleIndicators" + auxObjID).append(htmlOL);

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

function addImagesServices(ID) {
    console.log(ID);
    preloader.show();

    $.ajax({
        method: "POST",
        dataType: "JSON",
        url: "./views/edita/traeImgsService.php",
        data: { ID },
    })
        .done(function (results) {
            let success = results.success;
            let result = results.result;
            let html = "";
            switch (success) {
                case true:
                    if (result == "Sin Datos") {
                        $("#modalContent0").html(
                            `${html} ${
                                localStorage.getItem("AccesoUsuario")
                                    ? `<div style="text-align: center;margin-top: 50px;">
                                <button
                                        type="button"
                                        class="btn btn-outline-primary btn_editInfo"
                                        onclick="showaddImagesService(${ID})"
                                        style="margin-left: 20px;"
                                    >
                                        <i class="fas fa-plus-circle"></i>
                                    </button>
                                </div>
                                
                                <div id="div_drop_services" style="padding: 20px 50px;display:none;"></div>`
                                    : ""
                            }
                                `
                        );
                        $("#myModal").modal("show");
                        preloader.hide();
                        localStorage.getItem("AccesoUsuario") ? crearElementToaddimmgServices(ID) : null;
                    } else {
                        html = '<div> <div class="containerImages">';
                        result.forEach((data, index) => {
                            html += `<div id="divImgGal_${data.ID}">
                                <div class="boxImage" style="display: flex; justify-content: center; align-items: center">
                                    <img
                                        id="imgServices_Gal_${data.ID}"
                                        onclick="Imgs(this.id)"
                                        class="ImageABD"
                                        src="${data.imgUrl}"
                                        style="max-width: -webkit-fill-available;max-height: -webkit-fill-available;max-height: -webkit-fill-available;"
                                    />
                                    <div style="position: absolute;">
                                    ${
                                        localStorage.getItem("AccesoUsuario")
                                            ? `<div style="text-align: center;">
                                    <button
                                            type="button"
                                            class="btn btn-outline-danger btn_editInfo"
                                            onclick="galerydeleteImgServices(${data.ID})"
                                        >
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div> `
                                            : ""
                                    }
                                    </div>
                                </div>
                            </div>
                            `;
                        });

                        html += ` </div> </div>`;

                        $("#modalContent0").html(
                            `
                            ${html}
                            ${
                                localStorage.getItem("AccesoUsuario")
                                    ? `<div style="text-align: center;margin-top: 50px;">
                            <button
                                    type="button"
                                    class="btn btn-outline-primary btn_editInfo"
                                    onclick="showaddImagesService(${ID})"
                                    style="margin-left: 20px;"
                                >
                                    <i class="fas fa-plus-circle"></i>
                                </button>
                            </div>
                            
                            <div id="div_drop_services" style="padding: 20px 50px;display:none;"></div>`
                                    : ""
                            }`
                        );

                        $("#myModal").modal("show");
                        preloader.hide();
                        localStorage.getItem("AccesoUsuario") ? crearElementToaddimmgServices(ID) : null;
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

function crearElementToaddimmgServices(ID) {
    console.log("crearElementToaddimmgServices");
    $("#div_drop_services").html(`<div class="row">
        <div class="col-12">
            <label for="imageTestimonio" class="form-label">Imagenes</label>
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
            <button type="button" class="btn btn-outline-primary btn_editInfo" id="guardarImages"> 
                <i class="fas fa-save"></i>
            </button>
        </div>
        <div class="col-5"> &nbsp; </div>
    </div>`);

    function limpiaDrop() {
        myDropzone.removeAllFiles();
    }

    let fileInput = [];
    let myDropzone = new Dropzone("#dropzoneBF", {
        url: "/",
        maxFilesize: 500, // MB
        maxFiles: 10, //CANTIDAD DE ARCHIVOS A SUBIR
        acceptedFiles: "image/jpeg, image/png, image/jpg",
        addRemoveLinks: true, // QUITAR ARCHIVOS AGREGADOS
        dictRemoveFile: "Remover",
        paramName: "file", // The name that will be used to transfer the file
        createImageThumbnails: true,
        dictDefaultMessage: "Agregar archivo(s).",
        dictMaxFilesExceeded: "Solo puedes subir como máximo 10 imagenes.",
        dictInvalidFileType: "No puedes subir archivos de este tipo.",
    });

    myDropzone.on("addedfile", (file) => {
        fileInput.push(file);
    });

    myDropzone.on("removedfile", (file) => {
        let i = fileInput.indexOf(file);
        fileInput.splice(i, 1);
    });

    $(".close").on("click", () => {
        limpiaDrop();
        $(".close").off("click");
    });

    $("#guardarImages").on("click", () => {
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
            Swal.fire({
                icon: "warning",
                title: "",
                text: "No haz cargado aún imagenes.",
            });
            return false;
        }

        formData.append("fechaRegistroH", new Date().toLocaleString("sv-SE").split(" ")[0] + "T" + new Date().toLocaleString("sv-SE").split(" ")[1]);

        formData.append("FKServicio", ID);

        Swal.fire({
            title: "",
            text: "¿Estas seguro de querer guardar estas Imagenes?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#7066e0",
            cancelButtonColor: "#FF0037",
            confirmButtonText: "OK",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                preloader.show();
                guardarImgservices(formData);
            }
        });
    });

    function guardarImgservices(adjuntos) {
        $.ajax({
            url: "./views/edita/guardarImgservicesGalery.php",
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
                $(".close").off("click");
                $("#myModal").modal("hide");
                Swal.fire({
                    icon: "success",
                    title: "",
                    text: "Guardado correctamente.",
                });
                traeSeccionesGaleria();
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

function showaddImagesService() {
    $("#div_drop_services").css("display", "block");
}

function galerydeleteImgServices(ID) {
    Swal.fire({
        title: "Aviso",
        text: "¿Esta seguro de querer eliminar esta imagen?",
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
                url: "./views/edita/eliminaImagenGaleria.php",
                data: { ID },
            })
                .done(function (results) {
                    let success = results.success;
                    let result = results.result;
                    switch (success) {
                        case true:
                            Swal.fire({ icon: "success", title: "", text: "Eliminado correctamente." });
                            preloader.hide();
                            $("#divImgGal_" + ID).hide();
                            traeSeccionesGaleria();
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
