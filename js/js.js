$(document).ready(function(){
	$("bio").hide();  
	$("name").click(function(){
	 		$(".sketchfab-embed-wrapper").hide();  
	 		$("bio").show();
	 		$("bio").css("top","9vh");
		}
	);

});