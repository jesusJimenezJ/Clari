// Efecto de corazones flotantes
setInterval(function() {
    var heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.left = Math.random() * 100 + '%';
    document.body.appendChild(heart);
    setTimeout(function() {
    document.body.removeChild(heart);
    }, 5000);
   }, 500);