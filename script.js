const enterBtn = document.getElementById('enter-btn');
const continueBtn = document.getElementById('continue-btn');
const bookStack = document.querySelector('.book-stack');
const finalNote = document.getElementById('final-note');
const finalContinueBtn = document.getElementById('final-continue-btn');
const memoryContainer = document.getElementById('memory-container');
const likeBtn = document.getElementById('like-btn');
const bgMusic = document.getElementById('bg-music');

enterBtn.addEventListener('click', () => {
    document.getElementById('entry-page').classList.add('hidden');
    document.getElementById('main-page').style.display = 'block';

    continueBtn.classList.remove('hidden');

    // ✅ Start music after user interaction
    if (bgMusic.paused) {
        bgMusic.play().catch(err => console.log("Autoplay blocked:", err));
    }
});

// ✅ Messages including direct cover page paths
const messages = [
    { title: "IVANNI MEEKU NACHINA BOOKS EY GAA SENIORRRRRRRRRR OPEN(CLICK) CHESI CHOODANDI MARI", text: "CHOODANDI(CLICK ONE BY ONE)", img: "./images/book1.jpg" },
    { title: "", text: "Meeru eda unna bright place ey lendii, vibe match aithadhaa ledhaa anukunnaru ipdu aipoyindhi ane anukuntaa haa okay antara dheeniki kooda 😂😂😂", img: "./images/book2.jpg" },
    { title: "", text: "Avnu nijame it starts with us but maname comedy ga tesnsion paddam but okasari matladaka chala baa anipinchindhi kadhaaa, Asalu nen first time choosinappudu entha silent gaa unna ammayi intha talkative pethara naa antey nammalekunna but ilaney baaundhi lendi calmnesskanna", img: "./images/book3.jpeg" },
    { title: "", text: "Kalisi inka chala memories create cheskovali seniorrr edhi emaina whenever you need me 'remember me as yours'", img: "./images/book4.jpeg" },
    { title: "", text: "Ah something i never told you antey chala ney unnay lendi inka chala kaburlu chepkuntey cheptha lendi suspenseuu", img: "./images/book5.jpg" },
    { title: "Our Memories 🌟📸", text: " Best pictures🥹" } // Final book for memories
];

// ✅ Entry Animation + Floating Emojis
enterBtn.addEventListener('click', () => {
    document.getElementById('entry-page').classList.add('hidden');
    document.getElementById('main-page').style.display = 'block';

    continueBtn.classList.remove('hidden');

    // Floating emojis
    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji-float');
        emoji.innerText = ['❤️', '🎵', '📚'][Math.floor(Math.random() * 3)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(emoji);
    }
});

// ✅ Show Books on Continue Button Click
continueBtn.addEventListener('click', () => {

    continueBtn.classList.add('hidden');
    bookStack.classList.remove('hidden');
    

    messages.forEach((msg, index) => {
        const book = document.createElement('div');
        book.classList.add('book');

        // ✅ Apply cover image directly to the front
        book.innerHTML = `
            <div class="book-front" style="background-image: url('${msg.img}')">
                <div class="title">${msg.title}</div>
            </div>
            <div class="book-back">
                <p>${msg.text}</p>
            </div>
        `;

        // ✅ Handle book click to reveal content
        book.addEventListener('click', () => {
            book.classList.toggle('open');

            // ✅ Special case for last book → Show memory container
            if (index === 5) {
                memoryContainer.classList.remove('hidden');
                finalContinueBtn.classList.remove('hidden');
            }
        });

        bookStack.appendChild(book);
    });
});

// ✅ After Memories, Show Final Note
finalContinueBtn.addEventListener('click', () => {
    memoryContainer.classList.add('hidden');
    finalNote.classList.remove('hidden');
    finalContinueBtn.classList.add('hidden');
});

// ✅ Restart Loop on Like Button Click
likeBtn.addEventListener('click', () => window.location.reload());
