document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================= */

    function toggleMenu(force) {

        const navLinks = document.getElementById("navLinks");
        const menuButton = document.getElementById("menuButton");

        if (!navLinks || !menuButton) return;

        const shouldOpen =
            typeof force === "boolean"
                ? force
                : !navLinks.classList.contains("active");

        navLinks.classList.toggle("active", shouldOpen);

        menuButton.setAttribute(
            "aria-expanded",
            String(shouldOpen)
        );
    }


    const menuButton = document.getElementById("menuButton");

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            function () {
                toggleMenu();
            }
        );

    }


    document.querySelectorAll("#navLinks a").forEach(function (link) {

        link.addEventListener(
            "click",
            function () {
                toggleMenu(false);
            }
        );

    });


    /* =========================================
       MAIN SITE SEARCH
    ========================================= */

    const siteSearch = document.getElementById("siteSearch");

    if (siteSearch) {

        siteSearch.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const searchInput =
                    document.getElementById("searchInput");

                if (!searchInput) return;

                const query =
                    searchInput.value.trim().toLowerCase();

                const opportunities =
                    document.getElementById("opportunities");

                if (!query) {

                    if (opportunities) {
                        opportunities.scrollIntoView({
                            behavior: "smooth"
                        });
                    }

                    return;
                }


                const matches = [
                    ...document.querySelectorAll(
                        ".opportunity-card, .service-card, .resource-card"
                    )
                ].filter(function (card) {

                    return card.textContent
                        .toLowerCase()
                        .includes(query);

                });


                if (opportunities) {

                    opportunities.scrollIntoView({
                        behavior: "smooth"
                    });

                }


                document
                    .querySelectorAll(".search-highlight")
                    .forEach(function (element) {

                        element.classList.remove(
                            "search-highlight"
                        );

                    });


                matches.forEach(function (card) {

                    card.classList.add(
                        "search-highlight"
                    );

                    setTimeout(function () {

                        card.classList.remove(
                            "search-highlight"
                        );

                    }, 2200);

                });


                if (!matches.length) {

                    alert(
                        "We couldn't find a matching section yet. " +
                        "Try searching for admissions, scholarships, " +
                        "JAMB, registration, CBT or grants."
                    );

                }

            }
        );

    }


    /* =========================================
       ELEVIQ ADMISSIONS
    ========================================= */

    const admissionSearch =
        document.getElementById("admissionSearch");

    const institutionFilter =
        document.getElementById("institutionFilter");

    const admissionTypeFilter =
        document.getElementById("admissionTypeFilter");

    const admissionStatusFilter =
        document.getElementById("admissionStatusFilter");

    const noAdmissionResults =
        document.getElementById("noAdmissionResults");


    /* =========================================
       FILTER ADMISSIONS
    ========================================= */

    function filterAdmissions() {

        const searchText =
            admissionSearch
                ? admissionSearch.value
                    .toLowerCase()
                    .trim()
                : "";

        const institutionValue =
            institutionFilter
                ? institutionFilter.value
                : "all";

        const typeValue =
            admissionTypeFilter
                ? admissionTypeFilter.value
                : "all";

        const statusValue =
            admissionStatusFilter
                ? admissionStatusFilter.value
                : "all";


        const cards =
            document.querySelectorAll(
                ".admission-card"
            );


        let visibleCards = 0;


        cards.forEach(function (card) {

            const searchData =
                (card.dataset.search || "")
                    .toLowerCase();

            const institution =
                card.dataset.institution || "";

            const type =
                card.dataset.type || "";

            const status =
                card.dataset.status || "";


            const matchesSearch =
                searchText === "" ||
                searchData.includes(searchText);


            const matchesInstitution =
                institutionValue === "all" ||
                institution === institutionValue;


            const matchesType =
                typeValue === "all" ||
                type === typeValue;


            const matchesStatus =
                statusValue === "all" ||
                status === statusValue;


            if (
                matchesSearch &&
                matchesInstitution &&
                matchesType &&
                matchesStatus
            ) {

                card.style.display = "";

                visibleCards++;

            } else {

                card.style.display = "none";

            }

        });


        if (noAdmissionResults) {

            noAdmissionResults.style.display =
                visibleCards === 0
                    ? "block"
                    : "none";

        }

    }


    /* =========================================
       ADMISSION SEARCH
    ========================================= */

    if (admissionSearch) {

        admissionSearch.addEventListener(
            "input",
            filterAdmissions
        );

    }


    /* =========================================
       ADMISSION FILTERS
    ========================================= */

    if (institutionFilter) {

        institutionFilter.addEventListener(
            "change",
            filterAdmissions
        );

    }


    if (admissionTypeFilter) {

        admissionTypeFilter.addEventListener(
            "change",
            filterAdmissions
        );

    }


    if (admissionStatusFilter) {

        admissionStatusFilter.addEventListener(
            "change",
            filterAdmissions
        );

    }


    /* =========================================
       ADMISSION DETAILS
    ========================================= */

    window.showAdmissionDetails =
        function (admission) {

            const modal =
                document.getElementById(
                    "admissionModal"
                );

            const details =
                document.getElementById(
                    "admissionDetails"
                );


            if (!modal || !details) {
                return;
            }


            let content = "";


            if (admission === "lautech") {

                content = `
                    <div class="admission-details">

                        <span class="section-tag">
                            ADMISSION OPPORTUNITY
                        </span>

                        <h2>LAUTECH</h2>

                        <p><strong>JUPEB Programme</strong></p>

                        <h4>About the Programme</h4>

                        <p>
                            Verified information about this
                            programme will be displayed here.
                        </p>

                        <h4>Requirements</h4>

                        <ul>
                            <li>Verified O'Level requirements.</li>
                            <li>Eligibility requirements.</li>
                            <li>Other programme conditions.</li>
                        </ul>

                        <h4>Application Information</h4>

                        <p>
                            Application deadline and instructions
                            will be added after verification.
                        </p>

                        <a
                            href="#contact"
                            class="admission-apply-btn"
                            onclick="closeAdmissionDetails()"
                        >
                            Get Admission Assistance
                        </a>

                    </div>
                `;

            }


            else if (admission === "oaustech") {

                content = `
                    <div class="admission-details">

                        <span class="section-tag">
                            ADMISSION OPPORTUNITY
                        </span>

                        <h2>OAUSTECH</h2>

                        <p><strong>Post-UTME Admission</strong></p>

                        <h4>About the Admission</h4>

                        <p>
                            Verified information about this
                            admission will be displayed here.
                        </p>

                        <h4>Requirements</h4>

                        <ul>
                            <li>Verified admission requirements.</li>
                            <li>O'Level requirements.</li>
                            <li>Other eligibility conditions.</li>
                        </ul>

                        <h4>Application Information</h4>

                        <p>
                            Application deadline and instructions
                            will be added after verification.
                        </p>

                        <a
                            href="#contact"
                            class="admission-apply-btn"
                            onclick="closeAdmissionDetails()"
                        >
                            Get Admission Assistance
                        </a>

                    </div>
                `;

            }


            else if (admission === "lautech-predegree") {

                content = `
                    <div class="admission-details">

                        <span class="section-tag">
                            ADMISSION OPPORTUNITY
                        </span>

                        <h2>LAUTECH</h2>

                        <p><strong>Pre-degree Programme</strong></p>

                        <h4>About the Programme</h4>

                        <p>
                            Verified information about this
                            programme will be displayed here.
                        </p>

                        <h4>Requirements</h4>

                        <ul>
                            <li>Verified requirements.</li>
                            <li>Required subjects.</li>
                            <li>Other eligibility conditions.</li>
                        </ul>

                        <h4>Application Information</h4>

                        <p>
                            Application deadline and instructions
                            will be added after verification.
                        </p>

                        <a
                            href="#contact"
                            class="admission-apply-btn"
                            onclick="closeAdmissionDetails()"
                        >
                            Get Admission Assistance
                        </a>

                    </div>
                `;

            }


            details.innerHTML = content;

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        };


    /* =========================================
       CLOSE ADMISSION MODAL
    ========================================= */

    window.closeAdmissionDetails =
        function () {

            const modal =
                document.getElementById(
                    "admissionModal"
                );


            if (!modal) {
                return;
            }


            modal.classList.remove("active");

            document.body.style.overflow = "";

        };


    /* =========================================
       CLOSE MODAL BY CLICKING OUTSIDE
    ========================================= */

    const admissionModal =
        document.getElementById(
            "admissionModal"
        );


    if (admissionModal) {

        admissionModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === admissionModal
                ) {

                    window.closeAdmissionDetails();

                }

            }
        );

    }

});
