(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],[,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"institution":{"name":"BeCode","city":"Brussels"},"startDate":"2021-01-01","endDate":"2021-07-31","type":"Web Development - Apprenticeship","skills":[{"type":"front-end","technologies":["html","css","bootstrap","javascript","vue"]},{"type":"back-end","technologies":["php","laravel"]},{"type":"database","technologies":["mysql"]},{"type":"versioning system","technologies":["git"]},{"type":"hosting platforms","technologies":["github"]}]},{"institution":{"name":"\u201eAlexandru Ioan Cuza\u201d University","city":"Iasi"},"startDate":"2011-10-01","endDate":"2013-07-31","type":"Master in Children\'s Rights","skills":[]},{"institution":{"name":"\u201eAlexandru Ioan Cuza\u201d University","city":"Iasi"},"startDate":"2008-10-01","endDate":"2011-07-31","type":"Bachelor\'s Degree in Social Work","skills":[]},{"institution":{"name":"Adults Qualification Center","city":"Iasi"},"startDate":"2012-01-01","endDate":"2012-03-31","type":"Basic Accounting","skills":[]},{"institution":{"name":"Ecdl Romania","city":"Suceava"},"startDate":"2008-01-01","endDate":"2008-12-31","type":"European Computer Driving Licence Core","skills":[{"type":"other","technologies":["word","power point","excel","access","outlook"]}]}]')},function(e){e.exports=JSON.parse('[{"company":{"name":"Climact","city":"Louvain-la-Neuve"},"startDate":"2021-06-01","endDate":"2021-11-31","title":"Front-End Developer Intern","tasks":["Implemented new features on the website using libraries like React, Redux and ApexCharts","Improved existing features and made the website more user friendly","Extended the knowledge on Git workflow using Bitbucket","Managed tasks with Jira reporting tool","Learned how to work with the Agile methodology"],"skills":[{"type":"front-end","technologies":["html","css","javascript","react","redux"]},{"type":"versioning system","technologies":["git"]},{"type":"project management","technologies":["jira"]},{"type":"hosting platforms","technologies":["bitbucket"]},{"type":"other","technologies":["apex charts"]}],"description":"The application developed at Climact can be found at: https://pathwaysexplorer.climact.com"},{"company":{"name":"Harte Hanks","city":"Iasi"},"startDate":"2014-11-01","endDate":"2020-02-31","title":"Data Optimization Specialist","tasks":["Became familiarized with SQL database and queries, used for retrieving and manipulating data","Obtained better attention to details and time management, while making sure to maintain data quality and high productivity"],"skills":[{"type":"other","technologies":["siebel","excel","sql"]}],"description":""},{"company":{"name":"Gfk","city":"Iasi"},"startDate":"2014-03-01","endDate":"2016-04-31","title":"Social Media Intelligence Analyst","tasks":["Improved analytical sensitivity by evaluating and rating relevant online media channels (Blogs, eCommerce, Forum, Micro Blogs, News, Social Nets, Video and Web)"],"skills":[],"description":""},{"company":{"name":"Gfk","city":"Iasi"},"startDate":"2014-03-01","endDate":"2014-11-31","title":"Data Processing Assistant","tasks":["Performed quality check to increase the effectiveness and efficiency of the database and trained new employees","Developed collaboration skills and contributed to team efforts to deliver expected results"],"skills":[],"description":""}]')},function(e){e.exports=JSON.parse('{"firstName":"Adriana","lastName":"Lazurca","adreess":{"street":"Chauss\xe9e Saint-Pierre 240","postalCode":1040,"city":"Brussels"},"mail":"adrianar.lazurca@gmail.com","mobile":465448696,"jobTitle":"Front-End Developer","about":"I\'m Adriana! My journey on the IT world started when I came to Brussels, at the beginning of 2020. After some years working in another area, I wanted to try a more interesting path, and I was lucky enough to find BeCode, which proposed an intensive training in web development.","languages":[{"name":"romanian","level":"native"},{"name":"english","level":"fluent"},{"name":"portuguese","level":"fluent"},{"name":"spanish","level":"fluent"},{"name":"french","level":"elementary"}]}')},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),c=n(16),s=n.n(c),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))},l=(n(22),n(7)),r=n(13),d=n(14),u=n(4),j=(n(23),n(1)),b=function(e){var t=e.job;return Object(j.jsx)("div",{className:"job",children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:t.title}),Object(j.jsx)("ul",{children:t.tasks.map((function(e,n){return Object(j.jsx)("li",{children:e},"job-".concat(t.company.name,"-").concat(n))}))})]})})},m=function(e){var t=e.education;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h2",{children:t.type})})},h=(n(25),function(e){var t=e.jobs,n=e.education,i=Object(a.useState)("left"),c=Object(u.a)(i,2),s=c[0];c[1];return Object(j.jsxs)("div",{className:"timeline",children:[t&&t.map((function(e,t){return Object(j.jsx)("div",{id:"experience",className:"timeline__card ".concat("left"===s?"timeline__card--left":"timeline__card--right"),children:Object(j.jsx)("div",{className:"timeline__card-content",children:Object(j.jsx)(b,{job:e})})},"job-".concat(e.title,"-").concat(t))})),n&&n.map((function(e,t){return Object(j.jsx)("div",{id:"education",className:"timeline__card ".concat("left"===s?"timeline__card--left":"timeline__card--right"),children:Object(j.jsx)("div",{className:"timeline__card-content",children:Object(j.jsx)(m,{education:e})})},"job-".concat(e.type,"-").concat(t))}))]})}),p=function(e){var t=e.personalInfo;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"Hello!"}),Object(j.jsx)("p",{children:t&&t.about})]})},x=n(11),g=(n(26),function(e){var t,n=e.jobs,a=e.education,i=n.map((function(e){return e.skills})),c=a.map((function(e){return e.skills})),s=(t=[]).concat.apply(t,Object(x.a)(i).concat(Object(x.a)(c))),o=[];return s.forEach((function(e){var t=o.find((function(t){return t.type===e.type}));if(t){var n=t.technologies.concat(e.technologies);t.technologies=Object(x.a)(new Set(n))}else o.push(e)})),Object(j.jsx)("div",{children:o&&o.map((function(e,t){return Object(j.jsx)("p",{children:"".concat(e.type," : ").concat(e.technologies)},"skill-".concat(e.type,"-").concat(t))}))})}),f=(n(27),function(e){var t=e.personalInfo;return Object(j.jsx)(a.Fragment,{children:t&&t.languages.map((function(e,t){return Object(j.jsxs)("div",{className:"language",children:[Object(j.jsx)("p",{className:"language__name",children:e.name}),Object(j.jsx)("span",{children:" ".concat(e.level)})]},"language-".concat(e.name,"-").concat(t))}))})}),O=(n(28),["about","skills","languages"]),v=function(e){var t=e.personalInfo,n=e.jobs,i=e.education,c=Object(a.useState)("about"),s=Object(u.a)(c,2),o=s[0],l=s[1],r="about"===o,d="skills"===o,b="languages"===o;return Object(j.jsx)("div",{className:"carousel",children:Object(j.jsxs)("div",{className:"carousel__card",children:[Object(j.jsxs)("div",{className:"carousel__card-content",children:[r&&Object(j.jsx)(p,{personalInfo:t}),d&&Object(j.jsx)(g,{jobs:n,education:i}),b&&Object(j.jsx)(f,{personalInfo:t}),Object(j.jsx)("a",{className:"carousel__prev",onClick:function(){var e=O.indexOf(o),t=0===e?O.length-1:e-1,n=O[t];l(n)},children:"<"}),Object(j.jsx)("a",{className:"carousel__next",onClick:function(){var e=O.indexOf(o),t=e===O.length-1?0:e+1,n=O[t];l(n)},children:">"})]}),Object(j.jsx)("div",{className:"carousel__card-buttons",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"button ".concat(r?"button--active":"button--inactive"),onClick:function(){return l("about")},children:"About"}),Object(j.jsx)("li",{className:"button ".concat(d?"button--active":"button--inactive"),onClick:function(){return l("skills")},children:"Skills"}),Object(j.jsx)("li",{className:"button ".concat(b?"button--active":"button--inactive"),onClick:function(){return l("languages")},children:"Languages"})]})})]})})},y=n(6),k=n(17),N=n(9),_=(n(32),function(){return Object(j.jsx)("div",{className:"contact",children:Object(j.jsxs)("ul",{className:"contact__list",children:[Object(j.jsxs)("li",{children:[Object(j.jsxs)("a",{href:"https://www.github.com/adriana-lazurca",target:"_blank",children:[" ",Object(j.jsx)(y.a,{color:"black","data-tip":"adriana-lazurca"})]}),Object(j.jsx)(N.a,{place:"bottom"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("a",{href:"https://www.linkedin.com/in/adriana-lazurca",target:"_blank",children:Object(j.jsx)(y.b,{color:"black","data-tip":"adriana-lazurca"})}),Object(j.jsx)(N.a,{place:"bottom"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(k.a,{color:"black","data-tip":"Adriana Lazurca#5360"}),Object(j.jsx)(N.a,{place:"bottom"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(y.c,{color:"black","data-tip":"adrianar.lazurca@gmail.com"}),Object(j.jsx)(N.a,{place:"bottom"})]})]})})}),w=n.p+"static/media/adriana-big.69a159d6.jpg",I=(n(33),n(34),n(35),function(e){var t=e.personalInfo,n="".concat(t.firstName," ").concat(t.lastName).toUpperCase();return Object(j.jsxs)("div",{className:"introduction",children:[Object(j.jsx)("div",{className:"introduction__img",children:Object(j.jsx)("img",{src:w,alt:"adriana"})}),Object(j.jsxs)("div",{className:"introduction__title",children:[Object(j.jsx)("p",{className:"text-2xl",children:n}),Object(j.jsx)("p",{className:"text-lg",children:t.jobTitle})]})]})}),D=n(15),C=(n(36),function(e){var t=e.jobs,n=e.education;return Object(j.jsxs)("div",{className:"presentation",id:"home",children:[Object(j.jsx)(I,{personalInfo:D}),Object(j.jsx)(v,{personalInfo:D,jobs:t,education:n}),Object(j.jsx)(_,{})]})}),S=n(10),A=(n(37),function(){return Object(j.jsx)("div",{className:"navigation",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(S.a,{smooth:!0,to:"#home",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(S.a,{smooth:!0,to:"#experience",children:"Experience"})}),Object(j.jsx)("li",{children:Object(j.jsx)(S.a,{smooth:!0,to:"#education",children:"Education"})})]})})}),B=(n(38),function(){return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"app__content",children:[Object(j.jsx)(C,{jobs:d,education:r}),Object(j.jsx)(h,{jobs:d,education:r})]}),Object(j.jsx)(A,{})]})})});s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),o()}],[[39,1,2]]]);
//# sourceMappingURL=main.6d38ba32.chunk.js.map