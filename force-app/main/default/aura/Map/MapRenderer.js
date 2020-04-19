({
    rerender: function (component) {
        
        var nodes = this.superRerender();
        
        var location = component.get('v.location');
		    
        if (!location) {
           
        } else {
            // If the Leaflet library is not yet loaded, we can't draw the map: return
            if (!window.L) {
                return nodes;
                console.log('inside leaflet');
            }
            console.log('outside leaflet');
            // Draw the map if it hasn't been drawn yet
            if (!component.map) {
                var mapElement = component.find("map").getElement();
                component.map = L.map(mapElement, {zoomControl: true}).setView([42.356045, -71.085650], 13);
                component.map.scrollWheelZoom.disable();
                window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles © Esri'}).addTo(component.map);
				console.log('inside draw the map');                
            }
            
            
            
            if (location && location.latitude && location.longitude) {
                var latLng = [location.latitude, location.longitude];
                console.log('after everything' + latLng);
                if (component.marker) {
                    component.marker.setLatLng(latLng);
                } else {
                    component.marker = window.L.marker(latLng);
                    component.marker.addTo(component.map);
                }
                component.map.setView(latLng);
                
            }
            
            return nodes;
        }
        
    }
})