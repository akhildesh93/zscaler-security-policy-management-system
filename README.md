This app simulates Zscaler's Internet Access (ZIA) Cloud Solution, which implements Zero Trust Architecture through a cloud platform.

Watch the demo (security-policy-management-system-demo.mp4)

Overview:
- Allows unique users to create profiles and set up DLP, Firewall, Malware, and Mobile Malware Policies.
- This is based on a Spring Boot Application, and utilizes Java, Javascript, React
- Utilizes MySQL database for policies, Cloud Firestore for user management
- Uses Maven for Build, used Postman to test API endpoints

Policy Pages:
- REST Api functionality for 4 policy categories

Landing Page:
- Showcases Enabled/Disabled statuses for individual policy pages

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- Must set up MySQL Workbench and configure src/main/resources/application.properties to create policies
- Must set up Cloud Firestore and configure frontend/src/firebase.js to create user profiles


