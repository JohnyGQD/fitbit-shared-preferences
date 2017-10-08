# Shared Preferences for Fitbit
Android-like, memory cached and persistent key-value storage for Fitbit SDK.

## Usage
It's a super simple script, so I'll be brief there.

Put the script in the commons folder, or wherever you want.

Import the script:
```javascript
import * as prefs from "../common/shared_preferences";
```

Store your value:
```javascript
prefs.setItem("keep_screen_on", true);
```

Read your value:
```javascript
let keepScreenOn = prefs.getItem("keep_screen_on");
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
