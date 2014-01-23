'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("wow");
		$('.jumbotron p').toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(submitClick);
}

//function projectClick(e) {
  //console.log("project clicked");
  //e.preventDefault();
  //$(this).css("background-color", "#7fff00");
//}
function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
      $(description).fadeOut();
    }
}

function submitClick(e) {
  var proj = $("#project").val();
  if (proj) {
    $(proj).animate({
      width: $("#width").val()
    });
    //$(proj).css("width", $("#width").val());
    if ($(proj).find(".project-description").css("display") != "none") {
      $(proj).find(".project-description").text($("#description").val());
    }
  }
}
