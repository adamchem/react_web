var emperor;
$.ajax({
  url:'data/emperor.json',
  type:'GET',
  dataType:'json'
}).done(function(data){
  emperor=data;
});   

$(function(){
  $('ul#menu li').mouseenter(function(){
    $(this).find('ul').slideDown('normal');
  });
  $('ul#menu li').mouseleave(function(){
    $(this).find('ul').css('display','none');
  });
  $('#Qing').on('click', 'li', {num: 0}, emperorSelect);
  $('#Ming').on('click', 'li', {num: 1}, emperorSelect);
  $('#SSong').on('click', 'li', {num: 2}, emperorSelect);
  $('#NSong').on('click', 'li', {num: 3}, emperorSelect);
  $('#Tang').on('click', 'li', {num: 4}, emperorSelect);
  $('#Han').on('click', 'li', {num: 5}, emperorSelect);
});

function emperorSelect(event){
  var index,
      array = ['year','name','title','reign','mound'];
    
  index = $(this).index();
  for(var i = 0, len = array.length; i < len; i++){
    $('.emperor span').eq(i).html(emperor[event.data.num][index][array[i]]);
  }
};