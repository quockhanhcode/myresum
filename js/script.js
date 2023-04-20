$(function(){
    $('a[href*=\\#]').on('click', function (event) {
        if(this.pathname === window.location.pathname){
            event.preventDefault();
            var distance = $("header").innerHeight();
            var href = $(this).attr("href").split("#");
            var destination = (href[1] || false);
            if (!destination) {
                console.log('Empty Anchor link.');
            }
            else {
                var target = ($("#"+destination).offset() || false);
                if (target) {
                    scroll(target, distance);
                }
                else {
                    alert("Wrong anchor link.\nPlease check your href.");
                }
            }
        }
    });
});

if (location.hash) {
    var hash = location.hash;
    var distance = $("header").innerHeight();
    var target = ($(hash).offset() || false);
    if (target) {
        scroll(target, distance);
    }
    else {
        console.log("Cannot find element with id=" + '"'+hash+'"' + ".\nPlease check your href.");
    }
}