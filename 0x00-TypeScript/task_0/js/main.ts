interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}
const st1: Student = {
  firstName: 'Mariem',
  lastName: 'Matri',
  age: 25,
  location: 'Tunisia',
}
const st2: Student = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 26,
  location: 'New York',
}
const studentList: Array<Student> = [st1, st2];

const table = document.createElement('table');
document.body.appendChild(table);

for (let i: number = 0; i < studentList.length; i++) {
    const row = document.createElement('tr');
    const fn = document.createTextNode(studentList[i].firstName);
    const loc = document.createTextNode(studentList[i].location);
    row.appendChild(fn);
    row.appendChild(loc);
    table.appendChild(row);
}
