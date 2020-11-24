export const projects = [
    {
        key: 'mttr',
        title: 'MetaTender',
        shortDesc: 'Tender search service',
        role: 'Full-Stack Developer',
        images: ['uhynw', 'whnuc', 'ysh1r'],
        fullDesc: [
            {style: {color: 'purple'}, text: 'Stack1:'},
            {style: {}, text: 'C#, ASP.NET MVC, js, alight.js, css/sass, html/razor, T-SQL, sphinx, MySQL'},
            {style: {}, text: ''},
            {style: {color: 'purple'}, text: 'Stack2:'},
            {style: {}, text: 'Stack1 + .NET Core, React.js, RabbitMQ, Typescript, NodeJS, IronRuby'},
            {style: {}, text: '--------------------'},
            {style: {}, text: 'Development and finalization of the MetaTender service and its components:'},
            {style: {}, text: '- Development of front-end service; SEO-optimization;'},
            {
                style: {},
                text: `- Development of back-end: 
                            gathering tenders, saving to the database, search using sphinx; 
                            development of internal CRM for managers, 
                            managers and partners of MetaTender, 
                            for working with clients (the entire transaction cycle); 
                            development of a full-fledged CRM for customers; 
                            Development of an Assistant to participate in tenders; 
                            participation in the development of tender analysis; 
                            the creation of an e-mail dispatcher for e-mail marketing;`,
            },
            {
                style: {},
                text: `- Development of CRM for managers and partners of MetaTender, 
                            to work with customers (the entire transaction cycle) 
                            on React.js + .NET Core 2.0 API + MySQL to replace the previous version (ASP.NET MVC);`,
            },
            {style: {}, text: '- Gathering (parsing) tenders (v1.0): ruby + IronRuby + .NET Framework + MySQL)'},
        ],
    },
    {
        key: 'jzine',
        title: 'J-zine',
        shortDesc: 'Tzniut fashion magazine',
        role: 'Co-founder, Developer',
        images: ['sfy7u', 'j57vi', 'lzfoa'],
        fullDesc: [
            {style: {color: 'purple'}, text: 'Stack:'},
            {style: {}, text: '.NET Core 2.0, MSSQL, RazorPages'},
            {style: {}, text: '--------------------'},
            {style: {}, text: 'Full-Stack Development'},
        ],
    },
    {
        key: 'crm',
        title: 'CRM',
        shortDesc: 'CRM for developers',
        role: 'Developer',
        images: ['crm_1'],
        fullDesc: [
            {style: {color: 'purple'}, text: 'Stack:'},
            {style: {}, text: '.NET Core, React.js'},
            {style: {}, text: '--------------------'},
            {style: {}, text: 'Development'},
        ],
    },
    {
        key: 'parser',
        title: 'Parser (v2.0)',
        shortDesc: 'Gathering tenders',
        role: 'Developer',
        images: ['code', 'co1'],
        fullDesc: [
            {style: {color: 'purple'}, text: 'Stack:'},
            {style: {}, text: 'Typescript, NodeJS, RabbitMQ, cheerio, request-async'},
            {style: {}, text: '--------------------'},
            {style: {}, text: 'In place of the old parser on the ruby came a new one on the Typescript, NodeJS & RabbitMQ'},
        ],
    },
];
