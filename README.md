# Eventry Project

## Project Overview

Eventry is a dynamic web application designed to manage and optimize events, offering features such as image optimization, SEO improvements, event management, and user authentication.

---

## Features and Use Cases

### 1. **Handling Loading and Error States**

- Implement proper loading and error states across the app for better user experience.

---

### 2. **Image Optimization and Blur Placeholder**

- Optimize images using Next.js Image component.
- Integrate blur placeholders for better visual feedback during image loading.

---

### 3. **Implementing Search**

- Implement search functionality with:
  - `searchTerm` to filter results.
  - Debouncing to enhance performance and reduce unnecessary API calls.

---

### 4. **Meta Optimization and Dynamic Meta**

- Improve page-level SEO by dynamically updating meta tags based on page content.

---

### 5. **Integrate Structured Event Schema**

- Use **Google Structured Data** to add event-specific schema for SEO benefits.

#### **Use Case: SEO**

- Boost event visibility in search engines with structured event schema.

---

### 6. **RSVP and Ticket Purchase**

- Allow users to RSVP to an event or purchase a ticket.

#### **Use Case: Send an Email on Successful Payment**

- Send a confirmation email to users upon successful payment.

---

### 7. **Mark Event as Interested**

- Provide users the ability to mark events as “Interested.”

#### **Use Case: Revalidate Path after Database Update**

- Automatically revalidate the path to reflect changes after a database update.

---

### 8. **Server Action on Button Click**

- Use `Server Actions` to optimize performance on critical actions.

#### **Use Case: Performance Optimization with `useTransition` Hook**

- Optimize rendering of components during server-side state updates using the `useTransition` hook.

---

### 9. **Auth Details in Context**

- Manage user authentication details with Context API.

#### **Use Case: How to Use Context API with Next.js App Router**

- Implement global authentication context compatible with the Next.js App Router.

---

### 10. **Complete Login Functionality**

- Build email/password authentication.

#### **Use Case: Client Component to Server Action**

- Handle login requests from a client component via server actions.

---

### 11. **Register User**

- Design and implement user registration UI.
- Save registered user details in the database.

#### **Use Case: Server Component to Server Action**

- Enable seamless data submission from server components to server actions.

---

### 12. **Replace UI Fake Details with Real Data**

- Replace placeholder data with actual data fetched from the database.

---

### 13. **Integrate MongoDB with Next.js**

- Set up MongoDB using Mongoose:
  - Connect to MongoDB.
  - Define models and schemas.
  - Perform queries for events and users.

#### **Database Setup**

- Events data.
- User data.
- References between events and users.

---

### 14. **Build UI Structure**

- Develop the UI structure based on the provided template.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Database:** MongoDB (Mongoose)
- **State Management:** Context API
- **Image Handling:** Next.js Image, Sharp
- **Email Service:** TBD
- **SEO Tools:** Google Structured Data, Meta Optimization
- **Performance Optimization:** useTransition Hook

---

## Future Enhancements

- Integrate payment gateways for ticket purchase.
- Add analytics for event performance tracking.
- Enable real-time chat for event discussions.

---

## Conclusion

This project encompasses a wide range of modern web development practices and tools, providing a comprehensive solution for event management and optimization.
