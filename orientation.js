function updateOrientation(e) {
	a = document.querySelector('#alpha')
	b = document.querySelector('#beta')
	g = document.querySelector('#gamma')
	a.textcontent = e.alpha
	b.textcontent = e.beta
	g.textcontent = e.gamma
}

document.body.addEventListener('deviceorientation', updateOrientation)
