import React, { PureComponent } from 'react'

const noop = () => {}

export default class extends PureComponent {
  static defaultProps = {
    render: () => {},
    initial: {}
  }

  state = this.props.initial

  _setState = (value, cb = noop) => this.setState(value, cb)

  render () {
    const { state, props, _setState } = this
    const { children, render } = props

    return typeof children === 'function'
      ? children({ state, setState: _setState })
      : render({ state, setState: _setState })
  }
}
