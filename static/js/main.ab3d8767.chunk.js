(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"firstName":"Adriana","lastName":"Lazurca","adreess":{"street":"Chauss\xe9e Saint-Pierre 240","postalCode":1040,"city":"Brussels"},"mail":"adrianar.lazurca@gmail.com","mobile":465448696,"jobTitle":"Front-End Developer","about":"About me: I\'m Adriana Lazurca Correia from Romania! I\'m Adriana Lazurca Correia from Romania! I\'m Adriana Lazurca Correia from Romania!I\'m Adriana Lazurca Correia from Romania!","proficiencies":[{"type":"front-end","technologies":["html","css","bootstrap","javascript","react","redux","vue"]},{"type":"back-end","technologies":["php","laravel"]},{"type":"database","technologies":["mysql"]},{"type":"versioning system","technologies":["git"]},{"type":"project management","technologies":["jira"]},{"type":"hosting platforms","technologies":["github","Bitbucket "]}],"languages":[{"name":"romanian","level":"native"},{"name":"english","level":"fluent"},{"name":"portuguese","level":"fluent"},{"name":"spanish","level":"fluent"},{"name":"french","level":"elementary"}]}')},,function(e){e.exports=JSON.parse('[{"id":1,"company":{"name":"Climact","city":"Louvain-la-Neuve"},"startDate":"2021-06-01","endDate":"2021-11-31","title":"Front-End Developer Intern","tasks":["Implemented new features on the website using libraries like React, Redux and ApexCharts","Improved existing features and made the website more user friendly","Extended the knowledge on Git workflow using Bitbucket","Managed tasks with Jira reporting tool","Learned how to work with the Agile methodology"],"technologies":["html","css","javascript","react","redux","apexcharts","jira","git","bitbucket"],"description":"The application developed at Climact can be found at: https://pathwaysexplorer.climact.com"},{"id":2,"company":{"name":"Harte Hanks","city":"Iasi"},"startDate":"2014-11-01","endDate":"2020-02-31","title":"Data Optimization Specialist","tasks":["Became familiarized with SQL database and queries, used for retrieving and manipulating data","Obtained better attention to details and time management, while making sure to maintain data quality and high productivity"],"technologies":["sql","siebel","excel"],"description":""},{"id":3,"company":{"name":"Gfk","city":"Iasi"},"startDate":"2014-03-01","endDate":"2016-04-31","title":"Social Media Intelligence Analyst","tasks":["Improved analytical sensitivity by evaluating and rating relevant online media channels (Blogs, eCommerce, Forum, Micro Blogs, News, Social Nets, Video and Web)"],"technologies":[],"description":""},{"id":4,"company":{"name":"Gfk","city":"Iasi"},"startDate":"2014-03-01","endDate":"2014-11-31","title":"Data Processing Assistant","tasks":["Performed quality check to increase the effectiveness and efficiency of the database and trained new employees","Developed collaboration skills and contributed to team efforts to deliver expected results"],"technologies":[],"description":""}]')},function(e){e.exports=JSON.parse('[{"id":1,"institution":{"name":"BeCode","city":"Brussels"},"startDate":"2021-01-01","endDate":"2021-07-31","type":"Web Development - Apprenticeship","technologies":["html","css","bootstrap","javascript","react","redux","vue","php","laravel","mysql","git"]},{"id":2,"institution":{"name":"\u201eAlexandru Ioan Cuza\u201d University","city":"Iasi"},"startDate":"2011-10-01","endDate":"2013-07-31","type":"Master in Children\'s Rights","technologies":[]},{"id":3,"institution":{"name":"\u201eAlexandru Ioan Cuza\u201d University","city":"Iasi"},"startDate":"2008-10-01","endDate":"2011-07-31","type":"Bachelor\'s Degree in Social Work","technologies":[]},{"id":4,"institution":{"name":"Adults Qualification Center","city":"Iasi"},"startDate":"2012-01-01","endDate":"2012-03-31","type":"Basic Accounting","technologies":[]},{"id":5,"institution":{"name":"Ecdl Romania","city":"Suceava"},"startDate":"2008-01-01","endDate":"2008-12-31","type":"European Computer Driving Licence Core","technologies":["word","power point","excel","access","outlook"]}]')},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),c=i(5),s=i.n(c),r=(i(13),i(6)),o=i(7),l=i(4),d=i.p+"static/media/adriana-big.69a159d6.jpg",u=(i(14),i(15),i(16),i(0)),m=function(e){var t=e.personalInfo,i="".concat(t.firstName," ").concat(t.lastName).toUpperCase();return Object(u.jsxs)("div",{className:"introduction",children:[Object(u.jsx)("div",{className:"introduction__img",children:Object(u.jsx)("img",{src:d,alt:"adriana"})}),Object(u.jsxs)("div",{className:"introduction__title",children:[Object(u.jsx)("p",{className:"text-2xl",children:i}),Object(u.jsx)("p",{className:"text-lg",children:t.jobTitle})]})]})},j=i(8),h=function(e){var t=e.personalInfo;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{children:t&&t.about})})},p=(i(18),function(e){var t=e.personalInfo;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"Skills"}),t&&t.proficiencies.map((function(e){return Object(u.jsx)("p",{children:"".concat(e.type," : ").concat(e.technologies)},e.type)}))]})}),b=(i(19),function(e){var t=e.personalInfo;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"Languages"}),Object(u.jsx)("ul",{children:t&&t.languages.map((function(e){return Object(u.jsx)("li",{children:"".concat(e.name," - ").concat(e.level)},e.name)}))})]})}),x=(i(20),["about","skills","languages"]),f=function(e){var t=e.personalInfo,i=Object(a.useState)("about"),n=Object(j.a)(i,2),c=n[0],s=n[1],r="about"===c,o="skills"===c,l="languages"===c;return Object(u.jsx)("div",{className:"carousel",children:Object(u.jsxs)("div",{className:"carousel__card",children:[Object(u.jsxs)("div",{className:"carousel__card-content",children:[r&&Object(u.jsx)(h,{personalInfo:t}),o&&Object(u.jsx)(p,{personalInfo:t}),l&&Object(u.jsx)(b,{personalInfo:t}),Object(u.jsx)("a",{className:"carousel__prev",onClick:function(){var e=x.indexOf(c),t=0===e?x.length-1:e-1,i=x[t];s(i)},children:"<"}),Object(u.jsx)("a",{className:"carousel__next",onClick:function(){var e=x.indexOf(c),t=e===x.length-1?0:e+1,i=x[t];s(i)},children:">"})]}),Object(u.jsx)("div",{className:"carousel__card-buttons",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"button ".concat(r?"button--active":"button--inactive"),onClick:function(){return s("about")},children:"About"}),Object(u.jsx)("li",{className:"button ".concat(o?"button--active":"button--inactive"),onClick:function(){return s("skills")},children:"Skills"}),Object(u.jsx)("li",{className:"button ".concat(l?"button--active":"button--inactive"),onClick:function(){return s("languages")},children:"Languages"})]})})]})})},g=i(2),v=(i(21),function(){return Object(u.jsx)("div",{className:"contact",children:Object(u.jsxs)("ul",{className:"contact__list",children:[Object(u.jsx)("li",{children:Object(u.jsx)(g.a,{color:"black"})}),Object(u.jsx)("li",{children:Object(u.jsx)(g.b,{color:"black"})}),Object(u.jsx)("li",{children:Object(u.jsx)(g.c,{color:"black"})})]})})}),O=(i(22),function(){return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(m,{personalInfo:l}),Object(u.jsx)(f,{personalInfo:l}),Object(u.jsx)(v,{})]})}),N=(i(23),i(24),function(e){return Object(u.jsxs)("div",{className:"timeline",children:[Object(u.jsx)("div",{className:"timeline__card timeline__card--left",children:Object(u.jsxs)("div",{className:"timeline__card-content",children:[Object(u.jsx)("h2",{children:"INTERN FRONT-END"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."})]})}),Object(u.jsx)("div",{className:"timeline__card timeline__card--right",children:Object(u.jsxs)("div",{className:"timeline__card-content",children:[Object(u.jsx)("h2",{children:"INTERN FRONT-END"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."})]})}),Object(u.jsx)("div",{className:"timeline__card timeline__card--left",children:Object(u.jsxs)("div",{className:"timeline__card-content",children:[Object(u.jsx)("h2",{children:"INTERN FRONT-END"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."})]})}),Object(u.jsx)("div",{className:"timeline__card timeline__card--right",children:Object(u.jsxs)("div",{className:"timeline__card-content",children:[Object(u.jsx)("h2",{children:"INTERN FRONT-END"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."})]})})]})}),y=(i(25),function(){return Object(u.jsx)("div",{className:"navigation",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Home"}),Object(u.jsx)("li",{children:"Experience"}),Object(u.jsx)("li",{children:"Education"})]})})}),_=(i(26),function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("div",{className:"app__content",children:[Object(u.jsx)(O,{}),Object(u.jsx)(N,{jobs:r,education:o})]}),Object(u.jsx)(y,{})]})}),k=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,28)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),a(e),n(e),c(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),k()}],[[27,1,2]]]);
//# sourceMappingURL=main.ab3d8767.chunk.js.map