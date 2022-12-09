function updateOrientation(e) {
	a = document.querySelector('#alpha')
	b = document.querySelector('#beta')
	g = document.querySelector('#gamma')
	a.value = e.alpha
	b.value = e.beta
	g.value = e.gamma
}

window.addEventListener('deviceorientation', updateOrientation)
