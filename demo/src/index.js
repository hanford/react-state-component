import React, {Component} from 'react'
import {render} from 'react-dom'

import State from '../../src'

class Demo extends Component {
  render () {
    return (
      <State initialState={{ value: 0 }}>
        {({ state, setState }) => (
          <div>
            <pre>{JSON.stringify(state)}</pre>

            <button onClick={() => setState({ value: Math.random() })}>Set state to random number</button>
          </div>
        )}
      </State>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
