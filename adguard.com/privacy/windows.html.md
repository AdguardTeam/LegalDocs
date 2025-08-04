# AdGuard for Windows Privacy Notice

*July 30, 2025*

---

**Keynote**: This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. The information we collect includes no more than is crucial to provide the full functionality of AdGuard products. We do not share or sell your personal information. We are strongly committed to protecting user privacy and being as transparent as possible.

---

This Privacy Notice supplements the AdGuard Privacy Policy available at [adguard.com/privacy.html](https://adguard.com/privacy.html), which provides you with the necessary information regarding terms and conditions of data processing by AdGuard.

## What data AdGuard for Windows can collect and when

Here we describe all cases when and what data is sent to our server, so you can be sure that we only collect the minimum necessary for the application to work properly. The information we collect about you depends on how you interact with our application.

### Technical and interaction data

Upon first launch, users are asked if they consent to send technical and interaction data, disabled by default. If they agree, the following anonymized data is sent:

- App configuration (enabled features, license and app status, etc.)
- Device information (brand name, type, screen size, language, etc.)
- User interactions (names of visited screens and events like button clicks, etc.)

Submitting this information is optional. If you choose not to consent, no data will be transmitted. You may withdraw your consent at any time.

When the data is sent to AdGuard, your IP address may be temporarily collected as part of our server logs.

This data is used only internally and is not shared with third parties.

**Why we need this information:**

- To find out which features are used the most
- To find issues that one may face while using the app
- To fix mistakes in the UI/UX
- To learn what people like or don’t like about our app

### User authorization

Users have the option to activate the license by logging into their personal account in the app. The following information is sent to our servers:

- Login (email address)
- Password

Upon authorization, the app receives an active license for that account from the server.

### License status check

To validate the license status AdGuard connects to its servers. When it happens, the following information is sent:

- PC name
- MAC address MD5 hash
- Computer hardware ID hash
- OS language
- App identifier
- App version
- License key
- App language
- Build identifier
- Flag indicating if you take part in the Browsing Security module development

**Why we need this information:** To check the license status and display the user’s license keys in the AdGuard account. MAC and hardware ID hashes are also used to tie the license to the computer.

### License reset

The license is reset upon user request. When it happens, the app identifier  is sent.

**Why we need this information:** In order to know which app to do the license reset for.

### Checking for program updates

To check for app updates, AdGuard connects to its servers. When it happens, the following information is sent:

- App identifier
- Update channel
- App name
- App version
- App language
- Automatic update flag
- OS version

**Why we need this information:** This data is sent to our servers in order to return a correct response about what updates are available for the current version of the application.

Update checks are performed periodically or when prompted by the user. We do not store and use this data in future.

### Checking for filter updates

To check for updates of blocking filters, AdGuard connects to its servers. When it happens, no information is being sent. The program periodically downloads a file with all filter versions and their available updates.

### Automatic crash reports

If AdGuard crashes, it automatically generates a crash report. When you next open AdGuard, you will be prompted to send this report to us. The report contains diagnostic information to help us identify and fix problems quickly.

The following data is included in the crash report:

- App information: App name, version, and app identifier
- Operating system details: Windows version, build number, system architecture (e.g., x64, ARM), and .NET Framework version
- User environment: Active Windows user name and computer’s name
- App configuration: AdGuard version and settings
- Crash diagnostics: Stack trace, memory minidump (only if the crash occurred in native code), recent application log lines, and crash-specific error messages
- System status: List of active processes, total and available RAM
- Unique identifiers: Anonymous crash report ID for tracking the issue

**Why we need this information:** This data helps us troubleshoot critical issues and detect crashes that users might not report themselves.

Crash reports are stored securely on our servers for 30 days and are not shared with third parties.

### Installer crash

If AdGuard crashes during the installation process, it creates an automatic crash report and asks the user to send it to us. If the user agrees, the following information will be sent:

- Stack trace
- Computer’s name
- AdGuard version
- List of active processes
- .NET version
- App identifier
- Active Windows user name
- Installer logs

**Why we need this information:** The installer is a separate program from AdGuard and it can also have bugs and errors. The information received in crash reports allows us to understand the causes of problems and fix them in time.

### App uninstall

After AdGuard for Windows is uninstalled, the app identifier is sent.

**Why we need this information:** We need to know that the app has been uninstalled. We use the received app identifier when checking the license: we do not count deleted programs when counting the number of programs activated with the license key.

### Sending a web page complaint

The user can submit a report of a website problem directly from the app. The app will automatically open [reports.adguard.com](reports.adguard.com/new_issue.html) and forward some information about its configuration. The user can then alter or delete it.

Unless the user agrees to submit this information by clicking *Next*, none of this information is stored or sent anywhere. If the user agrees, the report will become public (but anonymous) on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues).

### Sending a message to support

Users can send messages to support right from the app. If they do, a special file containing some information about app settings and OS configuration will be sent. This data is required for troubleshooting purposes. Users also have an option to include a diagnostic report that contains additional information. Nothing will be sent unless the user manually confirms the submission.

The following information is included in this message:

- App identifier
- App version
- App language
- OS version
- Version of Microsoft .NET Framework installed on the computer
- The list of enabled filters
- License key

**Why we need this information:** This information is used by the support team to understand whether they are dealing with a paid version user or not, and to perform minimal diagnostics.

If *Include the diagnostic report in the message* is enabled, the app will also send additional data:

- List of running processes
- Detailed information about AdGuard settings, including enabled filters and installed userscripts
- Contents of AdGuard log file that includes the list of errors that occurred since the last launch of the program

This detailed information is used by the support team to help solve more complicated problems.

### Browsing Security website check

If *Phishing and malware protection* is enabled, AdGuard will check each website before the user visits it. We use the [Safe Browsing API](https://adguard.com/kb/general/browsing-security/) for this purpose, and the information about the visited website is sent in the form of hash prefixes. This doesn’t allow us to determine which website is being visited.

### Parental Control website check

When *Parental Control* is enabled, AdGuard uses its own web service to check websites against the database. We use the [Safe Browsing API](https://adguard.com/kb/general/browsing-security/) for this purpose, and the information about the visited website is sent in the form of hash prefixes. This doesn’t allow us to determine which website is being visited.
