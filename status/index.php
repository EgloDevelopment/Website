<?php include("../resources/headers/header.php"); ?>
<div class="map-div">
<iframe width="100%" height="300px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/en/map/untitled-map_781884?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe>
</div>

<?php
function isSiteAvailible($url){
    // Check, if a valid url is provided
    if(!filter_var($url, FILTER_VALIDATE_URL)){
        return false;
    }

    // Initialize cURL
    $curlInit = curl_init($url);
    
    // Set options
    curl_setopt($curlInit,CURLOPT_CONNECTTIMEOUT,10);
    curl_setopt($curlInit,CURLOPT_HEADER,true);
    curl_setopt($curlInit,CURLOPT_NOBODY,true);
    curl_setopt($curlInit,CURLOPT_RETURNTRANSFER,true);

    // Get response
    $response = curl_exec($curlInit);
    
    // Close a cURL session
    curl_close($curlInit);

    return $response?true:false;
}


$URL1 = 'https://eglo.pw';
$URL2 = 'https://us-1.eglo.pw';
$URL3 = 'https://us-2.eglo.pw';
$URL4 = 'https://us-3.eglo.pw';


if(isSiteAvailible($URL1)){
    echo '<div class="status-up">';
    echo 'Eglo.pw is UP';      
    echo '</div>';
}else{
    echo '<div class="status-down">';
    echo 'Eglo.pw is DOWN';      
    echo '</div>'; 
}

if(isSiteAvailible($URL2)){
    echo '<div class="status-up">';
    echo 'US-1 is UP';      
    echo '</div>';
}else{
    echo '<div class="status-down">';
    echo 'US-1 is DOWN';      
    echo '</div>'; 
}

if(isSiteAvailible($URL3)){
    echo '<div class="status-up">';
    echo 'US-2 is UP';      
    echo '</div>';
}else{
    echo '<div class="status-down">';
    echo 'US-2 is DOWN';      
    echo '</div>'; 
}

if(isSiteAvailible($URL4)){
    echo '<div class="status-up">';
    echo 'US-3 is UP';      
    echo '</div>';
}else{
    echo '<div class="status-down">';
    echo 'US-3 is DOWN';      
    echo '</div>'; 
}

?>