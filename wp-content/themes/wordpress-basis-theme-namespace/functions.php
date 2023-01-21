<?php
/**
 * WP Basis Theme functions and definitions
 *
 * Sets up the theme and provides some helper functions. Some helper functions
 * are used in the theme as custom template tags. Others are attached to action and
 * filter hooks in WordPress to change core functionality.
 *
 * The file Setup.php, sets up the theme by registering support
 * for various features in WordPress, such as a custom background and a navigation menu.
 * This file here load all files from the directory inc automatically and you should include, set
 * up there functions in the Setup.php.
 *
 * When using a child theme
 * @link       http://codex.wordpress.org/Theme_Development
 * @link       http://codex.wordpress.org/Child_Themes
 * you can override certain functions
 * (those wrapped in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before the parent
 * theme's file, so the child theme functions would be used.
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are instead attached
 * to a filter or action hook.
 *
 * For more information on hooks, actions, and filters, see
 * @link       http://codex.wordpress.org/Plugin_API.
 *
 * Php Version 5.6
 *
 * @package    WordPress
 * @subpackage WordPress_Basis_Theme
 * @since      2012-05-08  0.0.1
 * @version    2018-01-03
 * @author     Frank Bültge <frank@bueltge.de>
 * @license    http://opensource.org/licenses/gpl-license.php GNU Public License
 */

// check for right php version
$correct_php_version = PHP_VERSION_ID >= 50600;

if ( ! $correct_php_version ) {
	echo 'The WP Basis Theme requires <strong>PHP 5.6</strong> or higher.<br>';
	echo 'You are running PHP ' . PHP_VERSION;
	exit;
}

if ( ! function_exists( 'wp_basis_load_files' ) ) {

	add_action( 'after_setup_theme', 'wp_basis_load_files' );

	/**
	 * Automatic load all files from folder inc
	 * Current no subdirectories
	 *
	 * @since   2013-04-15
	 * @return  void
	 */
	function wp_basis_load_files() {

		$inc_directory = 'inc';
		$inc_base      = __DIR__ . DIRECTORY_SEPARATOR . $inc_directory . DIRECTORY_SEPARATOR;
		$includes      = array();

		// load required classes
		foreach ( glob( $inc_base . '*.php' ) as $path ) {

			$key = substr( $path, strpos( $path, $inc_directory ) );
			$key = str_replace( $inc_directory . DIRECTORY_SEPARATOR, '', $key );
			// create array with key and path for use in hook
			$includes[ $key ] = $path;
		}

		$includes = apply_filters(
			'wp_basis_loader',
			$includes
		);

		foreach ( $includes as $key => $path ) {
			/** @noinspection PhpIncludeInspection */
			require_once $path;
		}

	}
}

function cptui_register_my_cpts() {

	/**
	 * Post Type: Products.
	 */

	$labels = [
		"name" => esc_html__( "Products", "custom-post-type-ui" ),
		"singular_name" => esc_html__( "Product", "custom-post-type-ui" ),
		"menu_name" => esc_html__( "My Products", "custom-post-type-ui" ),
		"all_items" => esc_html__( "All Products", "custom-post-type-ui" ),
		"add_new" => esc_html__( "Add new", "custom-post-type-ui" ),
		"add_new_item" => esc_html__( "Add new Product", "custom-post-type-ui" ),
		"edit_item" => esc_html__( "Edit Product", "custom-post-type-ui" ),
		"new_item" => esc_html__( "New Product", "custom-post-type-ui" ),
		"view_item" => esc_html__( "View Product", "custom-post-type-ui" ),
		"view_items" => esc_html__( "View Products", "custom-post-type-ui" ),
		"search_items" => esc_html__( "Search Products", "custom-post-type-ui" ),
		"not_found" => esc_html__( "No Products found", "custom-post-type-ui" ),
		"not_found_in_trash" => esc_html__( "No Products found in trash", "custom-post-type-ui" ),
		"parent" => esc_html__( "Parent Product:", "custom-post-type-ui" ),
		"featured_image" => esc_html__( "Featured image for this Product", "custom-post-type-ui" ),
		"set_featured_image" => esc_html__( "Set featured image for this Product", "custom-post-type-ui" ),
		"remove_featured_image" => esc_html__( "Remove featured image for this Product", "custom-post-type-ui" ),
		"use_featured_image" => esc_html__( "Use as featured image for this Product", "custom-post-type-ui" ),
		"archives" => esc_html__( "Product archives", "custom-post-type-ui" ),
		"insert_into_item" => esc_html__( "Insert into Product", "custom-post-type-ui" ),
		"uploaded_to_this_item" => esc_html__( "Upload to this Product", "custom-post-type-ui" ),
		"filter_items_list" => esc_html__( "Filter Products list", "custom-post-type-ui" ),
		"items_list_navigation" => esc_html__( "Products list navigation", "custom-post-type-ui" ),
		"items_list" => esc_html__( "Products list", "custom-post-type-ui" ),
		"attributes" => esc_html__( "Products attributes", "custom-post-type-ui" ),
		"name_admin_bar" => esc_html__( "Product", "custom-post-type-ui" ),
		"item_published" => esc_html__( "Product published", "custom-post-type-ui" ),
		"item_published_privately" => esc_html__( "Product published privately.", "custom-post-type-ui" ),
		"item_reverted_to_draft" => esc_html__( "Product reverted to draft.", "custom-post-type-ui" ),
		"item_scheduled" => esc_html__( "Product scheduled", "custom-post-type-ui" ),
		"item_updated" => esc_html__( "Product updated.", "custom-post-type-ui" ),
		"parent_item_colon" => esc_html__( "Parent Product:", "custom-post-type-ui" ),
	];

	$args = [
		"label" => esc_html__( "Products", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "products",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"rest_namespace" => "wp/v2",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"can_export" => false,
		"rewrite" => [ "slug" => "products", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "editor", "thumbnail", "excerpt", "custom-fields", "author" ],
		"show_in_graphql" => false,
	];

	register_post_type( "products", $args );
}

add_action( 'init', 'cptui_register_my_cpts' );

