var mentor = ['Aaishika S Bhattacharya', 'Anush Bhatia', 'Smaranjit Ghose', 'Ishika Gupta', 'Naynika Madan', 'Kushagra Singh', 'Mayank Goyal', 'Atimabh Barunaha'];
var img = ['naruto.webp', 'anush.png', 'smaranjit.png', 'naruto.webp', 'naruto.webp', 'naruto.webp', 'naruto.webp', 'naruto.webp'];
var position = ['- Team Lead', '- Creatives Lead', '- Technical Lead', '- Content Lead', '- Community Lead', '- Partnership Lead', '- Partnership Lead', '- Web Team Lead']
var len = mentor.length;

var generateHere = document.getElementById("dynamicCards");

for (var i = 0; i < len; i++) {

    var html = '<div class="col-lg-3 cardWrapper"><div class="mentorCard"><div class="mentorImage"><img src="images/mentors/' + img[i] + '"><a href="#"><div class="linkedin"><i class="fab fa-linkedin-in"></i></div></a></div><div class="mentorText"><h1 class="text-center">' + mentor[i] + '</h1><h2 class="text-center">' + position[i] + '</h2></div></div></div>';
    generateHere.insertAdjacentHTML('beforeend', html);
    console.log(i);
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


var dots = window.setInterval(function() {
    var wait = document.getElementById("wait");
    if (wait.innerHTML.length > 4)
        wait.innerHTML = "";
    else
        wait.innerHTML += " .";
}, 200);