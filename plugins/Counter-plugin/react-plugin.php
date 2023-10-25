<?php

/**

* Plugin Name: Counter Plugin

*/

class CounterPlugin
{

  function __construct()
  {
    add_action('init', array($this, 'react_plugin_block_init'));
  }
  function react_plugin_block_init()
  {

    register_block_type(

      __DIR__ . '/build',

      ['render_callback' => 'react_plugin_render_block']

    );

  }

  function react_plugin_render_block()
  {

    wp_enqueue_script(

      "react_plugin_frontend_js",

      plugin_dir_url(__FILE__) . "/build/frontend.js",

      ["wp-element"],

      "0.1.0",

      true

    );

    return "<div class='root'></div>";

  }


}

$counterPlugin = new CounterPlugin();