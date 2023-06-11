import lazyLoadInit from "./lazyload-init";
lazyLoadInit();
// loading
window.addEventListener('load', function() {    
    const loader = document.querySelector("#loading");    
    loader.classList.add('hidden');
    this.document.body.classList.remove('overflow-hidden');
    
});
// init
import wow from 'wow.js'; 
new wow().init();
// dropdown-toggle
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector('.dropdown-menu');
dropdownToggle.addEventListener("click", () => {    
    dropdownMenu.classList.add("show");
    dropdownToggle.classList.toggle("active");
    if(dropdownToggle.classList.contains('active')) {
        dropdownToggle.textContent = 'close';
    } else {
        dropdownMenu.classList.remove("show");
        dropdownToggle.textContent = 'menu';
    }
    
});
document.body.addEventListener("click", (e) => {
    if (e.target.matches(".dropdown-toggle") === false) {
        dropdownMenu.classList.remove("show");
    }
});
// dropdownMenu.querySelectorAll('a')[1].addEventListener {

// }
// go top
const backToTopButton = document.querySelector('#gotop');
// header scroll
const header = document.querySelector('.header');
// serve
const serve = document.querySelector('#serve');
const tabNavs = document.querySelectorAll('.tab-nav ul li');
const tabContents = document.querySelectorAll('.tab-content .tab-pane');
const tabContainer = document.querySelector('.tab-container');

function scrollFunction() {
    // 
    const tabsNav = document.querySelector('#tabs .tab-nav');
    // console.log(document.documentElement.scrollTop)
    //  header scroll
    // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //     header.classList.add('fixed');
    // } else {
    //     header.classList.remove('fixed');
    // };
    // go top 
    if(document.documentElement.scrollTop > 300) {        
        // show backToTopButton
        if(!backToTopButton.classList.contains('btnEntrance')){
            backToTopButton.classList.remove('btnExit')
            backToTopButton.classList.add('btnEntrance')
            backToTopButton.style.display = 'block'
        };
    } else {
        // hide backToTopButton
        if(backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.add('btnExit')
            backToTopButton.classList.remove('btnEntrance')
            setTimeout(() => {
                backToTopButton.style.display = 'none'
            }, 250);            
        };
    };
    // serve
    // console.log(serve.offsetTop )
    // if(serve.offsetTop === document.documentElement.scrollTop) {
    //     tabContainer.addEventListener('scroll', () => {
    //         console.log(tabContainer.scrollTop);
    //     })
        
    // }
    // const serveHeight = (serve.offsetTop + serve.clientHeight) - tabsNav.clientHeight - 270;
    // if(document.documentElement.scrollTop > serve.offsetTop && document.documentElement.scrollTop < serveHeight) {
    //     tabsNav.classList.add('server-nav-fixed');
    //     tabsNav.style.top = "0";
    // } else {
    //     tabsNav.classList.remove('server-nav-fixed');
    //     tabsNav.style.top = "-100%";
    // }
}
window.addEventListener('scroll', scrollFunction);
// tabs
tabNavs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabContents.forEach((content) => {
            content.classList.remove('active', 'show');
        });
        tabNavs.forEach((tab) => {
            tab.classList.remove('active');
        });
        tabContents[index].classList.add('active', 'show');
        tabNavs[index].classList.add('active');
        // console.log(tabContents[index].clientHeight);
        
    });
});
// accordion
const accordionContent = document.querySelectorAll(".accordion-item");
accordionContent.forEach((item, index) => {
    let header = item.querySelector(".toggle");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let content = item.querySelector(".content");
        if(item.classList.contains("open")){
            content.style.height = `${content.scrollHeight}px`; 
            item.querySelector(".toggle-icon").textContent = 'remove';
        }else{
            content.style.height = "0px";
            item.querySelector(".toggle-icon").textContent = 'add';
        }
        removeOpen(index); 
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".content");
            des.style.height = "0px";
            item2.querySelector(".toggle-icon").textContent = 'add';
        }
    })
}
// modal
const modalBtn = document.querySelectorAll('.modal-btn');
const videoModal = document.querySelector('#videoModal');
const youtube = document.querySelector('#youtube');

const openModal = (id) => {
    const autoplay = '?autoplay=1&amp;modestbranding=1&amp;showinfo=0';
    const src = 'https://www.youtube.com/embed/'+ id + autoplay;
    youtube.setAttribute('src', src);
    const modalCloseBtn = videoModal.querySelector('.modal-close-btn');
    document.body.classList.add('modal-open');
    videoModal.classList.add('show');
    modalCloseBtn.addEventListener('click', () => {
        youtube.setAttribute('src', '');
        document.body.classList.remove('modal-open');
        videoModal.classList.remove('show');
    });
    videoModal.addEventListener('click', () => {
        youtube.setAttribute('src', '');
        document.body.classList.remove('modal-open');
        videoModal.classList.remove('show');
    });
}
modalBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        // const id = e.target.dataset.id;
        let youtubeId = e.target.dataset.youtube;
        openModal(youtubeId);
    })
})

// 
const container = document.querySelector('.banner-box');
for(let i = 0; i <= 100; i++ ) {
	const blocks = document.createElement('div');
	blocks.classList.add('block');
	container.appendChild(blocks);
}
function animateBlocks() {
	anime({
	    targets: '.block',
		translateX: function(){
			return anime.random(-container.clientWidth, container.clientWidth)
		},		
        translateY: function(){
			return anime.random(-container.clientHeight, container.clientHeight)
		},
        scale: function(){
			return anime.random(1,5)
		},
		easing: 'linear',
		duration: 6000,
		delay: anime.stagger(10),
		complete: animateBlocks
	});
}
animateBlocks();

// Swiper
import Swiper from 'swiper/bundle';
const swiper = new Swiper(".mySwiper", {
    lazy: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        }
    },
    centeredSlides: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    }
});