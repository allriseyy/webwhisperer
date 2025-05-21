$(function() {
	setupCommonUIComponents();
});

function displayDialog(fn) {
	return function(response) {
		if(response.indexOf("j_spring_security_check") > 0) {
			window.location=contextPath + "/session-expired";
			return;
		}
		
		if (typeof dialog != 'undefined') {
			dialog.remove();
		}
		dialog = $(response).dialog({ modal : true });
		setupCommonUIComponents();
		
		if (fn) {
			fn();
		}
	};
}

function bindDialogToLink(linkSelector, fn) {
	$(linkSelector).click(function (event) {
		event.preventDefault();
		$.get($(this).attr("href") + '?ajax=true')
			.error(
					function(jqXHR, thing1, thing2) {
						dialog.html("We're very sorry, but there was an error - please try again");
						console.log("Error loading dialog: " + thing1 + "    " + thing2);
					}
			)
			.done(displayDialog(fn));
	});
}

function setupCommonUIComponents() {
/*

    January – Ionawr
    February – Chwefror
    March -  Mawrth
    April – Ebrill
    May – Mai
    June – Mehefin
    July –Gorffennaf
    August –Awst
    September – Medi
    October - Hydref
    November - Tachwedd
    December –Rhagfyr

 Monday Dydd Llun
 Tuesday Dydd Mawrth
 Wednesday Dydd Mercher
 Thursday Dydd Iau
 Friday Dydd Gwener
 Saturday Dydd Sadwrn
 Sunday Dydd Sul

    */

    $.datepicker.regional['cy'] = {
        monthNames: ['Ionawr','Chwefror','Mawrth','Ebrill','Mai','Mehefin',
            'Gorffennaf','Awst','Medi','Hydref','Tachwedd','Rhagfyr'],
        monthNamesShort: ['Ionawr','Chwefror','Mawrth','Ebrill','Mai','Mehefin',
            'Gorffennaf','Awst','Medi','Hydref','Tachwedd','Rhagfyr'],
        dayNames: ['Dydd Llun ','Dydd Mawrth ','Dydd Mercher ','Dydd Iau ','Dydd Gwener ','Dydd Sadwrn ','Dydd Sul'],
        dayNamesMin: ['Ll','Ma','Me ','Ia','Gw','Sa','Su']
    };

    if (locale == 'cy') {
        $.datepicker.setDefaults($.datepicker.regional['cy']);
    }

    $(".datepicker").datepicker({
        dateFormat : 'dd/mm/yy',
        buttonImageOnly : true,
        buttonImage : "/crsc/resources/graphics/icons/calendar.png",
        showOn : "button",
        yearRange : "-112:-0",
        changeMonth: true,
        changeYear: true
    });

	$('.print-link').show();
	$('.print-link a').click(function() {
		window.print();
		return false;
	});

	$('a.back').show();
	$('a.back').click(function() {
		parent.history.back();
	    return false;
	});
}


function setCookie(cookieName, cookieValue) {
	document.cookie = cookieName + "=" + escape(cookieValue);
}

function readCookie(cookieName) {
	var theCookie = " " + document.cookie;
	var ind = theCookie.indexOf(" " + cookieName + "=");
	if (ind == -1)
		ind = theCookie.indexOf(";" + cookieName + "=");
	if (ind == -1 || cookieName == "")
		return "";
	var ind1 = theCookie.indexOf(";", ind + 1);
	if (ind1 == -1)
		ind1 = theCookie.length;
	return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
}


function deleteCookie(cookieName) {
	$.cookie(cookieName, null);
}