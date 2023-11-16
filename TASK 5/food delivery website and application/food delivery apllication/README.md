[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/0302N4UV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12856539&assignment_repo_type=AssignmentRepo)

# PickPerfect API Documentation

This document provides an overview of the API endpoints and their usage for our service, <br>
that can be access on http://server.tabletime.online

### 1. Available endpoints for **_CMS Admin_**

- [**_POST_** /user/add-user](#1-post-add-user)
- [**_POST_** /user/login](#2-post-userlogin)

* [**_POST_** /cuisine/](#3-post-cuisine)
* [**_GET_** /cuisine/](#4-get-cuisine)
* [**_GET_** /cuisine/:id](#5-get-cuisineid)
* [**_PUT_** /cuisine/:id](#6-put-cuisineid)
* [**_PATCH_** /cuisine/:id](#7-patch-cuisineid)
* [**_DELETE_** /cuisine/:id](#8-delete-cuisineid)

- [**_GET_** /category/](#8-get-category)
- [**_POST_** /category/](#10-post-category)
- [**_PUT_** /category/:id](#11-put-categoryid)
- [**_DELETE_** /category/:id](#12-delete-categoryid)

### 2. Available endpoints for **_Public Site_**

- [**_GET_** /pub/](#1-get-pub)
- [**_GET_** /pub/:id](#2-get-pubid)

### 3. Global Error

- [**_Global Error_**](#global-error)

&nbsp;

<!-- ## 1. POST /user/register -->

## 1. POST /add-user

Endpoint to create account user with default role "staff"

#### Request - Body

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

_\*Only access_token with role 'admin' can access this endpoint_

<details>
<summary>
Click here for Response
</summary>

_Response (201 - Created)_

```json
{
  "newUser": {
    "id": 6,
    "username": "Jeremy",
    "email": "jeremy@mail.com",
    "role": "staff",
    "address": "Kabupaten Tangerang"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Name is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You're Not Authorized"
}
```

&nbsp;

</details>

<!-- ## 2. POST /user/login -->

## 2. POST /user/login

#### Request - Body

```json
{
  "email": "string",
  "password": "string"
}
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "access_token": "eyJhbGciOi......"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email Can't be Empty"
}
OR
{
  "message": "Password Can't be Empty"
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

</details>

<!-- ## 3. POST /cuisine/ -->

## 3. POST /cuisine

#### Request - Body

```json
{
  "name": "string",
  "description": "string",
  "price": "integer",
  "imgUrl": "string",
  "categoryId": "integer"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (201 - Created)_

```json
{
  "newCuisine": {
    "id": 3,
    "name": "Waffle Cone",
    "description": "Fried Chicken in Cone",
    "price": 28000,
    "imgUrl": "https://img.sndimg.com/....",
    "categoryId": 1,
    "authorId": 1,
    "updatedAt": "2023-10-31T01:58:44.765Z",
    "createdAt": "2023-10-31T01:58:44.765Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name can't be Empty"
}
OR
{
  "message": "Description can't be Empty"
}
OR
{
  "message": "Price can't be Empty"
}
OR
{
  "message": "Mimimum Price is Rp 8.000"
}
OR
{
  "message": "Image URL can't be Empty"
}
OR
{
  "message": "categoryId can't be Empty"
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

<!-- ## 4. GET /cuisine/ -->

## 4. GET /cuisine

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "getCuisine": [
    {
      "id": 1,
      "name": "Pizza",
      "description": "Delicious and cheesy pizza with your favorite toppings.",
      "price": 15000,
      "imgUrl": "https://example.com/pizza.jpg",
      "categoryId": 3,
      "authorId": 1,
      "User": {
        "id": 1,
        "username": "Nugroho Adnan",
        "email": "adaoho@mail.com",
        "role": "admin",
        "phoneNumber": "0217407080",
        "address": "South Tangerang Pamulang 2"
      }
    },
    {
      "id": 3,
      "name": "Sushi",
      "description": "Fresh and flavorful sushi rolls.",
      "price": 18000,
      "imgUrl": "https://example.com/sushi.jpg",
      "categoryId": 2,
      "authorId": 1,
      "User": {
        "id": 1,
        "username": "Nugroho Adnan",
        "email": "adaoho@mail.com",
        "role": "admin",
        "phoneNumber": "0217407080",
        "address": "South Tangerang Pamulang 2"
      }
    },
    ...
  ]
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

<!-- ## 5. GET /cuisine/:id -->

## 5. GET /cuisine/:id

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

#### Request - Params

```json
{
  "id": "<integer>"
}
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "findCuisine": {
    "id": 1,
    "name": "Sloppy Joes",
    "description": "This beats canned or ...",
    "price": 12000,
    "imgUrl": "https://img.sndimg.com/...",
    "categoryId": 1,
    "authorId": 1,
    "createdAt": "2023-10-30T20:25:08.875Z",
    "updatedAt": "2023-10-30T20:25:08.875Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Error Data Not Found"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

<!-- ## 6. PUT /cuisine/:id -->

## 6. PUT /cuisine/:id

#### Request - Body

```json
{
  "name": "string",
  "description": "string",
  "price": "integer",
  "imgUrl": "string",
  "categoryId": "integer"
}
```

#### Request - Params

```json
{
  "id": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

_\*An access_token with the 'admin' role can access all data, while a 'staff' role access_token can only access their own data_

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "updatedCuisine": {
    "id": 1,
    "name": "Sloppy White",
    "description": "This beats canned or ...",
    "price": 12000,
    "imgUrl": "https://img.sndimg.com/food ...",
    "categoryId": 1,
    "authorId": 1,
    "createdAt": "2023-10-30T20:25:08.875Z",
    "updatedAt": "2023-10-31T03:02:43.081Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name can't be Empty"
}
OR
{
  "message": "Description can't be Empty"
}
OR
{
  "message": "Price can't be Empty"
}
OR
{
  "message": "Mimimum Price is Rp 8.000"
}
OR
{
  "message": "Image URL can't be Empty"
}
OR
{
  "message": "categoryId can't be Empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You're Not Authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

<!-- ## 7. PATCH /cuisine/:id -->

## 7. PATCH /cuisine/:id

#### Request - File

```json
{
  "imageUrl": "<file>"
}
```

#### Request - Params

```json
{
  "id": "integer (required)"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

_\*An access_token with the 'admin' role can access all data, while a 'staff' role access_token can only access their own data_

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "message": "Image <entitiy_name> success to update"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "ImageURL can't be Empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You're Not Authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

<!-- ## 8. DELETE /cuisine/:id -->

## 8. DELETE /cuisine/:id

#### Request - Params

```json
{
  "id": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

_\*An access_token with the 'admin' role can access all data, while a 'staff' role access_token can only access their own data_

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "message": "Sloppy White success to delete"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You're Not Authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

<!-- ## 9. GET /category/ -->

## 9. GET /category/

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "getCategory": [
    {
      "id": 1,
      "name": "Burgers",
      "createdAt": "2023-10-30T20:24:52.246Z",
      "updatedAt": "2023-10-30T20:24:52.246Z"
    },
    {
      "id": 2,
      "name": "Pizza",
      "createdAt": "2023-10-30T20:24:52.246Z",
      "updatedAt": "2023-10-30T20:24:52.246Z"
    },
    ...
  ]
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

<!-- ## 10. POST /category/ -->

## 10. POST /category/

#### Request - Body

```json
{
  "name": "string"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

<details>
<summary>
Click here for Response
</summary>

_Response (201 - OK)_

```json
{
  "addCategory": {
    "id": 6,
    "name": "Indonesian",
    "updatedAt": "2023-10-31T03:41:06.960Z",
    "createdAt": "2023-10-31T03:41:06.960Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name can't be Empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

&nbsp;

</details>

<!-- ## 11. PUT /category/:id -->

## 11. PUT /category/:id

#### Request - Body

```json
{
  "name": "string"
}
```

#### Request - Params

```json
{
  "id": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

_\*An access_token with the 'admin' role can access all data, while a 'staff' role access_token can only access their own data_

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "updatedCategory": {
    "id": 1,
    "name": "Waffle Cone",
    "createdAt": "2023-10-30T20:24:52.246Z",
    "updatedAt": "2023-10-31T03:59:02.802Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name can't be Empty"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You're Not Authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

<!-- ## 12. DELETE /category/:id -->

## 12. DELETE /category/:id

#### Request - Params

```json
{
  "id": "<integer>"
}
```

#### Request - Headers - Authorization (Bearer Scheme)

```http
Authorization: Bearer <access_token>
```

_\*An access_token with the 'admin' role can access all data, while a 'staff' role access_token can only access their own data_

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "message": "Italian success to delete"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You're Not Authenticated"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You're Not Authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

---

> With Prefix **/pub** any user without authentication can access this endpoint below.

---

<!-- 1. GET /pub/ -->

## 1. GET /pub/

When the query parameters are provided, this endpoint should support data filtering based on the specified query keys and their corresponding values.

#### Request - Query (Optional)

```json
{
  "name": "<string>"
}
OR
{
  "page": "<integer>"
}
OR
{
  "category": "<array of integer> or <integer>"
}
OR
{
  "sort": "<string>"
}
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "currentPage": 1,
  "totalData": 16,
  "totalPage": 2,
  "getCuisine": [
    {
      "id": 1,
      "name": "Pizza",
      "description": "Delicious and cheesy pizza with your favorite toppings.",
      "price": 15000,
      "imgUrl": "https://example.com/pizza.jpg",
      "categoryId": 3,
      "authorId": 1,
      "Category": {
        "id": 3,
        "name": "Sushi"
      }
    },
    {
      "id": 3,
      "name": "Sushi",
      "description": "Fresh and flavorful sushi rolls.",
      "price": 18000,
      "imgUrl": "https://example.com/sushi.jpg",
      "categoryId": 2,
      "authorId": 1,
      "Category": {
        "id": 2,
        "name": "Pizza"
      }
    },
    ...
  ]
}
```

&nbsp;

</details>

<!-- 2. GET /pub/:id -->

## 2. GET /pub/:id

#### Request - Params

```json
{
  "id": "<integer>"
}
```

<details>
<summary>
Click here for Response
</summary>

_Response (200 - OK)_

```json
{
  "findCuisine": {
    "id": 3,
    "name": "Waffle Cone",
    "description": "Fried Chicken ...",
    "price": 28000,
    "imgUrl": "https://img.sndimg.com/ ...",
    "categoryId": 1,
    "authorId": 1,
    "createdAt": "2023-10-31T01:58:44.765Z",
    "updatedAt": "2023-10-31T01:58:44.765Z"
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Error Data Not Found"
}
```

&nbsp;

</details>

<!-- GLOBAL ERROR -->

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
