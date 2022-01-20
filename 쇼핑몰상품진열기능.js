var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

// 원래대로버튼
var 원래대로버튼 = [...products];

$('.btn-sort4').click(function(){
  $('.card').show('div');
  for(i=0; i<원래대로버튼.length; i++){
    $('.card-body p').eq(i).text('가격 : ' +원래대로버튼[i].price)
    $('.card-body h5').eq(i).text(원래대로버튼[i].title)
  }
});

// input
$('.form-price').on('submit', function(e){

if($('.input-price').val() == '60000'){
  e.preventDefault();

  var 필터 = products.filter(function(a){
    return a.price <= 60000;
  });

  필터
  
  $('.card-body p').eq(0).text('가격 : ' +필터[0].price)
  $('.card-body h5').eq(0).text('가격 : ' +필터[0].title)
  $('.card-body p').eq(1).text('가격 : ' +필터[1].price)
  $('.card-body h5').eq(1).text('가격 : ' +필터[1].title)

  for(i=2; i<=2; i++){
  $('.card').eq(i).hide('div');
  }
  
}
});



for(i=0; i<products.length; i++){
  $('.card-body p').eq(i).text('가격 : ' +products[i].price)
  $('.card-body h5').eq(i).text(products[i].title)
}

// 버튼을 누르면, 어레이 안의 price 오름차순으로 오브젝트를 순서대로 정렬시킨다.
// 가격정렬
$('.btn-sort').click(function(){
  $('.card').show('div');
  products.sort(function(a,b){
    return a.price - b.price
  });
  
  for(i=0; i<products.length; i++){
    $('.card-body p').eq(i).text('가격 : ' +products[i].price)
    $('.card-body h5').eq(i).text(products[i].title)
  }
  
})
// 이름정렬
$('.btn-sort2').click(function(){
  $('.card').show('div');
  products.sort(function(a,b){
    return a.title < b.title ? -1 : 0
  });
  
  for(i=0; i<products.length; i++){
    $('.card-body p').eq(i).text('가격 : ' +products[i].price)
    $('.card-body h5').eq(i).text(products[i].title)
  }
  
})

// 56만원 필터
var 필터 = products.filter(function(a){
  return a.price <= 60000;
});

$('.btn-sort3').click(function(){

  
  필터
// 5만원
  // $('.card-body p').eq(0).text('가격 : ' +필터[0].price)
  // 6만원
  $('.card-body p').eq(0).text('가격 : ' +필터[0].price)
  $('.card-body p').eq(1).text('가격 : ' +필터[1].price)
  $('.card-body h5').eq(0).text('가격 : ' +필터[0].title)
  $('.card-body h5').eq(1).text('가격 : ' +필터[1].title)


  
  // for(i=0; i<2; i--){
  //   $('.card-body p').eq(i).text('가격 : ' +필터[i].price)
  //   $('.card-body h5').eq(i).text(필터[i].title)
  // }
  
  var numb = products["length"] - 필터["length"];
  
  // 5만원
  // for(i=필터.length; i<=numb; i++)
  // $('.card').eq(i).hide('div');
  // return;
  // 6만원
  for(i=필터.length; i<=2; i++){
  $('.card').eq(i).hide('div');
  }
});


// console.log(
//   필터
// )

// 필터링 시키면, products 의 어레이 갯수ex)3 - 필터의 어레이 갯수ex)1 = ex)2 
// 현재 div card 갯수 3개. 즉 .card.eq[1]~eq[2] 까지 지워주면 된다.
// 그럼 1부터 ++ 시켜서 지워라. 근데 반복해라, =갯수만큼




var 숫자배열 = [5,1,7,13,51]

var 문자배열 = ['마','가','바','사','다','나','하']



// 문자배열.sort(function(a, b) {
//   return a > b ? (-1) : (a > b ? 1 : 0);
// });
// a > b 에서 ? 는 삼항연산자다. true 라면 좌항이, false 라면 우항이 적용됨


