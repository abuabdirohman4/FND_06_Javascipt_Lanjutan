function formatRecords( studentsRecordDetails ) {
    return studentsRecordDetails
    .map(function(student) {
        // return student;
        return JSON.parse(student);
    })
    .filter(function(student) {
        return student.graduating;
    })
    .reduce(function (accumulator, currentValue,  ) {
        return (accumulator.name ? accumulator.name : accumulator) + ', ' + currentValue.name;
    });
}

const input = [
    '{"studentID" :20, "name" : "chad west", "graduating": true}',
    '{"studentID" :23, "name" : "jake paul", "graduating": true}',
    '{"studentID" :21, "name" : "brad stanly", "graduating": false}',
]

console.log(formatRecords(input));
