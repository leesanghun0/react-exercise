function Contents(props) {
    return(<div className="contents-box">
    <div className="contents-box-images">
        <img className="contents-box-images-item" src={props.contentsBox.images} alt="임시" />
    </div>
    <div className="contents-box-text">
        <h2 className="contents-box-title">{props.contentsBox.title}</h2>
        <p>{props.contentsBox.describe}</p>
    </div>
</div>)

export default Contents;