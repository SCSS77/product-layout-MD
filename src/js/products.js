function loadProductsToSection(products, sectionId, numberOfProducts) {
    const productList = document.getElementById(sectionId);
    const productsToShow = products.slice(0, numberOfProducts);

    productsToShow.forEach(product => {
        const container = document.createElement('div');
        container.classList.add('n4a-item', 'sk-load2');

        const productView = document.createElement('product-view');
        productView.classList.add('p-view');

        const chargedContainer = document.createElement('div');
        chargedContainer.classList.add('charged');

        const productItem = document.createElement('div');
        productItem.classList.add('card9-wrap');
        productItem.innerHTML = `
            <div class="card9">
                <div class="js-card9-inner rat-2-3">
                    <div class="rat-content">
                        <div class="relative">
                            <product-view-media>
                                <div class="product-view-wrap">
                                    <picture>
                                        <a class="card9-link" href="${product.url}">
                                            <div class="img-poster">
                                                <img class="card9-image" src="${product.image}" alt="${product.title}" />
                                            </div>
                                        </a>
                                    </picture>
                                </div>
                            </product-view-media>
                            <product-view-addtocart class="card9-add text-center">
                                <div class="title-s mb-8 quickly-add-cart">AÑADIR TALLA</div>
                                <product-size-selector class="is-flex content-center">
                                    <ul class="btn-group product-size-selector list-clear">
                                        ${product.sizes.map(size => `
                                            <li class="product-size-selector__li w-100">
                                                <button class="product-size-selector__button title-s">
                                                    <span>${size}</span>
                                                </button>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </product-size-selector>
                            </product-view-addtocart>
                        </div>
                    </div>
                </div>
                <product-view-details class="card9-wrap-details">
                    <div class="card9-contents">
                        <div class="is-flex content-sp-between mb-4">
                            <div class="text-m ttu product-title name-width-product has-ellipsis product-with-colors">
                                <a class="pointer" href="${product.url}">${product.title}</a>
                            </div>
                            <div class="product-view-info pl-16">
                                <product-view-color-selector class="color-wrap color-square">
                                    <div class="product-color-selector">
                                        <div class="product-color-buttons is-flex flex-vcenter">
                                            <button class="product-color-tile" title="CRUDO">
                                                <div class="is-flex"><img loading="lazy" src="${product.image}" alt="${product.title}"></div>
                                            </button>
                                            <button aria-label="More colors" class="color-selector title-s"> +1 </button>
                                        </div>
                                    </div>
                                </product-view-color-selector>
                            </div>
                        </div>
                        <product-prices>
                            <div class="product-price">
                                <div class="is-flex text-m leading-1 mb-4">
                                    <div class="is-through mr-8 c-dark-grey">${product.price}</div>
                                    <div>${product.price}</div>
                                </div>
                                <div class="d-price-special text-m mb-4">
                                    <div><label> -40% <label>*</label></label> ${product.discount} </div>
                                </div>
                            </div>
                        </product-prices>
                        <div class="tag-wrapper grid-product-list">
                            <span class="product-tag title-s pr-8">${product.tag}</span>
                        </div>
                    </div>
                </product-view-details>
            </div>
        `;
        chargedContainer.appendChild(productItem);
        productView.appendChild(chargedContainer);
        container.appendChild(productView);
        productList.appendChild(container);
    });
}

const products = [
    {
        url: "/es/camiseta-manga-corta-cuello-contraste-l01419289",
        image: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
        title: "Camiseta manga corta cuello contraste",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: "25,95 €",
        discount: "15,95 €",
        tag: "ONLINE EXCLUSIVE"
    },
    {
        url: "/es/top-crop-halter-rayas-l06879535",
        image: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
        title: "Top crop halter rayas",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: "29,95 €",
        discount: "17,95 €",
        tag: "LIMITED EDITION"
    },
    {
        url: "/es/camiseta-larga-cuello-alto-l01419345",
        image: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
        title: "Camiseta larga cuello alto",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: "22,95 €",
        discount: "14,95 €",
        tag: "NEW ARRIVAL"
    },
    {
        url: "/es/sudadera-con-capucha-l01419345",
        image: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
        title: "Sudadera con capucha",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: "39,95 €",
        discount: "25,95 €",
        tag: "SALE"
    },
    {
        url: "/es/pantalones-deportivos-l01419345",
        image: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
        title: "Pantalones deportivos",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: "34,95 €",
        discount: "22,95 €",
        tag: "BEST SELLER"
    },
    {
        url: "/es/zapatos-de-running-l01419345",
        image: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
        title: "Zapatos de running",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: "49,95 €",
        discount: "39,95 €",
        tag: "NEW ARRIVAL"
    },
    {
        url: "/es/camiseta-de-manga-larga-l01419345",
        image: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
        title: "Camiseta de manga larga",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: "18,95 €",
        discount: "12,95 €",
        tag: "SALE"
    },
    {
        url: "/es/camiseta-de-deportes-l01419345",
        image: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
        title: "Camiseta de deportes",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: "27,95 €",
        discount: "19,95 €",
        tag: "LIMITED EDITION"
    },
    {
        url: "/es/chaqueta-de-punto-l01419345",
        image: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
        title: "Chaqueta de punto",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: "44,95 €",
        discount: "30,95 €",
        tag: "ONLINE EXCLUSIVE"
    },
    {
        url: "/es/pantalon-vaquero-l01419345",
        image: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
        title: "Pantalón vaquero",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: "35,95 €",
        discount: "24,95 €",
        tag: "BEST SELLER"
    },
    {
        url: "/es/chaqueta-de-cuero-l01419345",
        image: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
        title: "Chaqueta de cuero",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: "89,95 €",
        discount: "69,95 €",
        tag: "NEW ARRIVAL"
    },
    {
        url: "/es/camiseta-basica-l01419345",
        image: "https://holygrailcss.github.io/assets/placeholder/2-3.jpg",
        title: "Camiseta básica",
        sizes: ["S", "M", "L", "XL", "XXL"],
        price: "14,95 €",
        discount: "10,95 €",
        tag: "SALE"
    }
];

loadProductsToSection(products, 'product-list-section2', 2);
loadProductsToSection(products, 'product-list', 12);