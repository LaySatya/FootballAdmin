// toggle subLogin 

const loginBtn = document.getElementById('loginBtn');
const nameChange = document.getElementById('nameChange');
const profile1 = document.querySelector('profile1');
const profileShow = document.getElementById('profileShow');
var m = 1;
loginBtn.addEventListener('click', () => {
    if (m == 1) {
        loginBtn.style.transform = "rotate(180deg)";
        loginBtn.style.transition = ".5s";
        profileShow.style.display = "block";
        subLoginShow.style.height = "15rem";
        subLoginShow.style.transition = ".5s";
        m = 2;
    }
    else {
        loginBtn.style.transform = "rotate(0deg)";
        loginBtn.style.transition = ".5s";
        profileShow.style.display = "none";
        subLoginShow.style.height = "0rem";
        subLoginShow.style.transition = ".5s";
        m = 1;
    }
})



// toggle fa-bar to show slibar

var t = 1;
function Bar(){
    const faShows = document.getElementsByClassName('sliBar');
    const iconS = document.getElementsByClassName('icon');
    const iconSoccers = document.getElementsByClassName('icon-soccer');
        if( t == 1 ){
            for(faShow of faShows){
                faShow.style.width = "6rem";
            }
            for(iconss of iconS){
                iconss.style.display = "block";
            }
            for(iconSoccer of iconSoccers){
                iconSoccer.style.display = "block";
            }
            t = 2;
        }
        else{
            for(faShow of faShows){
                faShow.style.width = "0rem";
            }
            for(iconss of iconS){
                iconss.style.display = "none";
            }
            for(iconSoccer of iconSoccers){
                iconSoccer.style.display = "none";
            }
            t = 1;
        }
}
