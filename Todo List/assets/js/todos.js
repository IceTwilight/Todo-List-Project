// $("li").click(function(){
//     $(this).toggleClass("completed");
//     // $(this).css('color', 'gray');
//     // $(this).css('text-decoration', 'line-through');

//     // $(this).css({
//     //     color: 'gray',
//     //     textDecoration: 'line-through' // 注意这个时候是textDecoration！！！
//     // });

// });//但是新的没反应

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});



// // 不然会propagation to higher level forex：li
// $("span").click(function(event){
//     $(this).parent().fadeOut(500, function(){
//         $(this).remove();
//     });//!!! 
//     event.stopPropagation();
// });

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        var todoText = $(this).val(); //这是个函数！
        // console.log(todoText);
        $(this).val('');

        $('ul').append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});

$('.fa-plus').click(function(){
    $('input[type="text"]').fadeToggle();
})