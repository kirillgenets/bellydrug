if (document.querySelector('.product-info') != null) {
	initModalEventListeners();
}

if (document.querySelector('.silica-intro') != null) {
	initSilicaEventListeners();
}

if (document.querySelector('.hay-intro') != null) {
	initHayEventListeners();
}

function showModal(element) {

	element.classList.remove('hidden');

}

function hideModal(element) {

	element.classList.add('hidden');

}

function onShowDetailedButtonClick() {

	showModal(document.querySelector('.product-info'));

}

function onCloseDetailedButtonClick() {

	hideModal(document.querySelector('.product-info'));

}

function onOverlayEscKeyDown(evt) {

	if (evt.key === 'Escape') {
		hideModal(document.querySelector('.product-info'));
	}

}

function onOverlayClick(evt) {

	if (evt.target.className != 'product-info__content') {
		hideModal(document.querySelector('.product-info'));
	}

}

function initModalEventListeners() {

	document.querySelector('.product-info__cancel').addEventListener('click', onCloseDetailedButtonClick);
	document.querySelector('.product-info').addEventListener('click', onOverlayClick);
	document.addEventListener('keydown', onOverlayEscKeyDown);

}

function initSilicaEventListeners() {

	document.querySelector('.silica-intro__show-detailed').addEventListener('click', onShowDetailedButtonClick);

}

function initHayEventListeners() {

	document.querySelector('.hay-intro__show-detailed').addEventListener('click', onShowDetailedButtonClick);

}
