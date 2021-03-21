new Splide('#splide', {
    type: 'loop',
    perPage: 1,
    width: "835px",
    /*
        fixedWidth: "835px",
        fixedHeight: "592px", */
    classes: {
        arrows: 'splide__arrows ',
        arrow: 'splide__arrow arrow',
        prev: 'splide__arrow--prev a-p',
        next: 'splide__arrow--next a-n',
    },
    arrowPath: "M29.596 20.7071C29.9865 20.3166 29.9865 19.6834 29.596 19.2929L23.232 12.9289C22.8415 12.5384 22.2083 12.5384 21.8178 12.9289C21.4273 13.3195 21.4273 13.9526 21.8178 14.3431L27.4747 20L21.8178 25.6569C21.4273 26.0474 21.4273 26.6805 21.8178 27.0711C22.2083 27.4616 22.8415 27.4616 23.232 27.0711L29.596 20.7071ZM11.1111 21H28.8889V19H11.1111V21Z"
}).mount();