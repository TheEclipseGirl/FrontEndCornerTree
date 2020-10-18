$(document).ready(function(){

    $('#seeker-btn').click(() => {
        $('#recruiter-form').css({display: "none"});
        $('#seeker-form').css({display: "block"});
        $('#seeker-btn').css({backgroundColor: "orange"});
        $('#recruiter-btn').css({backgroundColor: " #7e79ac"});
    });

    $('#recruiter-btn').click(() => {
        $('#seeker-form').css({display: "none"});
        $('#recruiter-form').css({display: "block"});
        $('#recruiter-btn').css({backgroundColor: "orange"});
        $('#seeker-btn').css({backgroundColor: " #7e79ac"});

    });

}); 