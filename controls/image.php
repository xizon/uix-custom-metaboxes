<?php
/**
* Field Type: Image
*
*/
class UixXXXCmbFormType_Image extends Uix_XXX_Custom_Metaboxes {
	
	public static function add( $id = '', $title = '', $desc = '', $default = '', $options = '', $placeholder = '', $desc_primary = '', $enable_table = false ) {


		$label_controller_up_remove   = esc_attr__( 'Remove', 'your-theme' );
		$label_controller_up_add      = esc_html__( 'Select image or video', 'your-theme' );

		//---
		if ( is_array ( $options ) ) {
			if ( isset( $options[ 'label_controller_up_remove' ] ) ) $label_controller_up_remove = $options[ 'label_controller_up_remove' ];
			if ( isset( $options[ 'label_controller_up_add' ] ) ) $label_controller_up_add = $options[ 'label_controller_up_add' ]; 

		}

	?>
		<?php if ( $enable_table ) : ?>
		<tr>
			<th class="uix-xxx-cmb__title">
				<label><?php echo self::kses( $title ); ?></label>
				<?php if ( !empty ( $desc ) ) { ?>
					<p class="uix-xxx-cmb__title_desc"><?php echo self::kses( $desc ); ?></p>
				<?php } ?>
			</th>
			<td>
		<?php endif; ?>   

					<div class="uix-xxx-cmb__upload-wrapper">
						<?php
						Uix_XXX_Cmb_UploadMedia::add( array(
							'title'          => '',
							'id'             => esc_attr( $id ),
							'name'           => esc_attr( $id ),
							'value'          => esc_url( $default ),
							'placeholder'    => esc_attr( $placeholder ),
							'label_remove'   => esc_attr( $label_controller_up_remove ),
							'label_add'      => esc_html( $label_controller_up_add ),
						));
						?>
					</div>


					<?php if ( !empty ( $desc_primary ) ) { ?>
						<p class="uix-xxx-cmb__description"><?php echo self::kses( $desc_primary ); ?></p>
					<?php } ?>

		<?php if ( $enable_table ) : ?>   
			</td>
		</tr>
		<?php endif; ?>

	<?php	
	}	


}
