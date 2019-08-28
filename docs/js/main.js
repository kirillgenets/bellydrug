initEventListeners();

function showSilicaInfoModal() {

	document.querySelector('.product-info').classList.remove('hidden');

}

function hideSilicaInfoModal() {

	document.querySelector('.product-info').classList.add('hidden');

}

function onShowDetailedButtonClick() {

	showSilicaInfoModal();

}

function onCloseDetailedButtonClick() {

	hideSilicaInfoModal();

}

function onOverlayEscKeyDown(evt) {

	if (evt.key === 'Escape') {
		hideSilicaInfoModal();
	}

}

function onOverlayClick(evt) {

	if (evt.target.className != 'product-info__content') {
		hideSilicaInfoModal();
	}

}

function initEventListeners() {

	document.querySelector('.silica-intro__show-detailed').addEventListener('click', onShowDetailedButtonClick);
	document.querySelector('.product-info__cancel').addEventListener('click', onCloseDetailedButtonClick);
	document.querySelector('.product-info').addEventListener('click', onOverlayClick);
	document.addEventListener('keydown', onOverlayEscKeyDown);
}
