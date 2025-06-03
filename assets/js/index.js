(
    function () {

        /**
         * Routing Code
         */
        const route = (event) => {
            alert(window.location.hash);
            event.preventDefault();
            window.location.hash = event.target.getAttribute("href");
            alert(window.location.hash);
            handleLocation();
          };
          
          const routes = {

            "#/mulit-step-form-main/": `
            <form action="">
                <div class="main-form">
                    <div class="contain-form-content">

                        <div class="form-header">
                            <h1>
                                Personal info
                            </h1>
                            <p>
                                Please provide your name, email address, and phone number.
                            </p>
                        </div>

                        <div class="form-field">
                            <div class="text-input">
                                <div class="label">
                                    <label for="name">Name</label>
                                    <div id="name-required" aria-hidden="true">This field is required</div>
                                </div>
                                <input type="text" id="name" placeholder="e.g. Stephen King">
                            </div>

                            <div class="text-input">
                                <div class="label">
                                    <label for="email">Email Address</label>
                                    <div id="email-required" aria-hidden="true">This field is required</div>
                                </div>
                                <input type="email" id="email" placeholder="e.g. stephenking@lorem.com">
                            </div>

                            <div class="text-input">
                                <div class="label">
                                    <label for="phone">Phone Number</label>
                                    <div id="phone-required" aria-hidden="true">This field is required</div>
                                </div>
                                <input type="tel" id="phone" placeholder="e.g. +1 234 567 890">
                            </div>
                        </div>

                    </div>
                </div>
                <div id="form-controls">
                    <div></div>

                    <div>
                        <button class="next-btn">Next Step</button>
                    </div>
                </div>
            </form>
            `,

            "#/select-plan": `
            <form action="">
                <div class="main-form">
                    <div class="contain-form-content">

                        <div class="form-header">
                            <h1>
                                Personal info
                            </h1>
                            <p>
                                Please provide your name, email address, and phone number.
                            </p>
                        </div>

                        <div class="form-field">
                            <div class="text-input">
                                <div class="label">
                                    <label for="name">Name</label>
                                    <div id="name-required" aria-hidden="true">This field is required</div>
                                </div>
                                <input type="text" id="name" placeholder="e.g. Stephen King">
                            </div>

                            <div class="text-input">
                                <div class="label">
                                    <label for="email">Email Address</label>
                                    <div id="email-required" aria-hidden="true">This field is required</div>
                                </div>
                                <input type="email" id="email" placeholder="e.g. stephenking@lorem.com">
                            </div>

                            <div class="text-input">
                                <div class="label">
                                    <label for="phone">Phone Number</label>
                                    <div id="phone-required" aria-hidden="true">This field is required</div>
                                </div>
                                <input type="tel" id="phone" placeholder="e.g. +1 234 567 890">
                            </div>
                        </div>

                    </div>
                </div>
                <div id="form-controls">
                    <div></div>

                    <div>
                        <button class="next-btn">Next Step</button>
                    </div>
                </div>
            </form>
            `,

            "#/add-ons": "assets/js/pages/add-ons.html",
            "#/summary": "assets/js/pages/summary.html"
          };
          
          function handleLocation() {
            const path = window.location.hash;
            document.getElementById("main-container").innerHTML = routes[path] || routes["#/mulit-step-form-main/"];
        }
          
          window.onpopstate = handleLocation;
          window.route = route;
          
          handleLocation();


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


        


    }
)();