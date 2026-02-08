const footerSection = [
    {
        id: 22,
        title: "DC COMICS",
        link: [
            { label: "Characters", href: "#" },
            { label: "Comics", href: "#" },
            { label: "Movies", href: "#" },
            { label: "TV", href: "#" },
            { label: "Games", href: "#" },
            { label: "Videos", href: "#" },
            { label: "News", href: "#" }
        ],
    },
    {
        id: 32,
        title: "SHOP",
        link: [
            { label: "Shop DC", href: "#" },
            { label: "Shop DC Collectibles", href: "#" },
        ],
    },
    {
        id: 42,
        title: "DC",
        link: [
            { label: "Term Of Use", href: "#" },
            { label: "Privacy policy", href: "#" },
            { label: "Add Choise", href: "#" },
            { label: "Adversiting", href: "#" },
            { label: "Jobs", href: "#" },
            { label: "Subscription", href: "#" },
            { label: "Talent Workshop", href: "#" },
            { label: "CPSC Certificates", href: "#" },
            { label: "Rating", href: "#" },
            { label: "Shop Help", href: "#" },
            { label: "Contacts US", href: "#" }
        ],
    },
    {
        id: 52,
        title: "SITES",
        link: [
            { label: "DC", href: "#" },
            { label: "MAD Magazine", href: "#" },
            { label: "DC Kids", href: "#" },
            { label: "DC Universe", href: "#" },
            { label: "DC Power Visa", href: "#" },
        ],
    },
];

export default function Topfooter() {
    return (
        <section className="d-flex bg-top-footer">
            {footerSection.map((section) => (
                <div key={section.id}>
                    <div className="flex-container">
                        <h2>{section.title}</h2>
                        <ul>
                            {section.link.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href={link.href}>
                                        {link.label}
                                    </a>
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            <img className="footer-img" src="src/img/dc-logo-bg.png" />
        </section>
    )
}