const studentName = document.getElementById('studentName');
const studentGrade = document.getElementById('studentGrade');
const addStudentBtn = document.getElementById('addStudentBtn');
const studentsTable = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
const averageGrade = document.getElementById('averageGrade');

let students = [];

function renderAll() {
    studentName.value = "";
    studentGrade.value = "";
    studentsTable.innerHTML = '';

    students.forEach((student, index) => {
        const row = studentsTable.insertRow();

        const nameCell = row.insertCell(0);
        const gradeCell = row.insertCell(1);
        const actionsCell = row.insertCell(2);

        nameCell.textContent = student.name;
        gradeCell.textContent = student.grade;

        const editB = document.createElement('button');
        editB.classList.add('edit-btn');
        editB.innerText = 'Edit';
        editB.addEventListener('click', () => editItem(index));
        actionsCell.appendChild(editB);

        const removeB = document.createElement('button');
        removeB.classList.add('delete-btn');
        removeB.innerText = 'Delete';
        removeB.addEventListener('click', () => removeItem(index));
        actionsCell.appendChild(removeB);
    });
    updateAverageGrade();
}

addStudentBtn.addEventListener('click', () => {
    let name = studentName.value;
    let grade = studentGrade.value;
    if (name && grade) {
        students.push({ name, grade });
        console.log(students);
        renderAll();
        studentName.value = "";
        studentGrade.value = "";
    } else {
        alert("nope enter first");
    }
})

function editItem(index) {
    const newGrade = prompt('Edit item:', students[index].grade);
    if(newGrade !== null) {
    students[index].grade = newGrade;
    renderAll();
    }
}

function removeItem(index){
    students.splice(index, 1);
    renderAll();
}

function updateAverageGrade() {
    let totalmarks = students.reduce((sum, students) => sum + Number(students.grade), 0);
    let average = totalmarks / students.length;
    averageGrade.textContent = average.toFixed(2);
}