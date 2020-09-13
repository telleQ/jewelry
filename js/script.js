//первая строка нужна, чтобы скрипт начал срабатывать только после загрузки страницы.
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__menu').click(function () {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	// Slider
	let btnnext = document.querySelector(".slider__next");
	let btnprev = document.querySelector(".slider__prev");
	let slide = document.querySelector(".slider__imgs");
	let imgs = ["imgs/content/10.jpg", "imgs/content/7.jpg", "imgs/content/8.jpg"];
	let count = 0;
	btnnext.addEventListener("click", () => {
		if (count >= imgs.length) {
			count = 0;
		}
		if (count < 0) {
			count = imgs.length - 1;
		}
		slide.setAttribute("src", imgs[count]);
		count++;
	});

	btnprev.addEventListener("click", () => {
		if (count < 0) {
			count = imgs.length - 1;
		}
		if (count >= imgs.length) {
			count = 0;
		}
		slide.setAttribute("src", imgs[count]);
		count--;
	});

	//Создаем индикатор выбранной картинки, при нажатии на 1ый - получаем 1ю картинку, при нажатии 2ой получаем вторую и тд., и индикатор выбранной картинки подсвечивается другим цветом.
	// Можно указать так, но на учебном ПК не работало slide.setAttribute("src", imgs[this.dataset.lide]); highlight(this); - тогда в html - в теге li нужно добавить указание по индексации, пример <li class="lib" data-lide="0"></li>, при указании "slide.setAttribute("src", imgs[i]); highlight(bullet[i]); не нужно прописывать доп индексирование в теге li"
	let bullet = document.querySelectorAll(".slider__bullet li");
	for (let i = 0; i < bullet.length; i++) {
		bullet[i].addEventListener("click", function () {
			slide.setAttribute("src", imgs[this.dataset.slide]);
			highlight(this);
		});
	}

	// setInterval(function () {
	// 	if (count >= imgs.length) {
	// 		count = 0;
	// 	}
	// 	slide.setAttribute('src', imgs[count]);
	// 	highlight(bullet[count]);
	// 	count++;
	// }, 2000);

	let selected;

	function highlight(node) {
		if (selected) {
			selected.classList.remove("active");
		}
		selected = node;
		selected.classList.add("active");
	}
});