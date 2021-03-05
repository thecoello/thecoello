function menuOpen() {
  const Ease = { duration: 0.2, ease: "power2.out" };

  document.querySelector(".menubtn").onclick = function () {
    document.querySelector("body").style.overflow = "hidden";

    gsap.to(".menubtn", {
      duration: 0.1,
      ease: Ease,
      top: "-50px",
      display: "none",
    });

    gsap.to(".navigation-list",{
      backgroundColor: "black"
    })

    setTimeout(function () {
      gsap.from(".navigation-list", {
        scale: 0.95,
        autoAlpha: 0,
        ease: Ease,
      });
    }, 300);

    setTimeout(function () {
      gsap.to(".navigation-list", {
        display: "flex",
        scale: 1,
        autoAlpha: 1,
        ease: Ease,
      });
    }, 300);

    setTimeout(function () {
      gsap.to(".menuclose", {
        duration: 0.1,
        top: "35px",
        display: "initial",
        filter: "invert(100%",
        ease: Ease,
      });
    }, 600);
  };
}

function menuClose() {
  const Ease = { duration: 0.2, ease: "power2.out" };
  document.querySelector("body").style.overflow = "scroll";

  gsap.to(".menuclose", {
    duration: 0.1,
    top: "-50px",
    display: "none",
    filter: "invert(100%",
    ease: Ease,
  });

  setTimeout(function () {
    gsap.from(".header-container .navigation-list", {
      display: "flex",
      scale: 1,
      autoAlpha: 1,
      ease: Ease,
    });
  }, 300);

  setTimeout(function () {
    gsap.to(".header-container .navigation-list", {
      display: "none",
      scale: 0.95,
      autoAlpha: 0,
      ease: Ease,
    });
  }, 300);

  setTimeout(function () {
    gsap.to(".menubtn", {
      duration: 0.1,
      ease: Ease,
      top: "35px",
      display: "initial",
    });
  }, 600);
}

function menuCloseBtn() {
  document.querySelector(".menuclose").onclick = function () {
    menuClose();
  };
}

function menuCloseClickItem() {
  const menuItem = document.querySelectorAll(
    ".header-container .navigation-list"
  );

  for (let i = 0; i < menuItem.length; i++) {
    const menu = menuItem[i].children;

    for (const item of menu) {
      item.children[0].onclick = function () {
        menuClose();
      };
    }
  }
}
