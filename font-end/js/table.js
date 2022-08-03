try {
    var table_content =  document.getElementsByClassName('table-content')[0];
    if(table_content){
        table_content.addEventListener("scroll", function(event){
            var element = document.getElementsByClassName('table-header')[0];
            var scroll_x = event.target.scrollLeft; 
			if(scroll_x > 0) {
                let translateXValue = -scroll_x + "px";
                // console.log(translateXValue);
                element.style.transform = `translateX(${translateXValue})`
            }else if(scroll_x < 40){
                element.style.transform = `translateX(0)`
            }
        });
    }
} catch (error) {
    console.log(error)
}