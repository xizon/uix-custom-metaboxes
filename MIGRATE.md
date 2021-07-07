# Migrated strings:

These strings are used as naming prefixes for different WP plugins to prevent conflicts.

**Note: Batch replacement from top to bottom. Please note that it must be case sensitive.**

-----


### a) Migrate to Uix Shortcodes via `uix-custom-metaboxes`:

Modify the README.md file:

- `# Uix Custom Meta Boxes`  -->  `# Uix Custom Meta Boxes ( For Uix Shortcodes and your Theme )`  

Other files:

- `your-theme`  -->  `uix-shortcodes`
- `'/uix-custom-metaboxes/';`  -->  `UixShortcodes::plug_directory() .'includes/admin/uix-custom-metaboxes/';`




### b) Migrate to Uix Slideshow via `Uix Shortcodes -> uix-custom-metaboxes`:

Modify the README.md file:

- `# Uix Custom Meta Boxes ( For Uix Shortcodes and your Theme )`  -->  `# Uix Custom Meta Boxes ( For Uix Slideshow and your Theme )`  

Other files:

- `UixShortcodes`  -->  `UixSlideshow`
- `Uix_Custom_Metaboxes`  -->  `Uix_Slideshow_Custom_Metaboxes`
- `uix_custom_metaboxes`  -->  `uix_slideshow_custom_metaboxes`
- `uix-cmb`  -->  `uix-slideshow-cmb`
- `uix_cmb`  -->  `uix_slideshow_cmb`
- `UixCmb`  -->  `UixSlideshowCmb`
- `Uix_Cmb`  -->  `Uix_Slideshow_Cmb`
- `UixCustomMetaboxes`  -->  `UixSlideshowCustomMetaboxes`
- `UixGetRealIds`  -->  `UixSlideshowGetRealIds`
- `UixGUIDCreate`  -->  `UixSlideshowGUIDCreate`
- `UixToggle`  -->  `UixSlideshowToggle`
- `UixEditor`  -->  `UixSlideshowEditor`
- `UixMCE`  -->  `UixSlideshowMCE`
- `uix-shortcodes`  -->  `uix-slideshow`





### c) Migrate to Uix Products via `Uix Shortcodes -> uix-custom-metaboxes`:

Modify the README.md file:

- `# Uix Custom Meta Boxes ( For Uix Shortcodes and your Theme )`  -->  `# Uix Custom Meta Boxes ( For Uix Products and your Theme )` 

Other files:

- `UixShortcodes`  -->  `UixProducts`
- `Uix_Custom_Metaboxes`  -->  `Uix_Products_Custom_Metaboxes`
- `uix_custom_metaboxes`  -->  `uix_products_custom_metaboxes`
- `uix-cmb`  -->  `uix-products-cmb`
- `uix_cmb`  -->  `uix_products_cmb`
- `UixCmb`  -->  `UixProductsCmb`
- `Uix_Cmb`  -->  `Uix_Products_Cmb`
- `UixCustomMetaboxes`  -->  `UixProductsCustomMetaboxes`
- `UixGetRealIds`  -->  `UixProductsGetRealIds`
- `UixGUIDCreate`  -->  `UixProductsGUIDCreate`
- `UixToggle`  -->  `UixProductsToggle`
- `UixEditor`  -->  `UixProductsEditor`
- `UixMCE`  -->  `UixProductsMCE`
- `uix-shortcodes`  -->  `uix-products`






