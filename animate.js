gsap.from("#navbar",{
    opacity:0,
    duration:1,
    delay:1,
    stagger:true
})

gsap.from(".home-text",{
    scale:0,
    delay:1,
    duration:1
})
gsap.from(".count",{
    scale:0,
    delay:1,
    duration:1,
    scrollTrigger:{
        trigger:".count",
        scroller:"body"
    }
})

gsap.from(".shorts .video1",{
    y:50,
    scrollTrigger:{
        trigger:".shorts",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 10%",
        scrub:true
    }
})
gsap.from(".shorts .video4",{
    y:50,
    scrollTrigger:{
        trigger:".shorts",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 10%",
        scrub:true
    }
})
gsap.from(".shorts .video2",{
    y:10,
    scrollTrigger:{
        trigger:".shorts",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 10%",
        scrub:true
    }
})
gsap.from(".shorts .video3",{
    y:30,
    scrollTrigger:{
        trigger:".shorts",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 10%",
        scrub:true
    }
})

gsap.from(".craft-text",{
    y:-50,
    duration:1,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".craft-text",
        scroller:"body"
    }
})
gsap.from(".steps-text",{
    y:-50,
    duration:1,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".steps-text",
        scroller:"body"
    }
})
gsap.from(".steps-content",{
    y:50,
    duration:1,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".steps-content",
        scroller:"body"
    }
})

gsap.from(".features-text",{
    y:-50,
    duration:2,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".features-text",
        scroller:"body"
    }
})

gsap.from(".features-1 , .features-2",{
    y:50,
    duration:1,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".features-1 , .features-2",
        scroller:"body"
    }
})

gsap.from(".subscription-text",{
    y:-50,
    duration:2,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".subscription-text",
        scroller:"body"
    }
})

gsap.from(".registration",{
    y:50,
    duration:1,
    delay:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:".registration",
        scroller:"body"
    }
})