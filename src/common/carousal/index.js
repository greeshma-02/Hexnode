import React from 'react';
import Slider from 'react-slick';
import './style.css';

const Carousel = ({ contentItems, isImageCarousel = false, isArrows = false }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: isImageCarousel ? contentItems.length : 1,  // Adjust this value for number of visible slides
        slidesToScroll: 1,
        arrows: isArrows,
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        adaptiveHeight: true,  // Adjust the height dynamically to the content
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {contentItems.map((item, index) => (
                    <div key={index} className="carousel-item">
                        {isImageCarousel ? (
                            <div className="carousel-img">
                                <img src={item} alt={`Logo ${index + 1}`} />
                            </div>
                        ) : (
                            item
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
