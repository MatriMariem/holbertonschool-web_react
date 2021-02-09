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
var thead = document.createElement('thead');
thead.innerHTML = '<tr><th>firstName</th><th>location</th></tr>';
table.appendChild(thead);
var tbody = document.createElement('tbody');
table.appendChild(tbody);
for (var i = 0; i < studentList.length; i++) {
    var row = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    th1.innerHTML = studentList[i].firstName;
    th2.innerHTML = studentList[i].location;
    row.appendChild(th1);
    row.appendChild(th2);
    tbody.appendChild(row);
}
