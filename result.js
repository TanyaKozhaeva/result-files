//click outside
var form = document.querySelector('.mainScreen__form');
    	var f = document.querySelectorAll(".form-input");
    	document.addEventListener('click', function(event){
		var isClickInside = form.contains(event.target);
		if(!isClickInside){
			[].forEach.call(f, function(f) {
        f.classList.remove("is-open");
    });
			
};


//Nav
function toggleMobileMenu(){
	var nav = document.getElementById("mainNav"),
	openBtn = document.getElementById("toggle-navigation-btn"),
	closeBtn = document.getElementById("navCloseBtn"),
	itemWithSub = nav.querySelectorAll(".nav__item_with-sub");
	[].forEach.call(itemWithSub, function(items) {
        items.addEventListener("click", function(e) {
        	[].forEach.call(itemWithSub, function(item){
        		if(e.currentTarget != item){
        			item.classList.remove("is-open")
        		} else {
        			item.classList.toggle("is-open")
        		}
        	})
            
        })
    })
	openBtn.onclick = function() {
        nav.classList.add("nav_open")
    }
    ;
    closeBtn.onclick = closeNav;
    nav.addEventListener('click', function(e){
    	if(e.target.classList.contains('nav-wrap')){
    		closeNav();
    	}
    });

    function closeNav(){
        nav.classList.remove("nav_open");
        [].forEach.call(itemWithSub, function(e) {
            e.classList.remove("is-open")
        })
    }
}