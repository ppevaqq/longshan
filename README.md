# Longshan - TinaCMS Cloud Editing Solution

![TinaCMS](https://img.shields.io/badge/TinaCMS-Cloud-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)

## Overview

Longshan is a modern website powered by **TinaCMS**, enabling seamless content management and online editing without touching code. This repository demonstrates a fully configured TinaCMS cloud-based editing solution.

## 🚀 Features

- **Visual Content Editor**: Edit your website content directly in your browser
- **Git Integration**: All changes automatically commit to your GitHub repository  
- **Real-time Collaboration**: Multiple team members can work simultaneously
- **Markdown Support**: Full markdown and rich text editing
- **Cloud-Hosted**: No local development environment required

## 📁 Project Structure

```
longshan/
├── .github/
│   └── workflows/
│       └── tinacms.yml          # GitHub Actions CI/CD configuration
├── content/
│   └── home.md                  # Home page content (edit via TinaCMS)
├── index.html                   # Website main page
├── package.json                 # Project dependencies
├── tina.config.ts              # TinaCMS configuration
└── README.md                    # This file
```

## 🔧 TinaCMS Configuration

The `tina.config.ts` file defines:

- **Collections**: Documents available for editing (currently: `content`)
- **Fields**: Editable properties for each document (title, description, body)
- **Media Management**: Configuration for image uploads
- **Schema**: Data structure for content validation

## ⚙️ Setup Instructions

### 1. Prerequisites

- GitHub account with repository access
- Node.js 18+ (for local development)
- npm or yarn package manager

### 2. Local Development Setup

```bash
# Clone the repository
git clone https://github.com/ppevaqq/longshan.git
cd longshan

# Install dependencies
npm install

# Start TinaCMS development server
npm run dev
```

### 3. TinaCloud Setup (Cloud Editing)

#### Step 1: Create TinaCloud Account
1. Visit [TinaCloud Console](https://app.tina.io/)
2. Sign up or log in with your GitHub account
3. Create a new organization

#### Step 2: Create a Project
1. Click "New Project"
2. Select "Longshan" repository
3. Authorize TinaCMS to access your repository
4. Complete the setup wizard

#### Step 3: Get Credentials
1. After project creation, you'll receive:
   - **Client ID**: Your TinaCloud client identifier
   - **Token**: Authentication token for your project

2. Add these to your repository secrets:
   - Go to repository **Settings** → **Secrets and variables** → **Actions**
   - Create secrets:
     - `TINA_CLIENT_ID`: Your client ID
     - `TINA_TOKEN`: Your authentication token

#### Step 4: Update tina.config.ts

Replace the placeholder credentials in `tina.config.ts`:

```typescript
export default defineConfig({
  branch: "main",
  clientId: "your_client_id_here",
  token: "your_token_here",
  // ... rest of config
});
```

## 📝 How to Edit Content Online

### Method 1: TinaCloud Dashboard
1. Log in to [TinaCloud Console](https://app.tina.io/)
2. Select your Longshan project
3. Click on "Content" collection
4. Click on "home" document
5. Edit the content directly in the visual editor
6. Click "Save" - changes commit automatically to GitHub!

### Method 2: Direct Link
Once configured, TinaCMS provides a direct edit link:
```
https://app.tina.io/repos/ppevaqq/longshan/edit/home
```

## 📄 Editing Different Content Types

The current setup supports editing:

- **Title**: Document headline
- **Description**: Meta description for SEO
- **Body**: Main content (supports markdown and rich text)

## 🔄 GitHub Actions Workflow

The `.github/workflows/tinacms.yml` file:
- Triggers on push and pull request events
- Installs Node.js dependencies
- Builds TinaCMS
- Validates repository secrets

## 🚀 Deployment

### Publish to Web

Your website is already hosted via GitHub Pages:

1. Go to repository **Settings** → **Pages**
2. Select "Deploy from a branch"
3. Choose branch: `main`, folder: `/ (root)`
4. Your site will be available at: `https://ppevaqq.github.io/longshan/`

## 📚 Advanced Customization

### Add New Fields

Edit `tina.config.ts` to add new fields:

```typescript
fields: [
  {
    type: "string",
    label: "Your New Field",
    name: "yourField",
  },
  // ... existing fields
]
```

### Create New Collections

```typescript
{
  label: "Blog Posts",
  name: "blog",
  path: "content/blog",
  format: "md",
  fields: [...],
}
```

## 🐛 Troubleshooting

### Issue: "Invalid Client ID"
- **Solution**: Verify credentials in `tina.config.ts` match TinaCloud settings

### Issue: "Authentication Failed"
- **Solution**: Check repository secrets `TINA_CLIENT_ID` and `TINA_TOKEN` are correctly set

### Issue: "Changes Not Saving"
- **Solution**: Ensure your GitHub token has write permissions to the repository

## 📖 Useful Links

- [TinaCMS Documentation](https://tina.io/docs/)
- [TinaCloud Getting Started](https://tina.io/guides/tina-cloud/overview/)
- [TinaCMS Schema Guide](https://tina.io/docs/schema/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -m 'Add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

MIT License - Feel free to use this project as a template for your own TinaCMS-powered website!

## 📞 Support

For issues or questions:
1. Check the [TinaCMS Community](https://tina.io/community/)
2. Open an issue in this repository
3. Visit [TinaCMS Discussions](https://tina.io/community/)

---

**Happy Editing! 🎉**

You now have a fully functional TinaCMS cloud editing solution. Start editing your content online!
