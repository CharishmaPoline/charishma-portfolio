I built a personal portfolio website using React to showcase my skills, projects, experience, certifications, and contact information in a clean and professional way.

The portfolio highlights:

AI/ML projects like Resume Parser AI with Job Description matching

Web application project (Sumarishma – Lifestyle React App)

Data & analytics projects using SQL and Excel dashboards

Certifications with clickable verification links

Downloadable resume, LinkedIn, GitHub, and email integration

The application is fully responsive, component-based, and deployed live using Vercel with CI/CD integration from GitHub.
Technologies Used

Frontend: React JS, JavaScript, HTML, CSS

Version Control: Git, GitHub

Deployment: Vercel

Tools: VS Code, npm

🔹 How I Created the Portfolio (Step-by-Step)
1️⃣ Create React App
npx create-react-app charishma-portfolio
cd charishma-portfolio

2️⃣ Start Local Development Server
npm start


App runs on:

http://localhost:3000

3️⃣ Build Portfolio Sections

I created and updated:

App.js → main portfolio layout

styles.css → custom styling

public/profile.jpg → profile photo

public/Charishma_Polineni_Resume.pdf → downloadable resume

4️⃣ Add Projects Dynamically

Projects are stored as objects in App.js and rendered using .map() for clean, reusable components.

5️⃣ Git & GitHub Setup
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/CharishmaPoline/charishma-portfolio.git
git push -u origin main

6️⃣ Update Resume / Links Later

Whenever I updated resume or links:

git add public/Charishma_Polineni_Resume.pdf
git add src/App.js
git commit -m "Update resume and links"
git push origin main

7️⃣ Deploy on Vercel

Connected GitHub repo to Vercel

Enabled automatic deployment on every push

Vercel builds and deploys the latest version automatically

Live URL:

https://charishma-portfolio-7ha4.vercel.app/

🔹 How to Run the Project Locally (Anytime)
npm install
npm start

🔹 Final Outcome

Professional, clean React portfolio

Live deployed with Vercel

Easy to update resume, links, and projects

Suitable for AI/ML Engineer, Data Engineer, Data Analyst roles

