// build array of question objects

//q: string
//a1:
//a2:
//a3:
//a4:
//CA:

var question1 = {
    question: "To out put a message to the web console you would use what method? " ,

};
var answers1 = {
    a1:"print.out()",
    a2:"console.log()",
    a3:"output()",
    a4:"log.out()",
    correctAnswer : this.a2
}

var question2 = {
    question: "Which of these is not a data type in javaScript? " ,
   
};

var answers2 = {
    a1:"boolean",
    a2:"number",
    a3:"string",
    a4:"pointer",
    correctAnswer: this.a4
}
var question3 = {
    question: "Which of these correctly builds a new array in javaScript?" ,
    
};

var answers3 = {
    a1:"newArray=()",
    a2:"newArray={}",
    a3:"newArray=<>",
    a4:"newArray=[]",
    correctAnswer: this.a4
}

var questions = [question1, question2, question3];
var answers = [answers1, answers2, answers3];
