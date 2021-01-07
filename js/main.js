var t1 = gsap.timeline();


t1.from(".logo", {duration: 1,  y: 150, opacity: 0, scale: 1.5, delay: 11});
t1.to(".logo", {duration: 1,  y: -150, opacity: 0, delay:2  });
t1.from(".first-heading", {duration: 2,  y: 150, opacity: 0, });
t1.to(".first-heading", {duration: 2,  y: -150, opacity: 0, });
t1.to(".first-image", {duration: 3,  x: 500, opacity: 1, scale: 1.5}, "-=2");
t1.to(".first-image", {duration: 4,  x: 500, opacity: 0.1, scale: 1.5});
t1.from(".second-heading", {duration: 5,  y: 500, opacity: 0, scale: 1});
t1.to(".second-heading", {duration: 5,  y: -500, opacity: 0, scale: 1});
t1.from(".third-heading", {duration: 3,  y: 500, opacity: 0, scale: 1});
t1.to(".third-heading", {duration: 3,  y: -500, opacity: 0, scale: 1});
t1.to(".first-image", {duration: 2,  x: 500, opacity: 0, scale: 1.5});
t1.to(".second-image", {duration: 2,  x: -500, opacity: 1, scale: 1.5});
t1.from(".forth-heading", {duration: 4,  y: 500, opacity: 0, }, "-=2");
t1.to(".forth-heading", {duration: 4,  y: -500, opacity: 0, });
t1.to(".second-image", {duration: 1,  x: -500, opacity: 0, scale: 1.5}, "-=2");
t1.to(".third-image", {duration: 1,  x: 500, opacity: 1, scale: 1.5},);
t1.from(".fifth-heading", {duration: 4,  y: 500, opacity: 0 }, "-=3");
t1.to(".fifth-heading", {duration: 4,  y: -500, opacity: 0, });
t1.to(".third-image", {duration: 1,  x: 500, opacity: 0, scale: 1.5}, "-=2");