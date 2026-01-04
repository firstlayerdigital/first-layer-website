# Setup Guide

Quick reference for setting up this project on a new computer and deploying changes.

## 🚀 First-Time Setup (New Computer)

### 1. Install Prerequisites
- **Git**: Download from [git-scm.com](https://git-scm.com/downloads)
- **Node.js**: Download from [nodejs.org](https://nodejs.org/) (LTS version recommended)
- **Cursor** (or your preferred code editor)

### 2. Clone the Repository
```bash
git clone https://github.com/firstlayerdigital/first-layer-website.git
cd first-layer-website
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```

Your site will be available at `http://localhost:4321`

---

## 📝 Daily Workflow

### Starting Work (Same Computer)
Just open the project folder in Cursor. No setup needed!

### Getting Latest Changes (After Working on Another Computer)
```bash
git pull origin main
```

### Making Changes
1. Edit files in Cursor
2. Test locally with `npm run dev`
3. Commit and push (see below)

---

## 🚢 Committing & Pushing to Netlify

### Quick Deploy (All-in-One)
```bash
git add .
git commit -m "Your commit message here"
git push origin main
```

Netlify will automatically detect the push and deploy your site!

### Step-by-Step

**1. Stage your changes:**
```bash
git add .
```
(Adds all modified files)

**2. Commit with a message:**
```bash
git commit -m "Fixed homepage bug"
```
(Use descriptive messages like: "Updated contact form", "Added new portfolio item", etc.)

**3. Push to GitHub:**
```bash
git push origin main
```
(This triggers Netlify deployment automatically)

### Checking Status
```bash
# See what files have changed
git status

# See what changes you made
git diff
```

---

## 🔄 Switching Between Computers

**On Computer A:**
```bash
# Make changes, then:
git add .
git commit -m "Updated homepage"
git push origin main
```

**On Computer B:**
```bash
# Get the latest changes:
git pull origin main
```

**On Computer B (after making changes):**
```bash
git add .
git commit -m "Fixed contact form"
git push origin main
```

**Back on Computer A:**
```bash
git pull origin main  # Get Computer B's changes
```

---

## 📦 Useful Commands

### Development
- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Git
- `git status` - Check what files have changed
- `git pull origin main` - Get latest changes from GitHub
- `git push origin main` - Push changes to GitHub (triggers Netlify)
- `git log` - See commit history

---

## ⚠️ Troubleshooting

### "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)

### "git: command not found"
- Install Git from [git-scm.com](https://git-scm.com/downloads)

### "Permission denied" when pushing
- Make sure you're authenticated with GitHub
- Check: `git config --global user.name` and `git config --global user.email`

### Netlify not deploying
- Check your Netlify dashboard to ensure GitHub integration is connected
- Verify the build completed successfully in Netlify

---

## 📚 Project Structure

```
first-layer-website/
├── src/
│   ├── pages/        # Your website pages
│   ├── components/   # Reusable components
│   ├── layouts/      # Page layouts
│   └── styles/       # Global styles
├── public/           # Static assets (images, etc.)
├── package.json      # Dependencies and scripts
└── astro.config.mjs  # Astro configuration
```

---

**Need help?** Check the [Astro documentation](https://docs.astro.build) or [Netlify docs](https://docs.netlify.com).

