# 🌐 Deployment & Hosting

## 🚀 Live URL

* https://kuhata.dev
* https://www.kuhata.dev

---

## 🧱 Architecture

```text
User → CloudFront (CDN + HTTPS)
     → Amazon S3 (Static Hosting)
     → React (Vite Build)
```

---

## ⚙️ Tech Stack (Frontend + Hosting)

* React (Vite)
* Tailwind CSS
* AWS S3 (static file storage)
* AWS CloudFront (CDN & caching)
* AWS Certificate Manager (SSL/TLS)
* Custom Domain (DNS via Name.com)

---

## 🔐 Key Features

* HTTPS enabled using AWS ACM
* Global CDN delivery via CloudFront
* Optimized static asset caching
* SPA routing handled using custom error responses
* Custom domain integration (`kuhata.dev`)

---

## 📦 Deployment Process

### 1. Build

```bash
npm run build
```

### 2. Upload

* Upload `dist/` contents to S3 bucket

### 3. CDN Setup

* CloudFront distribution connected to S3
* Origin Access Control (OAC) enabled

### 4. Routing Fix

* 403/404 → `/index.html` (SPA support)

### 5. Domain + SSL

* Domain mapped via DNS (Name.com)
* SSL certificate via AWS ACM

---

## 🌍 Hosting Details

| Component | Service        |
| --------- | -------------- |
| Storage   | AWS S3         |
| CDN       | AWS CloudFront |
| SSL       | AWS ACM        |
| Domain    | Name.com       |

---

## 🧠 Learnings

* Configured CDN-based frontend deployment
* Implemented secure HTTPS using ACM
* Understood DNS mapping and domain routing
* Optimized frontend delivery using caching

---

## ⚡ TL;DR

* Hosted on AWS S3
* Served via CloudFront CDN
* Secured with HTTPS (ACM)
* Domain: kuhata.dev

---
