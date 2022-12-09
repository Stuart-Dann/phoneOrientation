function updateOrientation(e) {
	a = document.querySelector('#alpha')
	b = document.querySelector('#beta')
	g = document.querySelector('#gamma')
	a.innerHTML = e.alpha
	b.innerHTML = e.beta
	g.innerHTML = e.gamma
}

window.addEventListener('deviceorientation', updateOrientation)
