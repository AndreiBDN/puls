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