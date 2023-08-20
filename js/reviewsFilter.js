const reviewsFilter = {
    init: function () {
        const ratingCheckboxes = document.querySelectorAll('.filter input');

        for (const checkBox of ratingCheckboxes) {
            checkBox.addEventListener('click', reviewsFilter.handleClickOnRatingCheckbox);
        }
    },

    handleClickOnRatingCheckbox: function (event) {
        const ratingCheckbox = event.target;
        const rating = ratingCheckbox.value;
        reviewsFilter.toggleReviewsFromRating(rating);
    },

    toggleReviewsFromRating: function (rating) {
        const reviewsToFilter = document.querySelectorAll('.review[data-rating="' + rating + '"]');
        for (const reviewElement of reviewsToFilter) {
            reviewElement.classList.toggle('review--hidden');
        }
    }
}

reviewsFilter.init();