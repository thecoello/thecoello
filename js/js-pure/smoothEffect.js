function objectsFloating(div) {
  const randomX = random(1, 10);
  const randomY = random(1, 10);
  const randomTime = random(3, 5);
  const randomTime2 = random(5, 10);
  const randomAngle = random(-10, 10);

  const objs = gsap.utils.toArray(div);
  objs.forEach((obj) => {
    gsap.set(obj, {
      x: randomX(-1),
      y: randomX(1),
      rotation: randomAngle(-1),
    });

    moveX(obj, 1);
    moveY(obj, -1);
    rotate(obj, 1);
  });

  function rotate(target, direction) {
    gsap.to(target, randomTime2(), {
      rotation: randomAngle(direction),
      ease: Sine.easeInOut,
      onComplete: rotate,
      onCompleteParams: [target, direction * -1],
    });
  }

  function moveX(target, direction) {
    gsap.to(target, randomTime(), {
      x: randomX(direction),
      ease: Sine.easeInOut,
      onComplete: moveX,
      onCompleteParams: [target, direction * -1],
    });
  }

  function moveY(target, direction) {
    gsap.to(target, randomTime(), {
      y: randomY(direction),
      ease: Sine.easeInOut,
      onComplete: moveY,
      onCompleteParams: [target, direction * -1],
    });
  }

  function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  }
}

function textFloating(div, time) {
  gsap.to(div, {
    y: "-=25px",
    duration: time,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeInOut,
  });
}

textFloating("#intro h1", 2);
textFloating("#intro h6", 2.5);
objectsFloating(".obj1");
objectsFloating(".obj2");
objectsFloating(".obj3");
objectsFloating(".obj4");
objectsFloating(".obj5");
