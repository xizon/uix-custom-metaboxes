<?php
/**
* Field Type: Number
*
*/
class UixXXXCmbFormType_Number extends Uix_XXX_Custom_Metaboxes {
	
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

				   <input placeholder="<?php echo esc_attr( $placeholder ); ?>" type="text" class="uix-xxx-cmb__short-text" value="<?php echo ( empty( $default ) ) ? 0 : floatval( $default ); ?>" name="<?php echo esc_attr( $id ); ?>" id="<?php echo esc_attr( $id ); ?>">
					<?php 
					if ( is_array ( $options ) && isset( $options[ 'units' ] ) ) {
						echo esc_html( $options[ 'units' ] );
					} 
					?>					   

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
