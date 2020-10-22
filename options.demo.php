<?php
/*

 
if ( class_exists( 'Uix_Custom_Metaboxes' ) ) {

	$custom_metaboxes_page_vars = array(

		//-- Group
		array(
			'config' => array( 
				'id'         =>  'yourtheme_metaboxes-1', 
				'title'      =>  esc_html__( '[Demo] Normal Fields', 'your-theme' ),
				'screen'     =>  'page', // page, post, uix_products, uix-slideshow, ...
				'context'    =>  'normal',
				'priority'   =>  'high',
				'fields' => array( 
					array(
						'id'          =>  'cus_page_ex_demoname_1',
						'type'        =>  'textarea',
						'title'       =>  esc_html__( 'Textarea', 'your-theme' ),
						'placeholder' =>  esc_html__( 'Placeholder Text', 'your-theme' ),
						'desc'        =>  esc_html__( 'Here is the description. It could be left blank. (Support for HTML tags)', 'your-theme' ),
						'default'     =>  '',
						'options'     =>  array( 
											'rows'  => 5	
										  )
					),
					array(
						'id'            =>  'cus_page_ex_demoname_2',
						'type'          =>  'text',
						'title'         =>  esc_html__( 'Text', 'your-theme' ),
						'desc_primary'  =>  esc_html__( 'Here is the description. It could be left blank.', 'your-theme' ),
						'default'       =>  '123',
					),

					array(
						'id'            =>  'cus_page_ex_demoname_3',
						'type'          =>  'url',
						'title'         =>  esc_html__( 'URL', 'your-theme' )
					),

					array(
						'id'          =>  'cus_page_ex_demoname_4',
						'type'        =>  'number',
						'title'       =>  esc_html__( 'Number', 'your-theme' ),
						'options'     =>  array( 
											'units'  =>  esc_html__( 'px', 'your-theme' )
										  )

					),



					array(
						'id'          =>  'cus_page_ex_demoname_5',
						'type'        =>  'radio',
						'title'       =>  esc_html__( 'Radio', 'your-theme' ),
						'default'     =>  '2',
						'options'     =>  array( 
											'radio_type'  => 'normal',
											'value'       => array(
												'1'            =>  esc_html__( 'Option: 1', 'your-theme' ),
												'2'            =>  esc_html__( 'Option: 2 (Default)', 'your-theme' ),
												'3'            =>  esc_html__( 'Option: 3', 'your-theme' ),	
											 )


										  )

					),

					array(
						'id'          =>  'cus_page_ex_demoname_5_2',
						'type'        =>  'radio',
						'title'       =>  esc_html__( 'Radio 2', 'your-theme' ),
						'options'     =>  array( 
											'br'          => true,
											'radio_type'  => 'normal',
											'value'       => array(
												'1'            =>  esc_html__( 'Option: 1', 'your-theme' ),
												'2'            =>  esc_html__( 'Option: 2', 'your-theme' ),
												'3'            =>  esc_html__( 'Option: 3', 'your-theme' ),	
											 )


										  )

					),



					array(
						'id'            =>  'cus_page_ex_demoname_6',
						'type'          =>  'radio',
						'title'         =>  esc_html__( 'Radio(Associated)', 'your-theme' ),
						'desc_primary'  =>  esc_html__( 'It is valid to assign height to page title area when the featured image is not empty.', 'your-theme' ),

						'default'     =>  'normal',
						'options'     =>  array( 
											'radio_type'  => 'normal',
											'value'       =>  array(
												'normal'       =>  esc_html__( 'Option: Normal(Default)', 'your-theme' ),
												'higher'       =>  esc_html__( 'Option: Higher', 'your-theme' ),
												'full-screen'  =>  esc_html__( 'Option: Full Screen', 'your-theme' ),
												'cus-height'   =>  esc_html__( 'Option: Custom Height', 'your-theme' ),
											 ),
											'toggle'      =>  array(
												'normal'       =>  '',
												'higher'       =>  '',
												'full-screen'  =>  array(
                                                                    'id'             =>  'cus_page_ex_demoname_6_opt-full-screen-toggle',
                                                                    'type'           =>  'text',
                                                                    'title'          =>  esc_html__( 'full-screen', 'your-theme' ),
                                                                    'desc_primary'   =>  '',
                                                                ),
												'cus-height'   =>  array( 
                                                                    'id'       =>  'cus_page_ex_demoname_6_opt-cus-height-toggle', 
                                                                    'type'     =>  'number',
                                                                    'default'  =>  350,
                                                                    'options'     =>  array( 
                                                                                        'units'  =>  esc_html__( 'px', 'your-theme' )
                                                                                      )
                                                                ),
											 ),
										  )

					),
					
					
					array(
						'id'            =>  'cus_page_ex_demoname_s6',
						'type'          =>  'radio',
						'title'         =>  esc_html__( 'Switch(Associated)', 'your-theme' ),
						'desc_primary'  =>  esc_html__( 'Can control multiple forms to display or hide.', 'your-theme' ),

						'default'     =>  'my-switch-1',
						'options'     =>  array( 
											'radio_type'  => 'switch',
											'value'       =>  array(
												'my-switch-1'       =>  esc_html__( 'My Switch 1', 'your-theme' ),
												'my-switch-2'       =>  esc_html__( 'My Switch 2', 'your-theme' )
											 ),
											'target_ids'      =>  array(
												'my-switch-1'       =>  '',
												'my-switch-2'       =>  array( 
																			'cus_page_ex_demoname_7', 
																			'cus_page_ex_demoname_8', 
																			'cus_page_ex_demoname_9'
																		),
											 ),
										  )

					),



					array(
						'id'          =>  'cus_page_ex_demoname_7',
						'type'        =>  'radio',
						'title'       =>  esc_html__( 'Radio Image', 'your-theme' ),
						'default'     =>  'no-sidebar',
						'options'     =>  array( 
											'radio_type'  => 'image',
											'value'       => array(
												'no-sidebar'    =>  esc_url( '/images/layouts/no-sidebar.png' ),
												'sidebar'       =>  esc_url( '/images/layouts/sidebar.png' ),
											 )


										  )

					),

					array(
						'id'            =>  'cus_page_ex_demoname_8',
						'type'          =>  'checkbox',
						'title'         =>  esc_html__( 'Checkbox', 'your-theme' ),
						'desc_primary'  =>  esc_html__( 'Here is the description. It could be left blank.', 'your-theme' ),

					),

					array(
						'id'          =>  'cus_page_ex_demoname_9',
						'type'        =>  'select',
						'title'       =>  esc_html__( 'Select', 'your-theme' ),
						'default'     =>  '3',
						'options'     =>  array( 
											'value'       => array(
												'1'            =>  esc_html__( 'Option: 1', 'your-theme' ),
												'2'            =>  esc_html__( 'Option: 2', 'your-theme' ),
												'3'            =>  esc_html__( 'Option: 3 (Default)', 'your-theme' ),	
											 )


										  )

					),

					array(
						'id'             =>  'cus_page_ex_demoname_10',
						'type'           =>  'price',
						'title'          =>  esc_html__( 'Price', 'your-theme' ),
						'desc_primary'   =>  esc_html__( 'Here is the description. It could be left blank.', 'your-theme' ),
						'options'        =>  array( 
											'units'  =>  esc_html__( '$', 'your-theme' )
										  )

					),

					array(
						'id'          =>  'cus_page_ex_demoname_11',
						'type'        =>  'multi-checkbox',
						'title'       =>  esc_html__( 'Multi Checkbox', 'your-theme' ),
						'default'     =>  array( 'opt-1', 'opt-3' ),
						'options'     =>  array( 
											'br'          => true,
											'value'       => array(
												'opt-1'            =>  esc_html__( 'Option: 1', 'your-theme' ),
												'opt-2'            =>  esc_html__( 'Option: 2', 'your-theme' ),
												'opt-3'            =>  esc_html__( 'Option: 3', 'your-theme' ),	
												'opt-4'            =>  esc_html__( 'Option: 4', 'your-theme' ),
												'opt-5'            =>  esc_html__( 'Option: 5', 'your-theme' ),
												'opt-6'            =>  esc_html__( 'Option: 6', 'your-theme' ),	
											 )


										  )

					),



				)
			)

		),

		//-- Group
		array(
			'config' => array( 
				'id'         =>  'yourtheme_metaboxes-2', 
				'title'      =>  esc_html__( '[Demo] Appearance Fields', 'your-theme' ),
				'screen'     =>  'page', // page, post, uix_products, uix-slideshow, ...
				'context'    =>  'normal',
				'priority'   =>  'high',
				'fields' => array( 
					array(
						'id'          =>  'cus_page_ex_demoname_appear_1',
						'type'        =>  'image',
						'title'       =>  esc_html__( 'Image or Video', 'your-theme' ),
						'placeholder' =>  esc_html__( 'Image or Video URL', 'your-theme' ),
                        'options'     =>  array( 
                                                'label_controller_up_remove'  => esc_html__( 'Remove', 'your-theme' ),
                                                'label_controller_up_add'     => esc_html__( 'Select a file', 'your-theme' )
                                          )
					),
					array(
						'id'       =>  'cus_page_ex_demoname_appear_2',
						'type'     =>  'color',
						'title'    =>  esc_html__( 'Color', 'your-theme' ),
					),
					array(
						'id'       =>  'cus_page_ex_demoname_appear_3',
						'type'     =>  'editor',
						'title'    =>  esc_html__( 'Editor', 'your-theme' ),
						'options'     =>  array( 
											'editor_height'   => 200,
											'editor_toolbar'  => 'formatselect fontselect forecolor backcolor bold italic underline strikethrough bullist numlist blockquote code alignleft aligncenter alignright uix_cmb_link uix_cmb_unlink | removeformat outdent indent superscript subscript hr uix_cmb_image uix_cmb_highlightcode media customCode fullscreen'
										  )
					),
					array(
						'id'            =>  'cus_page_ex_demoname_appear_4',
						'type'          =>  'date',
						'title'         =>  esc_html__( 'Date', 'your-theme' ),
						'desc_primary'  =>  Uix_Custom_Metaboxes::kses( __( 'Enter date of your projects. <strong>(optional)</strong>', 'your-theme' ) ),
						'options'       =>  array( 
											'format'  => 'MM dd, yy',
										  )


					),

					array(
						'id'            =>  'cus_page_ex_demoname_attrs',
						'type'          =>  'custom-attrs',
						'title'         =>  esc_html__( 'Custom Attributes', 'your-theme' ),
						'options'       =>  array( 
                                                'one_column'         => false, //Use only one column as a separate module
                                                'label_title'        => esc_html__( 'Title', 'your-theme' ),
                                                'label_value'        => esc_html__( 'Value', 'your-theme' ),
                                                'label_upbtn_remove' => esc_html__( 'Remove', 'your-theme' ),
                                                'label_upbtn_add'    => esc_html__( 'Add New', 'your-theme' ),

										  )



					),
                    
                    
                    
					array(
						'id'            =>  'uix_themeplugin_multicontent',
						'type'          =>  'multi-content',
						'title'         =>  esc_html__( 'Multiple Content Area', 'your-theme' ),
						'options'       =>  array( 
                                                'one_column'          => false, //Use only one column as a separate module
                                                'label_title'         => esc_html__( 'Title', 'your-theme' ),
                                                'label_value'         => esc_html__( 'Contnet', 'your-theme' ),
                                                'label_id'            => esc_html__( 'Step ID', 'your-theme' ),
                                                'label_subtitle'      => esc_html__( 'Subtitle', 'your-theme' ),
                                                'label_level'         => esc_html__( 'Level', 'your-theme' ),
                                                'label_classname'     => esc_html__( 'Class Name', 'your-theme' ),
                                                'label_upbtn_remove'  => esc_html__( 'Remove', 'your-theme' ),
                                                'label_upbtn_add'     => esc_html__( 'Add New', 'your-theme' ),
                                                'editor_height_teeny' => 50,
                                                'editor_toolbar_teeny'=> 'formatselect forecolor backcolor bold italic underline strikethrough alignleft aligncenter alignright uix_cmb_link uix_cmb_unlink removeformat customCode',
                                                'editor_height'       => 450,
                                                'editor_toolbar'      => 'formatselect fontselect forecolor backcolor bold italic underline strikethrough bullist numlist blockquote code alignleft aligncenter alignright uix_cmb_link uix_cmb_unlink | removeformat outdent indent superscript subscript hr uix_cmb_image uix_cmb_highlightcode media customCode fullscreen'
										  )



					),

                    array(
                        'id'            =>  'uix_themeplugin_multiworks',
                        'type'          =>  'multi-portfolio',
                        'title'         =>  '',
                        'options'       =>  array( 
                                                'one_column'      => true, //Use only one column as a separate module
                                                'label_type'      => array( 
                                                    'file' => esc_html__( 'Files', 'your-theme' ),
                                                    'html' => esc_html__( 'Text', 'your-theme' )

                                                ),
                                                'label_lightbox'              => esc_html__( 'Enable Lightbox for this gallery?', 'your-theme' ),
                                                'label_controller_up_remove'  => esc_html__( 'Remove', 'your-theme' ),
                                                'label_controller_up_add'     => esc_html__( 'Select image or video', 'your-theme' ), 
                                                'label_html'           => esc_html__( 'Custom Content', 'your-theme' ),
                                                'label_file'           => esc_html__( 'Upload Your Files', 'your-theme' ),
                                                'label_upbtn_remove'   => esc_html__( 'Remove', 'your-theme' ),
                                                'label_upbtn_add_file' => esc_html__( 'Add Files', 'your-theme' ),
                                                'label_upbtn_add_html' => esc_html__( 'Add Text', 'your-theme' ),
                                                'editor_height'        => 300,
                                                'editor_toolbar'       => 'formatselect fontselect forecolor backcolor bold italic underline strikethrough bullist numlist blockquote code alignleft aligncenter alignright uix_cmb_link uix_cmb_unlink | removeformat outdent indent superscript subscript hr uix_cmb_image uix_cmb_highlightcode media customCode fullscreen'
                                          )



                    ),      
                        

				)
			)

		),	
	);

	$custom_metaboxes_page = new Uix_Custom_Metaboxes( $custom_metaboxes_page_vars );
}


 */




/*
 *
 * [Front-end Page]:
 *
 *
 *

//--------------------------------------
//Field Type: Editor
//--------------------------------------
//@print: 
    <?php
    echo Uix_Custom_Metaboxes::kses( get_post_meta( get_the_ID(), 'cus_page_ex_demoname_appear_3', true ) );
    ?>

//--------------------------------------
//Field Type: Checkbox
//--------------------------------------
//@print: 

    <?php
    echo ( get_post_meta( get_the_ID(), 'cus_page_ex_demoname_8', true ) ) ? esc_attr( '_blank' ) : esc_attr( '_self' ); 
    ?>

//--------------------------------------
//Field Type: Multiple CheckBox
//--------------------------------------
//@print: 

    <?php

    $_data = get_post_meta( get_the_ID(), 'cus_page_ex_demoname_11', true );
    $_echo = '';
    if ( !empty( $_data ) && is_array( $_data ) ) {

        foreach ( $_data as $value ) :
            $_echo .= $value.', ';
        endforeach; 
    }
    echo $_echo;  

    ?>

//--------------------------------------
//Field Type: Custom Attributes
//--------------------------------------
//@print: 

    <?php

    $_data = json_decode( get_post_meta( get_the_ID(), 'cus_page_ex_demoname_attrs', true ), true );

    if ( is_array( $_data ) && sizeof( $_data ) > 0 ) {

        foreach( $_data as $value ) {
        ?>
            <li>
                <strong><?php echo esc_html( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'name' ] ) ); ?></strong>
                <p>
                    <?php echo Uix_Custom_Metaboxes::kses( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'value' ] ) ); ?>
                </p>
            </li>
        <?php
        }
    } 

    ?>


//--------------------------------------
//Field Type: Multiple Content Area
//--------------------------------------
//@print: 


    <?php

    $_data = json_decode( get_post_meta( get_the_ID(), 'uix_themeplugin_multicontent', true ), true );

    if ( is_array( $_data ) && sizeof( $_data ) > 0 ) {

        //Parse JSON data from Editor
        foreach( $_data as $index => $value ) {

            if ( is_array( $value ) && sizeof( $value ) > 0 ) {

                //level 1
                ?>
                <section class="slide <?php echo esc_attr( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'classname' ] ) ); ?>" id="<?php echo esc_attr( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'id' ] ) ); ?>" data-level="<?php echo esc_attr( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'level' ] ) ); ?>">

                    <h3><?php echo esc_html( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'name' ] ) ); ?></h3>
                    <?php echo Uix_Custom_Metaboxes::kses( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'subtitle' ] ) ); ?>
                    <hr>
                    <?php echo Uix_Custom_Metaboxes::kses( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'value' ] ) ); ?>


                <?php   

                //level 2
                $level_2_content = $value[ 'content' ];
                if ( is_array( $level_2_content ) && sizeof( $level_2_content ) > 0 ) {

                    foreach( $level_2_content as $index => $value ) {
                    ?>
                        <div class="slide slide-child <?php echo esc_attr( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'classname' ] ) ); ?>" id="<?php echo esc_attr( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'id' ] ) ); ?>" data-level="<?php echo esc_attr( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'level' ] ) ); ?>">

                            <h3><?php echo esc_html( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'name' ] ) ); ?></h3>
                            <?php echo Uix_Custom_Metaboxes::kses( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'subtitle' ] ) ); ?>
                            <hr>
                            <?php echo Uix_Custom_Metaboxes::kses( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'value' ] ) ); ?>

                        </div>  

                    <?php
                    } 

                }//endif $level_2_content

            ?>
            </section>     
            <?php

            }//endif $value


        }//end foreach   

    }    

    ?>     



//--------------------------------------
//Field Type: Multiple Portfolio Area
//--------------------------------------
//@print: 

    <?php
    $lightbox_enable = NULL;

    $_data = json_decode( get_post_meta( get_the_ID(), 'uix_themeplugin_multiworks', true ), true );

    if ( is_array( $_data ) && sizeof( $_data ) > 1 ) {

        //----------
        foreach( $_data as $index => $value ) {
            if ( is_array( $value ) && sizeof( $value ) > 0 ) {

                //Exclude lightbox fields
                if ( array_key_exists( 'lightbox', $value ) ) {
                    $lightbox_enable = esc_attr( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'lightbox' ] ) );
                    break;
                }//endif array_key_exists( 'lightbox', $value )
            }//endif $value
        }//end foreach      


        //----------
        foreach( $_data as $index => $value ) {

            if ( is_array( $value ) && sizeof( $value ) > 0 ) {
                //Exclude lightbox fields
                if ( ! array_key_exists( 'lightbox', $value ) ) {

            ?>
                <div class="uix-portfolio-type-<?php echo esc_attr( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'type' ] ) ); ?>">

                    <?php
                    $img_url = Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'filePath' ] );

                    if ( !empty( $img_url ) ) {
                        echo '<img src="'.esc_url( $img_url ).'" alt="" '.( $lightbox_enable == 'on' ? 'class="lightbox"' : '' ).'>';
                    }
                    ?>

                    <?php echo Uix_Custom_Metaboxes::kses( Uix_Custom_Metaboxes::parse_json_data_from_editor( $value[ 'value' ] ) ); ?>

                </div>     
            <?php

                }//endif array_key_exists( 'lightbox', $value )

            }//endif $value


        }//end foreach   

    }    

    ?>             
 
 
*/



/*
 *
 * [Dev - For your theme]:
 *
 *
 *
 
 
    // Custom metaboxes
    //----------------------
    if ( !function_exists( 'mytheme_uix_modify_vars' ) ) {
        add_filter( 'uix_custom_metaboxes_vars', 'mytheme_uix_modify_vars' );
        function mytheme_uix_modify_vars() {

            $all_config = array();
            $config  = array(

                    //-- Settings 1
                    array(
                        'config' => array( ... )
                    ),

                   //-- Settings 2
                    array(
                        'config' => array( ... )
                    ),

                );

            array_push( $all_config, $config );

            return $all_config;

        } 
    }
    
    

    // Custom publish page
    //----------------------
    if ( !function_exists( 'mytheme_uix_publish_page' ) ) {
        add_action( 'admin_enqueue_scripts' , 'mytheme_uix_publish_page' );
        function mytheme_uix_publish_page() {
            $currentScreen = get_current_screen();

            if ( $currentScreen->id == 'custom-post-type' ) {

                //Hide editor
                $custom_css = "
                #postdivrich {
                    display: none;
                }";
                wp_add_inline_style( 'your-style-slug', $custom_css ); 


                //Disable excerpt
                remove_meta_box( 'postexcerpt', 'custom-post-type', 'normal' ); 

            }

        }

    }


 
*/



