# User Management

Enhance your administrative experience with User Management! This robust user management system seamlessly integrates a ReactJS frontend with a Spring Boot backend, offering secure admin login and an intuitive interface for performing CRUD operations on user data.

## Key Features

### Admin Authentication

Implementing a secure login system, administrators can authenticate themselves using Gmail and a password. The frontend transmits login credentials to the backend via the `/admin-login` endpoint. Upon successful verification, an accessToken is generated and returned to the frontend.

### User Management Panel

Following successful authentication, administrators are redirected to a powerful user management panel. Here, CRUD operations can be effortlessly performed on user data, fostering efficient administration.

### User Listing

The user management panel showcases a comprehensive table containing essential user details, including first name, last name, address (street, city, state), email, and phone number.

### User Deletion

Admins can streamline user management by easily deleting users. A simple click on the delete button, strategically positioned next to each user's details, initiates the deletion process.

### User Addition

The user management panel supports the addition of new users. Admins can seamlessly input user details through an intuitive form, and the information promptly reflects in the user management panel.

### Search Users

A robust search functionality empowers admins to locate specific users efficiently. By entering keywords in the search bar, the application filters users based on email, name, and phone number.

## Workflow Overview

### 1. Admin Login Flow

1. Admin provides Gmail and password details via the frontend.
2. Frontend forwards login credentials to the `/admin-login` endpoint in the backend.
3. Backend validates credentials against the database, generating an accessToken upon successful authentication.
4. The accessToken, crafted by combining email and password with "@@" in between, is transmitted to the frontend.
5. The frontend automatically redirects to the user management panel upon receiving the accessToken.

![image](https://github.com/Sahani199890/USM_BE_FE/assets/110148973/c4e5aeab-5a34-4422-80cd-ab2d2458b660)


### 2. User Management

1. Admins access a user-friendly table presenting detailed user information.
![image](https://github.com/Sahani199890/USM_BE_FE/assets/110148973/293b6b3e-8141-4822-a43b-78b895a6caf5)


2. Admins can effortlessly add new users, enhancing the versatility of user management.
 ![image](https://github.com/Sahani199890/USM_BE_FE/assets/110148973/263c2904-e755-4c3f-a8b3-739b70274b64)
3. User deletion is streamlined through the click of a delete button adjacent to each user's details.
4. Admin can also edit the details of the user effeortlessly.
 ![image](https://github.com/Sahani199890/USM_BE_FE/assets/110148973/c771d2fe-d019-4aed-b48c-8c90b52d0fc1)


### 3. Search Users

1. Admins input keywords in the search bar.
2. Frontend transmits a request to the backend, filtering users based on matching keywords in email, name, and phone number.
3. Search results are promptly displayed on the user management panel.
   ![image](https://github.com/Sahani199890/USM_BE_FE/assets/110148973/4f856225-cfc5-473b-8eda-222af51c28f7)

