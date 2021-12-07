mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuZHJhYWduZXMiLCJhIjoiY2t3YzM1bjlwMzBvdTJvcDh5ZDF2OW5qciJ9.v20_qcP9s2aZVFTtC90sBQ';

const map = new mapboxgl.Map({
    container: "map", 
    style: 'mapbox://styles/sandraagnes/ckwc3celf1m7p15lr3zvuq69z', // map hasil buat sendiri dengan tambahan layer rel kereta yang diperbesar
    center: [112.363059,-7.650318], 
    zoom: 8.8 
});

// list stasiun 
const stations = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.1627594, -8.101493]
      },
      'properties': {
        'address': 'Blitar',
        'city': 'Blitar',
        'country': 'Indonesia',
        'postalCode': '66111',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.216842, -8.0735789]
      },
      'properties': {
        'address': 'Garum',
        'city': 'Blitar',
        'country': 'Indonesia',
        'postalCode': '66182',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.28855448988952, -8.09058192049134]
      },
      'properties': {
        'address': 'Talun',
        'city': 'Blitar',
        'country': 'Indonesia',
        'postalCode': '66183',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.31998997948277, -8.087501514391716]
      },
      'properties': {
        'address': 'Wlingi',
        'city': 'Blitar',
        'country': 'Indonesia',
        'postalCode': '66184',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.363377392766076, -8.149275083781978]
      },
      'properties': {
        'address': 'Kesamben',
        'city': 'Blitar',
        'country': 'Indonesia',
        'postalCode': '66191',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.42010944553098, -8.157112283142158]
      },
      'properties': {
        'address': 'Pohgajih',
        'city': 'Blitar',
        'country': 'Indonesia',
        'postalCode': '66192',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.47830265303944, -8.158259272766227]
      },
      'properties': {
        'address': 'Sumberpucung',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65165',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.51692646305867, -8.15107991334066]
      },
      'properties': {
        'address': 'Ngebruk',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65165',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.57314556350119, -8.130985518501637]
      },
      'properties': {
        'address': 'Kepanjen',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65163',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.63256722212927, -7.994599667040294]
      },
      'properties': {
        'address': 'Malang Kota Lama',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65134',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.63698750252576, -7.977260009635902]
      },
      'properties': {
        'address': 'Malang',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65111',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.64496975663256, -7.940070766619603]
      },
      'properties': {
        'address': 'Blimbing',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65126',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.66603046181093, -7.896927027481955]
      },
      'properties': {
        'address': 'Singosari',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65153',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.69763761278566, -7.836592627343591]
      },
      'properties': {
        'address': 'Lawang',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65211',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.7782862732653, -7.598922262628537]
      },
      'properties': {
        'address': 'Bangil',
        'city': 'Pasuruan',
        'country': 'Indonesia',
        'postalCode': '67153',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.7016716549861, -7.5383751390208635]
      },
      'properties': {
        'address': 'Porong',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61274',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.7082162450082, -7.506869839411664]
      },
      'properties': {
        'address': 'Tanggulangin',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61272',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.71292620404842, -7.456862990839056]
      },
      'properties': {
        'address': 'Sidoarjo',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61213',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.72844010107015, -7.3889866625324245]
      },
      'properties': {
        'address': 'Gedangan',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61254',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.72928767907493, -7.352575965029186]
      },
      'properties': {
        'address': 'Waru',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61256',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.73906164866362, -7.301849251004565]
      },
      'properties': {
        'address': 'Wonokromo',
        'city': 'Surabaya',
        'country': 'Indonesia',
        'postalCode': '60244',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.75194698091146, -7.265197292907162]
      },
      'properties': {
        'address': 'Gubeng',
        'city': 'Surabaya',
        'country': 'Indonesia',
        'postalCode': '60272',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.69750811110261, -7.347085636673832]
      },
      'properties': {
        'address': 'Sepanjang',
        'city': 'Surabaya',
        'country': 'Indonesia',
        'postalCode': '60257',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.58618570665705, -7.407946540786677]
      },
      'properties': {
        'address': 'Krian',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61262',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.5526259074805, -7.436884446151381]
      },
      'properties': {
        'address': 'Kedinding',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61264',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.51863695490165, -7.4587568326022575]
      },
      'properties': {
        'address': 'Tarik',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61265',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.43398329626689, -7.470899177927034]
      },
      'properties': {
        'address': 'Mojokerto',
        'city': 'Mojokerto',
        'country': 'Indonesia',
        'postalCode': '61322',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.37081190956594, -7.50715115504078]
      },
      'properties': {
        'address': 'Curahmalang',
        'city': 'Jombang',
        'country': 'Indonesia',
        'postalCode': '61483',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.33939787597186, -7.519574846632675]
      },
      'properties': {
        'address': 'Sumobito',
        'city': 'Jombang',
        'country': 'Indonesia',
        'postalCode': '61483',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.27905890292561, -7.541613260605114]
      },
      'properties': {
        'address': 'Peterongan',
        'city': 'Jombang',
        'country': 'Indonesia',
        'postalCode': '61481',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.23313948497345, -7.558460403152982]
      },
      'properties': {
        'address': 'Jombang',
        'city': 'Jombang',
        'country': 'Indonesia',
        'postalCode': '61419',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.16696402303616, -7.582538763242029]
      },
      'properties': {
        'address': 'Sembung',
        'city': 'Jombang',
        'country': 'Indonesia',
        'postalCode': '61461',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.10104605474021, -7.591812401696258]
      },
      'properties': {
        'address': 'Kertosono',
        'city': 'Nganjuk',
        'country': 'Indonesia',
        'postalCode': '64311',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.07939526400831, -7.697594232153171]
      },
      'properties': {
        'address': 'Papar',
        'city': 'Kediri',
        'country': 'Indonesia',
        'postalCode': '64153',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.01540848555307, -7.817337841722208]
      },
      'properties': {
        'address': 'Kediri',
        'city': 'Kediri',
        'country': 'Indonesia',
        'postalCode': '64121',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [111.98801491411753, -7.898358253458771]
      },
      'properties': {
        'address': 'Ngadiluwih',
        'city': 'Kediri',
        'country': 'Indonesia',
        'postalCode': '64171',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [111.96031305942114, -7.948695542895831]
      },
      'properties': {
        'address': 'Kras',
        'city': 'Kediri',
        'country': 'Indonesia',
        'postalCode': '64172',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [111.90425489071642, -8.063002057944816]
      },
      'properties': {
        'address': 'Tulungagung',
        'city': 'Tulungagung',
        'country': 'Indonesia',
        'postalCode': '66212',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [111.94457385700005, -8.082335046823632]
      },
      'properties': {
        'address': 'Sumbergempol',
        'city': 'Tulungagung',
        'country': 'Indonesia',
        'postalCode': '66291',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.01210391671468, -8.102954266244506]
      },
      'properties': {
        'address': 'Ngunut',
        'city': 'Tulungagung',
        'country': 'Indonesia',
        'postalCode': '66292',
        'state': 'Jawa Timur'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.08109967660408, -8.121001235720938]
      },
      'properties': {
        'address': 'Rejotangan',
        'city': 'Tulungagung',
        'country': 'Indonesia',
        'postalCode': '66293',
        'state': 'Jawa Timur'
      }
    }
  ]
};

// set id stasiun
stations.features.forEach((station, i) => {
  station.properties.id = i;
});


map.on('load', () => {
  map.resize();       // resize map

  // add layer stasiun
  map.addSource('places', {
    type: 'geojson',
    data: stations
  });

  // geodecoder
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken, 
    mapboxgl: mapboxgl, 
    marker: {
      color: 'orange'
    }, 
    bbox: [111.68424, -8.76637, 114.58738, -6.749895] // koordinat bounding box jatim 
  });
  
  map.addControl(geocoder, 'top-left');

  buildLocationList(stations);  // list stasiun di sidebar
  addMarkers();                 // tambahkan marker lokasi stasiun

  // berdasarkan hasil geodecoder
  geocoder.on('result', (event) => {
    const searchResult = event.result.geometry;

    // hitung jarak tiap stasiun ke lokasi hasil geodecoder dg turf.distance 
    const options = { units: 'miles' };
    for (const station of stations.features) {
      station.properties.distance = turf.distance(
        searchResult,
        station.geometry,
        options
      );
    }

    // sort stasiun berdasarkan yg terdekat
    stations.features.sort((a, b) => {
      if (a.properties.distance > b.properties.distance) {
        return 1;
      }
      if (a.properties.distance < b.properties.distance) {
        return -1;
      }
      return 0; 
    });

    // buat list stasiun yg baru berdasarkan sort jarak terdekat
    const listings = document.getElementById('listings');
    while (listings.firstChild) {
      listings.removeChild(listings.firstChild);
    }
    buildLocationList(stations);
    createPopUp(stations.features[0]);

    // highlight stasiun terdekat
    const activeListing = document.getElementById(
      `listing-${stations.features[0].properties.id}`
    );
    activeListing.classList.add('active');

    const bbox = getBbox(stations, 0, searchResult);
    map.fitBounds(bbox, {
      padding: 100
    });

    // tampilkan pop up stasiun yg terdekat
    createPopUp(stations.features[0]);
  });
});

// fungsi untuk menambahkan marker lokasi stasiun ke peta
function addMarkers() {
  for (const marker of stations.features) {
    const el = document.createElement('div');
    el.id = `marker-${marker.properties.id}`;
    el.className = 'marker';

    new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);

    // interaksi marker
    el.addEventListener('click', (e) => {
      // zoom in ke marker terkait
      flyToPoint(marker); 

      // pop up marker terkait
      createPopUp(marker);

      // highlight stasiun terkait
      const activeItem = document.getElementsByClassName('active');
      e.stopPropagation();
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      const listing = document.getElementById(`listing-${marker.properties.id}`);
      listing.classList.add('active');
    });
  }
}

// buat list stasiun di sidebar
function buildLocationList(stations) {
  for (const station of stations.features) {
    const listings = document.getElementById('listings');
    const listing = listings.appendChild(document.createElement('div'));
    listing.id = `listing-${station.properties.id}`;
    listing.className = 'item';

    const link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.id = `link-${station.properties.id}`;
    link.innerHTML = `${station.properties.address}`;

    const details = listing.appendChild(document.createElement('div'));
    details.innerHTML = `${station.properties.city}`;
    if (station.properties.postalCode) {
      details.innerHTML += ` · ${station.properties.postalCode}`;
    }
    if (station.properties.distance) {
      const roundedDistance = Math.round(station.properties.distance * 100) / 100 * 1.609;
      details.innerHTML += `<div><strong>jarak ${roundedDistance} km</strong></div>`;
    }

    // interaksi
    link.addEventListener('click', function () {
      for (const feature of stations.features) {
        if (this.id === `link-${feature.properties.id}`) {
          // zoom in ke stasiun terkait
          flyToPoint(feature);

          // pop up stasiun terkait
          createPopUp(feature);
        }
      }
      const activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  }
}

// zoom in ke suatu lokasi
function flyToPoint(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}

// tampilkan pop up lokasi
function createPopUp(currentFeature) {
  const popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();

  const popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(`<h3>Stasiun</h3><h4>${currentFeature.properties.address} - ${currentFeature.properties.city}</h4>`)
    .addTo(map);
}

// bounding box peta pencarian
function getBbox(sortedStations, stationIdentifier, searchResult) {
  const lats = [
    sortedStations.features[stationIdentifier].geometry.coordinates[1],
    searchResult.coordinates[1]
  ];
  const lons = [
    sortedStations.features[stationIdentifier].geometry.coordinates[0],
    searchResult.coordinates[0]
  ];
  const sortedLons = lons.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a.distance < b.distance) {
      return -1;
    }
    return 0;
  });
  const sortedLats = lats.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a.distance < b.distance) {
      return -1;
    }
    return 0;
  });
  return [
    [sortedLons[0], sortedLats[0]],
    [sortedLons[1], sortedLats[1]]
  ];
}
