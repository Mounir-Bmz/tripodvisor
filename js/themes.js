const theme = {
    init: function () {
        const changeThemeButton = document.querySelector('#theme-switch');
        changeThemeButton.addEventListener('click', theme.handleChangeTheme);

        const colorButtonsElements = document.querySelectorAll('.theme-button');

        for (const Element of colorButtonsElements) {
            Element.addEventListener('click', theme.handleThemeColorClick);
        }

        theme.initLocalState();
    },

    initLocalState: function () {
        const localSave = localStorage.getItem('theme');
        if (localSave === "dark") {
            document.body.classList.add('theme-dark');
        } else {
            document.body.classList.remove('theme-dark');
        }
        const colorTheme = localStorage.getItem('colorTheme');
        if (colorTheme) {
            theme.changeColorTheme(colorTheme);
        }
    },

    handleThemeColorClick: function (event) {
        const themeColor = event.target.id;
        theme.changeColorTheme(themeColor);
        localStorage.setItem('colorTheme', themeColor);
    },

    changeColorTheme: function (theme) {
        const bodyElement = document.querySelector('body');
        bodyElement.classList.remove('theme-red', 'theme-blue', 'theme-green');
        bodyElement.classList.add(theme);
        const logoPath = "img/logo-" + theme + ".png";
        const logoElement = document.querySelector('.logo__image');
        logoElement.src = logoPath;
    },
    
    handleChangeTheme: function () {
        const body = document.querySelector('body');
        if (body.classList.contains('theme-dark')) {
            body.classList.remove('theme-dark');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('theme-dark');
            localStorage.setItem('theme', 'dark');
        }
    }
};

document.addEventListener('DOMContentLoaded', theme.init);