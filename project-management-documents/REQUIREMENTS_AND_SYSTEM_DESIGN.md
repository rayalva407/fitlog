# Requirements & System Design

## 1. User Stories & Completion Criteria

### Epic: User Authentication

**User Registration**
- **Story:** As a new user, I want to create a new account using my email and a password, so that I can access the application features.
- **Acceptance Criteria:**
  - 1: While on the registration/login screen, I should be able to select sign up, enter my email and password and my account should be created. I should be automatically signed in to the application.
  - 2: I should see an error when entering an invalid email. No account should be created and I should be prompted to try again.
  - 3: If entering an invalid password I should see an error prompting me to try again and show the password criteria.

**User Login**
- **Story:** As a returning user, I want to log into my account, so that I can access my workout and habit data.
- **Acceptance Criteria:**
  - 1: While on the registration/login screen, I should be able to select "Log in". Once correct credentials are inputted I should be logged in and taken to the Dashboard screen.
  - 2: Giving incorrect credentials should show an error message letting me know that the credentials were incorrect.
 
### Epic: Dashboard

**View Today's Summary**
- **Story:** As a user, I want to see a dashboard that shows my habits for today and my recently logged workouts.
- **Acceptance Criteria:**
  - 1: The dashboard shows a list of habits to be completed today.
  - 2: The dashboard shows the 3 most recently logged workouts.

### Epic: Habit Management

**Create a Habit**
- **Story:** As a user, I want to create a new habit by giving it a name, so that I can start tracking it.
- **Acceptance Criteria:**
  - 1: Pressing "Add Habit" takes me to a form.
  - 2: Entering a name and pressing "Save" creates the habit and adds it to the list.
  - 3: Pressing "Cancel" navigates back without saving.

**Mark Habit Complete**
- **Story:** As a user, I want to mark a habit as complete which allows me to maintain my streak.
- **Acceptance Criteria:**
  - 1: Tapping a "Complete" button marks it complete and updates the UI/streak.
  - 2: Tapping a "Not Complete" button marks it incomplete and updates the UI/streak.

**View Habit History**
- **Story:** As a user, I want to view my a history of completed habits and current streak for a habit, so that I can track my progress over time.
- **Acceptance Criteria:**
  - 1: Tapping on a habit navigates to a habit details screen showing completion history and streak count.

### Epic: Workout Management

**Create a Workout Template**
- **Story:** As a user, I want to create a workout template, so that I can conveniently log it and re-use it.
- **Acceptance Criteria:**
  - 1: Pressing "Add Workout" navigates to a form.
  - 2: Entering a name and pressing "Save" creates the template and adds it to the list.

**Log a Completed Workout**
- **Story:** As a user, I want to log an instance of a completed workout, so I can keep a history of my workout activity.
- **Acceptance Criteria:**
  - 1: Tapping on a workout template shows an option to "Log This Workout".
  - 2: Confirming the log creates a new entry with the current date/time.

**View Workout History**
- **Story:** As a user, I want to see a list of all my past logged workouts, sorted by date.
- **Acceptance Criteria:**
  - 1: Navigating to "History" shows a screen that included a chronological list of all previous workouts.

## 2. Data Models & Architecture

### Tech Stack
- **Frontend:** React Native (Expo)
- **State Management:** Redux Toolkit
- **Navigation:** React Navigation (Stack + Tabs)
- **Backend & Auth:** Firebase (Firestore Database, Authentication)
- **Styling:** NativeWind (Tailwind CSS for RN)

### Data Models

```javascript
// Firestore Database Structure

// 'users' collection
users/{userId} {
  email: string,
  createdAt: timestamp
}

// 'habits' collection (subcollection of a user)
users/{userId}/habits/{habitId} {
  name: string,
  streak: number,
  completionDates: array<timestamp>,
  createdAt: timestamp
}

// 'workoutTemplates' collection (subcollection of a user)
users/{userId}/workoutTemplates/{templateId} {
  name: string,
  createdAt: timestamp
}

// 'workoutLogs' collection (subcollection of a user)
users/{userId}/workoutLogs/{logId} {
  templateId: string,
  templateName: string,
  date: timestamp,
}
```

### App Architecture
```text
[UI Components] <-(dispatch actions)-> [Redux Store] <-(async thunks)-> [Firebase SDK] <-> [Firebase Firestore/Auth]
```

## 3. Wireframes & UI/UX Design
### Design Philosophy
Clean, minimal, and focused interface using a primary color for action buttons and highlights. Follows platform-specific navigation patterns.

### Screen Descriptions

**Authentication Screen**
 - Tabs for Login/Signup
 - Email and password inputs
 - Submit button

**Dashboard Screen**
 - "Today" heading with habit list
 - "Recent Activity" section with workout history
 - Bottom navigation bar

**Habits List Screen**
 - List of all habits with streaks
 - Checkbox to mark completion
 - Floating action button for adding habits

**Add/Edit Habit Screen**
 - Text input for habit name
 - Save and cancel buttons

**Workouts List Screen**
 - List of workout templates
 - Floating action button for adding workouts
 - Tap to log completed workout

Note: Wireframe for this application included in the project-management-documents folder.

## 4. Non-Functional Requirements

 - Performance: Screens should load core content in under 1 second
 - Usability: Intuitive navigation following platform conventions
 - Reliability: Data must persist correctly between sessions
 - Security: Authentication and data rules enforced via Firebase Security Rules
