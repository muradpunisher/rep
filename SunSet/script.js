$(function () {
    $("img").css({
        width: "200px",
        margin: "20px",
        cursor: 'zoom-in'
    });

    let newArray = Array.from($("img"));

    newArray.forEach((element, index) => {
        if (index % 2 == 0) {
            element.style.float = "right";
        } else {
            element.style.float = "left";
        }
    });


    $("img").attr("title", "Cars");


    $('#bg').css({
        'width': '100%',
        'height': '100%',
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'background-position': 'center',
        'background-color': 'rgba(0,0,0,0.5)',
        position: 'fixed',
        top: 0,
        display: "none",
        'cursor': 'zoom-out'

    })


    $('img').click(function () {
        let imgPath = $(this).attr('src');
        $('#bg').css({
            'background-image': `url('${imgPath}')`,
            'display': 'block'
        })
    });

    $('#bg').click(function () {
        $('#bg').css({
            'display': 'none'
        })
    })


});