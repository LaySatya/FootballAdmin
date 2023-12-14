


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

// Scroll to specific values
// window.scrollTo or window.scroll
// window.scroll({
//     top: 1000,
//     left: 0,
//     behavior: 'smooth'
// });

// // Scroll certain amounts from current position 
// window.scrollBy({
//     top: 250, // could be negative value
//     left: 0,
//     behavior: 'smooth'
// });

// // Scroll to a certain element
// document.getElementById('el').scrollIntoView({
//     behavior: 'smooth'
// })


// function myModes() {
//     alert(1);
//     const tabs = document.getElementById("tab");
//     tabs.classList.remove("table table-hover");  // Remove mystyle class
//     tabs.classList.add("table-dark table-hover");  // Add newone class
// }

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
    const datas = document.getElementsByClassName('data-c');
    const marquees = document.getElementsByClassName('marquee');
    const bar = document.getElementById('barShow');
    const header = document.getElementById('headerChange');
    const body = document.querySelector('body');
    if (a == 1) {
        body.style.backgroundColor = "black";
        bar.style.backgroundColor = "#212121";
        header.style.backgroundColor = "#212121";
        
        
        for(sub of subLogins){
            sub.style.backgroundColor = "#212121";
        }
        for(ul of uls){
            ul.style.backgroundColor = "grey";
        }


        for(table of tableTags){
            table.style.border = "1px solid #212121";
            // table.classList.remove("tabler");  // Remove mystyle class
            table.classList.add("table-dark");  // Add newone class
        }
        
        for(txt of texts){
            txt.style.background = "linear-gradient(to right , #212121 , #212121)";
        }
        for(txt1 of text1s){
            txt1.style.background = "linear-gradient(to right , #212121 , #212121)";
        }

        for (marquee of marquees ){
            marquee.style.background = "#212121";
        }
        for (player of players){
            player.style.backgroundColor = "#212121";
            // player.style.border = "1px solid white";
        }
        for (player1 of players1){
            player1.style.backgroundColor = "#212121";
            // player1.style.border = "1px solid white";
        }
        
        for(data of datas){
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
        


        for(sub of subLogins){
            sub.style.backgroundColor = "white";
        }
        for(ul of uls){
            ul.style.backgroundColor = "#f5f5f5";
        }


        // chang class name to change color of table to dark
        for(table of tableTags){
            table.style.border = "none";
            table.classList.remove("table-dark");  // Remove mystyle class
            // table.classList.add("table");  // Add newone class
        }
        
        for(txt of texts){
            txt.style.background = "white";
        }
        for(txt1 of text1s){
            txt1.style.background = "white";
        }

        for (marquee of marquees ){
            marquee.style.background = "white";
        }
        for (player of players){
            player.style.backgroundColor = "white";
            // player.style.border = "1px solid white";
        }
        for (player1 of players1){
            player1.style.backgroundColor = "white";
            // player1.style.border = "1px solid white";
        }
        
        for(data of datas){
            data.style.backgroundColor = "white";
            // data.style.border = "white";
        }

        for (aTag of aTags) {
            aTag.style.color = "black";
            aTag.style.opacity = ".8";
        }
        for (iTag of iTags) {
            iTag.style.color = "#212121";
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
        // for(divTag of divTags){
        //     divTag.style.backgroundColor = "#212121";
        //     divTag.style.border = "1px solid white";
        // }
        for (pTag of pTags) {
            pTag.style.color = "black";
        }
        a = 1;
    }
}
//     var a = 1;

// function myModes() {
//     const body = document.querySelector('body');
//     const bar = document.getElementById('barShow');
//     const header = document.getElementById('headerChange');
//     const allTags = document.querySelectorAll('table, p, h1, h2, h3, h4, h5, h6, span, label, i, a, .txtH6, .txtH61, .playerInformation, .playerInformation1, .data-c, .marquee');

//     if (a === 1) {
//         body.style.backgroundColor = "black";
//         bar.style.backgroundColor = "#212121";
//         header.style.backgroundColor = "#212121";
        
//         allTags.forEach(tag => {
//             tag.style.color = "white";
//             tag.style.opacity = "1";
//             if (tag.tagName === "TABLE") {
//                 tag.style.border = "1px solid #212121";
//                 tag.classList.remove("tabler");
//                 tag.classList.add("table-dark");
//             } else if (tag.classList.contains('txtH6') || tag.classList.contains('txtH61')) {
//                 tag.style.background = "linear-gradient(to right, #212121, #212121)";
//             } else if (tag.classList.contains('marquee')) {
//                 tag.style.background = "#212121";
//             } else if (tag.classList.contains('data-c')) {
//                 tag.style.backgroundColor = "#212121";
//                 tag.style.border = "white";
//             } else if (tag.tagName === "A" || tag.tagName === "I" || tag.tagName === "SPAN" || tag.tagName === "LABEL" || tag.tagName === "H1" || tag.tagName === "H2" || tag.tagName === "H3" || tag.tagName === "H4" || tag.tagName === "H5" || tag.tagName === "H6") {
//                 tag.style.color = "white";
//             } else if (tag.tagName === "P") {
//                 tag.style.color = "white";
//             }
//         });

//         a = 2;
//     } else {
//         // Revert to the original state
//         body.style.backgroundColor = "white";
//         bar.style.backgroundColor = "white";
//         header.style.backgroundColor = "white";
        
//         allTags.forEach(tag => {
//             if (tag.tagName === "TABLE") {
//                 tag.style.border = "";
//                 tag.classList.remove("table-dark");
//                 // Add back the original class if needed
//                 // tag.classList.add("tabler");
//             } else if (tag.classList.contains('txtH6') || tag.classList.contains('txtH61')) {
//                 tag.style.background = "";
//             } else if (tag.classList.contains('marquee')) {
//                 tag.style.background = "";
//             } else if (tag.classList.contains('data-c')) {
//                 tag.style.backgroundColor = "";
//                 tag.style.border = "";
//             } else if (tag.tagName === "A" || tag.tagName === "I" || tag.tagName === "SPAN" || tag.tagName === "LABEL" || tag.tagName === "H1" || tag.tagName === "H2" || tag.tagName === "H3" || tag.tagName === "H4" || tag.tagName === "H5" || tag.tagName === "H6" || tag.tagName === "P") {
//                 tag.style.color = "black";
//             }
//         });

//         a = 1;
//     }
// }



