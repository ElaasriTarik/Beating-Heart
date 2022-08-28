let leftSide = document.querySelector('.leftSide');
let rightSide = document.querySelector('.rightSide');
let body = document.querySelector('body');
let container = document.querySelector('.container');
let arr = [leftSide, rightSide];

arr.forEach(item => {
	item.addEventListener('mouseover', () => {
	leftSide.classList.toggle('active');
	rightSide.classList.toggle('active');
	container.classList.toggle('slower');
	body.classList.toggle('gone');
})
})