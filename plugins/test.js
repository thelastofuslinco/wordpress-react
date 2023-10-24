alert('first message')

wp.blocks.registerBlockType('ourplugin/are-you-paying-attention', {
  title: 'Are you paying attention?',
  icon: 'smiley',
  category: 'common',
  edit: function () {
    return wp.element.createElement('h3', null, 'Hello World edit!')
  },
  save: function () {
    return wp.element.createElement('h1', null, 'This is frontend.')
  }
})
