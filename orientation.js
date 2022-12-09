function updateOrientation(e) {
	a = document.querySelector('#alpha')
	b = document.querySelector('#beta')
	g = document.querySelector('#gamma')
	a.textContent = e.alpha
	b.textContent = e.beta
	g.textContent = e.gamma
}
window.addEventListener('deviceorientation', updateOrientation)
