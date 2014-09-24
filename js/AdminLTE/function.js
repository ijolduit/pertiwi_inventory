
            $(document).ready(function() {
            
            $('#datetimepicker4').datetimepicker({
                  pickTime: false
                });
            $('#datetimepicker5').datetimepicker({
                  pickTime: false
                });
              });

            // Selectize
            $("#s2id_e1").select2({tags:["CPU-2014-09-0010", "CPU-2014-09-0012", "CPU-2014-09-0013", "CPU-2014-09-0014"]});
            $("#s2id_e2").select2({
    data:[{id:0,text:'Vendor A'},{id:1,text:'Vendor B'},{id:2,text:'Vendor C'},{id:3,text:'Vendor D'},{id:4,text:'Vendor E'}]
});