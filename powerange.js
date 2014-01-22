
/**
 * Powerange 0.0.1
 * http://abpetkov.github.io/powerange/
 *
 * Authored by Alexander Petkov
 * https://github.com/abpetkov
 *
 * Copyright 2014, Alexander Petkov
 * License: The MIT License (MIT)
 * http://opensource.org/licenses/MIT
 *
 */

/**
 * Expose `Powerange`.
 */

module.exports = Powerange;

/**
 * Set default values.
 *
 * @api public
 */

var defaults = {
  color: '#a9acb1',
  type: 'single'
};

/**
 * Create Powerange object.
 *
 * @constructor
 * @param {Object} element
 * @param {Object} options
 * @api public
 */

function Powerange(element, options) {
  if (!(this instanceof Powerange)) return new Powerange(element, options);

  this.element = element;
  this.options = options || {};

  for (var i in defaults) {
    if (this.options[i] === null) {
      this.options[i] = defaults[i];
    }
  }

  this.init();
};

/**
 * Hide the target element.
 *
 * @api private
 */

Powerange.prototype.hide = function() {
  this.element.style.display = 'none';
};

/**
 * Append the target after the element.
 *
 * @api private
 */

Powerange.prototype.append = function() {
  var slider = this.create('single');
  this.insertAfter(this.element, slider);
};

/**
 * Create the appropriate type of slider.
 *
 * @param {String} type
 * @returns {Object} this.slider
 * @api private
 */

Powerange.prototype.create = function(type) {
  this.slider = document.createElement('span');
  this.min = document.createElement('span');
  this.max = document.createElement('span');
  this.handle = document.createElement('span');
  this.quantity = document.createElement('span');

  this.slider.className = 'range-bar';
  this.min.className = 'range-min';
  this.max.className = 'range-max';
  this.handle.className = 'range-handle';
  this.quantity.className = 'range-quantity';

  this.min.innerHTML = '0';
  this.max.innerHTML = '100';

  this.slider.appendChild(this.min);
  this.slider.appendChild(this.max);
  this.slider.appendChild(this.handle);
  this.slider.appendChild(this.quantity);

  return this.slider;
};

/**
 * Insert element after another element.
 *
 * @param {Object} reference
 * @param {Object} target
 * @api private
 */

Powerange.prototype.insertAfter = function(reference, target) {
  reference.parentNode.insertBefore(target, reference.nextSibling);
};

/*
 * Initialize.
 *
 * @api private
 */

Powerange.prototype.init = function() {
  this.hide();
  this.append();
};