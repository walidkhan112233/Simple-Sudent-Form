document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const fathername = document.getElementById('fathername').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;


    const studentData = {
        name: name,
        fathername: fathername,
        age: age,
        course: course,
    };

    console.log('Student Data:', studentData);
    document.getElementById('studentForm').reset();

});