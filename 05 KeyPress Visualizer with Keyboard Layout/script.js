document.addEventListener('keydown', (event) => {
    let keyPressed = event.key.toUpperCase();

    document.getElementById('key').textContent = event.key.toUpperCase();
    document.getElementById('keycode').textContent = event.keyCode;

    const allKeys = document.querySelectorAll('.key');
    allKeys.forEach(key => key.classList.remove('active'));

    document.getElementById(`key-${keyPressed}`).classList.add('active');
})