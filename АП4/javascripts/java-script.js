
document.querySelectorAll('.gallery img').forEach(img =>{
    img.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = img.getAttribute('src');
    }
});
