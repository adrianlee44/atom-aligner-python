module.exports = {
  selector: [
    '.source.python',
    '.source.embedded.python',
  ],
  id: 'aligner-python',
  config: {
    ':-alignment': {
      title: 'Padding for :',
      description: 'Pad left or right of the character',
      type: 'string',
      "enum": ['left', 'right'],
      "default": 'right'
    },
    ':-leftSpace': {
      title: 'Left space for :',
      description: 'Add 1 whitespace to the left',
      type: 'boolean',
      "default": false
    },
    ':-rightSpace': {
      title: 'Right space for :',
      description: 'Add 1 whitespace to the right',
      type: 'boolean',
      "default": true
    },
    '=-alignment': {
      title: 'Padding for =',
      description: 'Pad left or right of the character',
      type: 'string',
      "enum": ['left', 'right'],
      "default": 'left'
    },
    '=-leftSpace': {
      title: 'Left space for =',
      description: 'Add 1 whitespace to the left',
      type: 'boolean',
      "default": true
    },
    '=-rightSpace': {
      title: 'Right space for =',
      description: 'Add 1 whitespace to the right',
      type: 'boolean',
      "default": true
    }
  },
  privateConfig: {
    ':-scope': 'valuepair',
    '=-scope': 'assignment'
  }
};
