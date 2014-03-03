	   
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


   $("#btnok").click(function(){
   var from= $("#fromdate").val();
   var to= $("#todate").val();
   if(to<from)
   {
        alert("Please Enter To Date > From Date");
   }
   else
   {
        alert(from +':'+to);
   }

   });

$('body').on('click', '.popover button.ok', function () {

   var from= $("#fromdate").val();
   var to= $("#todate").val();
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
        alert("Please Enter To Date > From Date");
         $("#todate").focus();
        return false;
   }
   else
   {
        alert(from +':'+to);
        $('#popoverId').popover('hide');
        $("#from").text(from);
        $("#to").text(to);
        return true;
   }

});
//popover
$('#popoverId').popover({
    html: true,
    title: "Date Time Picker",
    content: function () {
        return $('#popoverContent').html();
    }
});

