document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            image: 'assets/img/product_1.webp',
            title: 'Встраиваемый светильник Markt',
            priceNew: '3 490 ₽',
            priceOld: '5 060 ₽',
            badge: 'Акция',
        },
        {
            image: 'assets/img/product_2.webp',
            title: 'Линейный светильник ARG',
            priceFixed: '6 700 ₽',
        },
        {
            image: 'assets/img/product_3.webp',
            title: 'Сведодиодный светильник',
            priceNew: '5 060 ₽',
            priceOld: '6 060 ₽',
            badge: 'Акция',
        },
        {
            image: 'assets/img/product_1.webp',
            title: 'Встраиваемый светильник Markt',
            priceFixed: '3 490 ₽',
        },
        {
            image: 'assets/img/product_2.webp',
            title: 'Линейный светильник ARG',
            priceNew: '6 700 ₽',
            priceOld: '7 060 ₽',
            badge: 'Акция',
        },
        {
            image: 'assets/img/product_3.webp',
            title: 'Сведодиодный светильник',
            priceFixed: '5 060 ₽',
        },
        {
            image: 'assets/img/product_1.webp',
            title: 'Встраиваемый светильник Markt',
            priceNew: '3 490 ₽',
            priceOld: '6 060 ₽',
            badge: 'Акция',
        },
        {
            image: 'assets/img/product_2.webp',
            title: 'Линейный светильник ARG',
            priceFixed: '6 700 ₽',
        },
    ];

    const container = document.querySelector('.search-product__layout');

    const updatePrices = () => {
        const isSmallScreen = window.innerWidth <= 575.98;

        container.innerHTML = '';

        let updatedProducts = [...products];

        if (isSmallScreen) {
            updatedProducts = updatedProducts.map((product, index) => {
                if (product.title === 'Встраиваемый светильник Markt' && index === 0) {
                    product.priceFixed = product.priceNew;
                    delete product.priceNew;
                    delete product.priceOld;
                    delete product.badge;
                }

                if (product.title === 'Встраиваемый светильник Markt' && index === 1) {
                    product.priceNew = '3 040 ₽';
                }

                if (product.title === 'Линейный светильник ARG') {
                    product.priceFixed = product.priceNew;
                    delete product.priceNew;
                    delete product.priceOld;
                    product.priceFixed = '6 700 ₽';
                    delete product.badge;
                }

                if (product.title === 'Сведодиодный светильник') {
                    product.priceNew = product.priceFixed;
                    product.priceOld = '6 060 ₽';
                    product.badge = 'Акция';
                    delete product.priceFixed;
                }

                if (index === updatedProducts.length - 2) { 
                    product.title = 'SuperDZS Аэрогриль efRP6iSi';
                    product.priceFixed = product.priceNew;
                    delete product.priceNew;
                    delete product.priceOld;
                    delete product.badge;
                }

                return product;
            });

            const lastProduct = updatedProducts.splice(updatedProducts.length - 2, 1)[0];
            updatedProducts.push(lastProduct);
        }

        updatedProducts.forEach(product => {
            const priceHTML = `
                ${product.priceNew ? `<span class="search-product-price__new">${product.priceNew}</span>` : ''}
                ${product.priceOld ? `<span class="search-product-price__old">${product.priceOld}</span>` : ''}
                ${product.priceFixed ? `<span class="search-product-price__fixed">${product.priceFixed}</span>` : ''}
            `;

            const card = document.createElement('div');
            card.classList.add('search-product-card');
            card.innerHTML = `
                <div class="search-product-card__image-wrapper">
                    <img class="search-product-card__image" src="${product.image}" alt="${product.title}" loading="lazy">
                    ${product.badge ? `<div class="search-product-card__badge_sale">${product.badge}</div>` : ''}
                    <div class="search-product-card__button_wrapper">
                        <button class="search-product-card__button">Подробнее</button>
                    </div>
                </div>
                <h4 class="search-product-card__title">${product.title}</h4>
                <div class="search-product-price">
                    ${priceHTML}
                </div>
            `;
            container.appendChild(card);
        });
    };

    updatePrices();
    window.addEventListener('resize', updatePrices);
});