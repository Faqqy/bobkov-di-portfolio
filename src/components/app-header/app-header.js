import './app-header.css';

const AppHeader = () => {
    return (
        <div className="app-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="app-header_logo">
                            <img src="/images/logo-blue.svg" alt="logo" />
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="app-header_menu">
                            <ul>
                                <li><a href="#">Menu1</a></li>
                                <li><a href="#">Menu2</a></li>
                                <li><a href="#">Menu3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;