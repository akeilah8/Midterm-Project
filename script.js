
$(".salad").click(function() {
    $(".lobster").hide();
    $(".salad-img").slideDown();
    $(".first-img").hide();
    $(".salad").hide();
    $(".lobster-event").hide();
    $(".choose-event").text("This was the safer option since you can’t cook. Double click the salad to see how your party turned out");

$(".salad-img").dblclick(function() {
    $(".salad-img").hide();
    $(".second-salad").slideDown();
    $(".choose-event").text("Nobody comes to a party just to eat salad. Everyone left hungry and disspointed. You failed the party");
});
});
$(".lobster").click(function() {
    $(".lobster-img").slideDown();
    $(".first-img").hide();
   $(".lobster").hide();
    $(".choose-event").text("You are noticing that you are having a hard time making this meal since you cant cook. You can go back to the autumn salad option, or click the image to continue");
    
$(".lobster-img").dblclick(function() {
    $(".lobster-img").hide();
    $(".second-lobster").slideDown();
    $(".salad").hide();
    $(".choose-event").text("Due to your poor cooking skills you have caused a fire. Click the fire to try to extinguish it and see how your party turned out");
    
$(".second-lobster").click(function() {
    $(".second-lobster").hide();
    $(".third-lobster").slideDown();
    $(".choose-event").text("The guest come to a burned house, they had left hungry and disspointed. You have failed the party");


});   
});
});