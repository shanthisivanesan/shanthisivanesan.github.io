'use strict';
/*global $:false */

$(function () {
    $("a").tooltip();
    $('.carousel').carousel({
        interval: 2000
    });
    $(".collapse").collapse();
    $("#sky").click(function () {
        $("#skyModal").modal();
    });
    $("#hike").click(function () {
        $('#hikepop').popover('show');
    });
    $('#hikepop').popover({
        html: true,
        title: "Hiking spot",
        placement: 'bottom',
        container: 'body',
        content: function () {
            return $('#hiking-content').html();
        }
    });

    $(".interest").click(function () {
        //$(".nature").removeClass("hidden");
        $(".int").addClass("hidden");
        var interest = $(this)[0].innerText;
        switch (interest) {
            case "Photo":
                $("#nature").removeClass("hidden");
                break;
            case "Family":
                $("#family").removeClass("hidden");
                break;
            case "Yoga":
                $("#other").removeClass("hidden");
                break;
            case "Hackathon":
                $("#hack").removeClass("hidden");
                break;
            case "Health":
                $("#health").removeClass("hidden");
                break;
            case "Drawing":
                $("#draw").removeClass("hidden");
                break;
        }
    });
    $(".project").click(function () {
        $(".proj").addClass("hidden");
        var projects = $(this)[0].innerText;
        //alert(projects);
        switch (projects) {
            case "Web":
                $("#web").removeClass("hidden");
                break;
            case "Big Data":
                $("#bigdata").removeClass("hidden");
                break;
            case "ASP.NET":
                $("#asp").removeClass("hidden");
                break;
            case "Android Apps":
                $("#Android").removeClass("hidden");
                break;
            case "DS & Alg":
                $("#ds").removeClass("hidden");
                break;
            case "iPhone Apps":
                $("#iPhone").removeClass("hidden");
                break;
        }
    });


    $('input.srch-typeahead').typeahead({
        name: 'products',
        template: '<p><strong><i>{{name}}</i></strong>:&nbsp;{{value}}</p>',
        local: [
        { name: 'Projects',
            value: 'Web'
        },
        { name: 'Interest',
            value: 'Hackathon'
        },
        { name: 'About',
            value: 'Me'
        },
        { name: 'Index',
            value: 'Home'
        },
        { name: 'Interest',
            value: 'Photos'
        },
        { name: 'Projects',
            value: 'Android'
        },
        { name: 'Projects',
            value: 'Analytics'
        },
        { name: 'Projects',
            value: 'ASP.NET'
        }
     ],
        engine: Hogan,
        updater: function (selection) {
            console.log("You selected: " + selection)
        }
    });



    $('#filterBox').on('typeahead:selected', function (e, v, k) {
        //that.eventHandler_(v.key, v.name, true);
        var val = $(this)[0].value;
        switch (val) {
            case "Analytics":
            case "ASP.NET":
            case "Android":
            case "Web":
                {
                    console.log("You selected: " + val)
                    window.location.href = "projects.html";
                    break;
                }
            case "Home":
                {
                    console.log("You selected: " + val)
                    window.location.href = "index.html";
                    break;
                }
            case "Photos":
            case "Hackathon":
                {
                    console.log("You selected: " + val)
                    window.location.href = "interest.html";
                    break;
                }
            case "Me":
                {
                    console.log("You selected: " + val)
                    window.location.href = "about.html";
                    break;
                }
        }
    });
});


