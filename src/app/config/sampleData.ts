const data: any = [
  {
    template_name: "Builder Skalton",
    template_description: "Builder Skalton",
    template_author: "Abul Hasem",
    template_version: "1.0.0",
    title: "Page generator",
    description: "Page testing",
    slug: "/content",
    id: 1,
    layout: "layout",
    parent: "empty",
    meta: {
      title: "Page generator",
    },
    permission: {
      guest: false,
      login: true,
      role: null,
    },
    elements: [
      {
        id: "1",
        parent_id: null,
        tag: "main",
        attributes: {
          className: ["bodyClass-1", "bodyClass-2"],
          id: ["bodyId-1", "bodyId-2"],
          styleMedia: {
            desktop: {
              style: {
                display: "flex",
                width: "100%",
                height: "100vh",
                justifyContent: "space-between",
                alignItems: "flex-start",
                background: "#1F1F1F",
                "&:hover": {
                  cursor: "pointer",
                },
              },
            },
            laptop: {
              style: {
                display: "flex",
                width: "1920px",
                height: "100vh",
                justifyContent: "space-between",
                alignItems: "flex-start",
                background: "#1F1F1F",
              },
            },
            tablet: {
              style: {
                display: "flex",
                width: "1920px",
                height: "100vh",
                justifyContent: "space-between",
                alignItems: "flex-start",
                background: "#1F1F1F",
              },
            },
            mobile: {
              style: {
                display: "flex",
                width: "1920px",
                height: "100vh",
                justifyContent: "space-between",
                alignItems: "flex-start",
                background: "#1F1F1F",
              },
            },
          },
        },
        static_content: null,
        dynamic_content: {
          hooks: [],
          data: [],
          states: [],
        },
      },
    ],
    faqs: "Ask me something",
    tour: [],
    functions: {
      add: (a: number, b: number) => {
        return a + b;
      },
    },
    dynamic_content: {
      states: [
        {
          name: "yeasir",
          value: 5,
        },
        {
          name: "yeasir2",
          value: 2,
        },
        {
          name: "yeasir3",
          value: 10,
        },
      ],
      data: [],
      hooks: [],
    },
  },
];
