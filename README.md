# Overlook

Overlook is a hotel management tool for hotel customers and staff to manage the room bookings and calculate the customer bills. In order to use the app, users and managers must have an account. 

### **Downloading the files**

Link #1: OverLook Application [link](https://github.com/aominhlong/Overlook)

Link #2: Overlook Web Api [link](https://github.com/turingschool-examples/overlook-api)

1. Click on the first link above

2. hit this green box that says `Code`

![Click on the Green Box](https://user-images.githubusercontent.com/89413678/165207496-db5b241d-438d-453c-b41a-8c8a9123b62c.png)

3. Copy the SSH

![Copy the SSH](https://user-images.githubusercontent.com/89413678/165207506-a40a0b1e-7841-4f1a-a0e6-cabbb85866de.png)

4. Open the terminal
5. Type `git clone` + paste the SSH link

<img width="919" alt="Clone down" src="https://user-images.githubusercontent.com/89413678/165208213-5dc3b74e-4846-4552-bd74-0e5902007fcf.png">

6. Repeat the steps above for the second link


### **To Run the Application and View the Webpage**

1. In the main-directory of Overlook, run `npm start`

2. In the main-directory of Overlook-api, run `npm start`

An example of `npm start` in the Overlook main directory is below:

![npm start](https://user-images.githubusercontent.com/89413678/165208767-4478c191-4e06-4792-b1e6-9e768e0c4b0d.gif)

3. Copy the link of the host for the app and paste it into the web browser to view the app

<img width="1060" alt="Screen Shot 2022-04-25 at 8 49 08 PM" src="https://user-images.githubusercontent.com/89413678/165210094-4e205a44-0bf9-4256-8d0f-2b3a440b0005.png">

![Paste Local Host](https://user-images.githubusercontent.com/89413678/165210384-d384bee8-a2e2-4fc6-b8a3-c06020f29765.gif)


### **Using the Application**

**_To Login_**

To login, the user will need to type in their username and password. 
![Login](https://user-images.githubusercontent.com/89413678/165212931-c0ed3db0-8052-4241-817e-faf3165a4250.gif)

If the username or password is incorrect, an error message will show. 

![Login Error](https://user-images.githubusercontent.com/89413678/165213277-554183ea-eda2-4b83-a924-1159b61fccb1.png)


**_User Dashboard_**

When users login, they are taken to their dashboard. Here, they can see:
- Name
- ID
- Total money spent
- Previous room bookings
- Current room bookings

![User Dashboard](https://user-images.githubusercontent.com/89413678/165214022-f688f6b7-c716-4819-9a36-773b6a843db2.png)

Users are also able to make another booking in the future from their dashboard. 

**_To look for rooms to book_**

To begin looking for rooms to book, users can go down to the navy blue box below, and click on the calendar icon and pick a date that they want to look for rooms. They also have an option to filter the rooms by the room type: all options, residential suite, suite, junior suite, or a single room. Clicking `Check the date` will bring them to a page that shows all available days for that date. 

![Choose a date](https://user-images.githubusercontent.com/89413678/165215565-d9b1782e-66c6-4072-a52c-ef66e682ad29.gif)

**_Booking a room_**

After selecting a date, users are taken to a new page that shows all rooms that are available. When users see a room they like, they can click on the button `Book Now` and it will book their room for them. A confirmation message will display as well as the the room being placed in their current bookings section. 

![Booking room confirmation](https://user-images.githubusercontent.com/89413678/165216520-e827dee7-6165-46fb-8e57-f432e954ab96.gif)

If there are no rooms available for that date, `Sorry! No rooms are available for this date.` will display above. The user can click the `Go Back` button located at the top left of the window to go back to their dashboard to choose another date or room type. 

![No rooms available and go back](https://user-images.githubusercontent.com/89413678/165216940-0efc5c7e-1f88-4487-9a76-0f1fb3d530a3.gif)

### **To Close Down the Application**

In the terminal where the app and server is running, use `control` + `c` to stop both the application and the application's server.

### **Accessibility**

Lighthouse was used to evaluate the app for accessibility. 

![Lighthouse Test](https://user-images.githubusercontent.com/89413678/165209632-7748c049-96bd-40e9-8fe6-f46e26990cd2.png)

### **Technologies Used**
- JavaScript
- Mocha
- Chai
- Webpack
- CSS
- HTML


### **Challenges**
- I had my fetch calls working but to post the data, I had to make sure the format matched what was there. I also had to make sure numbers are numbers instead of strings when I post the data. 

- Solving one bug made two more bugs appear.

- My filter by date was not working properly because it was splicing out both from both the array I made and the original data. 

- I iterated over the wrong item in one instance. 


### **Wins**
- My fetch and posts worked really well!

- I fixed the third challenge by pushing the information from the original array instead of setting it equal to each other.

- Accessibility reached 100%


### **Contributors**
- Nicholas Ao [GitHub](https://github.com/aominhlong)


### **Future Additions**
- Make a manager class

- Allow users to remove bookings

- Customers can only book a year in advance
