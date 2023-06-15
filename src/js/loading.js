
// let start = Date.now();
// let end = Date.now();
// console.log(end - start);
// gsap
import { gsap } from "gsap";
function ready() {
    // loader.classList.add('hidden');
    // document.body.classList.add('fade');
    // animation
	let tlBg = gsap.timeline({
		paused: false,
		defaults: { ease: "power4.out"}        
	});

    tlBg.to('.loading-logo .logo', {
        delay: 0.5,
        duration: 1,
        opacity: 1
    }).to('.loading-logo .text', {
        duration: 1,
        opacity: 1,
        translateX: 0
    }).to('#loading', {
        delay:1,
        duration: 1,
        opacity: 0,
        display: 'none',
        onComplete: function() {
            document.querySelector('body').style.overflow = 'auto';
        }
    });
    // banner
    tlBg.to ('.banner-box',{
        duration: 0.5,
        opacity: 1,
    })
    .to('.banner-logo', {
        duration: 1,
        opacity: 1
    }).to ('.banner-title', {
        opacity: 1
    }, "<")
    .to ('.banner-box .block',{
        duration: 2,
        bottom: 0,
    }, "<")
    .to ('.banner-box',{
        delay: 0.5,
        duration: 1,
        opacity: 0,
    }, "<")
    .to('.scroll-down',{
        delay: 0.2,
        duration: 0.5,
        opacity: 1
    }, "<").to('.banner-text',{
        duration: 0.5,
        opacity: 1
    });
};
export default () => {
	document.addEventListener("DOMContentLoaded", ready);
};