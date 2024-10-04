(this["webpackJsonprishav-chanda-portfolio"]=this["webpackJsonprishav-chanda-portfolio"]||[]).push([[0],{102:function(e,t,a){e.exports=a(115)},112:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(71),o=a.n(r),l=a(2);const p={bg:"#1C1C27",bgLight:"#1C1E27",primary:"#854CE6",text_primary:"#F2F3F4",text_secondary:"#b1b2b3",card:"#171721",card_light:"#191924",button:"#854CE6",white:"#FFFFFF",black:"#000000"},d={bg:"#FFFFFF",bgLight:"#f0f0f0",primary:"#be1adb",text_primary:"#111111",text_secondary:"#48494a",card:"#FFFFFF",button:"#5c5b5b"};var s=a(43);const c=l.b.div`
    background-color: ${e=>{let{theme:t}=e;return t.card_light}};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`,m=l.b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`,h=Object(l.b)(s.b)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`,g=l.b.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`,x=l.b.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`,u=l.b.a`
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${e=>{let{theme:t}=e;return t.primary}};
    }

    &.active {
      border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
    }
`,f=l.b.a`
  border: 1.8px solid ${e=>{let{theme:t}=e;return t.primary}};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${e=>{let{theme:t}=e;return t.primary}};
      color: ${e=>{let{theme:t}=e;return t.white}};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`,b=l.b.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,w=l.b.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
  }
`,y=l.b.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${e=>{let{theme:t}=e;return t.card_light+99}};
    transition: all 0.6s ease-in-out;
    transform: ${e=>{let{isOpen:t}=e;return t?"translateY(0)":"translateY(-100%)"}};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${e=>{let{isOpen:t}=e;return t?"100%":"0"}};
    z-index: ${e=>{let{isOpen:t}=e;return t?"1000":"-1000"}};

`,v=(l.b.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`,Object(l.b)(s.b)`
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }

  &.active {
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,l.b.a`
  border: 1.8px solid ${e=>{let{theme:t}=e;return t.primary}};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${e=>{let{theme:t}=e;return t.primary}};
    color: ${e=>{let{theme:t}=e;return t.white}};
  }
`,l.b.a`
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }

  &.active {
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`);Object(l.b)(s.b)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;var E=a(75),k=a(76);const A={name:"Krishan Kumar",roles:["Full Stack Developer","Android Developer","UI/UX Designer","Programmer"],description:"I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",github:"https://github.com/rishavchanda",resume:"https://drive.google.com/file/d/1ffZrcMcn8UatXGIaautbbqpV7ADNaETA/view?usp=sharing",linkedin:"https://www.linkedin.com/in/rishav-chanda-b89a791b3/",twitter:"https://twitter.com/RishavChanda",insta:"https://www.instagram.com/rishav_chanda/",facebook:"https://www.facebook.com/rishav.chanda.165/"},C=[{title:"Frontend",skills:[{name:"React Js",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"},{name:"Redux",image:"https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"},{name:"Next Js",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII="},{name:"HTML",image:"https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"},{name:"CSS",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"},{name:"JavaScript",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"},{name:"Bootstrap",image:"https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"},{name:"Material UI",image:"data:image/png;base64,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"},{name:"Flutter",image:"https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png"}]},{title:"Backend",skills:[{name:"Node Js",image:"https://nodejs.org/static/images/logo.svg"},{name:"Express Js",image:"data:image/png;base64,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"},{name:"Graph Ql",image:"https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"},{name:"Python",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"},{name:"MySQL",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"},{name:"Postgresql",image:"https://www.postgresql.org/media/img/about/press/elephant.png"},{name:"MongoDB",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"},{name:"Firebase",image:"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"}]},{title:"Android",skills:[{name:"Java",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"},{name:"Kotlin",image:"https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg"},{name:"XML",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s"},{name:"Android Studio",image:"https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png"}]},{title:"Others",skills:[{name:"Git",image:"https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"},{name:"GitHub",image:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"},{name:"Docker",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"},{name:"Netlify",image:"https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png"},{name:"VS Code",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"},{name:"Postman",image:"https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667"},{name:"Adobe XD",image:"https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667"},{name:"Figma",image:"https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667"}]}],z=[{id:0,img:"https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",role:"DevOps & Fullstack Engineering Intern",company:"Flipr Inovations Pvt. Ltd.",date:"Aug 2023 - July 2023",desc:"Working on Flipr Platforms, managing DevOps, and streamlining the process with automation.",skills:["Docker","Terraform","AWS","EC2","Portainer","Nginx","JavaScript","TypeScript","Node Js"," Next Js"],doc:"https://media.licdn.com/dms/image/D4D2DAQFlp60ZqHuaFQ/profile-treasury-image-shrink_1280_1280/0/1691180828512?e=1692381600&v=beta&t=mM5Y_NE5EPlQhez5FAN6NLVSKcO_Ojt_9Gq3mnFGkAQ"},{id:0,img:"https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/neurobit.jpeg?alt=media&token=1cacbb7b-e5ea-4efb-9b3d-f5a31b9564ad",role:"Frontend Engineer Intern",company:"Neurobit",date:"June 2023 - Present",desc:"Working on the frontend of the web application using ReactJS, Redux, and Material UI.",skills:["ReactJS","Redux","NodeJs","Material UI","HTML","CSS","JavaScript"],doc:"https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730"},{id:1,img:"https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",role:"Fullstack Externship",company:"Flipr",date:"June 2023 - July 2023",desc:"Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.",skills:["ReactJS","Redux","NodeJs","Material UI","HTML","CSS","JavaScript","Docker","AWS","MongoDB"]},{id:2,img:"https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035",role:"Open Source Contributor ",company:"GirlScript Summer of Code",date:"May 2023 - Present",desc:"Contributing to different open-source projects and learn from industry experts",doc:"https://media.licdn.com/dms/image/D4D22AQGzSpgFaR4hsQ/feedshare-shrink_800/0/1684079632872?e=1687996800&v=beta&t=i0xWn_k32Oj9SxKfc6rARSbOghXD9Ge6WyEb2p2vvrc"},{id:3,img:"https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/gdsc.jpeg?alt=media&token=c162329c-efaa-4be8-a173-8d3f4c48ea70",role:"Android Developer",company:"DSC KIIT",date:"Nov2021 - Present",desc:"As an Android developer at the Google Developers Student Club (GDCS), I have had the opportunity to work on exciting projects and collaborate with talented developers who share my passion for technology. Through my involvement with GDCS, I have also had the opportunity to host and participate in numerous events, including hackathons, study jams, and workshops.",skills:["Leadership","Mobile Application Development","Kotlin","XML","Figma"]},{id:4,img:"https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Rudraksha.jpeg?alt=media&token=8f83f41e-d0a1-486f-9c7f-dd4cd1d09e8d",role:"Android Developer Intern",company:"Rudraksha Welffare Foundation",date:"June 2021 - Oct 2021",desc:"As an Android Developer Intern at Rudraksha Welfare Foundation from June 2021 to October 2021, I gained valuable hands-on experience in application development. During my tenure, I contributed to the development of the application's back-end cloud functions using Firebase and implemented a front-end with the MVVM structure, which was designed using Figma. I also added a one-to-one video call feature, conceptualized new features, and optimized app performance. This internship helped me enhance my skills in Android development and gave me an opportunity to work in a collaborative team environment.",skills:["Android","Java","Kotlin","XML","Node Js","Cloud Firestore","Firebase","Figma"],doc:"https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245"}],I=[{id:0,img:"https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Kiit.jpeg?alt=media&token=3839d520-c59d-4341-ad8f-0980c98de4dd",school:"Kalinga Institute of Industrial Technology, Bhubaneswar",date:"Oct 2021 - Sep 2025",grade:"8.71 CGPA",desc:"I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kalinga Institute of Industrial Technology, Bhubaneswar. I have completed 4 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at KIIT, where I am learning and working on exciting projects with a team of talented developers.",degree:"Bachelor of Technology - BTech, Computer Science and Engineering"},{id:1,img:"https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",school:"Methodist School, Dankuni",date:"Apr 2019 - Apr 2025",grade:"88.2%",desc:"I completed my class 12 high school education at Methodist School, Dankuni, where I studied Science with Computer Science.",degree:"ISC(XII), Science with Computer"},{id:2,img:"https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",school:"Methodist School, Dankuni",date:"Apr 2017 - Apr 2019",grade:"92.3%",desc:"I completed my class 10 education at Methodist School, Dankuni, where I studied Science with Computer Application.",degree:"ICSC(X), Science with Computer"}],S=[{id:9,title:"Trackify",date:"Jun 2023 - Jul 2023",description:"Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. \nAdmin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials:\t#Email: testemployee@gmail.com\t#Password- 123@Testemployee",image:"https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",tags:["Docker","AWS","DuckDNS","Eslint","Husky","CI/CD","React Js","MongoDb","Node Js","Express Js","Redux"],category:"web app",github:"https://github.com/rishavchanda/Trackify",webapp:"https://trackify.duckdns.org"},{id:0,title:"Podstream",date:"Apr 2023 - May 2023",description:"Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",image:"https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",tags:["React Js","MongoDb","Node Js","Express Js","Redux"],category:"web app",github:"https://github.com/rishavchanda/Podstream",webapp:"https://podstream.netlify.app/",member:[{name:"Rishav Chanda",img:"https://avatars.githubusercontent.com/u/64485885?v=4",linkedin:"https://www.linkedin.com/in/rishav-chanda-b89a791b3/",github:"https://github.com/rishavchanda/"},{name:"Upasana Chaudhuri",img:"https://avatars.githubusercontent.com/u/100614635?v=4",linkedin:"https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",github:"https://github.com/upasana0710"}]},{id:1,title:"Vexa",date:"Oct 2022 - Present",description:"Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",image:"https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",tags:["React Js","MongoDb","Node Js","Express Js","Redux","NodeMailer"],category:"web app",github:"https://github.com/rishavchanda/Project-Management-App",webapp:"https://vexa-app.netlify.app/"},{id:2,title:"Brain Tumor Detection",date:"Jan 2023 - Mar 2023",description:"Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",image:"https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",tags:["Python","Keras","TensorFlow","VGG16","Pickle","React"],category:"machine learning",github:"https://github.com/rishavchanda/Brain-Tumor-Detection",webapp:"https://brain-tumor.netlify.app/",member:[{name:"Rishav Chanda",img:"https://avatars.githubusercontent.com/u/64485885?v=4",linkedin:"https://www.linkedin.com/in/rishav-chanda-b89a791b3/",github:"https://github.com/rishavchanda/"},{name:"Upasana Chaudhuri",img:"https://avatars.githubusercontent.com/u/100614635?v=4",linkedin:"https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",github:"https://github.com/upasana0710"}]},{id:3,title:"Buckoid",date:"Dec 2021 - Apr 2022",description:"App Is Currently In Playstore 100+ Downloads. This Project proposes an \u201cExpense Tracking App\u201d. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",image:"https://camo.githubusercontent.com/fbf405040ae86b5d4a40f24e4ac034982cb8c0e2d850560ba64527997b258be8/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f67696e2d65613565322e61707073706f742e636f6d2f6f2f4255434b4f49442532302831292e706e673f616c743d6d6564696126746f6b656e3d32653735376235372d323964372d346263612d613562322d653164346538313432373435",tags:["Kotlin","MVVM","Room Database","Google Drive Cloud API"],category:"android app",github:"https://github.com/rishavchanda/Buckoid-Android-App",webapp:"https://play.google.com/store/apps/details?id=com.rishav.buckoid"},{id:10,title:"Job Finding App",date:"Jun 2023 - Jul 2023",description:"A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",image:"https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",tags:["React Native","JavaScript","Axios"],category:"android app",github:"https://github.com/rishavchanda/Job-finder-App",webapp:"https://github.com/rishavchanda/Job-finder-App"},{id:4,title:"Whatsapp Clone",date:"Jul 2021",description:"A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",image:"https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",tags:["React Js","Firebase","Firestore","Node JS"],category:"web app",github:"https://github.com/rishavchanda/Whatsapp-Clone-React-Js",webapp:"https://whatsapp-clone-rishav.web.app"},{id:5,title:"Todo Web App",date:"Jun 2021",description:" A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",image:"https://camo.githubusercontent.com/a328255ad96f861f57d25096d28018ab2656c689a1456b0d145764009bed2d1a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",tags:["React Js","Local Storage","AWS Auth","Node JS"],category:"web app",github:"https://github.com/rishavchanda/Todo-Web-App",webapp:"https://rishav-react-todo.netlify.app/"},{id:6,title:"Breaking Bad",date:"Jun 2021",description:"A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",image:"https://camo.githubusercontent.com/cd07010cbeb90cb1b43a5d6162784326aef02210ef7d41a0f9ae043b3e392378/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",tags:["React Js","API","Axios","Node JS"],category:"web app",github:"https://github.com/rishavchanda/Breaking-Bad",webapp:"https://breaking-bad-webapp.netlify.app"},{id:7,title:"Quiz App",date:"Dec 2020 - Jan 2021",description:"A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",image:"https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",tags:["Java","Android Studio","Firebase","Google Auth"],category:"android app",github:"https://github.com/rishavchanda/Quiz-Earn",webapp:"https://github.com/rishavchanda/Quiz-Earn"},{id:8,title:"Face Recognition",date:"Jan 2021",description:"A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",image:"https://camo.githubusercontent.com/a8b3e1ebf26d4c95f75bc6671189a3590eb67eb8332d7c7452492990e731efb9/68747470733a2f2f77617265686f7573652d63616d6f2e696e67726573732e636d68312e707366686f737465642e6f72672f356137383335396561323762643261633232336437656662306639303831306437373930383436312f363837343734373037333361326632663633366336663735363432653637363937343638373536323735373336353732363336663665373436353665373432653633366636643266363137333733363537343733326633383339333633363339333232663332333433343333333033333339333832663333333636363330363533333636333032643331333336333632326433313331363533373264333833323335333832643334363433303633333936333635333136353334333133393265363736393636",tags:["Python","Keras","TensorFlow","VGG16","Pickle","React"],category:"machine learning",github:"https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",webapp:"https://github.com/rishavchanda/Face-Recodnition-AI-with-Python"}];var j=()=>{const[e,t]=i.a.useState(!1),a=Object(l.c)();return i.a.createElement(c,null,i.a.createElement(m,null,i.a.createElement(h,{to:"/"},i.a.createElement("a",{style:{display:"flex",alignItems:"center",color:"white",marginBottom:"20;",cursor:"pointer"}},i.a.createElement(E.a,{size:"3rem"})," ",i.a.createElement(g,null,"Portfolio"))),i.a.createElement(w,null,i.a.createElement(k.a,{onClick:()=>{t(!e)}})),i.a.createElement(x,null,i.a.createElement(u,{href:"#about"},"About"),i.a.createElement(u,{href:"#skills"},"Skills"),i.a.createElement(u,{href:"#experience"},"Experience"),i.a.createElement(u,{href:"#projects"},"Projects"),i.a.createElement(u,{href:"#education"},"Education")),i.a.createElement(b,null,i.a.createElement(f,{href:A.github,target:"_blank"},"Github Profile")),e&&i.a.createElement(y,{isOpen:e},i.a.createElement(v,{href:"#about",onClick:()=>{t(!e)}},"About"),i.a.createElement(v,{href:"#skills",onClick:()=>{t(!e)}},"Skills"),i.a.createElement(v,{href:"#experience",onClick:()=>{t(!e)}},"Experience"),i.a.createElement(v,{href:"#projects",onClick:()=>{t(!e)}},"Projects"),i.a.createElement(v,{href:"#education",onClick:()=>{t(!e)}},"Education"),i.a.createElement(f,{style:{padding:"10px 16px",background:""+a.primary,color:"white",width:"max-content"},href:A.github,target:"_blank"},"Github Profile"))))};a(112);const D=l.b.div`
    width:600px;
    height: 500px;
`;var F=()=>i.a.createElement(D,null,i.a.createElement("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{opacity:"0.15"},i.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),i.a.createElement("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),i.a.createElement("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})),i.a.createElement("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737"},i.a.createElement("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)"},i.a.createElement("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_2"}))),i.a.createElement("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)"},i.a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737"},i.a.createElement("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)"},i.a.createElement("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737"},i.a.createElement("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_1"}))),i.a.createElement("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)"},i.a.createElement("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_1"}))),i.a.createElement("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737"},i.a.createElement("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)"},i.a.createElement("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7"},i.a.createElement("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)"},i.a.createElement("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto"},i.a.createElement("mpath",{xlinkHref:"#path_0"}))),i.a.createElement("defs",null,i.a.createElement("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},i.a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),i.a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),i.a.createElement("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},i.a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),i.a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),i.a.createElement("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},i.a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),i.a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#945DD6"}),i.a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#945DD6"}),i.a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#F46737"}),i.a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#F46737"}),i.a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#F46737"}),i.a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#13ADC7"}),i.a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#13ADC7"}),i.a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#945DD6"}),i.a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),i.a.createElement("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#13ADC7"}),i.a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})))));const B=l.b.div`
  background: ${e=>{let{theme:t}=e;return t.card_light}};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`,J=l.b.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`,M=l.b.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`,P=l.b.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,R=l.b.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`,L=l.b.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${e=>{let{theme:t}=e;return t.primary}};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`,O=l.b.div`
  font-weight: 700;
  font-size: 50px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`,V=l.b.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`,G=l.b.span`
  color: ${e=>{let{theme:t}=e;return t.primary}};
  cursor: pointer;
`,N=l.b.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${e=>{let{theme:t}=e;return t.text_primary+95}};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`,T=l.b.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${e=>{let{theme:t}=e;return t.white}};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;var H=a(77),U=a.n(H),Z=a(78),K=a.n(Z);var q=()=>i.a.createElement("div",{id:"about"},i.a.createElement(B,null,i.a.createElement(J,null,i.a.createElement(F,null)),i.a.createElement(M,null,i.a.createElement(P,{id:"Left"},i.a.createElement(O,null,"Hi, I am ",i.a.createElement("br",null)," ",A.name),i.a.createElement(V,null,"I am a",i.a.createElement(G,null,i.a.createElement(K.a,{options:{strings:A.roles,autoStart:!0,loop:!0}}))),i.a.createElement(N,null,A.description),i.a.createElement(T,{href:A.resume,target:"display"},"Check Resume")),i.a.createElement(R,{id:"Right"},i.a.createElement(L,{src:U.a,alt:"hero-image"})))));const Y=l.b.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`,Q=l.b.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`,W=l.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`,X=l.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`,_=l.b.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`,$=l.b.div`
  width: 100%;
  max-width: 500px;
  background: ${e=>{let{theme:t}=e;return t.card}};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`,ee=l.b.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_secondary}};
  margin-bottom: 20px;
  text-align: center;
`,te=l.b.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,ae=l.b.div`
  font-size: 16px;
  font-weight: 400;
  color: ${e=>{let{theme:t}=e;return t.text_primary+80}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_primary+80}};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`,ne=l.b.img`
  width: 24px;
  height: 24px;
`;var ie=()=>i.a.createElement(Y,{id:"skills"},i.a.createElement(Q,null,i.a.createElement(W,null,"Skills"),i.a.createElement(X,null,"Here are some of my skills on which I have been working on for the past 2 years."),i.a.createElement(_,null,C.map(e=>i.a.createElement($,null,i.a.createElement(ee,null,e.title),i.a.createElement(te,null,e.skills.map(e=>i.a.createElement(ae,null,i.a.createElement(ne,{src:e.image}),e.name))))))));const re=l.b.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`,oe=l.b.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,le=l.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,pe=l.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,de=l.b.div`
    display: flex;
    border: 1.5px solid ${e=>{let{theme:t}=e;return t.primary}};
    color: ${e=>{let{theme:t}=e;return t.primary}};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,se=l.b.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${e=>{let{active:t,theme:a}=e;return t&&`\n    background: ${a.primary+20};\n    `}}
    &:hover {
        background: ${e=>{let{theme:t}=e;return t.primary+8}};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`,ce=l.b.div`
    width: 1.5px;
    background: ${e=>{let{theme:t}=e;return t.primary}};
`,me=l.b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`,he=l.b.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${e=>{let{theme:t}=e;return t.white}};
    color: ${e=>{let{theme:t}=e;return t.text_black}};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`,ge=l.b.div`
    width: 330px;
    height: 490px;
    background-color: ${e=>{let{theme:t}=e;return t.card}};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${he} {
        display: block;
    }
`,xe=l.b.img`
    width: 100%;
    height: 180px;
    background-color: ${e=>{let{theme:t}=e;return t.white}};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`,ue=l.b.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`,fe=l.b.span`
    font-size: 12px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.primary}};
    background-color: ${e=>{let{theme:t}=e;return t.primary+15}};
    padding: 2px 8px;
    border-radius: 10px;
`,be=l.b.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`,we=l.b.div`
    font-size: 20px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,ye=l.b.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+80}};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,ve=l.b.div`
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`,Ee=l.b.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`,ke=l.b.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${e=>{let{theme:t}=e;return t.white}};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${e=>{let{theme:t}=e;return t.card}};
`;var Ae=e=>{var t,a;let{project:n,setOpenModal:r}=e;return i.a.createElement(ge,{onClick:()=>r({state:!0,project:n})},i.a.createElement(xe,{src:n.image}),i.a.createElement(ue,null,null===(t=n.tags)||void 0===t?void 0:t.map((e,t)=>i.a.createElement(fe,null,e))),i.a.createElement(be,null,i.a.createElement(we,null,n.title),i.a.createElement(ye,null,n.date),i.a.createElement(ve,null,n.description)),i.a.createElement(Ee,null,null===(a=n.member)||void 0===a?void 0:a.map(e=>i.a.createElement(ke,{src:e.img}))))};var Ce=e=>{let{openModal:t,setOpenModal:a}=e;const[r,o]=Object(n.useState)("all");return i.a.createElement(re,{id:"projects"},i.a.createElement(oe,null,i.a.createElement(le,null,"Projects"),i.a.createElement(pe,null,"I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects."),i.a.createElement(de,null,"all"===r?i.a.createElement(se,{active:!0,value:"all",onClick:()=>o("all")},"All"):i.a.createElement(se,{value:"all",onClick:()=>o("all")},"All"),i.a.createElement(ce,null),"web app"===r?i.a.createElement(se,{active:!0,value:"web app",onClick:()=>o("web app")},"WEB APP'S"):i.a.createElement(se,{value:"web app",onClick:()=>o("web app")},"WEB APP'S"),i.a.createElement(ce,null),"android app"===r?i.a.createElement(se,{active:!0,value:"android app",onClick:()=>o("android app")},"ANDROID APP'S"):i.a.createElement(se,{value:"android app",onClick:()=>o("android app")},"ANDROID APP'S"),i.a.createElement(ce,null),"machine learning"===r?i.a.createElement(se,{active:!0,value:"machine learning",onClick:()=>o("machine learning")},"MACHINE LEARNING"):i.a.createElement(se,{value:"machine learning",onClick:()=>o("machine learning")},"MACHINE LEARNING")),i.a.createElement(me,null,"all"===r&&S.map(e=>i.a.createElement(Ae,{project:e,openModal:t,setOpenModal:a})),S.filter(e=>e.category==r).map(e=>i.a.createElement(Ae,{project:e,openModal:t,setOpenModal:a})))))},ze=a(85),Ie=a(171);const Se=l.b.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`,je=l.b.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`,De=l.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,Fe=l.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,Be=l.b.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${e=>{let{theme:t}=e;return t.card}};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`,Je=l.b.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
`,Me=l.b.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_secondary}};
  outline: none;
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,Pe=l.b.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${e=>{let{theme:t}=e;return t.text_secondary}};
  outline: none;
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.primary}};
  }
`,Re=l.b.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  font-size: 18px;
  font-weight: 600;
`;var Le=()=>{const[e,t]=i.a.useState(!1),a=Object(n.useRef)();return i.a.createElement(Se,null,i.a.createElement(je,null,i.a.createElement(De,null,"Contact"),i.a.createElement(Fe,null,"Feel free to reach out to me for any questions or opportunities!"),i.a.createElement(Be,{ref:a,onSubmit:e=>{e.preventDefault(),ze.a.sendForm("service_tox7kqs","template_nv7k7mj",a.current,"SybVGsYS52j2TfLbi").then(e=>{t(!0),a.current.reset()},e=>{console.log(e.text)})}},i.a.createElement(Je,null,"Email Me \ud83d\ude80"),i.a.createElement(Me,{placeholder:"Your Email",name:"from_email"}),i.a.createElement(Me,{placeholder:"Your Name",name:"from_name"}),i.a.createElement(Me,{placeholder:"Subject",name:"subject"}),i.a.createElement(Pe,{placeholder:"Message",rows:"4",name:"message"}),i.a.createElement(Re,{type:"submit",value:"Send"})),i.a.createElement(Ie.a,{open:e,autoHideDuration:6e3,onClose:()=>t(!1),message:"Email sent successfully!",severity:"success"})))},Oe=a(80),Ve=a.n(Oe),Ge=a(81),Ne=a.n(Ge),Te=a(82),He=a.n(Te),Ue=a(83),Ze=a.n(Ue);const Ke=l.b.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`,qe=l.b.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
`,Ye=l.b.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${e=>{let{theme:t}=e;return t.primary}};
`,Qe=l.b.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`,We=l.b.a`
color: ${e=>{let{theme:t}=e;return t.text_primary}};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Xe=l.b.div`
  display: flex;
  margin-top: 1rem;
`,_e=l.b.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`,$e=l.b.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${e=>{let{theme:t}=e;return t.soft2}};
  text-align: center;
`;var et=function(){return i.a.createElement(Ke,null,i.a.createElement(qe,null,i.a.createElement(Ye,null,"Rishav Chanda"),i.a.createElement(Qe,null,i.a.createElement(We,{href:"#about"},"About"),i.a.createElement(We,{href:"#skills"},"Skills"),i.a.createElement(We,{href:"#experience"},"Experience"),i.a.createElement(We,{href:"#projects"},"Projects"),i.a.createElement(We,{href:"#education"},"Education")),i.a.createElement(Xe,null,i.a.createElement(_e,{href:A.facebook,target:"display"},i.a.createElement(Ve.a,null)),i.a.createElement(_e,{href:A.twitter,target:"display"},i.a.createElement(Ne.a,null)),i.a.createElement(_e,{href:A.linkedin,target:"display"},i.a.createElement(He.a,null)),i.a.createElement(_e,{href:A.insta,target:"display"},i.a.createElement(Ze.a,null))),i.a.createElement($e,null,"\xa9 2023 Rishav Chanda. All rights reserved.")))},tt=a(178),at=a(175),nt=a(179),it=a(181),rt=a(176),ot=a(180);const lt=l.b.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`,pt=l.b.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,dt=l.b.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`,st=l.b.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${lt}{
        display: flex;
    }

    &:hover ${dt}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`,ct=l.b.div`
    width: 100%;
    display: flex;
    gap: 12px
`,mt=l.b.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`,ht=l.b.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`,gt=l.b.div`
    font-size: 18px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`,xt=l.b.div`
    font-size: 14px;
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,ut=l.b.div`
    font-size: 12px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+80}};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,ft=l.b.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`,bt=l.b.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,wt=l.b.div`
    font-size: 15px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;var yt=e=>{var t;let{experience:a}=e;return i.a.createElement(st,null,i.a.createElement(ct,null,i.a.createElement(mt,{src:a.img}),i.a.createElement(ht,null,i.a.createElement(gt,null,a.role),i.a.createElement(xt,null,a.company),i.a.createElement(ut,null,a.date))),i.a.createElement(pt,null,(null===a||void 0===a?void 0:a.desc)&&i.a.createElement(dt,null,null===a||void 0===a?void 0:a.desc),(null===a||void 0===a?void 0:a.skills)&&i.a.createElement(i.a.Fragment,null,i.a.createElement("br",null),i.a.createElement(ft,null,i.a.createElement("b",null,"Skills:"),i.a.createElement(bt,null,null===a||void 0===a||null===(t=a.skills)||void 0===t?void 0:t.map((e,t)=>i.a.createElement(wt,null,"\u2022 ",e)))))),a.doc&&i.a.createElement("a",{href:a.doc,target:"new"},i.a.createElement(lt,{src:a.doc})))};const vt=l.b.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`,Et=l.b.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,kt=l.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,At=l.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,Ct=l.b.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;var zt=()=>i.a.createElement(vt,{id:"experience"},i.a.createElement(Et,null,i.a.createElement(kt,null,"Experience"),i.a.createElement(At,null,"My work experience as a software engineer and working on different companies and projects."),i.a.createElement(Ct,null,i.a.createElement(tt.a,null,z.map((e,t)=>i.a.createElement(at.a,null,i.a.createElement(nt.a,null,i.a.createElement(ot.a,{variant:"outlined",color:"secondary"}),t!==z.length-1&&i.a.createElement(it.a,{style:{background:"#854CE6"}})),i.a.createElement(rt.a,{sx:{py:"12px",px:2}},i.a.createElement(yt,{experience:e}))))))));const It=l.b.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`,St=l.b.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,jt=l.b.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`,Dt=l.b.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${It}{
        display: flex;
    }

    &:hover ${jt}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
    border: 0.1px solid #854CE6;
`,Ft=l.b.div`
    width: 100%;
    display: flex;
    gap: 12px
`,Bt=l.b.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`,Jt=l.b.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`,Mt=l.b.div`
    font-size: 18px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary+99}};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`,Pt=l.b.div`
    font-size: 14px;
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,Rt=l.b.div`
    font-size: 12px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+80}};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`,Lt=l.b.div`
    font-size: 14px;
    font-weight: 500;
    color: ${e=>{let{theme:t}=e;return t.text_secondary+99}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;var Ot=e=>{let{education:t}=e;return i.a.createElement(Dt,null,i.a.createElement(Ft,null,i.a.createElement(Bt,{src:t.img}),i.a.createElement(Jt,null,i.a.createElement(Mt,null,t.school),i.a.createElement(Pt,null,t.degree),i.a.createElement(Rt,null,t.date))),i.a.createElement(Lt,null,i.a.createElement("b",null,"Grade: "),t.grade),i.a.createElement(St,null,i.a.createElement(jt,null,t.desc)))};const Vt=l.b.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`,Gt=l.b.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,Nt=l.b.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,Tt=l.b.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,Ht=l.b.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;var Ut=()=>i.a.createElement(Vt,{id:"education"},i.a.createElement(Gt,null,i.a.createElement(Nt,null,"Education"),i.a.createElement(Tt,null,"My education has been a journey of self-discovery and growth. My educational details are as follows."),i.a.createElement(Ht,null,i.a.createElement(tt.a,null,I.map((e,t)=>i.a.createElement(at.a,null,i.a.createElement(rt.a,{sx:{py:"12px",px:2}},i.a.createElement(Ot,{education:e})),i.a.createElement(nt.a,null,i.a.createElement(ot.a,{variant:"outlined",color:"secondary"}),t!==z.length&&i.a.createElement(it.a,{style:{background:"#854CE6"}})))))))),Zt=a(168),Kt=a(169),qt=a(170),Yt=a(172);const Qt=l.b.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`,Wt=l.b.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${e=>{let{theme:t}=e;return t.card}};
color: ${e=>{let{theme:t}=e;return t.text_primary}};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
`,Xt=l.b.div`
  font-size: 28px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.text_primary}};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`,_t=l.b.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_secondary}};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`,$t=l.b.div`
    font-size: 16px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`,ea=l.b.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`,ta=l.b.div`
    font-size: 20px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`,aa=l.b.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`,na=l.b.div`
    font-size: 14px;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.primary}};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${e=>{let{theme:t}=e;return t.primary+20}};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`,ia=l.b.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`,ra=l.b.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,oa=l.b.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`,la=l.b.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`,pa=l.b.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`,da=l.b.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${e=>{let{theme:t}=e;return t.text_primary}};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${e=>{let{theme:t}=e;return t.primary}};
    ${e=>{let{dull:t,theme:a}=e;return t&&`\n        background-color: ${a.bgLight};\n        color: ${a.text_secondary};\n        &:hover {\n            background-color: ${e=>{let{theme:t}=e;return t.bg+99}};\n        }\n    `}}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${e=>{let{theme:t}=e;return t.primary+99}};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;var sa=e=>{let{openModal:t,setOpenModal:a}=e;const n=null===t||void 0===t?void 0:t.project;return i.a.createElement(Yt.a,{open:!0,onClose:()=>a({state:!1,project:null})},i.a.createElement(Qt,null,i.a.createElement(Wt,null,i.a.createElement(Zt.a,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer"},onClick:()=>a({state:!1,project:null})}),i.a.createElement(ea,{src:null===n||void 0===n?void 0:n.image}),i.a.createElement(Xt,null,null===n||void 0===n?void 0:n.title),i.a.createElement(_t,null,n.date),i.a.createElement(aa,null,null===n||void 0===n?void 0:n.tags.map(e=>i.a.createElement(na,null,e))),i.a.createElement($t,null,null===n||void 0===n?void 0:n.description),n.member&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ta,null,"Members"),i.a.createElement(ia,null,null===n||void 0===n?void 0:n.member.map(e=>i.a.createElement(ra,null,i.a.createElement(oa,{src:e.img}),i.a.createElement(la,null,e.name),i.a.createElement("a",{href:e.github,target:"new",style:{textDecoration:"none",color:"inherit"}},i.a.createElement(Kt.a,null)),i.a.createElement("a",{href:e.linkedin,target:"new",style:{textDecoration:"none",color:"inherit"}},i.a.createElement(qt.a,null)))))),i.a.createElement(pa,null,i.a.createElement(da,{dull:!0,href:null===n||void 0===n?void 0:n.github,target:"new"},"View Code"),i.a.createElement(da,{href:null===n||void 0===n?void 0:n.webapp,target:"new"},"View Live App")))))};const ca=l.b.div`
  background-color: ${e=>{let{theme:t}=e;return t.bg}};
  width: 100%;
  overflow-x: hidden;
`,ma=l.b.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;var ha=function(){const[e,t]=Object(n.useState)(!0),[a,r]=Object(n.useState)({state:!1,project:null});return console.log(a),i.a.createElement(l.a,{theme:e?p:d},i.a.createElement(s.a,null,i.a.createElement(j,null),i.a.createElement(ca,null,i.a.createElement(q,null),i.a.createElement(ma,null,i.a.createElement(ie,null),i.a.createElement(zt,null)),i.a.createElement(Ce,{openModal:a,setOpenModal:r}),i.a.createElement(ma,null,i.a.createElement(Ut,null),i.a.createElement(Le,null)),i.a.createElement(et,null),a.state&&i.a.createElement(sa,{openModal:a,setOpenModal:r}))))};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ha,null)))},77:function(e,t,a){e.exports=a.p+"static/media/HeroImage.9ea3e4b6.jpg"}},[[102,1,2]]]);
//# sourceMappingURL=main.824929ea.chunk.js.map