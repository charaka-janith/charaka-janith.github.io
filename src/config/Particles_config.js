const PARTICLES_CONFIG = {
  "background": {
    "color": {
      "value": "transparent"
    }
  },
  "fullScreen": {
    "zIndex": 1
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": true,
        "mode": "grab",
        "parallax": {
          "enable": true
        }
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ff0000",
      "animation": {
        "h": {
          "enable": true,
          "speed": 20
        }
      }
    },
    "links": {
      "color": {
        "value": "#ffffff"
      },
      "enable": true,
      "opacity": 0.4
    },
    "move": {
      "enable": true,
      "path": {},
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "speed": 6,
      "spin": {}
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 80
    },
    "opacity": {
      "value": 0.5,
      "animation": {}
    },
    "size": {
      "value": {
        "min": 0.1,
        "max": 3
      },
      "animation": {}
    }
  }
};
export default PARTICLES_CONFIG;