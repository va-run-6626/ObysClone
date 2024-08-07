const loaderAnimation = ()=>{
    const tl = gsap.timeline()
    tl.from(".line h1",{
        y:150,
        opacity:0,
        stagger: 0.25,
        duration : 0.6,
        delay : 0.5
    })
    tl.from("#line1Part1",{
        opacity:0,
        onStart : () =>{
            const h5Timer = document.querySelector("#line1Part1 h5");
            var grow = 0
            const counter = setInterval(()=>{
                if(grow <= 100){
                    h5Timer.innerHTML = grow++;
                }else{
                    clearInterval(counter)
                }
            },35)
        }
    })
    tl.to(".line h2",{
        opacity: 1,
        animationName : "animateNow"
    })
    tl.to("#loader",{
        opacity : 0,
        duration: 5,
        delay : 1
    })
    tl.from("#page1",{
        y:1600,
        opacity:0,
        delay:0.2,
        ease: Power4,
        duration:0.5
    })
    tl.to("#loader",{
        display:"none"
    })
    tl.from("#nav",{
        opacity:0
    })
    tl.from("#page1C1 h1, #page1C2 h1, #page1C3 h2, #page1C4 h1",{
        y:150,
        stagger: 0.2,
    })
}
const mouseMoveAnimation = ()=>{
    document.addEventListener("mousemove",(event)=>{
        gsap.to("#crsr",{
            left: event.x,
            top: event.y
        })
    })
    Shery.makeMagnet("#navPart2 h4, #nav svg");
}

mouseMoveAnimation();
loaderAnimation();



