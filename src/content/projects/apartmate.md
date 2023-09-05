---
title: ApartMate
description: Project built for RowdyHacks 2023 with two other team members.
stack: react,tailwind,firebase
category: Web -- Fullstack
imageUrl: /res/projects/apartmate.png
feature: false
date: Mar 01 2023
---

## About

ApartMate was a project with the goal of offering a Tinder-like experience for apartment hunting.
I worked on this project with two other team members from my university's ACM
chapter, [Arturo Corona (@arty-aj)](https://github.com/arty-aj) and
[Devin Madrigal (@devinom)](https://github.com/devinom).

## Features

- Usage of Google as an authentication provider
- Users may set their university and a range from that university for which they would like to search for apartments.

## Tech Stack

### Frontend

- React as the main UI framework.
- DaisyUI as a predefined and concise component layer on top of TailwindCSS.

### Backend

- Firebase is used, giving a BaaS (Backend as a Service) for:
  - User wuthentication and account management
  - Account information / preferences storage on Firestore
  - Firebase function written in python to call an external API.
- An API which scrapes Apartments.com for apartments within a given radius from a given location.

### Deployment

- This project was deployed to Google Cloud Platform, but has since been taken down.

## Team Member Involvement

### Me (@sk3p7ic)

I designed and built the frontend for the application, making calls to Firebase as needed.

### Arturo Corona (@arty-aj)

Wrote the code to consume the Apartments.com scraper API.

### Devin Madrigal (@devinom)

Configured the Firebase and GCP backends, as well as managed deployment to those backends.
