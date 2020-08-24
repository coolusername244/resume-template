        function initMap() {
            let map = new google.maps.Map(document.getElementById('map'), {             // This line will be putting the map within the div named 'map'
                zoom: 3,                                                                // Zoom level 3
                center: {                                                               // Co-ordinates for the center of the map when loaded
                    lat: 46.619261,
                    lng: -33.134766    
                }
            });
            
            let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';                                  // Each location will need a label and here are enough labels for 26 locations

            let locations = [{                                                          // An array of objects, each object contains co-ordinates for a location
                lat: 40.785091,                                                         // This will be labelled A
                lng: -73.968285
            }, {    
                lat: 41.084045,                                                         // This will be labelled B
                lng: -73.874256
            }, {
                lat: 40.754932,                                                         // This will be labelled C
                lng: -73.984016
            }];

            let markers = locations.map(function(location, i) {                         // 'map' method is JS not Google, similar to a ForEach function. 
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]                                    // Using the % (modular operator), means that when we have more than 26 locations, it will go from Z back to A without errors
                });
            });

            let markerCluster = new MarkerClusterer(map, markers, {                     // code taken from Google to create the markers and cluster if we zoom out far enough
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }