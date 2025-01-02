# AI-Powered Travel Assistant SRS
## 1. Introduction

### 1.1 Purpose
This Software Requirements Specification (SRS) describes the functionality, constraints, and requirements for an AI-powered travel assistant web application. The application will function like a virtual travel agency (users book on their own) and also serve as an on-demand AI “tour guide” in a later phase.

### 1.2 Scope
- **Core**: Generate themed travel itineraries based on user-defined parameters and open-ended preferences.
- **Extended**: Provide real-time price updates, budget tracking, route cost optimization, and store itineraries.
- **Future Expansion**: “Tour Guide” mode for on-trip guidance.

### 1.3 Definitions, Acronyms, and Abbreviations
- **AI**: Artificial Intelligence
- **Backpacker Mode**: A mode focused on minimizing travel cost (e.g., cheap flights, budget accommodations, award points usage).
- **Award Points**: Loyalty program points or miles used to book travel.
- **Itinerary**: A structured plan containing destination, dates, activities, and costs.

### 1.4 References
- **Integrations**: Flight/Hotel APIs (e.g., Amadeus, Skyscanner), Weather APIs (e.g., OpenWeatherMap), Maps APIs (Google Maps), etc.
- **Best Practices**: Industry best practices for data security and user privacy (GDPR, CCPA).

---

## 2. Overall Description

### 2.1 Product Perspective
The application will be a standalone web platform, leveraging various third-party APIs to gather flight, hotel, weather, and user-generated data. It will employ an AI model (e.g., GPT-like system) to generate itineraries and respond to user queries.

### 2.2 User Classes and Characteristics
1. **Casual Traveler**: Wants easy, one-click itineraries within a reasonable budget.
2. **Backpacker**: Prioritizes minimum cost, flexible routes, possibly uses award points.
3. **Frequent Flyer**: May have advanced preferences (e.g., alliances, preferred airlines, loyalty programs).
4. **Family/Group Planner**: Needs collaborative features, multiple travelers’ preferences.

### 2.3 Operating Environment
- Web-based interface, accessible on modern browsers (Chrome, Firefox, Safari, Edge).
- Responsive design for mobile, tablet, and desktop.
- Backend hosted on cloud services (e.g., AWS, Azure, GCP).

### 2.4 Constraints and Assumptions
- Must handle up to 30 itineraries stored per user, with the option to mark itineraries as permanent.
- AI functionality depends on external Large Language Model (LLM) services or an in-house ML model.
- Real-time price updates rely on third-party APIs’ availability and response times.
- The system must adhere to relevant data protection laws.

---

## 3. Functional Requirements

### 3.1 User Registration & Profile
- **FR-1**: The system shall allow users to create a profile with a unique username, password, and valid email.
- **FR-2**: The system shall store user preferences (e.g., favorite destinations, budget range, seat preferences).
- **FR-3**: The system shall securely allow users to update or delete their profile information.

### 3.2 Itinerary Generation
- **FR-4**: The system shall prompt users for both structured parameters (cost, continent, travel dates) and free-form text preferences.
- **FR-5**: The AI shall generate a themed itinerary based on provided parameters and user preferences.
- **FR-6**: The system shall allow the user to consult with the AI in a question-and-answer format to refine the itinerary.

### 3.3 Saving and Managing Itineraries
- **FR-7**: The system shall permit saving up to 30 itineraries per user.
- **FR-8**: Users shall be able to mark specific itineraries as “permanent” to prevent auto-deletion.
- **FR-9**: The system shall allow users to view, edit, and delete saved itineraries.

### 3.4 Backpacker Mode
- **FR-10**: The system shall enable a “Backpacker Mode” that emphasizes ultra-low-cost routes, cheapest airlines, and budget accommodations.
- **FR-11**: In Backpacker Mode, the AI shall consider booking flights separately or using positioning flights to minimize cost.
- **FR-12**: Users in Backpacker Mode may override cost settings if they specify a higher-cost preference.

### 3.5 Award Points and Route Optimization
- **FR-13**: The system shall allow users to input airline loyalty programs and points balances.
- **FR-14**: The AI shall search award availability to minimize points usage (Backpacker Mode) or keep within user’s points/cash budget (standard mode).
- **FR-15**: The system shall consider combining cash tickets and award tickets to meet cost constraints.

### 3.6 Flight and Accommodation Data (Real-Time Updates)
- **FR-16**: The application shall fetch real-time flight prices, seat availability, and accommodation costs from external APIs.
- **FR-17**: The system shall display price changes or availability updates to users in real-time or via scheduled refresh.

### 3.7 Weather and Seasonal Insights
- **FR-18**: The system shall integrate with a weather API to display forecast data for each destination during travel dates.
- **FR-19**: The AI shall highlight seasonal considerations, local festivals, or special events relevant to the itinerary.

### 3.8 Collaboration and Sharing
- **FR-20**: The application shall allow sharing itineraries via a unique link or email invitation.
- **FR-21**: The system shall support collaborative editing or commenting for group planning.

### 3.9 Budget Tracking and Currency Conversion
- **FR-22**: The application shall track estimated travel expenses (flight, accommodation, activities) in real time.
- **FR-23**: The system shall provide automatic currency conversion based on user preference and up-to-date exchange rates.

### 3.10 In-App Chat & Notifications
- **FR-24**: The system shall provide an in-app chat interface for user-AI interactions.
- **FR-25**: The system shall send notifications for major price drops, itinerary changes, or upcoming trip reminders.

### 3.11 Personalized Recommendations (Machine Learning)
- **FR-26**: The AI shall learn from previous user itineraries and feedback to refine future suggestions.
- **FR-27**: The system shall store user feedback post-trip to improve ML models.

### 3.12 Calendar & Document Integration
- **FR-28**: The system shall offer the ability to sync travel dates and times with Google Calendar, iCal, etc.
- **FR-29**: The system shall allow optional secure storage or links to essential travel documents (passport, visas).

### 3.13 Community Reviews and Tips
- **FR-30**: The system shall allow users to leave reviews or tips about destinations and activities.
- **FR-31**: The AI may incorporate crowd-sourced ratings to make recommendations.

### 3.14 Emergency Contact and Safety
- **FR-32**: The application shall display local emergency numbers and embassy contacts based on destination.
- **FR-33**: The system shall provide alerts for potential travel advisories or safety concerns.

### 3.15 Gamification / Loyalty Mechanism
- **FR-34**: The system may award points or badges for user engagement (e.g., trip completions, reviews).
- **FR-35**: The system shall track these points/badges and display them in a user profile dashboard.

### 3.16 Offline Access
- **FR-36**: The system shall allow offline access to saved itineraries (e.g., via PDF export or local data caching).
- **FR-37**: The system shall sync offline changes with the server when the user is back online.

### 3.17 Sustainability Mode (Green Travel)
- **FR-38**: The system shall calculate approximate carbon footprint of itineraries.
- **FR-39**: The system shall suggest greener travel options (e.g., trains, carbon offsets).

### 3.18 Tour Guide Function (Future Phase)
- **FR-40**: The system shall provide an interactive “tour guide” mode to offer on-trip guidance and explanations.
- **FR-41**: The tour guide feature shall be locked until core planning functionality is finalized.

---

## 4. Non-Functional Requirements
### 4.1 Performance Requirements
- **NFR-1**: The system shall support at least 10,000 concurrent users without significant slowdown.
- **NFR-2**: Average response time for itinerary generation (AI prompts) shall be under 5 seconds (dependent on external AI infrastructure).

### 4.2 Security Requirements
- **NFR-3**: All data-in-transit shall be encrypted using HTTPS (TLS 1.2 or higher).
- **NFR-4**: Sensitive user data (passwords, travel documents) shall be encrypted at rest.
### 4.3 Usability Requirements
- **NFR-5**: The UI shall be responsive and usable on mobile, tablet, and desktop.
- **NFR-6**: The chat interface shall be intuitive and guide the user to relevant features.

### 4.4 Maintainability Requirements
- **NFR-7**: Codebase shall be modular (microservices or well-structured layers) to allow easy updates or API swaps.
- **NFR-8**: Adequate logging and monitoring shall be in place for troubleshooting and analytics.

### 4.5 Reliability and Availability
- **NFR-9**: The system shall target at least 99.5% uptime per quarter.
- **NFR-10**: The system shall gracefully degrade if an external API is down, offering partial functionality or cached results.

---

## 5. Use Case Examples
Below are a few high-level use cases. Each can be elaborated further in UML diagrams if needed.
### 1. UC-01: Generate Itinerary
- **Primary Actor**: Registered User
- **Precondition**: User is logged in.
- **Main Flow**:
  1. User enters parameters (dates, destination, budget). 
  2. User provides open-ended preferences (e.g., “I love beaches”). 
  3. System asks clarifying questions if needed. 
  4. AI generates itinerary. 
  5. User reviews and saves the itinerary.
- **Postcondition**: The itinerary is saved or displayed for user acceptance.

### 2. UC-02: Enable Backpacker Mode
- **Primary Actor**: Registered User (Backpacker)
- **Precondition**: User is logged in and is on itinerary generation flow.
- **Main Flow**:
  1. User toggles “Backpacker Mode.”
  2. System adjusts search parameters (lowest cost flights, minimal stops, cheap accommodations).
  3. System presents itinerary options.
- **Postcondition**: User receives cost-optimized itinerary.

### 3. UC-03: Manage Itinerary
- **Primary Actor**: Registered User
- **Main Flow**:
  1. User views saved itineraries (up to 30).
  2. User edits or deletes an existing itinerary.
  3. User marks an itinerary “permanent.”
- **Postcondition**: Selected itinerary is updated, deleted, or permanently saved.

### 4. UC-04: Check Real-Time Flight Updates
- **Primary Actor**: Registered User
- **Main Flow**:
  1. User opens an existing itinerary with flight details.
  2. System queries external flight API for price/availability updates.
  3. System notifies user of any changes (price increases/decreases).
- **Postcondition**: User sees updated flight info.

### 5. UC-05: Tour Guide Mode (Future)
- **Primary Actor**: Registered User
- **Precondition**: User has an existing itinerary and is currently traveling.
- **Main Flow**:
  1. User activates “Tour Guide” mode.
  2. System uses itinerary and location data to offer point-by-point guidance and commentary.
- **Postcondition**: User receives interactive tour guidance.

---

## 6. Test Cases
### 6.1. User Registration & Profile

| **Test Case ID** | **Test Case Name**       | **Description**                                           | **Preconditions**                          | **Test Steps**                                                                                    | **Expected Result**                                                               |
|------------------|--------------------------|-----------------------------------------------------------|--------------------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| TC-001           | Register New User        | Validate that a new user can register with valid data     | None (on Sign-Up page)                     | 1. Navigate to Sign-Up page.<br>2. Fill in email, username, and password.<br>3. Click "Register". | User account is created successfully; user is redirected to Dashboard.            |
| TC-002           | Prevent Duplicate Emails | Check if the system rejects duplicate email registrations | A user with the same email is registered   | 1. Attempt to register with an email that already exists.<br>2. Submit registration form.         | Error message "Email already in use" is displayed; user cannot register again.    |
| TC-003           | Update User Profile      | Validate that the user can update preferences             | User is logged in with an existing profile | 1. Navigate to Profile.<br>2. Change preference (e.g., default currency).<br>3. Save changes.     | Profile updates are saved; updated preference is reflected in subsequent queries. |

---

### 6.2. Itinerary Generation

| **Test Case ID** | **Test Case Name**           | **Description**                                                                            | **Preconditions**                           | **Test Steps**                                                                                                                                                                          | **Expected Result**                                                                                   |
|------------------|------------------------------|--------------------------------------------------------------------------------------------|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| TC-004           | Generate Basic Itinerary     | System generates an itinerary from structured parameters (destination, dates, budget)      | User is logged in                           | 1. Click "Create Itinerary".<br>2. Enter "Budget: $1500", "Destination: Europe", "Dates: 2025-03-10 to 2025-03-20".<br>3. Submit.                                                       | AI returns a recommended itinerary with flights, accommodations, and activity suggestions.            |
| TC-005           | Include Free-Form Preference | System tailors itinerary based on open text field (e.g., "I love beaches and local food"). | User is logged in                           | 1. Click "Create Itinerary".<br>2. Enter structured parameters.<br>3. Enter "I love beaches and local food" in free-form box.<br>4. Submit.                                             | AI-generated itinerary includes beach destinations or beach day trips and local culinary experiences. |
| TC-006           | AI Consultation (Refinement) | AI asks clarifying questions when user’s preferences are ambiguous or contradictory        | User is logged in and chooses advanced mode | 1. Click "Consult AI".<br>2. Enter contradictory info (e.g., "luxury + budget lodging").<br>3. Wait for AI’s clarifying question.<br>4. Provide additional clarifications, then submit. | AI requests more info; user clarifies; final itinerary merges user constraints properly.              |

---

### 6.3. Saving and Managing Itineraries

| **Test Case ID** | **Test Case Name**          | **Description**                                                  | **Preconditions**                    | **Test Steps**                                                                         | **Expected Result**                                                                                        |
|------------------|-----------------------------|------------------------------------------------------------------|--------------------------------------|----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| TC-007           | Save New Itinerary          | User saves a newly generated itinerary                           | User has just generated an itinerary | 1. Generate itinerary.<br>2. Click "Save Itinerary".                                   | Itinerary is saved to user’s account and appears in "Saved Itineraries".                                   |
| TC-008           | Limit on Saved Itineraries  | Verify system blocks saving the 31st itinerary                   | User already has 30 itineraries      | 1. Generate new itinerary.<br>2. Attempt to save it.                                   | System displays "Maximum of 30 itineraries reached" message; user must delete or mark one permanent first. |
| TC-009           | Mark Itinerary as Permanent | Ensure user can mark an itinerary "Permanent" to prevent removal | User has at least 1 saved itinerary  | 1. Go to "Saved Itineraries".<br>2. Select an itinerary.<br>3. Click "Mark Permanent". | Itinerary is set to "Permanent" status; not auto-deletable.                                                |

---

### 6.4. Backpacker Mode & Award Points

| **Test Case ID** | **Test Case Name**               | **Description**                                                                     | **Preconditions**                              | **Test Steps**                                                                                          | **Expected Result**                                                                                 |
|------------------|----------------------------------|-------------------------------------------------------------------------------------|------------------------------------------------|---------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| TC-010           | Toggle Backpacker Mode           | User selects backpacker mode for ultra-low-cost suggestions                         | User is logged in; has standard itinerary flow | 1. Generate itinerary in standard mode.<br>2. Toggle "Backpacker Mode".<br>3. Regenerate itinerary.     | New itinerary focuses on lowest possible costs (cheap flights/lodging) and re-checks flight prices. |
| TC-011           | Award Points Search (Backpacker) | AI searches for best award seats with minimal point usage in backpacker mode        | User is logged in; has loyalty program data    | 1. Toggle "Backpacker Mode".<br>2. Enter points balance (e.g., 50,000 miles).<br>3. Generate itinerary. | AI suggests flights that minimize point usage; may mix separate tickets or multiple carriers.       |
| TC-012           | Award Points + Cash Combo        | AI mixes award flights with paid flights to stay within user’s cost + points budget | User is logged in; set cost & points budget    | 1. Enter cost cap (e.g., $400) and points cap (30,000 miles).<br>2. Generate itinerary.                 | AI returns an itinerary combining cash flights and award flights within specified limits.           |

---

### 6.5. Real-Time Updates & Weather

| **Test Case ID** | **Test Case Name**       | **Description**                                             | **Preconditions**                      | **Test Steps**                                                                                                      | **Expected Result**                                               |
|------------------|--------------------------|-------------------------------------------------------------|----------------------------------------|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| TC-013           | Flight Price Refresh     | Check updated flight price after initial itinerary creation | User has a saved itinerary             | 1. Open saved itinerary.<br>2. Click "Refresh Flight Prices".<br>3. System queries external API.                    | Updated price is displayed; user is notified of any price change. |
| TC-014           | Weather Data Integration | Display forecast for travel dates                           | User has an itinerary with valid dates | 1. View itinerary.<br>2. System fetches weather forecast for travel dates/destinations.<br>3. Display weather info. | Weather info is shown, including advisories or seasonal tips.     |

---

### 6.6. Calendar & Document Integration

| **Test Case ID** | **Test Case Name**        | **Description**                                                  | **Preconditions**                              | **Test Steps**                                                                                                       | **Expected Result**                                                                            |
|------------------|---------------------------|------------------------------------------------------------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| TC-015           | Sync with Google Calendar | User syncs travel dates to Google Calendar                       | User is logged in; itinerary has valid dates   | 1. Open itinerary.<br>2. Click "Sync to Calendar".<br>3. Complete OAuth flow for Google account.<br>4. Confirm sync. | Calendar events are created for departure, arrival, check-in, etc.                             |
| TC-016           | Secure Document Upload    | User uploads a travel document link or file (e.g., passport PDF) | User is logged in; has valid itinerary profile | 1. Go to "Travel Documents".<br>2. Upload PDF or provide secure link.<br>3. Confirm upload.                          | Document is stored securely (encrypted if required); user can reference it from their profile. |

---

### 6.7. Offline Access

| **Test Case ID** | **Test Case Name**         | **Description**                                             | **Preconditions**                        | **Test Steps**                                                      | **Expected Result**                                                                 |
|------------------|----------------------------|-------------------------------------------------------------|------------------------------------------|---------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| TC-017           | Export Itinerary to PDF    | User downloads itinerary details as a PDF for offline usage | User has a saved itinerary               | 1. Navigate to itinerary details.<br>2. Click "Export as PDF".      | PDF file is downloaded with relevant itinerary details.                             |
| TC-018           | Local Cache Offline Access | User accesses itinerary when device is offline              | User has app installed; itinerary cached | 1. Turn off internet.<br>2. Open app.<br>3. View "Saved Itinerary". | App displays cached itinerary; real-time updates unavailable until user reconnects. |

---

### 6.8. Tour Guide Mode (Future)

| **Test Case ID** | **Test Case Name**     | **Description**                                                  | **Preconditions**                              | **Test Steps**                                                    | **Expected Result**                                                     |
|------------------|------------------------|------------------------------------------------------------------|------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------------|
| TC-019           | Unlock Tour Guide Mode | Ensures Tour Guide features are only available post-core release | User has the final updated version (post-core) | 1. Navigate to itinerary.<br>2. Click "Activate Tour Guide Mode". | Tour Guide interface loads, AI begins offering location-based insights. |
| TC-020           | On-Trip Assistance     | Validate system provides real-time commentary on itinerary       | User is traveling; location access allowed     | 1. Turn on Tour Guide Mode.<br>2. AI identifies user’s location.  | AI describes nearby attractions, directions, and historical context.    |

## 7. Additional Recommendations
1. **Automated Regression Tests**: Ensure functionality remains stable with changes.
2. **Performance Stress Testing**: Simulate high traffic using tools like JMeter or Locust.
3. **Security Penetration Testing**: Verify encryption (HTTPS), token usage, and secure data handling.