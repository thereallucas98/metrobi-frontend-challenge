const achilles = document.querySelector('.achilles');
    const tortoise = document.querySelector('.tortoise');
    const screenWidth = window.innerWidth;

    let aPos = 0;
    let tPos = screenWidth * 0.2;
    let step = screenWidth * 0.2;

    function animate() {
      aPos = tPos;

      step *= 0.5;
      tPos += step;

      achilles.style.left = `${aPos}px`;
      tortoise.style.left = `${tPos}px`;

      if (step > 1) {
        setTimeout(animate, 300);
      }
    }

    animate();