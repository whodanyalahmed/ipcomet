jQuery(document).ready(function () {
	jQuery('#submit').on('click',document,function(){
				jQuery("#colocationpage").validate({
					submitHandler : function (e) {
						submitSignupFormNow(jQuery("#colocationpage"))
					},
					rules : {
						name : {
							required : true
						},
						email : {
							required : true,
							email : true
						},
						comments : {
							required : true
						}
					},
					errorElement : "span",
					errorPlacement : function (e, t) {
						e.appendTo(t.parent())
					}
				});
				submitSignupFormNow = function (e) {
					var t = e.serialize();
					var n = "colocation-form.php";
					jQuery.ajax({
						url : n,
						type : "POST",
						data : t,
						success : function (e) {
							var t = jQuery.parseJSON(e);
							if (t.status = "Success") {
								jQuery("#form_result").html('<span class="form-success">' + t.msg + "</span>")
							} else {
								jQuery("#form_result").html('<span class="form-error">' + t.msg + "</span>")
							}
							jQuery("#form_result").show();
						}
					});
					return false
				}
	});
	
})
