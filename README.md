# Weather App

A simple weather application built with Vite, React, Axios, and SweetAlert2.

## Introduction

The Weather App allows users to check the current weather conditions by entering a city and country. The app uses the OpenWeatherMap API to fetch real-time weather data and displays:
- Temperature
- Minimum and Maximum temperatures
- Weather icons representing the current conditions

The app provides an intuitive interface, making it easy for users to check weather updates globally.

## Screenshot

![Screenshot (48)](https://github.com/user-attachments/assets/9cf901ac-bd9c-492b-87f6-3ca5cf8248e2)
![Screenshot (49)](https://github.com/user-attachments/assets/9b3f651c-e18a-4af4-8dbc-e1fe10a29029) 
![Screenshot (50)](https://github.com/user-attachments/assets/fff91289-6155-42ff-b7ce-147029125507)
![Screenshot (51)](https://github.com/user-attachments/assets/ce3f16a8-90d0-4ed0-918f-82c63c557c2f)

## How to Start the Project

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/devaninigam/Weather
   ```
   
2. **Navigate to the Project Directory**:
   ```bash
    cd Weather-App 
   ```
   
3. **Install Dependencies**:
   The project uses npm for managing packages. Install all required dependencies using:
   ```bash  
   npm install
   ```
   
4. **Run the Development Server**:
   Once the dependencies are installed, start the development server:
   ```bash  
   npm run dev
   ```
   
5. **Access the App**:
   Open your browser and go to:
   ```bash  
   http://localhost:5173
   ```

## How to Use the Weather App

#### 1. **Enter City and Country:**
   - On the homepage, you'll find input fields for both the **city** and **country**.
   - Enter the desired location information in these fields.

#### 2. **Check the Weather:**
   - After entering the location, click on the **"Check Weather"** button to fetch weather data.

#### 3. **View Weather Information:**
   - If the location is valid, the app will display:
     - The **current temperature**.
     - The **minimum and maximum temperatures** for the day.
     - A relevant **weather icon** representing the current weather conditions (e.g., sunny, rainy, cloudy).

#### 4. **Handle Errors:**
   - If you enter an invalid city or country, a **SweetAlert2** popup will display an error message informing you of the issue.

Enjoy using the **Weather App** to stay updated with real-time weather information!

