$(document).ready(function(){
	$('.ex-all').click(function(){
		$('.cat-box').toggleClass('active');
		$(this).toggleClass('active');
	})
})


const toggleBtn = document.getElementById('toggleBtn');
const menuList = document.getElementById('menuList');

toggleBtn.addEventListener('click', () => {
	menuList.classList.toggle('active');
});
