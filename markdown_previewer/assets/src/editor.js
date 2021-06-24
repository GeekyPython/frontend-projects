const Editor = (props) =>
{
    return (
            <textarea id="editor-content" onChange={props.onChange} value={props.markdown}>
            </textarea>
    );
}

export default Editor;