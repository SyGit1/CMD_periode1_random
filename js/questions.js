const questionSets = {
    open: [
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code1.png",
            answer: "De Surinaamse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code2.png",
            answer: "De Surinaamse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code3.png",
            answer: "De Surinaamse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code4.png",
            answer: "De Surinaamse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code5.png",
            answer: "De Marokkaanse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code6.png",
            answer: "De Marokkaanse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code7.png",
            answer: "De Marokkaanse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code8.png",
            answer: "De Marokkaanse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code9.png",
            answer: "De Nederlandse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code10.png",
            answer: "De Nederlandse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code11.png",
            answer: "De Nederlandse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code12.png",
            answer: "De Nederlandse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code13.png",
            answer: "De Turkse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code14.png",
            answer: "De Turkse cultuur"
        },
        {
            question: "Bij welke cultuur hoort dit nummer?",
            image: "images/code15.png",
            answer: "De Turkse cultuur"
        }
        // {
        //     question: "Waar staat de ster in het midden van de Surinaamse vlag symbool voor?", answer: "De vijf punten van de ster staan voor de vijf continenten waaruit de bevolking van Suriname afkomstig is: Afrika, Europa, Azië, Noord-Amerika en Zuid-Amerika.",
        //     image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg",

        // },
        // { question: "Welke kleuren zitten er in de Marokkaanse vlag?", answer: "Rood en groen." },
        // { question: "Benoem twee prominente voetbalclubs in Rotterdam?", answer: "Bijvoorbeeld Feyenoord, Sparta, Excelsior" },
        // { question: "Waar in Rotterdam kun je voedsel vinden uit allerlei verschillende culturen?", answer: "De Markthal" },
        // { question: "Wat zijn de kleuren van de Rotterdamse vlag?", answer: "Groen en wit" }
    ],
    meerkeuze: [
        {
            question: "Op 25 november 1975 werd Suriname onafhankelijk van Nederland. 25 november is een jaarlijkse feestdag voor de Surinamers. Hoe heet deze dag?",
            options: ["A) Keti Koti", "B) Divali", "C) Srefidensi", "D) Dag der Marrons"],
            answer: "C) Srefidensi"
        },
        {
            question: "WWat eten veel Marokkaanse families in Rotterdam tijdens speciale gelegenheden?",
            options: ["A) Sushi", "B) Couscous", "C) Pizza", "D) Tacos"],
            answer: "B) Couscous"
        },
        {
            question: "Wat voor soort muziek is populair onder de Marokkaanse cultuur in Rotterdam tijdens bruiloften? ",
            options: ["A) Salsa", "B) Chaabi", "C) K-pop", "D) Jazz"],
            answer: "B) Chaabi"
        },
        {
            question: "Wat is de uitgebreidste maaltijd van de dag in Marokkaanse cultuur? ",
            options: ["A) Ftur", "B) Asha", "C) Ghda"],
            answer: "C) Ghda"
        },
        {
            question: "Welke Marokkaanse feestdag wordt vaak gevierd binnen Rotterdam? ",
            options: ["A) Eid al-Fitr ", "B) Chanoeka", "C) Pasen", "D) Vesak"],
            answer: "A) Eid al-Fitr"
        },
        {
            question: "Wat is een traditioneel Marokkaans instrument dat je zou horen in Marokkaanse muziek?  ",
            options: ["A) Piano", "B) Gimbri", "C) Sansi", "D) Harp"],
            answer: "B) Gimbri"
        },
        {
            question: "Hoe noemt men in Rotterdam een lieveheersbeestje ook wel? ",
            options: ["A) Gestipte kever", "B) Duivelaar", "C) Kapoentje", "D) Stipsebees"],
            answer: "C) Kapoentje"
        },
        {
            question: "Welk beroemde gerecht is in Rotterdam uitgevonden? ",
            options: ["A) Stroopwafel", "B) Kapsalon", "C) Wentelteefjes"],
            answer: "B) Kapsalon"
        },
        {
            question: "Uit hoeveel stadskwartieren bestaat Rotterdam? ",
            options: ["A) 11", "B) 17", "C) 14", "D) 8"],
            answer: "C) 14"
        },
        {
            question: "Wat is de meest voorkomende religie op de voormalige Nederlandse Antillen? ",
            options: ["A) Protestants", "B) Katholiek", "C) Moslim", "D) Niet gelovig"],
            answer: "B) Katholiek"
        },
        {
            question: "In welk jaar vormden de Nederlandse Antillen tot officieel 1 land? ",
            options: ["A) 1986", "B) 1948", "C) 1954"],
            answer: "C) 1954"
        },
        {
            question: "Wanneer werden de Nederlandse Antillen opgeheven? ",
            options: ["A)  4 december 2005", "B) 10 oktober 2010", "C) 1 september 2009"],
            answer: "B) 10 oktober 2010"
        },
        {
            question: "Welke drie culturen hebben een sterke invloed gehad op de Antilliaanse cultuur? ",
            options: ["A) Nederlandse, Afrikaanse, Inheemse culturen", "B) Nederlandse, Zuid-Amerikaanse, Inheemse culturen", "C) Nederlandse, Franse, Afrikaanse culturen"],
            answer: "A) Nederlandse, Afrikaanse, en inheemse culturen."
        },
        {
            question: "Welke 3 eilanden zijn nu nog deel van het Nederlandse koninkrijk: ",
            options: ["A) Curacao", "B) Bonaire", "C) Sint Maarten", "D) Sint Eustatius", "E) Saba", "F) Aruba"],
            answer: "A) Curacao, B) Bonaire, C) Sint Maarten"
        },
        {
            question: "Studentenverenigingen zijn natuurlijk een groot onderdeel van de Nederlandse studentencultuur, maar hoeveel procent van de studenten gaat nou uiteindelijk bij een vereniging? ",
            options: ["A) 40%", "B) 8%", "C) 23%", "D) 12%"],
            answer: "B) 8%"
        },
        {
            question: "Volgens het islamitisch geloof draagt men amuletten als bestrijding tegen magie. Wat is de naam van dit Amulet?: ",
            options: ["A) Het blauwe oog", "B) Het boze oog", "C) Het Turkse oog"],
            answer: "B) Het boze oog, ook wel in het Turks ‘Nazar’ genoemd, is gebaseerd op het idee dat een persoon bij iemand schade kan aanrichten, vaak door jaloezie. Het dragen van het amulet zal je hiervoor beschermen. ",
            answerImage: "https://cdn.shopify.com/s/files/1/0266/2688/3633/files/ojo-turco-significado_480x480.png?v=1676622245"
        }
    ],
    waarnietwaar: [
        { question: "De naam van de Surinaamse feestdag “Keti Koti” betekent “De ketenen verbroken”.", answer: "Waar! Keti Koti is een Surinaamse feestdag die elk jaar op 1 juli valt. Op deze dag wordt de afschaffing van de slavernij in Suriname gevierd. De naam Keti Koti stamt uit de Surinaamse taal, Sranantongo." },
        { question: "Veel Marokkanen drinken muntthee in hun cultuur", answer: "Waar" },
        { question: "Binnen Marokkaanse cultuur is het normaal om je schoenen binnen uit te doen.", answer: "Waar" },
        { question: "Rotterdammers staan erom bekend dat ze geen harde werkers zijn", answer: "Niet waar" },
        { question: "Oranje is de nationale kleur van Nederland", answer: "Waar" },
        { question: "Aruba was het eerste eiland die de Antillen verliet", answer: "Waar" },
        { question: "Er zijn geen Marokkaanse radiostations of programma’s in Rotterdam die zich richten op muziek", answer: "Niet waar" },
        { question: "De officiële taal op alle Nederlandse Antillen eilanden is Papiaments", answer: "Niet waar" },
        {
            question: "De Turkse vlag bestaat uit de twee kleuren: rood en blauw.", answer: "Niet waar, de vlag bestaat uit de kleuren rood en wit",
            answerImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/266px-Flag_of_Turkey.svg.png"
        }
    ]
};

function randomizeQuestion(type) {
    let selectedQuestion = {};

    if (questionSets[type]) {
        const questions = questionSets[type];
        selectedQuestion = questions[Math.floor(Math.random() * questions.length)];
    }

    // Save selected question to localStorage
    localStorage.setItem('selectedQuestion', JSON.stringify(selectedQuestion));

    // Redirect to the question page, passing the type as a URL parameter
    window.location.href = `question.html?type=${type}`;
}
