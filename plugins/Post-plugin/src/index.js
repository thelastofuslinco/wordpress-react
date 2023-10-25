import { registerBlockType } from '@wordpress/blocks'
import { App } from './App'
import metadata from './block.json'

registerBlockType(metadata, {
  edit: App
})
