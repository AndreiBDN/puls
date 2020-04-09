const slider = tns({
    container: '.slider__puls',
    items: 1,
    slideBy: 1,
    autoplay: false,
    nav: false,
    controls: false
});

document.querySelector('.slider__button_prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.slider__button_next').onclick = function () {
    slider.goTo('next');
};



// product item
function activationCard(item) {
    let link = document.querySelectorAll(item);
    for (let i of link) {
        i.addEventListener('click', function (e) {
            e.preventDefault();
            this.parentElement.classList.toggle('product-item__front_active');
            this.parentElement.nextElementSibling.classList.toggle('product-item__info_active');
        })
    }
}

function activationInfo(item) {
    let link = document.querySelectorAll(item);
    for (let i of link) {
        i.addEventListener('click', function (e) {
            e.preventDefault();
            this.parentElement.classList.toggle('product-item__info_active');
            this.parentElement.previousElementSibling.classList.toggle('product-item__front_active');
        })
    }
}

activationCard('.product__link');
activationInfo('.product__link_back');

//  CHANGE visibility of catalog

function changeTabs(tabName, catalogName) {
    let tabs = document.querySelectorAll('.' + tabName);
    let catalog = document.querySelectorAll('.' + catalogName);
    for (let i of tabs) {
        i.addEventListener('click', function (e) {
            e.preventDefault();
            for (let x of tabs) {
                x.classList.remove(tabName + '_active');
            }
            this.classList.add(tabName + '_active');
            let dataTab = this.getAttribute('data-catalog');
            for (let i of catalog) {

                let x = i.getAttribute('id');
                if (x == dataTab) {
                    i.classList.add(catalogName + '_active');
                } else {
                    i.classList.remove(catalogName + '_active');
                }
            }
        })
    }
}
changeTabs('catalog__tab', 'catalog__wrapper');

// MODALS


function openModal(a, b) {
    let consultButton = document.querySelectorAll(a);
    for (let i of consultButton) {
        i.addEventListener('click', function () {
            if (a == '.btn_small') {
                let productName = i.parentElement.parentElement.querySelector('.product__name').textContent;
                document.querySelector("#order .modal__dscr").textContent = productName;
            }
            document.querySelector('.modal').classList.add('modal_active');
            document.querySelector(b).classList.add('modal__item_active');
        })
    }
}

function closeAll() {
    document.querySelector('.modal').classList.remove('modal_active');
    document.querySelector('.modal__item_active').classList.remove('modal__item_active');
}

function closeModal() {
    let closeBtn = document.querySelectorAll('.modal__close');
    for (let i of closeBtn) {
        i.addEventListener('click', closeAll)
    }
    let closeWindow = document.querySelector('.modal');
    closeWindow.addEventListener('click', closeAll);
    let itemActive = document.querySelectorAll('.modal__item');
    for (let i of itemActive) {
        i.addEventListener('click', function (e) {
            e.stopPropagation();
        })
    }
}

function scrollTo() {
    let links = document.querySelectorAll("a[href^='#']");
    for (let link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let anchor = this.hash;
            document.querySelector(anchor).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

function showUpArrow() {
    const upArrow = document.querySelector('.arrow__up');
    const seeHeight = window.innerHeight;

    window.addEventListener('scroll', function () {

        const scrollTop = window.pageYOffset;
        if (scrollTop > seeHeight) {
            upArrow.style.display = 'block';
        } else {
            upArrow.style.display = 'none';
        }
    })
}




showUpArrow();
scrollTo();
closeModal();
openModal('[data-modal=consult]', '#consult');
openModal('.btn_small', '#order');