
const filterGroup = document.getElementById('filter-group');
const dhoho = true;
const penataran = true;
const dp = true;
const hl = true;

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuZHJhYWduZXMiLCJhIjoiY2t3YzM1bjlwMzBvdTJvcDh5ZDF2OW5qciJ9.v20_qcP9s2aZVFTtC90sBQ';

const map = new mapboxgl.Map({
  container: "map",
  style: 'mapbox://styles/sandraagnes/ckwc3celf1m7p15lr3zvuq69z', 
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
        'icon': 'rail',
        'address': 'Blitar',
        'city': 'Blitar',
        'country': 'Indonesia',
        'postalCode': '66111',
        'state': 'Jawa Timur',
        'route': 'dhoho - penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.216842, -8.0735789]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Garum',
        'city': 'Blitar',
        'country': 'Indonesia',
        'postalCode': '66182',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.28855448988952, -8.09058192049134]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Talun',
        'city': 'Blitar',
        'country': 'Indonesia',
        'postalCode': '66183',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.31998997948277, -8.087501514391716]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Wlingi',
        'city': 'Blitar',
        'country': 'Indonesia',
        'postalCode': '66184',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.363377392766076, -8.149275083781978]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Kesamben',
        'city': 'Blitar',
        'country': 'Indonesia',
        'postalCode': '66191',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.42010944553098, -8.157112283142158]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Pohgajih',
        'city': 'Blitar',
        'country': 'Indonesia',
        'postalCode': '66192',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.47830265303944, -8.158259272766227]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Sumberpucung',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65165',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.51692646305867, -8.15107991334066]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Ngebruk',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65165',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.57314556350119, -8.130985518501637]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Kepanjen',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65163',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.63256722212927, -7.994599667040294]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Malang Kota Lama',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65134',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.63698750252576, -7.977260009635902]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Malang',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65111',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.64496975663256, -7.940070766619603]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Blimbing',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65126',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.66603046181093, -7.896927027481955]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Singosari',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65153',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.69763761278566, -7.836592627343591]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Lawang',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65211',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.7782862732653, -7.598922262628537]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Bangil',
        'city': 'Pasuruan',
        'country': 'Indonesia',
        'postalCode': '67153',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.7016716549861, -7.5383751390208635]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Porong',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61274',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.7082162450082, -7.506869839411664]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Tanggulangin',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61272',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.71292620404842, -7.456862990839056]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Sidoarjo',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61213',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.72844010107015, -7.3889866625324245]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Gedangan',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61254',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.72928767907493, -7.352575965029186]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Waru',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61256',
        'state': 'Jawa Timur',
        'route': 'penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.73906164866362, -7.301849251004565]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Wonokromo',
        'city': 'Surabaya',
        'country': 'Indonesia',
        'postalCode': '60244',
        'state': 'Jawa Timur',
        'route': 'dhoho - penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.75194698091146, -7.265197292907162]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Gubeng',
        'city': 'Surabaya',
        'country': 'Indonesia',
        'postalCode': '60272',
        'state': 'Jawa Timur',
        'route': 'dhoho - penataran'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.69750811110261, -7.347085636673832]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Sepanjang',
        'city': 'Surabaya',
        'country': 'Indonesia',
        'postalCode': '60257',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.58618570665705, -7.407946540786677]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Krian',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61262',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.5526259074805, -7.436884446151381]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Kedinding',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61264',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.51863695490165, -7.4587568326022575]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Tarik',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61265',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.43398329626689, -7.470899177927034]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Mojokerto',
        'city': 'Mojokerto',
        'country': 'Indonesia',
        'postalCode': '61322',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.37081190956594, -7.50715115504078]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Curahmalang',
        'city': 'Jombang',
        'country': 'Indonesia',
        'postalCode': '61483',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.33939787597186, -7.519574846632675]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Sumobito',
        'city': 'Jombang',
        'country': 'Indonesia',
        'postalCode': '61483',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.27905890292561, -7.541613260605114]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Peterongan',
        'city': 'Jombang',
        'country': 'Indonesia',
        'postalCode': '61481',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.23313948497345, -7.558460403152982]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Jombang',
        'city': 'Jombang',
        'country': 'Indonesia',
        'postalCode': '61419',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.16696402303616, -7.582538763242029]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Sembung',
        'city': 'Jombang',
        'country': 'Indonesia',
        'postalCode': '61461',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.10104605474021, -7.591812401696258]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Kertosono',
        'city': 'Nganjuk',
        'country': 'Indonesia',
        'postalCode': '64311',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.07939526400831, -7.697594232153171]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Papar',
        'city': 'Kediri',
        'country': 'Indonesia',
        'postalCode': '64153',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.01540848555307, -7.817337841722208]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Kediri',
        'city': 'Kediri',
        'country': 'Indonesia',
        'postalCode': '64121',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [111.98801491411753, -7.898358253458771]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Ngadiluwih',
        'city': 'Kediri',
        'country': 'Indonesia',
        'postalCode': '64171',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [111.96031305942114, -7.948695542895831]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Kras',
        'city': 'Kediri',
        'country': 'Indonesia',
        'postalCode': '64172',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [111.90425489071642, -8.063002057944816]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Tulungagung',
        'city': 'Tulungagung',
        'country': 'Indonesia',
        'postalCode': '66212',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [111.94457385700005, -8.082335046823632]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Sumbergempol',
        'city': 'Tulungagung',
        'country': 'Indonesia',
        'postalCode': '66291',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.01210391671468, -8.102954266244506]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Ngunut',
        'city': 'Tulungagung',
        'country': 'Indonesia',
        'postalCode': '66292',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.08109967660408, -8.121001235720938]
      },
      'properties': {
        'icon': 'rail',
        'address': 'Rejotangan',
        'city': 'Tulungagung',
        'country': 'Indonesia',
        'postalCode': '66293',
        'state': 'Jawa Timur',
        'route': 'dhoho'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [111.92722657673235, -8.009660167154548]
      },
      'properties': {
        'icon': 'road-closure',
        'address': 'Ngujang',
        'city': 'Tulungagung',
        'country': 'Indonesia',
        'postalCode': '66252',
        'state': 'Jawa Timur',
        'route': 'hanya dilewati'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.02618583069294, -7.769661754974074] 
      },
      'properties': {
        'icon': 'road-closure',
        'address': 'Susuhan',
        'city': 'Kediri',
        'country': 'Indonesia',
        'postalCode': '64182',
        'state': 'Jawa Timur',
        'route': 'hanya dilewati'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.0600188630349,-7.720232223834848]
      },
      'properties': {
        'icon': 'road-closure',
        'address': 'Minggiran',
        'city': 'Kediri',
        'country': 'Indonesia',
        'postalCode': '64153',
        'state': 'Jawa Timur',
        'route': 'hanya dilewati'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.09981328086118, -7.6419261583145675]
      },
      'properties': {
        'icon': 'road-closure',
        'address': 'Purwoasri',
        'city': 'Kediri',
        'country': 'Indonesia',
        'postalCode': '64154',
        'state': 'Jawa Timur',
        'route': 'hanya dilewati'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.59827926060002, -8.066308835574858]
      },
      'properties': {
        'icon': 'road-closure',
        'address': 'Pakisaji',
        'city': 'Malang',
        'country': 'Indonesia',
        'postalCode': '65162',
        'state': 'Jawa Timur',
        'route': 'hanya dilewati'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.72427867361844, -7.748181580870703]
      },
      'properties': {
        'icon': 'road-closure',
        'address': 'Sengon',
        'city': 'Pasuruan',
        'country': 'Indonesia',
        'postalCode': '67262',
        'state': 'Jawa Timur',
        'route': 'hanya dilewati'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.72427867361844, -7.748181580870703]
      },
      'properties': {
        'icon': 'road-closure',
        'address': 'Sukorejo',
        'city': 'Pasuruan',
        'country': 'Indonesia',
        'postalCode': '67161',
        'state': 'Jawa Timur',
        'route': 'hanya dilewati'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.7297713291392, -7.33844594445197]
      },
      'properties': {
        'icon': 'road-closure',
        'address': 'Kertomenanggal',
        'city': 'Surabaya',
        'country': 'Indonesia',
        'postalCode': '60234',
        'state': 'Jawa Timur',
        'route': 'hanya dilewati'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.74779577426251, -7.2872812946827334]
      },
      'properties': {
        'icon': 'road-closure',
        'address': 'Ngagel',
        'city': 'Surabaya',
        'country': 'Indonesia',
        'postalCode': '60246',
        'state': 'Jawa Timur',
        'route': 'hanya dilewati'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [112.61922139563308, -7.384326700241967]
      },
      'properties': {
        'icon': 'road-closure',
        'address': 'Boharan',
        'city': 'Sidoarjo',
        'country': 'Indonesia',
        'postalCode': '61262',
        'state': 'Jawa Timur',
        'route': 'hanya dilewati'
      }
    }
  ]
};

// set id stasiun
stations.features.forEach((station, i) => {
  station.properties.id = i;
});


map.on('load', () => {
  map.resize();   // resize map

  // add layer stasiun
  map.addSource('places', {
      type: 'geojson',
      data: stations
  });

  // tambahkan list stasiun ke sidebar
  buildLocationList(stations);

  for (const feature of stations.features) {
    const symbol = feature.properties.icon;
    const route = feature.properties.route;
    const layerID = `poi-${route}`;

    addMarkers();

    // add layer berdasarkan symbol 
    if (!map.getLayer(layerID)) {
      map.addLayer({
        'id': layerID,
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': `${symbol}`, 
            'icon-allow-overlap': true
        },
        'filter': ['==', 'route', route]
      });

      // Add checkbox and label elements ke layer.
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = layerID;
      input.checked = true;
      filterGroup.appendChild(input);

      const label = document.createElement('label');
      label.setAttribute('for', layerID);
      label.textContent = route;
      filterGroup.appendChild(label);
    
      // interaksi filter, apabila ada update maka akan mengubah layer dan list stasiun yang sesuai
      input.addEventListener('change', (e) => {
        if(((e.target.id).slice(4)).localeCompare("dhoho") == 0 && e.target.checked == false) { // jika dhoho diklik off, 
          this.dhoho = true;
        }
        else if(((e.target.id).slice(4)).localeCompare("dhoho") == 0 && e.target.checked == true) { // jika dhoho diklik off, 
          this.dhoho = false;
        }
        else if(((e.target.id).slice(4)).localeCompare("penataran") == 0 && e.target.checked == false) { // jika dhoho diklik off, 
          this.penataran = true;
        }
        else if(((e.target.id).slice(4)).localeCompare("penataran") == 0 && e.target.checked == true) { // jika dhoho diklik off, 
          this.penataran = false;
        }
        else if(((e.target.id).slice(4)).localeCompare("dhoho - penataran") == 0 && e.target.checked == false) { // jika dhoho diklik off, 
          this.dp = true;
        }
        else if(((e.target.id).slice(4)).localeCompare("dhoho - penataran") == 0 && e.target.checked == true) { // jika dhoho diklik off, 
          this.dp = false;
        }
        else if(((e.target.id).slice(4)).localeCompare("hanya dilewati") == 0 && e.target.checked == false) { // jika dhoho diklik off, 
          this.hl = true;
        }
        else if(((e.target.id).slice(4)).localeCompare("hanya dilewati") == 0 && e.target.checked == true) { // jika dhoho diklik off, 
          this.hl = false;
        }

        // hapus list yang sblmnya untuk diganti dg list baru
        const listings = document.getElementById('listings');
          while (listings.firstChild) {
            listings.removeChild(listings.firstChild);
        }

        // hanya menampilkan list stasiun yang aktif pada filter
        if(!this.dp) buildLocationListOff(stations, "dhoho - penataran");
        if(!this.dhoho) buildLocationListOff(stations, "dhoho");
        if(!this.penataran) buildLocationListOff(stations, "penataran");
        if(!this.hl) buildLocationListOff(stations, "hanya dilewati");

        // set layout berdasarkan filter
        map.setLayoutProperty(
            layerID,
            'visibility',
            e.target.checked ? 'visible' : 'none'
        );
      });
    }
  }
});

// fungsi untuk menambahkan marker lokasi stasiun ke peta
function addMarkers() {
  for (const marker of stations.features) {
    const el = document.createElement('div');
    el.id = `marker-${marker.properties.id}`;
    el.className = 'markerfilter';

    new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);

    // interaksi marker
    el.addEventListener('click', (e) => {
      flyToPoint(marker);
      createPopUp(marker);
      const activeItem = document.getElementsByClassName('active');
      e.stopPropagation();
    });
  }
}

// buat list stasiun di sidebar (semua stasiun)
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
      link.route =`${station.properties.route}`;
      link.innerHTML = `${station.properties.address}`;

      const details = listing.appendChild(document.createElement('div'));
      details.innerHTML = `${station.properties.city}`;
      
      if (station.properties.route) {
        const roundedDistance = Math.round(station.properties.distance * 100) / 100 * 1.609;
        details.innerHTML += ` ?? ${station.properties.route}</div>`;
      }

      // interaksi
      link.addEventListener('click', function () {
        for (const feature of stations.features) {
          if (this.id === `link-${feature.properties.id}`) {
            flyToPoint(feature);
            createPopUp(feature);
          }
        }
        const activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
      });
    // }
  }
}

// buat list stasiun di sidebar (berdasarkan route yg sesuai)
function buildLocationListOff(stations, route) {
  for (const station of stations.features) {
    const z = `${station.properties.route}`;
    const r = `${route}`;

    // compate dengan route untuk menampilkan route yg sesuai
    if(z.localeCompare(r) == 0) {
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
      
      if (station.properties.route) {
        const roundedDistance = Math.round(station.properties.distance * 100) / 100 * 1.609;
        details.innerHTML += ` ?? ${station.properties.route}</div>`;
      }

      link.addEventListener('click', function () {
        for (const feature of stations.features) {
          if (this.id === `link-${feature.properties.id}`) {
            flyToPoint(feature);
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
