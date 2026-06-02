let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let math = Number(document.getElementById("math").value);
    let science = Number(document.getElementById("science").value);
    let english = Number(document.getElementById("english").value);

    let student = {
        name: name,
        roll: roll,
        math: math,
        science: science,
        english: english
    };

    students.push(student);
    alert("Student Added!");
}

function calculateTotal(student) {
    return student.math + student.science + student.english;
}

function calculateAverage(student) {
    return calculateTotal(student) / 3;
}

function displayStudents() {
    let output = "";

    for (let s of students) {
        let total = calculateTotal(s);
        let avg = calculateAverage(s).toFixed(2);

        output += `
            <p>
            Name: ${s.name} | Roll: ${s.roll} <br>
            Total: ${total} | Average: ${avg}
            </p>
        `;
    }

    document.getElementById("output").innerHTML = output;
}

function showAbove80() {
    let output = "<h3>Students Above 80 Avg</h3>";

    for (let s of students) {
        let avg = calculateAverage(s);

        if (avg > 80) {
            output += `<p>${s.name} - ${avg.toFixed(2)}</p>`;
        }
    }

    document.getElementById("output").innerHTML = output;
}

function showFailed() {
    let output = "<h3>Failed Students (Avg < 40)</h3>";

    for (let s of students) {
        let avg = calculateAverage(s);

        if (avg < 40) {
            output += `<p>${s.name} - ${avg.toFixed(2)}</p>`;
        }
    }

    document.getElementById("output").innerHTML = output;
}

function countStudents() {
    document.getElementById("output").innerHTML =
        "<h3>Total Students: " + students.length + "</h3>";
}