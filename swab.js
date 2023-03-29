function show() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#all"),
        smooth: true,
        getDirection: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    locoScroll.on("scroll", function (dets) {
        if (dets.direction === "up") {
            document.querySelector("#menubtn").style.top = "3%";
        }
        else if (dets.direction === "down") {
            document.querySelector("#menubtn").style.top = "-20%";


        }

    })

    // tell ScrollTrigger to use these proxy methods for the "#all" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#all", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#all").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
show();





document.querySelectorAll(".toanimate").forEach(function (elem) {
    elem.innerHTML = `<div class=textwrap >${elem.textContent}</div>`
});

document.querySelectorAll(".textwrap").forEach(function (el) {
    let clutter = "";
    el.textContent.split(" ").forEach(wrd => {
        clutter += `<span>${wrd}</span>`
    })
    el.innerHTML = clutter;
})


gsap.set(".toanimate span", { y: "200%" })
document.querySelectorAll(".toanimate")
    .forEach(function (elem) {
        gsap.from(elem, {
            scrollTrigger: {
                scroller: "#all",
                trigger: elem,
                start: "top 80%"
            },
            onStart: function () {
                gsap.to(elem.children[0].children, {
                    y: 0,
                    ease: Power4,
                    duration: .5,
                    stagger: .1
                })
            }
        })
    })









function showtoplayer() {
    document.querySelector("#line1").style.transform = " rotate(135deg)"
    document.querySelector("#line1").style.marginBottom = "-35.5px"
    document.querySelector("#line2").style.transform = " rotate(-135deg)"
    document.querySelector("#toplayer").style.width = "100%";
    document.querySelector(".textcontent").style.display = "flex";
    // document.querySelector("#toplayer").style.top="0"
    document.querySelector("#logindiv").style.display = "flex";
    document.querySelector("#toplayer").style.backgroundColor = "#345e68";
}

function hidetoplayer() {
    document.querySelector("#line1").style.transform = "rotate(0deg)"
    document.querySelector("#line2").style.transform = " rotate(0deg)"
    document.querySelector(".textcontent").style.display = "none";
    document.querySelector("#logindiv").style.display = "none";
    document.querySelector("#line1").style.marginBottom = "-20px"
    // document.querySelector("#toplayer").style.top = "-50vh";
    document.querySelector("#toplayer").style.backgroundColor = "#f9ae68"
    document.querySelector("#toplayer").style.width = "0";
    flag = 0;
}


var menubtn = document.querySelector("#menubtn");
var flag = 0;

menubtn.addEventListener("click", function (elem) {
    if (flag === 0) {
        showtoplayer();

        flag = 1;
    }
    else {
        hidetoplayer();

    }
})


var topl = document.querySelector("#all");
topl.addEventListener('scroll', function (value) {
    // console.log("h")
})



var pausebtn;
var flow = 1;
var flowinterval = setInterval(function () {


    // -1.9vh
    if (flow === 1) {
        document.querySelector("#des1").style.transform = "translate3d(-12vw,0px,0px)";
        document.querySelector("#numflow").style.transform = "translate3d(0px,-1.9vh,0px)";
        document.querySelector("#video3").style.left = "-100%"
        document.querySelector("#video2").style.left = "0";
        flow = 2;
    }
    else if (flow === 2) {
        document.querySelector("#des1").style.transform = "translate3d(-24vw,0px,0px)";
        document.querySelector("#numflow").style.transform = "translate3d(0px,-3.8vh,0px)";
        document.querySelector("#video2").style.left = "-100%";
        document.querySelector("#video3").style.left = "-200%"
        document.querySelector("#video4").style.left = "0";



        flow = 0;
    }
    else {
        document.querySelector("#des1").style.transform = "translate3d(0px,0px,0px)";
        document.querySelector("#numflow").style.transform = "translate3d(0px,0vh,0px)";
        document.querySelector("#video4").style.left = "100%";
        document.querySelector("#video2").style.left = "100%";
        document.querySelector("#video3").style.left = "0%";



        flow = 1;
    }
    
}, 5000)





var buttonforcheck = true;
var colorchange = 0;




var colorfunction=setInterval(function () {
    if (buttonforcheck === true){

    

    if (colorchange === 0) {
        document.querySelector("#page4").style.backgroundColor = "#dbed83";
        document.querySelector("#page4").style.color = "#dc856a"
        document.querySelector("#items .elements").style.borderColor = "#dc856a"

        colorchange = 1;
    }
    else if (colorchange === 1) {
        document.querySelector("#page4").style.backgroundColor = "#47a96f";
        document.querySelector("#page4").style.color = "#ffd196"
        document.querySelector("#items .elements").style.borderColor = "#ffd196"


        colorchange = 2;

    }
    else {
        if (colorchange === 2) {
            document.querySelector("#page4").style.backgroundColor = "#5fecc8";
            document.querySelector("#page4").style.color = "#5e62d1"
            document.querySelector("#items .elements").style.borderColor = "#5e62d1"
            colorchange = 3;

        }
        else {
            document.querySelector("#page4").style.backgroundColor = "#f9ae65";
            document.querySelector("#page4").style.color = "#3c6d79"
            document.querySelector("#items .elements").style.borderColor = "#3c6d79"

            colorchange = 0

        }
    }

    }
}, 1000)
















var scrolller = document.querySelector("#all");
var mainwidht = 50;
var savers = 1;
var newwidth = 0;
var saver2 = 0;
var right = document.querySelector("#right");




window.addEventListener("wheel", function (dets) {

    if (dets.deltaY >= 0) {
        if (newwidth < 1020) {


            this.document.querySelector("#rightcover").style.width = newwidth + (dets.deltaY) + "px";
            newwidth = newwidth + dets.deltaY
            // saver2=1;

        }
    }
    else if (dets.deltaY < 0) {

        if (newwidth >= -5) {

            saver2 = 0;

            newwidth = newwidth - (-dets.deltaY)
            // console.log(newwidth)
            this.document.querySelector("#rightcover").style.width = newwidth + "px";
            // newwidth=0;
            if (newwidth < 0) {
                newwidth = 0;
            }

        }
        // newwidth=0;

    }
    else { }

})


gsap.to("#motion", {
    x: "-99vw",
    duration: 9,
    ease: Power0.easeNone,
    repeat: -1
})
gsap.to("#motion1", {
    x: "-56vw",
    duration: 4,
    ease: Power0.easeNone,
    repeat: -1
})

gsap.to("#motionf1", {
    x: "-96.65vw",
    duration: 13,
    ease: Power0.easeNone,
    repeat: -1
})


gsap.from(".gsap1", {
    scrollTrigger: {
        trigger: ".gsap1",
        scroller: "#all",
        scrub: 1,
        // markers: true,
        start: "top 90%",
        end: "top 40%"
    },
    // stagger: 0.3,
    duration: 2,
    opacity: 0,
    // y: 60,
    scale: 0,
    ease: Power4.easeOut,
})
gsap.from(".gsap2", {
    scrollTrigger: {
        trigger: ".gsap2",
        scroller: "#all",
        scrub: 1,
        // markers: true,
        start: "top 90%",
        end: "top 40%"
    },
    // stagger: 0.3,
    duration: 2,
    opacity: 0,
    // y: 60,
    scale: 0,
    ease: Power4.easeOut,
})
gsap.from(".gsap3", {
    scrollTrigger: {
        trigger: ".gsap3",
        scroller: "#all",
        scrub: 1,
        // markers: true,
        start: "top 90%",
        end: "top 40%"
    },
    // stagger: 0.3,
    duration: 2,
    opacity: 0,
    // y: 60,
    scale: 0,
    ease: Power4.easeOut,
})







document.querySelectorAll("#lay22").forEach(function (dets) {
    gsap.from(dets, {
        scrollTrigger: {
            scroller: "#all",
            trigger: dets,
            scrub: 1,
            start: "top 100%",
            end: "top 60%"
        },
        scale: 0,
        duration: .7,
        ease: Expo
    })
})


document.querySelectorAll("#lay2").forEach(function (dets) {
    gsap.from(dets, {
        scrollTrigger: {
            scroller: "#all",
            trigger: dets,
            scrub: 1,
            start: "top 100%",
            end: "top 60%"
        },
        scale: 0,
        duration: .7,
        ease: Expo
    })
})



document.querySelector("#colorcontainer").addEventListener("mousemove", function (elen) {

    var valueXsvg = document.querySelector("#colorcontainer").getBoundingClientRect().x;
    var valueYsvg = document.querySelector("#colorcontainer").getBoundingClientRect().y;
    var realvalX = elen.clientX - valueXsvg;
    var realvalY = elen.clientY - valueYsvg;




    document.querySelector("#pausebtn").style.top = `${realvalY}px`
    document.querySelector("#pausebtn").style.left = `${realvalX}px`
})

function pause() {
    setTimeout(function () {
        document.querySelector("#pausebtn").style.opacity = 0
    }, 1000)
    setTimeout(function () {
        document.querySelector("#pausebtn").style.display = "none"
    }, 2000)

}



var colorpause=0;
document.querySelector("#colorcontainer").addEventListener("click", function (dets) {
if(colorpause==0){
    document.querySelector("#playbtn").style.display = "flex"
    document.querySelector("#pause").style.display = "none"
    pause();
    buttonforcheck = false;
    colorpause=1;

}
else{
    document.querySelector("#playbtn").style.display = "flex"
    document.querySelector("#pause").style.display = "none"
    pause();
    buttonforcheck = true;
    colorpause=0;

}
})