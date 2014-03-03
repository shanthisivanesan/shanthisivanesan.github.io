$(document).ready(function () {
	$('input.srch-typeahead').typeahead({
     name: 'products',
     template:'<p><strong><i>{{name}}</i></strong>:&nbsp;{{value}}</p>',
     local: [
        {   name:'Modality',
            value:'CR'
        },
        {   name:'Modality',
            value:'CT'
        },
        {   name:'Modality',
            value:'MR'
        },
        {   name:'Modality',
            value:'MG'
        },
        {   name:'Modality',
            value:'US'
        },
        {   name:'Subspecialty',
            value:'Bone'
        },
        {   name:'Subspecialty',
            value:'Body'
        },
        {   name:'Physician',
            value:'John Smith'
        }
     ],
      engine: Hogan
    });

$('input.srch-typeahead').on('change', onChange);

});
});