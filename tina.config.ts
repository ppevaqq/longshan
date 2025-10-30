import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "YOUR_CLIENT_ID", // Replace with your Tina Cloud client ID
  token: "YOUR_TOKEN", // Replace with your Tina Cloud token
  build: {
    outputDir: "admin",
    publicDir: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Content",
        name: "content",
        path: "content",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
          },
          {
            type: "string",
            label: "Description",
            name: "description",
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return "/";
            }
            return undefined;
          },
        },
      },
    ],
  },
});
