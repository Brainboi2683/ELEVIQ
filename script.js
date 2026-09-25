function toggleMenu(force) {
  const navLinks = document.getElementById("navLinks");
  const menuButton = document.getElementById("menuButton");
  const shouldOpen = typeof force === "boolean" ? force : !navLinks.classList.contains("active");

  navLinks.classList.toggle("active", shouldOpen);
  menuButton.setAttribute("aria-expanded", String(shouldOpen));
}

document.getElementById("menuButton").addEventListener("click", () => toggleMenu());

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => toggleMenu(false));
});

document.getElementById("siteSearch").addEventListener("submit", function (event) {
  event.preventDefault();

  const query = document.getElementById("searchInput").value.trim().toLowerCase();

  if (!query) {
    document.getElementById("opportunities").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const matches = [...document.querySelectorAll(".opportunity-card, .service-card, .resource-card")]
    .filter(card => card.textContent.toLowerCase().includes(query));

  document.getElementById("opportunities").scrollIntoView({ behavior: "smooth" });

  document.querySelectorAll(".search-highlight").forEach(el => el.classList.remove("search-highlight"));

  matches.forEach(card => {
    card.classList.add("search-highlight");
    setTimeout(() => card.classList.remove("search-highlight"), 2200);
  });

  if (!matches.length) {
    alert("We couldn't find a matching section yet. Try searching for admissions, scholarships, JAMB, registration, CBT or grants.");
  }
});
/* =========================================
   ELEVIQ — ADMISSIONS FUNCTIONALITY
========================================= */

const admissionSearch = document.getElementById("admissionSearch");
const institutionFilter = document.getElementById("institutionFilter");
const admissionTypeFilter = document.getElementById("admissionTypeFilter");
const admissionStatusFilter = document.getElementById("admissionStatusFilter");
const admissionsList = document.getElementById("admissionsList");
const noAdmissionResults = document.getElementById("noAdmissionResults");


// ===============================
// FILTER ADMISSIONS
// ===============================

function filterAdmissions() {

    const searchText = admissionSearch.value.toLowerCase().trim();
    const institutionValue = institutionFilter.value;
    const typeValue = admissionTypeFilter.value;
    const statusValue = admissionStatusFilter.value;

    const cards = document.querySelectorAll(".admission-card");

    let visibleCards = 0;

    cards.forEach(function(card) {

        const searchData = card.dataset.search.toLowerCase();
        const institution = card.dataset.institution;
        const type = card.dataset.type;
        const status = card.dataset.status;

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


    if (visibleCards === 0) {

        noAdmissionResults.style.display = "block";

    } else {

        noAdmissionResults.style.display = "none";

    }

}


// ===============================
// SEARCH
// ===============================

if (admissionSearch) {

    admissionSearch.addEventListener(
        "input",
        filterAdmissions
    );

}


// ===============================
// FILTER EVENTS
// ===============================

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


// ===============================
// ADMISSION DETAILS
// ===============================

function showAdmissionDetails(admission) {

    const modal = document.getElementById("admissionModal");
    const details = document.getElementById("admissionDetails");

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

                <p>
                    JUPEB Programme
                </p>

                <h4>About the Programme</h4>

                <p>
                    This section will contain verified information
                    about the programme, eligibility requirements,
                    application procedure and other important details.
                </p>

                <h4>Requirements</h4>

                <ul>
                    <li>Verified admission requirements will be listed here.</li>
                    <li>Required O'Level subjects will be listed here.</li>
                    <li>Other eligibility conditions will be listed here.</li>
                </ul>

                <h4>Application Information</h4>

                <p>
                    Application deadline and application instructions
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

                <p>
                    Post-UTME Admission
                </p>

                <h4>About the Admission</h4>

                <p>
                    Verified information about the admission,
                    eligibility, requirements and application
                    procedure will appear here.
                </p>

                <h4>Requirements</h4>

                <ul>
                    <li>Verified requirements will be listed here.</li>
                    <li>O'Level requirements will be listed here.</li>
                    <li>Other eligibility conditions will be listed here.</li>
                </ul>

                <h4>Application Information</h4>

                <p>
                    Application deadline and application instructions
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

                <p>
                    Pre-degree Programme
                </p>

                <h4>About the Programme</h4>

                <p>
                    Verified information about the programme,
                    eligibility requirements and application
                    procedure will appear here.
                </p>

                <h4>Requirements</h4>

                <ul>
                    <li>Verified requirements will be listed here.</li>
                    <li>Required subjects will be listed here.</li>
                    <li>Other eligibility conditions will be listed here.</li>
                </ul>

                <h4>Application Information</h4>

                <p>
                    Application deadline and application instructions
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

}


// ===============================
// CLOSE MODAL
// ===============================

function closeAdmissionDetails() {

    const modal = document.getElementById("admissionModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


// ===============================
// CLOSE WHEN CLICKING OUTSIDE
// ===============================

const admissionModal =
    document.getElementById("admissionModal");


if (admissionModal) {

    admissionModal.addEventListener(
        "click",
        function(event) {

            if (event.target === admissionModal) {

                closeAdmissionDetails();

            }

        }
    );

          }
