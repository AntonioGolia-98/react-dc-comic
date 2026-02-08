const Footerbar = [
    { id: 1, text: "facebook", url: "#", src: "src/img/footer-facebook.png" },
    { id: 2, text: "twitter", url: "#", src: "src/img/footer-twitter.png" },
    { id: 3, text: "youtube", url: "#", src: "src/img/footer-youtube.png" },
    { id: 4, text: "pinterest", url: "#", src: "src/img/footer-pinterest.png" },
    { id: 5, text: "periscope", url: "#", src: "src/img/footer-periscope.png" },
];

export default function Buttonfuter() {
    return (
        <section className="d-flex bg-button-footer justify-content-between">
            <button className="btn-footer ">JOIN-US NOW!</button>
            <div>
                <ul className="d-flex">
                    {Footerbar.map((section) => (
                        <li key={section.id}>
                            <img className="logo-footer" src={section.src} alt={section.text} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
