/* =========================================================
   ELEVIQ ADMISSIONS SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       INSTITUTION DATABASE
    ===================================================== */

    const institutions = [

        /* =================================================
           FEDERAL UNIVERSITIES
        ================================================= */

        {
            name: "Ahmadu Bello University",
            shortName: "ABU",
            type: "university",
            ownership: "federal",
            state: "Kaduna",
            location: "Zaria",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://portal.abu.edu.ng/",
            website: "https://abu.edu.ng/"
        },

        {
            name: "Federal University of Technology, Minna",
            shortName: "FUTMINNA",
            type: "university",
            ownership: "federal",
            state: "Niger",
            location: "Minna",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://eportal.futminna.edu.ng/ePortal_V2/appl/index.php",
            website: "https://futminna.edu.ng/"
        },

        {
            name: "University of Abuja",
            shortName: "UNIABUJA",
            type: "university",
            ownership: "federal",
            state: "FCT",
            location: "Abuja",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://portal.uniabuja.edu.ng/",
            website: "https://www.uniabuja.edu.ng/"
        },

        {
            name: "University of Lagos",
            shortName: "UNILAG",
            type: "university",
            ownership: "federal",
            state: "Lagos",
            location: "Akoka",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://admissions.unilag.edu.ng/",
            website: "https://unilag.edu.ng/"
        },

        {
            name: "University of Ibadan",
            shortName: "UI",
            type: "university",
            ownership: "federal",
            state: "Oyo",
            location: "Ibadan",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://admissions.ui.edu.ng/",
            website: "https://ui.edu.ng/"
        },

        {
            name: "University of Ilorin",
            shortName: "UNILORIN",
            type: "university",
            ownership: "federal",
            state: "Kwara",
            location: "Ilorin",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://portal.unilorin.edu.ng/",
            website: "https://www.unilorin.edu.ng/"
        },

        {
            name: "Obafemi Awolowo University",
            shortName: "OAU",
            type: "university",
            ownership: "federal",
            state: "Osun",
            location: "Ile-Ife",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://admissions.oauife.edu.ng/",
            website: "https://oauife.edu.ng/"
        },

        {
            name: "University of Benin",
            shortName: "UNIBEN",
            type: "university",
            ownership: "federal",
            state: "Edo",
            location: "Benin City",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://waeup.uniben.edu/",
            website: "https://uniben.edu/"
        },

        {
            name: "University of Nigeria, Nsukka",
            shortName: "UNN",
            type: "university",
            ownership: "federal",
            state: "Enugu",
            location: "Nsukka",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://admissions.unn.edu.ng/",
            website: "https://www.unn.edu.ng/"
        },

        {
            name: "University of Port Harcourt",
            shortName: "UNIPORT",
            type: "university",
            ownership: "federal",
            state: "Rivers",
            location: "Port Harcourt",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://utmedetails.uniport.edu.ng/",
            website: "https://www.uniport.edu.ng/"
        },

        {
            name: "University of Calabar",
            shortName: "UNICAL",
            type: "university",
            ownership: "federal",
            state: "Cross River",
            location: "Calabar",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://portal.unical.edu.ng/",
            website: "https://www.unical.edu.ng/"
        },

        {
            name: "University of Uyo",
            shortName: "UNIUYO",
            type: "university",
            ownership: "federal",
            state: "Akwa Ibom",
            location: "Uyo",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://uniuyo.edu.ng/",
            website: "https://uniuyo.edu.ng/"
        },

        {
            name: "Bayero University Kano",
            shortName: "BUK",
            type: "university",
            ownership: "federal",
            state: "Kano",
            location: "Kano",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://buk.edu.ng/students_portals_new",
            website: "https://www.buk.edu.ng/"
        },

        {
            name: "Federal University Gashua",
            shortName: "FUGASHUA",
            type: "university",
            ownership: "federal",
            state: "Yobe",
            location: "Gashua",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://fugashua.edu.ng/",
            website: "https://fugashua.edu.ng/"
        },

        {
            name: "Federal University of Petroleum Resources, Effurun",
            shortName: "FUPRE",
            type: "university",
            ownership: "federal",
            state: "Delta",
            location: "Effurun",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://soap.fupre.edu.ng/utme/",
            website: "https://www.fupre.edu.ng/"
        },

        {
            name: "Federal University of Technology, Akure",
            shortName: "FUTA",
            type: "university",
            ownership: "federal",
            state: "Ondo",
            location: "Akure",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://www.futa.edu.ng/",
            website: "https://www.futa.edu.ng/"
        },

        {
            name: "Federal University of Technology, Owerri",
            shortName: "FUTO",
            type: "university",
            ownership: "federal",
            state: "Imo",
            location: "Owerri",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://portal.futo.edu.ng/",
            website: "https://www.futo.edu.ng/"
        },

        {
            name: "Federal University, Dutse",
            shortName: "FUD",
            type: "university",
            ownership: "federal",
            state: "Jigawa",
            location: "Dutse",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://www.fud.edu.ng/",
            website: "https://www.fud.edu.ng/"
        },

        {
            name: "Federal University, Dutsin-Ma",
            shortName: "FUDMA",
            type: "university",
            ownership: "federal",
            state: "Katsina",
            location: "Dutsin-Ma",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://portal.fudutsinma.edu.ng/",
            website: "https://www.fudutsinma.edu.ng/"
        },


        /* =================================================
           STATE UNIVERSITIES
        ================================================= */

        {
            name: "Lagos State University",
            shortName: "LASU",
            type: "university",
            ownership: "state",
            state: "Lagos",
            location: "Ojo",
            admission: "post-utme",
            status: "check",
            session: "2026/2027",
            portal: "https://services.lidc.lasu.edu.ng/",
            website: "https://lasu.edu.ng/"
        },

        {
            name: "Ladoke Akintola University of Technology",
            shortName: "LAUTECH",
            type: "university",
            ownership: "state",
            state: "Oyo",
            location: "Ogbomoso",
            admission: "jupeb",
            status: "check",
            session: "2026/2027",
            portal: "https://www.apply.lautech.edu.ng/",
            website: "https://lautech.edu.ng/"
        },

        {
            name: "Ambrose Alli University",
            shortName: "AAU",
            type: "university",
            ownership: "state",
            state: "Edo",
            location: "Ekpoma",
            admission: "post-utme",
            status: "check",
            session: "2026/2027",
            portal: "https://aaue.waeup.org/",
            website: "https://aauekpoma.edu.ng/"
        },

        {
            name: "Adekunle Ajasin University",
            shortName: "AAUA",
            type: "university",
            ownership: "state",
            state: "Ondo",
            location: "Akungba-Akoko",
            admission: "post-utme",
            status: "check",
            session: "2026/2027",
            portal: "https://eportal.aaua.edu.ng/",
            website: "https://aaua.edu.ng/"
        },

        {
            name: "Olabisi Onabanjo University",
            shortName: "OOU",
            type: "university",
            ownership: "state",
            state: "Ogun",
            location: "Ago-Iwoye",
            admission: "post-utme",
            status: "check",
            session: "2026/2027",
            portal: "https://putme.oouagoiwoye.edu.ng/",
            website: "https://oouagoiwoye.edu.ng/"
        },

        {
            name: "Osun State University",
            shortName: "UNIOSUN",
            type: "university",
            ownership: "state",
            state: "Osun",
            location: "Osogbo",
            admission: "post-utme",
            status: "check",
            session: "2026/2027",
            portal: "https://admissions.uniosun.edu.ng/",
            website: "https://uniosun.edu.ng/"
        },

        {
            name: "Nasarawa State University",
            shortName: "NSUK",
            type: "university",
            ownership: "state",
            state: "Nasarawa",
            location: "Keffi",
            admission: "post-utme",
            status: "check",
            session: "2026/2027",
            portal: "https://ug.nsuk.edu.ng/",
            website: "https://nsuk.edu.ng/"
        },

        {
            name: "Prince Abubakar Audu University",
            shortName: "PAAU",
            type: "university",
            ownership: "state",
            state: "Kogi",
            location: "Anyigba",
            admission: "post-utme",
            status: "check",
            session: "2026/2027",
            portal: "https://portal.ksu.edu.ng/",
            website: "https://ksu.edu.ng/"
        },

        {
            name: "Niger Delta University",
            shortName: "NDU",
            type: "university",
            ownership: "state",
            state: "Bayelsa",
            location: "Yenagoa",
            admission: "post-utme",
            status: "check",
            session: "2026/2027",
            portal: "https://portal.ndu.edu.ng/",
            website: "https://ndu.edu.ng/"
        },

        {
            name: "Delta State University",
            shortName: "DELSU",
            type: "university",
            ownership: "state",
            state: "Delta",
            location: "Abraka",
            admission: "post-utme",
            status: "check",
            session: "2026/2027",
            portal: "https://portal.delsu.edu.ng/",
            website: "https://delsu.edu.ng/"
        },

        {
            name: "Kogi State University",
            shortName: "KSU",
            type: "university",
            ownership: "state",
            state: "Kogi",
            location: "Anyigba",
            admission: "post-utme",
            status: "check",
            session: "2026/2027",
            portal: "https://portal.ksu.edu.ng/",
            website: "https://ksu.edu.ng/"
        },


        /* =================================================
           PRIVATE UNIVERSITIES
        ================================================= */

        {
            name: "Baze University",
            shortName: "BAZE",
            type: "university",
            ownership: "private",
            state: "FCT",
            location: "Abuja",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://bazeuniversity.edu.ng/admissions/",
            website: "https://bazeuniversity.edu.ng/"
        },

        {
            name: "Nile University of Nigeria",
            shortName: "NILE",
            type: "university",
            ownership: "private",
            state: "FCT",
            location: "Abuja",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://nileuniversity.edu.ng/admissions/",
            website: "https://nileuniversity.edu.ng/"
        },

        {
            name: "Veritas University",
            shortName: "VERITAS",
            type: "university",
            ownership: "private",
            state: "FCT",
            location: "Abuja",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://veritas.edu.ng/admissions/",
            website: "https://veritas.edu.ng/"
        },

        {
            name: "Bingham University",
            shortName: "BINGHAM",
            type: "university",
            ownership: "private",
            state: "Nasarawa",
            location: "New Karu",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://apply.binghamuni.edu.ng/",
            website: "https://binghamuni.edu.ng/"
        },

        {
            name: "Afe Babalola University",
            shortName: "ABUAD",
            type: "university",
            ownership: "private",
            state: "Ekiti",
            location: "Ado-Ekiti",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://admissions.abuad.edu.ng/",
            website: "https://abuad.edu.ng/"
        },

        {
            name: "Benson Idahosa University",
            shortName: "BIU",
            type: "university",
            ownership: "private",
            state: "Edo",
            location: "Benin City",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://admissions.biu.edu.ng/",
            website: "https://biu.edu.ng/"
        },

        {
            name: "Redeemer's University",
            shortName: "RUN",
            type: "university",
            ownership: "private",
            state: "Osun",
            location: "Ede",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://admissions.run.edu.ng/",
            website: "https://run.edu.ng/"
        },

        {
            name: "Lead City University",
            shortName: "LCU",
            type: "university",
            ownership: "private",
            state: "Oyo",
            location: "Ibadan",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://admissions.lcu.edu.ng/",
            website: "https://lcu.edu.ng/"
        },

        {
            name: "Babcock University",
            shortName: "BABCOCK",
            type: "university",
            ownership: "private",
            state: "Ogun",
            location: "Ilishan-Remo",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://application2.babcock.edu.ng/",
            website: "https://www.babcock.edu.ng/"
        },

        {
            name: "Covenant University",
            shortName: "CU",
            type: "university",
            ownership: "private",
            state: "Ogun",
            location: "Ota",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://admission.covenantuniversity.edu.ng/",
            website: "https://www.covenantuniversity.edu.ng/"
        },

        {
            name: "American University of Nigeria",
            shortName: "AUN",
            type: "university",
            ownership: "private",
            state: "Adamawa",
            location: "Yola",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://www.aun.edu.ng/admissions/",
            website: "https://www.aun.edu.ng/"
        },

        {
            name: "Pan-Atlantic University",
            shortName: "PAU",
            type: "university",
            ownership: "private",
            state: "Lagos",
            location: "Lagos",
            admission: "utme",
            status: "check",
            session: "2026/2027",
            portal: "https://www.pau.edu.ng/admissions/",
            website: "https://www.pau.edu.ng/"
        },


        /* =================================================
           POLYTECHNICS
        ================================================= */

        {
            name: "Yaba College of Technology",
            shortName: "YABATECH",
            type: "polytechnic",
            ownership: "federal",
            state: "Lagos",
            location: "Yaba",
            admission: "nd",
            status: "check",
            session: "2026/2027",
            portal: "https://admission.yabatech.edu.ng/",
            website: "https://yabatech.edu.ng/"
        },

        {
            name: "Federal Polytechnic, Bida",
            shortName: "FEDPOLY BIDA",
            type: "polytechnic",
            ownership: "federal",
            state: "Niger",
            location: "Bida",
            admission: "nd",
            status: "check",
            session: "2026/2027",
            portal: "https://eportal.fedpolybida.edu.ng/",
            website: "https://fedpolybida.edu.ng/"
        },

        {
            name: "Federal Polytechnic, Nekede",
            shortName: "FEDPOLY NEKEDE",
            type: "polytechnic",
            ownership: "federal",
            state: "Imo",
            location: "Owerri",
            admission: "nd",
            status: "check",
            session: "2026/2027",
            portal: "https://ndapplication.fpno.edu.ng/",
            website: "https://fpno.edu.ng/"
        },

        {
            name: "Auchi Polytechnic",
            shortName: "AUCHI POLY",
            type: "polytechnic",
            ownership: "federal",
            state: "Edo",
            location: "Auchi",
            admission: "nd",
            status: "check",
            session: "2026/2027",
            portal: "https://auchipoly.edu.ng/",
            website: "https://auchipoly.edu.ng/"
        },

        {
            name: "Federal Polytechnic, Ede",
            shortName: "FEDPOLY EDE",
            type: "polytechnic",
            ownership: "federal",
            state: "Osun",
            location: "Ede",
            admission: "nd",
            status: "check",
            session: "2026/2027",
            portal: "https://fedpolyede.edu.ng/",
            website: "https://fedpolyede.edu.ng/"
        },

        {
            name: "Federal Polytechnic, Ilaro",
            shortName: "FEDPOLY ILARO",
            type: "polytechnic",
            ownership: "federal",
            state: "Ogun",
            location: "Ilaro",
            admission: "nd",
            status: "check",
            session: "2026/2027",
            portal: "https://federalpolyilaro.edu.ng/",
            website: "https://federalpolyilaro.edu.ng/"
        },


        /* =================================================
           COLLEGES OF EDUCATION
        ================================================= */

        {
            name: "Federal College of Education, Zuba",
            shortName: "FCE ZUBA",
            type: "college",
            ownership: "federal",
            state: "FCT",
            location: "Zuba",
            admission: "nce",
            status: "check",
            session: "2026/2027",
            portal: "https://fctcoezuba.com.ng/",
            website: "https://fctcoezuba.com.ng/"
        },

        {
            name: "Federal College of Education, Oyo",
            shortName: "FCE OYO",
            type: "college",
            ownership: "federal",
            state: "Oyo",
            location: "Oyo",
            admission: "nce",
            status: "check",
            session: "2026/2027",
            portal: "https://www.fceoyo.edu.ng/",
            website: "https://www.fceoyo.edu.ng/"
        },

        {
            name: "Niger State College of Education, Minna",
            shortName: "COE MINNA",
            type: "college",
            ownership: "state",
            state: "Niger",
            location: "Minna",
            admission: "nce",
            status: "check",
            session: "2026/2027",
            portal: "https://www.coeminna.edu.ng/",
            website: "https://www.coeminna.edu.ng/"
        },

        {
            name: "Kogi State College of Education, Ankpa",
            shortName: "KSCOE ANKPA",
            type: "college",
            ownership: "state",
            state: "Kogi",
            location: "Ankpa",
            admission: "nce",
            status: "check",
            session: "2026/2027",
            portal: "https://www.kscoeankpa.edu.ng/",
            website: "https://www.kscoeankpa.edu.ng/"
        },

        {
            name: "Nwafor Orizu College of Education, Nsugbe",
            shortName: "NOCEN",
            type: "college",
            ownership: "state",
            state: "Anambra",
            location: "Nsugbe",
            admission: "nce",
            status: "check",
            session: "2026/2027",
            portal: "https://nocen.edu.ng/",
            website: "https://nocen.edu.ng/"
        },

        {
            name: "College of Education, Ikere-Ekiti",
            shortName: "COE IKERE",
            type: "college",
            ownership: "state",
            state: "Ekiti",
            location: "Ikere-Ekiti",
            admission: "nce",
            status: "check",
            session: "2026/2027",
            portal: "https://www.coeikere.edu.ng/",
            website: "https://www.coeikere.edu.ng/"
        },

        {
            name: "College of Education, Warri",
            shortName: "COE WARRI",
            type: "college",
            ownership: "state",
            state: "Delta",
            location: "Warri",
            admission: "nce",
            status: "check",
            session: "2026/2027",
            portal: "https://www.coewarri.edu.ng/",
            website: "https://www.coewarri.edu.ng/"
        },

        {
            name: "Edo State College of Education, Igueben",
            shortName: "EDO COE",
            type: "college",
            ownership: "state",
            state: "Edo",
            location: "Igueben",
            admission: "nce",
            status: "check",
            session: "2026/2027",
            portal: "https://edocoed.edu.ng/",
            website: "https://edocoed.edu.ng/"
        }

    ];


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const grid =
        document.getElementById("admissionGrid");

    const search =
        document.getElementById("admissionSearch");

    const searchButton =
        document.getElementById("admissionSearchButton");

    const institutionFilter =
        document.getElementById("institutionFilter");

    const ownershipFilter =
        document.getElementById("ownershipFilter");

    const stateFilter =
        document.getElementById("stateFilter");

    const admissionTypeFilter =
        document.getElementById("admissionTypeFilter");

    const statusFilter =
        document.getElementById("statusFilter");

    const resultCount =
        document.getElementById("admissionResultCount");

    const noResults =
        document.getElementById("noAdmissions");


    /* =====================================================
       ADMISSION TYPE LABELS
    ===================================================== */

    const admissionLabels = {

        "utme":
            "UTME / DE",

        "post-utme":
            "Post-UTME",

        "jupeb":
            "JUPEB",

        "pre-degree":
            "Pre-degree",

        "nd":
            "ND / HND",

        "nce":
            "NCE"

    };


    /* =====================================================
       INSTITUTION TYPE LABELS
    ===================================================== */

    const typeLabels = {

        "university":
            "University",

        "polytechnic":
            "Polytechnic",

        "college":
            "College"

    };


    /* =====================================================
       STATUS LABELS
    ===================================================== */

    const statusLabels = {

        "open":
            "Open",

        "closed":
            "Closed",

        "check":
            "Check Portal"

    };


    /* =====================================================
       POPULATE STATES
    ===================================================== */

    function populateStates() {

        const states = [
            ...new Set(
                institutions.map(
                    institution => institution.state
                )
            )
        ].sort();


        states.forEach(function (state) {

            const option =
                document.createElement("option");

            option.value = state;

            option.textContent = state;

            stateFilter.appendChild(option);

        });

    }


    /* =====================================================
       ESCAPE HTML
       Prevents accidental HTML injection
    ===================================================== */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =====================================================
       CREATE INSTITUTION CARD
    ===================================================== */

    function createCard(institution) {

        const card =
            document.createElement("article");

        card.className = "admission-card";


        const statusClass =
            institution.status || "check";


        const statusText =
            statusLabels[institution.status] ||
            "Check Portal";


        const typeText =
            typeLabels[institution.type] ||
            "Institution";


        const admissionText =
            admissionLabels[institution.admission] ||
            institution.admission;


        card.innerHTML = `

            <div class="admission-status ${escapeHTML(statusClass)}">
                ${escapeHTML(statusText)}
            </div>


            <span class="institution-type">
                ${escapeHTML(institution.ownership)}
                ${escapeHTML(typeText)}
            </span>


            <h3>
                ${escapeHTML(institution.name)}
            </h3>


            <h4>
                ${escapeHTML(institution.session)}
                Admission Information
            </h4>


            <p>
                📍
                ${escapeHTML(institution.location)},
                ${escapeHTML(institution.state)}
            </p>


            <p>
                <strong>Admission Type:</strong>
                ${escapeHTML(admissionText)}
            </p>


            <p>
                <strong>Session:</strong>
                ${escapeHTML(institution.session)}
            </p>


            <div class="admission-buttons">

                <a
                    href="${escapeHTML(institution.portal)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-primary"
                >
                    Official Portal →
                </a>


                <a
                    href="${escapeHTML(institution.website)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-secondary"
                >
                    Website
                </a>

            </div>

        `;


        return card;

    }


    /* =====================================================
       RENDER INSTITUTIONS
    ===================================================== */

    function renderInstitutions(list) {

        grid.innerHTML = "";


        list.forEach(function (institution) {

            grid.appendChild(
                createCard(institution)
            );

        });


        resultCount.textContent =
            list.length === 1
                ? "1 institution"
                : `${list.length} institutions`;


        noResults.style.display =
            list.length === 0
                ? "block"
                : "none";

    }


    /* =====================================================
       FILTER INSTITUTIONS
    ===================================================== */

    function filterInstitutions() {

        const searchText =
            search.value
                .trim()
                .toLowerCase();


        const institutionValue =
            institutionFilter.value
                .toLowerCase();


        const ownershipValue =
            ownershipFilter.value
                .toLowerCase();


        const stateValue =
            stateFilter.value
                .toLowerCase();


        const admissionValue =
            admissionTypeFilter.value
                .toLowerCase();


        const statusValue =
            statusFilter.value
                .toLowerCase();


        const filtered =
            institutions.filter(function (institution) {


                const searchableText = [

                    institution.name,

                    institution.shortName,

                    institution.type,

                    institution.ownership,

                    institution.state,

                    institution.location,

                    institution.admission,

                    institution.session

                ]
                    .join(" ")
                    .toLowerCase();


                const matchesSearch =
                    !searchText ||
                    searchableText.includes(
                        searchText
                    );


                const matchesInstitution =
                    !institutionValue ||
                    institution.type.toLowerCase() ===
                    institutionValue;


                const matchesOwnership =
                    !ownershipValue ||
                    institution.ownership.toLowerCase() ===
                    ownershipValue;


                const matchesState =
                    !stateValue ||
                    institution.state.toLowerCase() ===
                    stateValue;


                const matchesAdmission =
                    !admissionValue ||
                    institution.admission.toLowerCase() ===
                    admissionValue;


                const matchesStatus =
                    !statusValue ||
                    institution.status.toLowerCase() ===
                    statusValue;


                return (
                    matchesSearch &&
                    matchesInstitution &&
                    matchesOwnership &&
                    matchesState &&
                    matchesAdmission &&
                    matchesStatus
                );

            });


        renderInstitutions(filtered);

    }


    /* =====================================================
       SEARCH EVENTS
    ===================================================== */

    search.addEventListener(
        "input",
        filterInstitutions
    );


    searchButton.addEventListener(
        "click",
        filterInstitutions
    );


    search.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                filterInstitutions();

            }

        }
    );


    /* =====================================================
       FILTER EVENTS
    ===================================================== */

    institutionFilter.addEventListener(
        "change",
        filterInstitutions
    );


    ownershipFilter.addEventListener(
        "change",
        filterInstitutions
    );


    stateFilter.addEventListener(
        "change",
        filterInstitutions
    );


    admissionTypeFilter.addEventListener(
        "change",
        filterInstitutions
    );


    statusFilter.addEventListener(
        "change",
        filterInstitutions
    );


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton =
        document.getElementById(
            "admissionMenuButton"
        );


    const navLinks =
        document.getElementById(
            "admissionNavLinks"
        );


    if (menuButton && navLinks) {

        menuButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    navLinks.classList.toggle(
                        "active"
                    );


                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );


        navLinks
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.classList.remove(
                            "active"
                        );


                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    /* =====================================================
       START SYSTEM
    ===================================================== */

    populateStates();

    renderInstitutions(institutions);

});
