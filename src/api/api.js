const academicUnits = [
  {
    name: "Fall 2017",
    courses: [
      {
        name: "math 100",
        credits: 3
      },
      {
        name: "mangt 340",
        credits: 2
      },
      {
        name: "philo 240",
        credits: 4
      },
      {
        name: "mangt 390",
        credits: 2
      }
    ]
  }
  // {
  //   name: "Spring 2018",
  //   courses: [
  //     {
  //       name: "philo 200",
  //       credits: 4
  //     },
  //     {
  //       name: "mangt 300",
  //       credits: 2
  //     },
  //     {
  //       name: "philo 210",
  //       credits: 4
  //     },
  //     {
  //       name: "mangt 330",
  //       credits: 2
  //     }
  //   ]
  // },
  // {
  //   name: "Summer 2018",
  //   courses: [
  //     {
  //       name: "philo 200",
  //       credits: 4
  //     },
  //     {
  //       name: "mangt 300",
  //       credits: 2
  //     }
  //   ]
  // }
  // },
  // {
  //   name: "Fall 2018",
  //   courses: [
  //     {
  //       name: "philo 402",
  //       credits: 4
  //     },
  //     {
  //       name: "mangt 932",
  //       credits: 2
  //     }
  //   ]
  // }
];

const sidebarCourses = [
  { name: "art 100", credits: 4 },
  { name: "mangt 205", credits: 3 },
  { name: "chem 120", credits: 5 },
  { name: "chem 130", credits: 5 },
  { name: "art 300", credits: 4 },
  { name: "mangt 304", credits: 3 },
  { name: "bio 120", credits: 5 },
  { name: "bio 190", credits: 5 }
];

const degreeRequirements = [
  {
    name: "K-State 8 Requirements",
    requirements: [
      {
        name: "Aesthetic Interpretation",
        completed: false,
        options: [
          {
            category: "Art",
            courses: [
              {
                name: "ART 100",
                description:
                  "this is the dkfsmfksdmkfdskmfdskmkmfdskmfdskm description"
              },
              {
                name: "ART 105",
                description: "this is the class description"
              },
              {
                name: "ART 110",
                description: "this is the class description"
              },
              {
                name: "ART 120",
                description: "this is the class description"
              },
              {
                name: "ART 130",
                description: "this is the class description"
              },
              {
                name: "ART 140",
                description: "this is the class description"
              },
              {
                name: "ART 150",
                description: "this is the class description"
              },
              {
                name: "ART 190",
                description: "this is the class description"
              },
              {
                name: "ART 220",
                description: "this is the class description"
              },
              {
                name: "ART 240",
                description: "this is the class description"
              },
              {
                name: "ART 265",
                description: "this is the class description"
              },
              {
                name: "ART 305",
                description: "this is the class description"
              },
              {
                name: "ART 360",
                description: "this is the class description"
              },
              {
                name: "ART 410",
                description: "this is the class description"
              },
              {
                name: "ART 565",
                description: "this is the class description"
              },
              {
                name: "ART 680",
                description: "this is the class description"
              }
            ]
          },
          {
            category: "Biology",
            courses: [
              {
                name: "BIO 100",
                description: "this is the class description"
              },
              {
                name: "BIO 105",
                description: "this is the class description"
              },
              {
                name: "BIO 110",
                description: "this is the class description"
              },
              {
                name: "BIO 120",
                description: "this is the class description"
              },
              {
                name: "BIO 130",
                description: "this is the class description"
              },
              {
                name: "BIO 140",
                description: "this is the class description"
              },
              {
                name: "BIO 150",
                description: "this is the class description"
              },
              {
                name: "BIO 190",
                description: "this is the class description"
              },
              {
                name: "BIO 220",
                description: "this is the class description"
              },
              {
                name: "BIO 240",
                description: "this is the class description"
              },
              {
                name: "BIO 265",
                description: "this is the class description"
              },
              {
                name: "BIO 305",
                description: "this is the class description"
              },
              {
                name: "BIO 360",
                description: "this is the class description"
              },
              {
                name: "BIO 410",
                description: "this is the class description"
              },
              {
                name: "BIO 565",
                description: "this is the class description"
              },
              {
                name: "BIO 680",
                description: "this is the class description"
              }
            ]
          },
          {
            category: "Chemistry",

            courses: [
              { name: "CHEM 100", description: "" },
              {
                name: "CHEM 105",
                description: ""
              },
              {
                name: "CHEM 110",
                description: ""
              },
              {
                name: "CHEM 120",
                description: ""
              },
              {
                name: "CHEM 130",
                description: ""
              },
              {
                name: "CHEM 140",
                description: ""
              },
              {
                name: "CHEM 150",
                description: ""
              },
              {
                name: "CHEM 190",
                description: ""
              },
              {
                name: "CHEM 220",
                description: ""
              },
              {
                name: "CHEM 240",
                description: ""
              },
              {
                name: "CHEM 265",
                description: ""
              },
              {
                name: "CHEM 305",
                description: ""
              },
              {
                name: "CHEM 360",
                description: ""
              },
              {
                name: "CHEM 410",
                description: ""
              },
              {
                name: "CHEM 565",
                description: ""
              },
              {
                name: "CHEM 680",
                description: ""
              }
            ]
          }
        ]
      },
      {
        name: "Empirical and Quantitative Reasoning",
        completed: true,
        options: []
      },
      {
        name: "Ethical Reasoning and Responsibility",
        completed: true,
        options: []
      },
      {
        name: "Global Issues and Perspectives",
        completed: true,
        options: []
      },

      { name: "Historical Perspectives", completed: true, options: [] },

      { name: "Human Diversity within the U.S.", completed: true, options: [] },

      { name: "Natural and Physical Sciences", completed: true, options: [] },

      {
        name: "Social Sciences",
        completed: false,
        requirements: [
          {
            name: "history14",
            completed: false,
            options: []
          },
          {
            name: "fantasy143",
            completed: false,
            options: []
          }
        ]
      },
      {
        name: "Social Sciences V2 FOR Testing",
        completed: false,
        requirements: [
          {
            name: "history",
            completed: false,
            options: []
          },
          {
            name: "fantasy",
            completed: false,
            options: []
          }
        ]
      }
    ]
  },
  {
    name: "College of Business Administration Requirements",
    requirements: [
      { name: "BAPP", options: [] },
      {
        name: "Social Sciences 4390 FOR Testing",
        completed: false,
        requirements: [
          {
            name: "histodsnakry",
            completed: false,
            options: []
          },
          {
            name: "fandskltasy",
            completed: false,
            options: []
          }
        ]
      }
    ]
  },
  {
    name: "Finance Major Requirements",
    requirements: [{ name: "BAPP", options: [] }]
  },
  {
    name: "Financial Analyst Track Requirements",
    requirements: [{ name: "BAPP", options: [] }]
  }
];

export { academicUnits, sidebarCourses, degreeRequirements };
