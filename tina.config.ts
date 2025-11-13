import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "c0fa7027-236a-42fd-9a51-e1300e5f991a", // Replace with your Tina Cloud client ID
  token: "95a63742fe1c172c1a36e3aec3df35d17417bea5", // Replace with your Tina Cloud token
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
