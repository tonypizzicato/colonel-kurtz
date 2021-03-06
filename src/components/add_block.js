/* @flow */

var BlockType   = require('../stores/block_type_store')
var Button      = require('./ui/button')
var CreateBlock = require('../actions/block/create')
var React       = require('react')

var AddBlock = React.createClass({

  getInitialState(): ?Object {
    return BlockType.find(this.props.type)
  },

  render(): any {
    var { icon, id, label } = this.state

    return (
      <Button aria-label={ label } className="col-btn-icon" onClick={ this._onClick }>
        <img src={ icon } alt={ id } aria-hidden="true" />
      </Button>
    )
  },

  _onClick(e:Event): void {
    var { block, position, type } = this.props

    CreateBlock({
      content  : null,
      parent   : block,
      type     : type
    }, position)

    e.preventDefault()
  }

})

module.exports = AddBlock
