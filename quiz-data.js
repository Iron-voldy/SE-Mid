const quizData = [
  {
    "title": "IT2030 Software Engineering Mid-Exam MCQs",
    "instructions": "Choose the best answer for each question",
    "questions": [
      {
        "id": 1,
        "question": "What is the primary focus of Software Engineering compared to traditional programming?",
        "options": [
          "Writing code faster",
          "Using the latest programming languages",
          "Following structured processes and ensuring quality throughout the software lifecycle",
          "Creating complex algorithms"
        ],
        "correct_answer": "Following structured processes and ensuring quality throughout the software lifecycle",
        "topic": "Software Engineering Introduction"
      },
      {
        "id": 2,
        "question": "Which of the following was NOT a common cause of the Software Crisis (1960s-1990s)?",
        "options": [
          "Projects going over budget",
          "Missing deadlines",
          "System crashes and disasters",
          "Lack of programming languages"
        ],
        "correct_answer": "Lack of programming languages",
        "topic": "Software Crisis"
      },
      {
        "id": 3,
        "question": "What is the main purpose of a feasibility study in software development?",
        "options": [
          "To write the code for the system",
          "To test the final product",
          "To decide whether the project should be built",
          "To deploy the software to users"
        ],
        "correct_answer": "To decide whether the project should be built",
        "topic": "Feasibility Study"
      },
      {
        "id": 4,
        "question": "Which type of feasibility study examines whether the system complies with laws and regulations like GDPR?",
        "options": [
          "Technical Feasibility",
          "Economic Feasibility",
          "Legal Feasibility",
          "Operational Feasibility"
        ],
        "correct_answer": "Legal Feasibility",
        "topic": "Types of Feasibility"
      },
      {
        "id": 5,
        "question": "What is the correct sequence of SDLC phases?",
        "options": [
          "Design → Requirements → Implementation → Testing → Deployment → Maintenance",
          "Requirements → Design → Implementation → Testing → Deployment → Maintenance",
          "Implementation → Design → Requirements → Testing → Deployment → Maintenance",
          "Requirements → Implementation → Design → Testing → Deployment → Maintenance"
        ],
        "correct_answer": "Requirements → Design → Implementation → Testing → Deployment → Maintenance",
        "topic": "SDLC Phases"
      },
      {
        "id": 6,
        "question": "Which of the following is an example of a functional requirement?",
        "options": [
          "The system should load within 3 seconds",
          "The system should allow users to log in",
          "The system must run on Android only",
          "The system should be accessible on mobile devices"
        ],
        "correct_answer": "The system should allow users to log in",
        "topic": "Types of Requirements"
      },
      {
        "id": 7,
        "question": "What type of requirement is 'The system should be accessible on both desktop and mobile devices'?",
        "options": [
          "Functional requirement",
          "Non-functional requirement",
          "Constraint",
          "Business requirement"
        ],
        "correct_answer": "Non-functional requirement",
        "topic": "Types of Requirements"
      },
      {
        "id": 8,
        "question": "Which requirement gathering technique involves observing users performing their daily work?",
        "options": [
          "Interviews",
          "Questionnaires",
          "Observations",
          "Brainstorming"
        ],
        "correct_answer": "Observations",
        "topic": "Requirement Gathering Techniques"
      },
      {
        "id": 9,
        "question": "What is a stakeholder in software engineering?",
        "options": [
          "Only the people who fund the project",
          "Only the end users of the system",
          "Any person or group who has an interest in the software system",
          "Only the development team members"
        ],
        "correct_answer": "Any person or group who has an interest in the software system",
        "topic": "Stakeholders"
      },
      {
        "id": 10,
        "question": "What happens during the System Design phase of SDLC?",
        "options": [
          "Writing the actual code",
          "Testing the software for bugs",
          "Translating requirements into a system blueprint including UI design and database schema",
          "Deploying the software to production"
        ],
        "correct_answer": "Translating requirements into a system blueprint including UI design and database schema",
        "topic": "System Design Phase"
      },
      {
        "id": 11,
        "question": "What type of testing checks if each small piece of code works correctly on its own?",
        "options": [
          "Integration Testing",
          "System Testing",
          "Unit Testing",
          "Acceptance Testing"
        ],
        "correct_answer": "Unit Testing",
        "topic": "Types of Testing"
      },
      {
        "id": 12,
        "question": "Which type of maintenance fixes bugs or errors found after the system is deployed?",
        "options": [
          "Adaptive Maintenance",
          "Perfective Maintenance",
          "Corrective Maintenance",
          "Preventive Maintenance"
        ],
        "correct_answer": "Corrective Maintenance",
        "topic": "Types of Software Maintenance"
      },
      {
        "id": 13,
        "question": "What is the main difference between Software Engineering and Programming?",
        "options": [
          "SE uses different programming languages than programming",
          "SE is process-driven and covers the entire software lifecycle, while programming focuses mainly on coding",
          "SE is only for large companies, programming is for individuals",
          "SE doesn't involve any coding activities"
        ],
        "correct_answer": "SE is process-driven and covers the entire software lifecycle, while programming focuses mainly on coding",
        "topic": "SE vs Programming"
      },
      {
        "id": 14,
        "question": "Which organization created the joint Software Engineering Code of Ethics specifically for software engineers?",
        "options": [
          "IEEE only",
          "ACM only",
          "IEEE and ACM together",
          "BCS and ACS together"
        ],
        "correct_answer": "IEEE and ACM together",
        "topic": "Ethics - Professional Codes"
      },
      {
        "id": 15,
        "question": "What is the purpose of Acceptance Testing?",
        "options": [
          "To check if individual modules work correctly",
          "To verify that different modules work well together",
          "To test the whole system behavior",
          "To check if the system meets the client's requirements"
        ],
        "correct_answer": "To check if the system meets the client's requirements",
        "topic": "Types of Testing"
      },
      {
        "id": 16,
        "question": "Which of the following is NOT typically included in the Deployment phase?",
        "options": [
          "Installing software in the real environment",
          "Training users",
          "Writing the actual code",
          "Setting up technical support"
        ],
        "correct_answer": "Writing the actual code",
        "topic": "Deployment Phase"
      },
      {
        "id": 17,
        "question": "What is Operational Feasibility concerned with?",
        "options": [
          "Whether the technology exists to build the system",
          "Whether the project is financially viable",
          "Whether users will actually use the system",
          "Whether the project can be completed on time"
        ],
        "correct_answer": "Whether users will actually use the system",
        "topic": "Types of Feasibility"
      },
      {
        "id": 18,
        "question": "Which of the following is a key ethical principle in Software Engineering?",
        "options": [
          "Maximizing profit at all costs",
          "Protecting users' personal information and privacy",
          "Using the most complex technology available",
          "Completing projects as quickly as possible"
        ],
        "correct_answer": "Protecting users' personal information and privacy",
        "topic": "Software Engineering Ethics"
      },
      {
        "id": 19,
        "question": "What is the output of the Requirements Gathering phase?",
        "options": [
          "System design documents",
          "Working code modules",
          "Software Requirements Specification (SRS)",
          "Test cases"
        ],
        "correct_answer": "Software Requirements Specification (SRS)",
        "topic": "Requirements Gathering"
      },
      {
        "id": 20,
        "question": "Which software failure was caused by a missing hyphen in the code?",
        "options": [
          "Therac-25",
          "Ariane 5 Rocket",
          "Mariner 1 (NASA)",
          "Knight Capital"
        ],
        "correct_answer": "Mariner 1 (NASA)",
        "topic": "Software Crisis Examples"
      }
    ]
  },
  {
    "title": "Software Development Models - Mid Exam MCQs",
    "instructions": "Choose the best answer for each question",
    "questions": [
      {
        "id": 1,
        "question": "What is the primary difference between SDLC and Software Process Models?",
        "options": [
          "SDLC defines what phases to follow, while Software Process Models define how to execute those phases",
          "SDLC is for large projects, while Software Process Models are for small projects",
          "SDLC is outdated, while Software Process Models are modern",
          "SDLC and Software Process Models are the same thing"
        ],
        "correct_answer": "SDLC defines what phases to follow, while Software Process Models define how to execute those phases",
        "topic": "SDLC vs Process Models"
      },
      {
        "id": 2,
        "question": "Which software process model follows a linear and step-by-step approach where each phase is completed before moving to the next?",
        "options": [
          "Agile Model",
          "Spiral Model",
          "Waterfall Model",
          "Incremental Model"
        ],
        "correct_answer": "Waterfall Model",
        "topic": "Waterfall Model"
      },
      {
        "id": 3,
        "question": "What is the main advantage of the Iterative Waterfall Model over the traditional Waterfall Model?",
        "options": [
          "It's faster to implement",
          "It allows feedback and revisions between phases",
          "It requires less documentation",
          "It's cheaper to develop"
        ],
        "correct_answer": "It allows feedback and revisions between phases",
        "topic": "Iterative Waterfall"
      },
      {
        "id": 4,
        "question": "Which model is most suitable for safety-critical systems like medical devices and automotive systems?",
        "options": [
          "Agile Model",
          "Prototyping Model",
          "V-Model",
          "Incremental Model"
        ],
        "correct_answer": "V-Model",
        "topic": "V-Model"
      },
      {
        "id": 5,
        "question": "In the V-Model, what does the 'V' shape represent?",
        "options": [
          "Victory in software development",
          "Development on the left side and testing/validation on the right side",
          "Very important phases",
          "Vertical integration of components"
        ],
        "correct_answer": "Development on the left side and testing/validation on the right side",
        "topic": "V-Model"
      },
      {
        "id": 6,
        "question": "What is the primary purpose of the Prototyping Model?",
        "options": [
          "To reduce development costs",
          "To build a quick and rough version to show users early and get feedback",
          "To eliminate the need for testing",
          "To speed up the coding phase"
        ],
        "correct_answer": "To build a quick and rough version to show users early and get feedback",
        "topic": "Prototyping Model"
      },
      {
        "id": 7,
        "question": "Which model delivers software in small functional units called increments?",
        "options": [
          "Waterfall Model",
          "V-Model",
          "Incremental Model",
          "Prototyping Model"
        ],
        "correct_answer": "Incremental Model",
        "topic": "Incremental Model"
      },
      {
        "id": 8,
        "question": "What are the four main phases in each spiral loop of the Spiral Model?",
        "options": [
          "Planning, Design, Implementation, Testing",
          "Planning, Risk Analysis, Engineering, Evaluation",
          "Requirements, Analysis, Coding, Deployment",
          "Feasibility, Design, Development, Maintenance"
        ],
        "correct_answer": "Planning, Risk Analysis, Engineering, Evaluation",
        "topic": "Spiral Model"
      },
      {
        "id": 9,
        "question": "Which model is most appropriate for high-risk, large-scale projects with changing requirements?",
        "options": [
          "Waterfall Model",
          "V-Model",
          "Spiral Model",
          "Prototyping Model"
        ],
        "correct_answer": "Spiral Model",
        "topic": "Spiral Model"
      },
      {
        "id": 10,
        "question": "What is the typical duration of a sprint in Agile/Scrum methodology?",
        "options": [
          "1-4 weeks",
          "2-6 months",
          "6-12 months",
          "1-2 days"
        ],
        "correct_answer": "1-4 weeks",
        "topic": "Agile/Scrum"
      },
      {
        "id": 11,
        "question": "Which Agile framework focuses on visualizing tasks on a board and managing continuous flow of work?",
        "options": [
          "Scrum",
          "Kanban",
          "XP (Extreme Programming)",
          "Crystal"
        ],
        "correct_answer": "Kanban",
        "topic": "Agile Frameworks"
      },
      {
        "id": 12,
        "question": "What are the three key roles in Scrum?",
        "options": [
          "Developer, Tester, Manager",
          "Product Owner, Scrum Master, Team",
          "Analyst, Designer, Programmer",
          "Client, Vendor, User"
        ],
        "correct_answer": "Product Owner, Scrum Master, Team",
        "topic": "Scrum Roles"
      },
      {
        "id": 13,
        "question": "When should the Waterfall Model be used?",
        "options": [
          "When requirements are unclear and may change frequently",
          "When the project is high-risk and complex",
          "When requirements are clearly known in advance and unlikely to change",
          "When rapid delivery is the top priority"
        ],
        "correct_answer": "When requirements are clearly known in advance and unlikely to change",
        "topic": "Model Selection"
      },
      {
        "id": 14,
        "question": "Which model combines features of both Waterfall and Prototyping models?",
        "options": [
          "V-Model",
          "Incremental Model",
          "Spiral Model",
          "Agile Model"
        ],
        "correct_answer": "Spiral Model",
        "topic": "Model Characteristics"
      },
      {
        "id": 15,
        "question": "What is the main focus of the Agile methodology?",
        "options": [
          "Comprehensive documentation",
          "Following a strict plan",
          "Team collaboration, customer feedback, and flexibility to change",
          "Minimizing the number of iterations"
        ],
        "correct_answer": "Team collaboration, customer feedback, and flexibility to change",
        "topic": "Agile Principles"
      },
      {
        "id": 16,
        "question": "In which year was the Agile Manifesto created?",
        "options": [
          "1999",
          "2001",
          "2003",
          "2005"
        ],
        "correct_answer": "2001",
        "topic": "Agile History"
      },
      {
        "id": 17,
        "question": "Which model is best suited for projects where requirements may change frequently and fast delivery is important?",
        "options": [
          "Waterfall Model",
          "V-Model",
          "Agile Model",
          "Traditional SDLC"
        ],
        "correct_answer": "Agile Model",
        "topic": "Model Selection"
      },
      {
        "id": 18,
        "question": "What type of relationship does inheritance represent in the context of software development models?",
        "options": [
          "Has-a relationship",
          "Uses-a relationship",
          "Each model inherits from previous models",
          "Models build upon lessons learned from earlier approaches"
        ],
        "correct_answer": "Models build upon lessons learned from earlier approaches",
        "topic": "Model Evolution"
      },
      {
        "id": 19,
        "question": "Which factor is most important when choosing between different software process models?",
        "options": [
          "The programming language to be used",
          "The size of the development team",
          "Requirements stability and project characteristics",
          "The client's budget"
        ],
        "correct_answer": "Requirements stability and project characteristics",
        "topic": "Model Selection"
      },
      {
        "id": 20,
        "question": "For a COVID-19 vaccination appointment system that needs rapid deployment, which model would be most appropriate?",
        "options": [
          "Waterfall Model",
          "V-Model",
          "Agile/Incremental Model",
          "Spiral Model"
        ],
        "correct_answer": "Agile/Incremental Model",
        "topic": "Model Application"
      }
    ]
  },
  {
    "title": "Agile and SCRUM Mid Exam",
    "instructions": "Choose the best answer for each question",
    "questions": [
      {
        "id": 1,
        "question": "What are the 4 key values of the Agile Manifesto?",
        "options": [
          "Process, Documentation, Contract, Plan",
          "Individuals and Interactions, Working Software, Customer Collaboration, Responding to Change",
          "Planning, Testing, Development, Deployment",
          "Requirements, Design, Implementation, Maintenance"
        ],
        "correct_answer": "Individuals and Interactions, Working Software, Customer Collaboration, Responding to Change",
        "topic": "Agile Manifesto"
      },
      {
        "id": 2,
        "question": "In Agile methodology, what is prioritized over 'Comprehensive Documentation'?",
        "options": [
          "Process and Tools",
          "Working Software",
          "Contract Negotiation",
          "Following Plan"
        ],
        "correct_answer": "Working Software",
        "topic": "Agile Values"
      },
      {
        "id": 3,
        "question": "Who is responsible for deciding which features and functionalities to build in SCRUM?",
        "options": [
          "ScrumMaster",
          "Development Team",
          "Product Owner",
          "Stakeholders"
        ],
        "correct_answer": "Product Owner",
        "topic": "Scrum Roles"
      },
      {
        "id": 4,
        "question": "What is the maximum duration of a Sprint in SCRUM?",
        "options": [
          "2 weeks",
          "1 calendar month",
          "6 weeks",
          "3 months"
        ],
        "correct_answer": "1 calendar month",
        "topic": "Sprint Duration"
      },
      {
        "id": 5,
        "question": "What is the correct template for writing User Stories?",
        "options": [
          "Given <condition> When <action> Then <result>",
          "As a <user role> I want to <goal> So that <benefit>",
          "The system shall <requirement>",
          "Feature: <title> Scenario: <description>"
        ],
        "correct_answer": "As a <user role> I want to <goal> So that <benefit>",
        "topic": "User Stories"
      },
      {
        "id": 6,
        "question": "Which SCRUM role has no authority to exert control over the development team?",
        "options": [
          "Product Owner",
          "ScrumMaster",
          "Development Team Lead",
          "Project Manager"
        ],
        "correct_answer": "ScrumMaster",
        "topic": "Scrum Master Role"
      },
      {
        "id": 7,
        "question": "What is a Product Backlog?",
        "options": [
          "A list of completed features",
          "A prioritized list of work for the development team from product plan and requirements",
          "A list of bugs found during testing",
          "A schedule of sprint activities"
        ],
        "correct_answer": "A prioritized list of work for the development team from product plan and requirements",
        "topic": "Product Backlog"
      },
      {
        "id": 8,
        "question": "Which characteristic is NOT associated with traditional software development methodologies?",
        "options": [
          "High Cost",
          "Changes are not acceptable",
          "Highest Value",
          "Less or no iterations"
        ],
        "correct_answer": "Highest Value",
        "topic": "Traditional vs Agile"
      },
      {
        "id": 9,
        "question": "What are the three main questions typically asked during Daily Scrum?",
        "options": [
          "What will you do? When will you finish? Who will help?",
          "What did you accomplish since last daily scrum? What will you work on? What impediments exist?",
          "What is done? What is in progress? What is planned?",
          "What worked? What didn't work? What should we improve?"
        ],
        "correct_answer": "What did you accomplish since last daily scrum? What will you work on? What impediments exist?",
        "topic": "Daily Scrum"
      },
      {
        "id": 10,
        "question": "What does a Sprint Burn Down Chart represent?",
        "options": [
          "Team performance ratings over time",
          "Work left to do vs time",
          "Budget spent vs time",
          "Features completed vs planned features"
        ],
        "correct_answer": "Work left to do vs time",
        "topic": "Burn Down Chart"
      },
      {
        "id": 11,
        "question": "Which SCRUM artifact is a subset of Product Backlog user stories defined for a particular sprint?",
        "options": [
          "Sprint Backlog",
          "Product Increment",
          "Definition of Done",
          "Burn Down Chart"
        ],
        "correct_answer": "Sprint Backlog",
        "topic": "Scrum Artifacts"
      },
      {
        "id": 12,
        "question": "What is the primary purpose of Sprint Review?",
        "options": [
          "To plan the next Sprint",
          "To inspect the Increment and adapt the Product Backlog if needed",
          "To assign new tasks to team members",
          "To conduct a retrospective on team performance"
        ],
        "correct_answer": "To inspect the Increment and adapt the Product Backlog if needed",
        "topic": "Sprint Review"
      },
      {
        "id": 13,
        "question": "What is the main purpose of Sprint Retrospective?",
        "options": [
          "To review the product increment and get feedback from stakeholders",
          "To plan the work for the next sprint and prioritize the product backlog",
          "To inspect the team's performance and identify improvements for the next sprint",
          "To coordinate work across multiple teams and align on product vision"
        ],
        "correct_answer": "To inspect the team's performance and identify improvements for the next sprint",
        "topic": "Sprint Retrospective"
      },
      {
        "id": 14,
        "question": "In the Product Backlog, where do high-value items appear?",
        "options": [
          "At the bottom of the backlog",
          "At the top of the product backlog",
          "In the middle section",
          "They are randomly distributed"
        ],
        "correct_answer": "At the top of the product backlog",
        "topic": "Product Backlog Prioritization"
      },
      {
        "id": 15,
        "question": "What is the ideal burn down velocity if a project has 120 tasks to complete in 5 days?",
        "options": [
          "20 tasks per day",
          "24 tasks per day",
          "30 tasks per day",
          "25 tasks per day"
        ],
        "correct_answer": "24 tasks per day",
        "topic": "Burn Down Velocity"
      },
      {
        "id": 16,
        "question": "Which of the following is NOT a SCRUM artifact?",
        "options": [
          "Product Backlog",
          "Sprint Backlog",
          "Burn Down Charts",
          "Daily Scrum"
        ],
        "correct_answer": "Daily Scrum",
        "topic": "Scrum Artifacts vs Events"
      },
      {
        "id": 17,
        "question": "What does 'Responding to Change' prioritize over in Agile values?",
        "options": [
          "Following Plan",
          "Process and Tools",
          "Comprehensive Documentation",
          "Contract Negotiation"
        ],
        "correct_answer": "Following Plan",
        "topic": "Agile Values"
      },
      {
        "id": 18,
        "question": "Which characteristic best describes the Development Team in SCRUM?",
        "options": [
          "Hierarchical and specialized",
          "Cross-functional and self-organizing",
          "Managed by ScrumMaster",
          "Reports directly to Product Owner"
        ],
        "correct_answer": "Cross-functional and self-organizing",
        "topic": "Development Team Characteristics"
      },
      {
        "id": 19,
        "question": "According to the lecture, why is Agile valuable for Computer Science and Network Engineering (CSNE) projects?",
        "options": [
          "It reduces development costs significantly",
          "It eliminates the need for documentation",
          "Its adaptability makes it valuable for complex network infrastructure projects",
          "It guarantees project success"
        ],
        "correct_answer": "Its adaptability makes it valuable for complex network infrastructure projects",
        "topic": "Agile Applications"
      },
      {
        "id": 20,
        "question": "What happens to the Product Backlog over the course of a project?",
        "options": [
          "It remains fixed once created",
          "The Product backlog is a constantly evolving artifact",
          "It is only updated at the end of each sprint",
          "It is replaced with a new backlog each sprint"
        ],
        "correct_answer": "The Product backlog is a constantly evolving artifact",
        "topic": "Product Backlog Management"
      }
    ]
  },
  {
    "title": "Use Case Diagrams - Software Engineering Mid Exam",
    "instructions": "Choose the best answer for each question",
    "questions": [
      {
        "id": 1,
        "question": "What is the primary purpose of a Use Case Model in software engineering?",
        "options": [
          "To define how the system will be implemented",
          "To graphically represent the proposed functionality of the new system",
          "To show the database design of the system",
          "To demonstrate the system architecture"
        ],
        "correct_answer": "To graphically represent the proposed functionality of the new system",
        "topic": "Use Case Purpose"
      },
      {
        "id": 2,
        "question": "Which of the following is NOT a basic component of a Use Case diagram?",
        "options": [
          "System",
          "Actors",
          "Use Cases",
          "Classes"
        ],
        "correct_answer": "Classes",
        "topic": "Use Case Components"
      },
      {
        "id": 3,
        "question": "What does an Actor represent in a Use Case diagram?",
        "options": [
          "A function performed by the system",
          "The roles adopted by those participating with the system",
          "The system boundary",
          "A database table"
        ],
        "correct_answer": "The roles adopted by those participating with the system",
        "topic": "Actor Definition"
      },
      {
        "id": 4,
        "question": "What is the correct notation for representing an Actor in a Use Case diagram?",
        "options": [
          "Rectangle",
          "Oval/Ellipse",
          "Stick figure",
          "Diamond"
        ],
        "correct_answer": "Stick figure",
        "topic": "Actor Notation"
      },
      {
        "id": 5,
        "question": "Which relationship indicates that an actor participates in a use case?",
        "options": [
          "Include",
          "Extend",
          "Association",
          "Generalization"
        ],
        "correct_answer": "Association",
        "topic": "Actor-Use Case Relationships"
      },
      {
        "id": 6,
        "question": "In an <<include>> relationship, which statement is correct?",
        "options": [
          "The included use case can stand alone",
          "The base use case explicitly incorporates the behavior of another use case",
          "The relationship is optional",
          "It represents inheritance between use cases"
        ],
        "correct_answer": "The base use case explicitly incorporates the behavior of another use case",
        "topic": "Include Relationship"
      },
      {
        "id": 7,
        "question": "What is the main characteristic of an <<extend>> relationship?",
        "options": [
          "The base use case cannot stand alone",
          "The extending behavior is mandatory",
          "The base use case may stand alone, but can be extended under certain conditions",
          "It shows actor inheritance"
        ],
        "correct_answer": "The base use case may stand alone, but can be extended under certain conditions",
        "topic": "Extend Relationship"
      },
      {
        "id": 8,
        "question": "In actor generalization, what does the child actor inherit?",
        "options": [
          "Only the name of the parent actor",
          "Only the use cases of the parent actor",
          "All characteristics and behavior of the parent actor",
          "Nothing from the parent actor"
        ],
        "correct_answer": "All characteristics and behavior of the parent actor",
        "topic": "Actor Generalization"
      },
      {
        "id": 9,
        "question": "What is the correct stereotype notation for an include relationship?",
        "options": [
          "<<extends>>",
          "<<include>>",
          "<<uses>>",
          "<<contains>>"
        ],
        "correct_answer": "<<include>>",
        "topic": "Include Notation"
      },
      {
        "id": 10,
        "question": "Which of the following best describes a Use Case?",
        "options": [
          "A class in the system",
          "A unit of behavior in the proposed system",
          "A database operation",
          "A user interface element"
        ],
        "correct_answer": "A unit of behavior in the proposed system",
        "topic": "Use Case Definition"
      },
      {
        "id": 11,
        "question": "What does the System Boundary represent in a Use Case diagram?",
        "options": [
          "The physical limits of the hardware",
          "The boundary between the system and external actors",
          "The network connections",
          "The user interface boundaries"
        ],
        "correct_answer": "The boundary between the system and external actors",
        "topic": "System Boundary"
      },
      {
        "id": 12,
        "question": "Use case names typically follow which naming convention?",
        "options": [
          "Noun phrases only",
          "Verb phrases only",
          "Verb-noun phrases",
          "Adjective-noun phrases"
        ],
        "correct_answer": "Verb-noun phrases",
        "topic": "Use Case Naming"
      },
      {
        "id": 13,
        "question": "Which of the following is true about Use Case scenarios?",
        "options": [
          "They only describe successful executions",
          "They define the specific sequence of events between system and actors",
          "They are optional in use case modeling",
          "They replace the use case diagram"
        ],
        "correct_answer": "They define the specific sequence of events between system and actors",
        "topic": "Use Case Scenarios"
      },
      {
        "id": 14,
        "question": "What should be included in the Main Success Scenario of a use case?",
        "options": [
          "Only error conditions",
          "All possible alternative flows",
          "The happy path when everything goes as planned",
          "Implementation details"
        ],
        "correct_answer": "The happy path when everything goes as planned",
        "topic": "Main Success Scenario"
      },
      {
        "id": 15,
        "question": "In a use case specification, what are Extensions used for?",
        "options": [
          "To describe the main flow only",
          "To describe alternative paths and exceptional flows",
          "To list the actors involved",
          "To define system requirements"
        ],
        "correct_answer": "To describe alternative paths and exceptional flows",
        "topic": "Use Case Extensions"
      },
      {
        "id": 16,
        "question": "Which of the following is a valid precondition for a use case?",
        "options": [
          "User has successfully completed the use case",
          "System displays confirmation message",
          "User has logged into the system",
          "Use case has ended"
        ],
        "correct_answer": "User has logged into the system",
        "topic": "Use Case Preconditions"
      },
      {
        "id": 17,
        "question": "What distinguishes Use Case diagrams from other UML diagrams?",
        "options": [
          "They show implementation details",
          "They focus on WHAT the system will do, not HOW",
          "They only show database relationships",
          "They are used only for testing"
        ],
        "correct_answer": "They focus on WHAT the system will do, not HOW",
        "topic": "Use Case Characteristics"
      },
      {
        "id": 18,
        "question": "In use case generalization, what happens to the child use case?",
        "options": [
          "It replaces the parent use case completely",
          "It inherits behavior and may add to or override the parent's behavior",
          "It has no relationship to the parent",
          "It can only subtract functionality"
        ],
        "correct_answer": "It inherits behavior and may add to or override the parent's behavior",
        "topic": "Use Case Generalization"
      },
      {
        "id": 19,
        "question": "Which relationship type shows that one use case is a specialized version of another?",
        "options": [
          "Association",
          "Include",
          "Extend",
          "Generalization"
        ],
        "correct_answer": "Generalization",
        "topic": "Use Case Relationships"
      },
      {
        "id": 20,
        "question": "What is the main benefit of using Use Case modeling in requirements engineering?",
        "options": [
          "It provides detailed implementation guidelines",
          "It serves as an excellent communication tool with stakeholders about system functionality",
          "It replaces all other documentation",
          "It shows the system's internal structure"
        ],
        "correct_answer": "It serves as an excellent communication tool with stakeholders about system functionality",
        "topic": "Use Case Benefits"
      }
    ]
  },
  {
    "title": "Activity Diagrams - SLIIT SE Mid Exam",
    "instructions": "Choose the best answer for each question",
    "questions": [
      {
        "id": 1,
        "question": "What is the primary purpose of an Activity Diagram in UML?",
        "options": [
          "To model static structure of classes",
          "To model workflows and system behavior",
          "To show object interactions over time",
          "To represent database relationships"
        ],
        "correct_answer": "To model workflows and system behavior",
        "topic": "Activity Diagram Purpose"
      },
      {
        "id": 2,
        "question": "Which symbol represents the initial node in an Activity Diagram?",
        "options": [
          "Empty circle",
          "Filled circle",
          "Diamond shape",
          "Rectangle"
        ],
        "correct_answer": "Filled circle",
        "topic": "Initial Node"
      },
      {
        "id": 3,
        "question": "What does a decision node represent in an Activity Diagram?",
        "options": [
          "Start of the process",
          "Parallel execution",
          "Conditional flow of control",
          "End of the process"
        ],
        "correct_answer": "Conditional flow of control",
        "topic": "Decision Node"
      },
      {
        "id": 4,
        "question": "Which element is used to show activities that can occur in parallel?",
        "options": [
          "Decision and Merge nodes",
          "Fork and Join nodes",
          "Initial and Final nodes",
          "Action nodes only"
        ],
        "correct_answer": "Fork and Join nodes",
        "topic": "Parallel Activities"
      },
      {
        "id": 5,
        "question": "What shape is used to represent a decision node?",
        "options": [
          "Circle",
          "Rectangle",
          "Diamond",
          "Oval"
        ],
        "correct_answer": "Diamond",
        "topic": "Decision Node Shape"
      },
      {
        "id": 6,
        "question": "In Activity Diagrams, what does a fork node do?",
        "options": [
          "Merges multiple flows into one",
          "Creates a decision point",
          "Splits one flow into multiple parallel flows",
          "Ends the activity"
        ],
        "correct_answer": "Splits one flow into multiple parallel flows",
        "topic": "Fork Node"
      },
      {
        "id": 7,
        "question": "What is the relationship between fork and join nodes?",
        "options": [
          "They are unrelated",
          "Every fork must have a corresponding join",
          "Joins can exist without forks",
          "Forks are optional with joins"
        ],
        "correct_answer": "Every fork must have a corresponding join",
        "topic": "Fork-Join Relationship"
      },
      {
        "id": 8,
        "question": "Which notation indicates iteration in an Activity Diagram?",
        "options": [
          "Asterisk (*) inside an action",
          "Double circle",
          "Dashed line",
          "Triangle symbol"
        ],
        "correct_answer": "Asterisk (*) inside an action",
        "topic": "Iteration Notation"
      },
      {
        "id": 9,
        "question": "What is a swimlane used for in Activity Diagrams?",
        "options": [
          "To show decision points",
          "To partition activities by organizational units or actors",
          "To indicate parallel processes",
          "To mark the end of activities"
        ],
        "correct_answer": "To partition activities by organizational units or actors",
        "topic": "Swimlanes"
      },
      {
        "id": 10,
        "question": "How is a sub-activity (call action) indicated in an Activity Diagram?",
        "options": [
          "With a double border",
          "With a rake-style symbol",
          "With italic text",
          "With a dashed outline"
        ],
        "correct_answer": "With a rake-style symbol",
        "topic": "Sub-activity Notation"
      },
      {
        "id": 11,
        "question": "What does a merge node do in an Activity Diagram?",
        "options": [
          "Splits flow into parallel paths",
          "Creates a decision point",
          "Merges alternative flows back together",
          "Synchronizes parallel flows"
        ],
        "correct_answer": "Merges alternative flows back together",
        "topic": "Merge Node"
      },
      {
        "id": 12,
        "question": "Which type of flow occurs at a fork node?",
        "options": [
          "Control flows down only one path",
          "Control flows down all forked paths",
          "Control stops at the fork",
          "Control flows randomly"
        ],
        "correct_answer": "Control flows down all forked paths",
        "topic": "Fork Node Flow"
      },
      {
        "id": 13,
        "question": "What must be specified for each branch coming out of a decision node?",
        "options": [
          "Action names",
          "Guard conditions",
          "Time constraints",
          "Actor assignments"
        ],
        "correct_answer": "Guard conditions",
        "topic": "Decision Node Guards"
      },
      {
        "id": 14,
        "question": "Activity Diagrams are most similar to which programming construct?",
        "options": [
          "Class definitions",
          "Flowcharts",
          "Database schemas",
          "Function signatures"
        ],
        "correct_answer": "Flowcharts",
        "topic": "Activity Diagram Similarity"
      },
      {
        "id": 15,
        "question": "What shape represents an action node in Activity Diagrams?",
        "options": [
          "Circle",
          "Diamond",
          "Rounded rectangle",
          "Triangle"
        ],
        "correct_answer": "Rounded rectangle",
        "topic": "Action Node Shape"
      },
      {
        "id": 16,
        "question": "When should Activity Diagrams be used?",
        "options": [
          "Only for software design",
          "For modeling business processes and analyzing use cases",
          "Only for database design",
          "For network architecture"
        ],
        "correct_answer": "For modeling business processes and analyzing use cases",
        "topic": "Activity Diagram Usage"
      },
      {
        "id": 17,
        "question": "What is the difference between a merge and a join?",
        "options": [
          "No difference, they are the same",
          "Merge combines alternative paths, join synchronizes parallel flows",
          "Join combines alternative paths, merge synchronizes parallel flows",
          "Merge is for decisions, join is for actions"
        ],
        "correct_answer": "Merge combines alternative paths, join synchronizes parallel flows",
        "topic": "Merge vs Join"
      },
      {
        "id": 18,
        "question": "How should text in action nodes be written?",
        "options": [
          "As noun phrases",
          "As verb phrases in present tense",
          "As past tense verbs",
          "As questions"
        ],
        "correct_answer": "As verb phrases in present tense",
        "topic": "Action Node Text"
      },
      {
        "id": 19,
        "question": "What represents the final node in an Activity Diagram?",
        "options": [
          "Filled circle",
          "Empty circle",
          "Circle with a dot inside",
          "Diamond shape"
        ],
        "correct_answer": "Circle with a dot inside",
        "topic": "Final Node"
      },
      {
        "id": 20,
        "question": "Which element connects activities in an Activity Diagram?",
        "options": [
          "Associations",
          "Transitions (control flows)",
          "Dependencies",
          "Generalizations"
        ],
        "correct_answer": "Transitions (control flows)",
        "topic": "Activity Connections"
      }
    ]
  }
];