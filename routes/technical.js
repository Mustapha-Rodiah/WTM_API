var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
 res.json({
    questions: [
        {id: 1,
            question: '1. On a scale of 1 to 4, how comfortable are you with using operating systems such as Windows, macOS, or Linux?',
        options:[
          { id: 'a', text: "A) Not Comfortable", recommendedTracks: ["Blockchain", "3D Animation"] },
          { id: 'b', text: "B) Moderately Comfortable", recommendedTracks: ["Product Design", "Software Development", "Mobile App Development", "Product Management"] },
          { id: 'c', text: "C) Extremely Comfortable", recommendedTracks: ["Data Science", "Cybersecurity", "Product Management", "Software Development", "Blockchain"] },
        
        ],
      },
      {id: 2,
        question: '2. On a scale of 1 to 4, how comfortable are you with using operating systems such as Windows, macOS, or Linux?',
    options:[
      { id: 'a', text: "A) Beginner", recommendedTracks: ['Product management','Product design', "3D Animation"] },
      { id: 'b', text: "B) Intermediate", recommendedTracks: ["Blockchain", "Software Development", "Mobile App Development", "Cybersecurity"] },
      { id: 'c', text: "C) Advanced", recommendedTracks: ["Data Science"] },
    
    ],
  },
  {id: 3,
    question: '3.Rate your familiarity with building things on the internet, like websites and web pages?',
options:[
  { id: 'a', text: "A) No familiarity", recommendedTracks: ['Blockchain','Product management', "3D Animation"] },
  { id: 'b', text: "B) Minimal familiarity ", recommendedTracks: ["Data Science", "Cybersecurity"] },
  { id: 'c', text: "C) Good familiarity", recommendedTracks: ["Mobile App Development", 'Product Management'] },
  { id: 'd', text: "D) Expert familiarity", recommendedTracks: ["Software development"] }
],
},
{id: 4,
    question: '4. On a scale of 1 to 5, how confident are you in troubleshooting hardware and software issues?',
options:[
  { id: 'a', text: "A) Not confident at all", recommendedTracks: ['Product design', "3D Animation"] },
  { id: 'b', text: "B) Moderately confident", recommendedTracks: ["Blockchain", "Product Management", 'Data Science',"Mobile App Development", ] },
  { id: 'c', text: "C) Highly confident", recommendedTracks: ["Cybersecurity", "Software development"] },

],
},
{id: 5,
    question: '5. How comfortable are you with systems that help organize and manage data, like storing information in organized collections?',
options:[
  { id: 'a', text: "A) Not comfortable", recommendedTracks: ['Mobile App Development','Product design', "3D Animation"] },
  { id: 'b', text: "B) Somewhat comfortable", recommendedTracks: ["Blockchain", "Software Development", "Product management", "Cybersecurity"] },
  { id: 'c', text: "C) Very comfortable", recommendedTracks: ["Data Science"] },

],
},
{id: 6,
    question: '6. How confident are you in your grasp of basic concepts related to connecting devices and sharing information on the internet?',
options:[
  { id: 'a', text: "A) Not Confident", recommendedTracks: ['Product design', "3D Animation"] },
  { id: 'b', text: "B) Moderately Confident", recommendedTracks: ['Product management', "Mobile App Development", 'Data science']},
  { id: 'c', text: "C) Highly Confident", recommendedTracks: ["Cybersecurity", "Software Development", "Blockchain" ] },

],
},
{id: 7,
    question: '7. How would you assess your understanding of principles and best practices ensuring digital security?',
options:[
  { id: 'a', text: "A) Limited understanding", recommendedTracks: ['Product management','Product design', "3D Animation"] },
  { id: 'b', text: "B) Intermediate understanding", recommendedTracks: ["Blockchain", "Data science", "Software development"] },
  { id: 'c', text: "C) Advanced understanding", recommendedTracks: ["Cybersecurity"] },

],
},
{id: 8,
    question: '8. How familiar are you with tools that help manage changes to files and collaborate on projects?',
options:[
  { id: 'a', text: "A) Not familiar", recommendedTracks: ['Product design', "3D Animation", 'Cybersecurity'] },
  { id: 'b', text: "B) Somewhat familiar", recommendedTracks: ["Mobile App Development", 'Product management'] },
  { id: 'c', text: "C) Extremely familiar", recommendedTracks: ["Blockchain", "Software Development","Data Science"] },

],
},
{id: 9,
    question: '9. Rate your proficiency in using office productivity software such as Microsoft Office or Google Workspace.',
options:[
  { id: 'a', text: "A) Beginner", recommendedTracks: ["3D Animation", "Blockchain", "Cybersecurity","Data Science"] },
  { id: 'b', text: "B) Intermediate", recommendedTracks: ['Product design', "Software Development", "Mobile App Development"] },
  { id: 'c', text: "C) Advanced", recommendedTracks: ['Product management'] },

],
},
{id: 10,
    question: '10. 	How comfortable do you feel with using services that let you store and access data or run programs over the internet?',
options:[
  { id: 'a', text: "A) Not comfortable", recommendedTracks: ["3D Animation"] },
  { id: 'b', text: "B) Somewhat comfortable", recommendedTracks: ['Product management','Product design'] },
  { id: 'c', text: "C) Very comfortable", recommendedTracks: ["Data Science", "Software Development", "Mobile App Development", "Cybersecurity"] },

],
},
    ]
 })
});

module.exports = router;
