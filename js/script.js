//Mentors
var mentor = ['Anush Bhatia', 'Smaranjit Ghose'];
var img = ['naruto.webp', 'anush.png', 'smaranjit.png', 'naruto.webp', 'naruto.webp', 'naruto.webp', 'naruto.webp', 'naruto.webp'];
var skills = ['<h1 class="pink">UI/UX</h1><h1 class="green">CLOUD</h1>', '<h1 class="pink">PYTHON</h1><h1 class="green">AI/ML</h1><h1 class="yellow">COMPUTER VISION</h1>']
var len = mentor.length;

var generateHere = document.getElementById("dynamicCards");

for (var i = 0; i < len; i++) {

    var html = '<div class="col-lg-3 cardWrapper"><div class="mentorCard"><div class="mentorImage"><img src="images/mentors/' + img[i] + '"><a href="#"><div class="linkedin"><i class="fab fa-linkedin-in"></i></div></a></div><div class="mentorText"><h1 class="text-center">' + mentor[i] + '</h1><div class="skills">' + skills[i] + '</div></div></div></div>';
    generateHere.insertAdjacentHTML('beforeend', html);
    console.log(i);
};

//Team
var member = ['Aaishika S Bhattacharya', 'Anush Bhatia', 'Smaranjit Ghose', 'Ishika Gupta', 'Naynika Madan', 'Kushagra Singh', 'Mayank Goyal', 'Atimabh Barunaha'];
var position = ['Team Lead', 'creatives lead', 'technical lead', 'content lead', 'community lead', 'partnership lead', 'partnership lead', 'Web Team Lead'];
var photo = ['naruto.webp', 'anush.png', 'smaranjit.png', 'naruto.webp', 'naruto.webp', 'naruto.webp', 'naruto.webp', 'naruto.webp'];
var he = member.length;
console.log(he);

var dynamic = document.getElementById("teamCards");

for (var j = 0; j < he; j++) {
    var content = ' <div class="col-lg-3 cardWrapper"><div class="teamCard"><div class="teamImage"><img src="images/mentors/' + photo[j] + '" alt=" "></div><div class="teamText"><h1>' + member[j] + '</h1><h2>' + position[j] + '</h2></div><div class="teamLinks"><a href="#"><div class="teamLinkedin"><img src="images/linkedin.svg" alt=" "></div></a><a href="#"><div class="teamGithub"><img src="images/github.svg" alt=" "></div></a></div></div></div>';
    dynamic.insertAdjacentHTML('beforeend', content);
};

//Navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


//Virtual Hackathon Dots
var dots = window.setInterval(function() {
    var wait = document.getElementById("wait");
    if (wait.innerHTML.length > 4)
        wait.innerHTML = "";
    else
        wait.innerHTML += " .";
}, 200);


//Countdown
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date('August 14 2020')));
// const deadline = '2020-11-14'
initializeClock('clockdiv', deadline);