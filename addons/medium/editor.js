var MediumEditor = require('./vendor/medium-editor')
var React        = require('react')
var Types        = React.PropTypes

var Editor = React.createClass({

  propTypes: {
    html   : Types.string.isRequired,
    onBlur : Types.func.isRequired
  },

  getDefaultProps() {
    return {
      options: {
        buttons: [ 'header1', 'header2', 'bold', 'italic', 'underline', 'anchor', 'quote',  'unorderedlist', 'orderedlist' ],
        firstHeader: 'h1',
        secondHeader: 'h2',
        diffLeft: 0,
        diffTop: -10,
        disableDoubleReturn: true
      }
    }
  },

  shouldComponentUpdate(props: Object, state: Object){
    return false
  },

  componentDidMount() {
    this.setState({
      editor: new MediumEditor(this.refs.editor.getDOMNode(), this.props.options)
    })
  },

  componentWillUnmount() {
    this.state.editor.deactivate()
  },

  render() {
    return (
      <div className="col-block-medium">
        <div className="col-medium" onBlur={ this._onBlur } role="textarea" aria-multiline="true" ref="editor" dangerouslySetInnerHTML={{ __html: this.props.html }} />
      </div>
    )
  },

  _onBlur() {
    var editor = this.refs.editor.getDOMNode()

    this.props.onBlur({
      text: editor.textContent,
      html: editor.innerHTML
    })
  }

})

module.exports = Editor
