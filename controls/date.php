<?php
/**
* Field Type: Date
*
*/
class UixXXXCmbFormType_Date extends Uix_XXX_Custom_Metaboxes {
	
	public static function add( $id = '', $title = '', $desc = '', $default = '', $options = '', $placeholder = '', $desc_primary = '', $enable_table = false ) {
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


					<?php 

						$format = 'MM dd, yy';
						if ( is_array ( $options ) && isset( $options[ 'format' ] ) ) {
							$format = $options[ 'format' ];
						}

					?>   

				   <input data-format="<?php echo esc_attr( $format ); ?>" placeholder="<?php echo esc_attr( $placeholder ); ?>" type="text" class="uix-xxx-cmb__short-text uix-xxx-cmb__date-selector" value="<?php echo esc_attr( $default ); ?>" name="<?php echo esc_attr( $id ); ?>" id="<?php echo esc_attr( $id ); ?>">
					<?php if ( !empty ( $desc_primary ) ) { ?>
						<span class="uix-xxx-cmb__description"><?php echo self::kses( $desc_primary ); ?></span>
					<?php } ?>

		<?php if ( $enable_table ) : ?>  
			</td>
		</tr>
		<?php endif; ?>
	<?php	
	}	


}
