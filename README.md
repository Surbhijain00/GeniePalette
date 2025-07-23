
# 🎨 GeniePalette

**GeniePalette** is an AI-powered color palette generation and visualization tool, built for developers and designers. It enables users to effortlessly create beautiful and cohesive color themes for UI/UX design using the power of **Gemini AI** or generate colors randomly. Whether you're building a website, app, or brand, GenPalette helps you generate, visualize, save, and manage stunning palettes and individual colors in real-time—making it an essential tool in any modern design or development workflow.

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/HomePage1.png) 

## 🚀 Features

- 🤖 **AI-Generated Palettes**
  - Generate 12 intelligent color palettes using Gemini AI.
  - Themes include shade-based, tint-based, and website-optimized palettes.

- 🧪 **Interactive Visualizers**
  - View your palette applied in multiple mockup styles with dynamic visualizer.

- 💾 **Save & Manage**
  - Save entire palettes or individual colors to your dashboard.
  - Like, delete, and copy colors on the fly.

- 👤 **Authentication**
  - Sign up or log in using GitHub or Google Accounts.

## 🏗️ Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS, Redux Toolkit, Framer Motion
- **Backend**: MongoDB with Mongoose, Next.js API routes
- **AI Integration**: Google Gemini API

## 📁 Folder Structure

```bash

├───public
└───src
    ├───app
    │   ├───(auth)
    │   │   └───sign-in
    │   ├───api
    │   │   ├───auth
    │   │   │   └───[...nextauth]
    │   │   ├───palettes
    │   │   │   └───[id]
    │   │   └───user
    │   │       ├───color
    │   │       │   └───[hex]
    │   │       └───palette
    │   │           └───[id]
    │   ├───dashboard
    │   ├───explore
    │   ├───generate
    │   └───palette
    ├───Components
    │   ├───AIPalettes
    │   ├───Dashboard
    │   ├───Explore
    │   ├───Homepage
    │   ├───Palette
    │   └───Visualizer
    │       ├───Shapes
    │       └───Websites
    ├───data
    ├───hooks
    ├───lib
    │   └───actions
    ├───models
    └───redux
        └───features

```

## 🛠️ Setup & Installation

1. **Clone the repo**
   ```bash
    git clone https://github.com/Surbhijain00/GeniePalette.git
    cd Geniepalette

2. **Install dependencies**
   ```bash
   npm install

3. **Set up environment variables**
   Create a .env.local file in the root directory with the following:
   ```bash

    AUTH_GOOGLE_ID=your_google_oauth_client_id
    AUTH_GOOGLE_SECRET=your_google_oauth_client_secret
    AUTH_GITHUB_ID=your_github_oauth_client_id
    AUTH_GITHUB_SECRET=your_github_oauth_client_secret
    AUTH_SECRET=your_auth_secret_key
    MONGO_URI=your_mongodb_connection_string
    NEXT_PUBLIC_API_URL=http://localhost:3000
    GEMINI_API_KEY=your_gemini_api_key


4. **Run the development server**
   ```bash
   npm run dev

<br>
<br>

# User View

<br>
<br>



## 1. Home Page
![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/HomePage1.png)

   <br>


![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/Image2.png)
   <br>

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/Image3.png)
   <br>

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS4.png)
   <br>


## 2. Choose Palette Page
![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS6.png)
   <br>

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS8.png)
   <br>

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS9.png)
   <br>

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS11.png)
   <br>

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS12.png)
   <br>

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS13.png)
   <br>

   <br>
   
## 3. Visualize 
![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS14.png)
   <br>

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS15.png)
   <br>

## 4. Explore Ai templates
![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS16.png)
   <br>

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS19.png)
   <br>

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS20.png)
   <br>

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS24.png)
   <br>

## 5. Explore templates
![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS21.png)
   <br>

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS22.png)
   <br>

## 6. My Dashboard
![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS25.png)
   <br> 

![image](https://github.com/Surbhijain00/GeniePalette/blob/main/public/SS26.png)
   <br>
   




   
   

## Contact

Created by Surbhi jain – feel free to reach out!
