var APP_DATA = {
  "scenes": [
    {
      "id": "0-backyard",
      "name": "Backyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5546601226227938,
          "pitch": 0.2583045472842791,
          "rotation": 0,
          "target": "2-back-gate"
        },
        {
          "yaw": -1.8649671217514374,
          "pitch": 0.2682504197528104,
          "rotation": 0,
          "target": "1-gazebo"
        },
        {
          "yaw": 1.5979428426079334,
          "pitch": -0.08014928961340928,
          "rotation": 0,
          "target": "10-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-gazebo",
      "name": "Gazebo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 2.3839259317877612,
        "pitch": 0.15942055200916272,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.569649033702863,
          "pitch": 0.07895031474386549,
          "rotation": 0,
          "target": "0-backyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-back-gate",
      "name": "Back Gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -2.0295674021452292,
        "pitch": 0.1946809187067977,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.8293055873694293,
          "pitch": 0.1224339565060113,
          "rotation": 0,
          "target": "0-backyard"
        },
        {
          "yaw": -2.4039162754808494,
          "pitch": 0.07520105187613879,
          "rotation": 0,
          "target": "1-gazebo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bed-2",
      "name": "Bed 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -1.4365927856318166,
        "pitch": 0.32240172647205867,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.787900705475323,
          "pitch": 0.44094105418650287,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 1.4392278486677377,
        "pitch": 0.35992185113703634,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.9439266722469597,
          "pitch": 0.42690711034118856,
          "rotation": 0,
          "target": "3-bed-2"
        },
        {
          "yaw": 1.1707041008198296,
          "pitch": 0.5029000740691387,
          "rotation": 0,
          "target": "5-bathroom"
        },
        {
          "yaw": 0.012496340968230157,
          "pitch": 0.20270558882789658,
          "rotation": 0,
          "target": "8-bed-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22048123689196686,
          "pitch": 0.38176524613190743,
          "rotation": 0,
          "target": "6-shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-shower",
      "name": "Shower",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.685594231330434,
        "pitch": -0.2806517275546945,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.029779464547298,
          "pitch": 0.08109466111273633,
          "rotation": 0,
          "target": "5-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-toilet",
      "name": "Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.263935722592052,
        "pitch": 0.6369382913697414,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.026718267106334,
          "pitch": 0.2941580166905986,
          "rotation": 0,
          "target": "5-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bed-1",
      "name": "Bed 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -2.121704274020047,
        "pitch": 0.09737412091874376,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -3.043002653291314,
          "pitch": 0.11132342387709748,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 2.666791580102025,
        "pitch": 0.2391244205056946,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.9891571363284992,
          "pitch": 0.13337114859324117,
          "rotation": 0,
          "target": "4-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -2.873080460975263,
        "pitch": 0.4060384948025977,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.40575703556961606,
          "pitch": 0.19935520265761042,
          "rotation": 0,
          "target": "4-hall"
        },
        {
          "yaw": -0.6591532700144818,
          "pitch": 0.14221491854928914,
          "rotation": 4.71238898038469,
          "target": "11-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 1.4256695696259287,
        "pitch": 0.2986980310982581,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.7151480808941262,
          "pitch": 0.17791917256440648,
          "rotation": 0,
          "target": "12-lounge-2"
        },
        {
          "yaw": 3.044537808685961,
          "pitch": 0.05432450998002736,
          "rotation": 1.5707963267948966,
          "target": "10-kitchen"
        },
        {
          "yaw": 2.2337404444245514,
          "pitch": 0.2052854012894496,
          "rotation": 0,
          "target": "13-front-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-lounge-2",
      "name": "Lounge 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 2.482395220721168,
        "pitch": 0.3182329041587586,
        "fov": 1.38217411905719
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "13-front-door",
      "name": "Front Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -2.9531637069244,
        "pitch": 0.14843785483086513,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.580011048668065,
          "pitch": 0.108723721824596,
          "rotation": 0,
          "target": "11-lounge"
        },
        {
          "yaw": -2.2271727093065827,
          "pitch": 0.14718526395062348,
          "rotation": 0,
          "target": "14-front-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-front-area",
      "name": "Front Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -2.6322722773018903,
        "pitch": 0.15777359464524743,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.7471844710189037,
          "pitch": 0.231179590172502,
          "rotation": 0,
          "target": "13-front-door"
        },
        {
          "yaw": -2.2069146594721616,
          "pitch": 0.35531863883487524,
          "rotation": 0,
          "target": "12-lounge-2"
        },
        {
          "yaw": -1.7054571176545892,
          "pitch": 0.18295773656660685,
          "rotation": 0,
          "target": "15-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-garage",
      "name": "Garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.6668827143518694,
        "pitch": 0.396300374312089,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.8018800279555007,
          "pitch": 0.20358726748764155,
          "rotation": 1.5707963267948966,
          "target": "14-front-area"
        },
        {
          "yaw": 2.1147175792677633,
          "pitch": 0.15945121197713696,
          "rotation": 4.71238898038469,
          "target": "2-back-gate"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "187 Tyler Street",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
