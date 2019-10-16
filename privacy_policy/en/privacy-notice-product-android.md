# AdGuard for Android Privacy Notice
*October 16,2018*
> **Keynote:** We do not share or sell any of your personal data. We are proud to say that we are one of the fighters for users privacy and we are strongly committed to this principle and to being as transparent as possible.

This Privacy Notice lists all the information that can be collected by us and explains how we use it and why we need it. All the info collected includes no more than is crucial to provide the full functionality of AdGuard products.

We believe that privacy is a fundamental human right. That's why we are transparent about what AdGuard does and explain the purpose of every little bit of information that can be collected by our apps.

## When and what data can AdGuard for Android collect

* [License status check](#license-status-check)
* [License reset](#license-reset)
* [Trial period request](#trial-period-request)
* [App updates check](#app-update-check)
* [Blocking filters updates check](#filters-update-check)
* [Sending a web page complaint](#web-page-complaint)
* [Sending a message to support](#support-message)
* [Automatic crash reporting](#automatic-crash-reporting)
* [Technical and interaction data](#technical-and-interaction-data)
* [Browsing Security website check](#browsing-security-check)
* [Browsing Security community](#browsing-security-community)

### <a id="license-status-check"></a> License status check

To validate the license status AdGuard connects to its servers. When it happens, the following information is being sent:

* Application identifier;
* Application version;
* Device name (used in personal account so that the user can see the list of devices activated with their license keys);
* License key;
* Application language;
* Build identifier;

We use this data to check the license status and bind the license to the device. This information is also used to display the user’s license keys in adguard.com personal account.

Users may also use adguard.com credentials (login and password) to activate the app's premium functionality. In this case, the app will also send this login and password pair to the server in order to authenticate the user.

### <a id="license-reset"></a> License reset

The license is reset upon user request. When it happens, the following information is being transmitted:

* Application identifier

### <a id="trial-period-request"></a> Trial period request

When the trial period is requested by user, the following information is being sent to our server to activate the trial period:

* Application identifier;
* User’s email address (the activation instructions and other pre-reading materials will be sent to the specified email address);
* Application language;
* Build identifier.

### <a id="app-update-check"></a> App updates check

To check for application updates AdGuard connects to its servers. When it happens, the following information is being sent:

* Application identifier;
* Application version;
* Application language;
* Update channel.

Update checks are performed periodically. We do not store or use this data in future (but we aggregate it in anonymous form to count the total number of AdGuard products installations).

### <a id="filters-update-check"></a> Blocking filters updates check

To check the blocking filters updates AdGuard connects to its servers. When it happens, no information is being sent. The application periodically downloads a file with all filter versions and their available updates.

### <a id="web-page-complaint"></a> Sending a web page complaint

User can submit a report on a problem with a website right from the app. The app will automatically open reports.adguard.com web page and forward some information about its configuration. User can then alter or delete it.

Unless user agrees to submit this information by manually clicking the “Submit” button, none of this information will be saved or sent anywhere. In case they do, the report will become public (but anonymous) on [GitHub](https://github.com/adguardteam/adguardfilters/issues).

### <a id="support-message"></a> Sending a message to support

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

### <a id="automatic-crash-reporting"></a> Automatic crash reporting

Upon the first launch, users are asked whether they allow AdGuard to send automatic crash reports. If they do (and only if they do), the following information will be sent to our servers when the app crashes:

* Device name and model;
* OS version and kernel build;
* ROOT status;
* Unidentifyable Android ID;
* Amounts of total and free RAM;
* Screen orientation;
* Screen resolution and density;
* Application name and version;
* Information related to the crash (error message and stack trace);
* The last lines of the log file.

This data is then used by our developers to investigate the crash and fix the potential problem.

### <a id="technical-and-interaction-data"></a> Technical and interaction data

Upon the first launch, users are asked whether they allow AdGuard to send technical and interaction data to AdGuard. If they do (and only if they do), the following information will be sent:

* Synthetic telemetry ID (random string generated on the app install)
* App configuration (enabled modules, activation status)
* Device information (type, screen size, language, Android version)
* Names of the screens viewed inside the app
* When the data is sent to AdGuard, your IP address may be temporarily collected as part of our server logs.

This data will be used only internally and will not be shared with third parties.

Here is how we use this information:

* Finding out which functionality is used the most
* Finding issues that one may face while using the app
* Finding and fixing mistakes in the UI/UX
* Learning what people like or not like about our app

### <a id="browsing-security-check"></a> Browsing Security website check 

If “Phishing and malware protection” option is enabled, AdGuard checks every website before the user visits it. We use the Lookup API for this purpose, and the information about visited website is sent in form of hash prefixes. This doesn’t allow us to determine which website is being visited.

When browsing security is enabled, AdGuard periodically performs a latency check for the list of browsing security servers; no information is being sent in these requests, though.

### <a id="browsing-security-community"></a> Browsing Security community

If the “Help us in Browsing Security development” option is enabled, the app will periodically send anonymous security-related data:

* URLs of visited websites that AdGuard identifies as potentially untrustworthy (access to them is blocked by the “Browsing Security” module);
* Information about the nature of identified threats.

The information described above, when collected by AdGuard for Android, is generally not correlated with any other personal information and is used anonymously in aggregation with similar information from other users of the AdGuard software for analytical purposes.
