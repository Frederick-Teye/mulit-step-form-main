(
    function () {

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

                if (window.location.pathname === "/") {
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


        /**
         * Routing Code
         */
        const route = (event) => {
            event = event || window.event;
            event.preventDefault();
            window.history.pushState({}, "", event.target.href);
            handleLocation();
          };
          
          const routes = {
            404: "pages/404.html",
            "/mulit-step-form-main/": "pages/your-info.html",
            "select-plan": "pages/select-plan.html",
            "add-ons": "pages/add-ons.html",
            "summary": "pages/summary.html"
          };
          
          const handleLocation = async () => {
            const path = window.location.pathname;
            const route = routes[path] || routes[404];
            const html = await fetch(route).then((data) => data.text());
            document.getElementById("main-container").innerHTML = html;
          };
          
          window.onpopstate = handleLocation;
          window.route = route;
          
          handleLocation();


    }
)();