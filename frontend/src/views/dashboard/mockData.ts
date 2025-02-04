import { IDashboardData } from '@/models/uiTypes';
export const dashboardData:IDashboardData= [
    {
        category: 'Programme',
        name: '12 LABOURS',
        description: 'From mathematical modelling to proactive medicine.',
        children: [
            {   
                category: 'Project',
                name: 'EP4: Breast Biomechanics Project',
                description: 'Integrating medical imaging, machine learning, and modeling to improve breast cancer diagnosis and treatment.',
                children:[
                    {
                        category: 'Investigation',
                        name: 'Developing clinical workflow for breast tumour reporting',
                        description: "",
                        children: [
                            {
                                category: 'Study',
                                name: 'Breast Tumour Reporting Study',
                                description: 'Assessment of efficacy of breast tumour reporting clinical workflow',
                                children: [
                                    {
                                        category: 'Assay',
                                        name: 'Duke Breast MRI Assay',
                                        description: 'Breast tumour reporting on 66 cases from the Duke Breast MRI dataset',
                                        children:[
                                            {
                                                category: "SOP",
                                                name: "Tumour Position Study",
                                                children: [
                                                    {
                                                        studies:[
                                                            {
                                                                name: 'Tumour Position Study',
                                                                subTitle: "Cases: 100",
                                                                description: 'Calculate tumour distance to the skin, ribcage, and nipple mannually',
                                                                src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                                                                status: 'active',
                                                                isEnter: false,
                                                                session: "TumourCalaulationStudy"
                                                            },
                                                            {
                                                                name: 'Tumour Center Manual Correction',
                                                                subTitle: "Cases: 100",
                                                                description: 'Give tumour center at bounding box, and correct the center mannually',
                                                                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                                                                status: 'active',
                                                                isEnter: false,
                                                                session: "TumourCenterStudy"
                                                            },  
                                                        ],
                                                    },
                                                    {
                                                        studies:[ 
                                                            {
                                                                name: 'Tumour Study Assisted Manually',
                                                                subTitle: "Cases: 100",
                                                                description: 'Assist to change tumour, skin, ribcage, and nipple position',
                                                                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                                                                status: 'active',
                                                                isEnter: false,
                                                                session: "TumourAssistedStudy"
                                                            }
                                                        ],
                                                    }
                                                ]
                                            },
                                            {
                                                category: "SOP",
                                                name: "Tumour segmentation Study",
                                                children: [
                                                    {
                                                        studies:[ 
                                                            {
                                                                name: 'Tumour Position & Extent Report',
                                                                subTitle: "Cases: 100",
                                                                description: 'Using tools to segment tumour and generate a report',
                                                                src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                                                                status: 'active',
                                                                isEnter: false,
                                                                session: "TumourSegmentationStudy"
                                                            },
                                                        ],
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                ]
                            }, 
                        ]
                        
                    }
                ]
            }
        ]
    }
]