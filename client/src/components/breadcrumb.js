function Breadcrumb({links}) {
    return (
        <div className="breadcrumb">
            {
                links.map(link => {
                    return (
                            link.activeLink ?
                            <span>
                                <span className="breadcrumb-link"><a href={link.toPage}>{link.linkName}</a></span>
                                {link.separator}
                            </span> :
                            <span className="breadcrumb-link breadcrumb-active-page">{link.linkName}</span>
                    )
                })
            }
        </div>
    )
}

export default Breadcrumb