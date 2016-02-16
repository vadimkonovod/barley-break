$(function(){
    $(document)
        .on('click', '.myDiv', function() {
            var thisDiv = $(this);
            var n = thisDiv.text();

            switch (services.moveCell(+n)) {
                case 'up':
                    var str = thisDiv[0].style.top;
                    var newNum = (+str.slice(0, -2)) - 70;
                    var newVal = newNum + 'px';
                    thisDiv.animate({top: newVal}, 100);
                    break;
                case 'right':
                    var str = thisDiv[0].style.left;
                    var newNum = (+str.slice(0, -2)) + 70;
                    var newVal = newNum + 'px';
                    thisDiv.animate({left: newVal}, 100);
                    break;
                case 'down':
                    var str = thisDiv[0].style.top;
                    var newNum = (+str.slice(0, -2)) + 70;
                    var newVal = newNum + 'px';
                    thisDiv.animate({top: newVal}, 100);
                    break;
                case 'left':
                    var str = thisDiv[0].style.left;
                    var newNum = (+str.slice(0, -2)) - 70;
                    var newVal = newNum + 'px';
                    thisDiv.animate({left: newVal}, 100);
                    break;
                default:
                    break;
            }   
            services.checkWin();         
        })
        .on('click', '#btn', function() {
            services.init();
        })
        .on('click', '#ask', function() {
            services.checkWin(1);
        });
});