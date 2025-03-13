
let questions = [
    {
        id: 1,
        question: "Apa kepanjangan dari HTML?",
        answer: "HyperText Markup Language",
        options: [
            "HyperText Markup Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "Mana yang digunakan untuk mendefinisikan gaya tampilan sebuah halaman web?",
        answer: "CSS",
        options: [
            "JavaScript",
            "HTML",
            "CSS",
            "PHP"
        ]
    },
    {
        id: 3,
       question: "Bagaimana cara menyisipkan komentar dalam CSS?",
        answer: "/* komentar */",
        options: [
            "// komentar",
            "/* komentar */",
            "<!-- komentar -->",
            "// this is a comment//"
        ]
    },
    {
        id: 4,
        question: "Apa kepanjangan dari CSS?",
        answer: "Cascading Style Sheets",
        options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets"
        ]
    },
    {
        id: 5,
        question: "Properti CSS manakah yang digunakan untuk mengubah warna latar belakang elemen?",
        answer: "background-color",
        options: [
            "color",
            "background-color",
            "bg-color",
            "background"
        ]
    },
    {
        id: 6,
        question: "Bagaimana cara membuat teks menjadi tebal di CSS?",
        answer: "font-weight: bold",
        options: [
            "font-style: bold",
            "font-weight: bold",
            "text-bold: true",
            "font-size: large"
        ]
    },
    {
        id: 7,
       question: "Untuk membuat teks rata tengah dengan CSS, properti apa yang digunakan?",
        answer: "text-align: center",
        options: [
            "text-align: center",
            "text-align: middle",
            "align: center",
            "center-align: true"
        ]
    },
    {
        id: 8,
        question: "Properti CSS manakah yang digunakan untuk mengubah jenis font sebuah elemen?",
        answer: "font-family",
        options: [
            "font-family",
            "font-style",
            "font-size",
            "font-color"
        ]
    },
    {
        id: 9,
       question: "Properti CSS manakah yang digunakan untuk mengatur margin elemen?",
        answer: "margin",
        options: [
            "padding",
            "border",
            "margin",
            "spacing"
        ]
    },
    {
        id: 10,
        question: "Apa fungsi dari tag <div> dalam HTML?",
        answer: "Digunakan untuk membuat sebuah blok elemen",
        options: [
            "Untuk mendefinisikan gambar",
            "Untuk membuat link",
            "Digunakan untuk membuat sebuah blok elemen",
            "Untuk mendefinisikan paragraf"
        ]
    },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}