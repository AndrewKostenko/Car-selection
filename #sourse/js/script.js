//header menu
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
	if (window.scrollY < 1) {
		header.classList.remove('active')
	} else {
		header.classList.add('active')
	}
})




// intro slider
new Swiper('.intro_inner', {
	spaceBetween: 1000,
	allowTouchMove: true,
	pagination: {
		el: ".intro_pagination",
		clickable: true,
		renderBullet: function (index, className) {
			if (index < 10) {
				return '<span class="' + className + '">0' + (index + 1) + "</span>";
			} else {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			}
		},
	},
})


//check slider
new Swiper('.check_slider', {
	slidesPerView: "auto",
	freeMode: true,
	spaceBetween: 30,
	pagination: {
		el: ".check_pagination",
	},
	breakpoints: {
		1000: {
			slidesPerGroup: 3,
			slidesPerView: 3,
			freeMode: false,
		},
	}
})

//car big slider
new Swiper('.car_slider', {
	allowTouchMove: false,
	noSwiping: false,
	spaceBetween: 200,
	pagination: {
		el: ".car_pagination",
		clickable: true,
		renderBullet: function (index, className) {
			if (index < 10) {
				return '<span class="' + className + '">0' + (index + 1) + "</span>";
			} else {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			}
		},
	},
});

//car small slider
let carTopSlider = new Swiper('.item-car_slider', {
	spaceBetween: 10,
	allowTouchMove: true,
	pagination: {
		el: ".item-car_pagination",
		clickable: true,
	},
});

//look form select
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	/* For each element, create a new DIV that will act as the selected item: */
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/* For each element, create a new DIV that will contain the option list: */
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		/* For each option in the original select element,
		create a new DIV that will act as an option item: */
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			/* When an item is clicked, update the original select box,
			and the selected item: */
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/* When the select box is clicked, close any other select boxes,
		and open/close the current select box: */
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {
	/* A function that will close all select boxes in the document,
	except the current select box: */
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);




let menuIntro = document.querySelectorAll(".header_menu a");

for (elem of menuIntro) {
	elem.addEventListener('click', function () {
		event.preventDefault();

		let scrollElem = document.querySelector(`#${event.target.getAttribute('data-scrollTo')}`);

		scrollElem.scrollIntoView({ block: "center", behavior: "smooth" })
	})
}