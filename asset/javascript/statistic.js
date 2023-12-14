var options = {
    series: [{
        name: 'Football blogs',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    stroke: {
        width: [0, 4]
    },
    title: {
        text: 'Football Sources'
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
        type: 'datetime'
    },
    yaxis: [{
        title: {
            text: 'Football Blog',
        },

    }, {
        opposite: true,
        title: {
            text: 'Social Media'
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


// pie chart with data

var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        width: 450,
        type: 'pie',
    },
    labels: ['Arsenal', 'Aston Vela', 'Man City', 'Man United', 'Liverpool'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector(".chart1"), options);
chart.render();

// pie chart with images

var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        width: 450,
        type: 'pie',
    },
    // colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
    labels: ['Arsenal', 'Aston Vela', 'Man City', 'Man United', 'Liverpool'],
    fill: {
        type: 'image',
        opacity: .99,
        image: {
            src: ['../asset/img/arsenal-crest.png', '../asset/img/avfc.png', '../asset/img/mancity.png', '../asset/img/united.webp' , '../asset/img/liverpool.png'],
            width: 25,
            imagedHeight: 25
        },
    },
    stroke: {
        width: 4
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#111']
        },
        background: {
            enabled: true,
            foreColor: '#fff',
            borderWidth: 0
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector(".chart2"), options);
chart.render();







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
        for (pTag of pTags) {
            pTag.style.color = "black";
        }
        a = 1;
    }
}




