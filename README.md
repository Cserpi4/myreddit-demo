MyFeed – TypeScript Edition (Demo)

A Reddit-style demo application built with React, TypeScript, Redux Toolkit, and a custom Express backend.  
The app uses the Lemmy API through a backend proxy and displays posts, communities, search results, and comments in a clean, responsive UI.

Features
- Browse popular posts and communities
- Community sidebar with icons
- Search posts with live suggestions
- View and toggle post comments
- Comments flattened for UI rendering
- Markdown rendering for comments
- Client-side voting UI (demo)
- Clean Redux architecture with normalized state

Tech stack

Frontend
- React
- TypeScript
- Redux Toolkit
- Async state handling with `createAsyncThunk`
- Feature-based folder structure
- UI-only components separated from data logic

Backend
- Node.js
- Express
- Acts as a proxy to the Lemmy API
- Handles CORS and centralizes API calls
- Keeps the frontend clean and secure

Frontend (React + TypeScript)
↓ axios
Backend (Express)
↓ fetch
Lemmy API

Why TypeScript?

This project started as a JavaScript application. It was migrated to TypeScript component by component, Redux slice by Redux slice, following a bottom-up approach: utilities and leaf components first, shared types and the store last. Shared interfaces (e.g. a single `Post` type used across components and slices) replace scattered `PropTypes` checks, catching mismatches at compile time instead of at runtime.

Why Lemmy instead of Reddit?

This project originally used the Reddit JSON API. Following Reddit's 2026 Responsible Builder Policy, unauthenticated API access was shut down and new app approval became gated behind an explicit review process not well suited to small, non-commercial demo projects.

Rather than abandon the project, the data source was migrated to the Lemmy API, a federated, Reddit-style platform with open, key-free read access. The backend proxy layer normalizes Lemmy's response shape to match the original Reddit-style data structure, so the frontend components required no changes.

Testing

Unit and component tests with Jest and React Testing Library, covering Redux slices (`homeSlice`, `commentSlice`) and the `Card` component. Run with `npm test`.

Related project

This is the TypeScript migration of the original JavaScript version: [MyFeed (Demo)](https://github.com/Cserpi4/myfeed-demo).

Author

Name: Dániel Cserpák
Portfolio: https://daniel-cserpak-portfolio.netlify.app/  
LinkedIn: https://www.linkedin.com/in/d%C3%A1niel-cserp%C3%A1k-109057283/

Note: The app relies on the public Lemmy instance API (lemmy.world). Free-tier backend hosting (Render) may cause a short delay on first load after inactivity.