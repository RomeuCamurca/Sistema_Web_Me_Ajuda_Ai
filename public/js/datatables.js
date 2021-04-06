$(document).ready(function() {
    $('#id_da_tabela').DataTable({
        
        lengthMenu: [
        [10, 25, 50, 100],
        ['10 Colegas', '25 Colegas', '50 Colegas', '100 Colegas']
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