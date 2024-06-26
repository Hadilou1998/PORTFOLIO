export default function Skills() {
    const listSkills = [
        {
            name: "Symfony",
            image: "https://api.iconify.design/logos:symfony.svg?color=%23ffffff",
            desc: "Framework PHP for modern and robust web applications",
        },
        {
            name: "Adonis JS",
            image: "https://api.iconify.design/logos:adonisjs.svg?color=%23ffffff",
            desc: "Node FullStack Framework for modern and robust web applications",
        },
        {
            name: "React JS",
            image: "https://api.iconify.design/logos:react.svg?color=%23ffffff",
            desc: "JS Library for building UI web applications",
        },
        {
            name: "DevOps",
            image: "https://api.iconify.design/logos:git-icon.svg?color=%23ffffff",
            desc: "CI/CD with GitHub Action, VPS mounting and administration",
        },
    ];
    return (
        <section className="flex gap-5 px-5 py-10">
            <div className="w-1/3">
                <h1 className="mb-5 text-3x1 font-bold text-white">Skillset</h1>
                <p className="leading-relaxed text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dignissimos sed sint incidunt accusamus officiis repellat dolorum 
                numquam voluptate. Reprehenderit, sapiente laboriosam tenetur eligendi omnis nulla mollitia voluptatem sint dolorem?</p>
            </div>
            <ul className="grid w-2/3 grid-cols-2">
                {
                    listSkills.map((skill) => (
                        <li key={ skill.name }>
                            <img
                                className="transition ease-in-out hover:scale-125"
                                src={ skill.image } alt={ skill.name + " logo "} width={ 32 } 
                            />
                            <h3 className="text-lg font-semibold text-white">{ skill.name }</h3>
                            <p className="text-slate-600">{ skill.desc }</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}