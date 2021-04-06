$(document).ready(function() {
    $('#id_da_tabela').DataTable({
        
        dom: 'Bfrtip',
        
        buttons: [
        'csv',
        {
            extend: 'excel',
            text: 'PLANILHA'
        },
        'pdf',
        {
            extend: 'print',
            text: 'IMPRIMIR',
        },
        {
            extend: 'copy',
            text: 'COPIAR'
        }
        ],
        
        "language" : {
            "lengthMenu" : "Mostrando _MENU_ por página",
            "zeroRecords" : "Nada encontrado",
            "info" : "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty" : "Nenhum registro disponível",
            "search" : "Buscar:",
            "infoFiltered" : "(filtrado de _MAX_ registros no total)",
            "paginate" : {
                "first" : "Primeiro",
                "last" : "Último",
                "next" : "Próximo",
                "previous" : "Anterior"
            }
        }
        
    });
});