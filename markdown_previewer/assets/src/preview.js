import marked from 'marked';

const Preview = (props) =>
{
    let setMarkup = (source) =>
    {
        let result = marked(source,{sanitize: true});
        return {__html: result}
    }

    return (
        <div id="preview" dangerouslySetInnerHTML={setMarkup(props.source)}>
        </div>
    );
}

export default Preview;