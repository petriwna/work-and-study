export class Main {
    constructor() {
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.menuBtnOpen = document.querySelector('.menu-btn-open');
        this.menuBtnClose = document.querySelector('.menu-btn-close');
        this.banner = document.querySelector('#cookie-banner');
        this.acceptBtn = document.querySelector('#accept-cookies');

        this.addEventListeners();
    }

    addEventListeners() {
        this.menuBtnOpen.addEventListener('click', this.handleMenuButton.bind(this));
        this.menuBtnClose.addEventListener('click', this.handleMenuButton.bind(this));

        if (!localStorage.getItem('cookiesAccepted')) {
            this.banner.style.display = 'flex';
        }

        this.acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            this.banner.style.display = 'none';
        });
    }


    handleMenuButton() {
        this.toggleMenu();
        this.disableScroll();
    }

    toggleMenu() {
        this.mobileMenu.classList.toggle('is-open');
    }

    disableScroll() {
        document.body.classList.toggle('is-scroll-disable');
    }

    handleFormSubmit(event) {
        event.preventDefault();

        window.location.href = 'thank-you.html';
    }
    //
    // initSwiper() {
    //     const swiper = new Swiper('.swiper-container', {
    //         loop: true,
    //         slidesPerView: 1,
    //         spaceBetween: 20,
    //         breakpoints: {
    //             768: {
    //                 slidesPerView: 2,
    //             },
    //             1280: {
    //                 slidesPerView: 3,
    //             },
    //         },
    //         pagination: {
    //             el: '.pagination',
    //             bulletClass: 'pagination__button',
    //             bulletActiveClass: 'pagination__button--active',
    //         },
    //     });
    // }
}
