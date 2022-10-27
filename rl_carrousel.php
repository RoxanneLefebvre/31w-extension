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
        true  
    );
};

add_action('wp_enqueue_scripts', 'rlc_enqueue');

function genere_boite(){
    $contenu="
    
    <div class='carrousel'>
<button class='btn_close'>X</button>

<svg class='btn_fleche btn_fleche--gauche' data-tn='arrow-left' viewBox='-8.5 0 32 32'><path d='M14 32c-.3 0-.6-.1-.8-.3l-13-15c-.3-.4-.3-.9 0-1.3l13-15c.4-.4 1-.5 1.4-.1.4.4.5 1 .1 1.4L2.3 16l12.4 14.3c.4.4.3 1-.1 1.4-.2.2-.4.3-.6.3z'></path></svg>
<svg class='btn_fleche btn_fleche--droite' data-tn='arrow-right' viewBox='-8.5 0 32 32'><path d='M1 0c.3 0 .6.1.8.3l13 15c.3.4.3.9 0 1.3l-13 15c-.4.4-1 .5-1.4.1-.4-.4-.5-1-.1-1.4L12.6 16 .2 1.7C-.2 1.3-.1.7.3.3.5.1.8 0 1 0z'></path></svg>
<figure class='carrousel__figure'></figure>
<form class='carrousel__form'></form>
</div>
    ";
    return $contenu;
};

add_shortcode('rl_carrousel', 'genere_boite');


