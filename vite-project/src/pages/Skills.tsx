export default function Skills() {
    const listSkills = [
        {
            name: "Symfony",
            image: "https://api.iconify.design/logo:react.svg?color=%23ffffff",
            desc: "Framework PHP for modern and robust web applications",
        },
        {
            name: "Adonis JS",
            image: "https://api.iconify.design/logo:react.svg?color=%23ffffff",
            desc: "Node FullStack Framework for modern and robust web applications",
        },
        {
            name: "React JS",
            image: "https://api.iconify.design/logo:react.svg?color=%23ffffff",
            desc: "JS Library for building UI web applications",
        },
        {
            name: "DevOps",
            image: "https://api.iconify.design/logo:react.svg?color=%23ffffff",
            desc: "CI/CD with GitHub Action, VPS mounting and administration",
        },
    ]
    return (
        <>
            <div className="">
                <h1>Skillset</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dignissimos sed sint incidunt accusamus officiis repellat dolorum 
                numquam voluptate. Reprehenderit, sapiente laboriosam tenetur eligendi omnis nulla mollitia voluptatem sint dolorem?</p>
            </div>
            <div className="">
                <div className="">
                    <img src="" alt="" />
                    <h3 className="">Titre</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dignissimos sed sint incidunt accusamus officiis repellat
                    dolorum numquam voluptate. Reprehenderit, sapiente laboriosam tenetur eligendi omnis nulla mollitia voluptatem sint dolorem?</p>
                </div>
            </div>
        </>
    )
}