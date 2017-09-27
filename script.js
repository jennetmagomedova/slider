window.onload=function() {
    var price = [];
    $.getJSON('test.json', function (data) {
        for (var i in data) {
            var newDiv = document.createElement('div');
            var newImg = document.createElement('img');
            newImg.setAttribute('src', data[i].picture);
            newImg.setAttribute('width', 100);
            newImg.setAttribute('height', 150)
            var newP = document.createElement('p');
            var newBr1 = document.createElement('br');
            var newBr2 = document.createElement('br');
            var newBr3 = document.createElement('br');
            var newButton = document.createElement('input');
            newButton.setAttribute('type', 'submit');
            newButton.setAttribute('value', 'Купить');
            newP.append(data[i].name);
            newP.appendChild(newBr1);
            if ((data[i].author.last || data[i].author.first) != "") {
                newP.append(data[i].author.last + " " + data[i].author.first);
                newP.appendChild(newBr2);
            }
            newP.append('Цена:' + data[i].price + " руб");
            if ((data[i].discount) != "0") {
                var discountSize;
                newP.appendChild(newBr3);
                if (data[i].typediscount === "P") {
                    discountSize = (+data[i].price) * data[i].discount / 100;
                }
                if (data[i].typediscount === "F") {
                    discountSize = data[i].discount;
                }
                newP.append("Скидка: " + discountSize.toFixed(2) + " руб");
            }
            newDiv.appendChild(newImg);
            newDiv.appendChild(newP);
            newDiv.appendChild(newButton);
            document.getElementById('slider').appendChild(newDiv);
        }
    });
}
$(function() {
    var slider=$('.slider'),
        width=$('#slider-box').width(),
        slideCount = $('.slider div').length,
        slideWidth = $('#slider-box').outerWidth(),
        prev = $('#slider-box #prev'),
        next = $('#slider-box #next'),
        course=1,
        margin = - slideWidth,
        animateTime=1000,
        sliderInterval=4000;
        slider.css('margin-left', -width);
    slider.css('margin-left', -slideWidth);
    function nextSlide(){
        interval = window.setInterval(animate, sliderInterval);
    }
    function animate(){
        margin = margin - slideWidth*(course);
        slider.animate({'marginLeft':margin},animateTime);
    }
    prev.click(function() {
        var course2 = course;
        course = -1;
        animate();
        course = course2 ;
    });
    next.click(function() {
        var course2 = course;
        course = 1;
        animate();
        course = course2 ;
    });
    });





