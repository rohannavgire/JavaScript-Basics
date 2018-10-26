// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

class Student {
    constructor(name, grammarMarks, accMarks, physicsMarks) {
        this.name = name;
        this.grammarMarks = grammarMarks;
        this.accMarks = accMarks;
        this.physicsMarks = physicsMarks;
    }

    showResultCard() {
        var studentList = [];
        var grammarMarksTot = 100;
        var accMarksTot = 100;
        var physicsMarksTot = 100;

        for ( let i = 1; i <= 50; i++ ) {
            var student = new Student;
            student.name = 'Name'+ i;
            student.grammarMarks = (Math.floor(Math.random() * 100));
            student.accMarks = (Math.floor(Math.random() * 100))
            studentList[i] = student;
        }

        for ( let i = 51; i <= 100; i++ ) {
            var student = new Student;
            student.name = 'Name'+ i;
            student.grammarMarks = (Math.floor(Math.random() * 100));
            student.physicsMarks = (Math.floor(Math.random() * 100))
            studentList[i] = student;
        }
        
        console.log("========================================");
        console.log("RESULT CARD");
        console.log("========================================");
        var result=new String("Name         Percentage\n");
        result = result + "----------------------------------------\n";
        for ( let i = 1; i <= 50; i++ ) {
            var percent = (((studentList[i].grammarMarks + studentList[i].accMarks)/(grammarMarksTot + accMarksTot)) * 100).toFixed(2);
            result = result + studentList[i].name + "         " + percent + "\n";
        }

        for ( let i = 51; i <= 100; i++ ) {
            var percent = (((studentList[i].grammarMarks + studentList[i].physicsMarks)/(grammarMarksTot + physicsMarksTot)) * 100).toFixed(2);
            result = result + studentList[i].name + "         " + percent + "\n";
        }

        console.log(result);
        }
}

let printer = new Student;
printer.showResultCard();