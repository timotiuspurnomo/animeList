# Welcome to AnimeList

A simplified alternative of MyAnimeList.

## Screenshots

<img src="/assets/images/screenshots/1.png" alt="Screenshot 1" width="205"> <img src="/assets/images/screenshots/2.png" alt="Screenshot 2" width="205"> <img src="/assets/images/screenshots/3.png" alt="Screenshot 3" width="205"> <img src="/assets/images/screenshots/4.png" alt="Screenshot 4" width="205">

## Try the app

1. Install dependencies

   ```bash
   npm run reset-ios
   # or
   npm run reset-android
   ```

2. Start the app

   ```bash
   npm run ios
   # or
   npm run android
   ```

## Tools / Libraries Used

1. Expo with Typescript\
   Production-grade framework for React Native.\
   I always recommend Expo instead of CLI because it simplifies developing and building the app.

2. Tenrai API\
   Tenrai is an unofficial & open-source API for MyAnimeList.

3. Zustand\
   Small and fast state management library.\
   In my opinion, Zustand is simpler, easier, and more straightforward than RTK.

4. MMKV\
   An efficient, small mobile key-value storage framework developed by WeChat. \
   Faster than AsyncStorage in both read and write operations.

5. Tanstack Query\
   Powerful asynchronous state management, server-state utilities and data fetching.\
   A perfect combo with Zustand as a client-state and server-state management.

6. Day.js\
   Small-sized alternative to Moment.js with the same modern API.

7. React Native Reanimated\
   For smooth animations with an excellent developer experience.
