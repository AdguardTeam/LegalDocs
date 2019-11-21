# AdGuard for Mac Privacy Notice
*November 06, 2019*

> **Keynote:** We do not share or sell any of your personal data. We are proud to say that we are one of the fighters for users privacy and we are strongly committed to this principle and to being as transparent as possible.

This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. The information we collect includes no more than is crucial to provide the full functionality of AdGuard products.

We believe that privacy is a fundamental human right. That's why we are transparent about what AdGuard does and explain the purpose of every little bit of information that is gathered by our apps.

## What data can AdGuard for Mac collect and when

* [License status check](#license-status-check)
* [License reset](#license-reset)
* [Blocking filters updates check](#filters-updates-check)
* [Trial period activation](#trial-period-activation)
* [Sending a web page complaint](#web-page-complaint)
* [Sending a message to support](#support-message)
* [App crash](#app-crash)
* [Browsing Security website check](#browsing-security-check)
* [Browsing Security community](#browsing-security-community)

### <a id="license-status-check"></a> License status check

To validate the license status AdGuard connects to its servers. When it happens, the following information is being sent:

* Computer name;
* MAC address hash;
* Hardware ID hash;
* OS language;
* Application identifier;
* Application version;
* License key;
* Build identifier. 

We use this data to check the license status. MAC and hardware ID hashes are also used to bind the license to the computer. This information is also used to display the user’s license keys in adguard.com personal account.

### <a id="license-reset"></a> License reset

The license is reset upon user request. When it happens, the following information is being transmitted:

* Application identifier.

### <a id="filters-updates-check"></a> Blocking filters updates check

To check ad blocker filters updates AdGuard connects to its servers. When it happens, nothing is being sent to our server. The application periodically downloads a file with all filters versions and their available updates.

### <a id="trial-period-activation"></a> Trial period activation

When a user activates the trial period, the following information is being sent to our server:

* Computer name;
* MAC address hash;
* Hardware ID hash;
* OS language;
* Application identifier;
* Application version;
* Build identifier.

### <a id="web-page-complaint"></a> Sending a web page complaint

User can submit a report on a problem with a website right from the app. The app will automatically open reports.adguard.com web page and forward some information about its configuration. User can then alter or delete it.

Unless user agrees to submit this information by manually clicking the “Submit” button, none of this information will be saved or sent anywhere. In case they do, the report will become public (but anonymous) on [GitHub](https://github.com/adguardteam/adguardfilters/issues).

### <a id="support-message"></a> Sending a message to support

Users can send messages to support right from the app. If they do, a special file containing some information about app settings and OS configuration will be sent. This data is often required to solve potential problems with AdGuard app. User also has an option to include a diagnostic report that contains additional information. Nothing will be sent unless the user manually confirms the submission. 

The following information is included in this report:

* Application identifier;
* Application version;
* OS language;
* OS version;
* Application network settings;
* List of enabled filters.

If the "Include a diagnostic report" option is enabled, the app will also send the contents of the AdGuard log file, which includes various app’s messages (errors, warnings). This information is used for troubleshooting purposes.

### <a id="app-crash"></a> App crash

In case of a malfunction that leads to an unexpected app crash, the user is prompted to send a special crash report. If they agree, we receive following information:

* Application ID;
* Device hardware hash;
* Device model, its memory size and disk space;
* Application version;
* OS and Kernel versions;
* Stack trace;
* List of components used by the application and their versions;
* OS's last boot timestamp;
* Application's last boot timestamp.

This information is used for further diagnostics and elimination of the problem.

### <a id="browsing-security-check"></a> Browsing security website check

If “Phishing and malware protection” option is enabled, AdGuard checks every website before the user visits it. We use the Lookup API for this purpose, and the information about visited website is sent in form of hash prefixes. This doesn’t allow us to determine which website is being visited.

### <a id="browsing-security-community"></a> Browsing Security community

If the "Help us in Browsing Security development" option is enabled, the app will periodically send anonymous security-related data:

* URLs of visited websites that AdGuard identifies as potentially untrustworthy (access to them is blocked by the "Browsing Security" module);
* Information about the nature of identified threats.

The information described above, when collected by AdGuard for Mac, is generally not correlated with any other personal information and is used anonymously in aggregation with similar information from other users of the AdGuard software for analytical purposes.