const chapters=[
["The beginning at KEONICS","Teacher and student · The first chapter","media/photos/classroom.jpeg",["I was a computer teacher at KEONICS, and you came into my class as my student. It began with computers, lessons, little conversations, and the kind of laughter that made an ordinary day feel different.","The next day, when I sat beside you to teach you individually, I had no idea how important these simple moments would become. The jokes, the teasing, the comfortable silences — without noticing, we were becoming part of each other's days."],"I thought you were just another student. Life had a different story in mind."],
["The Neymar Jr keychain","A little gift, a very big feeling","media/photos/keychain.jpeg",["I remembered how much you loved Neymar and football, so I gave you a little keychain. It was a small gift, but seeing your reaction made it feel like something much bigger.","That smile, the emotion in your eyes, and the affectionate little pat on your head became one of those memories I can still picture clearly."],"Sometimes the smallest gifts carry the biggest pieces of our hearts."],
["The secret diary","Words I was not ready to say aloud","media/photos/dairy.jpeg",["That evening, I sat at home with my diary and wrote about you — the little things I noticed, the moments I kept replaying, and feelings I was still trying to understand.","On your last day at the institute, I showed you those pages. You read them quietly. Your smile appeared, then you became silent for a while. We looked at each other, and something between us felt different after that."],"Before I could say it aloud, my diary had already told you."],
["The scooty ride","A simple offer I still remember","media/photos/scooty.jpeg",[" I was waiting by the road for my bus when you arrived on your scooty and offered to drop me. I smiled and accepted.","It was an ordinary ride on an ordinary road, but sometimes the memories that stay longest are the ones that did not seem extraordinary at the time."],"It wasn't about where we were going. It was about those few minutes together."],
["When I could not walk","A difficult month, made softer by you","media/photos/recovery.jpeg",["After my accident, my leg was fractured. I had to stay home and could not walk normally for about a month. I felt frustrated and disappointed, watching life continue while I had to slow down.","You came to visit me, sat beside me, talked with me, and tried to make me smile. Your presence made a difficult time feel a little less lonely."],"Care is sometimes just showing up and staying awhile."],
["Late-night conversations","From a visit to an everyday habit","media/photos/chats.jpeg",["After that visit, we began texting every day. One conversation turned into another, and soon there were jokes, updates, little questions, and late-night chats that neither of us wanted to end.","Even from our separate homes, we were becoming closer. A notification from you could change the mood of my whole night."],"Somehow, you became the person I wanted to tell everything to."],
["Your journey to Bangalore","The first distance between us","media/photos/train.jpeg",["Then suddenly, you left for Bangalore for a job opportunity. I pictured you with your luggage at the station, looking out through the train window as everything familiar moved away.","When I realised you had gone, I felt the absence of all those small everyday moments. I missed you quietly, with my phone in my hand and so many things I wished I could tell you in person."],"Distance arrived before I was ready to miss you."],
["My surprise in Bangalore","The look on your face was worth the journey","media/photos/bangalore.jpeg",["I decided I wanted to see you, so I travelled to Bangalore without telling you. We met near BITI, and the moment you saw me, your shock turned into a smile I wish I could keep forever.","We walked through a nearby park, bought juice, held hands, laughed, and spent peaceful time together. For those hours, the distance between us disappeared."],"I travelled all that way just to see your face light up."],
["Sunset beach memories","Our favourite place beside the sea","media/photos/beach.jpeg",["After you returned, we made more memories by the sea. We walked beside the waves, sat on the sand, talked about everything and nothing, laughed, and shared warm hugs while the sky turned orange.","The beach became more than a place. It became a feeling — a place where the world softened and being together was enough."],"If peace had a place, for me it would always have a little sea and a little you."],
["A night full of conversations","Food stalls, long drives, and feeling at home","media/photos/night-out.jpeg",["One evening, we spent hours talking in a private room, sharing thoughts and enjoying the comfort of simply being together. Later, we went for a long drive to a lively place filled with food stalls, lights, and little eateries.","We ate, talked, laughed, and let the day stretch out. When we finally returned and fell asleep beside each other, it felt like the kind of ordinary happiness I wanted to remember."],"My favourite plans were always the ones that ended with more time together."],
["Our first kiss","A shy moment at the beach","media/photos/kiss.jpeg",["The next evening, we met at the beach. You moved a little closer, hoping to kiss me, and I shyly turned away. For a moment, we were both nervous and unsure what the other was thinking.","After a quiet pause, we slowly moved closer and shared our first kiss. It was not a perfect movie scene. It was ours — shy, real, and full of feeling."],"Some moments don't need many words. You remember them with your whole heart."],

["Our Ramadan memory","A quiet iftar beside the sea","media/photos/ramadan.jpeg",["During Ramadan, while you were fasting, we met at the beach in the evening for iftar. I placed a hijab over my head for the first time as a gesture connected to your faith — a moment of respect and affection that meant something to us.","We spread our food on a mat and sat beside each other as the light faded. We shared our meal, talked, smiled, and enjoyed the peacefulness of that evening. It was a memory of care, respect, and two people making space for each other's worlds."],"To love someone is also to respect the things that are precious to them."],
["The airport goodbye","A new country, a new kind of missing","media/photos/airport.jpeg",["Then came the day you decided to move to the Gulf for work. There was luggage, a departure area, and the difficult knowledge that you were leaving India to begin a new chapter.","We tried to be strong, but goodbyes are heavy when the person leaving means so much. As your plane took off, our story changed shape: we would have to learn how to love each other across distance."],"I was proud of your new beginning, even while my heart wished you could stay."],
["Love across countries","Different clocks, the same two hearts","media/photos/vediocall.jpeg",["Now you have your life abroad and I have mine in India. So much of our time together happens through messages and video calls, often late at night when the world is quiet.","Sometimes I wake up in the middle of the night, sleepy but happy to see your face on my screen. We blow kisses, wave, laugh, and try to make a little screen feel like a hug. The miles are real, but so is the love that keeps us close."],"Different time zones. One familiar smile. Still my favourite call."],
["From teacher to partner","Every little memory brought us here","media/photos/us.jpeg",["When I look back, I see the KEONICS classroom, the computer desk, the Neymar keychain, the diary pages, the scooty ride, the month of recovery, the messages, Bangalore, the beach, our iftar, and the airport goodbye.","A connection that began with teacher and student became friendship, love, and a relationship that keeps finding its way through new chapters. This is not just a collection of memories. It is our life, one moment at a time."],"From teacher to partner — and still learning new ways to love you."]
];
const $=s=>document.querySelector(s), list=$("#chapterList");let current=0;
function renderList(){list.innerHTML="";chapters.forEach((c,i)=>{const b=document.createElement("button");b.className="chapter-link";b.innerHTML=`<span class="num">${String(i+1).padStart(2,"0")}</span><span class="chapter-label">${c[0]}</span>`;b.onclick=()=>show(i);list.appendChild(b)})}
function show(i){current=Math.max(0,Math.min(chapters.length-1,i));const c=chapters[current];$("#chapterNumber").textContent="CHAPTER "+String(current+1).padStart(2,"0");$("#chapterTitle").textContent=c[0];$("#chapterSubtitle").textContent=c[1];$("#chapterMedia").innerHTML=`<div class="placeholder"><span>♡</span><b>Add your real memory</b><small>${c[2]}</small></div><img src="${c[2]}" alt="${c[0]}" onerror="this.style.display='none'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`;$("#chapterCopy").innerHTML=c[3].map(p=>`<p>${p}</p>`).join("");$("#chapterQuote").textContent="“"+c[4]+"”";$("#progress").textContent=String(current+1).padStart(2,"0")+" / "+String(chapters.length).padStart(2,"0");$("#prev").disabled=current===0;$("#next").textContent=current===chapters.length-1?"Back to beginning ↺":"Next memory →";[...list.children].forEach((b,j)=>b.classList.toggle("active",j===current))}
$("#prev").onclick=()=>show(current-1);$("#next").onclick=()=>show(current===chapters.length-1?0:current+1);renderList();show(0);
$("#secretBtn").onclick=()=>{const s=$("#secret");s.hidden=!s.hidden;$("#secretBtn").textContent=s.hidden?"Open one last little secret ♡":"Keep this little secret close ♥";if(!s.hidden)s.scrollIntoView({behavior:"smooth",block:"center"})};
const audio=$("#music");$("#musicToggle").onclick=async()=>{try{if(audio.paused){await audio.play();$("#musicLabel").textContent="Music on"}else{audio.pause();$("#musicLabel").textContent="Music off"}}catch(e){$("#musicLabel").textContent="Add song first"}};


const musicToggle = document.querySelector("#musicToggle");
const musicLabel = document.querySelector("#musicLabel");

const backgroundMusic = new Audio("media/music/our-song.mpeg");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.4;

musicToggle.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    try {
      await backgroundMusic.play();
      musicLabel.textContent = "Music on";
    } catch (error) {
      musicLabel.textContent = "Tap to play again";
    }
  } else {
    backgroundMusic.pause();
    musicLabel.textContent = "Music off";
  }
});


/* ==========================================
   1. ADD YOUR QUESTIONS AND ANSWERS HERE
   ==========================================

   question = The question he will see.
   answer   = The correct answer he must type.

   You can change the questions and answers,
   or add more question objects.

   Answers ignore capitalisation and extra spaces.
*/

/* ==========================================
   1. QUIZ QUESTIONS
   ========================================== */

const quizQuestions = [
  {
    question: "When did we first meet? (DD/MM/YYYY)",
    answer: "07/11/2024"
  },
  {
    question: "When did we get married?",
    answer: "11/10/2025"
  },
  {
    question: "Which place can instantly make Ammu happy?",
    answer: "beach"
  },
  {
    question: "Who am I to you?",
    answer: "wife"
  },
  {
    question: "What is my favourite colour?",
    answer: "black"
  },
  {
    question: "Who gets angry faster? (Jaju/Ammu)",
    answer: "Jaju"
  },
  {
    question: "Who is most likely to say sorry first? (Jaju/Ammu/Both)",
    answer: "both"
  },
  {
    question: "What will you bring me if I say I'm having tea now?",
    answer: "charmburi"
  },
  {
    question: "Who is more romantic, Jaju or Ammu?",
    answer: "jaju"
  },
  {
    question: "Where was our first kiss?",
    answer: "beach"
  },
  {
    question: "Who is more foodie, Jaju or Ammu? 😂",
    answer: "jaju"
  },
  {
    question: "Who says “I'm coming” but hasn't even started getting ready? 🤭 (Jaju or Ammu)",
    answer: "jaju"
  },
  {
    question: "One last question... think carefully and answer! Are you ready? (Yes/No)",
    answer: "yes"
  },
  {
    question: "If you had to choose between Neymar Jr. and Ammu, whom would you choose? ⚽❤️",
    answer: "neymar"
  }
];


/* ==========================================
   2. CORRECT ANSWER MESSAGES
   Keep these in question order!
   ========================================== */

const correctMessages = [
  "Correct! That's the day our story began, mwth! ❤️",
  "Of course you remember our special day! Forever us! 💍❤️",
  "You know your Ammu's happy place! Let's go to the beach together! 🌊🥰",
  "That's right! Your Ammu, your wife, your forever person! ❤️🌙",
  "Correct! You know your girl's favourite colour! 🖤😘",
  "Haha, at least you know yourself, mwth! 😂❤️",
  "Aww, our love is bigger than our ego! 🥹❤️",
  "Yesss! Now don't just answer correctly… bring my charmburi too! 🤭😂",
  "Look who's admitting he's the romantic one! My hero! 🤭❤️",
  "Our beach, our moment, our memory… forever in my heart. 🌊💋",
  "Caught you, foodie boy! Food is definitely your second love! 😂🍔",
  "HAHAHA! 'I'm coming' means another 30 minutes in Jaju language! 😂⏰",
  "That's my boy! ❤️ Take a deep breath, mwth… here comes the special part! 👀🌙",
  "HAHAHA! Go choose Neymar, mwth… because Ammu isn't an option. I'm your priority, not a choice! 😌❤️🌙"
];


/* ==========================================
   3. WRONG ANSWER MESSAGES
   Keep these in question order!
   ========================================== */

const wrongMessages = [
  "Wrong date, mwth! 🥹 Think again about the day our story began! ❤️",
  "Eyy! How could you forget our special day? Try again, husband! 😂💍",
  "Nope! 🤭 Think about the place where Ammu feels happiest! 🌊",
  "Wrong answer! 😂 You know who you are to your Ammu! ❤️",
  "Aiyo, mwth! Have you forgotten your girl's favourite colour? 🖤😂",
  "Excuse me?! 😒 Look who's trying to blame his Ammu! Try again! 😂",
  "Wrong, mwth! ❤️ We both know we can't stay angry for too long!",
  "Seriously?! 😭 You forgot my tea-time cravings? Think again! 😂",
  "Oh really? 👀 Now you're giving Ammu all the romantic credit? 😂❤️",
  "MWTHHH! 😭 How could you forget our first kiss? Think carefully! 🌊💋",
  "Liarrr! 😂🍕 We both know who loves food more!",
  "Don't act innocent! 🤨 Your 'I'm coming' deserves its own calendar reminder! 😂⏰",
  "Too late to back out now, mwth! 😂❤️ Your surprise is waiting!",
  "Think carefully, mwth! ⚽❤️ Remember, Ammu isn't an option to choose. I'm your priority! 😌🌙"
];


/* ==========================================
   4. GET HTML ELEMENTS
   ========================================== */

const quizContainer = document.querySelector("#quizQuestions");
const quizFeedback = document.querySelector("#quizFeedback");
const surprise = document.querySelector("#birthdaySurprise");
const checkQuiz = document.querySelector("#checkQuiz");

let currentQuestion = 0;
let quizCompleted = false;
let answerLocked = false;


/* ==========================================
   5. RENDER THE CURRENT QUESTION
   ========================================== */

function renderQuiz() {
  quizContainer.innerHTML = "";

  // Keep the birthday surprise hidden until completion
  surprise.hidden = true;

  const activeQuestions = quizQuestions.filter(
    q => q.question.trim() !== ""
  );

  if (activeQuestions.length === 0) {
    quizContainer.innerHTML =
      '<div class="quiz-question">Add your questions at the top of script.js. 🌙</div>';

    checkQuiz.disabled = true;
    quizFeedback.textContent = "";
    return;
  }

  // All questions have been answered correctly
  if (currentQuestion >= activeQuestions.length) {
    quizCompleted = true;

    quizContainer.innerHTML = `
      <div class="quiz-question">
        <h3>You did it, mwth! ❤️</h3>
        <p>You know your Ammu so well! 🥹🌙</p>
      </div>
    `;

    quizFeedback.textContent =
      "Every answer is correct! Your birthday surprise is unlocked! 🎂🌙❤️";

    surprise.hidden = false;
    checkQuiz.hidden = true;

    surprise.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    return;
  }

  const q = activeQuestions[currentQuestion];

  const item = document.createElement("div");
  item.className = "quiz-question";

  const number = document.createElement("div");
  number.className = "question-number";

  number.textContent =
    "QUESTION " +
    String(currentQuestion + 1).padStart(2, "0") +
    " OF " +
    String(activeQuestions.length).padStart(2, "0");

  const label = document.createElement("label");
  label.htmlFor = "quizAnswer";
  label.textContent = q.question;

  const input = document.createElement("input");
  input.id = "quizAnswer";
  input.type = "text";
  input.autocomplete = "off";
  input.placeholder = "Type your answer here…";
  input.setAttribute("aria-label", q.question);

  // Press Enter to check the answer
  input.addEventListener("keydown", event => {
    if (event.key === "Enter" && !answerLocked) {
      checkQuiz.click();
    }
  });

  item.append(number, label, input);
  quizContainer.appendChild(item);

  checkQuiz.hidden = false;
  checkQuiz.disabled = false;
  checkQuiz.textContent = "Check Answer ❤️";

  answerLocked = false;
  quizFeedback.textContent = "";

  
}


/* ==========================================
   6. CHECK ANSWER
   Correct/wrong messages match by question index
   ========================================== */

checkQuiz.addEventListener("click", () => {
  if (quizCompleted || answerLocked) return;

  const activeQuestions = quizQuestions.filter(
    q => q.question.trim() !== ""
  );

  const q = activeQuestions[currentQuestion];

  if (!q) return;

  if (!q.answer || !q.answer.trim()) {
    quizFeedback.textContent =
      "Please add the correct answer at the top of script.js first. 💌";
    return;
  }

  const input = document.querySelector("#quizAnswer");

  if (!input || input.value.trim() === "") {
    quizFeedback.textContent =
      "Come on, mwth! Give your Ammu an answer first! 😂";
    return;
  }

  // Ignore capitalization and extra spaces
  const userAnswer = input.value.trim().toLowerCase();
  const correctAnswer = q.answer.trim().toLowerCase();

  if (userAnswer === correctAnswer) {
    // Use this question's specific correct message
    quizFeedback.textContent = correctMessages[currentQuestion];

    // Lock the answer while the next question loads
    answerLocked = true;
    checkQuiz.disabled = true;

    currentQuestion++;

    setTimeout(() => {
      renderQuiz();
    }, 1800);

  } else {
    // Use this question's specific wrong message
    quizFeedback.textContent = wrongMessages[currentQuestion];

    // Stay on the same question
    input.value = "";
    input.focus();
  }
});


/* ==========================================
   7. START THE QUIZ
   ========================================== */

renderQuiz();
