<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; 
}

/**
 * Uix Custom Metaboxes
 *
 * @class 		: Uix_Custom_Metaboxes
 * @version		: 2.0 (July 5, 2021)
 * @author 		: UIUX Lab
 * @author URI 	: https://uiux.cc
 * @license     : MIT
 *
 *
 */

if ( !class_exists( 'Uix_Custom_Metaboxes' ) ) {
	
	class Uix_Custom_Metaboxes {
		
		
		/**
		* Custom Meta Boxes Version
		*
		*/
		private static $ver = 2.0;	
		
		/**
		* Holds meta box parameters
		*
		*/
		private static $vars = null;
		
		
		/**
		* Holds meta box parameters of all post types
		*
		*/
		public static $all_config = array();

		/**
		* Check if wp_nonce_field() exists before using it
		*
		*/
		public static $nonce_field = true;

		
		
		/**
		* Name of the stylesheet and JavaScript.
		*
		*/
		public static $handle = 'uix-cmb';

		
		
        /*
         * Callback the directory URL
         *
         *
         */
		public static function get_directory() {
			return '/uix-custom-metaboxes/';
		}
	
		
		
		
		/**
		* Initialize the custom meta box
		*
		*/
		public function __construct( $vars ) {
			
			self::$vars = $vars;

			//Push parameters of different post types
			array_push( self::$all_config, self::$vars );
			
			// If we are not in admin area exit.
			if ( ! is_admin() ) return;

			// Add metaboxes
			add_action( 'add_meta_boxes', array( __CLASS__, 'add' ) );

			
			// Save metaboxes
			add_action( 'save_post', array( __CLASS__, 'save' ) );
			
			
			//Enqueue scripts and styles in the backstage
			add_action( 'admin_enqueue_scripts', array( __CLASS__, 'backstage_scripts' ) );
			
			
			

		}

        
		/*
		 * Adds one or more classes to the body tag in the dashboard.
		 *
		 *
		 */	
		public static function admin_body_class( $classes ) {
			return "$classes uix-cmb__bodyclass";
		}
	
		
		/*
		 * Load all the form controls in the directory
		 *
		 */
		 public static function load_form_core() {
	
			foreach ( glob( dirname(__FILE__). "/classes/*.php") as $file ) {
				include $file;
			}
			 
			foreach ( glob( dirname(__FILE__). "/controls/*.php") as $file ) {
				include $file;
			}	 
		 }

		
		/**
		 * Initialize in admin area
		 *
		 */
		public static function admin_ready() {
			
			//Load all the form controls in the directory
			add_action( 'admin_init', array( __CLASS__, 'load_form_core' ) );

			//Adds one or more classes to the body tag in the dashboard.
			add_filter( 'admin_body_class', array( __CLASS__, 'admin_body_class' ) );	
		}
		
		
		
        
        /*
         * The function finds the position of the first occurrence of a string inside another string.
         *
         * As strpos may return either FALSE (substring absent) or 0 (substring at start of string), strict versus loose equivalency operators must be used very carefully.
         *
         */
        public static function inc_str( $str, $incstr ) {

            $incstr = str_replace( '(', '\(',
                      str_replace( ')', '\)',
                      str_replace( '|', '\|',
                      str_replace( '*', '\*',
                      str_replace( '+', '\+',
                      str_replace( '.', '\.',
                      str_replace( '[', '\[',
                      str_replace( ']', '\]',
                      str_replace( '?', '\?',
                      str_replace( '/', '\/',
                      str_replace( '^', '\^',
                      str_replace( '{', '\{',
                      str_replace( '}', '\}',	
                      str_replace( '$', '\$',
                      str_replace( '\\', '\\\\',
                      $incstr 
                      )))))))))))))));

            if ( !empty( $incstr ) ) {
                if ( preg_match( '/'.$incstr.'/', $str ) ) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }


        }    
 
        /**
         * Filters content and keeps only allowable HTML elements.
         *
         */
        public static function kses( $html ){

            return wp_kses( $html, wp_kses_allowed_html( 'post' ) );

        }

		
		

		/**
		* The TinyMCE "syntax-highlight-code" and "code" buttons is not included with WP by default
		*
		*/    
//        public static function mce_external_plugins($plugins) {   
//
//            $plugins['code'] = self::get_directory() .'editor/plugins/syntax-highlight-code/prism.js';
//            return $plugins;
//        }
//        add_filter('mce_external_plugins', 'my_mce_external_plugins');
//


		
		/*
		 * Enqueue scripts and styles in the backstage
		 *
		 *
		 */
		public static function backstage_scripts() {
		
			  //Check if screen ID
			  $currentScreen = get_current_screen();
		
			  if ( $currentScreen->base === "post" || //page,post,custom post type
				   $currentScreen->base === "widgets" || 
				   $currentScreen->base === "customize" || 
				   self::inc_str( $currentScreen->base, '_page_' ) 
				 ) 
			  {
    
				
					wp_enqueue_style( self::$handle, self::get_directory() .'css/uix-custom-metaboxes.min.css', false, self::$ver, 'all' );
					//RTL		
					if ( is_rtl() ) {
						wp_enqueue_style( self::$handle . '-rtl', self::get_directory() .'css/uix-custom-metaboxes.min-rtl.css', false, self::$ver, 'all' );
					} 
				  
				  
					//Fix the image path of the editor
					$upload_dir     = wp_upload_dir();
				    $upload_dir_url = trailingslashit( $upload_dir[ 'baseurl' ] );
				  
				  
					wp_enqueue_script( self::$handle, self::get_directory() .'js/uix-custom-metaboxes.min.js', array( 'jquery' ), self::$ver, true );
                  
                  
					wp_localize_script( self::$handle,  'uix_custom_metaboxes_lang', array( 
						'ed_lang'                 => get_locale(),
						'ed_url'                  => self::get_directory() .'',
						'upload_dir_url'          => $upload_dir_url,
						'ed_media_title'          => __( 'Select Files', 'your-theme' ),
						'ed_media_text'           => __( 'Insert', 'your-theme' ),				
						'ed_image'                => __( 'Insert Image', 'your-theme' ),
						'ed_sourcecode_title'     => __( 'Source Code', 'your-theme' ),
						'ed_unlink_title'         => __( 'Remove link', 'your-theme' ),
						'ed_link_title'           => __( 'Insert/Edit link', 'your-theme' ),
						'ed_link_field_url'       => __( 'URL', 'your-theme' ),
						'ed_link_field_text'      => __( 'Link Text', 'your-theme' ),
						'ed_link_field_win'       => __( 'Open link in a new tab', 'your-theme' ),
						'ed_hcode_title'          => __( 'Syntax Highlight Code', 'your-theme' ),
						'ed_hcode_field_label'    => __( 'Language', 'your-theme' ),
                        'select_empty_text'       => __( '-', 'your-theme' ),
                        'delete_confirm_text'     => __( 'Are you sure you want to delete?', 'your-theme' ),
                        
					 ) );	
				 
					
				  

					//Colorpicker
					wp_enqueue_style( 'wp-color-picker' );
					wp_enqueue_script( 'wp-color-picker' );	
				  
				    //Colorpicker alpha plugin
				    $wp_color_picker_alpha_uri_name = version_compare( get_bloginfo( 'version' ), '5.5.0', '>=' ) ? 'wp-color-picker-alpha/up-5.5.0/wp-color-picker-alpha.min.js' : 'wp-color-picker-alpha/default/wp-color-picker-alpha.min.js';
					wp_enqueue_script( 'wp-color-picker-alpha', self::get_directory() .'js/' . $wp_color_picker_alpha_uri_name, array( 'wp-color-picker', self::$handle ), '2.1.2', true );

				     
				  
				    //date picker
				    wp_enqueue_script('jquery-ui-datepicker');
	
			  }
			
	
		}
		

		/**
		* Creating the Custom Field Box
		*
		* @link https://developer.wordpress.org/reference/functions/add_meta_box/
		*
		*/
		public static function add() {
			
			$all_args = apply_filters( 'uix_custom_metaboxes_vars', self::$all_config );
			
			if ( !is_array( $all_args ) ) return;
			
			
			
			foreach ( $all_args as $args ) {
				
				//Creating the Custom Field Box
				foreach ( $args as $v ) {


					$id        = ( isset( $v[ 'config' ][ 'id' ] ) ) ? esc_attr( $v[ 'config' ][ 'id' ] ) : 'uix_custom_meta-default';
					$title     = ( isset( $v[ 'config' ][ 'title' ] ) ) ? esc_html( $v[ 'config' ][ 'title' ] ) : esc_html__( 'Group Title', 'your-theme' );
					$screen    = ( isset( $v[ 'config' ][ 'screen' ] ) ) ? esc_attr( $v[ 'config' ][ 'screen' ] ) : 'page';
					$context   = ( isset( $v[ 'config' ][ 'context' ] ) ) ? esc_attr( $v[ 'config' ][ 'context' ] ) : 'normal';
					$priority  = ( isset( $v[ 'config' ][ 'priority' ] ) ) ? esc_attr( $v[ 'config' ][ 'priority' ] ) : 'high';
					$fields    = $v[ 'config' ][ 'fields' ];


					add_meta_box( 
						$id, 
						$title, 
						array( __CLASS__, 'register_meta_boxes' ), 
						$screen, 
						$context, 
						$priority,
						$fields
					);

				}	
				
				
			}//end $all_args


			
			
	
		}

		
	
		/**
		* Get field ids
		*
		*/
		public static function field_ids() {
			
			$all_args = apply_filters( 'uix_custom_metaboxes_vars', self::$all_config );
			
			if ( !is_array( $all_args ) ) return;
			
			$ids  = array();
			
			foreach ( $all_args as $args ) {
				
				

				foreach ( $args as $v ) {

					$fields_all_id   = self::array_get_by_key( $v[ 'config' ][ 'fields' ], 'id' );
					$fields_all_type = self::array_get_by_key( $v[ 'config' ][ 'fields' ], 'type' );

					foreach ( $fields_all_id as $key => $v ) {

						$cur_type = isset( $fields_all_type[ $key ] ) ? $fields_all_type[ $key ] : 'text';

						array_push( $ids, array( 
							'id'   => $v,
							'type' => $cur_type,
						) );
					}


				}	
				
			}//end $all_args	
			
	

			return $ids;
			
			
	
		}
		
		
		public static function array_get_by_key( array $array, $string ) {    
			if ( !trim( $string ) ) return false;    
			preg_match_all( "/\"$string\";\w{1}:(?:\d+:|)(.*?);/", serialize( $array ), $res );    
			return str_replace( '"', '', $res[1] );    
		}  	
		
		/**
		* Get post types
		*
		*/
		public static function post_types() {
			
			$all_args = apply_filters( 'uix_custom_metaboxes_vars', self::$all_config );
			
			if ( !is_array( $all_args ) ) return;
			
			$post_types = array();
			
			foreach ( $all_args as $args ) {
				
				
				foreach ( $args as $v ) {
					array_push( $post_types, $v[ 'config' ][ 'screen' ] );	
				}
	
				
			}//end $all_args
			
		

			
			return self::array_multi_to_single( $post_types );
			
			
		}
		
		
		/**
		* Convert an array
		*
		*/
		public static function array_multi_to_single( $array, $clearRepeated = true ){
			if ( !isset( $array ) || !is_array( $array ) || empty( $array ) ) {
				return false;
			}
			if ( !in_array( $clearRepeated, array( 'true', 'false', '' )  ) ) {
				return false;
			}
			static $result_array = array();
			foreach( $array as $value ){
				if( is_array( $value ) ) {
					self::array_multi_to_single( $value );
				}else{
					$result_array[] = $value;
				}
			}
			if( $clearRepeated ){
				$result_array = array_unique( $result_array );
			}
			return $result_array;
		}
		
        
		
		   
		/**
		* Filter JSON data to update_post_meta() 
        * Fixed php json_decode quotes problem
		*
		*/        
		public static function json_encode_to_update_post_meta( $arr ){
			
            $result = self::unicode_decode( json_encode( $arr ) );
            
            $result = str_replace(
                                array( '\r\n', '\r', '\n', '&quot;', '&apos;', '&#034;', '&#039;' ),
                                array( '', '', '', '\u0022', '\u0027', '\u0022', '\u0027' ),
                            $result );  
            
			return $result;
		}
		      
		
		/**
		* Parse JSON data from Editor
		*
		*/        
		public static function parse_jsondata_from_editor( $str ){                       
			return wp_specialchars_decode( self::unicode_decode( $str ) );
		}
        
        //Compatible with Uix Custom Metaboxes 1.9 and below
		public static function parse_json_data_from_editor( $str ){                       
			return wp_specialchars_decode( self::unicode_decode( $str ) );
		}
		
			
        
        
		/**
		* Decode Unicode strings in PHP
		*
		*/
        public static function replace_unicode_escape_sequence($match) {
            return mb_convert_encoding(pack('H*', $match[1]), 'UTF-8', 'UCS-2BE');
        }
        public static function unicode_decode($str) {
            return preg_replace_callback('/\\\\u([0-9a-f]{4})/i', array( __CLASS__, 'replace_unicode_escape_sequence' ), $str);
        } 
		   
        


		/*
		 * Filter the JSON Data of the Editor in order to save to the database
		 *
		 *
		 */
		public static function encode_jsondata_for_editor_to_database( $str ) {

			//Spacing (For this to work on a html page you might want to replace the spaces with four &nbsp;)
			$str = preg_replace( "/\t/", "    ", $str ); 
			
			//Escaping for HTML blocks.
			$str = esc_html( $str );

		    return $str;

		}

		/*
		 * Filter the JSON Data of the Textarea in order to save to the database
		 *
		 *
		 */
		public static function encode_jsondata_for_textarea_to_database( $str ) {

			//End Of Line
			$str = str_replace( PHP_EOL, '<br>', $str );
			
			//Spacing (For this to work on a html page you might want to replace the spaces with four &nbsp;)
			$str = preg_replace( "/\t/", "    ", $str ); 
			
			//Escaping for HTML blocks. ( !Required )
			$str = esc_html( $str ); 
			
			
		    return $str;

		}
		
		
		
		/*
		 * Filter the JSON Data of the JSON Result in order to save to the database
		 * Delete `\r\n`, `\n`, `\r`, `\t`, otherwise JSON cannot be stored in the database
		 *
		 */
		public static function encode_jsondata_for_jsonRes_to_database( $str ) {

			//
			
			//End Of Line
			//Delete `\r\n`, `\n`, `\r`
			$str = str_replace( '\\\\r\\\\n', "<br>", $str ); 	
			$str = str_replace( '\\\\r', "<br>", $str ); 	
			$str = str_replace( '\\\\n', "<br>", $str ); 	
			
			//Spacing (For this to work on a html page you might want to replace the spaces with four &nbsp;)
			//Delete `\t`
			$str = str_replace( '\\\\t', "&nbsp;&nbsp;&nbsp;&nbsp;", $str ); 	

			
			//Escaping for HTML blocks. ( !Required )
			$str = esc_html( $str );
			
			
		    return $str;

		}
		
		
		
		
		/*
		 * Automatically allocate space (including line breaks and spaces) 
		 * from JSON data to Textarea control
		 *
		 *
		 */
		public static function autospace_to_textarea_from_jsondata( $str ) {

			$str_encode = esc_textarea( $str );
			$str_decode = wp_specialchars_decode( $str_encode );
			
			$res = preg_replace( "/<br\s*\/?>/", PHP_EOL, $str_decode );
			
		    return $res;
			

		}

		/*
		 * Automatically allocate space (including line breaks and spaces) 
		 * from JSON data to Front Pages
		 *
		 *
		 */
		public static function autospace_to_front_from_jsondata( $str ) {
		    return preg_replace("/\s/", "&nbsp;", $str);
		}
		

		
		/**
		* Callback function to show fields in meta box.
		*
		*/
		public static function register_meta_boxes( $post, $metabox ) {
			
	
			$fields = $metabox[ 'args' ];
		
			
			global $post;

            if ( self::$nonce_field ) {
                wp_nonce_field( basename( __FILE__ ) , 'uix-meta-box-nonce' );
                
                //
                self::$nonce_field = false;
            }
			
			
			
			?>
			<!-- Begin Fields -->
			<div class="uix-cmb__wrapper">
				<table class="form-table uix-cmb">


					<?php
					foreach ( $fields as $v ) {

						if ( ( isset( $v[ 'id' ] ) && !empty( $v[ 'id' ] ) ) && ( isset( $v[ 'type' ] ) && !empty( $v[ 'type' ] ) ) ) {

							$type          = $v[ 'type' ];
							$id            = esc_attr( $v[ 'id' ] );
							$title         = ( isset( $v[ 'title' ] ) ) ? $v[ 'title' ] : esc_html__( 'Field Title', 'your-theme' );
							$placeholder   = ( isset( $v[ 'placeholder' ] ) ) ? $v[ 'placeholder' ] : '';
							$options       = ( isset( $v[ 'options' ] ) ) ? $v[ 'options' ] : '';
							$desc          = ( isset( $v[ 'desc' ] ) ) ? $v[ 'desc' ] : '';
							$desc_primary  = ( isset( $v[ 'desc_primary' ] ) ) ? $v[ 'desc_primary' ] : '';
							$value         = get_post_meta( $post->ID, $id, true );
							$value_default = ( isset( $v[ 'default' ] ) ) ? $v[ 'default' ] : '';
							$default       = ( metadata_exists( 'post', $post->ID, $id ) ) ? $value : $value_default;


							//------
							if ( $type == 'text' ) {
								UixCmbFormType_Text::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}	

							//------
							if ( $type == 'textarea' ) {
								UixCmbFormType_Textarea::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}	

							//------
							if ( $type == 'url' ) {
								UixCmbFormType_Url::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}	

							//------
							if ( $type == 'number' ) {
								UixCmbFormType_Number::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}				

							//------
							if ( $type == 'radio' ) {
								UixCmbFormType_Radio::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}			

							//------
							if ( $type == 'image' ) {
								UixCmbFormType_Image::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}						

							//------
							if ( $type == 'color' ) {
								UixCmbFormType_Color::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}				

							//------
							if ( $type == 'checkbox' ) {
								UixCmbFormType_Checkbox::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}		

							//------
							if ( $type == 'select' ) {
								UixCmbFormType_Select::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}					
							
							//------
							if ( $type == 'editor' ) {
								UixCmbFormType_Editor::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}					
							
							//------
							if ( $type == 'date' ) {
								UixCmbFormType_Date::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}				

							//------
							if ( $type == 'price' ) {
								UixCmbFormType_Price::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}		
							
							//------
							if ( $type == 'multi-checkbox' ) {
								UixCmbFormType_MultiCheckbox::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}	
							
							//------
							if ( $type == 'custom-attrs' ) {
								UixCmbFormType_CustomAttrs::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}	
							
							
							//------
							if ( $type == 'multi-content' ) {
								UixCmbFormType_MultiContent::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}	
                            
                            
							//------
							if ( $type == 'multi-portfolio' ) {
								UixCmbFormType_MultiPortfolio::add( $id, $title, $desc, $default, $options, $placeholder, $desc_primary, true );
							}	                      
                            
                            
						}

					}
					?>


				</table>
            </div>
			<!-- End Fields -->
			<?php

			
		}
		
		
		
		/**
		* Saving the Custom Data
		*
		*
		*/
		public static function save( $post_id ) {
			
			global $post_type;
			
			$post_type_object = get_post_type_object( $post_type );

			if ( ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )                      || // Check Autosave
				 ( ! isset( $_POST['post_ID'] ) || $post_id != $_POST['post_ID'] )      || // Check Revision
				 ( ! in_array( $post_type, self::post_types() ) )                       || // Check if current post type is supported.
				 ( ! check_admin_referer( basename( __FILE__ ), 'uix-meta-box-nonce') ) || // Check nonce - Security
				 ( ! current_user_can( $post_type_object->cap->edit_post, $post_id ) ) )   // Check permission
			{
			  return $post_id;
			}
			
			
			$ids = self::field_ids();

			if ( !is_array( $ids ) ) return;
			
			foreach ( $ids as $v ) {
				
				$id   = $v[ 'id' ];
				$type = $v[ 'type' ];
				
				if ( !isset( $v[ 'type' ] ) ) $type = 'text';
				
				$post_val = '';
				
				if ( isset( $_POST[ $id ] ) ) {
					
				
					if ( $type == 'text'     || 
						 $type == 'url'      ||
						 $type == 'radio'    ||
						 $type == 'image'    ||
						 $type == 'color'    ||
						 $type == 'checkbox' ||
						 $type == 'select'   ||
						 $type == 'date'
						
					   ) 
					{
						
						$post_val = sanitize_text_field( $_POST[ $id ] );
						
					} elseif ( $type == 'textarea' ) {
						
						$post_val = wp_unslash( $_POST[ $id ] );
						
					} elseif ( $type == 'editor' ) {
						
						$post_val = wp_unslash( $_POST[ $id ] );
						
					} elseif ( $type == 'number' || $type == 'price' ) {
						
						$post_val = floatval( $_POST[ $id ] );
						if ( empty( $post_val ) ) $post_val = 0;
						
					} elseif ( $type == 'multi-checkbox' ) {
						
						
						$post_val        = array();
						$new_values      = $_POST[ $id ];
				
						if ( !empty( $new_values ) ) {
						   foreach( $new_values as $new_value ) {
							  $post_val[] = $new_value ;
						   }
						}
						
						
						
					} else {
						
						$post_val = sanitize_text_field( $_POST[ $id ] );
						
					}
					
					
				}
				
				
				if ( $type == 'custom-attrs' ) {
					
					if ( isset( $_POST[ $id . '_attrs_title' ] ) ) {
						$custom_attrs          = array();
						$field_titles = $_POST[ $id . '_attrs_title' ];
						$field_values  = $_POST[ $id . '_attrs_value' ];


						foreach( $field_titles as $index => $value ) {	
							if ( !empty( $value ) ) {
								
								$title = $field_titles[ $index ];
								$content = $field_values[ $index ];
								
								
								array_push( $custom_attrs, array(
																	'name'  => esc_attr( $title ),
																	'value' => esc_attr( $content )
																) );		
							}

						}

						$post_val = self::json_encode_to_update_post_meta( $custom_attrs );
                        
                        
					}


				}
				
                
				if ( $type == 'multi-content' ) {
					
					if ( isset( $_POST[ $id . '_resultData' ] ) ) {
						$custom_attrs          = array();
						$field_ids  = $_POST[ $id . '_attrs_id' ];
						$field_titles  = $_POST[ $id . '_attrs_title' ];
						$field_values  = $_POST[ $id . '_attrs_value' ];
                        $field_descs  = $_POST[ $id . '_attrs_desc' ];
                        $field_parents  = $_POST[ $id . '_attrs_parent' ];
                        $field_classnames  = $_POST[ $id . '_attrs_classname' ];
                        
                 
                        //var_dump( self::encode_jsondata_for_jsonRes_to_database( $_POST[ $id . '_resultData' ] ) );
                        //wp_die();
                    
						$parent_all = array();
						foreach( $field_ids as $index => $value ) {	
							if ( !empty( $value ) ) {
                                
                                $title = $field_titles[ $index ];
                                $item_id = $field_ids[ $index ];
                                $parent_id = $field_parents[ $index ];
                                $desc = $field_descs[ $index ];
                                $classname = $field_classnames[ $index ];
                                $content = $field_values[ $index ];
                          
								$_item = array(
												'name'  => esc_attr( $title ),
												'id' => esc_attr( $item_id ),
									            'parent' => esc_attr( $parent_id ),
												'desc' => self::encode_jsondata_for_textarea_to_database( $desc ),
												'classname' => esc_attr( $classname ),
									            'value' => self::encode_jsondata_for_editor_to_database( $content )
											);
								
								array_push( $parent_all, $_item );  


							}

						}
						
								
						//---
						$all_data = array(
										'all_data'  => self::encode_jsondata_for_jsonRes_to_database( $_POST[ $id . '_resultData' ] ),
							            'all_reverse_data'  => self::encode_jsondata_for_jsonRes_to_database( $_POST[ $id . '_resultReverseData' ] ),
										'list'  => $parent_all				
									);
						
						array_push( $custom_attrs, $all_data );  

              
						$post_val = self::json_encode_to_update_post_meta( $custom_attrs );
                   
                        
					}


				}         
                
                
                
				if ( $type == 'multi-portfolio' ) {
					
                    $custom_attrs = array();
					if ( isset( $_POST[ $id . '_attrs_type' ] ) ) {
						
						$field_types  = $_POST[ $id . '_attrs_type' ];
						$field_values  = $_POST[ $id . '_attrs_value' ];
                        $field_files  = $_POST[ $id . '_attrs_file' ];
                        
                    
						foreach( $field_types as $index => $value ) {	
							if ( !empty( $value ) ) {
                                
                                $type = $field_types[ $index ];
                                $html = $field_values[ $index ];
                                $file = $field_files[ $index ];
                             
                                array_push( $custom_attrs, array(
                                                    'type'  => esc_attr( $type ),
                                                    'value' => self::encode_jsondata_for_editor_to_database( $html ),
                                                    'filePath' => esc_url( $file ),
                                                ) );
                               

							}

						}
                        
                        
                        
					}//endif isset( $_POST[ $id . '_attrs_type' ] )

                    
                    //
                    array_push( $custom_attrs, array(
                                                'lightbox'  => $_POST[ $id . '_lightbox' ]
                                            ) );
  
                    
                    //
                    $post_val = self::json_encode_to_update_post_meta( $custom_attrs );

				}     
                
                
		
				update_post_meta( $post_id, $id, $post_val );
				
		
				
			}
			

			
		}
		

	
        //////
	}

}

Uix_Custom_Metaboxes::admin_ready();	
