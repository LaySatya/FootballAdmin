


// search

const searchInput = document.getElementById('searchInput');
let search = true;
searchInput.addEventListener('click', () => {
    if (search == true) {
        searchInput.style.width = "95%";
        searchInput.style.transition = ".5s";
        search = false;
    }
    else {
        searchInput.style.width = "70%";
        searchInput.style.transition = ".5s";
        search = true;
    }
})

// add user

const addUser = document.getElementById('addUser');
const selects = document.querySelectorAll('.form-select ,.input-group-text , .form-control,  .btn , .form-label');
const formAdd = document.getElementById('formAdd');

let t = 1;
addUser.addEventListener('click', () => {
    if (t == 1) {
        formAdd.style.height = "17rem";
        formAdd.style.transition = ".5s";
        for (select of selects) {
            select.style.display = "block";
            select.style.transition = ".5s";
        }
        t = 2;
    }
    else {
        formAdd.style.height = "0rem";
        formAdd.style.transition = ".5s";
        for (select of selects) {
            select.style.display = "none";
        }
        t = 1;
    }
})


const getId = document.getElementById('validationTooltip01');
const getName = document.getElementById('validationTooltip02');
const getEmail = document.getElementById('validationTooltipUsername');
const getDate = document.getElementById('validationTooltip03');
const getCity = document.getElementById('validationTooltip04');
const getPic = document.getElementById('validationTooltip05');
const myTable = document.getElementById("myTable");
const tbody = myTable.querySelector("tbody");
const btn = document.getElementById('btnClick');

btn.addEventListener('click', () => {
    var newRow = document.createElement("tr");
    var idCell = document.createElement("td");
    var nameCell = document.createElement("td");
    var emailCell = document.createElement("td");
    var cityCell = document.createElement("td");
    var dateCell = document.createElement("td");
    var  statusCell = document.createElement("td");
    idCell.textContent = getId.value;
    nameCell.textContent = getName.value;
    emailCell.textContent = getEmail.value;
    dateCell.textContent = getDate.value;
    cityCell.textContent = getCity.value;
    statusCell.textContent = "Online";

    newRow.appendChild(idCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(cityCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(statusCell);
    tbody.appendChild(newRow);

})









// dark mode

var a = 1;
function myModes() {

    const tableTags = document.getElementsByTagName("table");
    const pTags = document.getElementsByTagName("p");
    const h1Tags = document.getElementsByTagName("h1");
    const h2Tags = document.getElementsByTagName("h2");
    const h3Tags = document.getElementsByTagName("h3");
    const h4Tags = document.getElementsByTagName("h4");
    const h5Tags = document.getElementsByTagName("h5");
    const h6Tags = document.getElementsByTagName("h6");
    const spanTags = document.getElementsByTagName("span");
    const labelTags = document.getElementsByTagName("label");
    const iTags = document.getElementsByTagName("i");
    const aTags = document.getElementsByTagName("a");
    const texts = document.getElementsByClassName('txtH6');
    const text1s = document.getElementsByClassName('txtH61');
    const players = document.getElementsByClassName('playerInformation');
    const players1 = document.getElementsByClassName('playerInformation1');
    const subLogins = document.getElementsByClassName('subLogin');
    const uls = document.getElementsByClassName('log');
    const rows = document.querySelectorAll('.row , .input-group-text');
    const users = document.getElementsByClassName('user-header');
    const icons = document.getElementsByClassName('fa-chevron-down');
    const boxs = document.getElementsByClassName('box-user');
    const nexts = document.getElementsByClassName('next');
    const datas = document.getElementsByClassName('data-c');
    const marquees = document.getElementsByClassName('marquee');
    const bar = document.getElementById('barShow');
    const header = document.getElementById('headerChange');
    const body = document.querySelector('body');
    if (a == 1) {
        body.style.backgroundColor = "black";
        bar.style.backgroundColor = "#212121";
        header.style.backgroundColor = "#212121";


        for (row of rows) {
            row.style.backgroundColor = "#212121";
            row.style.boxShadow = "1px 1px 1px 1px grey";
        }

        for (next of nexts) {
            next.style.backgroundColor = "#212121";
        }

        for (icon of icons) {
            icon.style.backgroundColor = "grey";
        }

        for (box of boxs) {
            box.style.backgroundColor = "#212121";
        }
        for (user of users) {
            user.style.backgroundColor = "#212121";
        }

        for (sub of subLogins) {
            sub.style.backgroundColor = "#212121";
        }
        for (ul of uls) {
            ul.style.backgroundColor = "grey";
        }


        for (table of tableTags) {
            table.style.border = "1px solid #212121";
            // table.classList.remove("tabler");  // Remove mystyle class
            table.classList.add("table-dark");  // Add newone class
        }

        for (txt of texts) {
            txt.style.background = "linear-gradient(to right , #212121 , #212121)";
        }
        for (txt1 of text1s) {
            txt1.style.background = "linear-gradient(to right , #212121 , #212121)";
        }

        for (marquee of marquees) {
            marquee.style.background = "#212121";
        }
        for (player of players) {
            player.style.backgroundColor = "#212121";
            // player.style.border = "1px solid white";
        }
        for (player1 of players1) {
            player1.style.backgroundColor = "#212121";
            // player1.style.border = "1px solid white";
        }

        for (data of datas) {
            data.style.backgroundColor = "#212121";
            data.style.border = "white";
        }

        for (aTag of aTags) {
            aTag.style.color = "white";
            aTag.style.opacity = "1";
        }
        for (iTag of iTags) {
            iTag.style.color = "white";
            iTag.style.opacity = "1";
        }
        for (spanTag of spanTags) {
            spanTag.style.color = "white";
            spanTag.style.opacity = "1";
        }
        for (labelTag of labelTags) {
            labelTag.style.color = "white";
            labelTag.style.opacity = "1";
        }
        for (h1Tag of h1Tags) {
            h1Tag.style.color = "white";
            h1Tag.style.opacity = "1";
        }
        for (h2Tag of h2Tags) {
            h2Tag.style.color = "white";
            h2Tag.style.opacity = "1";
        }
        for (h3Tag of h3Tags) {
            h3Tag.style.color = "white";
            h3Tag.style.opacity = "1";
        }
        for (h4Tag of h4Tags) {
            h4Tag.style.color = "white";
            h4Tag.style.opacity = "1";
        }
        for (h5Tag of h5Tags) {
            h5Tag.style.color = "white";
            h5Tag.style.opacity = "1";
        }
        for (h6Tag of h6Tags) {
            h6Tag.style.color = "white";
            h6Tag.style.opacity = "1";
        }
        // for(divTag of divTags){
        //     divTag.style.backgroundColor = "#212121";
        //     divTag.style.border = "1px solid white";
        // }
        for (pTag of pTags) {
            pTag.style.color = "white";
        }
        a = 2;
    }
    else {
        body.style.backgroundColor = "whitesmoke";
        bar.style.backgroundColor = "white";
        header.style.backgroundColor = "white";


        for (row of rows) {
            row.style.backgroundColor = "white";
            row.style.boxShadow = "1px 1px 1px 1px lightgrey";
        }

        for (box of boxs) {
            box.style.backgroundColor = "white";
        }
        for (user of users) {
            user.style.backgroundColor = "white";
        }



        for (sub of subLogins) {
            sub.style.backgroundColor = "white";
        }
        for (ul of uls) {
            ul.style.backgroundColor = "#f5f5f5";
        }


        // chang class name to change color of table to dark
        for (table of tableTags) {
            table.style.border = "none";
            table.classList.remove("table-dark");  // Remove mystyle class
            // table.classList.add("table");  // Add newone class
        }

        for (txt of texts) {
            txt.style.background = "white";
        }
        for (txt1 of text1s) {
            txt1.style.background = "white";
        }

        for (marquee of marquees) {
            marquee.style.background = "white";
        }
        for (player of players) {
            player.style.backgroundColor = "white";
            // player.style.border = "1px solid white";
        }
        for (player1 of players1) {
            player1.style.backgroundColor = "white";
            // player1.style.border = "1px solid white";
        }

        for (data of datas) {
            data.style.backgroundColor = "white";
            // data.style.border = "white";
        }

        for (aTag of aTags) {
            aTag.style.color = "black";
            aTag.style.opacity = ".8";
        }
        for (iTag of iTags) {
            iTag.style.color = "black";
            iTag.style.opacity = ".8";
        }
        for (spanTag of spanTags) {
            spanTag.style.color = "black";
            spanTag.style.opacity = ".8";
        }
        for (labelTag of labelTags) {
            labelTag.style.color = "black";
            labelTag.style.opacity = ".8";
        }
        for (h1Tag of h1Tags) {
            h1Tag.style.color = "black";
            h1Tag.style.opacity = ".8";
        }
        for (h2Tag of h2Tags) {
            h2Tag.style.color = "black";
            h2Tag.style.opacity = ".8";
        }
        for (h3Tag of h3Tags) {
            h3Tag.style.color = "black";
            h3Tag.style.opacity = ".8";
        }
        for (h4Tag of h4Tags) {
            h4Tag.style.color = "black";
            h4Tag.style.opacity = ".8";
        }
        for (h5Tag of h5Tags) {
            h5Tag.style.color = "black";
            h5Tag.style.opacity = ".8";
        }
        for (h6Tag of h6Tags) {
            h6Tag.style.color = "black";
            h6Tag.style.opacity = ".8";
        }
        for (pTag of pTags) {
            pTag.style.color = "black";
        }
        a = 1;
    }
}

// set img slideshow

var image = document.getElementById("aaa");
var img_array = ["../asset/img/satyaImage.png", "../asset/img/panha.png", "../asset/img/narinImg.png"];
var index = 0;
function slide() {
    image.setAttribute("src", img_array[index]);
    image.style.animation = "fadeInFromLeft 1.5s ease";
    index++;
    if (index >= img_array.length) {
        index = 0;
    }
}
setInterval("slide()", 2000);




// Select elements by class name and convert it into an array
var layName = document.getElementsByClassName("lay");
var layName_array = ["Lay Satya", "Lay Sopanha", "Narin Pich"];
var idx = 0;

function slide1() {
    // Iterate over each element with the class name "lay"
    for (var i = 0; i < layName.length; i++) {
        layName[i].textContent = layName_array[idx];
        layName[i].style.color = "darkblue";
        layName[i].style.animation = " 1.5s ease out";
        layName[i].style.fontWeight = "bold";
        layName[i].style.transform = "translateY(-20px)";
    }

    idx++;
    if (idx >= layName_array.length) {
        idx = 0;
    }
}

setInterval(slide1, 2000);

