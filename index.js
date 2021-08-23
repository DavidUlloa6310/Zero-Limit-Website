gsap.registerPlugin(ScrollTrigger);

let timeline = gsap.timeline();

timeline.from('header', {
    y: -300,
    duration: 2.
});

timeline.from('.text', {
    scale: 0,
    opacity: 0,
    duration: 3
})

timeline.from('.images', {
    opacity: 0,
    duration: 3
})

timeline.to('.astronaut', {
    repeat: -1, 
    duration: 100,
    reverse: true,
    y: "+= -50px",
    ease: "elastic",
    rotation: 45,
})

gsap.from('.logo', {
    opacity: 0,
    scrollTrigger: {
        trigger: '.text',
        start: "bottom top",
        toggleActions: "play none reverse none"
    }
})

// ScrollTrigger.matchMedia({
//     "(min-width: 768px)": function() {
//         gsap.to('.rocket', {
//             x: "+= 250%",
//             y: "+= -300",
//             rotate: 45,
//             duration: 5,
//             scrollTrigger: {
//                 trigger: ".space-section",
//                 start: "top top",
//                 end: "bottom center",
//                 scrub: 2,
//                 markers: true,
//             }
//         })
        
//         gsap.to('.rocketTwo', {
//             x: "+= -500%",
//             y: "+= 300",
//             opacity: 1,
//             duration: 5,
//             scrollTrigger: {
//                 trigger: "#second-space-section",
//                 start: "75% bottom",
//                 scrub: 2,
//                 toggleActions: "play none reverse none",
//                 markers: false,
//             }
//         })
//     },

//     "(min-width: 1024px)": function() {
//         gsap.to('.rocket', {
//             x: "+= 250%",
//             y: "+= -300",
//             rotate: 45,
//             duration: 5,
//             scrollTrigger: {
//                 trigger: ".space-section",
//                 start: "top top",
//                 end: "bottom center",
//                 scrub: 2,
//                 markers: false,
//             }
//         })
        
//         gsap.to('.rocketTwo', {
//             x: "+= -500%",
//             y: "+= 300",
//             opacity: 1,
//             duration: 5,
//             scrollTrigger: {
//                 trigger: "#second-space-section",
//                 start: "75% bottom",
//                 scrub: 2,
//                 toggleActions: "play none reverse none",
//                 markers: false,
//             }
//         })
//     }
// })

gsap.to('.rocket', {
    x: "+= 250%",
    y: "+= -300",
    rotate: 45,
    duration: 5,
    scrollTrigger: {
        trigger: ".space-section",
        start: "top top",
        end: "bottom center",
        scrub: 2,
        markers: false,
    }
})

gsap.to('.rocketTwo', {
    x: "+= -500%",
    y: "+= 300",
    opacity: 1,
    duration: 5,
    scrollTrigger: {
        trigger: "#second-space-section",
        start: "75% bottom",
        scrub: 2,
        toggleActions: "play none reverse none",
        markers: false,
    }
})