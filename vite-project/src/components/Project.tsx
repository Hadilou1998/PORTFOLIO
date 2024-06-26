export default function Project({ projects }: string) {
    const listProjects = [
        {
            image: "https://placehold.it/400",
            name: "e-commerce Sneakers",
            desc: "E-commerce shop for Sneaker Family, a brand new operator of the best and most seeking sneakers in the world.",
            techno: [
                {name: "All"},
                {name: "Symfony"},
                {name: "DevOps"},
            ],
        },
        {
            image: "https://placehold.it/400",
            name: "Blog Platform",
            desc: "A platform for bloggers to share their thoughts and ideas with the world.",
            techno: [
                {name: "All"},
                {name: "Adonis JS"},
                {name: "React"},
            ],
        },
        {
            image: "https://placehold.it/400",
            name: "Project Management Tool",
            desc: "A tool for managing projects, tasks, and teams.",
            techno: [
                {name: "All"},
                {name: "Symfony"},
                {name: "React"},
            ],
        },
        {
            image: "https://placehold.it/400",
            name: "Automated Testing Platform",
            desc: "A platform for automating testing processes in software development.",
            techno: [
                {name: "All"},
                {name: "Adonis JS"},
                {name: "DevOps"},
            ],
        },
        {
            image: "https://placehold.it/400",
            name: "Healthcare Management System",
            desc: "A system for managing patient records and healthcare services.",
            techno: [
                {name: "All"},
                {name: "Symfony"},
                {name: "DevOps"},
            ],
        },
        {
            image: "https://placehold.it/400",
            name: "E-learning Platform",
            desc: "A platform for online learning and education.",
            techno: [
                {name: "All"},
                {name: "Adonis JS"},
                {name: "React"},
            ],
        },
    ]
    
    console.log(listProjects);
    return (
        <>
            <div className="">
                {
                    listProjects.map((p) => (
                        <div className="">
                            <img src={p.image} alt="" className="" />
                            <h4 className="">{p.name}</h4>
                            <p className="">{p.desc}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}