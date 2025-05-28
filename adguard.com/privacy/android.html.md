# AdGuard for Android Privacy Notice

*May 28, 2025*

---

**Keynote:** This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. We only collect essential information for AdGuard products to function fully and properly. We do not share or sell your personal information. We are strongly committed to protecting user privacy and being as transparent as possible.

---

This Privacy Notice supplements the AdGuard Privacy Policy available at [adguard.com/privacy.html](https://adguard.com/privacy.html), which provides you with the necessary information regarding terms and conditions of data processing by AdGuard.

## What data AdGuard for Android can collect and when

Here we describe all cases when and what data is sent to our server, so you can be sure that we only collect the minimum necessary for the application to work properly. The information we collect about you depends on how you interact with our application.

### Registration of a new user

When we create an AdGuard account for the user, the following information is sent to our servers:

- Email
- Password
- App identifier

**Why we need this information:** We need your email address because this is the login of your AdGuard account. We use the app identifier to control the simultaneous use of multiple applications.

### User authorization

Users have the option to activate the license by logging into their personal account in the app. The following information is sent to our servers:

- Login (email address)
- Password

Upon authorization, the app receives an active license for that account from the server.

### License status check

To validate the license status AdGuard connects to its servers. When it happens, the following information is sent:

- App identifier
- App version
- Device name (used in the AdGuard account so that the user can see the list of devices activated with their license keys)
- License key
- App language
- Build identifier
- Crash reports
- Telemetry

**Why we need this information:** We use this data to check the license status and to bind the license to the device. This information is also used to display the user’s license keys in the AdGuard account.

Users may also enter their AdGuard account credentials (login and password) to activate the functionality of the full version of the app. In this case, the app will also send this login and password pair to the server in order to authenticate the user.

### License reset

The license is reset upon user request. When it happens, the app identifier is sent.

**Why we need this information:** In order to know which app to do the license reset for.

### Trial period request

When a user requests the trial period, the following information is sent to our server for activation:

- App identifier
- User’s email address
- App language
- Marketing consent flag indicating whether user has consented to receive marketing emails
- Build identifier
- App installation channel

**Why we need this information:**

- To know which device is requesting the trial features
- To notify the user of their trial period. Activation instructions and other trial materials will be sent to the email address provided
- To know if the user was referred by an AdGuard affiliate, and if so, which affiliate
- To learn the source of AdGuard installation

### App updates check

To check for app updates, AdGuard connects to its servers. When it happens, the following information is sent:

- App identifier
- App version
- App language
- SDK (OS version of the device)
- Update channel

Update checks are performed periodically or when prompted by the user. We do not store or use this data in the future, but we aggregate it in an anonymous form to count the total number of AdGuard products installed.

### Checking for filter updates

To check for updates of blocking filters, AdGuard connects to its servers. When it happens, no information is sent. The application periodically downloads a file with all filter versions and their available updates.
When updating custom filters, we access the resources specified by the user when adding the custom filter.

### Userscripts

When updating userscripts, we first check for a new version and then download the update. Pre-installed userscripts are stored on our servers. We also access the resources specified by the user when adding the userscripts.

### Sending a web page complaint

The user can submit a report of a website problem directly from the app. The app will automatically open [reports.adguard.com](reports.adguard.com/new_issue.html) and forward some information about its configuration. The user can then alter or delete it.

Unless the user agrees to submit this information by clicking *Next*, none of this information is stored or sent anywhere. If the user agrees, the report will become public (but anonymous) on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues).

### Sending a message to support

Users can send messages to support directly from the app. In that case, the following information will be sent along with the message and the email address provided:

- App identifier
- App version
- Device name (which includes both device manufacturer name and device model name)
- Android version
- Android kernel version
- List of enabled filters
- App configuration

If *Send app logs and system info* is enabled, the program will also send additional information:

- List of app threads and their stack traces
- Log file contents
- List of installed apps

This detailed information is used by the support team to help solve more complicated problems.

### Automatic crash reports

The first time the app is launched, users are asked if they want to allow AdGuard to send automatic crash reports. If they do (and only if they do), the following information will be sent to our servers when the app crashes:

- Device name and model
- OS version and kernel build
- ROOT status
- Unidentifiable Android ID
- Amounts of total and free RAM
- Screen orientation
- Screen resolution and density
- App name and version
- Information related to the crash (error message and stack trace)
- The last lines of the log file

**Why we need this information:** To troubleshoot critical issues. It keeps us aware of new problems not reported by users.

Crash report data is stored only on our servers. We do not use any third party services to collect and store crash reports. All crash reports are stored for 30 days.

### Technical and interaction data

The first time the app is launched, users are asked if they want to allow AdGuard to send technical and interaction data. If they do, the following information is sent:

- App version
- App language
- App theme
- App configuration (enabled features and activation status)
- Names of the screens, dialogs, and toasts viewed inside the app
- User clicks on app elements
- Time since the app was first used
- Device information (type, screen size, language, platform, and OS version)
- User agent (device brand and model, name, version, and system architecture)
- Unique generated identifier
- Authorization status
- Kill Switch status
- License status and expiration date

When the data is sent to AdGuard, your IP address may be temporarily collected as part of our server logs.

This data is used only internally and is not shared with third parties.

**Why we need this information:**

- To find out which features are used the most
- To find issues that one may face while using the app
- To fix mistakes in the UI/UX
- To learn what people like or don’t like about our app

### Browsing Security website check

If *Browsing Security* is enabled, AdGuard will check each website before the user visits it. We use the [Safe Browsing API](https://adguard.com/kb/general/browsing-security/) for this purpose, and the information about the visited website is sent in the form of hash prefixes. This doesn’t allow us to determine which website is being visited. In addition, we periodically pull database updates from our servers.

The information described above, when collected by AdGuard for Android, is generally not correlated with any other personal information and is used anonymously aggregated with similar information from other users of the AdGuard software for analytical purposes.
