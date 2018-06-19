# react-state-component
> render function that exposes an additional external state

[![npm package][npm-badge]][npm]

### Usage

```sh
$ npm install react-state-component --save
```

```js
import State from 'react-state-component'

...

<State initial={{ count: 0 }}>
  {({ state, setState }) => (
    <Fragment>
      <h1>The count is: {state.count}</h1>
      <button onClick={() => setState({ count: state.count + 1 })}>Add</button>
      <button onClick={() => setState({ count: state.count - 1 })}>Remove</button>
    </Fragment>
  )}
</State>
```

Alternatively you could use a render prop

```js
import State from 'react-state-component'

...

<State
  initial={{ count: 0 }}
  render={({ state, setState }) => (
    <Fragment>
      <h1>The count is: {state.count}</h1>
      <button onClick={() => setState({ count: state.count + 1 })}>Add</button>
      <button onClick={() => setState({ count: state.count - 1 })}>Remove</button>
    </Fragment>
  )}
/>
```

[npm-badge]: https://img.shields.io/npm/v/react-state-component.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-state-component

Questions? Feedback? [Please let me know](https://github.com/hanford/trends/issues/new)

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```
Copyright © 2017-present [Jack Hanford](http://jackhanford.com) jackhanford@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
