const newSearchInput = document.getElementById('searchInput');
newSearchInput.addEventListener('input', function () {
	filterMenu(this.value);
});

function filterMenu(searchText) {
	const resultList = document.getElementById('result-list');

	if (!searchText) {
		resultList.innerHTML = '';
		resultList.style.background = 'none';
		resultList.style.border = 'none';
		return;
	}

	const linksOfMenu = [
		{ name: 'Vanilla Latte', id: 'vanilla-latte' },
		{ name: 'Espresso', id: 'espresso' },
		{ name: 'Hazelnut Latte', id: 'hazelnut-latte' },
		{ name: 'Sandwich', id: 'sandwich' },
		{ name: 'Cappuccino', id: 'cappuccino' },
		{ name: 'Hot Milk', id: 'hot-milk' },
		{ name: 'Coffee Ice Cream', id: 'coffee-ice-cream' },
		{ name: 'Moccacinno', id: 'moccacinno' },
		{ name: 'Waffle Ice Cream', id: 'waffle-ice-cream' },
	];

	resultList.textContent = '';
	let noResult = true;
	linksOfMenu.forEach(function (linkOfMenu) {
		if (linkOfMenu.name.toLowerCase().includes(searchText.toLowerCase())) {
			noResult = false;

			let filteredList = document.createElement('li');
			let filteredMenu = document.createElement('a');
			filteredMenu.textContent = linkOfMenu.name;
			filteredMenu.href = '#' + linkOfMenu.id;

			filteredMenu.addEventListener('click', function () {
				linksOfMenu.forEach(function (link) {
					let targetId = link.id;
					let targetElement = document.getElementById(targetId);
					if (targetElement) {
						targetElement.classList.remove('highlighted-menu-card');
						targetElement.classList.add('menu-card');
					}
				});

				let targetId = this.getAttribute('href').substring(1);
				let targetElement = document.getElementById(targetId);
				if (targetElement) {
					targetElement.classList.add('highlighted-menu-card');
					targetElement.classList.remove('menu-card');

					let searchInput = document.getElementById('searchInput');
					searchInput.value = linkOfMenu.name;
				}
				searchInput.value = '';
			});

			filteredList.appendChild(filteredMenu);
			resultList.appendChild(filteredList);
			resultList.style.background = 'white';
			resultList.style.borderRadius = '24px';
			resultList.style.border = '1px solid black';
		}
	});

	if (noResult === true) {
		noResult = document.createElement('li');
		noResult.textContent = 'No result';
		resultList.appendChild(noResult);
		resultList.style.background = 'white';
		resultList.style.borderRadius = '24px';
		resultList.style.border = '1px solid black';
	}
}

let elementeOnClick = document.querySelectorAll('.menu-card');

elementeOnClick.forEach(function (element) {
	element.addEventListener('click', function () {
		elementeOnClick.forEach(function (card) {
			card.classList.remove('highlighted-menu-card');
			card.classList.add('menu-card');
		});
		element.classList.add('highlighted-menu-card');
	});
});

let elementeOnClick1 = document.querySelectorAll('.card');

elementeOnClick1.forEach(function (element1) {
	element1.addEventListener('click', function () {
		elementeOnClick1.forEach(function (card1) {
			card1.classList.remove('highlighted-menu-card');
			card1.classList.add('menu-card');
		});
		element1.classList.add('highlighted-menu-card');
	});
});

let body = document.getElementById('body');
body.addEventListener('click', function (event) {
	let hiddenList = document.getElementById('result-list');
	hiddenList.innerHTML = '';
	hiddenList.style.background = 'none';
	hiddenList.style.border = 'none';

	let removedCards = document.querySelectorAll('.menu-card');
	removedCards.forEach((removedCard) => {
		if (event.target !== removedCard && !removedCard.contains(event.target)) {
			removedCard.classList.remove('highlighted-menu-card');
			removedCard.classList.add('menu-card');
		}
	});
});

const emailAdressInput = document.getElementById('email-adress');

emailAdressInput.addEventListener('input', function () {
	validareEmail(this.value);
});

function validareEmail() {
	const errorDiv = document.getElementById('error');
	const resultDiv = document.getElementById('result');

	if (emailAdressInput.value === '') {
		errorDiv.innerHTML = '';
		errorDiv.style.background = 'none';
		errorDiv.style.border = 'none';
		return;
	}

	const verificareEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (verificareEmail.test(emailAdressInput.value)) {
		document.getElementById('subscribe-button').onclick = function () {
			resultDiv.innerHTML = `Subscription successful <span>&#10004;</span>`;
			resultDiv.style.backgroundColor = 'white';
			resultDiv.style.borderStyle = 'solid';
			resultDiv.style.borderRadius = '35px';
			resultDiv.style.borderWidth = '1px';
			resultDiv.style.borderColor = 'green';
			resultDiv.style.color = 'green';
		};
		errorDiv.innerHTML = '';
		errorDiv.style.background = 'none';
		errorDiv.style.border = 'none';
		return;
	} else errorDiv.textContent = 'Please enter a valid email address!';
	errorDiv.style.backgroundColor = 'white';
	errorDiv.style.borderStyle = 'solid';
	errorDiv.style.borderRadius = '35px';
	errorDiv.style.borderWidth = '1px';
	errorDiv.style.borderColor = 'red';
	errorDiv.style.color = 'red';
	resultDiv.innerHTML = '';
	resultDiv.style.background = 'none';
	resultDiv.style.border = 'none';
}

let navbar = document.querySelector('nav');

window.addEventListener('scroll', function () {
	if (window.scrollY > 50) {
		navbar.classList.add('scrolled-nav');
	} else {
		navbar.classList.remove('scrolled-nav');
	}
});
