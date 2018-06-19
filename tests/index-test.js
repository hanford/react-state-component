import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import State from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    const initState = {"jack":true}
    render(<State initial={initState} render={({ state }) => JSON.stringify(initState)} />, node, () => {
      expect(node.innerHTML).toContain(JSON.stringify(initState))
    })
  })
})
