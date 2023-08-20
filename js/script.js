function generateSliderImages() {
    const sliderImages = [
        'ocean.jpg',
        'ski.jpg',
        'city.jpg'
    ];

    const sliderContainer = document.querySelector('.slider');

    for (const current of sliderImages) {
        const newSliderImage = document.createElement('img');

        newSliderImage.src = "img/" + current;

        newSliderImage.classList.add("slider__img");

        newSliderImage.alt = "Partir à la plage";

        sliderContainer.prepend(newSliderImage);
    }
    const firstSliderImage = document.querySelector('.slider__img');

    firstSliderImage.classList.add('slider__img--current');
}

const menuItemElement = document.querySelector('#newsletter-btn');

function handleClickNewsletterMenu(event) {
    event.preventDefault();
    // console.log('Tu viens de cliquer sur le bouton Newsletter');
    const newsletterPanel = document.querySelector('.newsletter');
    newsletterPanel.classList.add('newsletter--on');
}

menuItemElement.addEventListener('click', handleClickNewsletterMenu);

const closeElement = document.querySelector('.newsletter__close');

function handleClickNewsletterCross() {
    const newsletterPanel = document.querySelector('.newsletter');
    newsletterPanel.classList.remove('newsletter--on');
}

closeElement.addEventListener('click', handleClickNewsletterCross);

const forbiddenDomains = [
    '@yopmail.com',
    '@yopmail.fr',
    '@yopmail.net',
    '@cool.fr.nf',
    '@jetable.fr.nf',
    '@courriel.fr.nf',
    '@moncourrier.fr.nf',
    '@monemail.fr.nf',
    '@monmail.fr.nf',
    '@hide.biz.st',
    '@mymail.infos.st',
];

function isForbiddenEmail(email) {
    for (const domain of forbiddenDomains) {
        if (email.includes(domain)) {
            return false;
        }
    }
    return true;
}

const formElement = document.querySelector('.newsletter form');

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const userValue = document.querySelector('.newsletter__field').value;

    if (isForbiddenEmail(userValue) === false) {
        const previousSuccess = document.querySelector('.newsletter .message--success');
        if (previousSuccess) {
            previousSuccess.remove();
        }

        const newError = document.createElement('p');
        newError.classList.add('message', 'message--error');
        newError.innerHTML = "Les adresses jetables ne sont pas admises";

        const newsletterPanel = document.querySelector('.newsletter');
        newsletterPanel.append(newError);

        // Messages Cleaner
        setTimeout(() => {
            newError.remove();
        }, 2500);

    } else {
        const previousError = document.querySelector('.newsletter .message--error');
        if (previousError) {
            previousError.remove();
        }

        const newSuccess = document.createElement('p');
        newSuccess.classList.add('message', 'message--success');
        newSuccess.innerHTML = "Merci de vous être abonné !";

        const newsletterPanel = document.querySelector('.newsletter');
        newsletterPanel.append(newSuccess);

        // Messages Cleaner
        setTimeout(() => {
            newSuccess.remove();
        }, 2500);
    }
}

formElement.addEventListener('submit', handleNewsletterSubmit);

destinations.init();