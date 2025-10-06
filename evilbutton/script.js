function aceitou () {
    alert("oiiii")
}

const evilButton = document.getElementById('evil-button')

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return Math.abs(boxPosition + boxSize / 2 - mousePosition);
  }

  document.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;
    const box = evilButton.getBoundingClientRect();

    const horizontalDistance = distanceFromCenter(box.x, x, box.width);
    const verticalDistance = distanceFromCenter(box.y, y, box.height);
    const offset = 100;

    if (horizontalDistance < offset && verticalDistance < offset) {
      moveButton();
    }
  });

  function moveButton() {
    const newLeft = Math.random() * (window.innerWidth - evilButton.offsetWidth);
    const newTop = Math.random() * (window.innerHeight - evilButton.offsetHeight);
    evilButton.style.left = `${newLeft}px`;
    evilButton.style.top = `${newTop}px`;
  }
  
  document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    const x = touch.pageX;
    const y = touch.pageY;
    const box = evilButton.getBoundingClientRect();

    const horizontalDistance = distanceFromCenter(box.x, x, box.width);
    const verticalDistance = distanceFromCenter(box.y, y, box.height);
    const offset = 100;

    if (horizontalDistance < offset && verticalDistance < offset) {
        moveButton();
    }

});
