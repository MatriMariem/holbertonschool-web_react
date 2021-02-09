var st1 = {
    firstName: 'Mariem',
    lastName: 'Matri',
    age: 25,
    location: 'Tunisia'
};
var st2 = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 26,
    location: 'New York'
};
var studentList = [st1, st2];
var table = document.createElement('table');
document.body.appendChild(table);
for (var i = 0; i < studentList.length; i++) {
    var row = document.createElement('tr');
    var fn = document.createTextNode(studentList[i].firstName);
    var loc = document.createTextNode(studentList[i].location);
    row.appendChild(fn);
    row.appendChild(loc);
    table.appendChild(row);
}
