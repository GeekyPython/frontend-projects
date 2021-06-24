const Toolbar = (props) =>
{
    return (
        <div className="toolbar d-flex justify-content-between">
                <i className="fas fa-terminal"></i>
                <i>{props.title}</i>
                <i className={props.icon} onClick={props.onClick}></i>
        </div>
    );
}

export default Toolbar;