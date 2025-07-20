# 🏥 HealthTrack – Your Personal Health Record Manager

**HealthTrack** is a full-stack health tracking and medical history app designed for individuals who want to securely manage their health records online.

---

## 🌟 Features

### ✅ Implemented & Working

- 🔐 **User Authentication** – Secure signup & login using JWT
- 👤 **User Profile** – Editable profile info (name, age, phone, gender, emergency contact)
- 📝 **Health Records Management**
  - Add new records (disease, symptoms, prescription, scan)
  - View records with date
  - Delete any record
- ⚙️ **JWT-Protected API Routes**
- 📱 **Responsive UI** – Built with TailwindCSS and Material Icons
- ☁️ **Hosted on Cloud**
  - Frontend: Vercel
  - Backend: Render
  - Database: MongoDB Atlas

---

## 🚧 Features Not Yet Functional


These features are part of the roadmap but are **currently non-functional** :

- 🔁 **Forgot Password** – Route placeholder exists but not implemented yet
- 🖼 **Avatar Upload** – Profile photo upload to Cloudinary pending
- 📤 **Share Health Records** – Button visible, functionality not complete
- 📅 **Appointments Page** – UI exists, backend integration not done
- 💬 **Messages Page** – May be removed due to lack of scope
- 🔔 **Notifications** – Design present, no backend logic implemented
## ⚠️ Notes on Collaboration

Some of the incomplete modules (e.g., forgot password, avatar upload, sharing) were assigned to another contributor who **promised to handle them** but unfortunately **did not deliver**. Despite multiple follow-ups, the said contributor often cited being busy due to internships—while ironically staying active on social media.

Additionally, another individual initially showed enthusiasm with a promise like _"Tu start kar, help karunga"_ but when approached, simply responded with _"Ask ChatGPT."_ 🙂

While collaboration is key, it's important to acknowledge when effort is one-sided.


---
## 💾 Technologies Used:-
Node.js + Express

MongoDB + Mongoose

JWT Authentication

TailwindCSS

Render, Vercel, MongoDB Atlas

---

## 🛠️ Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/healthtrack.git
cd healthtrack
````

### 2. Setup the `.env` File

Create a `.env` file inside your backend folder (e.g., `server/` or `backend/`) and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

You can get a free MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

### 3. Install Dependencies

Navigate to the backend and frontend folders respectively and run:

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

### 4. Run the App

#### Backend (Express Server)

```bash
npm start
```

#### Frontend (Vite or React App)

```bash
npm run dev
```

The backend will typically run on `http://localhost:5000` and the frontend on `http://localhost:3000` (or Vite’s default: `http://localhost:5173`).

```


## 📌 Want to Contribute?

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
