var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
res.json({
   
    questions: [
        {id: 1,
            question: '1. How comfortable are you in exploring creative problem-solving methods and building prototypes for new ideas?',
        options:[
          { id: 'a', text: "A) Not comfortable", recommendedTracks: [] },
          { id: 'b', text: "B) Somewhat comfortable", recommendedTracks: [] },
          { id: 'c', text: "C) Very comfortable", recommendedTracks: ['Product design'] },
        
        ],
        },
        {id: 2,
            question: '2. How comfortable are you in exploring creative problem-solving methods and building prototypes for new ideas?',
        options:[
          { id: 'a', text: "A) Beginner", recommendedTracks: [] },
          { id: 'b', text: "B) Intermediate", recommendedTracks: [] },
          { id: 'c', text: "C) Advanced", recommendedTracks: ['Product management'] },
        
        ],
        },   {id: 3,
            question: '3. How would you rate your proficiency in analyzing data and presenting insights visually?',
        options:[
          { id: 'a', text: "A) Beginner", recommendedTracks: [] },
          { id: 'b', text: "B) Intermediate", recommendedTracks: [] },
          { id: 'c', text: "C) Advanced", recommendedTracks: ['Data science'] },
        
        ],
        },   {id: 4,
            question: '4. How comfortable are you in exploring creative problem-solving methods and building prototypes for new ideas?',
        options:[
          { id: 'a', text: "A) Not confident", recommendedTracks: [] },
          { id: 'b', text: "B) Moderately confident", recommendedTracks: [] },
          { id: 'c', text: "C) Highly confident", recommendedTracks: ['Cybersecurity'] },
        
        ],
        },  {id: 5,
            question: '5. How confident are you in your ability to create automated contracts using decentralized platforms',
        options:[
          { id: 'a', text: "A) Not confident", recommendedTracks: [] },
          { id: 'b', text: "B) Moderately confident", recommendedTracks: [] },
          { id: 'c', text: "C) Highly confident", recommendedTracks: ['Blockchain'] },
        
        ],
        },  {id: 6,
            question: '6. How confident are you in your ability to utilize software commonly used for creating three-dimensional visuals?',
        options:[
          { id: 'a', text: "A) Not confident", recommendedTracks: [] },
          { id: 'b', text: "B) Moderately confident", recommendedTracks: [] },
          { id: 'c', text: "C) Highly confident", recommendedTracks: ['3d Animation'] },
        
        ],
        },    {id: 7,
            question: '7. How confident are you in creating applications that can function seamlessly across various mobile platform?',
        options:[
          { id: 'a', text: "A) Not confident", recommendedTracks: [] },
          { id: 'b', text: "B) Moderately confident", recommendedTracks: [] },
          { id: 'c', text: "C) Highly confident", recommendedTracks: ['Mobile App development'] },
        
        ],
        },   {id: 8,
            question: '8. How familiar are you with the principles of structuring and designing software systems effectively?',
        options:[
          { id: 'a', text: "A) Not familiar", recommendedTracks: [] },
          { id: 'b', text: "B) Somewhat familiar", recommendedTracks: [] },
          { id: 'c', text: "C) Extremely familiar", recommendedTracks: ["Software Development"] },
        
        ],
        }, {id: 9,
            question: '9. How skilled are you in setting up characters and making them move in digital animations? ',
        options:[
          { id: 'a', text: "A) Beginner", recommendedTracks: [] },
          { id: 'b', text: "B) Intermediate", recommendedTracks: [] },
          { id: 'c', text: "C) Advanced", recommendedTracks: ['3D Animation'] },
        
        ],
        }
        ,   {id: 10,
            question: '10. On a scale of 1 to 3, how interested are you in learning about systems that secure and verify digital transactions?',
        options:[
          { id: 'a', text: "A) Not interested", recommendedTracks: [] },
          { id: 'b', text: "B) Moderately interested", recommendedTracks: [] },
          { id: 'c', text: "C) Extremely interested", recommendedTracks: ["Blockchain"] },
        
        ],
        }
    ]
})
});

module.exports = router;
