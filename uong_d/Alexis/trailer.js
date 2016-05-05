function        decorate (){
    $('body').append('<div>');
    $($('div')[0]).attr('id', 'content');
    $($('div')[0]).attr('style', 'width: 100%');
    $('#content').append('<div>').append('<div>');
    $($('div','div[style="width: 100%"]')[1]).attr('id', 'animation2');
    $('#animation2').attr('style', 'width: '+(100/2)+'%; height: 0%; top: 0%; left: '+(100/4)+'%; position: absolute; display: block; float: left; background-color: rgba(143, 143, 143, 0.64);');
    $('#animation2').animate({
        height: (100/1.5)+'%',
    }, 1000, "linear" );
}