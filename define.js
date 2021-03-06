module.exports = define

function define (template, bindings) {
  return attach(bindings || template, View.prototype), View

  function View (el, state) {
    if (!(this instanceof View)) {
      return new View(el, state)
    }

    if (!el || !el.cloneNode) {
      state = el, el = template.cloneNode(true)
    }

    Object.defineProperty(this, 'el', {
      value: el
    })

    this.b$.forEach(key => {
      var val; Object.defineProperty(this, key, {
        get: v => val,
        set: v => val !== v && this['b$' + key](val = v),
        enumerable: true
      })
    })

    this.set(state)
  }
}

function attach (bindings, proto) {
  proto.toString = toString
  proto.get = get
  proto.set = set
  proto.b$ = Object.keys(bindings).filter(key => (
    proto['b$' + key] = bindings[key]
  ))
}

function get (selector, fresh) {
  return this.el['e$' + selector] =
   (!fresh && this.el['e$' + selector]) ||
    this.el.querySelector(selector)
}

function toString () {
  return this.el.outerHTML
}

function set (state) {
  this.b$.forEach(key => this[key] =
    state && state[key] != null ?
    state[key] : null)
  return this
}
