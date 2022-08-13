$(document).ready(function () {
    $("button").on('click', function () {
        $('h3').show();
    });
    $(".test").dblclick(function () {
        $('this').hide();
    });

    // Button Show and Hide

    $("#show").click(function () {
        $('.sh_p').show(1000);
        $(this).css({
            'border': 'none',
            'background-color': 'blue',
            'width': '200px',
            'height': '50px',
            'color': 'white',
            'font-weight': 'bold',
        });
    });
    $("#hide").click(function () {
        $('.sh_p').hide(1000);
        $(this).css({
            'border': 'none',
            'background-color': 'green',
            'width': '200px',
            'height': '50px',
            'color': 'white',
            'font-weight': 'bold',
        });
    });

    // Show and Hide in One Button
    $(".sh_hi_but").click(function () {
        $('.sh_hi_p').toggle(1000);
    });

    // FADEIN Effect 
    $(".fad_in_but").click(function () {
        $('.fad_in_1').fadeIn();
        $('.fad_in_2').fadeIn("slow");
        $('.fad_in_3').fadeIn(3000);
    });

    // FADEOUT Effect 
    $(".fad_out_but").click(function () {
        $('.fad_out_1').fadeOut(1000);
        $('.fad_out_2').fadeOut(2000);
        $('.fad_out_3').fadeOut(3000);
    });

    // FADETOGGLE Effect 
    $(".fad_tog_but").click(function () {
        $('.fad_tog_1').fadeToggle(1000);
        $('.fad_tog_2').fadeToggle(1800);
        $('.fad_tog_3').fadeToggle(2400);
    });

    // FADETO Effect 
    $(".fad_to_but").click(function () {
        $('.fad_to_1').fadeTo(1000, .80);
        $('.fad_to_2').fadeTo(2000, .50);
        $('.fad_to_3').fadeTo(2500, .30);
    });

    // Slide Down Effect
    $("#sli_dow_pan").click(function () {
        $('#sli_dow_tex').slideDown();
    });

    // Slide Up Effect
    $("#sli_up_pan").click(function () {
        $('#sli_up_tex').slideUp();
    });

    // Slide Toggle Effect
    $(".sli_tog_pan").click(function () {
        $('.sli_tog_tex').slideToggle();
    });

    // Slide Stop Effect
    $(".sto_eve").click(function () {
        $('.').stop();
    });



    // Animating JQuery
    // $("#lef_anim_but").click(function () {
    //     $('#lef_anim_blo').animate({
    //         left: '1340px',
    //     });
    // });

    $("#big_anim_but").click(function () {
        $('#big_anim_blo').animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px',
        })
    });

    $(".tog_hei_but").click(function () {
        $('.tog_hei_blo').animate({
            height: 'toggle',
        })
    });

    $(".sho_lon_tog_but").click(function () {
        var sho_lon_tog = $(".sho_lon_tog")
        sho_lon_tog.animate({ height: '300px', opacity: '0.4' }, "slow");
        sho_lon_tog.animate({ width: '300px', opacity: '0.8' }, "slow");
        sho_lon_tog.animate({ height: '100px', opacity: '0.4' }, "slow");
        sho_lon_tog.animate({ width: '100px', opacity: '0.8' }, "slow");
    });

    $(".bi_sm_but").click(function () {
        var bi_sm_tex = $(".bi_sm_tex")
        bi_sm_tex.animate({ left: '500px' }, "slow");
        bi_sm_tex.animate({ fontSize: '4rem', height: '200px', width: '150px' }, "slow");
    });


    // This JS is for Alert

    // $(".test").mouseenter(function () {
    //     alert("Hey Guys");
    //  });
    //  $(".test1").mousedown(function (){
    //      alert("Don't Mouse Down Me");
    //  })
    //  $(".test2").mouseup  (function (){
    //      alert("Don't Mouse Up Me");
    //  })

    // This JS is for Hover

    // $(".para").hover(function () {
    //     alert("You entered p1!");
    // },
    //     function () {
    //         alert("Bye! You now leave p1!");
    //     });
    $('.inp_1').focus(function () {
        $(this).css({
            'background-color': 'red',
            'color': 'white',
        })
    });
});