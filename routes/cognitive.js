var express = require('express');
var router = express.Router();


 
router.get('/', (req, res) => {

    
    // For demonstration purposes, let's define the questions array here
   
    
    res.json({
        questions : [
            {
                id: 1,
              type: 'Mathematical Aptitude',
                question: "What is the next number in the sequence: 10, 12, 14, 16 ___?",
                options: [
                    { id: 'a', text: "A) 20" },
                    { id: 'b', text: "B) 18"},
                    { id: 'c', text: "C) 24"},
                    { id: 'd', text: "D) 26" }
                ],
                corerct: 'b'
            },
            {
                id: 2,
                type: 'Mathematical Aptitude',
                question: "What is the next number in the sequence: 5, 25, 125, ___?",
                answers: [
                    { id: 'a', text: "A) 225"},
                    { id: 'b', text: "B) 625" },
                    { id: 'c', text: "C) 130"  },
                    { id: 'd', text: "D) 125"}
                ],
                correct: 'b'
            },
            {
                id: 3,
                type: 'Mathematical Aptitude',
                question: '3. What is the formula to calculate the mean (average) of a set of numbers?',
                answers: [
                    { id: 'a', text: "A) Mean = Sum of numbers / Count of numbers"},
                    { id: 'b', text: "B) Mean = Count of numbers / Sum of numbers" },
                    { id: 'c', text: "C) Sum of numbers * Count of numbers"  },
                    { id: 'd', text: "D) Count of numbers - Sum of numbers"}
                ],
                correct: 'a'
            },
            {
                id: 4,
                type: 'Mathematical Aptitude',
                question: '4. If x=5 and y=3, what is the value of x^2+y^2?',
                answers: [
                    { id: 'a', text: "A) 25"},
                    { id: 'b', text: "B) 28" },
                    { id: 'c', text: "C) 34"  },
                    { id: 'd', text: "D) 30"}
                ],
                correct: 'a'
            },
            {
                id: 5,
                type: 'Mathematical Aptitude',
                question: "5. If A = 1, B = 2, C = 3, and so on, what is the value of the word 'TECH'?",
                answers: [
                    { id: 'a', text: "A) 20"},
                    { id: 'b', text: "B) 36" },
                    { id: 'c', text: "C) 26"  },
                    { id: 'd', text: "D) 6"}
                ],
                correct: 'a'
            },
            {
                id: 6,
                type: 'Logical Reasoning',
                question: "1. If all cats have tails, and Fluffy is a cat, what can you conclude?",
                options: [
                    { id: 'a', text: "A) Fluffy has a tail."},
                    { id: 'b', text: "B) Fluffy does not have a tail." },
                    { id: 'c', text: "C) Some cats have tails.", },
                    { id: 'd', text: "D) No conclusion can be drawn." }
                 
                ],
           corerct: 'a'
            },
            {
                id: 7,
                type: 'Logical Reasoning',
                question: "2. If today is Tuesday and 10 days from now will be Friday, what day of the week was it 5 days ago?",
                options: [
                    { id: 'a', text: "A) Monday"},
                    { id: 'b', text: "B) Tuesday" },
                    { id: 'c', text: "C) Wednesday", },
                    { id: 'd', text: "D) Thursday" }
                 
                ],
           corerct: 'b'
            },
            {
                id: 8,
                type: 'Logical Reasoning',
                question: "3. If all Zivens are Gralls and some Gralls are Pindos, what can be inferred about Zivens and Pindos?",
                options: [
                    { id: 'a', text: "A) All Zivens are Pindos"},
                    { id: 'b', text: "B) Some Zivens may be Pindos, but not all Zivens are necessarily Pindos. " },
                    { id: 'c', text: "C) None of the above" },
                    { id: 'd', text: "D) All of the above" }
                 
                ],
       
           corerct: 'b'
            },
            {
                id: 9,
                type: 'Logical Reasoning',
                question: "4. All trees have branches. If this is true, what can you say about a particular tree with branches?",
                options: [
                    { id: 'a', text: "A) It is definitely a tree."},
                    { id: 'b', text: "B) It may or may not be a tree." },
                    { id: 'c', text: "C) It cannot be a tree." },
                    { id: 'd', text: "D) No conclusion can be drawn." }
                 
                ],
       
           corerct: 'a'
            },
            {
                id: 10,
                type: 'Logical Reasoning',
                question: "5. If some students are tall, and all tall people play basketball, what can you conclude about some students?",
                options: [
                    { id: 'a', text: "A) Some students play basketball."},
                    { id: 'b', text: "B) All students play basketball." },
                    { id: 'c', text: "C) No students play basketball." },
                    { id: 'd', text: "D) Some students are not tall." }
                 
                ],
       
           corerct: 'a'
            },
           
            {
                id: 9,
                type: 'Logical Reasoning',
                question: "Which of the following words best describes you?",
                options: [
                    { id: 'a', text: "A) Strongly agree", recommendedTracks: ["Product Design", "3D Animation", "Mobile App"] },
                    { id: 'b', text: "B) Agree", recommendedTracks: ["Product Design", "3D Animation", "Mobile App"] },
                    { id: 'c', text: "C) Neutral", recommendedTracks: ["Data Science", "Cybersecurity", "Product Management", "Software Development", "Blockchain"] },
                    { id: 'd', text: "D) Disagree", recommendedTracks: [] },
                    { id: 'e', text: "E) Strongly disagree", recommendedTracks: [] }
                ],
           
            },
         
        ]
    })
});
module.exports = router;