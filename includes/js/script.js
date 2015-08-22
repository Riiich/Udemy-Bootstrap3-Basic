/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function() {

	$('#alertMe').click(function(e) {

		e.preventDefault();	/* Act dafaultly */

		$('successAlert').slidedown();
	});

	$('a.pop').click(function(e) {
		e.preventDefault();	/* Act dafaultly: No refershing home page */
	});

	$('a.pop').popover();

	/* Select an attribute using [] */
	$('[rel="tooltip"]').tooltip();
});