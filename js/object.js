var student = {
    //proprty
    firstName: "Chinnawamt",
    lastname: "Rattanamun",
    birthYear: 2003,
    
    //methood
    getAge:function(currentYear){
        return currentYear - this.birthYear;
    }
}

document.write(`${student.firstName } ${student.lastname}`);

document.write(`is ${student.getAge(2020)}`);