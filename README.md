JSX IF
=========

A really lightweight helper for writing native-looking conditionals in JSX.

Single line:

`<div id={_if (condition, 'msg')}>`

Multi line:

    {
      _if (this.state.title,
        <header>
          {this.state.title}
        </header>,

      _else (
        <h3>No content</h3>
      )
    )}

## Usage

`npm install jsx-if --save-dev`

In your component:

    var jsxIf   = require('jsx-if');

    var _if     = jsxIf._if,
        _elseif = jsxIf._elseif,
        _else   = jsxIf._else;

The `_if` function takes a minimum of two arguments: a condition and a value or function to return if true. However, it can take any number of arguments, which will act as elseif/else statements. The full syntax is as follows:

    _if(condition, value, _elseif(condition, value)..., _else(value))

It's a bit odd but it's as close as it gets until we get proper support built in.

##Examples

As a single line:

`<div id={_if (condition, 'msg')}>`

or on a block level:

    {_if (this.state.title,
        <header>
          {this.state.title}
        </header>
    )}


####If-else:

    {
      _if (this.state.title,
        <header>
          {this.state.title}
        </header>,

      _else (
        <h3>No content</h3>
      )
    )}

Notice the comma at the end of the `if` block.

####A complete if-elseif-else

At this point I would probably recommend using the immediately-invoked function expressions described in the [react docs](https://facebook.github.io/react/tips/if-else-in-JSX.html), however this works completely fine.

    {
      _if (this.state.title,
        <header>
          {this.state.title}
        </header>,

      _elseif (this.props.showDefault,
        <h3>Default title</h3>
      ),

      _else (
        <h3>No content</h3>
      )
    )}


## Tests

    npm test

## Release history

* 0.1.0 Initial release
