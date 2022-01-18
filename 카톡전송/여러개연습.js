
// $('.tab-button').eq(0).click(function(){ 
//   $('.tab-button').removeClass('active'); 
//   $('.tab-content').removeClass('show'); 

//   $('.tab-button').eq(0).addClass('active'); 
//   $('.tab-content').eq(0).addClass('show'); 
// });

// $('.tab-button').eq(1).click(function(){ 
//   $('.tab-button').removeClass('active'); 
//   $('.tab-content').removeClass('show'); 

//   $('.tab-button').eq(1).addClass('active'); 
//   $('.tab-content').eq(1).addClass('show'); 
// });

// $('.tab-button').eq(2).click(function(){ 
//   $('.tab-button').removeClass('active'); 
//   $('.tab-content').removeClass('show'); 

//   $('.tab-button').eq(2).addClass('active'); 
//   $('.tab-content').eq(2).addClass('show'); 
// }); 이걸 축약할것


// 축약한것
// for (let i = 0; i < $('.tab-button').length; i++){
//   $('.tab-button').eq(i).click(function(){ 
//     탭열기(i)
//   });
// }
// 축약한것 end

// 축약 함수 선언
function 탭열기(숫자){
  $('.tab-button').removeClass('active'); 
  $('.tab-content').removeClass('show'); 
  
  $('.tab-button').eq(숫자).addClass('active'); 
  $('.tab-content').eq(숫자).addClass('show'); 
}


// if문을 이용한 문법
// $('.list').click(function(e){
//   for(let i = 0; i < $('.tab-button').length; i++){
//   if(e.target == document.querySelectorAll('.tab-button')[i]){
//     탭열기(i)
//   };
// }
// });

// 몰래 기입한 정보를 이용한 방법
$('.list').click(function(e){
  탭열기(e.target.dataset.id)
});

// 제이쿼리방식
// $('.tab-button').eq(0).data('a', '0');
// $('.tab-button').eq(1).data('a', '1');
// $('.tab-button').eq(2).data('a', '2');

// $('.list').click(function(e){
//   탭열기(e.target.$('.tab-button').data('a'))
// });

// function dd(e){
// console.log(e.target.$('.tab-button').data('a'))
// }

// $('.tab-button').eq(i).on('click', function(){
//   $('.tab-button').eq(i).addClass('active');
//   $('.tab-button').not($(this)).removeClass('active');
  
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(i).addClass('show');
// });
// 내가짠거