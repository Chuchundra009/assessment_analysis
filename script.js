const grades =[];
const max = 100;

// Первое задание
for (let i = 0; i < 12; i++) {
    grades.push(Math.round(Math.random()*max));
}



const textGrades = document.querySelector('#textGrades');
textGrades.innerHTML = `Оценки студентов: ${grades}`;


// Второе задание
const lengthGr= grades.length;
const sum = grades.reduce((a,b)=>a+b);
const gpa = Math.floor(sum /lengthGr);



const textGpa = document.querySelector('#textGpa');
textGpa.innerHTML = `Средний балл студентов: ${gpa}`;





// Третье и четвертое задание
const gradeMax = Math.max(...grades);



const textMax = document.querySelector('#textMax');
textMax.innerHTML = `Максимальный балл среди студентов: ${gradeMax}`;


const gradeMin = Math.min(...grades);



const textMin = document.querySelector('#textMin');
textMin.innerHTML = `Минимальный балл среди студентов: ${gradeMin}`;




// Пятое задание
const goodStydent = grades.filter(function(grade){
   return grade >= 60;
})



const textAmountStudent = document.querySelector('#textAmountStudent');
textAmountStudent.innerHTML = `Количество студентов, получивших положительную оценку: ${goodStydent.length} `;

// Шестое задание
const badStydent = grades.filter(function(grade){
    return grade < 60;
})



const textHowStudent = document.querySelector("#textHowStudent");
textHowStudent.innerHTML = `Количество студентов, получивших отрицательную оценку: ${badStydent.length}`;

// Седьмое задание

const letterGrade = grades.map(function(grade){
    if(grade >= 80 && grade <= 100) {
        grade = 'A';
    }
    else if (grade >= 60 && grade <= 79) {
        grade = "B";
    }
    else if (grade >= 40 && grade <= 59) {
        grade = "C";
    }
    else if (grade >=20 && grade <= 39) {
        grade="D";
    }
    else{
        grade = "E";
    }
    return grade;
})



const textLetterGrade = document.querySelector('#textLetterGrade');
textLetterGrade.innerHTML = `Оценки студентов: ${letterGrade}`;


