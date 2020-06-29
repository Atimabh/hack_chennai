var mentor = ['Anush Bhatia', 'Smaranjit Ghose'];
var img = ['anush.png', 'smaranjit.png'];
var skills = ['<span class="pink">UI/UX</span><span class="green">Cloud</span>', '<span class="pink">Python</span><span class="green">AI/ML</span><div class="break"></div><span class="yellow">CV</span>']
var len = mentor.length;

var generateHere = document.getElementById("dynamicCards");

for (var i = 0; i < len; i++) {

    var html = '<div class="col-lg-3 cardWrapper"><div class="mentorCard"><div class="mentorImage"><img src="images/mentors/' + img[i] + '"></div><div class="mentorText"><h1 class="text-center">' + mentor[i] + '</h1><a href="#"><div class="linkedin"><i class="fab fa-linkedin-in"></i></div></a></div><div class="mentorSkills">' + skills[i] + '</div></div></div>';
    generateHere.insertAdjacentHTML('beforeend', html);
    console.log(i);
};