(function(){
  "use strict";

  var DATA = {
    computer: {
      emoji: "🖥️",
      eyebrow: "About me",
      title: "Hi, I'm Samuel",
      html: [
        "<p>I'm a secondary school student at SMK Sacred Heart, Sibu, with interests in leadership, community engagement, mathematics and technology.</p>",
        "<p>I'm actively involved in student leadership, scouting, youth fellowship service, public speaking and marching band performances — which have grown my teamwork, communication and organisational skills.</p>",
        "<p>I'm passionate about problem-solving, continuous learning, and contributing positively to my community, especially where it affects young people and society.</p>",
        "<h4>Core skills</h4>",
        "<div class='pill-row'>",
          "<span class='pill'>Leadership</span><span class='pill'>Teamwork</span><span class='pill'>Public Speaking</span>",
          "<span class='pill'>Problem Solving</span><span class='pill'>Project Management</span>",
        "</div>"
      ].join("")
    },
    nameplate: {
      emoji: "🪪",
      eyebrow: "Get in touch",
      title: "Contact",
      html: [
        "<div class='contact-row'><span class='ico'>☎</span> +60-1123840722</div>",
        "<div class='contact-row'><span class='ico'>✉</span> sakobaki20@gmail.com</div>",
        "<div class='contact-row'><span class='ico'>📍</span> 96000 Sibu, Sarawak</div>",
        "<h4>Links</h4>",
        "<ul>",
          "<li><a href='https://www.linkedin.com/in/samuelkongbangkiet/' target='_blank' rel='noopener'>linkedin.com/in/samuelkongbangkiet</a></li>",
          "<li><a href='https://github.com/a-programmer-cat' target='_blank' rel='noopener'>github.com/a-programmer-cat</a></li>",
        "</ul>"
      ].join("")
    },
    education: {
      emoji: "🧣",
      eyebrow: "Education",
      title: "Sacred Heart School",
      html: [
        "<p><strong>SMK Sacred Heart, Sibu</strong> · 2024 – 2028</p>",
        "<h4>Results</h4>",
        "<ul>",
          "<li>2026 First Term School Examination: <strong>7A 3B 1C</strong></li>",
          "<li>Consistently ranked in the <strong>Top 3</strong> of the whole grade, 2024 – 2026</li>",
        "</ul>",
        "<h4>Languages</h4>",
        "<div class='pill-row'><span class='pill'>English — Fluent</span><span class='pill'>Malay — Fluent</span><span class='pill'>Chinese — Fluent</span></div>"
      ].join("")
    },
    leadership: {
      emoji: "🎗️",
      eyebrow: "Leadership, language & general excellence",
      title: "Leading & speaking up",
      html: [
        "<ul>",
          "<li>SMK Sacred Heart Junior Prefectorial Board — <strong>Vice Head Prefect II</strong></li>",
          "<li>Committee member, Shiuan En Methodist Church Junior Youth Fellowship, Methodist Church Malaysia Sarawak Chinese Annual Conference (SCAC)</li>",
          "<li>20th Toastmasters International Youth Leadership Camp 2025, Impromptu Speech Contest — <strong>9th Place</strong></li>",
          "<li>Sarawak Scout Association Creative Video Competition 2025 — <strong>2nd Runner-up</strong></li>",
          "<li>Majlis Apresiasi Sektor Pembangunan Murid, Pejabat Pendidikan Daerah Sibu (2022 – 2024) — <strong>Anugerah Pencapaian Cemerlang Sukan / Kokurikulum</strong></li>",
          "<li>15th Singapore-Malaysia-Brunei On-The-Spot Chinese Creative Essay Writing Competition 2023, Sibu — <strong>Honorable Mention</strong></li>",
          "<li>Promotion Test of Sarawak Taekwondo Association (MTA) 2022 — <strong>Grade 8</strong></li>",
        "</ul>"
      ].join("")
    },
    hobbies: {
      emoji: "🎧",
      eyebrow: "Outside the classroom",
      title: "Hobbies",
      html: [
        "<div class='pill-row'>",
          "<span class='pill'>Programming</span><span class='pill'>Photography</span><span class='pill'>Reading</span>",
          "<span class='pill'>Scouting</span><span class='pill'>Bagpipe Band</span><span class='pill'>Music</span>",
          "<span class='pill'>Solving Maths Problems</span><span class='pill'>Fitness</span><span class='pill'>Running</span>",
        "</div>",
        "<h4>Languages</h4>",
        "<p>Fluent in English, Malay and Chinese.</p>"
      ].join("")
    },
    scouting: {
      emoji: "🏕️",
      eyebrow: "2nd Sibu Scout",
      title: "Scouting",
      html: [
        "<ul>",
          "<li>2nd Sibu Scout Committee Member, 2025/2026 session — <strong>First Aid</strong></li>",
          "<li>Earned the <strong>Lencana Usaha</strong> badge, <strong>Lencana Maju</strong> badge, 2 Interest Badges and 3 Skill (Proficiency) Badges</li>",
          "<li>Jota Camp 2025, SK Jalan Deshon</li>",
          "<li>Sarawak Scout Eco Run 4.0 2025, Kanowit</li>",
          "<li>Sarawak Scout Eco Run 5.0 2026, Sibu</li>",
          "<li>More than 5 camps held by 2nd Sibu Scout Company</li>",
        "</ul>"
      ].join("")
    },
    band: {
      emoji: "🥁",
      eyebrow: "SMK Sacred Heart 2nd Sibu Scout Bagpipe Band",
      title: "Bagpipe Band",
      html: [
        "<p>Serving as <strong>Drum Major</strong> and <strong>Side Drummer</strong>, and learning to play the bagpipe.</p>",
        "<ul>",
          "<li>Performed at Christmas Parade Sibu, 2024 and 2025</li>",
          "<li>Took part in several other band performances and parade events</li>",
        "</ul>"
      ].join("")
    },
    projects: {
      emoji: "📷",
      eyebrow: "Community projects",
      title: "Building for Sibu",
      html: [
        "<h4>CyberSavvy</h4>",
        "<p>After my grandfather was scammed and lost his savings, I built CyberSavvy to protect elderly and young people from online scams — game-like quizzes from real local scam stories, a space to share experiences, emergency guides, in English, Malay and Chinese.</p>",
        "<p><a href='https://cyber-savvy-five.vercel.app' target='_blank' rel='noopener'>cyber-savvy-five.vercel.app</a><br>Coolest Projects Malaysia 2025 (Senior Web) — <strong>1st Runner-up</strong></p>",
        "<h4>Flood-Res</h4>",
        "<p>After relatives lost their home in the 2025 Bintulu floods, I designed Flood-Res: a location-based live flood warning system that turns weather data into simple, practical safety tips for families.</p>",
        "<p><a href='https://bit.ly/flood-res' target='_blank' rel='noopener'>bit.ly/flood-res</a><br>Science Castle Malaysia 2025 (National Level) — <strong>Gold Award</strong></p>"
      ].join("")
    },
    tech: {
      emoji: "🥇",
      eyebrow: "Technology & innovation",
      title: "Competition awards",
      html: [
        "<ul>",
          "<li>Sarawak Space Apps Challenge 2025 (Junior) — <strong>Champion</strong></li>",
          "<li>Coolest Projects Malaysia 2025 (Senior Web) — <strong>1st Runner-up</strong></li>",
          "<li>BugCrusher Junior Hackathon 2025 (National) — <strong>1st Runner-up</strong></li>",
          "<li>Science Castle Malaysia 2025 (National) — <strong>Gold Award</strong></li>",
          "<li>Smart Innovation Competition 2025 (International) — <strong>Silver Award</strong></li>",
          "<li>3rd International Innovation &amp; Invention Competition 2025 (International) — <strong>Silver Award</strong></li>",
          "<li>PALS Conference 2024, Bintulu — <strong>2nd Runner-up</strong></li>",
          "<li>Coolest Projects Malaysia 2023 (Junior Games) — <strong>Honorable Mention</strong></li>",
        "</ul>"
      ].join("")
    },
    math: {
      emoji: "📘",
      eyebrow: "Mathematics & science",
      title: "Numbers & competitions",
      html: [
        "<p>Committee Member, SMK Sacred Heart Mathematics Club, 2025/2026 session.</p>",
        "<ul>",
          "<li>Kangaroo Math Competition 2025 (National) — <strong>Silver Award</strong></li>",
          "<li>Kangaroo Math Competition 2023 &amp; 2021 (National) — <strong>Gold Award</strong></li>",
          "<li>Catholic High School Sibu Primary Six Science, Mathematics &amp; Trilingual Proficiency Competition 2023 — <strong>Champion</strong></li>",
          "<li>ASMO Maths Olympiad Competition, School Round 2024 (Grade 7) — <strong>Merit Award</strong></li>",
          "<li>Malaysia International Mathematical Arithmetic for Schools 2023 (Arithmetic Olympiad) — <strong>Distinction</strong></li>",
          "<li>Malaysia International Mathematical Arithmetic for Schools 2023 (Mathematics Invitational) — <strong>Bronze</strong></li>",
          "<li>37th Ka Yin Chu National SJKC Mathematics Competition 2023 — <strong>Merit Award</strong></li>",
          "<li>Olympia Mathematics Competition (OMC) 2022 — <strong>Platinum</strong></li>",
          "<li>4th Benedict Goh Malaysia Schools Mathematics Championship 2021 — <strong>Diamond Award</strong></li>",
        "</ul>"
      ].join("")
    },
    skills: {
      emoji: "🧩",
      eyebrow: "What I build with",
      title: "Skills",
      html: [
        "<div class='pill-row'>",
          "<span class='pill'>Artificial Intelligence</span><span class='pill'>Game Development</span>",
          "<span class='pill'>Full-Stack Web Development</span><span class='pill'>Application Development</span>",
          "<span class='pill'>Hardware Development</span>",
        "</div>",
        "<h4>Alongside that</h4>",
        "<div class='pill-row'>",
          "<span class='pill'>Leadership</span><span class='pill'>Teamwork &amp; Collaboration</span>",
          "<span class='pill'>Public Speaking</span><span class='pill'>Problem Solving &amp; Creativity</span>",
          "<span class='pill'>Project &amp; Time Management</span>",
        "</div>"
      ].join("")
    }
  };

  var scene = document.getElementById("scene");
  var card = document.getElementById("card");
  var backdrop = document.getElementById("backdrop");
  var cardClose = document.getElementById("cardClose");
  var cardEmoji = document.getElementById("cardEmoji");
  var cardEyebrow = document.getElementById("cardEyebrow");
  var cardTitle = document.getElementById("cardTitle");
  var cardBody = document.getElementById("cardBody");
  var objs = Array.prototype.slice.call(document.querySelectorAll(".obj"));
  var current = null;

  function openCard(id){
    var d = DATA[id];
    if(!d) return;
    cardEmoji.textContent = d.emoji;
    cardEyebrow.textContent = d.eyebrow;
    cardTitle.textContent = d.title;
    cardBody.innerHTML = d.html;
    cardBody.scrollTop = 0;

    objs.forEach(function(o){ o.classList.toggle("active", o.dataset.id === id); });
    scene.classList.add("dimmed");
    scene.classList.add("interacted");
    card.classList.add("open");
    backdrop.classList.add("open");
    current = id;
  }

  function closeCard(){
    objs.forEach(function(o){ o.classList.remove("active"); });
    scene.classList.remove("dimmed");
    card.classList.remove("open");
    backdrop.classList.remove("open");
    current = null;
  }

  objs.forEach(function(o){
    o.addEventListener("click", function(){
      var id = o.dataset.id;
      if(current === id){ closeCard(); } else { openCard(id); }
    });
    o.addEventListener("keydown", function(e){
      if(e.key === "Enter" || e.key === " " || e.key === "Spacebar"){
        e.preventDefault();
        o.click();
      }
    });
  });

  backdrop.addEventListener("click", closeCard);
  cardClose.addEventListener("click", closeCard);
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape") closeCard();
  });

})();
