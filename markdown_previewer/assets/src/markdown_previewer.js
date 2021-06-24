import React from 'react';
import Toolbar from './toolbar';
import Editor from './editor';
import Preview from './preview';
import './App.css';

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            markdown: placeholder,
            editorMaximized: false,
            previewMaximized: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleEditorMaximized = this.handleEditorMaximized.bind(this);
        this.handlePreviewMaximized = this.handlePreviewMaximized.bind(this);
    }

    handleChange(e)
    {
        this.setState({
            markdown: e.target.value
        });
    }

    handleEditorMaximized()
    {
        this.setState({
            editorMaximized: !this.state.editorMaximized
        });
    }

    handlePreviewMaximized()
    {
        this.setState({
            previewMaximized: !this.state.previewMaximized
        });
    }

    render()
    {
        let classes = this.state.editorMaximized ? ["editor maximized","preview hide","fas fa-compress-arrows-alt"] : this.state.previewMaximized ? ["editor hide","preview maximized","fas fa-compress-arrows-alt"] : ["editor","preview","fas fa-expand-arrows-alt"];
        console.log(classes);
        return (
            <div className="main-module">
                <div className={classes[0]+" mb-2"}>
                    <Toolbar title="Editor" icon={classes[2]} onClick={this.handleEditorMaximized}/>
                    <Editor class={classes[0]} markdown={this.state.markdown} onChange={this.handleChange}/>
                </div><br/>

                
                <div id="preview" className={classes[1]}>
                    <Toolbar title="Preview" icon={classes[2]} onClick={this.handlePreviewMaximized}/>
                    <Preview source={this.state.markdown}/>
                </div>

            </div>

        );
    }
}

let placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;