 function cancelDialog(e) {
	if (e) {
		e.preventDefault();
	}
	dialog.dialog('close');
}

$(function() {
	
	bindDialogToLink("a#certificateWhatsThis", function() {
		$('#cancel').click(cancelDialog);
	});
    
	// JavaScript is enabled, so - remove the non-JS submission mechanism...
	$('#nonJsSubmit').remove();
	
	// Display the JS version...
	$('#jsSubmit').show();
	
	// Hook up the Webflow event
	$('#subscriberDetailsForm').append(
			'<input name="_eventId_submit" type="hidden" value="" />');

	// ... and make sure the Terms popup appears
	$('#jsSubmit').click(function() {
		if($('.terms-and-conditions').length == 0) {
			$.get( '/terms.html', function (response) {
				dialog = $(response).dialog({
                    dialogClass: "no-close",
					modal : true, 
					open: function(event, ui) {
                        configureTermsPopup();
                    },
                    close: function(event, ui) {
                        dialog.dialog("destroy").remove();
                    }
				});
				setupCommonUIComponents();
			});		    
		} else {
			dialog = $('.terms-and-conditions').dialog({
                dialogClass: "no-close",
				modal : true, 
				open: function(event, ui) {
                    configureTermsPopup();
                },
                close: function(event, ui) {
                    dialog.dialog("destroy").remove();
                }
			});
		}
	});
	
});

function configureTermsPopup() {
	$('#agreeTerms').click(function() {
		var ticked = $(this).prop('checked');

		if (ticked) {
			$('#continue').removeAttr('disabled');
		} else {
			$('#continue').attr('disabled', 'disabled');
		}
	});

	$('a#cancel').click(function(e) {
		e.preventDefault();
		dialog.dialog('destroy').remove();
	});
	
	if ($('#agreeTerms').prop('checked') == true) {
		$('#continue').removeAttr('disabled');
	} else {
		$('#continue').attr('disabled', 'disabled');
	}
}