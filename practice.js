$(document).ready(function () {
    $('button').on('click', function () {
        $('h3').toggle();
    });
    $(".test").dblclick(function () {
        $('.test').hide();
    });

    // This JS is for Alert

    // $(".test").mouseenter(function () {
    //     alert("Hey Guys")
    //  });
    //  $(".test1").mousedown(function (){
    //      alert("Don't Mouse Down Me")
    //  })
    //  $(".test2").mouseup  (function (){
    //      alert("Don't Mouse Up Me")
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
    })
});