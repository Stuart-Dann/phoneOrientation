function updateOrientation(e) {
	a = document.querySelector('#alpha')
	b = document.querySelector('#beta')
	g = document.querySelector('#gamma')
	a.innerHTML = e.alpha
	b.innerHTML = e.beta
	g.value = e.gamma
}

window.onload(() => window.addEventListener('deviceorientation', updateOrientation))
