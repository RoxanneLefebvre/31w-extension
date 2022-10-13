<?php /*
package carrousel Roxanne Lefebvre
version 1.0.0
*/


/*
Plugin Name: RL_carrousel
Description: description debut dun carrousel pour mon premier site wordpress
Author: Roxanne Lefebvre
Version: 1.0.0
*/

/*
filemtime()  // retourne en milliseconde le temps de la dernière sauvegarde
plugin_dir_path() // retourne le chemin du répertoire du plugin
__FILE__ // le fichier en train de s'exécuter
wp_enqueue_style() // Intègre le link:css dans la page
wp_enqueue_script() // intègre le script dans la page
wp_enqueue_scripts // le hook
*/
function rlc_enqueue(){
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js  = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");
    
    wp_enqueue_style("rlc_style_carrousel",
        plugin_dir_url(__file__) . "style.css",
        array(),
        $version_css,
        false  
    );

    wp_enqueue_script("rlc_js_carrousel",
        plugin_dir_url(__file__) . "js/carrousel.js",
        array(),
        $version_js,
        false  
    );
};

add_action('wp_enqueue_scripts', 'rlc_enqueue');

function genere_boite(){
    $contenu="<div class='carrousel'>Carrousel</div>";
    return $contenu;
};

add_shortcode('rl_carrousel', 'genere_boite');