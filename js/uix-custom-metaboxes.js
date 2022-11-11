/*! 
 * ************************************************
 * Uix Custom Metaboxes
 *
 * @version		: 2.2 (October 24, 2022)
 * @author 		: UIUX Lab
 * @author URI 	: https://uiux.cc
 * @license     : MIT
 *
 *************************************************
 */
 const UixXXXCustomMetaboxes = function( obj ) {
	"use strict";


	const UixXXXCustomMetaboxesConstructor = function( obj ) {
		this.init = obj;
	};

	UixXXXCustomMetaboxesConstructor.prototype = {

		
		/*! 
		 * 
		 * Initialize the custom meta box
		 * ---------------------------------------------------
		 *
		 * @return {void}                  - The constructor.
		 */
		getInstance: function() {

			jQuery( document ).ready( function() {

				//(Calling "radio"... method using JavaScript prototype)
				UixXXXCustomMetaboxesConstructor.prototype.radio.call( this, '.uix-xxx-cmb__radio-selector' );
				UixXXXCustomMetaboxesConstructor.prototype.toggle.call( this, '.uix-xxx-cmb__toggle-selector' );
				UixXXXCustomMetaboxesConstructor.prototype.color.call( this, '.uix-xxx-cmb__color-selector' );
				UixXXXCustomMetaboxesConstructor.prototype.tabs.call( this, '.uix-xxx-cmb__tabsgroup-selector' );
				UixXXXCustomMetaboxesConstructor.prototype.date.call( this, '.uix-xxx-cmb__date-selector' );
				UixXXXCustomMetaboxesConstructor.prototype.customAttrs.call( this, '.uix-xxx-cmb__custom-attributes-field', 100 );
                UixXXXCustomMetaboxesConstructor.prototype.expandItem.call( this, '.uix-xxx-cmb__text--div--toggle__trigger' );
                UixXXXCustomMetaboxesConstructor.prototype.titleChange.call( this, '.uix-xxx-cmb__text--div--toggle', '.uix-xxx-cmb__text--div--toggle__trigger', '.uix-xxx-cmb__text--div--toggle__title' );          
                UixXXXCustomMetaboxesConstructor.prototype.upload.call( this );
                UixXXXCustomMetaboxesConstructor.prototype.editor.call( this, false );
                UixXXXCustomMetaboxesConstructor.prototype.toggleSelect.call( this );
				
			});

			//Chain method calls
			return this;
		},
		
		
		/*! 
		 * 
		 * Expand Item Interaction
		 * ---------------------------------------------------
		 *
		 * @param  {string} selector       - The selector ID or class
		 * @return {void}                  - The constructor.
		 */
		expandItem: function( selector ) {

			jQuery( document ).ready( function() {
                jQuery( document ).off( 'click.UixXXXToggle' ).on( 'click.UixXXXToggle', selector, function(e) {
                    e.preventDefault();
                    jQuery( this ).parent().toggleClass( 'active' );
                    jQuery( this ).toggleClass( 'active' );
                });

			});
			
			//Chain method calls
			return this;
		},		
        
		/*! 
		 * 
		 * Title Change Interaction
		 * ---------------------------------------------------
		 *
         * @param  {string} wrapper        - Wrapper of this item.
         * @param  {string} trigger        - Trigger of this item.
         * @param  {string} title          - Title of this item.
		 * @return {void}                  - The constructor.
		 */
		titleChange: function( wrapper, trigger, title ) {

			jQuery( document ).ready( function() {
                jQuery( document ).off( 'change.UixTitle' ).on( 'change.UixTitle', title, function() {
                    jQuery( this ).closest( wrapper ).find( trigger + '> span' ).html( jQuery( this ).val() );
                }); 
                
			});
            
            
			
			//Chain method calls
			return this;
		},	    
        
		/*! 
		 * 
		 * Radio
		 * ---------------------------------------------------
		 *
		 * @param  {string} selector       - The selector ID or class
		 * @return {void}                  - The constructor.
		 */
		radio: function( selector ) {

	
			jQuery( document ).ready( function() {
	
				jQuery( selector ).each(function(){

					const $this = jQuery( this ),
						tid   = $this.data( 'target-id' );
					
					
					//get all switch ids
					let allSwitchIds = '';
					$this.find( '[data-switch-ids]' ).each( function()  {
						allSwitchIds += jQuery( this ).attr( 'data-switch-ids' );
					});

					//Switch with radios
					const switchFun = function( curSel ) {
						
						$this.find( '[data-switch-ids]' ).each( function()  {
							const _targetID      = jQuery( this ).attr( 'data-switch-ids' ),
								_targetIDs     = UixXXXGetRealIds( _targetID  );

							if ( _targetIDs != '' ) {
								const	_$wrapper = jQuery( _targetIDs ).closest( 'tr' );
								_$wrapper.hide();	
							}


						});

						//
						if ( allSwitchIds != '' ) {
							jQuery( UixXXXGetRealIds( allSwitchIds  ) ).closest( 'tr' ).hide();
						}
						
						
						
						//
						const switchTargetID = curSel.attr( 'data-switch-ids' ),
							switchTargetIDs = UixXXXGetRealIds( switchTargetID  );

						if ( switchTargetIDs != '' ) {
							jQuery( switchTargetIDs ).closest( 'tr' ).show();
						}


					};

					if ( $this.find( '[data-switch-ids]' ).length > 0 ) {
						switchFun( $this.find( '[data-switch-ids]' ).first() );
					}
					
					
					$this.find( '[data-value]' ).on( 'click', function() {
					
						//Do not use preventDefault()
						//---------
						const _curValue = jQuery( this ).attr( 'data-value' );
						$this.find( '[data-value]' ).removeClass( 'active' );
						jQuery( '#' + tid ).val( _curValue );
						jQuery( this ).addClass( 'active' );
						
						
						//Switch with radios
						//---------
						if ( $this.find( '[data-switch-ids]' ).length > 0 ) {
							switchFun( jQuery( this ) );
						}
						


						
					} );	

				} );			
			
				
			});
			

			//Chain method calls
			return this;
		},
		
		
	
		
		/*! 
		 * 
		 * Toggle
		 * ---------------------------------------------------
		 *
		 * @param  {string} selector       - The selector ID or class
		 * @return {void}                  - The constructor.
		 */
		toggle: function( selector ) {

	
			jQuery( document ).ready( function() {
				
				jQuery( selector ).each(function(){

					
					const $this = jQuery( this );

                    const tid = $this.attr( 'data-toggle-id' );
                    if ( $this.hasClass( 'active' ) ) {
                        if ( tid != '' || typeof tid !== typeof undefined ) {
                            $this.closest( '[data-target-id]' ).find( '.uix-xxx-cmb__toggle-target' ).hide();
                            jQuery( '#' + tid ).show();
                        }
                    }

					$this.on( "click", function() {
						const tid = jQuery( this ).attr( 'data-toggle-id' );
						$this.removeClass( 'active' );

						if ( tid != '' || typeof tid !== typeof undefined ) {
							$this.closest( '[data-target-id]' ).find( '.uix-xxx-cmb__toggle-target' ).hide();
							jQuery( '#' + tid ).show();
						}

						jQuery( this ).addClass( 'active' );
					} );	


				} );			
			
				
			});
			

			//Chain method calls
			return this;
		},
			
		
		/*! 
		 * 
		 * Tabs
		 * ---------------------------------------------------
		 *
		 * @param  {string} selector       - The selector ID or class
		 * @return {void}                  - The constructor.
		 */
		tabs: function( selector ) {

	
			jQuery( document ).ready( function() {
				
				jQuery( selector ).each(function(){

					
					const $this = jQuery( this ),
						tabID = $this.attr( 'id' );
					
					//Create ID
					$this.find( '> ul' ).find( 'li' ).each(function(index) {
						jQuery( ' a', this).attr( 'href', '#tab-' + index + tabID);
					});
					$this.find( '.item' ).each(function(index) {
						jQuery( this ).attr( 'id', 'tab-' + index + tabID);
					});

					$this.find( '> ul' ).each(function() {
						// For each set of tabs, we want to keep track of
						// which tab is active and its associated content
						let $active, content, links = jQuery( this ).find( 'a' );

						// If the location.hash matches one of the links, use that as the active tab.
						// If no match is found, use the first link as the initial active tab.
						$active = jQuery(links.filter( '[href="' + location.hash + '"]' )[0] || links[0]);
						$active.addClass( 'active' );

						content = jQuery($active[0].hash);

						// Hide the remaining content
						$this.find( '> ul' ).find( 'li a' ).removeClass( 'active' );
						links.not( $active ).each(function() {
							jQuery(this.hash).hide();
						});

						$this.find( '> ul' ).find( 'li:first a' ).addClass( 'active' );
						$this.find( '.item:first' ).show();

						//Prevent duplicate function assigned
						jQuery( this ).find( 'a' ).off( 'click' );
						
						// Bind the click event handler
						jQuery( this ).on( 'click', 'a',
						function(e) {
							// Make the old tab inactive.
							$active.removeClass( 'active' );
							content.hide();

							// Update the variables with the new link and content
							$active = jQuery( this );
							content = jQuery(this.hash);

							// Make the tab active.
							$active.addClass( 'active' );
							content.show();

							// Prevent the anchor's default click action
							e.preventDefault();
						});

					});

					


				} );			
			
				
			});
			

			//Chain method calls
			return this;
		},
			
			
		/*! 
		 * 
		 * Color Picker
		 * ---------------------------------------------------
		 *
		 * @param  {string} selector       - The selector ID or class
		 * @return {void}                  - The constructor.
		 */
		color: function( selector ) {

	
			jQuery( document ).ready( function() {
				if ( jQuery.isFunction( jQuery.fn.wpColorPicker ) ){
					jQuery( selector ).wpColorPicker();	
				}	
			});
			

			//Chain method calls
			return this;
		},		
		
		
		/*! 
		 * 
		 * Date Picker
		 * ---------------------------------------------------
		 *
		 * @param  {string} selector       - The selector ID or class
		 * @return {void}                  - The constructor.
		 */
		date: function( selector ) {

			jQuery( document ).ready( function() {
				if ( jQuery.isFunction( jQuery.fn.datepicker ) ) {
					
					jQuery( selector ).each( function(){

						const $this  = jQuery( this ),
							format = $this.data( 'format' );

						$this.datepicker({
							dateFormat : format,
                            changeMonth: true,
                            changeYear: true,
                            nextText: '→',
                            prevText: '←'
						});

					} );		
					
					
						
				}
			});
			

			//Chain method calls
			return this;
		},		
		
		/*! 
		 * 
		 * Editor
		 * ---------------------------------------------------
		 *
         * @param  {boolean} init          - Whether to reset the editor.
		 * @return {void}                  - The constructor.
		 */
		editor: function( reset ) {

			jQuery( document ).ready( function() {
                
               
                //Initialize Editor
                jQuery( '.uix-xxx-cmb__mce-editor' ).UixXXXEditorInit({init: reset});

                
			});
			

			//Chain method calls
			return this;
		},		
        
		/*! 
		 * 
		 * Select of Toggle
		 * ---------------------------------------------------
		 *
		 * @return {void}                  - The constructor.
		 */
		toggleSelect: function() {

			jQuery( document ).ready( function() {
                
                //Initialize Select of Toggle (include parent category)
                jQuery( '.uix-xxx-cmb__wrapper.uix-xxx-cmb__custom-attributes-field.uix-xxx-cmb__custom-attributes-field--customlevel' ).UixXXXToggleSelectInit();
				
				//Initialize Select of Toggle
                jQuery( '.uix-xxx-cmb__text--div--toggle__simple-sel' ).UixXXXToggleSimpleSelectInit({ type: 'file'});

                
			});
			

			//Chain method calls
			return this;
		},	   
        
						
			

		/*! 
		 * 
		 * Upload Media Control
		 * ---------------------------------------------------
		 *
		 * @return {void}                  - The constructor.
		 */
		upload: function() {

	
			jQuery( document ).ready( function() {
                

                const selector = '.uix-xxx-cmb__upload-target';
                const videoReg = /^.*\.(avi|AVI|wmv|WMV|flv|FLV|mpg|MPG|mp4|MP4)$/gi;
				const imgReg   = /^.*\.(gif|jpe?g|tiff|png|webp|bmp)$/gi;
				const placeholderImg = '<svg width="135" style="padding: 50px 40px;border: 1px solid #ddd;pointer-events: none;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 6px 30px 0 rgba(0,0,0,0.1);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.55 122.88" enable-background="new 0 0 24 24" transform="scale(0.7) translate(-30 -55)"><path d="M102.55,122.88H0V0h77.66l24.89,26.44L102.55,122.88L102.55,122.88z M25.51,53.72h15.67V43.33H25.51V32.56 l15.67,0V21.85H25.51V11.08h15.67V7.83H8.43v106.23h85.77V32.36H71.52V7.83H56.86v3.29H41.18v10.71l15.68,0V32.6H41.18v10.49h15.68 v24.99c0,7.9-6.46,14.36-14.36,14.36l-2.63,0c-7.9,0-14.36-6.46-14.36-14.36V53.72L25.51,53.72z M36.28,63.07h10.28v4.06 c0,2.23-2.12,4.05-4.71,4.05h-0.86c-2.59,0-4.71-1.83-4.71-4.05V63.07L36.28,63.07L36.28,63.07z"></path></svg>';

				
                //Custom selectors
				jQuery( selector ).each( function()  {
					const $this     = jQuery( this ),
                        uuid      = UixXXXGUIDCreate(),
					    pid       = $this.data( 'insert-preview' ).replace(/\{id\}/g, uuid ),
						tid       = $this.data( 'insert-img' ).replace(/\{id\}/g, uuid ),
						_closebtn = '.uix-xxx-cmb__removebtn';

					
                    //init button and preview status
                    $this.attr( 'aria-disabled', true );
					
					
					//The RegExp object keeps track of the lastIndex where a match occurred, so on 
					//subsequent matches it will start from the last used index, instead of 0.
					videoReg.lastIndex = 0;
					imgReg.lastIndex = 0;	


					
					
					const element = jQuery( '#' + tid ).val();
					if ( element != '' ) {
                        
                        //image or video preview
						if ( videoReg.test( element ) ) {
							jQuery( '#' + pid ).html( '<video width="200" height="150" src="'+element+'" controls></video>' );
						} else if ( imgReg.test( element ) ) {
							jQuery( '#' + pid ).html( '<img src="'+element+'" alt="">' );
						} else {
							jQuery( '#' + pid ).html( '<img src="'+element+'" style="display: none"><a href="'+element+'" target="_blank" style="display: block;max-width: 180px;max-height: 197px;overflow: hidden;">'+placeholderImg+'</a>' );
						}
			
                        
                        //
						$this.next( _closebtn ).show();
						$this.hide();
					} else {
						$this.show();
					}

					 //Delete image   
                    $this.next( _closebtn ).off( 'click.UixUploadClose' ).on( 'click.UixUploadClose', function( event ){
                        event.preventDefault();

                        jQuery( '#' + tid ).val( '' );
                        
                        //hide element
                        jQuery( '#' + pid ).html( '' );
                        jQuery( '#' + pid ).hide();

                        jQuery( this ).hide();
                        jQuery( this ).closest( '.uix-xxx-cmb__upload-wrapper' ).find( selector ).show();
                        jQuery( this ).closest( '.uix-xxx-cmb__upload-wrapper' ).find( selector ).attr( 'aria-disabled', true );

                    } );	
                    
                    
                    //Prevent duplicate function assigned
                    $this.off( 'click.UixUpload' ).on( 'click.UixUpload', function( e ) {
                        e.preventDefault();

                        let upload_frame, 
                            attachment,
                            $thisClick = jQuery( this );

                        if ( typeof upload_frame === typeof undefined ) $thisClick.attr( 'aria-disabled', true );

                        if ( $thisClick.attr( 'aria-disabled' ) == 'true' ) {

                            if( upload_frame ){
                                upload_frame.open();
                                return;
                            }
                            upload_frame = wp.media( {
								title: uix_xxx_custom_metaboxes_lang.ed_media_title,
								button: {
								text: uix_xxx_custom_metaboxes_lang.ed_media_text,
                            },
                                multiple: false
                            } );
                            upload_frame.on( 'select',function(){
                                attachment = upload_frame.state().get( 'selection' ).first().toJSON();
                                jQuery( '#' + tid ).val( attachment.url );
                        
								
								//The RegExp object keeps track of the lastIndex where a match occurred, so on 
								//subsequent matches it will start from the last used index, instead of 0.
								videoReg.lastIndex = 0;
								imgReg.lastIndex = 0;	

                            
								const element = attachment.url;
						
								//image or video preview
								if ( videoReg.test( element ) ) {
                                    jQuery( '#' + pid ).html( '<video width="200" height="150" src="'+element+'" controls></video>' );
                                    jQuery( '#' + tid + '_filetype' ).val( 'video' );
								} else if ( imgReg.test( element ) ) {
                                    jQuery( '#' + pid ).html( '<img src="'+element+'" alt="">' );
                                    jQuery( '#' + tid + '_filetype' ).val( 'image' );
								} else {
                                    jQuery( '#' + pid ).html( '<img src="'+element+'" style="display: none"><a href="'+element+'" target="_blank" style="display: block;max-width: 180px;max-height: 197px;overflow: hidden;">'+placeholderImg+'</a>' );
                                    jQuery( '#' + tid + '_filetype' ).val( 'file' );
								}

								
                                
                              
                                //display element
                                jQuery( '#' + pid ).show();

                                $thisClick.next( _closebtn ).show();
                                $thisClick.hide();

                            } );

                            upload_frame.open();


                        }//end if $this.attr( 'aria-disabled' )


                        $this.attr( 'aria-disabled', false );


                    });//endif click.UixUpload
                    

				});//end each
                

				
				
			});
			

			//Chain method calls
			return this;
		},
			
			
			
			
			
			
			


			
		
		/*! 
		 * 
		 * Custom Attributes
		 * ---------------------------------------------------
		 *
		 * @param  {string} selector       - The selector ID or class
		 * @param  {number} max            - Increase the maximum number dynamically.
		 * @return {void}                  - The constructor.
		 */
		customAttrs: function( selector, max ) {

	
			jQuery( document ).ready( function() {
				
				
				jQuery( selector ).each(function(){

					
					const $this     = jQuery( this ),
						$addButton  = $this.find( '.uix-xxx-cmb__custom-attributes-field__addbtn' ), //The add button selector ID or class
						wrapperID   = '#' + $this.data( 'append-id' ), //The field wrapper ID or class 
						maxField    = max,
						fieldHTML   = $this.data( 'tmpl' );
					
					let x = 1;
					
					
					//Prevent duplicate function assigned
					$addButton.off( 'click.UixXXXCustomMetaboxes_customAttrs_add' ).on( 'click.UixXXXCustomMetaboxes_customAttrs_add', function( e ) {
						e.preventDefault();
                        
                        const $btn = jQuery( this );
                      
						if( x < maxField ){ 
							x++;

                            const uuid = UixXXXGUIDCreate();
                            
							jQuery( wrapperID ).append( fieldHTML.replace(/\{id\}/g, uuid ) );
                            jQuery.when( jQuery( wrapperID ).length > 0 ).then( function() {
                                
                                
                                if ( typeof $btn.data( 'type' ) !== typeof undefined ) {
									
									//Initialize Select of Toggle
                                   jQuery( '.uix-xxx-cmb__text--div--toggle__simple-sel' ).UixXXXToggleSimpleSelectInit({ type: $btn.data( 'type' ) });
									
                                } else {
									
									//Initialize Select of Toggle (include parent category)
									jQuery( '.uix-xxx-cmb__wrapper.uix-xxx-cmb__custom-attributes-field.uix-xxx-cmb__custom-attributes-field--customlevel' ).UixXXXToggleSelectInit();
								}
                                
                                
                                

                                //Initialize Editor
                                UixXXXCustomMetaboxesInit.editor( false );
                                
                                

                                //Initialize Uploader
                                UixXXXCustomMetaboxesInit.upload();
                                
                                
                            });
                            
						}
						
						
						//Fold all items
						jQuery( '.uix-xxx-cmb__text--div--toggle__trigger' ).parent().removeClass( 'active' );
						jQuery( '.uix-xxx-cmb__text--div--toggle__trigger' ).removeClass( 'active' );

                        
						
						return false;
					});

					//Remove per item
					
					//Prevent duplicate function assigned
					jQuery( '.uix-xxx-cmb__custom-attributes-field__removebtn' ).off( 'click.UixXXXCustomMetaboxes_customAttrs_remove' );
					jQuery( document ).on( 'click.UixXXXCustomMetaboxes_customAttrs_remove', '.uix-xxx-cmb__custom-attributes-field__removebtn', function( e ) {
						e.preventDefault();
                        
                        //fixed click events firing multiple times
                        e.stopImmediatePropagation();
                        
                        if ( confirm( uix_xxx_custom_metaboxes_lang.delete_confirm_text ) ) {
                            const $li = jQuery( this ).closest( '.uix-xxx-cmb__text--div' );

                            if ( jQuery( '.uix-xxx-cmb__custom-attributes-field .uix-xxx-cmb__text--div' ).length == 1 ) {
                                $li.find( 'input' ).val( '' );
                                $li.hide();
                            } else {
                                $li.remove();
                            }


                            x--;   
                        }


					});	

                    // Custom attributes field ordering
                    jQuery( '.uix-xxx-cmb__custom-attributes-field' ).sortable({
                        items                   : '.uix-xxx-cmb__text--div--toggle--sortable',
                        handle                  : '.uix-xxx-cmb__custom-attributes-field__sortablebtn',
                        cursor                  : 'move',
                        scrollSensitivity       : 40,
                        forcePlaceholderSize    : true,
                        forceHelperSize         : false,
                        helper                  : 'clone',
                        opacity                 : 0.65,
                        placeholder             : 'wc-metabox-sortable-placeholder',
                        start:function( event,ui ) {
                            ui.item.css( 'background-color', '#f6f6f6' );
                        },
                        stop:function( event,ui ){
                            ui.item.removeAttr( 'style' );
                            
                            //Initialize Editor
                            UixXXXCustomMetaboxesInit.editor( true );   
                            
                        },
                        update: function( event, ui ) {

                        }
                    });       
                    
                    
					
					
				} );		
		
				
			});
			

			//Chain method calls
			return this;
		},

			
		
	};

	return new UixXXXCustomMetaboxesConstructor( obj );
};




//--------
const UixXXXCustomMetaboxesInit = new UixXXXCustomMetaboxes();
UixXXXCustomMetaboxesInit.getInstance(); 



/*! 
 * ************************************
 * Initialize editor
 *************************************
 */	
/**
 * Based on "code" plugin
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2015 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
( function( $ ) {
"use strict";
    $( function() {

		
		if ( typeof(tinymce) !== 'undefined' ) {
			
			tinymce.PluginManager.add('uix_xxx_cmb_customcode', function(editor) {
				function showDialog() {
					const win = editor.windowManager.open({
						title: uix_xxx_custom_metaboxes_lang.ed_sourcecode_title,
						body: {
							type: 'textbox',
							name: 'uix_xxx_cmb_customcode',
							multiline: true,
							minWidth: editor.getParam("code_dialog_width", 600),
							minHeight: editor.getParam("code_dialog_height", Math.min(tinymce.DOM.getViewPort().h - 200, 500)),
							spellcheck: false,
							style: 'direction: ltr; text-align: left'
						},
						onSubmit: function(e) {
							// We get a lovely "Wrong document" error in IE 11 if we
							// don't move the focus to the editor before creating an undo
							// transation since it tries to make a bookmark for the current selection
							editor.focus();

							if(editor.readonly != true){
								editor.undoManager.transact(function() {
									editor.setContent(e.data.uix_xxx_cmb_customcode);
								});
							}

							editor.selection.setCursorLocation();
							editor.nodeChanged();

						}
					});


					// Gecko has a major performance issue with textarea
					// contents so we need to set it when all reflows are done
					win.find('#uix_xxx_cmb_customcode').value(editor.getContent({source_view: true}));

					//disable source code editing while in readonly mode
					if(editor.readonly){
						const id = win.find('#uix_xxx_cmb_customcode')[0]._id;
						$(win.find('#uix_xxx_cmb_customcode')[0]._elmCache[id]).prop('readonly', true);
					}

					//This was an attempt to disable the "save" button but nothing I've tried is working. 
					//So far we are good because the user cannot modify the source code anyway
					/*for (let property in win.find('#code')[0].rootControl.controlIdLookup) {
						if (win.find('#code')[0].rootControl.controlIdLookup.hasOwnProperty(property)) {
							const realProperty = win.find('#code')[0].rootControl.controlIdLookup[property];
							const element = $($(realProperty._elmCache[realProperty._id])[0].children[0]);
							if(element.prop('type') == 'button'){
								$(element).prop('disabled', true);
								//console.log(element.attr('disabled'));
								//console.log(element.prop('disabled'));
							}
						}
					}*/
				}

				editor.addCommand("mceCustomCodeEditor", showDialog);

				editor.addButton('uix_xxx_cmb_customcode', {
					icon: 'code',
					tooltip: uix_xxx_custom_metaboxes_lang.ed_sourcecode_title,
					onclick: showDialog,
					classes:'uix_xxx_cmb_customcode'
				});

				editor.addMenuItem('uix_xxx_cmb_customcode', {
					icon: 'code',
					text: uix_xxx_custom_metaboxes_lang.ed_sourcecode_title,
					context: 'tools',
					onclick: showDialog
				});
			});	
			
		}



	} );
    
    
} ) ( jQuery );


/*! 
 * @param  {number} id            - The ID of editor.
 * @param  {string} toolbar       - Toolbar of editor.
 * @param  {number} height        - Set editor height.
 * @return {void}                 - The constructor.
 */	
( function ( $ ) {
	'use strict';
    $.fn.UixXXXMCEEditor = function( options ) {
		
 
        // This is the easiest way to have default options.
        const settings = $.extend({
			speed    : 0.25,
			bg       : { enable: true, xPos: '50%' }
        }, options );
 
        this.each( function() {
	
            const id       = settings.id, 
                toolbar  = settings.toolbar, 
                height   = settings.height;
			
	
            if( typeof id !== typeof undefined ) {
				
				
				tinyMCE.execCommand( 'mceRemoveEditor', true, id );
				tinymce.init({
					//tinyMCE Image Displaying Correctly, but not Updating src
					relative_urls : false,
					content_css : '',
					convert_urls : false,
					media_live_embeds: true,
					//---
					language_url : (uix_xxx_custom_metaboxes_lang.ed_lang != 'en_US' ) ? uix_xxx_custom_metaboxes_lang.ed_url +  'js/tinymce/langs/'+uix_xxx_custom_metaboxes_lang.ed_lang+'.js' : false,  // site absolute URL
					//---
					selector:  'textarea#' + id,
					height : height,
					menubar: false,
					extended_valid_elements: "a[*],svg[*],defs[*],pattern[*],desc[*],metadata[*],g[*],mask[*],path[*],line[*],marker[*],rect[*],circle[*],ellipse[*],polygon[*],polyline[*],linearGradient[*],radialGradient[*],stop[*],image[*],view[*],text[*],textPath[*],title[*],tspan[*],glyph[*],symbol[*],switch[*],use[*]",
					plugins: 'textcolor image media hr uix_xxx_cmb_customcode colorpicker lists fullscreen',		
				    toolbar: toolbar,
					setup:function( ed ) {
						
					   //Avoid formatting all contents of <textarea> 
					   const $sync = jQuery( 'textarea#' + id + '-sync' );
					   ed.on( 'change', function(e) {
						   
						   //Dynamically filter content in TinyMCE
						   var newvalue = ed.getContent()
														 .replace(/\r?\n/gm, '' )
														 .replace(/\.\.\/wp-content\/uploads\//g, uix_xxx_custom_metaboxes_lang.upload_dir_url );

						   
						   
						   $sync.val( newvalue ).trigger( 'change' );
					   });
						
						
                        //Add media button
						function uix_mce_insertImage() {
							let upload_frame;
							if( upload_frame ){
								upload_frame.open();
								return;
							}
							upload_frame = wp.media( {
								title: uix_xxx_custom_metaboxes_lang.ed_media_title,
								button: {
								text: uix_xxx_custom_metaboxes_lang.ed_media_text,
							},
								multiple: false
							} );
							upload_frame.on( 'select',function() {
								let attachment;
								attachment = upload_frame.state().get( 'selection' ).first().toJSON();
								
								//
								const videoReg = /^.*\.(avi|AVI|wmv|WMV|flv|FLV|mpg|MPG|mp4|MP4)$/gi;
								const imgReg   = /^.*\.(gif|jpe?g|tiff|png|webp|bmp)$/gi;
								const placeholderImg = '<svg width="135" x="0px" y="0px" viewBox="0 0 102.55 122.88" transform="scale(0.7) translate(-30 -55)"><path fill="#333" d="M102.55,122.88H0V0h77.66l24.89,26.44L102.55,122.88L102.55,122.88z M25.51,53.72h15.67V43.33H25.51V32.56 l15.67,0V21.85H25.51V11.08h15.67V7.83H8.43v106.23h85.77V32.36H71.52V7.83H56.86v3.29H41.18v10.71l15.68,0V32.6H41.18v10.49h15.68 v24.99c0,7.9-6.46,14.36-14.36,14.36l-2.63,0c-7.9,0-14.36-6.46-14.36-14.36V53.72L25.51,53.72z M36.28,63.07h10.28v4.06 c0,2.23-2.12,4.05-4.71,4.05h-0.86c-2.59,0-4.71-1.83-4.71-4.05V63.07L36.28,63.07L36.28,63.07z"/></svg>';
								
								
								//The RegExp object keeps track of the lastIndex where a match occurred, so on 
								//subsequent matches it will start from the last used index, instead of 0.
								videoReg.lastIndex = 0;
								imgReg.lastIndex = 0;	
								
								
								const element = attachment.url;
								
								//image or video preview
								if ( videoReg.test( element ) ) {
                                    ed.insertContent( '<video width="400" height="300" src="'+element+'" controls></video>' );
								} else if ( imgReg.test( element ) ) {
                                    ed.insertContent( '<img src="'+element+'" alt="">' );
								} else {
									ed.insertContent( '<img style="display:none;" class="mce-ed-intertplaceholder d-none" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="null"><a class="mce-ed-intertfile d-block" href="'+element+'" target="_blank" style="display: block;max-width: 100px;max-height: 120px;padding-top: 18px;">'+placeholderImg+'</a>' );
								}
		

								
							} );

							upload_frame.open();
							
						}

						ed.addButton('uix_xxx_cmb_image', {
						  icon: 'mce-ico mce-i-image',
						  tooltip: uix_xxx_custom_metaboxes_lang.ed_image,
						  onclick: uix_mce_insertImage
						});
						
						
						// Add link button
						ed.addButton('uix_xxx_cmb_link', {
							icon: 'mce-ico mce-i-link',
							tooltip: uix_xxx_custom_metaboxes_lang.ed_link_title,
							onclick: function (e) {
								
								const urlRegex     = /<a href="(.*?)"/g,
									urlMatch     = '',
									selectedtxt  = ed.selection.getContent(),
									curlabel     = selectedtxt.replace(/<a\b[^>]*>/i, '' ).replace(/<\/a>/i, '' );
								
								let	curlinkURL   = '';
								
								while( urlMatch = urlRegex.exec( selectedtxt ) ){
									curlinkURL = urlMatch[1];
								}	

								ed.windowManager.open( {
									title: uix_xxx_custom_metaboxes_lang.ed_link_title,
									body: [
									{
										type: 'textbox',
										label: uix_xxx_custom_metaboxes_lang.ed_link_field_url,
										name: 'link_url',
										value: curlinkURL,
										placeholder: 'https://',
										multiline: true,
										minWidth: 500,
										minHeight: 30,
									},
									{
										type: 'textbox',
										label: uix_xxx_custom_metaboxes_lang.ed_link_field_text,
										name: 'link_text',
										value: curlabel,
										multiline: true,
										minWidth: 500,
										minHeight: 30,
									},	   
										
									{
										type: 'checkbox',
										name: 'link_target',
										label: ' ',
										text: ' ' + uix_xxx_custom_metaboxes_lang.ed_link_field_win,
									},
				
										
									],
									onsubmit: function( e ) {
										
										const curtxt      = ( e.data.link_text != '' ) ? e.data.link_text : e.data.link_url,
											target      = ( e.data.link_target ) ? 'target="_blank"' : '';
										
										ed.insertContent( '<a href="' + e.data.link_url + '" ' + target + '>' + curtxt + '</a>');
									}
								});
							}
						});
						
						
						//Delete link button
						ed.addButton('uix_xxx_cmb_unlink', {
							icon: 'mce-ico mce-i-unlink',
							tooltip: uix_xxx_custom_metaboxes_lang.ed_unlink_title,
							onclick: function (e) {
								
								const selectedtxt  = ed.selection.getContent();
								selectedtxt = selectedtxt.replace(/<a\b[^>]*>/i, '' ).replace(/<\/a>/i, '' );
								ed.insertContent(  selectedtxt );
								
							}
						});
                        
                        
						// Add Syntax Highlight Code button
						ed.addButton('uix_xxx_cmb_highlightcode', {
							image: 'data:image/png;base64,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',
							tooltip: uix_xxx_custom_metaboxes_lang.ed_hcode_title,
							onclick: function (e) {
								
								
								ed.windowManager.open( {
									title: uix_xxx_custom_metaboxes_lang.ed_hcode_title,
									body: [
                                        {
                                            type   : 'listbox',
                                            name   : 'lang',
                                            label  : uix_xxx_custom_metaboxes_lang.ed_hcode_field_label,
                                            values : [
                                                { value: 'xml', text: 'xml' },
                                                { value: 'css', text: 'css' },
                                                { value: 'html', text: 'html/xhtml' },
                                                { value: 'xslt', text: 'xslt' },
                                                { value: 'php', text: 'php' },
                                                { value: 'javascript', text: 'javascript' },
                                                { value: 'python', text: 'python' },
                                                { value: 'applescript', text: 'applescript' },
                                                { value: 'as3', text: 'as3' },
                                                { value: 'plain', text: 'plain' },
                                                { value: 'perl', text: 'perl' },
                                                { value: 'bash', text: 'bash' },
                                                { value: 'javafx', text: 'javafx' },
                                                { value: 'ruby', text: 'ruby' },
                                                { value: 'shell', text: 'shell' },
                                                { value: 'java', text: 'java' },
                                                { value: 'sass', text: 'sass' },
                                                { value: 'scss', text: 'scss' },
                                                { value: 'scala', text: 'scala' },
                                                { value: 'sql', text: 'sql' },
                                                { value: 'coldfusion', text: 'coldfusion' },
                                                { value: 'vb', text: 'vb' },
                                                { value: 'groovy', text: 'groovy' },
                                                { value: 'erlang', text: 'erlang' },
                                                { value: 'diff', text: 'diff' },
                                                { value: 'patch', text: 'patch' },
                                                { value: 'delphi', text: 'delphi' },
                                                { value: 'pascal', text: 'pascal' },
                                                { value: 'c#', text: 'c#' },
                                                { value: 'cpp', text: 'c/c++' }
                                            ],
                                            minWidth: 350
                                        },
                                        {
                                            type: 'textbox',
                                            name: 'content',
                                            multiline: true,
                                            minWidth: ed.getParam("code_dialog_width", 600),
                                            minHeight: ed.getParam("code_dialog_height", Math.min(tinymce.DOM.getViewPort().h - 200, 500)),
                                            spellcheck: false,
                                            style: 'direction: ltr; text-align: left'
                                        },	   
										
									],
									onsubmit: function( e ) {
										
										var _content = e.data.content.replace(/(\r)*\n/g, "<br>" );

										ed.insertContent( '<pre data-language="' + e.data.lang + '" class="' + e.data.lang + ' brush: ' + e.data.lang + ';">' + _content + '</pre>');
										
										
									}
								});
							}
						});                   
                        

						
				   },
				  content_css: [
					uix_xxx_custom_metaboxes_lang.ed_url + 'css/uix-custom-metaboxes-editor.css'
				  ]
				});	
			}
			
	
			
		});
 
    };
 
}( jQuery ));


( function ( $ ) {
	'use strict';
    $.fn.UixXXXEditorInit = function( options ) {
 
        // This is the easiest way to have default options.
        const settings = $.extend({
            id      : '', 
            toolbar : '', 
            height  : '',
            init    : false
        }, options );
 
        this.each( function() {
	
            const $this    = $( this ),
                id       = settings.id, 
                toolbar  = settings.toolbar, 
                height   = settings.height;
            
            
            if ( settings.init ) {
                $this.attr( 'aria-init', 0 );
            }
			
            if ( $this.attr( 'aria-init' ) == 0 ) {
                const _textarea = $this.find( 'textarea' );
                $( document ).UixXXXMCEEditor({
                    id      : _textarea.attr( 'id' ), 
                    toolbar : _textarea.data( 'editor-toolbar' ), 
                    height  : _textarea.data( 'editor-height' )
                });     

                $this.attr( 'aria-init', 1 );
            }

	
			
		});
 
    };
 
}( jQuery ));



/*! 
 * ************************************
 * Initialize Select of Toggle (include parent category)
 *************************************
 */	

( function ( $ ) {
	'use strict';
    $.fn.UixXXXToggleSelectInit = function( options ) {
 
        // This is the easiest way to have default options.
        const settings = $.extend({
            wrapper           : '.uix-xxx-cmb__text--div--toggle.uix-xxx-cmb__text--div--toggle-customlevel',
            wrapperChild      : '.uix-xxx-cmb__text--div--toggle--child',
            fieldSelect       : '.uix-xxx-cmb__text--div--toggle__sel', 
            fieldId           : '.uix-xxx-cmb__text--div--toggle__id',
            fieldTitle        : '.uix-xxx-cmb__text--div--toggle__title',
            fieldDefaultValue : '.uix-xxx-cmb__text--div--toggle__toggleSelect',
            trigger           : '.uix-xxx-cmb__text--div--toggle__trigger'
        }, options );
 
        this.each( function() {
            
            

			// Step (1)
			// Add position attribute to each list
			//---------------
			const listItemsPosition = [];
			const $listItemsContainer = $( settings.wrapper ).first().closest( 'td' );
			$( settings.wrapper ).each( function( i )  {
				$( this ).attr('data-position', i);

				listItemsPosition.push({
					"id": $( this ).find( settings.fieldId ).val(),
					"position": i
				});
			});	


			//console.log( 'items position: ', listItemsPosition );



			// Step (2)
			// Traverse all the item IDs in the form as `all options` of select
			//---------------
			const formData = $( 'form#post' ).serializeArray();
			const variableData = Object.assign([], formData);
			//console.log('orginal data: ', formData);


			// Step (3)
			// Extract the selected options, filter other form types, and create a new array
			//---------------

			// Traverse all titles
			let _titles = [];

			formData.forEach(function(item, index){
				if ( item.name.indexOf( '_attrs_title[]' ) >= 0 ) {
					_titles.push(item.value);
				}
			});


			// Get the default parent ID (if it exists)
			let _parentIDs = [];

			formData.forEach(function(item, index){
				if ( item.name.indexOf( '_attrs_parent[]' ) >= 0 ) {
					_parentIDs.push(item.value);
				}
			});


			//
			let selectAllIDsRes = [];

			formData.forEach(function(item, index){
				if ( item.name.indexOf( '_attrs_id[]' ) >= 0 ) {
					selectAllIDsRes.push(
					   {  
						  "id": item.value
					   }
					);
				}
			});


			selectAllIDsRes.forEach(function(item, index){
				selectAllIDsRes[index].name = _titles[index];
				selectAllIDsRes[index].parent = _parentIDs[index];
			});


			//console.log('variable all data', selectAllIDsRes);

			/*
			Target data structure (selectAllIDsRes): 
			[
				{id: "1", name: "Title 1", parent: ""},
				{id: "2", name: "Title 2", parent: ""},
				{id: "3", name: "Title 3", parent: "5"},
				{id: "4", name: "Title 4", parent: "2"},
				{id: "5", name: "Title 5", parent: ""},
				{id: "6", name: "Title 6", parent: "5"},
				{id: "7", name: "Title 7", parent: ""},
				{id: "8", name: "Title 8", parent: "5"},
				{id: "9", name: "Title 9", parent: ""}
			]
			*/



			// Step (4)
			// If there is already a parent, option cannot appear in the root list
			//---------------
			const filterData = function(allData) {

				let newData = Object.assign([], allData);
				allData.forEach(function(item, k){
					for (let i = 0; i < newData.length; i++) {
						if (newData[i].parent != '') {
							newData.splice(i, 1);
						}
					}
				});

				return newData;
			};

			const variableDefaultResDataFilter = filterData(selectAllIDsRes);
			//console.log('variable data (new)(default): ', variableDefaultResDataFilter);

			/*
			Target data structure (variableDefaultResDataFilter): 
			[
				{id: "1", name: "Title 1", parent: ""},
				{id: "2", name: "Title 2", parent: ""},
				{id: "5", name: "Title 5", parent: ""},
				{id: "7", name: "Title 7", parent: ""},
				{id: "9", name: "Title 9", parent: ""}
			]
			*/




			// Step (5)
			// Construct the select HTML structure and initialize it (do not trigger in the change event)
			//---------------

			// Update appearance for each item
			const updateAppearance = function( data, stylesAndOrderUpdate ) {

				// ++++++++++++++++++++++++++++
				// sort
				// ++++++++++++++++++++++++++++

				//get the grouped data by parent id
				const groupDataSortByParentID = [];
				data.forEach(function(item1, i){
					data.forEach(function(item2, j){
						if ( item1.id === item2.parent ) groupDataSortByParentID.push({
							"id": item2.id, 
							"name": item2.name, 
							"parent": item2.parent
						});
					});

				});
				//console.log('groupDataSortByParentID: ', groupDataSortByParentID);
				/*
				Target data structure (groupDataSortByParentID): 
				[
					{id: "4", name: "Title 4", parent: "2"},
					{id: "3", name: "Title 3", parent: "5"},
					{id: "6", name: "Title 6", parent: "5"},
					{id: "8", name: "Title 8", parent: "5"}
				]
				*/


				//combine all data
				const variableResDataSortAll = [];
				let allDataWithoutParentIds = Object.assign([], data);


				//delete json
				groupDataSortByParentID.forEach(function(childItem, k){
					for (let i = 0; i < allDataWithoutParentIds.length; i++) {
						if (allDataWithoutParentIds[i].id == childItem.id) {
							allDataWithoutParentIds.splice(i, 1);
						}
					}
				});


				//console.log('allDataWithoutParentIds: ', allDataWithoutParentIds);

				/*
				Target data structure (allDataWithoutParentIds): 
				[
					{id: "1", name: "Title 1", parent: ""},
					{id: "2", name: "Title 2", parent: ""},
					{id: "5", name: "Title 5", parent: ""},
					{id: "7", name: "Title 7", parent: ""},
					{id: "9", name: "Title 9", parent: ""}
				]
				*/


				allDataWithoutParentIds.forEach(function(item, i){

					variableResDataSortAll.push(item);

					groupDataSortByParentID.forEach(function(childItem, i){
						if ( childItem.parent === item.id ) {
							variableResDataSortAll.push( childItem );
						}
					});


				});

				//console.log('variable all data (sort list): ', variableResDataSortAll);

				
				
				/*
				Target data structure (variableResDataSortAll): 
				[
					{id: "1", name: "Title 1", parent: ""},
					{id: "2", name: "Title 2", parent: ""},
					{id: "4", name: "Title 4", parent: "2"},
					{id: "5", name: "Title 5", parent: ""},
					{id: "3", name: "Title 3", parent: "5"},
					{id: "6", name: "Title 6", parent: "5"},
					{id: "8", name: "Title 8", parent: "5"},
					{id: "7", name: "Title 7", parent: ""},
					{id: "9", name: "Title 9", parent: ""}	
				]
				*/	
				



				// Change the order of html elements through the `data-position` attribute
				const listItemsNewPosition = Object.assign([], listItemsPosition);
				listItemsNewPosition.forEach(function(oldItem, i){
					variableResDataSortAll.forEach(function(newItem, j){
						if ( oldItem.id === newItem.id ) {
							oldItem.position = j;
						}
					});

				});

				//console.log( 'items position (new): ', listItemsNewPosition);

				/*
				Target data structure (listItemsNewPosition): 
				[
					{id: "1", position: 0},
					{id: "2", position: 1},
					{id: "3", position: 4},
					{id: "4", position: 2},
					{id: "5", position: 3},
					{id: "6", position: 5},
					{id: "7", position: 7},
					{id: "8", position: 6},
					{id: "9", position: 8}
				]	

				*/	


				// Update the new `data-position` attribute to the HTML element
				listItemsNewPosition.forEach(function(item, i){
					const $wrapper = $( settings.fieldId + '[value="'+item.id+'"]').closest( settings.wrapper );
					$wrapper.attr( 'data-position', item.position );
				});


				// Sort HTML elements based on data attribute value
				if ( stylesAndOrderUpdate ) {
					
					const listItems = [];
					$( settings.wrapper ).each( function( i )  {
						listItems.push( $( this ) );
					});	

					listItems.sort(function (a, b) {
						return parseFloat( $(b).attr('data-position') ) < parseFloat( $(a).attr('data-position') ) ? 1 : -1;
					});


					listItems.forEach(function(item, i){
						item.appendTo( $listItemsContainer );
					});
					
					

					//Initialize Editor
					setTimeout(function() {
						UixXXXCustomMetaboxesInit.editor( true );   
					}, 100);
					
				}//endif stylesAndOrderUpdate




				
				// ++++++++++++++++++++++++++++
				// styles
				// ++++++++++++++++++++++++++++
				if ( stylesAndOrderUpdate ) {
					
					data.forEach(function(item, index){

						const pid = item.parent;
						const $wrapper = $( settings.fieldId + '[value="'+item.id+'"]').closest( settings.wrapper );
						const childClassName = settings.wrapperChild.replace( '.', '' );
						if ( pid != '' ) {
							$wrapper.addClass( childClassName );
						} else {
							$wrapper.removeClass( childClassName );
						}	

					});
					
				}//endif stylesAndOrderUpdate

				
				
		
				// ++++++++++++++++++++++++++++
				// The data stored in PHP uses the reserved method
				// ++++++++++++++++++++++++++++
				
				// reversed method --> allDataWithoutParentIds
				const allDataWithoutParentIdsReversed = Object.assign([], allDataWithoutParentIds);
				const variableResDataSortAllReversed = [];
				allDataWithoutParentIdsReversed.reverse();
				
				allDataWithoutParentIdsReversed.forEach(function(item, i){

					variableResDataSortAllReversed.push(item);

			
					// Loop through an array backward
					const groupDataSortByParentIDReversed = groupDataSortByParentID.slice().reverse();		
					groupDataSortByParentIDReversed.forEach(function(childItem, i){
						if ( childItem.parent === item.id ) {
							variableResDataSortAllReversed.push( childItem );
						}
					});


				});
				
				//console.log('variable all data (sort list)(reversed): ', variableResDataSortAllReversed);
				
				
				
				
				//Repackage all the data of the form fields and save it to the database of the PHP 
				const createPHPData = function( data ) {
					const phpData = [];
					data.forEach(function(item, j){
						const $wrapper = $( settings.fieldId + '[value="'+item.id+'"]').closest( settings.wrapper );
						const fieldData = $wrapper.find( '*' ).serializeArray();
						

						// Traverse all field to match PHP array
						const phpDataItem = {};
						fieldData.forEach(function(item, index){
							if ( item.name.indexOf( '_attrs_title[]' ) >= 0 ) phpDataItem.name = item.value;
							if ( item.name.indexOf( '_attrs_id[]' ) >= 0 ) phpDataItem.id = item.value;
							if ( item.name.indexOf( '_attrs_parent[]' ) >= 0 ) phpDataItem.parent = item.value;
							if ( item.name.indexOf( '_attrs_desc[]' ) >= 0 ) phpDataItem.desc = item.value.replace(/ /g, '&nbsp;');
							if ( item.name.indexOf( '_attrs_classname[]' ) >= 0 ) phpDataItem.classname = item.value;
							if ( item.name.indexOf( '_attrs_value_sync[]' ) >= 0 ) phpDataItem.value = item.value;
						});

						
						phpData.push( phpDataItem );

					});	
			
					return JSON.stringify( phpData );
				};
				
				console.log( '"Multiple Content Area" data: ', variableResDataSortAllReversed, '"Multiple Content Area" data(reversed): ', variableResDataSortAll );
				
				
				$listItemsContainer.find( 'textarea.uix-xxx-cmb__custom-attributes-field__resultData' ).val( createPHPData(variableResDataSortAllReversed) );

				$listItemsContainer.find( 'textarea.uix-xxx-cmb__custom-attributes-field__resultReverseData' ).val( createPHPData(variableResDataSortAll) );
				
				

			};


			// Generate HTML code of select control
			const selectBuilder = function( data, parentID, removeID ) {
				let html_code = '<select class="uix-xxx-cmb__text--fullwidth uix-xxx-cmb__text--div--toggle__sel">';
				html_code += '<option value=""> - </option>';
				data.forEach(function(item, index){
					const selected = parentID ? (item.id === parentID ? 'selected' : '') : '';

					// If the current option and ID overlap, remove the current option
					if ( removeID && removeID != item.id ) {
						html_code += '<option value="' + item.id + '" '+selected+'>' + item.name + '</option>';
					}

				});

				html_code += '</select>';	

				return html_code;
			};


			// Update select controls and push to each list
			const updateSelects = function(dataFilter, dataAll) {


				// Get items with parent ID
				const hasParentIDs = [];
				for (let i = 0;i < dataAll.length; i++) {
					for (let j = 0;j < dataAll.length; j++) {
						//console.log( dataAll[i].id + '==== ' + dataAll[j].parent);
						if ( dataAll[i].id == dataAll[j].parent ) {
							hasParentIDs.push( dataAll[j].parent );
						}
					}
				}

				const hasParentIDsRes = [];
				for (let i = 0; i < hasParentIDs.length; i++) {
					if (hasParentIDsRes.indexOf(hasParentIDs[i]) === -1) {
						hasParentIDsRes.push(hasParentIDs[i]);
					}
				}



				//
				$( settings.wrapper ).each( function()  {

					const $wrapper = $( this );
					const _cid = $wrapper.find( settings.fieldId ).val();
					const _pid = $wrapper.find( settings.fieldDefaultValue ).val();
					let _code = selectBuilder( dataFilter, false, _cid );


					// If there is a parent ID, the parent option is empty 
					for (let k = 0; k < hasParentIDsRes.length; k++) {
						if (hasParentIDsRes[k] === _cid ) {
							let _codeEmpty = '<select class="uix-xxx-cmb__text--fullwidth uix-xxx-cmb__text--div--toggle__sel">';
							_codeEmpty += '<option value=""> - </option>';
							_codeEmpty += '</select>';	
							_code = _codeEmpty;	

							break;
						}
					}


					//
					$wrapper.find( '.uix-xxx-cmb__text--div--toggle__toggleSelect__append' ).html( _code ).promise().done( function(){

						//init default value for select control
						$wrapper.find( '.uix-xxx-cmb__text--div--toggle__toggleSelect__append > select' ).val( _pid );

					});
				});	


				//update appearance for each item (include styles & order HTML elements)
				updateAppearance( dataAll, true );



			};

			updateSelects( variableDefaultResDataFilter, selectAllIDsRes );


			
			

			// Step (6)
			// Change event, change json structure (do not trigger dom)
			//---------------
			const updateData = function(data, curID, targetValue) {

				//console.log('data: ', data);
				for (let i = 0; i < data.length; i++) {
					if (data[i]['id'] == curID) {
						data[i].parent = targetValue;
					}
				}
				return data;
			};

			//
			$( document ).off( 'change.UixXXXToggleSelect' ).on( 'change.UixXXXToggleSelect', settings.wrapper + ' .uix-xxx-cmb__text--div--toggle__toggleSelect__append > select', function() {

				const parentID = $( this ).val();
				const $wrapper = $( this ).closest( settings.wrapper );
				const curID = $wrapper.find( settings.fieldId ).val();
				const resData = updateData( selectAllIDsRes, curID, parentID );
				let variableResData = Object.assign([], resData);

				$wrapper.find( settings.fieldDefaultValue ).val( parentID );

		
				//console.clear();
				//console.log('variable all data (changed by select): ', resData);


				//filter data
				const variableResDataFilter = filterData(variableResData);
				//console.log('variable data (new): ', variableResDataFilter);

				//update options
				updateSelects( variableResDataFilter, resData );



			}); 


			
			//
			$( document ).off( 'change.UixInputTextarea' ).on( 'change.UixInputTextarea', settings.wrapper + ' .uix-xxx-cmb__text--div--toggle__title, ' + settings.wrapper + ' .uix-xxx-cmb__text--div--toggle__classname, ' + settings.wrapper + ' .uix-xxx-cmb__text--div--toggle__textarea, ' + settings.wrapper + ' textarea[data-enter-value="true"]', function() {

				//update appearance for each item
				updateAppearance( selectAllIDsRes, false );

			}); 

			
			
            
		});
 
    };
 
}( jQuery ));




/*! 
 * ************************************
 * Initialize Simple Select of Toggle
 *************************************
 */	
( function ( $ ) {
	'use strict';
    $.fn.UixXXXToggleSimpleSelectInit = function( options ) {
 
        // This is the easiest way to have default options.
        const settings = $.extend({ 
            type              : 'file',
            wrapper           : '.uix-xxx-cmb__text--div--toggle:not(.uix-xxx-cmb__text--div--toggle-customlevel)',
            trigger           : '.uix-xxx-cmb__text--div--toggle__trigger'
        }, options );
 
        this.each( function( index ) {
            
            const $this = $( this ),
                $selInput = $this.prev( '[type="hidden"]' );
			
            let defaultVal = $selInput.val();
            
            
            if ( defaultVal == '' ) {
                defaultVal = $this.find( 'option:selected' ).val();
            }
            
            //Get the root container style
            let el = '';
            const elArr = $this[0].classList;

            if ( elArr && elArr.length ) {
                elArr.forEach( function( element ) {
                    el += '.' + element;
                });    
            }
            
            
            //Determine if it is the last element
            const last = ( index == $( el ).length - 1 ) ? true : false;
            
            
            if ( settings.type == 'html' && last ) {
                defaultVal = $this.find( 'option' ).eq( 1 ).val();
            }

            
            //set default value for select
            $selInput.val( defaultVal );    
            $this.val( defaultVal );    
            $this.closest( settings.wrapper ).find( settings.trigger ).find( 'span' ).html( $this.find( 'option:selected' ).text() );

            
            //Display or hide fields
            switch( defaultVal ) {
                case 'file':
                $this.closest( settings.wrapper ).find( '.uix-xxx-cmb__text--row[data-type="file"]' ).show();
                $this.closest( settings.wrapper ).find( '.uix-xxx-cmb__text--row[data-type="html"]' ).hide();
                break;

                case 'html':
                $this.closest( settings.wrapper ).find( '.uix-xxx-cmb__text--row[data-type="file"]' ).hide();
                $this.closest( settings.wrapper ).find( '.uix-xxx-cmb__text--row[data-type="html"]' ).show();
                break;      
            }      
            
               

            //Store temporary default value
            $this.off( 'change.UixXXXToggleSimpleSelect' ).on( 'change.UixXXXToggleSimpleSelect', function() {
                $selInput.val( $( this ).val() );
                $( this ).closest( settings.wrapper ).find( settings.trigger ).find( 'span' ).html( $( this ).find( 'option:selected' ).text() );
            }); 
            
                

            
		});
 
    };
 
}( jQuery ));

/*! 
 * ************************************
 * Create GUID / UUID
 *
 * @private
 * @description This function can be used separately in HTML pages or custom JavaScript.
 * @return {String}                        - The globally-unique identifiers.
 *************************************
 */	
function UixXXXGUIDCreate() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = Math.random() * 16 | 0,
			  v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}



/*! 
 * ************************************
 * Get the real form ID from the associated attribute "data-targetid"
 *
 * Note: Used for controls "toggle", "checkbox", "radio"
 *
 * @param  {string} targetID          - All id of the target control. Like this: uix_pb_???_??, uix_pb_???_??, uix_pb_???_??,
 * @return {string}                   - Converted value matching this (clone) control ID. Note that the prefix has a "#".
                                            Like this: [name="cus_field_???1"],
											           [name="cus_field_???2"],
													   [name="cus_field_???3"],
 
 
 *	 
 *************************************
 */	
function UixXXXGetRealIds( targetID ) {
	
	let result = '';
	if ( typeof targetID !== typeof undefined && targetID != '' ) {

		targetID = targetID.replace(/,\s*$/, '' );
		const ids = targetID.split( ',' );

		for ( let i = 0; i < ids.length; i++ ) {

			if ( ids[i] != '' ) {
				result += '[name="' + ids[i] + '"],';
			}

		}//end for
		result = result.replace(/,\s*$/, '' );

	}	
	return result;
}

