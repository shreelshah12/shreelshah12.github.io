import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Deloitte',
        description: "Working as a backend software and data engineer to build out complex data pipelines using SSIS, SQL, and ETL. Migrating separate workflows into automated ETL processes to increase runtime and operational efficiency and ingest data from 40+ sources. Also architecting microservice applications and scalable API's focusing on critical cybersecurity vulnerability scans/threats and machine learning based tools.",
        tools: ['Python', 'FastAPI', 'Flask', 'Postman', 'SQL', 'SSIS', 'Powershell', 'C#', 'Azure', 'Git'],
        role: 'Software Data Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Nittany AI Alliance',
        description: '',
        tools: ['NextJS', 'Tailwind CSS', "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'AI/ML Data Scientist',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Deloitte',
        description: '',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Software Engineer, Intern',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Verizon',
        description: "",
        tools: ['NextJS', 'Redux', 'Sun Editor'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Predictive Data Scientist, Intern',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },