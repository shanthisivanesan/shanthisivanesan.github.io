    'use strict';
    $("#fromdate").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        format: 'yyyy/mm/dd',
        autoclose: true,
        keyboardNavigation: true,
        todayBtn: true
    });

    $('#fromdate').datepicker().on('changeDate', function (ev) {
        $(this).blur();
        $(this).datepicker('hide');
    });

    $("#todate").datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        format: 'yyyy/mm/dd',
        autoclose: true,
        keyboardNavigation: true,
        todayBtn: true
    });

    $('#todate').datepicker().on('changeDate', function (ev) {
        $(this).blur();
        $(this).datepicker('hide');
    });




    //Custom Datepicker
    $("#modalok").click(function () {
        event.preventDefault();
       
        //deleteTimeperiodFilters();
        var from = $('#fromdate').val();
        var to = $('#todate').val();
        if(from=="")
        {
            alert("Please Enter a From Date");
            $("#fromdate").focus();
            return false;
        }
        else if(to=="")
        {
            alert("Please Enter a To Date");
             $("#todate").focus();
            return false;
        }
        else if(to<from)
        {
            alert("Please Enter a valid to date(To Date > From Date)");
            $("#todate").focus();
            return false;
        }
        
        else
        {
            from = from.replace(/\//g, '');
            to=to.replace(/\//g, '');
            var val = from + ":" + to;
            alert(val);
            $('#datepickerModal').modal('hide');
            $("#from").text(from);
            $("#to").text(to);
            return true;
         }
    });
});