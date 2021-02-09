interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}
const st1: Student = {
  firstName: 'st1',
  lastName: 'st1',
  age: 1,
  location: 'somewhere1',
}
const st2: Student = {
  firstName: 'st2',
  lastName: 'st2',
  age: 2,
  location: 'somewhere2',
}
const studentList: [Student, Student] = [st1, st2];
