"use strict";
class StudentManagement {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        const exists = this.students.some(s => s.id === student.id);
        if (exists) {
            return false;
        }
        this.students.push(student);
        return true;
    }
    getStudents() {
        return this.students;
    }
    searchStudent(id) {
        return this.students.find(s => s.id === id);
    }
    updateStudent(updatedStudent) {
        const student = this.searchStudent(updatedStudent.id);
        if (!student) {
            return false;
        }
        student.name = updatedStudent.name;
        student.age = updatedStudent.age;
        student.marks = updatedStudent.marks;
        return true;
    }
    deleteStudent(id) {
        const oldLength = this.students.length;
        this.students = this.students.filter(s => s.id !== id);
        return this.students.length < oldLength;
    }
    calculateAverage() {
        if (this.students.length === 0) {
            return 0;
        }
        const total = this.students.reduce((sum, s) => sum + s.marks, 0);
        return total / this.students.length;
    }
}
// Creating object
const management = new StudentManagement();
// HTML Elements
const form = document.getElementById("studentForm");
const idInput = document.getElementById("id");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const marksInput = document.getElementById("marks");
const table = document.getElementById("studentTable");
const totalStudents = document.getElementById("totalStudents");
const averageMarks = document.getElementById("averageMarks");
const message = document.getElementById("message");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const searchId = document.getElementById("searchId");
const cancelBtn = document.getElementById("cancelBtn");
const searchBtn = document.getElementById("searchBtn");
const showAllBtn = document.getElementById("showAllBtn");
// Edit mode
let editMode = false;
let editingId = null;
// Show Message
function showMessage(text, color = "green") {
    message.textContent = text;
    message.style.color = color;
}
// Reset Form
function resetForm() {
    form.reset();
    editMode = false;
    editingId = null;
    idInput.disabled = false;
    formTitle.textContent = "Add New Student";
    submitBtn.textContent = "Add Student";
    cancelBtn.style.display = "none";
}
// Display Students
function displayStudents(list = management.getStudents()) {
    table.innerHTML = "";
    list.forEach(student => {
        const row = document.createElement("tr");
        const values = [
            student.id,
            student.name,
            student.age,
            student.marks,
            student.marks >= 40 ? "Pass" : "Fail"
        ];
        values.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = String(value);
            row.appendChild(cell);
        });
        const actionCell = document.createElement("td");
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";
        editBtn.addEventListener("click", () => {
            editStudent(student.id);
        });
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", () => {
            deleteStudent(student.id);
        });
        actionCell.append(editBtn, deleteBtn);
        row.appendChild(actionCell);
        table.appendChild(row);
    });
    updateStats();
}
// Update Dashboard
function updateStats() {
    totalStudents.textContent =
        String(management.getStudents().length);
    averageMarks.textContent =
        management.calculateAverage().toFixed(2);
}
// Add and Update Student
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const student = {
        id: Number(idInput.value),
        name: nameInput.value.trim(),
        age: Number(ageInput.value),
        marks: Number(marksInput.value)
    };
    if (!Number.isInteger(student.id) ||
        student.id <= 0 ||
        !student.name ||
        !Number.isInteger(student.age) ||
        student.age <= 0 ||
        !Number.isFinite(student.marks) ||
        student.marks < 0 ||
        student.marks > 100) {
        showMessage("Please enter valid student details.", "red");
        return;
    }
    if (editMode) {
        if (editingId === null)
            return;
        student.id = editingId;
        const success = management.updateStudent(student);
        if (success) {
            showMessage("Student updated successfully!");
        }
    }
    else {
        const success = management.addStudent(student);
        if (!success) {
            showMessage("Student ID already exists!", "red");
            return;
        }
        showMessage("Student added successfully!");
    }
    resetForm();
    displayStudents();
});
// Edit Student
function editStudent(id) {
    const student = management.searchStudent(id);
    if (!student)
        return;
    editMode = true;
    editingId = id;
    idInput.value = String(student.id);
    idInput.disabled = true;
    nameInput.value = student.name;
    ageInput.value = String(student.age);
    marksInput.value = String(student.marks);
    formTitle.textContent = "Update Student";
    submitBtn.textContent = "Update Student";
    cancelBtn.style.display = "inline-block";
    showMessage("Edit student details and submit.");
}
// Delete Student
function deleteStudent(id) {
    const confirmDelete = confirm("Are you sure you want to delete this student?");
    if (!confirmDelete)
        return;
    management.deleteStudent(id);
    showMessage("Student deleted successfully!");
    if (editingId === id) {
        resetForm();
    }
    displayStudents();
}
// Search Student
searchBtn.addEventListener("click", () => {
    const id = Number(searchId.value);
    if (!searchId.value.trim()) {
        showMessage("Please enter Student ID.", "red");
        return;
    }
    const student = management.searchStudent(id);
    if (student) {
        displayStudents([student]);
        showMessage("Student found!");
    }
    else {
        displayStudents([]);
        showMessage("Student not found!", "red");
    }
});
// Show All Students
showAllBtn.addEventListener("click", () => {
    displayStudents();
    showMessage("Showing all students.");
    searchId.value = "";
});
// Cancel Update
cancelBtn.addEventListener("click", () => {
    resetForm();
    showMessage("Update cancelled.");
});
// Initial Display
resetForm();
displayStudents();
