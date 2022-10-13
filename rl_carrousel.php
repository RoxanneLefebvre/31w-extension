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

function genere_boite(){
$contenu="<div class='carrousel'>Carrousel</div>";
return $contenu;
};
add_shortcode('rl_carrousel', 'genere_boite');