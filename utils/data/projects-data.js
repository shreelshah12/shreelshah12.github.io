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
        tools: ['Python', 'GraphQL', "SQL", "Flutter", "Android", "PyTorch", "TensorFlow", "Git"],
        role: 'AI/ML Data Scientist',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Deloitte',
        description: '',
        tools: ['Python', 'SQL', 'MongoDB', 'R', 'Amazon RDS', 'Amazon S3', 'PowerBI', 'Tableau'],
        code: '',
        role: 'Software Engineer, Intern',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Verizon',
        description: "",
        tools: ['Python', 'PySpark', 'SQL', 'Hadoop', 'TensorFlow', '5G', 'PowerBI'],
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