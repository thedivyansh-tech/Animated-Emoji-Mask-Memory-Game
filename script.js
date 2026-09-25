const board = document.querySelector(".board");

const cards = board.querySelectorAll(".card");

const triesValue = document.querySelector(".tries-value");

const best = document.querySelector(".interface-data-best");

const bestValue = best.querySelector(".best-value");

const marquee = document.querySelector(".marquee");

const marqueeText = document.querySelector(".marquee-text");


const wrongSound = document.getElementById("wrong-audio") || new Audio("./faaah.mp3");
wrongSound.volume = 1.0;


const matchSound = document.getElementById("match-audio") || new Audio("./tehelka-omlette.mp3");
matchSound.volume = 1.0;


const winSound = document.getElementById("win-audio") || new Audio("./indian-song.mp3");
winSound.volume = 1.0;

const faces = ["🙂", "😄", "😜", "😮", "😉", "😌"];

const cls = {
    completed: "is-complete",
    combo: "is-combo",
    loading: "is-loading",
    matched: "is-matched",
    waiting: "is-waiting"
};

let selectedCard;

let triesCount = 0;

let matchCount = 0;

let comboCount = 0;

let bestCount;

let completeCount = faces.length;

const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const displayMarquee = (str, isCombo) => {
    marquee.classList.toggle(cls.combo, isCombo);
    marqueeText.textContent = str;
    marquee.style.setProperty("display", "grid");
};

const toggleCardSelected = (card) => {
    const isPressed = card.getAttribute("aria-pressed") === "true";
    card.setAttribute(
        "aria-pressed",
        isPressed ? "false" : "true"
    );
};

const setMatchedProps = (el) => {
    el.setAttribute("disabled", "");
    el.classList.add(cls.matched);
};

const updateTries = (value) => {
    triesCount = value;
    triesValue.textContent = value;
};

const checkMatch = (card) => {
    const cardFace = card.getAttribute("data-face");
    const selectedCardFace = selectedCard.getAttribute("data-face");

    board.classList.add(cls.waiting);

    if (cardFace === selectedCardFace) {
        // जब दो इमोजीस सेम हो जाएं, तब तहलका ऑमलेट साउंड प्ले होगा[cite: 2]
        matchSound.currentTime = 0;
        matchSound.play()
            .then(() => {
                console.log("Tehelka omlette sound playing");
            })
            .catch((error) => {
                console.error("Match sound error:", error);
            });

        setMatchedProps(card);
        setMatchedProps(selectedCard);

        matchCount++;
        comboCount++;

        if (comboCount > 1) {
            displayMarquee(`${comboCount}×!`, true);
        }

        setTimeout(() => {
            card.removeAttribute("aria-pressed");
            selectedCard.removeAttribute("aria-pressed");
            selectedCard = null;
            board.classList.remove(cls.waiting);
        }, 500);

    } else {
        comboCount = 0;

        // गलत मैच होने पर faaah साउंड प्ले होगा[cite: 1]
        wrongSound.currentTime = 0;
        wrongSound.play()
            .then(() => {
                console.log("Wrong match sound playing");
            })
            .catch((error) => {
                console.error("Wrong sound error:", error);
            });

        setTimeout(() => {
            toggleCardSelected(card);
            toggleCardSelected(selectedCard);
            selectedCard = null;
            board.classList.remove(cls.waiting);
        }, 1000);
    }

    updateTries(triesCount + 1);
};

const checkBest = () => {
    if (!bestCount || triesCount < bestCount) {
        best.style.setProperty("display", "flex");
        bestCount = triesCount;
        bestValue.textContent = bestCount;
    }
};

const checkComplete = () => {
    if (matchCount !== completeCount) {
        return;
    }

    displayMarquee("Unmasked!", false);

    // जब पूरा गेम फिनिश हो जाए, तब इंडियन सॉन्ग प्ले होगा और 3 सेकंड बाद बंद हो जाएगा
    winSound.currentTime = 0;
    winSound.play()
        .then(() => {
            console.log("Win song playing");
            setTimeout(() => {
                winSound.pause();
                winSound.currentTime = 0;
            }, 3000);
        })
        .catch((error) => {
            console.error("Win sound error:", error);
        });

    setTimeout(() => {
        board.classList.add(cls.completed);
    }, 1000);
};

const resetGame = () => {
    // रीसेट करते वक्त साउंड्स को रोक दें
    matchSound.pause();
    matchSound.currentTime = 0;
    winSound.pause();
    winSound.currentTime = 0;

    if (board.classList.contains(cls.completed)) {
        checkBest();
    }

    matchCount = 0;
    comboCount = 0;
    updateTries(0);
    selectedCard = null;

    cards.forEach((card) => {
        card.removeAttribute("disabled");
        card.removeAttribute("aria-pressed");
        card.classList.remove(cls.matched);
    });

    board.classList.remove(cls.completed);
};

const setupGame = () => {
    const fragment = document.createDocumentFragment();

    const shuffledFaces = shuffle(
        faces.concat(faces)
    );

    const shuffledCards = shuffle([...cards]);

    shuffledCards.forEach((card, index) => {
        const face = shuffledFaces[index];
        card.setAttribute("data-face", face);
        card.style.setProperty(
            "--i",
            index + 1
        );
        card.querySelector(".face").innerHTML = face;
        fragment.append(card);
    });

    board.classList.add(cls.loading);
    board.replaceChildren(fragment);

    setTimeout(() => {
        board.classList.remove(cls.loading);
    }, 1000);
};

cards.forEach((card) => {
    card.addEventListener("click", () => {
        toggleCardSelected(card);

        if (!selectedCard) {
            selectedCard = card;
            return;
        }

        if (card === selectedCard) {
            selectedCard = null;
            return;
        }

        checkMatch(card);
        checkComplete();
    });
});

marquee.addEventListener("animationend", (e) => {
    if (e.animationName !== "marquee-reveal") {
        return;
    }

    marquee.style.setProperty(
        "display",
        "none"
    );
});

document
    .querySelector("#reset-game")
    .addEventListener("click", () => {
        resetGame();
        setupGame();
    });

setupGame();