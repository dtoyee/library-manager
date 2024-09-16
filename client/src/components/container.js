import Menu from "./menu"

function Container() {
    return (
        <main className="wrapper">
            <div className="container">
                <div className="row-container">
                    <div className="col-1">
                        <Menu />
                    </div>
                    <div className="col-2">2</div>
                </div>
            </div>
        </main>
    )
}

export default Container