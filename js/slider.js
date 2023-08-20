const slider = {
    sliderImages: [
        'ocean.jpg',
        'ski.jpg',
        'city.jpg'
    ],

    sliderImagesElements: [],
    currentImageIndex: 0,

    generateSliderImages: function () {
        const sliderContainer = document.querySelector('.slider');

        for (const current of slider.sliderImages) {
            const newSliderImage = document.createElement('img');
            newSliderImage.src = "img/" + current;
            newSliderImage.classList.add("slider__img");
            newSliderImage.alt = "Partir à la plage";
            sliderContainer.prepend(newSliderImage);
        }

        const firstSliderImage = document.querySelector('.slider__img');
        firstSliderImage.classList.add('slider__img--current');
    },

    init: function () {
        slider.generateSliderImages();
        slider.sliderImagesElements = document.querySelectorAll('.slider__img');

        const sliderButtons = document.querySelectorAll('.slider__btn');
        
        const previousSliderButton = sliderButtons[0];
        previousSliderButton.addEventListener('click', slider.handleClickPreviousSlide);

        const nextSliderButton = sliderButtons[1];
        nextSliderButton.addEventListener('click', slider.handleClickNextSlide);
    },

    handleClickNextSlide: function () {
        const currentImage = document.querySelector('.slider__img--current');
        currentImage.classList.remove('slider__img--current');

        // console.log("avant d'incrementer l'index = " + slider.currentImageIndex);
        slider.currentImageIndex++;
        // console.log("apres avoir incrementer l'index = " + slider.currentImageIndex);

        if (slider.currentImageIndex === 3) {
            slider.currentImageIndex = 0;
        }
        
        const newCurrentImage = slider.sliderImagesElements[slider.currentImageIndex];
        // console.log(newCurrentImage);
        newCurrentImage.classList.add('slider__img--current');

    },

    handleClickPreviousSlide : function() {
        const currentImage = document.querySelector('.slider__img--current');
        currentImage.classList.remove('slider__img--current');
  
        slider.currentImageIndex--;
        if (slider.currentImageIndex < 0) {
            slider.currentImageIndex = 2;
        }
  
        const newCurrentImage = slider.sliderImagesElements[slider.currentImageIndex];
        newCurrentImage.classList.add('slider__img--current');
    }
}

document.addEventListener('DOMContentLoaded', slider.init);