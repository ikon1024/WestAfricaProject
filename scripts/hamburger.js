//let toggle = false;
const sidebar = document.getElementById('sidebar');

document.getElementById('hamburger-btn').addEventListener('click', function() {
    //toggle = !toggle;
    //sidebar.style.display = toggle ? 'block' : 'none'
    sidebar.classList.toggle('show');
});
