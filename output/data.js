var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};

function init(){
    //init data
    var json = {
    "children": [
        {
            "children": [
                {
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-1 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "2",
                    "name": "LAB_SWITCH-1"
                },
                {
                    "children": [
                        {
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:83:69:98 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "3",
                            "name": "00:fc:8b:83:69:98"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.26 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "4",
                                    "name": "192.168.128.26"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:83:69:98 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "5",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:83:69:98 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "6",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.26 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "4",
                                    "name": "192.168.128.26"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:83:69:98 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "3",
                            "name": "00:fc:8b:83:69:98"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 00:33:da:30:39:73 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "7",
                            "name": "00:33:da:30:39:73"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 169.234.118.33 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "8",
                                    "name": "169.234.118.33"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:33:da:30:39:73 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "9",
                                            "name": "Routers and APs"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:33:da:30:39:73 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "10",
                                            "name": "Routers and APs"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 169.234.118.33 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "8",
                                    "name": "169.234.118.33"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 00:33:da:30:39:73 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "7",
                            "name": "00:33:da:30:39:73"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 32:da:94:83:48:36 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "11",
                            "name": "32:da:94:83:48:36"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.169 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "12",
                                    "name": "192.168.128.169"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 32:da:94:83:48:36 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "13",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 32:da:94:83:48:36 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "14",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.169 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "12",
                                    "name": "192.168.128.169"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 32:da:94:83:48:36 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "11",
                            "name": "32:da:94:83:48:36"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 22:0d:33:eb:7b:71 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "15",
                            "name": "22:0d:33:eb:7b:71"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.171 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "16",
                                    "name": "192.168.128.171"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 22:0d:33:eb:7b:71 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "17",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 22:0d:33:eb:7b:71 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "18",
                                            "name": "Linux"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.171 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "16",
                                    "name": "192.168.128.171"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 22:0d:33:eb:7b:71 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "15",
                            "name": "22:0d:33:eb:7b:71"
                        }
                    ],
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-1 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "2",
                    "name": "LAB_SWITCH-1"
                },
                {
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-4 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "19",
                    "name": "LAB_SWITCH-4"
                },
                {
                    "children": [
                        {
                            "data": {
                                "relation": "Some text to customize here for 00:17:88:4b:9c:42 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "20",
                            "name": "00:17:88:4b:9c:42"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.31 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "21",
                                    "name": "192.168.128.31"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:17:88:4b:9c:42 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "22",
                                            "name": "Linux"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:f1:8e:d0 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "23",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:17:88:4b:9c:42 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "24",
                                            "name": "linux"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:f1:8e:d0 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "25",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.31 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "21",
                                    "name": "192.168.128.31"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 00:17:88:4b:9c:42 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "20",
                            "name": "00:17:88:4b:9c:42"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:d0:04:c3 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "26",
                            "name": "e0:33:3d:d0:04:c3"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.11 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "27",
                                    "name": "192.168.128.11"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:d0:04:c3 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "28",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.11 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "27",
                                    "name": "192.168.128.11"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:d0:04:c3 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "26",
                            "name": "e0:33:3d:d0:04:c3"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:73:03:4d +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "29",
                            "name": "e0:33:3d:73:03:4d"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 1.1.1.1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "30",
                                    "name": "1.1.1.1"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:73:03:4d +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "31",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 1.1.1.1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "30",
                                    "name": "1.1.1.1"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:73:03:4d +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "31",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.193 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "32",
                                    "name": "192.168.128.193"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:73:03:4d +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "33",
                                            "name": "Cisco Meraki"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.193 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "32",
                                    "name": "192.168.128.193"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:73:03:4d +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "29",
                            "name": "e0:33:3d:73:03:4d"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for e0:cb:bc:8c:1f:fe +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "34",
                            "name": "e0:cb:bc:8c:1f:fe"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.194 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "35",
                                    "name": "192.168.128.194"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:cb:bc:8c:1f:fe +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "36",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.194 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "35",
                                    "name": "192.168.128.194"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for e0:cb:bc:8c:1f:fe +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "34",
                            "name": "e0:cb:bc:8c:1f:fe"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 0c:8d:db:b0:c2:dd +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "37",
                            "name": "0c:8d:db:b0:c2:dd"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.4 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "38",
                                    "name": "192.168.128.4"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 0c:8d:db:b0:c2:dd +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "39",
                                            "name": "Meraki OS"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 0c:8d:db:b0:c2:dd +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "40",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.4 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "38",
                                    "name": "192.168.128.4"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 0c:8d:db:b0:c2:dd +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "37",
                            "name": "0c:8d:db:b0:c2:dd"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 0c:8d:db:b0:c3:43 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "41",
                            "name": "0c:8d:db:b0:c3:43"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.3 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "42",
                                    "name": "192.168.128.3"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 0c:8d:db:b0:c3:43 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "43",
                                            "name": "Meraki OS"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 0c:8d:db:b0:c3:43 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "44",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.3 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "42",
                                    "name": "192.168.128.3"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 0c:8d:db:b0:c3:43 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "41",
                            "name": "0c:8d:db:b0:c3:43"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for c4:f7:d3:d4:39:81 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "45",
                            "name": "c4:f7:d3:d4:39:81"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.230 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "46",
                                    "name": "192.168.128.230"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c4:f7:d3:d4:39:81 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "47",
                                            "name": "Cisco/Linksys Router"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c4:f7:d3:d4:39:81 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "48",
                                            "name": "Cisco IOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.230 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "46",
                                    "name": "192.168.128.230"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for c4:f7:d3:d4:39:81 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "45",
                            "name": "c4:f7:d3:d4:39:81"
                        }
                    ],
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-4 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "19",
                    "name": "LAB_SWITCH-4"
                }
            ],
            "data": {
                "relation": "Some text to customize here for Office Switch +*+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
            },
            "id": "1",
            "name": "Office Switch"
        },
        {
            "children": [
                {
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-2 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "50",
                    "name": "LAB_SWITCH-2"
                },
                {
                    "children": [
                        {
                            "data": {
                                "relation": "Some text to customize here for dc:f3:03:e0:c4:b9 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "51",
                            "name": "dc:f3:03:e0:c4:b9"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.210 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "52",
                                    "name": "192.168.128.210"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for dc:f3:03:e0:c4:b9 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "53",
                                            "name": "Windows 10"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for dc:f3:03:e0:c4:b9 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "54",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.210 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "52",
                                    "name": "192.168.128.210"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for dc:f3:03:e0:c4:b9 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "51",
                            "name": "dc:f3:03:e0:c4:b9"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:2a:83:dd +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "55",
                            "name": "00:fc:8b:2a:83:dd"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.190 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "56",
                                    "name": "192.168.128.190"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:2a:83:dd +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "57",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:2a:83:dd +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "58",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.190 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "56",
                                    "name": "192.168.128.190"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:2a:83:dd +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "55",
                            "name": "00:fc:8b:2a:83:dd"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for dc:68:eb:63:3e:ad +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "59",
                            "name": "dc:68:eb:63:3e:ad"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.49 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "60",
                                    "name": "192.168.128.49"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for dc:68:eb:63:3e:ad +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "61",
                                            "name": "Nokia"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for dc:68:eb:63:3e:ad +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "62",
                                            "name": "Nokia"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.49 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "60",
                                    "name": "192.168.128.49"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for dc:68:eb:63:3e:ad +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "59",
                            "name": "dc:68:eb:63:3e:ad"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 18:b4:30:d2:3f:3c +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "63",
                            "name": "18:b4:30:d2:3f:3c"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.30 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "64",
                                    "name": "192.168.128.30"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 18:b4:30:d2:3f:3c +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "65",
                                            "name": "Raspberry Pi"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 18:b4:30:d2:3f:3c +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "66",
                                            "name": "Raspberry Pi"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.30 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "64",
                                    "name": "192.168.128.30"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 18:b4:30:d2:3f:3c +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "63",
                            "name": "18:b4:30:d2:3f:3c"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 30:c7:bf:98:f4:3d +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "67",
                            "name": "30:c7:bf:98:f4:3d"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.119 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "68",
                                    "name": "192.168.128.119"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 30:c7:bf:98:f4:3d +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "69",
                                            "name": "Cisco/Linksys Router"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.119 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "68",
                                    "name": "192.168.128.119"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 30:c7:bf:98:f4:3d +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "67",
                            "name": "30:c7:bf:98:f4:3d"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 98:46:0a:ed:a3:ee +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "70",
                            "name": "98:46:0a:ed:a3:ee"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.124 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "71",
                                    "name": "192.168.128.124"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 98:46:0a:ed:a3:ee +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "72",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 98:46:0a:ed:a3:ee +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "73",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.124 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "71",
                                    "name": "192.168.128.124"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 98:46:0a:ed:a3:ee +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "70",
                            "name": "98:46:0a:ed:a3:ee"
                        }
                    ],
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-2 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "50",
                    "name": "LAB_SWITCH-2"
                },
                {
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-5 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "74",
                    "name": "LAB_SWITCH-5"
                },
                {
                    "children": [
                        {
                            "data": {
                                "relation": "Some text to customize here for 24:4b:03:30:af:d1 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "75",
                            "name": "24:4b:03:30:af:d1"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.78 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "76",
                                    "name": "192.168.128.78"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 24:4b:03:30:af:d1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "77",
                                            "name": "Routers and APs"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 24:4b:03:30:af:d1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "78",
                                            "name": "Routers and APs"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.78 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "76",
                                    "name": "192.168.128.78"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 24:4b:03:30:af:d1 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "75",
                            "name": "24:4b:03:30:af:d1"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for c0:33:3e:81:37:92 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "79",
                            "name": "c0:33:3e:81:37:92"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.234 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "80",
                                    "name": "192.168.128.234"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c0:33:3e:81:37:92 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "81",
                                            "name": "Microsoft XBOX"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c0:33:3e:81:37:92 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "82",
                                            "name": "Microsoft XBOX"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.234 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "80",
                                    "name": "192.168.128.234"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for c0:33:3e:81:37:92 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "79",
                            "name": "c0:33:3e:81:37:92"
                        }
                    ],
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-5 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "74",
                    "name": "LAB_SWITCH-5"
                },
                {
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-7 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "83",
                    "name": "LAB_SWITCH-7"
                },
                {
                    "children": [
                        {
                            "data": {
                                "relation": "Some text to customize here for a4:77:33:09:16:f9 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "84",
                            "name": "a4:77:33:09:16:f9"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.122 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "85",
                                    "name": "192.168.128.122"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for a4:77:33:09:16:f9 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "86",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for a4:77:33:09:16:f9 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "87",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.122 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "85",
                                    "name": "192.168.128.122"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for a4:77:33:09:16:f9 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "84",
                            "name": "a4:77:33:09:16:f9"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for ac:04:0b:13:bc:f9 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "88",
                            "name": "ac:04:0b:13:bc:f9"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.239 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "89",
                                    "name": "192.168.128.239"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for ac:04:0b:13:bc:f9 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "90",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.239 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "89",
                                    "name": "192.168.128.239"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for ac:04:0b:13:bc:f9 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "88",
                            "name": "ac:04:0b:13:bc:f9"
                        }
                    ],
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-7 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "83",
                    "name": "LAB_SWITCH-7"
                }
            ],
            "data": {
                "relation": "Some text to customize here for Basement +*+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
            },
            "id": "49",
            "name": "Basement"
        },
        {
            "children": [
                {
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-3 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "92",
                    "name": "LAB_SWITCH-3"
                },
                {
                    "children": [
                        {
                            "data": {
                                "relation": "Some text to customize here for ac:13:f4:70:3f:37 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "93",
                            "name": "ac:13:f4:70:3f:37"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.223 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "94",
                                    "name": "192.168.128.223"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for ac:13:f4:70:3f:37 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "95",
                                            "name": "Apple iPad"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for ac:13:f4:70:3f:37 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "96",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.223 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "94",
                                    "name": "192.168.128.223"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for ac:13:f4:70:3f:37 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "93",
                            "name": "ac:13:f4:70:3f:37"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for c2:3f:ea:47:7e:ef +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "97",
                            "name": "c2:3f:ea:47:7e:ef"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.12 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "98",
                                    "name": "192.168.128.12"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c2:3f:ea:47:7e:ef +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "99",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c2:3f:ea:47:7e:ef +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "100",
                                            "name": "linux"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.12 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "98",
                                    "name": "192.168.128.12"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for c2:3f:ea:47:7e:ef +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "97",
                            "name": "c2:3f:ea:47:7e:ef"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 18:b4:30:d2:07:e8 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "101",
                            "name": "18:b4:30:d2:07:e8"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.27 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "102",
                                    "name": "192.168.128.27"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 18:b4:30:d2:07:e8 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "103",
                                            "name": "Raspberry Pi"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.27 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "102",
                                    "name": "192.168.128.27"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 18:b4:30:d2:07:e8 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "101",
                            "name": "18:b4:30:d2:07:e8"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 44:63:0d:e3:4f:2c +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "104",
                            "name": "44:63:0d:e3:4f:2c"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.128 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "105",
                                    "name": "192.168.128.128"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 44:63:0d:e3:4f:2c +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "106",
                                            "name": "Generic Linux"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 44:63:0d:e3:4f:2c +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "107",
                                            "name": "Generic Linux"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.128 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "105",
                                    "name": "192.168.128.128"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 44:63:0d:e3:4f:2c +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "104",
                            "name": "44:63:0d:e3:4f:2c"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for d4:c9:ef:01:18:2b +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "108",
                            "name": "d4:c9:ef:01:18:2b"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.203 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "109",
                                    "name": "192.168.128.203"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for d4:c9:ef:01:18:2b +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "110",
                                            "name": "HP Printer"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for d4:c9:ef:01:18:2b +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "111",
                                            "name": "HP Printer"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.203 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "109",
                                    "name": "192.168.128.203"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for d4:c9:ef:01:18:2b +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "108",
                            "name": "d4:c9:ef:01:18:2b"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 8c:83:90:bc:24:33 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "112",
                            "name": "8c:83:90:bc:24:33"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.23 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "113",
                                    "name": "192.168.128.23"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 8c:83:90:bc:24:33 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "114",
                                            "name": "Mac OS X 10.14"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 8c:83:90:bc:24:33 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "115",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.23 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "113",
                                    "name": "192.168.128.23"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 8c:83:90:bc:24:33 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "112",
                            "name": "8c:83:90:bc:24:33"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for f6:48:d6:a3:f0:b1 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "116",
                            "name": "f6:48:d6:a3:f0:b1"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.130 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "117",
                                    "name": "192.168.128.130"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f6:48:d6:a3:f0:b1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "118",
                                            "name": "Apple iPad"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f6:48:d6:a3:f0:b1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "119",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.130 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "117",
                                    "name": "192.168.128.130"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for f6:48:d6:a3:f0:b1 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "116",
                            "name": "f6:48:d6:a3:f0:b1"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 34:08:bc:93:0f:4e +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "120",
                            "name": "34:08:bc:93:0f:4e"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.44 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "121",
                                    "name": "192.168.128.44"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 34:08:bc:93:0f:4e +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "122",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 34:08:bc:93:0f:4e +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "123",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.44 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "121",
                                    "name": "192.168.128.44"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 34:08:bc:93:0f:4e +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "120",
                            "name": "34:08:bc:93:0f:4e"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for c0:d2:f3:f1:f9:e1 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "124",
                            "name": "c0:d2:f3:f1:f9:e1"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.7 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "125",
                                    "name": "192.168.128.7"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c0:d2:f3:f1:f9:e1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "126",
                                            "name": "BATM VoIP adapter"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 34:36:fe:a3:db:7b +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "127",
                                            "name": "Meraki OS"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c0:d2:f3:f1:f9:e1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "128",
                                            "name": "BATM VoIP adapter"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.7 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "125",
                                    "name": "192.168.128.7"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for c0:d2:f3:f1:f9:e1 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "124",
                            "name": "c0:d2:f3:f1:f9:e1"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 7e:e3:40:ab:0e:20 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "129",
                            "name": "7e:e3:40:ab:0e:20"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.33 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "130",
                                    "name": "192.168.128.33"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 7e:e3:40:ab:0e:20 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "131",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 7e:e3:40:ab:0e:20 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "132",
                                            "name": "Linux"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.33 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "130",
                                    "name": "192.168.128.33"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 7e:e3:40:ab:0e:20 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "129",
                            "name": "7e:e3:40:ab:0e:20"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 0c:19:f8:ea:29:c8 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "133",
                            "name": "0c:19:f8:ea:29:c8"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.82 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "134",
                                    "name": "192.168.128.82"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 0c:19:f8:ea:29:c8 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "135",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 0c:19:f8:ea:29:c8 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "136",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.82 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "134",
                                    "name": "192.168.128.82"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 0c:19:f8:ea:29:c8 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "133",
                            "name": "0c:19:f8:ea:29:c8"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for f8:34:b8:8b:9d:98 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "137",
                            "name": "f8:34:b8:8b:9d:98"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.22 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "138",
                                    "name": "192.168.128.22"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f8:34:b8:8b:9d:98 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "139",
                                            "name": "Linux"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f8:34:b8:8b:9d:98 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "140",
                                            "name": "Linux"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.22 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "138",
                                    "name": "192.168.128.22"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for f8:34:b8:8b:9d:98 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "137",
                            "name": "f8:34:b8:8b:9d:98"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 30:c7:bf:98:fb:b2 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "141",
                            "name": "30:c7:bf:98:fb:b2"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.183 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "142",
                                    "name": "192.168.128.183"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 30:c7:bf:98:fb:b2 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "143",
                                            "name": "Cisco/Linksys Router"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.183 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "142",
                                    "name": "192.168.128.183"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 30:c7:bf:98:fb:b2 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "143",
                                            "name": "Cisco/Linksys Router"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.66 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "144",
                                    "name": "192.168.128.66"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 30:c7:bf:98:fb:b2 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "145",
                                            "name": "Cisco/Linksys Router"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.66 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "144",
                                    "name": "192.168.128.66"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 30:c7:bf:98:fb:b2 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "141",
                            "name": "30:c7:bf:98:fb:b2"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:ba:47:9e +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "146",
                            "name": "00:fc:8b:ba:47:9e"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.20 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "147",
                                    "name": "192.168.128.20"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:ba:47:9e +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "148",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:ba:47:9e +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "149",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.20 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "147",
                                    "name": "192.168.128.20"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:ba:47:9e +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "146",
                            "name": "00:fc:8b:ba:47:9e"
                        }
                    ],
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-3 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "92",
                    "name": "LAB_SWITCH-3"
                },
                {
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-12 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "150",
                    "name": "LAB_SWITCH-12"
                },
                {
                    "children": [
                        {
                            "data": {
                                "relation": "Some text to customize here for 34:36:fe:a3:db:7b +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "151",
                            "name": "34:36:fe:a3:db:7b"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.7 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "152",
                                    "name": "192.168.128.7"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c0:d2:f3:f1:f9:e1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "153",
                                            "name": "BATM VoIP adapter"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 34:36:fe:a3:db:7b +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "154",
                                            "name": "Meraki OS"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c0:d2:f3:f1:f9:e1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "155",
                                            "name": "BATM VoIP adapter"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.7 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "152",
                                    "name": "192.168.128.7"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 34:36:fe:a3:db:7b +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "151",
                            "name": "34:36:fe:a3:db:7b"
                        }
                    ],
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-12 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "150",
                    "name": "LAB_SWITCH-12"
                }
            ],
            "data": {
                "relation": "Some text to customize here for 2nd Floor +*+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
            },
            "id": "91",
            "name": "2nd Floor"
        },
        {
            "children": [
                {
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-6 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "157",
                    "name": "LAB_SWITCH-6"
                },
                {
                    "children": [
                        {
                            "data": {
                                "relation": "Some text to customize here for 78:e1:03:2b:be:04 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "158",
                            "name": "78:e1:03:2b:be:04"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.19 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "159",
                                    "name": "192.168.128.19"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 78:e1:03:2b:be:04 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "160",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 78:e1:03:2b:be:04 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "161",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.19 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "159",
                                    "name": "192.168.128.19"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 78:e1:03:2b:be:04 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "158",
                            "name": "78:e1:03:2b:be:04"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 28:39:3e:33:b7:76 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "162",
                            "name": "28:39:3e:33:b7:76"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.238 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "163",
                                    "name": "192.168.128.238"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 28:39:3e:33:b7:76 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "164",
                                            "name": "Samung Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 28:39:3e:33:b7:76 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "165",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.238 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "163",
                                    "name": "192.168.128.238"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 28:39:3e:33:b7:76 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "162",
                            "name": "28:39:3e:33:b7:76"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for d0:81:7a:b4:da:22 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "166",
                            "name": "d0:81:7a:b4:da:22"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.42 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "167",
                                    "name": "192.168.128.42"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for d0:81:7a:b4:da:22 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "168",
                                            "name": "Mac OS X 10.14"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for d0:81:7a:b4:da:22 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "169",
                                            "name": "Mac OS X"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.42 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "167",
                                    "name": "192.168.128.42"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for d0:81:7a:b4:da:22 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "166",
                            "name": "d0:81:7a:b4:da:22"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for f6:00:e3:09:cc:30 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "170",
                            "name": "f6:00:e3:09:cc:30"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.63 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "171",
                                    "name": "192.168.128.63"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f6:00:e3:09:cc:30 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "172",
                                            "name": "Apple iPad"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f6:00:e3:09:cc:30 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "173",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.63 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "171",
                                    "name": "192.168.128.63"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for f6:00:e3:09:cc:30 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "170",
                            "name": "f6:00:e3:09:cc:30"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:f1:8e:d0 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "174",
                            "name": "00:fc:8b:f1:8e:d0"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.31 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "175",
                                    "name": "192.168.128.31"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:17:88:4b:9c:42 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "176",
                                            "name": "Linux"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:f1:8e:d0 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "177",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:17:88:4b:9c:42 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "178",
                                            "name": "linux"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:f1:8e:d0 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "179",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.31 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "175",
                                    "name": "192.168.128.31"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:f1:8e:d0 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "174",
                            "name": "00:fc:8b:f1:8e:d0"
                        }
                    ],
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-6 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "157",
                    "name": "LAB_SWITCH-6"
                },
                {
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-9 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "180",
                    "name": "LAB_SWITCH-9"
                },
                {
                    "children": [
                        {
                            "data": {
                                "relation": "Some text to customize here for 08:03:81:88:d2:fc +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "181",
                            "name": "08:03:81:88:d2:fc"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.43 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "182",
                                    "name": "192.168.128.43"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 08:03:81:88:d2:fc +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "183",
                                            "name": "BATM VoIP adapter"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 08:03:81:88:d2:fc +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "184",
                                            "name": "BATM VoIP adapter"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.43 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "182",
                                    "name": "192.168.128.43"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 08:03:81:88:d2:fc +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "181",
                            "name": "08:03:81:88:d2:fc"
                        }
                    ],
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-9 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "180",
                    "name": "LAB_SWITCH-9"
                }
            ],
            "data": {
                "relation": "Some text to customize here for 1st Floor +*+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
            },
            "id": "156",
            "name": "1st Floor"
        },
        {
            "children": [
                {
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-10 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "186",
                    "name": "LAB_SWITCH-10"
                },
                {
                    "children": [
                        {
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:83:69:98 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "187",
                            "name": "00:fc:8b:83:69:98"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.26 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "188",
                                    "name": "192.168.128.26"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:83:69:98 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "189",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:83:69:98 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "190",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.26 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "188",
                                    "name": "192.168.128.26"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:83:69:98 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "187",
                            "name": "00:fc:8b:83:69:98"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for dc:f3:03:e0:c4:b9 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "191",
                            "name": "dc:f3:03:e0:c4:b9"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.210 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "192",
                                    "name": "192.168.128.210"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for dc:f3:03:e0:c4:b9 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "193",
                                            "name": "Windows 10"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for dc:f3:03:e0:c4:b9 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "194",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.210 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "192",
                                    "name": "192.168.128.210"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for dc:f3:03:e0:c4:b9 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "191",
                            "name": "dc:f3:03:e0:c4:b9"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for ac:13:f4:70:3f:37 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "195",
                            "name": "ac:13:f4:70:3f:37"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.223 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "196",
                                    "name": "192.168.128.223"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for ac:13:f4:70:3f:37 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "197",
                                            "name": "Apple iPad"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for ac:13:f4:70:3f:37 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "198",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.223 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "196",
                                    "name": "192.168.128.223"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for ac:13:f4:70:3f:37 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "195",
                            "name": "ac:13:f4:70:3f:37"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:2a:83:dd +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "199",
                            "name": "00:fc:8b:2a:83:dd"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.190 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "200",
                                    "name": "192.168.128.190"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:2a:83:dd +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "201",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:2a:83:dd +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "202",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.190 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "200",
                                    "name": "192.168.128.190"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:2a:83:dd +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "199",
                            "name": "00:fc:8b:2a:83:dd"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 00:17:88:4b:9c:42 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "203",
                            "name": "00:17:88:4b:9c:42"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.31 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "204",
                                    "name": "192.168.128.31"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:17:88:4b:9c:42 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "205",
                                            "name": "Linux"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:f1:8e:d0 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "206",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:17:88:4b:9c:42 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "207",
                                            "name": "linux"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:f1:8e:d0 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "208",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.31 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "204",
                                    "name": "192.168.128.31"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 00:17:88:4b:9c:42 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "203",
                            "name": "00:17:88:4b:9c:42"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for c2:3f:ea:47:7e:ef +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "209",
                            "name": "c2:3f:ea:47:7e:ef"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.12 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "210",
                                    "name": "192.168.128.12"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c2:3f:ea:47:7e:ef +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "211",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c2:3f:ea:47:7e:ef +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "212",
                                            "name": "linux"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.12 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "210",
                                    "name": "192.168.128.12"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for c2:3f:ea:47:7e:ef +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "209",
                            "name": "c2:3f:ea:47:7e:ef"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 24:4b:03:30:af:d1 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "213",
                            "name": "24:4b:03:30:af:d1"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.78 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "214",
                                    "name": "192.168.128.78"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 24:4b:03:30:af:d1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "215",
                                            "name": "Routers and APs"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 24:4b:03:30:af:d1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "216",
                                            "name": "Routers and APs"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.78 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "214",
                                    "name": "192.168.128.78"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 24:4b:03:30:af:d1 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "213",
                            "name": "24:4b:03:30:af:d1"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for dc:68:eb:63:3e:ad +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "217",
                            "name": "dc:68:eb:63:3e:ad"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.49 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "218",
                                    "name": "192.168.128.49"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for dc:68:eb:63:3e:ad +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "219",
                                            "name": "Nokia"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for dc:68:eb:63:3e:ad +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "220",
                                            "name": "Nokia"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.49 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "218",
                                    "name": "192.168.128.49"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for dc:68:eb:63:3e:ad +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "217",
                            "name": "dc:68:eb:63:3e:ad"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 44:63:0d:e3:4f:2c +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "221",
                            "name": "44:63:0d:e3:4f:2c"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.128 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "222",
                                    "name": "192.168.128.128"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 44:63:0d:e3:4f:2c +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "223",
                                            "name": "Generic Linux"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 44:63:0d:e3:4f:2c +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "224",
                                            "name": "Generic Linux"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.128 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "222",
                                    "name": "192.168.128.128"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 44:63:0d:e3:4f:2c +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "221",
                            "name": "44:63:0d:e3:4f:2c"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 00:33:da:30:39:73 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "225",
                            "name": "00:33:da:30:39:73"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 169.234.118.33 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "226",
                                    "name": "169.234.118.33"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:33:da:30:39:73 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "227",
                                            "name": "Routers and APs"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:33:da:30:39:73 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "228",
                                            "name": "Routers and APs"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 169.234.118.33 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "226",
                                    "name": "169.234.118.33"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 00:33:da:30:39:73 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "225",
                            "name": "00:33:da:30:39:73"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 78:e1:03:2b:be:04 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "229",
                            "name": "78:e1:03:2b:be:04"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.19 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "230",
                                    "name": "192.168.128.19"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 78:e1:03:2b:be:04 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "231",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 78:e1:03:2b:be:04 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "232",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.19 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "230",
                                    "name": "192.168.128.19"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 78:e1:03:2b:be:04 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "229",
                            "name": "78:e1:03:2b:be:04"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:10:3e:b2 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "233",
                            "name": "e0:33:3d:10:3e:b2"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.99 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "234",
                                    "name": "192.168.128.99"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:10:3e:b2 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "235",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.99 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "234",
                                    "name": "192.168.128.99"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:10:3e:b2 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "233",
                            "name": "e0:33:3d:10:3e:b2"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for a4:77:33:09:16:f9 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "236",
                            "name": "a4:77:33:09:16:f9"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.122 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "237",
                                    "name": "192.168.128.122"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for a4:77:33:09:16:f9 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "238",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for a4:77:33:09:16:f9 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "239",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.122 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "237",
                                    "name": "192.168.128.122"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for a4:77:33:09:16:f9 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "236",
                            "name": "a4:77:33:09:16:f9"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:c0:72:d8 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "240",
                            "name": "e0:33:3d:c0:72:d8"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.16 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "241",
                                    "name": "192.168.128.16"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:c0:72:d8 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "242",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.16 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "241",
                                    "name": "192.168.128.16"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:c0:72:d8 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "240",
                            "name": "e0:33:3d:c0:72:d8"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 28:39:3e:33:b7:76 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "243",
                            "name": "28:39:3e:33:b7:76"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.238 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "244",
                                    "name": "192.168.128.238"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 28:39:3e:33:b7:76 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "245",
                                            "name": "Samung Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 28:39:3e:33:b7:76 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "246",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.238 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "244",
                                    "name": "192.168.128.238"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 28:39:3e:33:b7:76 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "243",
                            "name": "28:39:3e:33:b7:76"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for d4:c9:ef:01:18:2b +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "247",
                            "name": "d4:c9:ef:01:18:2b"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.203 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "248",
                                    "name": "192.168.128.203"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for d4:c9:ef:01:18:2b +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "249",
                                            "name": "HP Printer"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for d4:c9:ef:01:18:2b +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "250",
                                            "name": "HP Printer"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.203 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "248",
                                    "name": "192.168.128.203"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for d4:c9:ef:01:18:2b +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "247",
                            "name": "d4:c9:ef:01:18:2b"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:73:03:4d +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "251",
                            "name": "e0:33:3d:73:03:4d"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 1.1.1.1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "252",
                                    "name": "1.1.1.1"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:73:03:4d +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "253",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 1.1.1.1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "252",
                                    "name": "1.1.1.1"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:73:03:4d +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "253",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.193 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "254",
                                    "name": "192.168.128.193"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:73:03:4d +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "255",
                                            "name": "Cisco Meraki"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.193 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "254",
                                    "name": "192.168.128.193"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:73:03:4d +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "251",
                            "name": "e0:33:3d:73:03:4d"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 18:b4:30:d2:3f:3c +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "256",
                            "name": "18:b4:30:d2:3f:3c"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.30 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "257",
                                    "name": "192.168.128.30"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 18:b4:30:d2:3f:3c +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "258",
                                            "name": "Raspberry Pi"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 18:b4:30:d2:3f:3c +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "259",
                                            "name": "Raspberry Pi"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.30 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "257",
                                    "name": "192.168.128.30"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 18:b4:30:d2:3f:3c +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "256",
                            "name": "18:b4:30:d2:3f:3c"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for c0:33:3e:81:37:92 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "260",
                            "name": "c0:33:3e:81:37:92"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.234 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "261",
                                    "name": "192.168.128.234"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c0:33:3e:81:37:92 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "262",
                                            "name": "Microsoft XBOX"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c0:33:3e:81:37:92 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "263",
                                            "name": "Microsoft XBOX"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.234 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "261",
                                    "name": "192.168.128.234"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for c0:33:3e:81:37:92 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "260",
                            "name": "c0:33:3e:81:37:92"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:c0:76:f4 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "264",
                            "name": "e0:33:3d:c0:76:f4"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.202 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "265",
                                    "name": "192.168.128.202"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:c0:76:f4 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "266",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.202 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "265",
                                    "name": "192.168.128.202"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:c0:76:f4 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "264",
                            "name": "e0:33:3d:c0:76:f4"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 32:da:94:83:48:36 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "267",
                            "name": "32:da:94:83:48:36"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.169 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "268",
                                    "name": "192.168.128.169"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 32:da:94:83:48:36 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "269",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 32:da:94:83:48:36 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "270",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.169 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "268",
                                    "name": "192.168.128.169"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 32:da:94:83:48:36 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "267",
                            "name": "32:da:94:83:48:36"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 0c:8d:db:b0:c2:dd +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "271",
                            "name": "0c:8d:db:b0:c2:dd"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.4 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "272",
                                    "name": "192.168.128.4"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 0c:8d:db:b0:c2:dd +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "273",
                                            "name": "Meraki OS"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 0c:8d:db:b0:c2:dd +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "274",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.4 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "272",
                                    "name": "192.168.128.4"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 0c:8d:db:b0:c2:dd +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "271",
                            "name": "0c:8d:db:b0:c2:dd"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 0c:8d:db:b0:c3:43 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "275",
                            "name": "0c:8d:db:b0:c3:43"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.3 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "276",
                                    "name": "192.168.128.3"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 0c:8d:db:b0:c3:43 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "277",
                                            "name": "Meraki OS"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 0c:8d:db:b0:c3:43 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "278",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.3 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "276",
                                    "name": "192.168.128.3"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 0c:8d:db:b0:c3:43 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "275",
                            "name": "0c:8d:db:b0:c3:43"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 8c:83:90:bc:24:33 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "279",
                            "name": "8c:83:90:bc:24:33"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.23 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "280",
                                    "name": "192.168.128.23"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 8c:83:90:bc:24:33 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "281",
                                            "name": "Mac OS X 10.14"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 8c:83:90:bc:24:33 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "282",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.23 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "280",
                                    "name": "192.168.128.23"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 8c:83:90:bc:24:33 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "279",
                            "name": "8c:83:90:bc:24:33"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for f6:48:d6:a3:f0:b1 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "283",
                            "name": "f6:48:d6:a3:f0:b1"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.130 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "284",
                                    "name": "192.168.128.130"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f6:48:d6:a3:f0:b1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "285",
                                            "name": "Apple iPad"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f6:48:d6:a3:f0:b1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "286",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.130 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "284",
                                    "name": "192.168.128.130"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for f6:48:d6:a3:f0:b1 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "283",
                            "name": "f6:48:d6:a3:f0:b1"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for d0:81:7a:b4:da:22 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "287",
                            "name": "d0:81:7a:b4:da:22"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.42 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "288",
                                    "name": "192.168.128.42"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for d0:81:7a:b4:da:22 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "289",
                                            "name": "Mac OS X 10.14"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for d0:81:7a:b4:da:22 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "290",
                                            "name": "Mac OS X"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.42 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "288",
                                    "name": "192.168.128.42"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for d0:81:7a:b4:da:22 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "287",
                            "name": "d0:81:7a:b4:da:22"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 34:08:bc:93:0f:4e +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "291",
                            "name": "34:08:bc:93:0f:4e"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.44 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "292",
                                    "name": "192.168.128.44"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 34:08:bc:93:0f:4e +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "293",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 34:08:bc:93:0f:4e +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "294",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.44 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "292",
                                    "name": "192.168.128.44"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 34:08:bc:93:0f:4e +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "291",
                            "name": "34:08:bc:93:0f:4e"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for c0:d2:f3:f1:f9:e1 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "295",
                            "name": "c0:d2:f3:f1:f9:e1"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.7 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "296",
                                    "name": "192.168.128.7"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c0:d2:f3:f1:f9:e1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "297",
                                            "name": "BATM VoIP adapter"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 34:36:fe:a3:db:7b +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "298",
                                            "name": "Meraki OS"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c0:d2:f3:f1:f9:e1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "299",
                                            "name": "BATM VoIP adapter"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.7 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "296",
                                    "name": "192.168.128.7"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for c0:d2:f3:f1:f9:e1 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "295",
                            "name": "c0:d2:f3:f1:f9:e1"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for c4:f7:d3:d4:39:81 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "300",
                            "name": "c4:f7:d3:d4:39:81"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.230 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "301",
                                    "name": "192.168.128.230"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c4:f7:d3:d4:39:81 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "302",
                                            "name": "Cisco/Linksys Router"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for c4:f7:d3:d4:39:81 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "303",
                                            "name": "Cisco IOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.230 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "301",
                                    "name": "192.168.128.230"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for c4:f7:d3:d4:39:81 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "300",
                            "name": "c4:f7:d3:d4:39:81"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 7e:e3:40:ab:0e:20 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "304",
                            "name": "7e:e3:40:ab:0e:20"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.33 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "305",
                                    "name": "192.168.128.33"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 7e:e3:40:ab:0e:20 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "306",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 7e:e3:40:ab:0e:20 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "307",
                                            "name": "Linux"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.33 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "305",
                                    "name": "192.168.128.33"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 7e:e3:40:ab:0e:20 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "304",
                            "name": "7e:e3:40:ab:0e:20"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 0c:19:f8:ea:29:c8 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "308",
                            "name": "0c:19:f8:ea:29:c8"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.82 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "309",
                                    "name": "192.168.128.82"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 0c:19:f8:ea:29:c8 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "310",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 0c:19:f8:ea:29:c8 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "311",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.82 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "309",
                                    "name": "192.168.128.82"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 0c:19:f8:ea:29:c8 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "308",
                            "name": "0c:19:f8:ea:29:c8"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for f6:00:e3:09:cc:30 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "312",
                            "name": "f6:00:e3:09:cc:30"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.63 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "313",
                                    "name": "192.168.128.63"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f6:00:e3:09:cc:30 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "314",
                                            "name": "Apple iPad"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f6:00:e3:09:cc:30 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "315",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.63 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "313",
                                    "name": "192.168.128.63"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for f6:00:e3:09:cc:30 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "312",
                            "name": "f6:00:e3:09:cc:30"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for ac:17:c8:24:4f:68 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "316",
                            "name": "ac:17:c8:24:4f:68"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "317",
                                    "name": "192.168.128.1"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for ac:17:c8:24:4f:68 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "318",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.1 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "317",
                                    "name": "192.168.128.1"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for ac:17:c8:24:4f:68 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "316",
                            "name": "ac:17:c8:24:4f:68"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:c0:73:36 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "319",
                            "name": "e0:33:3d:c0:73:36"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.17 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "320",
                                    "name": "192.168.128.17"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:c0:73:36 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "321",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.17 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "320",
                                    "name": "192.168.128.17"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:c0:73:36 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "319",
                            "name": "e0:33:3d:c0:73:36"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:d2:48:3f +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "322",
                            "name": "e0:33:3d:d2:48:3f"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.90 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "323",
                                    "name": "192.168.128.90"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:d2:48:3f +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "324",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.90 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "323",
                                    "name": "192.168.128.90"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:d2:48:3f +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "322",
                            "name": "e0:33:3d:d2:48:3f"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for f8:34:b8:8b:9d:98 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "325",
                            "name": "f8:34:b8:8b:9d:98"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.22 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "326",
                                    "name": "192.168.128.22"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f8:34:b8:8b:9d:98 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "327",
                                            "name": "Linux"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f8:34:b8:8b:9d:98 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "328",
                                            "name": "Linux"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.22 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "326",
                                    "name": "192.168.128.22"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for f8:34:b8:8b:9d:98 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "325",
                            "name": "f8:34:b8:8b:9d:98"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:d2:4b:4c +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "329",
                            "name": "e0:33:3d:d2:4b:4c"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.206 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "330",
                                    "name": "192.168.128.206"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:d2:4b:4c +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "331",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.206 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "330",
                                    "name": "192.168.128.206"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:d2:4b:4c +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "329",
                            "name": "e0:33:3d:d2:4b:4c"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 34:36:fe:88:c2:f8 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "332",
                            "name": "34:36:fe:88:c2:f8"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.8 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "333",
                                    "name": "192.168.128.8"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 34:36:fe:88:c2:f8 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "334",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.8 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "333",
                                    "name": "192.168.128.8"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 34:36:fe:88:c2:f8 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "332",
                            "name": "34:36:fe:88:c2:f8"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 08:03:81:88:d2:fc +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "335",
                            "name": "08:03:81:88:d2:fc"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.43 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "336",
                                    "name": "192.168.128.43"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 08:03:81:88:d2:fc +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "337",
                                            "name": "BATM VoIP adapter"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 08:03:81:88:d2:fc +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "338",
                                            "name": "BATM VoIP adapter"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.43 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "336",
                                    "name": "192.168.128.43"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 08:03:81:88:d2:fc +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "335",
                            "name": "08:03:81:88:d2:fc"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:c0:3e:2e +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "339",
                            "name": "e0:33:3d:c0:3e:2e"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.13 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "340",
                                    "name": "192.168.128.13"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for e0:33:3d:c0:3e:2e +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "341",
                                            "name": "Meraki OS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.13 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "340",
                                    "name": "192.168.128.13"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for e0:33:3d:c0:3e:2e +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "339",
                            "name": "e0:33:3d:c0:3e:2e"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 22:0d:33:eb:7b:71 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "342",
                            "name": "22:0d:33:eb:7b:71"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.171 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "343",
                                    "name": "192.168.128.171"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 22:0d:33:eb:7b:71 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "344",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 22:0d:33:eb:7b:71 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "345",
                                            "name": "Linux"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.171 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "343",
                                    "name": "192.168.128.171"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 22:0d:33:eb:7b:71 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "342",
                            "name": "22:0d:33:eb:7b:71"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 98:46:0a:ed:a3:ee +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "346",
                            "name": "98:46:0a:ed:a3:ee"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.124 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "347",
                                    "name": "192.168.128.124"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 98:46:0a:ed:a3:ee +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "348",
                                            "name": "Apple iPhone"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 98:46:0a:ed:a3:ee +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "349",
                                            "name": "iOS"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.124 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "347",
                                    "name": "192.168.128.124"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 98:46:0a:ed:a3:ee +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "346",
                            "name": "98:46:0a:ed:a3:ee"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:f1:8e:d0 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "350",
                            "name": "00:fc:8b:f1:8e:d0"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.31 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "351",
                                    "name": "192.168.128.31"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:17:88:4b:9c:42 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "352",
                                            "name": "Linux"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:f1:8e:d0 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "353",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:17:88:4b:9c:42 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "354",
                                            "name": "linux"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:f1:8e:d0 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "355",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.31 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "351",
                                    "name": "192.168.128.31"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:f1:8e:d0 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "350",
                            "name": "00:fc:8b:f1:8e:d0"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 30:c7:bf:98:fb:b2 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "356",
                            "name": "30:c7:bf:98:fb:b2"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.183 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "357",
                                    "name": "192.168.128.183"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 30:c7:bf:98:fb:b2 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "358",
                                            "name": "Cisco/Linksys Router"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.183 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "357",
                                    "name": "192.168.128.183"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 30:c7:bf:98:fb:b2 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "358",
                                            "name": "Cisco/Linksys Router"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.66 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "359",
                                    "name": "192.168.128.66"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 30:c7:bf:98:fb:b2 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "360",
                                            "name": "Cisco/Linksys Router"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.66 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "359",
                                    "name": "192.168.128.66"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 30:c7:bf:98:fb:b2 +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "356",
                            "name": "30:c7:bf:98:fb:b2"
                        },
                        {
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:ba:47:9e +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "361",
                            "name": "00:fc:8b:ba:47:9e"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.20 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "362",
                                    "name": "192.168.128.20"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:ba:47:9e +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "363",
                                            "name": "Android"
                                        },
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for 00:fc:8b:ba:47:9e +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "364",
                                            "name": "Android"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 192.168.128.20 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "362",
                                    "name": "192.168.128.20"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for 00:fc:8b:ba:47:9e +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "361",
                            "name": "00:fc:8b:ba:47:9e"
                        }
                    ],
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-10 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "186",
                    "name": "LAB_SWITCH-10"
                },
                {
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-11 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "365",
                    "name": "LAB_SWITCH-11"
                },
                {
                    "children": [
                        {
                            "data": {
                                "relation": "Some text to customize here for f0:78:07:df:db:6b +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "366",
                            "name": "f0:78:07:df:db:6b"
                        },
                        {
                            "children": [
                                {
                                    "data": {
                                        "relation": "Some text to customize here for 10.206.148.64 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "367",
                                    "name": "10.206.148.64"
                                },
                                {
                                    "children": [
                                        {
                                            "data": {
                                                "relation": "Some text to customize here for f0:78:07:df:db:6b +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                            },
                                            "id": "368",
                                            "name": "Apple iPhone"
                                        }
                                    ],
                                    "data": {
                                        "relation": "Some text to customize here for 10.206.148.64 +****+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                                    },
                                    "id": "367",
                                    "name": "10.206.148.64"
                                }
                            ],
                            "data": {
                                "relation": "Some text to customize here for f0:78:07:df:db:6b +***+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                            },
                            "id": "366",
                            "name": "f0:78:07:df:db:6b"
                        }
                    ],
                    "data": {
                        "relation": "Some text to customize here for LAB_SWITCH-11 +**+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
                    },
                    "id": "365",
                    "name": "LAB_SWITCH-11"
                }
            ],
            "data": {
                "relation": "Some text to customize here for 3th Floor +*+<br><a href=\"javascript:popup_window('https://www.google.com', 'title_title', 600, 600);\">Some actions Here</a>"
            },
            "id": "185",
            "name": "3th Floor"
        }
    ],
    "data": {
        "relation": "root data - add some html code here for this node"
    },
    "id": "0",
    "name": "My_Network"
}

	    //init RGraph
    var rgraph = new $jit.RGraph({
        //Where to append the visualization
        injectInto: 'infovis',
        //Optional: create a background canvas that plots
        //concentric circles color
        background: {
          CanvasStyles: {
            strokeStyle: '#555'
          }
        },
        //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
          enable: true,
          panning: true,
          zooming: 10
        },
        //Set Node and Edge styles.
        Node: {
            color: '#FF0000'
        },
        
        Edge: {
          color: '#0000FF',
          lineWidth:2
        },

        onBeforeCompute: function(node){
            Log.write("centering " + node.name + "...");
            //Add the relation list in the right column.
            //This list is taken from the data property of each JSON node.
            $jit.id('inner-details').innerHTML = node.data.relation;
        },
        
        //Add the name of the node in the correponding label
        //and a click handler to move the graph.
        //This method is called once, on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.onclick = function(){
                rgraph.onClick(node.id, {
                    onComplete: function() {
                        Log.write("OK");
                    }
                });
            };
        },
        //Change some label dom properties.
        //This method is called each time a label is plotted.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';

            if (node._depth == 0) {
                style.fontSize = "1em";
                style.color = "#FFFFFF";
				if (node.name == "00:20:18:eb:ca:28") 
				{
					style.background = "#CEFF12";
				}
				else 
				{
					style.background = "#4FB912";
				}		
				if (node.name == "The Rockfords") 
				{
					style.background = "#cc1bee";
					style.color = "#FEFF4C";
				}  				
            } 
			else if(node._depth == 1){
                style.fontSize = "0.8em";
                //style.color = "#494949";
				style.color = "#BE53A6";
				style.background = "#3aeeb7";				
				if (node.name.search("ORIGIN") >= 0)
				{
					style.background = "#cc1bee";
					style.color = "#FEFF4C";
				}           
            } else if(node._depth == 2){
                style.fontSize = "0.7em";
                //style.color = "#494949";
				style.color = "#FC49A6";
				style.background = "#eee91c";
				if (node.name.search("ORIGIN") >= 0)
				{
					style.background = "#cc1bee";
					style.color = "#FEFF4C";
				} 				
            
            } else if(node._depth == 3){
                style.fontSize = "0.7em";
                //style.color = "#494949";
				style.background = "#5bee37";
				style.color = "#000000";
				if (node.name.search("ORIGIN") >= 0)
				{
					style.background = "#cc1bee";
					style.color = "#FEFF4C";
				}    				
            } else if(node._depth == 4){
                style.fontSize = "0.7em";
                //style.color = "#494949";
				style.background = "#ee79ec";
				style.color = "#000000";
				if (node.name.search("ORIGIN") >= 0)
				{
					style.background = "#cc1bee";
					style.color = "#FEFF4C";
				}             
            } else if(node._depth == 5){
                style.fontSize = "0.7em";
                //style.color = "#494949";
				style.background = "#97eaee";
				style.color = "#000000";
				if (node.name.search("ORIGIN") >= 0)
				{
					style.background = "#cc1bee";
					style.color = "#FEFF4C";
				}             
            }			
			else {
                style.display = 'none';
            }

            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        }
    });
    //load JSON data
    rgraph.loadJSON(json);
    //trigger small animation
    rgraph.graph.eachNode(function(n) {
      var pos = n.getPos();
      pos.setc(-200, -200);
    });
    rgraph.compute('end');
    rgraph.fx.animate({
      modes:['polar'],
      duration: 2000
    });
    //end
    //append information about the root relations in the right column
    $jit.id('inner-details').innerHTML = rgraph.graph.getNode(rgraph.root).data.relation;
}