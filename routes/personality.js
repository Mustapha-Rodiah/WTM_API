var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
res.json(
{  PersonalityTraits:{
 Openess_to_experiences: [
    {id: 1,
      question: 'Which of the following words best describes you?',
  options:[
    { id: 'a', text: "A) Strongly agree", recommendedTracks: ["Product Design", "3D Animation", "Mobile App"] },
    { id: 'b', text: "B) Agree", recommendedTracks: ["Product Design", "3D Animation", "Mobile App"] },
    { id: 'c', text: "C) Neutral", recommendedTracks: ["Data Science", "Cybersecurity", "Product Management", "Software Development", "Blockchain"] },
    { id: 'd', text: "D) Disagree", recommendedTracks: [] },
    { id: 'e', text: "E) Strongly disagree", recommendedTracks: [] }
  ],
},
{id: 2,
  question: '2. I am willing to consider alternative viewpoints or perspectives?',
options:[
{ id: 'a', text: "A) Strongly agree", recommendedTracks: ["Product Design", "Cybersecurity", "Product Management"] },
{ id: 'b', text: "B) Agree", recommendedTracks: ["Product Design", "Cybersecurity", "Product Management"] },
{ id: 'c', text: "C) Neutral", recommendedTracks: ["Data Science", "Software Development", "3D Animation","Blockchain"] },
{ id: 'd', text: "D) Disagree", recommendedTracks: [] },
{ id: 'e', text: "E) Strongly disagree", recommendedTracks: [] }
],
},
{id: 3,
  question: '3. I often challenge traditional ways of doing things?',
options:[
{ id: 'a', text: "A) Strongly agree", recommendedTracks: ['Product Design','Mobile App Development', 'Data Science','Software Development','3D Animation'] },
{ id: 'b', text: "B) Agree", recommendedTracks: ['Product Design','Mobile App Development', 'Data Science','Software Development','3D Animation'] },
{ id: 'c', text: "C) Neutral", recommendedTracks: ['Cybersecurity','Product Management','Blockchain'] },
{ id: 'd', text: "D) Disagree", recommendedTracks: [] },
{ id: 'e', text: "E) Strongly disagree", recommendedTracks: [] }
],
},


  ],
  // the other section 
 
Conscientiousness: [
  {id: 1,
    question: '1. I handle stressful situations or tight deadlines effectively?',
options:[
  { id: 'a', text: "A) Strongly agree", recommendedTracks: ["Software development", "Cybersecurity", "Mobile App", "Product Management", "Data Science"] },
  { id: 'b', text: "B) Agree", recommendedTracks: ["Software development", "Cybersecurity", "Mobile App", "Product Management", "Data Science"] },
  { id: 'c', text: "C) Neutral", recommendedTracks: ["Product Design", "3D Animation", "Blockchain"] },
  { id: 'd', text: "D) Disagree", recommendedTracks: [] },
  { id: 'e', text: "E) Strongly disagree", recommendedTracks: [] }
],
},
{id: 2,
  question: '2. I am organized and prefer structured environments',
options:[
{ id: 'a', text: "A) Strongly agree", recommendedTracks: ["Software development", "Cybersecurity", "Product Management", "Data Science"] },
{ id: 'b', text: "B) Agree", recommendedTracks: ["Software development", "Cybersecurity", "Product Management", "Data Science"] },
{ id: 'c', text: "C) Neutral", recommendedTracks: ["Product Design", "Mobile App development"] },
{ id: 'd', text: "D) Disagree", recommendedTracks: ['3D Animation', 'Blockchain'] },
{ id: 'e', text: "E) Strongly disagree", recommendedTracks: ['3D Animation', 'Blockchain'] }
],
},
{id: 3,
  question: '3. I often set specific goals for myself',
options:[
{ id: 'a', text: "A) Strongly agree", recommendedTracks: ["Software development", "Cybersecurity", "Product Management", "Data Science", "Mobile Application Development"] },
{ id: 'b', text: "B) Agree", recommendedTracks: ["Software development", "Cybersecurity", "Product Management", "Data Science", "Mobile Application Development"] },
{ id: 'c', text: "C) Neutral", recommendedTracks: ["Product Design", "3D Animation"] },
{ id: 'd', text: "D) Disagree", recommendedTracks: ['3D Animation', 'Blockchain'] },
{ id: 'e', text: "E) Strongly disagree", recommendedTracks: ['Blockchain'] }
],
},
],
// emotional stability
 
EmotionalStability: [
  {id: 1,
    question: '1. How do you typically react to unexpected changes in a project?',
  options:[
  { id: 'a', text: "A) Remain calm and focused, finding effective solutions", recommendedTracks: ["Data Science", "Cybersecurity", "Product Management", "Software Development"] },
  { id: 'b', text: "B) Stay composed but may feel the pressure", recommendedTracks: ['Product design', 'Blockchain'] },
  { id: 'c', text: "C) Sometimes feel overwhelmed, but manage to cope", recommendedTracks: ["Mobile App development", "3D Animation"] },
  { id: 'd', text: "D) Often feel stressed and struggle to cope", recommendedTracks: [] }
 
  ],
  },
  {id: 2,
    question: '2. Think of a challenging situation you encountered recently. How did you manage your emotions and navigate through it?',
  options:[
  { id: 'a', text: "A) I remained calm and focused, finding effective solutions", recommendedTracks: ["Data Science", "Blockchain", "Product Management"] },
  { id: 'b', text: "B)I stayed composed but felt the pressure", recommendedTracks: ['Software Development', 'Product design', 'Cybersecurity'] },
  { id: 'c', text: "C) I felt somewhat overwhelmed, but managed to cope", recommendedTracks: ["Mobile App development", "3D Animation"] },
  { id: 'd', text: "D) I was stressed and struggled to cope", recommendedTracks: ["Mobile App development", "3D Animation"] }
 
  ],
  },
  
],
//Agreable
Agreeable: [
  {id: 1,
    question: '1. Do you often assert yourself to ensure your needs are met in relationships or professional settings? - Assertive',
  options:[
  { id: 'a', text: "A) Strongly agree", recommendedTracks: ["Data Science", "Cybersecurity", "Product Management"] },
  { id: 'b', text: "B)Agree", recommendedTracks: ["Data Science", "Cybersecurity", "Product Management"] },
  { id: 'c', text: "C) Neutral", recommendedTracks: ["Software development", ] },
  { id: 'd', text: "D) Strongly Disagree", recommendedTracks: ["Product Mangement","Mobile App development", "3D Animation", "Blockchain"] },
  { id: 'e', text: "E) Disagree", recommendedTracks: ["Product Mangement","Mobile App development", "3D Animation", "Blockchain"] }
  ],
  },
  {id: 2,
    question: '2. You prefer working in cooperative teams where collaboration is highly valued?',
  options:[
  { id: 'a', text: "A) Strongly agree", recommendedTracks: ["Software development",  "Product Management"] },
  { id: 'b', text: "B)Agree", recommendedTracks: ["Software development",  "Product Management"] },
  { id: 'c', text: "C) Neutral", recommendedTracks: ["Data Science"] },
  { id: 'd', text: "D) Strongly Disagree", recommendedTracks: ["Product Mangement","Mobile App development", "3D Animation", "Blockchain", 'Cybersecurity'] },
  { id: 'e', text: "E) Disagree", recommendedTracks: ["Product Mangement","Mobile App development", "3D Animation", "Blockchain", 'Cybersecurity'] }
  ],
  },
]
}}
)
});

module.exports = router;

               