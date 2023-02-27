jQuery(document).ready(function($){
    $('#example').DataTable({
      language: {
        lengthMenu: "Elija _MENU_ datos a mostrar",
        info: "Datos obtenidos desde Pages",
        search: "Buscar",
        paginate: {
          first:      "Premier",
          last:       "Précédent",
          next:       "Siguiente",
          previous:   "Anterior"
        }
      }
    });
  });