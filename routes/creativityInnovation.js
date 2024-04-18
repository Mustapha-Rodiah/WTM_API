var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.json({
    Imagination: [
      {id: 1,
        question: '1. You are tasked with improving the user experience of a popular fitness tracking app. How would you enhance user engagement and motivation?',
    options:[
      { id: 'a', text: "A) Implement biometric authentication and secure data storage to protect user health and fitness data from unauthorized access.", recommendedTracks: ['cybersecurity'] },
      { id: 'b', text: "B) Design an intuitive and visually appealing interface with personalized workout plans and progress tracking features.", recommendedTracks: ['Product design'] },
      { id: 'c', text: "C) Utilize advanced animation techniques to create interactive workout demos and motivational messages to encourage users.", recommendedTracks: ['3D Animation'] },
      { id: 'd', text: "D) Develop social features such as group challenges and leaderboards to foster a sense of community and friendly competition among users.", recommendedTracks: ['Mobile App development'] },
      { id: 'e', text: "E) Incorporate machine learning algorithms to analyze user activity data and provide personalized recommendations for achieving fitness goals.", recommendedTracks: ['Data science'] }
    
    ],
    },
    {id: 2,
      question: '2. You are leading the development of a new social networking app for professionals. How would you ensure the platform promotes meaningful connections and collaboration?',
  options:[
    { id: 'a', text: "A) Utilize advanced data analytics to recommend relevant connections and networking opportunities based on user interests and career goals.", recommendedTracks: ['Data science'] },
    { id: 'b', text: "B) Incorporate interactive 3D avatars and virtual meeting spaces to simulate face-to-face interactions and networking events.", recommendedTracks: ['3D Animation'] },
    { id: 'c', text: "C) Implement end-to-end encryption and secure messaging features to protect user privacy and confidential conversations", recommendedTracks: ['Cyersecurity'] },
    { id: 'd', text: "D) Design a clean and intuitive user interface with customizable profiles and networking tools to facilitate professional networking."
    , recommendedTracks: ['Product Design'] },
    { id: 'e', text: "E) Develop real-time collaboration features such as document sharing and project management tools to facilitate teamwork and productivity", recommendedTracks: ['Software development'] }
  
  ],
  },{id: 3,
    question: '3. How do you modify your approach to overseeing products to effectively address the unique requirements of diverse user demographics?',
options:[
  { id: 'a', text: "A) I adjust data analysis techniques to suit different user groups, ensuring our insights are relevant to all.", recommendedTracks: ['Data science'] },
  { id: 'b', text: "B) I explore decentralized solutions aimed at fostering inclusivity and accessibility for all users.", recommendedTracks: ['Blockchain'] },
  { id: 'c', text: "C) I prioritize measures to ensure protection of user data and privacy across different demographics.", recommendedTracks: ['Cybersecurity'] },
  { id: 'd', text: "D) I incorporate feedback from user testing to iterate on product iterations and enhance user satisfaction.", recommendedTracks: ['Product management'] },
  { id: 'e', text: "E) I customize software functionalities and interfaces to accommodate the preferences of various user groups.", recommendedTracks: ['Software development'] }

],
},{id: 4,
  question: '4. You are tasked with improving efficiency in a retail business. How would you leverage technology to streamline inventory management processes?',
options:[
{ id: 'a', text: "A) Implement biometric authentication and secure data storage to protect user health and fitness data from unauthorized access.", recommendedTracks: ['3D Animation'] },
{ id: 'b', text: "B) Develop a decentralized supply chain management system to enhance transparency and traceability of products.", recommendedTracks: ['Blockchain'] },
{ id: 'c', text: "C) Develop a decentralized supply chain management system to enhance transparency and traceability of products.", recommendedTracks: ['Cybersecurity'] },
{ id: 'd', text: "D) Create a mobile inventory management application with barcode scanning functionality and integration with existing systems.", recommendedTracks: ['Mobile App development'] },
{ id: 'e', text: "E) Conduct market research to identify customer pain points and prioritize features for an inventory management solution.", recommendedTracks: ['Product management'] }

],
},{id: 5,
  question: '5. Imagine you are designing a new social media platform. How would you ensure user privacy and data security?',
options:[
{ id: 'a', text: "A) Regularly review code for security and adhere to data protection standards.", recommendedTracks: ['3D Animation'] },
{ id: 'b', text: "B) Employ robust encryption methods and multi-factor authentication to safeguard user accounts and personal information", recommendedTracks: ['Cyersecurity'] },
{ id: 'c', text: "C)  Design intuitive privacy settings and user controls to empower users to manage their data sharing preferences.", recommendedTracks: ['Product Design'] },
{ id: 'd', text: "D)Develop secure mobile apps with built-in privacy features such as data encryption and anonymization.", recommendedTracks: ['Mobile App development'] },
{ id: 'e', text: "E)  Regularly review code for security and adhere to data protection standards.", recommendedTracks: ['Software development'] }

],
},{id: 6,
  question: '6. You are tasked with designing a promotional campaign for a new tech gadget aimed at young adults. How would you ensure the campaign stands out and resonates with the target audience?',
options:[
{ id: 'a', text: "A) Conduct market research to understand the preferences and interests of young adults, tailoring the campaign messaging and channels accordingly.", recommendedTracks: ['Product management'] },
{ id: 'b', text: "B) Create visually appealing and interactive advertisements that showcase the gadget's features in an engaging manner.", recommendedTracks: ['Product design'] },
{ id: 'c', text: "C) Develop animated videos and graphics that highlight the gadget's functionality and benefits in a captivating way.", recommendedTracks: ['3D Animation'] },
{ id: 'd', text: "D) Build an interactive app or game related to the gadget, offering users a hands-on experience and generating buzz around the product.", recommendedTracks: ['Software development'] },
{ id: 'e', text: "E) Design a mobile app that provides exclusive content, discounts, and gamified experiences related to the gadget, encouraging user engagement. ", recommendedTracks: ['Mobile App development'] }

],
},{id: 7,
  question: '7. You are tasked with designing a secure voting system for an upcoming election. How would you ensure the integrity and transparency of the voting process?',
options:[
{ id: 'a', text: "A) Implement a blockchain-based voting system to create an immutable and tamper-proof record of votes, ensuring transparency and trust.", recommendedTracks: ['Blockchain'] },
{ id: 'b', text: "B) Employ advanced encryption techniques and multi-layered security protocols to protect voting data from tampering and cyberattacks.", recommendedTracks: ['Cybersecurity'] },
{ id: 'c', text: "C) Collaborate with election officials and stakeholders to define requirements and prioritize features for a user-friendly voting interface.", recommendedTracks: ['Product management'] },
{ id: 'd', text: "D) Develop a custom voting application with robust authentication mechanisms and audit trails to verify the integrity of each vote.", recommendedTracks: ['Software development'] },
{ id: 'e', text: "E) Analyze historical voting data to identify patterns and trends, informing decisions on optimizing the voting process for efficiency and accuracy.", recommendedTracks: ['Data science'] }

],
}
,{id: 8,
  question: '8. How would you ensure the security of a new financial management application meets the highest standards while addressing the diverse needs of users?',
options:[
{ id: 'a', text: "A) Conduct comprehensive risk assessments and implement robust security measures to protect user data and prevent unauthorized access.", recommendedTracks: ['Cybersecurity'] },
{ id: 'b', text: "B) Analyze user data to identify patterns of suspicious activity and implement machine learning algorithms for anomaly detection to enhance the security of the application.", recommendedTracks: ['Data science'] },
{ id: 'c', text: "C) Utilize blockchain technology to enhance the security and integrity of financial transactions and user data within the application.", recommendedTracks: ['Blockchain'] },
{ id: 'd', text: "D) Develop engaging visual elements and animations to enhance user experience while ensuring that they do not compromise the security of the application.", recommendedTracks: ['3D Animation'] },
{ id: 'e', text: "E) Implement secure authentication mechanisms and encryption protocols to safeguard user credentials and sensitive financial information.", recommendedTracks: ['Software development'] }

],
},{id: 9,
  question: '9. How would you ensure the effectiveness and engagement of a new e-learning platform with a focus on technical implementation?',
options:[
{ id: 'a', text: "A) Implement user feedback loops to iteratively enhance the platform's functionality and user experience.", recommendedTracks: ['Software development'] },
{ id: 'b', text: "B) Integrate immersive 3D visuals and interactive elements into the e-learning platform's content to enhance engagement and retention.", recommendedTracks: ['3D Animation'] },
{ id: 'c', text: "C) Design a visually appealing and user-friendly interface with intuitive navigation to facilitate seamless learning experiences.", recommendedTracks: ['Product design'] },
{ id: 'd', text: "D) Utilize blockchain technology to enhance security, transparency, and trust in the platform's content delivery and assessment processes.", recommendedTracks: ['Blockchain'] },
{ id: 'e', text: "E) Implement secure authentication mechanisms and encryption protocols to safeguard user credentials and sensitive financial information.", recommendedTracks: ['Software development'] }

],
},{id: 10,
  question: '10. You are tasked with creating a digital art exhibition showcasing the works of various artists. How would you leverage technology to enhance the exhibition experience?',
options:[
{ id: 'a', text: "A) Utilize augmented reality (AR) and virtual reality (VR) technology to create immersive and interactive exhibits, allowing visitors to explore artworks in a virtual environment. ", recommendedTracks: ['3D Animation'] },
{ id: 'b', text: "B) Design user-friendly interfaces and navigation tools to facilitate seamless browsing and discovery of artworks, enhancing the overall exhibition experience.", recommendedTracks: ['Product design'] },
{ id: 'c', text: "C) Develop a custom mobile app or web platform that provides access to digital catalogs, artist profiles, and interactive features for visitors to engage with artworks remotely.", recommendedTracks: ['Software development'] },
{ id: 'd', text: "D) evelop a mobile app that uses GPS to provide information about artworks as visitors move through the exhibition.", recommendedTracks: ['Mobile App development'] },
{ id: 'e', text: "E) Implement blockchain technology to create digital certificates of authenticity and provenance for each artwork, ensuring transparency and security in art transactions.", recommendedTracks: ['Blockchain'] }

],
}
    ]
  })
});

module.exports = router;
