# is-valid-username

Validate alpha-numeric username

# Install

```bash
npm install is-valid-username
```

# Usage

```javascript
var isValidUsername = require('is-valid-username');

isValidUsername('foobar') // true
isValidUsername('fooBar5') // true
isValidUsername('455') // true
isValidUsername('foo_bar') // false
isValidUsername('foo-bar') // false
isValidUsername('foo.bar') // false
```

# License

MIT
