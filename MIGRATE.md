# Migrated strings:

These strings are used as naming prefixes for different WP plugins to prevent conflicts.

**Note: Batch replacement from top to bottom. Please note that it must be case sensitive.**

-----


### a) Migrate to Uix Shortcodes:

#### step 1) README.md file:

- `# Uix Custom Meta Boxes ( For XXX and your Theme )`  -->  `# Uix Custom Meta Boxes ( For Uix Shortcodes and your Theme )`  


#### step 2) Language Text Domain (Internationalization):

- `your-theme`  -->  `uix-shortcodes`


#### step 3) File paths:

- `'uix-custom-metaboxes/';`  -->  `UixShortcodes::plug_directory() .'includes/admin/uix-custom-metaboxes/';`


#### step 4) Other files:

- `Uix_XXX_Custom_Metaboxes`  -->  `Uix_Custom_Metaboxes`
- `Uix_XXX_Cmb`  -->  `Uix_Cmb`
- `UixXXXCustomMetaboxes`  -->  `UixCustomMetaboxes`
- `UixXXXCmb`  -->  `UixCmb`
- `uix_xxx_cmb`  -->  `uix_cmb`
- `uix_xxx_custom_metaboxes`  -->  `uix_custom_metaboxes`
- `uix-xxx-cmb`  -->  `uix-cmb`


#### step 5) JS file function name:

- `UixXXXGetRealIds`  -->  `UixGetRealIds`
- `UixXXXGUIDCreate`  -->  `UixGUIDCreate`
- `UixXXXToggle`  -->  `UixToggle`
- `UixXXXEditor`  -->  `UixEditor`
- `UixXXXMCE`  -->  `UixMCE`




### b) Migrate to Uix Slideshow:

#### step 1) README.md file:

- `# Uix Custom Meta Boxes ( For XXX and your Theme )`  -->  `# Uix Custom Meta Boxes ( For Uix Slideshow and your Theme )`  


#### step 2) Language Text Domain (Internationalization):

- `your-theme`  -->  `uix-shortcodes`


#### step 3) File paths:

- `'uix-custom-metaboxes/';`  -->  `UixSlideshow::plug_directory() .'includes/admin/uix-custom-metaboxes/';`


#### step 4) Other files:

- `Uix_XXX_Custom_Metaboxes`  -->  `Uix_Slideshow_Custom_Metaboxes`
- `Uix_XXX_Cmb`  -->  `Uix_Slideshow_Cmb`
- `UixXXXCustomMetaboxes`  -->  `UixSlideshowCustomMetaboxes`
- `UixXXXCmb`  -->  `UixSlideshowCmb`
- `uix_xxx_cmb`  -->  `uix_slideshow_cmb`
- `uix_xxx_custom_metaboxes`  -->  `uix_slideshow_custom_metaboxes`
- `uix-xxx-cmb`  -->  `uix-slideshow-cmb`


#### step 5) JS file function name:

- `UixXXXGetRealIds`  -->  `UixSlideshowGetRealIds`
- `UixXXXGUIDCreate`  -->  `UixSlideshowGUIDCreate`
- `UixXXXToggle`  -->  `UixSlideshowToggle`
- `UixXXXEditor`  -->  `UixSlideshowEditor`
- `UixXXXMCE`  -->  `UixSlideshowMCE`




### c) Migrate to Uix Products:

#### step 1) README.md file:

- `# Uix Custom Meta Boxes ( For XXX and your Theme )`  -->  `# Uix Custom Meta Boxes ( For Uix Products and your Theme )`  


#### step 2) Language Text Domain (Internationalization):

- `your-theme`  -->  `uix-products`


#### step 3) File paths:

- `'uix-custom-metaboxes/';`  -->  `UixProducts::plug_directory() .'includes/admin/uix-custom-metaboxes/';`


#### step 4) Other files:

- `Uix_XXX_Custom_Metaboxes`  -->  `Uix_Products_Custom_Metaboxes`
- `Uix_XXX_Cmb`  -->  `Uix_Products_Cmb`
- `UixXXXCustomMetaboxes`  -->  `UixProductsCustomMetaboxes`
- `UixXXXCmb`  -->  `UixProductsCmb`
- `uix_xxx_cmb`  -->  `uix_products_cmb`
- `uix_xxx_custom_metaboxes`  -->  `uix_products_custom_metaboxes`
- `uix-xxx-cmb`  -->  `uix-products-cmb`


#### step 5) JS file function name:

- `UixXXXGetRealIds`  -->  `UixProductsGetRealIds`
- `UixXXXGUIDCreate`  -->  `UixProductsGUIDCreate`
- `UixXXXToggle`  -->  `UixProductsToggle`
- `UixXXXEditor`  -->  `UixProductsEditor`
- `UixXXXMCE`  -->  `UixProductsMCE`




