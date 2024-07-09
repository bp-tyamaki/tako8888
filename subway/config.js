var config = {
    style: 'mapbox://styles/yamakick/cly4iwmyb00i201nzcdar1nkz',
    accessToken: 'pk.eyJ1IjoieWFtYWtpY2siLCJhIjoiY2x4ZGx2bXBwMDdsODJqcTB6NnJ1eHNoZCJ9.i-f7dXO-pPbNws6VvUz-jQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Mind the Gap',
    subtitle: 'Neglected Areas in the NYC Subway',
    byline: 'By YAMAKI, Takayuki',
    footer: 'Source: United States Census Bureau, New York State, and New York City. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.<br> <a href="https://github.com/tako8888/project1_wheelchair?tab=readme-ov-file">Github<a>',
    chapters: [
        {
            id: 'zero-chapter-hidden',
            alignment: 'fully',
            hidden: true,
            title: '',
            // image: 'sorry.png',
            description: '',
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 1,
                    duration: 10
                },

                {
                    layer: 'subwayStations',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'boroughsMB',
                    opacity: 0,
                    duration: 500
                }  ,                              
                {
                    layer: 'color_layer1_conditional',
                    opacity: 0,
                    duration: 4000
                    
                } ,
                {
                    layer: 'color_layer2_conditional',
                    opacity: 0,
                    duration: 4000
                    
                } ,
                {
                    layer: 'clip_mask',
                    opacity: 0,
                    duration: 1
                    
                } ,
                {
                    layer: 'neglected_area',
                    opacity: 1,
                    duration: 10
                },
                {
                    layer: 'elevator_walk',
                    opacity: 1,
                    duration: 10
                },            
                {
                    layer: 'clip_mask',
                    opacity: 0.6,
                    duration: 10
                }
            ],
            onChapterExit: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 0,
                    duration: 1500
                },
                {
                    layer: 'clip_mask',
                    opacity: 0,
                    duration: 1
                    
                } ,
                {
                    layer: 'neglected_area',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'elevator_walk',
                    opacity: 0,
                    duration: 1000
                },            
                {
                    layer: 'clip_mask',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },

        {
            id: 'first-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            // image: 'sorry.png',
            description: 'If You Need Elevators, You Will Face Difficulties in the NYC Subway System',
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'subwayStations',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'boroughsMB',
                    opacity: 0,
                    duration: 500
                }  ,                              
                {
                    layer: 'color_layer1_conditional',
                    opacity: 0,
                    duration: 4000
                    
                } ,
                {
                    layer: 'color_layer2_conditional',
                    opacity: 0,
                    duration: 4000
                    
                } ,

            ],
            onChapterExit: [

                {
                    layer: 'clip_mask',
                    opacity: 0,
                    duration: 4000
                    
                } 
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'This is New York City',
            // image: './path/to/image/source.png',
            description: 'There are 496 subway stations in 4 boroughs, based on unique IDs each station has',
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'subwayStations',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'boroughsMB',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [

            
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '2/3 of subway stations lack accessibility',
            // image: './path/to/image/source.png',
            description: "Only 160 subway stations are 'fully accessible' under the Americans with Disabilities Act (ADA). Many other stations lack elevators.",
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'subwayelevators',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'subwayelevators',
                //     opacity: 0,
                //     duration: 1500
                // }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'How Large are the Areas Where People Face Difficulties?',
            description: "",
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        // }
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            description: "There are 2,837.7 square kilometers where people can access the subway within a 10-minute walk.",
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'neglected_area',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'elevator_walk',
                    opacity: 1,
                    duration: 500
                }
            ],

            onChapterExit: [

            ],
            onChapterExit: []
        },        
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Accessible Areas Shrink by Half if Elevators Are Needed',
            description: "Only 1,351.8 square kilometers are within a 10-minute walk of subway stations with elevators.",
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'neglected_area',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'elevator_walk',
                    opacity: 1,
                    duration: 500
                }            
            ],
            onChapterExit: [
                {
                    layer: 'subwayStations',
                    opacity: 0,
                    duration: 1500
                },
                {
                    layer: 'subwayelevators',
                    opacity: 0,
                    duration: 1500
                }

            ],
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: "What is Happening in These 'Neglected Areas' Where People Face Difficulties if They Need Elevators?",
            description: "",
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'neglected_area',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'elevator_walk',
                    opacity: 0.5,
                    duration: 500
                },            
                {
                    layer: 'clip_mask',
                    opacity: 0.8,
                    duration: 500
                }            
                        ],
            onChapterExit: []
        },

        {
            id: 'eith-chapter',
            alignment: 'left',
            hidden: false,
            title: 'This map shows areas with a high proportion of people with mobility issues.',
            description: '<ul><li><span style="color: #FF8001;">Orange areas</span> indicate the top 20% with the most mobility issues.</li> <li><span style="color: #027FFF;">Blue areas</span> indicate the bottom 20% with the least mobility issues.</li></ul>',
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'neglected_area',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'elevator_walk',
                    opacity: 0,
                    duration: 500
                },            
                {
                    layer: 'clip_mask',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'color_layer1_conditional',
                    opacity: 1,
                    duration: 500
                    
                } 
                        ],
            onChapterExit: [
              
            ]
        },

        {
            id: 'nineth-chapter',
            alignment: 'left',
            hidden: false,
            title: "Broader areas fall within high-demand neglected areas.",
            description: "High-demand neglected areas for elevators exceed accessible areas by more than 16%. <br><br>Low-demand neglected areas are 29% larger than accessible areas.",
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
 
                {
                    layer: 'clip_mask',
                    opacity: 1,
                    duration: 500
                },  
                {
                    layer: 'color_layer1_conditional',
                    opacity: 1,
                    duration: 500
                    
                },            
                {
                    layer: 'color_layer2_conditional',
                    opacity: 0,
                    duration: 500
                    
                }
                        ],
            onChapterExit: [
                {
                    layer: 'clip_mask',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'color_layer1_conditional',
                    opacity: 0,
                    duration: 500
                    
                }                             
            ]
        }

        ,

        {
            id: 'tenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'The map also suggests a relationship between neglect and high poverty.',
            description: '<ul><li><span style="color: #ff0000;">Red areas</span> represent where people below the poverty line make up 20% of the population.</li> <li><span style="color: #00ffff;">Blue areas</span> represent where they make up 5%.</ul></li>',
            location: {
                center: [-74.04, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'color_layer2_conditional',
                    opacity: 1,
                    duration: 500
                    
                } 
                        ],
                    
                        
            onChapterExit: [



            ]
        },

        {
            id: 'eleventh-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'change_artboard.png',
            alt: 'Higher Poverty in Neglected Areas of Manhattan. Half of "neglected areas" are where more than 20% of people live below the poverty line',
            description: "The lack of accessiblity may affect people below the poverty line.",
            location: {
                center: [-74.03593, 40.79207],
                zoom: 10.3,
                pitch: 1.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'color_layer2_conditional',
                    opacity: 1,
                    duration: 3000
                    
                },
 
                {
                    layer: 'clip_mask',
                    opacity: 1,
                    duration: 1500
                },
                {
                    layer: 'mask2',
                    opacity: 0.9,
                    duration: 1500
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 0,
                    duration: 500
                }            
                        ],
            onChapterExit: [
                {
                    layer: 'color_layer2_conditional',
                    opacity: 1,
                    duration: 3000
                    
                },

                {
                    layer: 'mask2',
                    opacity: 0,
                    duration: 1500
                },

            ]
            
        }

        ,

        {
            id: 'twelveth-chapter',
            showMarkers: true,
            alignment: 'left',
            hidden: false,
            title: 'Columbia University Is Not an Exception',
            description: "The 'Columbia University' station lacks an elevator. Currently, there are no subway stations accessible via elevators within a one-mile radius of the university. <br><br>They are constructing a new elevator at the '125th St' Station, which is 0.47 miles from the university. <br><br>However, from the '125th St' Station to Columbia University, you will need to climb an elevation of more than 100 feet.",
            location: {
                center: [-73.96221, 40.80737],
                zoom: 16.01,
                pitch: 54.50,
                bearing: 28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'mapbox-satellite',
                    opacity: 1,
                    duration: 1000
                }            ,
                {
                    layer: 'subwayStations',
                    opacity: 1,
                    duration: 1500
                },
                {
                    layer: 'subwayelevators',
                    opacity: 1,
                    duration: 1500
                }
                        ],
            onChapterExit: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 0,
                    duration: 500
                }
            ]
        }





    ]
};
