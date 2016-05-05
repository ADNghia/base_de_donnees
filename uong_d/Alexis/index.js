$(function () {
   
    $('#recherche').keyup(function (){

	if (this.value == '')
{
	$('#result').empty();
	    return;
}
	$.ajax({ url:'index.php',
		 method:'GET',
		 data:'q='+this.value,
		 success: function(data){
		console.log(data);
		$('#result').empty();
		     $( "#recherche" ).autocomplete({
			 source: data});		  
		    
		    }}
	      )
})})

