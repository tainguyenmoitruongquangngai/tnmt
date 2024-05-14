export function calculateBounds(kmlDoc:any) {
    const coords = kmlDoc.getElementsByTagName('coordinates');
    let minLat = Infinity, maxLat = -Infinity, minLng = Infinity, maxLng = -Infinity;
  
    for (let i = 0; i < coords.length; i++) {
      const points = coords[i].textContent.trim().split(/\s+/);
      points.forEach((point:any) => {
        const parts = point.split(',');
        const lng = parseFloat(parts[0]);
        const lat = parseFloat(parts[1]);
        if (lat < minLat) minLat = lat;
        if (lat > maxLat) maxLat = lat;
        if (lng < minLng) minLng = lng;
        if (lng > maxLng) maxLng = lng;
      });
    }
  
    return (minLat === Infinity || maxLat === -Infinity || minLng === Infinity || maxLng === -Infinity) ? null : {
      center: [(minLat + maxLat) / 2, (minLng + maxLng) / 2],
      zoom: 11  // Zoom level can be adjusted based on your specific needs
    };
  }

  export async function fetchAndParseKML(fileUrl:any) {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        console.error(`Failed to load KML file from ${fileUrl}: Status ${response.status}`);

        return null; // Or handle differently, perhaps a fallback or retry
      }
      const kmlText = await response.text();
      const parser = new DOMParser();

      return parser.parseFromString(kmlText, 'text/xml');
    } catch (error) {
      console.error('Error fetching or parsing KML file:', error);

      return null;
    }
  }
  