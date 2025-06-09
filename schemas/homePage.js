export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Full-width background image for the home page",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for SEO and accessibility.",
        },
      ],
    },
    {
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
      ],
    },
    {
      name: "contentSections",
      title: "Content Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "textSection",
          title: "Text Section",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "backgroundColor",
              title: "Background Color",
              type: "string",
              options: {
                list: [
                  { title: "Transparent", value: "transparent" },
                  { title: "Black", value: "black" },
                  { title: "Gray 900", value: "gray-900" },
                  { title: "White", value: "white" },
                ],
              },
              initialValue: "transparent",
            },
            {
              name: "textColor",
              title: "Text Color",
              type: "string",
              options: {
                list: [
                  { title: "White", value: "white" },
                  { title: "Black", value: "black" },
                  { title: "Gray 400", value: "gray-400" },
                ],
              },
              initialValue: "white",
            },
          ],
        },
        {
          type: "object",
          name: "imageSection",
          title: "Image Section",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                },
              ],
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
            {
              name: "size",
              title: "Size",
              type: "string",
              options: {
                list: [
                  { title: "Small", value: "small" },
                  { title: "Medium", value: "medium" },
                  { title: "Large", value: "large" },
                  { title: "Full Width", value: "full" },
                ],
              },
              initialValue: "medium",
            },
          ],
        },
        {
          type: "object",
          name: "ctaSection",
          title: "Call to Action Section",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "buttons",
              title: "Buttons",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "text",
                      title: "Button Text",
                      type: "string",
                    },
                    {
                      name: "url",
                      title: "URL",
                      type: "url",
                    },
                    {
                      name: "style",
                      title: "Button Style",
                      type: "string",
                      options: {
                        list: [
                          { title: "Primary", value: "primary" },
                          { title: "Secondary", value: "secondary" },
                          { title: "Outline", value: "outline" },
                        ],
                      },
                      initialValue: "primary",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
}
