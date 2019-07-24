/**
 * 
 */
$(document).ready(function(){
	var inputValue;
    $('input').click(function(){
        inputValue = $(this).attr("value");
        
        if(inputValue=="StandAlone")
    	{
    	$("#Bundle").css("display","none");
    	$("#StandAlone").css("display","block");
    	}
        else if(inputValue=="Bundle")
    	{
    	$("#StandAlone").css("display","none");
    	$("#Bundle").css("display","block");
    	}
        if(inputValue=="addYes"){
        	$("#addYes").css("display","block");
        }
        else if(inputValue=="addNo"){
        	$("#addYes").css("display","none");
        }
        	
        if($(this).prop("checked") == true){
        	
        	$('#'+inputValue).css("display","block");
        }
        
        if($(this).prop("checked") == false)
    	{
        	$('#'+inputValue).css("display","none");
    	}
       
    });
        

});