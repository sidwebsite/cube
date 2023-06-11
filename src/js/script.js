import lazyLoadInit from "./lazyload-init";
lazyLoadInit();
// loading
const lazyLoading = () => {
        const loader = document.querySelector("#loading");    
        loader.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
}
window.addEventListener('load', function() {    
    setTimeout(lazyLoading, 3500);
}); 
// init
import wow from 'wow.js'; 
new wow().init();
// dropdown-toggle
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector('.dropdown-menu');
dropdownToggle.addEventListener("click", (e) => {    
    e.preventDefault();
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
        dropdownToggle.classList.remove("active");
        dropdownToggle.textContent = 'menu';    
        dropdownMenu.classList.remove("show");        
    }
});
// dropdownMenu.querySelectorAll('a')[1].addEventListener {

// }
// go top
const backToTopButton = document.querySelector('#gotop');
// header scroll
const header = document.querySelector('.header');
// nav
const sectionId = document.querySelectorAll('.section-id');
const navLinks = document.querySelectorAll('.dropdown-menu li');
// serve
const serve = document.querySelector('#serve');
const tabNavs = document.querySelectorAll('.tab-nav ul li');
const tabContents = document.querySelectorAll('.tab-content .tab-pane');
const tabLeftNav = document.querySelector('.tab-left-nav');
function scrollFunction() {
    let top = document.documentElement.scrollTop;
    // nav
    sectionId.forEach((sec) => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(window.scrollY >= offset && window.scrollY < offset + height){
            navLinks.forEach((links) => {
                links.querySelector('a').classList.remove('active');
                document.querySelector('.dropdown-menu li a[href*='+ id + ']').classList.add('active');
            })
        }
    })
    //  header scroll
    if (document.body.scrollTop > 20 || top > 20) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    };
    // 
    let serveOffset = serve.offsetTop;
    let serveHeight = serve.offsetHeight;
    if(window.innerWidth > 997) {
        tabLeftNav.style.right = (window.innerWidth - document.querySelector('.tab-content').clientWidth) - 540 + 'px';
    } else {
        tabLeftNav.style.right = (window.innerWidth - document.querySelector('.tab-content').clientWidth) / 2 + 'px';
    }
    // console.log(offset, height, window.scrollY)
    if(window.scrollY >= (serveOffset + 200) && window.scrollY < serveOffset + serveHeight - 600){

        tabLeftNav.classList.add('active');
    } else {
        tabLeftNav.classList.remove('active');
    }
    // go top 
    if(top > 300) {        
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
        tabLeftNav.querySelectorAll('a').forEach((tab) => {
            tab.classList.remove('active');
        });
        tabContents[index].classList.add('active', 'show');
        tabNavs[index].classList.add('active');
        tabLeftNav.querySelectorAll('a')[index].classList.add('active');    
    });
});
tabLeftNav.querySelectorAll('a').forEach((nav,index) => {
    nav.addEventListener('click',() => {
        tabContents.forEach((content) => {
            content.classList.remove('active', 'show');
        });
        tabNavs.forEach((tab) => {
            tab.classList.remove('active');
        });
        tabLeftNav.querySelectorAll('a').forEach((tab) => {
            tab.classList.remove('active');
        });
        tabContents[index].classList.add('active', 'show');
        tabNavs[index].classList.add('active');
        tabLeftNav.querySelectorAll('a')[index].classList.add('active');    
    })
})
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
const h = container.clientHeight;
const w = container.clientWidth;

console.log(window.innerWidth);
if(window.innerWidth > 2000) {
    for(let i = 0; i <= 8; i++ ) {
        const blocks = document.createElement('div');
        blocks.classList.add('block');
        // blocks.style.top = Math.floor(Math.random() * h)+ 'px';
        blocks.style.left = Math.floor(Math.random() * 2000) + 'px';
        blocks.style.width = (Math.floor(Math.random() * 50) + 30) + 'px';
        blocks.style.height = (Math.floor(Math.random() * 700) + 200) + 'px';
        container.appendChild(blocks);    
    }
} else {
    for(let i = 0; i <= 10; i++ ) {
        const blocks = document.createElement('div');
        blocks.classList.add('block');
        // blocks.style.top = Math.floor(Math.random() * h)+ 'px';
        blocks.style.left = Math.floor(Math.random() * 3000) + 'px';
        blocks.style.width = (Math.floor(Math.random() * 50) + 30) + 'px';
        blocks.style.height = (Math.floor(Math.random() * 700) + 200) + 'px';
        container.appendChild(blocks);    
    }
}

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