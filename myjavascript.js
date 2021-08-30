$(document).ready(function() {
    $(".imgSet").hover(function() {
        $(this).find(".funcChar").toggleClass("active")
    }); 

    if ($(window).width() < 1070) {
        //如果是小視窗的話
        $('.myHeader').css('display', 'none');
        $('#burger').css('display', 'unset');

    } else {
        $('.myHeader').css('display', 'flex');
        $('#burger, #burgerDiv').css('display', 'none');
        $('body').css('width', '100%');
        $('footer p, footer a ').css('font-size', '16px');
    };

    $(window).resize(function() {
        if ($(window).width() < 1070) {
            $('.myHeader').css('display', 'none');
            $('#burger, #burgerDiv').css('display', 'unset');

        } else {
            $('.myHeader').css('display', 'flex');
            $('#burger, #burgerDiv').css('display', 'none');
            $('body').css('width', '100%');
            $('footer p, footer a ').css('font-size', '16px');
        }
    });

    $("#burger").on('click', function() {
        $('.hideContainer').fadeToggle(1000);
        $('.cover, video').css('width', '75%');
        $('body').css('width', '75%');
        $('footer img').css('width', '100px');
        $('footer p, footer a ').css('font-size', '12px');
        $(".hideContainer").on('hover', function() {
            $('.hideContainer').css('display', 'unset');
            $('body').css('width', '75%');
            $('footer img').css('width', '100px');
            $('footer p, footer a ').css('font-size', '12px');
        });

    });

    $("body").on('mousemove', function(e) {

        if ($(window).width() - e.screenX > 200) {
            $('.hideContainer').css('display', 'none');
            $('body').css('width', '100%');
            $('footer p, footer a ').css('font-size', '16px');
        };
    });

    $('#count').on('click', function() {
        console.log('duration=(hr)' + $('#duration').val());
        console.log('interval=' + $('#interval option:selected').val());
        console.log('playback=' + $('#playback option:selected').val());
        var a = $('#duration').val();
        var b = $('#interval option:selected').val();
        var c = $('#playback option:selected').val();
        if (isNaN($('#duration').val())) {
            alert(a + ' is not a number. Please enter a number');
        } else {　
            var result = a * 3600 / b / c;
            var min = Math.floor(result / 60);
            var sec = result % 60;
            console.log(min);
            console.log(sec);
            $('#result').text(`${min} min ${sec} sec`);
            $('#result').css({ 'color': 'red', 'font-weight': 'bolder' });
        };
    });

    $("#subscribeBtn").on('click', function() {
        console.log('ok');
        console.log($('#subscribeMail').val());

        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var urmail = $('#subscribeMail').val();

        if (!regex.test(urmail)) {
            alert('The Email format is wrong. Please enter again! ');

        } else {
            alert('Thanks for your subscribe! ' + urmail);
        };
    });



});