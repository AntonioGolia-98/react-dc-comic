const Navbar = () => {
    const links = [
        { id: 1, text: "CHARACHET", url: "#", current: false },
        { id: 2, text: "COMICS", url: "#", current: true },
        { id: 3, text: "MOVIS", url: "#", current: false },
        { id: 4, text: "TV", url: "#", current: false },
        { id: 5, text: "GAMES", url: "#", current: false },
        { id: 6, text: "COLLECTIBLES", url: "#", current: false },
        { id: 7, text: "VIDEOS", url: "#", current: false },
        { id: 8, text: "FANS", url: "#", current: false },
        { id: 9, text: "NEWS", url: "#", current: false },
        { id: 10, text: "SHOP", url: "#", current: false }
    ]


    const linkList = links.map(links => {
        return (
            <li key={links.id}>
                <a href={links.url}>
                    {links.text}
                </a>
            </li>
        )
    });

    return (
        <nav>
            <ul>
                {linkList}
            </ul>
        </nav >
    )
}

export default Navbar