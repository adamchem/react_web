var time,
    index = 0,
    photoURL=['image/pic_1.jpg','image/pic_2.jpg','image/pic_3.jpg','image/pic_4.jpg','image/pic_5.jpg'],
    photo = new Array();

for(var i = 0; i < photoURL.length; i++){
    photo[i] = new Image();
    photo.src = photoURL[i];
}

function photoChange(){
    $('.info img').fadeOut(500,function(){
        $(this).attr("src", photoURL[index]).load(function(){
            $(this).fadeIn(500);
        });
        // $(this).fadeIn(500);
        index++;
    })
    if(index >= photoURL.length){
        index = 0;
    }
    time = setTimeout("photoChange()",5000);
};
