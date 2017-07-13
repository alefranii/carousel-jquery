
$(function(){
    $('#slider div:gt(0)').hide(); //Con gt(x) seleccionamos todos los div a partir del número x y lo escondemos 
    setInterval(function(){
    	$('#slider div:first-child').fadeOut(0)
    	.next('div').fadeIn(500)
    	.end().appendTo('#slider');}, 5000);

    $(".slick-carousel").click(function(){
    	$("#slider").carousel(1);
    });

    $(".carousel-control").click(function(){
    	$("#slider").carousel("prev");
    });
});
