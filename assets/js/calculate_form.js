jQuery(document).ready(function ($) {
	$("#earn_as_publisher").validate({
		submitHandler : function (e){
			submitForm($("#earn_as_publisher"));
		},
		rules : {
			url : {
				required : true
			}
		},
		errorElement : "span",
		errorPlacement : function (e, t) {
			e.appendTo(t.parent())
		}
	});
	submitForm = function (e) {
		var t = e.serialize();
		var n = "calculate_form.php";


		jQuery.ajax({
			url : n,
			type : "POST",
			data : t,
			success : function (e) {
				var t = jQuery.parseJSON(e);
				if (t.status = "Success") {
					jQuery('.total_price').show();
					$('#msg_box2').addClass('alert alert-success');
				} else {
					jQuery('.total_price').hide();
					$('#msg_box2').addClass('alert alert-danger');
				}
				$('#msg_box2').html(t.msg).show();
			}
		});

		setTimeout(function(){ $('#msg_box2').html('').hide(); }, 5000);
		return false
	}
})
