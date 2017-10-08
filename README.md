# Shared Preferences for Fitbit
Android-like, memory cached and persistent key-value local storage for Fitbit Ionic SDK.

## Usage
It's a super simple script, so I'll be brief there.

Put the `shared_preferences.js` script in the `common` folder, or wherever you want.

Import the script:
```javascript
import * as prefs from "../common/shared_preferences";
```

Store your values:
```javascript
prefs.setItem("keep_screen_on", true);
prefs.setItem("user_name", "John Doe");
prefs.setItem("birth_year", 1988);
```

Read your values:
```javascript
let keepScreenOn = prefs.getItem("keep_screen_on");
let userName = prefs.getItem("user_name");
let birthYear = prefs.getItem("birth_year");
```

The script loads the data automatically on start, and saves it on close. You can, however, load or save (synchronously) on demand:
```javascript
prefs.save();
prefs.load();
```

You can also enable debug logs or change storage file right within the script:
```javascript
const DEBUG_MODE = true;
const FILE_NAME = "different_file.json";
```

And that's all there is :-)).
