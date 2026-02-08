import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="">
            <section className="d-flex ">
                <figure >
                    <img src="/src/img/dc-logo.png" alt="dc logo" />
                </figure>
                <Navbar />
            </section>
        </header>
    )
}