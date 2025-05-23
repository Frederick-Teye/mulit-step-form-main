(
    function () {

        /** 
         * I don't know the platform I will be hosting the site, so I have to store and use
         * the first url that get's loaded when the website get's loaded  */
        let homeURL = "";
        let counter = 0;

        if (counter === 0) {
            homeURL = window.location.href;
            ++counter;
        }

        /**
         * This is to change the submit button when the user is on either mobile or desktop
         */
        function changeFormControl() {
            const desktopFormControls = document.getElementById('form-controls');
            const mobileFormControls = document.getElementById("second-form-controls");
            const mobileGoBackButton = document.getElementById('mobile-go-back-btn');

            if (screen.width < 578) {
                desktopFormControls.style.display = 'none';
                desktopFormControls.setAttribute('aria-hidden', 'true');
                if (mobileFormControls.getAttribute('aria-hidden') === 'true') {
                    mobileFormControls.setAttribute('aria-hidden', 'false');
                    mobileFormControls.style.display = 'flex';
                }

                if (window.location.href === homeURL) {
                    mobileGoBackButton.style.display = 'none';
                    mobileGoBackButton.setAttribute('aria-hidden', 'true');
                } else {
                    mobileGoBackButton.style.display = 'block';
                    mobileGoBackButton.setAttribute('aria-hidden', 'false');
                }
            } else {
                mobileFormControls.style.display = 'none';
                mobileFormControls.setAttribute('aria-hidden', 'true')
                if (desktopFormControls.getAttribute('aria-hidden') === 'true') {
                    desktopFormControls.setAttribute('aria-hidden', 'false');
                    desktopFormControls.style.display = 'flex';
                }
            }
        }
        
        // call changeFormControl() when the page is first loaded
        changeFormControl();

        // call changeFormControl() when the browser size is changed.
        window.addEventListener('resize', changeFormControl);


    }
)();