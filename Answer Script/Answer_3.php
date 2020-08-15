<? 

$json = '[{ eagle: 13, sparrow: 15, robin: 12, bluebird: 11 }]';  // Assign Json to var

$jsonObj = json_decode($json);  // Decode the JSON to OBJ

// Now loop and find the SUM

$total = 0;
foreach ($jsonObj as $item){
    $total =+ $item->price;
}


// Print the SUM
echo "Sum : $total";
// Sum : 51
?>

