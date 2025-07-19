$(document).ready(function () {
    $('.fa-bars').click(function () {
        if ($('.navbar').css('right') === '0px') {
            $('.navbar').animate({ right: '150%' }, 600)
        }
        else {
            $('.navbar').animate({ right: '0' }, 600)
        }
    })
})

window.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;

    gsap.to('.mousebox', {
        duration: 0.2,
        x: x,
        y: y
    })
})

let tl = gsap.timeline();

tl.from('.main .part1', { opacity: 0, duration: 0.5, y: -20 })
tl.from('.main .part2', { opacity: 0, duration: 0.5, y: -20 })

gsap.from('.main2 .part1 div', {
    scrollTrigger: {
       
        trigger: '.main2',
        start: 'top 80%',
        end: 'bottom 40%',
    },
    opacity: 0, duration: 0.5, y: -20

});

gsap.to('.main3 .part2 .stage1',{
    scrollTrigger:{
        markers:true,
        trigger:'.main3 .part2',
        start:'top 70%',
        end:'top 40%'
    }
})
