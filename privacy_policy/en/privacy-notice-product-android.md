# AdGuard for Android Privacy Notice
*May 24,2018*
> **Keynote:** We do not share or sell any of your personal data. We are proud to say that we are one of the fighters for users privacy and we are strongly committed to this principle and to being as transparent as possible.

Our privacy policy lists the information that is collected and the processing applied to it. All the info collected includes no more than is crucial to provide full functionality of AdGuard products, and is never shared with any third parties. We do not collect anything for tracking purposes and take all necessary technical, administrative and physical measures to protect the information we get.

Please read our privacy policy to learn what information is being sent to us during the use of AdGuard for Android and how we store and use it afterwards.

## What data is collected and sent by AdGuard for Android

### License status check

To validate the license status AdGuard connects to its servers. When it happens, the following information is being sent:

* Application identifier;
* Application version;
* Device name (used in personal account so that the user can see the list of devices activated with their license keys);
* License key;
* Application language;
* Build identifier;
* Amazon purchase ID (if purchased via Amazon subscription).

We use this data to check the license status and bind the license to the device. This information is also used to display the user’s license keys in adguard.com personal account.

### License reset

The license is reset upon user request. When it happens, the following information is being transmitted:

* Application identifier

### App updates check

To check for application updates AdGuard connects to its servers. When it happens, the following information is being sent:

* Application identifier;
* Application version;
* Application language;
* Update channel.

Update checks are performed periodically. We do not store or use this data in future (but we aggregate it in anonymous form to count the total number of AdGuard products installations).

### Blocking filters updates check

To check the blocking filters updates AdGuard connects to its servers. When it happens, no information is being sent. The application periodically downloads a file with all filter versions and their available updates.

### Trial period request

When the trial period is requested by user, the following information is being sent to our server to activate the trial period:

* Application identifier;
* User’s email address (the activation instructions and other pre-reading materials will be sent to the specified email address);
* Application language;
* Build identifier.

### Sending a web page complaint

User can submit a report on a problem with a website right from the app. The app will automatically open reports.adguard.com web page and forward some information about its configuration. User can then alter or delete it.

Unless user agrees to submit this information by manually clicking the “Submit” button, none of this information will be saved or sent anywhere. In case they do, the report will become public (but anonymous) on [GitHub](https://github.com/adguardteam/adguardfilters/issues).

### Sending a message to support

Users can send messages to support right from the app, and an option to include a diagnostic report alongside it that contains some information about app and system configuration. No information will be sent anywhere unless the user confirms the submission. 

The following information is included in this report:

* Application identifier;
* Application version;
* Device name (which includes both device manufacturer name and device model name);
* Android version;
* Android kernel version;
* List of enabled filters;
* App configuration.

If the “Send system report” option is enabled, the program will also send additional information (for troubleshooting purposes):

* List of application threads and their stack traces;
* Log file contents;
* List of installed applications.

### When AdGuard crashes

Upon the first launch, users are asked whether they allow AdGuard to send automatic crash reports. If they do (and only if they do), the following information will be sent to our servers when the app crashes:

* Device name and model;
* OS version and kernel build;
* ROOT status;
* Unidentifyable Android ID;
* Amounts of total and free RAM;
* Screen orientation;
* Screen resolution and density;
* Application name and version.

This data is then used by our developers to investigate the crash and fix the potential problem.

### Browsing Security website check 

If “Phishing and malware protection” option is enabled, AdGuard checks every website before the user visits it. We use the Lookup API for this purpose, and the information about visited website is sent in form of hash prefixes. This doesn’t allow us to determine which website is being visited.

When browsing security is enabled, AdGuard periodically performs a latency check for the list of browsing security servers; no information is being sent in these requests, though.

### Browsing Security community

If the “Help us in Browsing Security development” option is enabled, the app will periodically send anonymous security-related data:

* URLs of visited websites that AdGuard identifies as potentially untrustworthy (access to them is blocked by the “Browsing Security” module);
* Information about the nature of identified threats.

The information described above, when collected by AdGuard for Android, is generally not correlated with any other personal information and is used anonymously in aggregation with similar information from other users of the AdGuard software for analytical purposes.
