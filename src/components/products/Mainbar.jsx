const Mainbar = () => {
    const info = [
        { id: 1, text: "DIGITAL COMICS", src: "src/img/buy-comics-digital-comics.png" },
        { id: 2, text: "DC MERCHANDISE", src: "src/img/buy-comics-merchandise.png" },
        { id: 3, text: "SUBSCRITION", src: "src/img/buy-comics-subscriptions.png" },
        { id: 4, text: "COMIC SHOP", src: "src/img/buy-comics-shop-locator.png" },
        { id: 5, text: "DC POWER VISA", src: "src/img/buy-dc-power-visa.svg" }
    ]


    const infoList = info.map(info => {
        return (
            <div key={info.id} className="box">
                <img className="imgMainCard" src={info.src} alt={info.text} />
                <p> {info.text} </p >
            </div >
        )
    })

    return (
        <section className="bg-primary d-flex justify-content-between">
            {infoList}
        </section>
    )
}
export default Mainbar