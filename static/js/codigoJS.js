$(function () {
    tblCate = $('#data').DataTable({
        responsive: true,
        autoWidth: false,
        destroy: true,
        deferRender: true,
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrand del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "<span class='fa fa-angle-double-left'></span>",
                "sLast": "<span class='fa fa-angle-double-right'></span>",
                "sNext": "<span class='fa fa-angle-right'></span>",
                "sPrevious": "<span class='fa fa-angle-left'></span>"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
    
    });

    $('.btn-add').on('click', function () {

        $('#ModalNew').modal('show');

    });

    /** DELETE PRODUCT */
    $('#data tbody').on('click', 'a[rel="delete"]', function () {
    
        alert('Eliminado');
    });

    $('#data tbody').on('click', 'a[rel="status"]', function () {
    
        alert('Estado Cambiado');
    });

    $('#data tbody').on('click', 'a[rel="detail"]', function () {
        var tr = tblCate.cell($(this).closest('td, li')).index();
        var data = tblCate.row(tr.row).data();
        console.log(data);
    
        date = document.getElementById('detail-gender').innerHTML = data[0];
        total = document.getElementById('detail-mobile').innerHTML = data[4];
        iva = document.getElementById('detail-dni').innerHTML = data[0];
        sub_total = document.getElementById('detail-name_com').innerHTML = data[1] + ' ' + data[2];
        provider = document.getElementById('detail-name').innerHTML = data[1];

        $('#Modal_Detail').modal('show');
    
    })
    

});

