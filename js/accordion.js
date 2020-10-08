function getAccordion(element_id,screen) 
{

	if ($(window).width() < screen) 
	{
		var concat = '';
		obj_tabs = $( element_id + " li.tab-listing" ).toArray();
		obj_cont = $( ".tab-content .tab-pane" ).toArray();
		jQuery.each( obj_tabs, function( n, val ) 
		{
			concat += '<div id="' + n + '" class="panel-default">';
			concat += '<div class="panel-heading" role="tab" id="heading' + n + '">';
			concat += '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsed' + n + '" aria-expanded="false" aria-controls="collapse' + n + '">' + val.innerText + '</a></h4>';
			concat += '</div>';
			concat += '<div id="collapsed' + n + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + n + '">';
			concat += '<div class="panel-body">' + obj_cont[n].innerHTML + '</div>';
			concat += '</div>';
			concat += '</div>';
		});
		$("#accordion").html(concat).addClass("panel");
		$("#accordion").find('.panel-collapse:first').addClass("show");
		$("#accordion").find('.panel-title a:first').attr("aria-expanded","true");
		$(element_id).hide();
		$(".tab-content").hide();
	}else{
		$(element_id).show();
		$(".tab-content").show();
		$("#accordion").empty().removeClass("panel");
	}

	$('#accordion').on('click','.panel-heading',function(){
		let i = $(this).closest(".panel-default").attr("id");
		$("#accordion .panel-default").not(`#${i}`).find('.show').removeClass('show');
	});	
}