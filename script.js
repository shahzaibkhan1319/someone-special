```javascript
/* =========================================================
   MAHNOOR WEBSITE
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Mahnoor website loaded ❤️");


    /* =====================================================
       MUSIC BUTTON
    ===================================================== */

    const musicBtn = document.getElementById("musicBtn");

    let musicOn = false;

    if (musicBtn) {

        musicBtn.addEventListener("click", function () {

            musicOn = !musicOn;

            if (musicOn) {

                musicBtn.innerHTML = "♫";
                musicBtn.classList.add("music-active");

            } else {

                musicBtn.innerHTML = "♪";
                musicBtn.classList.remove("music-active");

            }

        });

    }


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    const navLinks =
        document.querySelectorAll(".navbar nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       YES BUTTON
    ===================================================== */

    const yesBtn =
        document.getElementById("yesBtn");

    const result =
        document.getElementById("forgive-result");

    if (yesBtn) {

        yesBtn.addEventListener("click", function () {

            if (result) {

                result.innerHTML =
                    "Thank you, Mahnoor. ❤️🥺";

            }

            createHeartExplosion();

            if (typeof gsap !== "undefined") {

                gsap.fromTo(
                    result,
                    {
                        opacity: 0,
                        scale: 0.5,
                        y: 20
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "back.out(1.7)"
                    }
                );

                gsap.to(
                    yesBtn,
                    {
                        scale: 1.12,
                        duration: 0.25,
                        yoyo: true,
                        repeat: 1
                    }
                );

            }

        });

    }


    /* =====================================================
       NOT YET BUTTON
    ===================================================== */

    const noBtn =
        document.getElementById("noBtn");

    if (noBtn) {

        noBtn.addEventListener("click", function () {

            if (result) {

                result.innerHTML =
                    "It's okay... I'll give you time. 🥺❤️";

            }

            if (typeof gsap !== "undefined") {

                const x =
                    (Math.random() - 0.5) * 180;

                const y =
                    (Math.random() - 0.5) * 100;

                gsap.to(
                    noBtn,
                    {
                        x: x,
                        y: y,
                        duration: 0.45,
                        ease: "power2.out"
                    }
                );

            }

        });

    }


    /* =====================================================
       SURPRISE MODAL
    ===================================================== */

    const surpriseBtn =
        document.getElementById("surpriseBtn");

    const surpriseModal =
        document.getElementById("surpriseModal");

    const closeModal =
        document.getElementById("closeModal");


    if (surpriseBtn && surpriseModal) {

        surpriseBtn.addEventListener(
            "click",
            function () {

                surpriseModal.style.display = "flex";

                createHeartExplosion();

                if (typeof gsap !== "undefined") {

                    gsap.fromTo(
                        ".modal-box",
                        {
                            opacity: 0,
                            scale: 0.6,
                            y: 50
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "back.out(1.6)"
                        }
                    );

                }

            }
        );

    }


    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    if (closeModal && surpriseModal) {

        closeModal.addEventListener(
            "click",
            function () {

                closeSurprise();

            }
        );


        surpriseModal.addEventListener(
            "click",
            function (event) {

                if (event.target === surpriseModal) {

                    closeSurprise();

                }

            }
        );

    }


    function closeSurprise() {

        if (!surpriseModal) return;

        if (typeof gsap !== "undefined") {

            gsap.to(
                ".modal-box",
                {
                    opacity: 0,
                    scale: 0.7,
                    duration: 0.3,
                    onComplete: function () {

                        surpriseModal.style.display =
                            "none";

                    }
                }
            );

        } else {

            surpriseModal.style.display = "none";

        }

    }


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeSurprise();

            }

        }
    );


    /* =====================================================
       HEART EXPLOSION
    ===================================================== */

    function createHeartExplosion() {

        const hearts = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "💘",
            "✨"
        ];

        for (let i = 0; i < 25; i++) {

            const heart =
                document.createElement("div");

            heart.innerHTML =
                hearts[
                    Math.floor(
                        Math.random() * hearts.length
                    )
                ];

            heart.style.position = "fixed";

            heart.style.left = "50%";

            heart.style.top = "50%";

            heart.style.zIndex = "10000";

            heart.style.pointerEvents = "none";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            document.body.appendChild(heart);


            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                120 + Math.random() * 350;

            const x =
                Math.cos(angle) * distance;

            const y =
                Math.sin(angle) * distance;


            if (typeof gsap !== "undefined") {

                gsap.to(
                    heart,
                    {
                        x: x,
                        y: y,
                        rotation:
                            Math.random() * 720,
                        scale:
                            0.5 + Math.random(),
                        opacity: 0,
                        duration:
                            1.3 + Math.random() * 1,
                        ease: "power2.out",
                        onComplete: function () {

                            heart.remove();

                        }
                    }
                );

            } else {

                setTimeout(function () {

                    heart.remove();

                }, 1000);

            }

        }

    }


    /* =====================================================
       FLOATING HEARTS
    ===================================================== */

    function createFloatingHeart() {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            12 + Math.random() * 20 + "px";

        heart.style.opacity =
            0.15 + Math.random() * 0.4;

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "0";

        document.body.appendChild(heart);


        if (typeof gsap !== "undefined") {

            gsap.to(
                heart,
                {
                    y:
                        -(window.innerHeight + 100),

                    x:
                        (Math.random() - 0.5) * 180,

                    rotation:
                        Math.random() * 360,

                    opacity: 0,

                    duration:
                        5 + Math.random() * 5,

                    ease: "none",

                    onComplete: function () {

                        heart.remove();

                    }
                }
            );

        } else {

            heart.remove();

        }

    }


    /* Create a new floating heart every 1.2 seconds */

    setInterval(
        createFloatingHeart,
        1200
    );


    /* =====================================================
       VIDEO SUPPORT
    ===================================================== */

    const video =
        document.querySelector(".couple-video");

    if (video) {

        video.addEventListener(
            "click",
            function () {

                if (video.paused) {

                    video.play();

                } else {

                    video.pause();

                }

            }
        );

    }


    /* =====================================================
       3D CARD TILT
    ===================================================== */

    const cards =
        document.querySelectorAll(".apology-card");


    cards.forEach(function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) / 18;

                const rotateY =
                    (centerX - x) / 18;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

            }
        );

    });


    /* =====================================================
       PARALLAX EFFECT
    ===================================================== */

    window.addEventListener(
        "scroll",
        function () {

            const hero =
                document.querySelector(".hero-content");

            if (!hero) return;

            const scroll =
                window.scrollY;

            if (scroll < window.innerHeight) {

                hero.style.transform =
                    `translateY(${scroll * 0.15}px)`;

                hero.style.opacity =
                    Math.max(
                        0,
                        1 - scroll / 700
                    );

            }

        }
    );


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "❤️ This little world was made for Mahnoor."
    );

});
```
