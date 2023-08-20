const destinations = {

    init: function () {
        const likeButton = document.querySelectorAll('.btn__like');
        for (const currentLike of likeButton) {
            currentLike.addEventListener('click', destinations.handleLikeClick);
        }
    },
    errorMessage: "Vous devez être connecté pour gérer vos favoris",

    handleLikeClick: function (event) {
        const tousLarticle = event.target.closest('.card');
        const oldMessages = tousLarticle.querySelectorAll('.message');

        for (const oldMessage of oldMessages) {
            oldMessage.remove();
        }
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('message');
        errorMessage.textContent = destinations.errorMessage;
        tousLarticle.prepend(errorMessage);
    }
}