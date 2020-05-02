function chinaLunar() {
    var y0 = document.form1.year.value;
    var n = (y0 - 1000) % 60 + 1;
    var z = n % 12;
    if (z == 0) z = 12;
    var name = new Array('', 'Крыса', 'Бык', 'Тигр', 'Кролик', 'Дракон', 'Змея', 'Лошадь', 'Овца', 'Обезьяна', 'Петух', 'Собака', 'Свинья');
    $('.lunar-year').text(name[z]);
}

function learn_sign() {
    var date = document.form1.day.value;
    var month = document.form1.month.value;

    with (document.form1.znak) {
        if (month == 1 && date >= 20 || month == 2 && date <= 18) value = "Водолей";
        else if (month == 2 && date >= 19 || month == 3 && date <= 20) value = "Рыбы";
        else if (month == 3 && date >= 21 || month == 4 && date <= 19) value = "Овен";
        else if (month == 4 && date >= 20 || month == 5 && date <= 20) value = "Телец";
        else if (month == 5 && date >= 21 || month == 6 && date <= 21) value = "Близнецы";
        else if (month == 6 && date >= 22 || month == 7 && date <= 22) value = "Рак";
        else if (month == 7 && date >= 23 || month == 8 && date <= 22) value = "Лев";
        else if (month == 8 && date >= 23 || month == 9 && date <= 22) value = "Дева";
        else if (month == 9 && date >= 23 || month == 10 && date <= 22) value = "Весы";
        else if (month == 10 && date >= 23 || month == 11 && date <= 21) value = "Скорпион";
        else if (month == 11 && date >= 22 || month == 12 && date <= 21) value = "Стрелец";
        else if (month == 12 && date >= 22 || month == 1 && date <= 19) value = "Козерог";
        else value = "Неверная дата!";

        if ((date < 1) || (month == 2 && date > 29)) value = "Неверная дата!";
        if ((month == 1 || 3 || 5 || 7 || 8 || 10 || 12) && date > 31) value = "Неверная дата!";
        if (month == 4 && date > 30 || month == 6 && date > 30 || month == 9 && date > 30 || month == 11 && date > 30) {
            value = "Неверная дата!";
        }


    }
    $('.lunar-date').text(document.form1.znak.value);
    // if ((month == 4 || 6 || 9 || 11) && date > 30) {
}


function getAge() {
    var day = document.form1.day.value;
    var month = document.form1.month.value;
    var year = document.form1.year.value;

    var today = new Date();
    var birthDate = new Date(year, month - 1, day); // 'month - 1' т.к. нумерация месяцев начинается с 0
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    $('.your-age').text(age + ' ' + declOfNum(age, ['год', 'года', 'лет']));
    $('.your-birthDate').text(birthDate.getDate() + '.' + Number(birthDate.getMonth() + 1) + '.' + birthDate.getFullYear());
}

function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}


$(document).ready(function () {
    $('.js-submit').on('submit', function (e) {
        e.preventDefault();
        chinaLunar();
        learn_sign();
        getAge();
        $('.your-name').text(document.form1.name.value);
        $('.step-1').hide();
        $('.step-2').show();
        window.scrollTo(0, 0);

        var yourName = $('form[name="form1"] input[name="name"]').val();
        $('form[name="form2"] input[name="name"]').val(yourName);
    });

    $('.step-2_submit').click(function () {
        $('.step-2').hide();
        $('.step-3').show();
        window.scrollTo(0, 0);
    });
});

var resultWrapper;
var wheel;
$(document).ready(function () { 
    resultWrapper = document.querySelector('.spin-result-wrapper');
    wheel = document.querySelector('.wheel-img');

	$('.close-popup, .pop-up-button').click(function(e){
		e.preventDefault();
		$('.spin-result-wrapper').fadeOut();

		var top = $('#roulette').offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});
});

function spin() {
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('super-rotation');
        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function () {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
            start_timer();
        }, 10000);
        wheel.classList.add('rotated');
    }
}



var time = 600;
var intr;
function start_timer() {
	intr = setInterval(tick, 1000);
}

function tick() {
	time = time-1;
	var mins = Math.floor(time/60);
	var secs = time - mins*60;
	if( mins == 0 && secs == 0 ) {
		clearInterval(intr);
	}
	secs = secs >= 10 ? secs : "0"+secs;
	$("#min").html("0"+mins);
	$("#sec").html(secs);
}


$(document).ready(function () { 
    $(function () {
        $("a[href^='#']").click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        }); 
    });
});