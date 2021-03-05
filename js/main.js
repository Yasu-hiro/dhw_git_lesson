$(function(){
    console.log($('＃h２Title_text').text());
});

$(function(){
    $('#h3Title_02').text('テキストを変更します');
});

$(function(){
    var text = 'テキスト';

    console.log(text);
    text = 'テキストの上書き';
    console.log(text);
});

$('#dog').on('click', function(){
    $('#dog > img').attr('src', 'img/dog.png');
});