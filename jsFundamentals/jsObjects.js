let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function studentInfo(arr) {
    for (var obj of arr) {
        // for (var key in obj) {
        //     console.log(`${key}: ${obj[key]}`)
        // }
        console.log(`Name: ${obj.name}, Cohort: ${obj.cohort}`)
    }
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function getWorkerInfo(obj) {
    for (var key in obj) {
        arr = obj[key]
        console.log(key)
        for (let i = 0; i < arr.length; i++) {
            let len = (arr[i].first_name + arr[i].last_name).length
            console.log(`1 - ${arr[i].last_name}, ${arr[i].first_name} - ${len}`)
        }
    }
}

studentInfo(students)

getWorkerInfo(users)