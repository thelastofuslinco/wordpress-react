<?php

/*
    Plugin Name: Javascript block
    Description: javascript content
    Version: 1.0
    Author: Lincoln
    Author URI: https://github.com/thelastofuslinco
*/

if (!defined("ABSPATH")) {
    exit;
}

class JavascriptBlock
{
    function __construct()
    {
        add_action("enqueue_block_editor_assets", array($this, "adminAssets"));
    }

    function adminAssets()
    {
        wp_enqueue_script("ournewblocktype", plugin_dir_url(__FILE__) . "test.js", array("wp-blocks", "wp-element"));
    }
}

$javascriptBlock = new JavascriptBlock();