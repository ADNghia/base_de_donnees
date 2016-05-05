$(function () {
    $('#langages').keyup(function (){
	if (this.value == '')
	    return;
	$.ajax({ url:'index.php',
		 method:'GET',
		 data:'q='+this.value,
		 success: function(data){
		     console.log(data);
		 }})
    })
})

