# AdGuard for Windows Privacy Notice
*November 06, 2019*
> **Keynote:** We do not share or sell any of your personal data. We are proud to say that we are one of the fighters for users privacy and we are strongly committed to this principle and to being as transparent as possible.

This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. The information we collect includes no more than is crucial to provide the full functionality of AdGuard products.

We believe that privacy is a fundamental human right. That's why we are transparent about what AdGuard does and explain the purpose of every little bit of information that is gathered by our apps.

## What data can AdGuard for Windows collect and when

* [License status check](#license-status-check)
* [License reset](#license-reset)
* [Trial period activation](#trial-period-activation)
* [Program updates check](#app-update-check)
* [Blocking filters updates check](#filters-updates-check)
* [Checking for available notifications](#notification-check)
* [Program crash](#app-crash)
* [Installer crash](#installer-crash)
* [Program uninstall](#app-uninstall)
* [Sending a web page complaint](#web-page-complaint)
* [Sending a message to support](#support-message)
* [Browsing Security website check](#browsing-security-check)
* [Browsing Security community](#browsing-security-community)
* [Parental Control website heck](#parental-control-check)

### <a id="license-status-check"></a> License status check

To validate the license status AdGuard connects to its servers. When it happens, the following information is being sent:

* PC’s name;
* MAC address MD5 hash;
* Computer hardware ID hash;
* OS language;
* Application identifier;
* Application version;
* License key;
* Application language;
* Build identifier;
* Flag indicating if you take part in the Browsing Security module development.

We use this data to check the license status. MAC and hardware ID hashes are also used to bind the license to the computer. This information is also used to display the user’s license keys in adguard.com personal account.

### <a id="license-reset"></a> License reset

The license is reset upon user request. When it happens, the following information is being transmitted:

* Application ID

### <a id="trial-period-activation"></a> Trial period activation

When a user activates the trial period, the following information is being sent to our server:

* Application ID;
* Partial settings configuration.

### <a id="app-update-check"></a> Program updates check

AdGuard connects to its servers to check application updates. When it happens, the following information is being sent:

* Application ID;
* Update channel;
* Application name;
* Application version;
* Application language;
* Automatic update flag;
* OS version;

Program updates check is performed periodically or when prompted by user. We do not store and use this data in future.

### <a id="filters-updates-check"></a> Blocking filters updates check

AdGuard connects to its servers to check ad blocker filters updates. When it happens, nothing is being sent to our server. The program periodically downloads a file with all filters versions and their available updates.

### <a id="notification-check"></a> Checking for available notifications

The check for available notifications is performed upon user request. When it happens, the next information is being sent:

* Application Identifier

### <a id="app-crash"></a> Program crash

If AdGuard crashes, it creates an automatic crash report. Upon the next launch AdGuard will ask you to send it to us. In this report, the following information is being sent:

* Stack trace;
* Memory minidump (only in case of a crash in the native code);
* Computer's name;
* AdGuard version;
* AdGuard settings;
* Application Identifier;
* Active Windows user name;
* .NET Framework version;
* List of active processes.

### <a id="installer-crash"></a> Installer crash

If AdGuard crashes during the installation process, it creates an automatic crash report and asks you to send it to us. If you agree, the following information will be sent:

* Stack trace;
* Computer's name;
* AdGuard version;
* List of active processes;
* .NET version;
* Application identifier;
* Active Windows user name;
* Installer logs.

### <a id="app-uninstall"></a> Program uninstall

After the program is uninstalled, the following information is being sent:

* Application Identifier

### <a id="web-page-complaint"></a> Sending a web page complaint

User can submit a report on a problem with a website right from the app. The app will automatically open reports.adguard.com web page and forward some information about its configuration. User can then alter or delete it.

Unless user agrees to submit this information by manually clicking the “Submit” button, none of this information will be saved or sent anywhere. In case they do, the report will become public (but anonymous) on [GitHub](https://github.com/adguardteam/adguardfilters/issues).

### <a id="support-message"></a> Sending a message to support

Users can send messages to support right from the app. If they do, a special file containing some information about app settings and OS configuration will be sent. This data is often required for troubleshooting purposes. User also has an option to include a diagnostic report that contains additional information. Nothing will be sent unless the user manually confirms the submission.

The following information is included in the support message:

* Application identifier;
* Application version;
* Application language;
* OS version;
* Version of Microsoft .NET Framework installed on the computer;
* The list of enabled filters;
* License key.

If the “Send system report” option is enabled, the program will also send additional data for troubleshooting purposes:

* List of active processes;
* Contents of AdGuard log file that includes the list of errors that occured since the last launch of the program.

### <a id="browsing-security-check"></a> Browsing Security website check

If "Phishing and malware protection" option is enabled, AdGuard checks every website before the user visits it. We use the Lookup API for this purpose, and the information about visited website is sent in form of hash prefixes. This doesn’t allow us to determine which website is being visited.

When browsing security is enabled, AdGuard periodically performs a latency check for the list of browsing security servers; no information is being sent in these requests, though.

### <a id="browsing-security-community"></a> Browsing Security community

If user enables the “Take part in the development of a browsing security option”, the program will periodically send anonymous security-related data:

* URLs of visited websites that AdGuard identifies as potentially untrustworthy, along with the information about the nature of the identified threats;.
* Additional statistical information about threats discovered by AdGuard software.

The information described above, when collected by AdGuard for Windows, is generally not correlated with any other personal information related to the user, and is used anonymously in aggregation with similar information from other users of the AdGuard software for analytical purposes.

### <a id="parental-control-check"></a> Parental Control website check

When Parental Control is enabled, AdGuard uses its own web service to check websites against the database. Every time the user is about to visit the website, a request that contains this website’s domain name is sent to this web service. This information is not stored anywhere and is not used in any way other than to tell if the website is included in the Parental Control blacklist.