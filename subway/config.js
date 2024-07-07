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
    subtitle: 'Inside Neglected Areas in the NYC Subway',
    byline: 'By YAMAKI, Takayuki',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'less subway stations with elevators',
            // image: 'sorry.png',
            description: 'If you need elevators, you will face difficulties in the NYC subway station',
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
                    duration: 500
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
                    opacity: 1,
                    duration: 4000
                    
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
            description: 'There are XX subway stations in 4 boroughs',
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
            title: 'Only 1 of them are euqipped with elevators',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
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
            title: 'How large are the areas where people face difficulties?',
            description: "Let's Visualize it!",
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
            title: 'There are 240 square km2 people can acess subway 10 min walk',
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
            title: 'That will shrink with elevators, 300kim.',
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
            title: 'What is happeneing these "neglected area, where people face difficulties only if they need elevators"?',
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
                    opacity: 0,
                    duration: 500
                },            
                {
                    layer: 'clip_mask',
                    opacity: 1,
                    duration: 500
                }            
                        ],
            onChapterExit: []
        },

        {
            id: 'eith-chapter',
            alignment: 'left',
            hidden: false,
            title: 'This map shows where people with ambulatory ratio is high',
            description: "Red is 20% quantile. Green is 20% quantile",
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
            onChapterExit: []
        },

        {
            id: 'nineth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Broad areas are inside "neglected area"',
            // add flourish image
            description: "High demand deprived area for elevators is much large, compared to area with elevators. **it's n times large, n is following 16%** Low demand area for elevators is much large in ELEVATOR area, compared to DEPRIVED area with elevators. it's n times large, n is following **29%**",
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
            title: 'This map shows where people with ambulatory ratio is high',
            description: "Red is 20% quantile. Green is 20% quantile",
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
                    
                        
            onChapterExit: []
        },

        {
            id: 'eleventh-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'change_artboard.png',
            alt: 'Higher Poverty in Neglected Areas of Manhattan. Half of "neglected areas" are where more than 20% of people live below the poverty line',
            description: "High demand deprived area for elevators is much large, compared to area with elevators. **it's n times large, n is following 16%** Low demand area for elevators is much large in ELEVATOR area, compared to DEPRIVED area with elevators. it's n times large, n is following **29%**",
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
                    layer: 'mapbox-satellite',
                    opacity: 0,
                    duration: 500
                }            
                        ],
            onChapterExit: [
            ]
            
        }

        ,

        {
            id: 'twelveth-chapter',
            showMarkers: true,
            alignment: 'left',
            hidden: false,
            title: 'Even Columbia University"',
            description: "High demand deprived area for elevators is much large, compared to area with elevators. **it's n times large, n is following 16%** Low demand area for elevators is much large in ELEVATOR area, compared to DEPRIVED area with elevators. it's n times large, n is following **29%**",
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
                    layer: 'color_layer2_conditional',
                    opacity: 0,
                    duration: 3000
                    
                },                 
 
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
            onChapterExit: []
        }





    ]
};
