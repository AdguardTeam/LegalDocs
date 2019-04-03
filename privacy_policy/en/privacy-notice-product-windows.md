# AdGuard for Windows Privacy Notice
*April 03, 2019*
> **Keynote:** We do not share or sell any of your personal data. We are proud to say that we are one of the fighters for users privacy and we are strongly committed to this principle and to being as transparent as possible.

Our privacy policy lists the information that is collected and the processing applied to it. All the info collected includes no more than is crucial to provide full functionality of AdGuard products, and is never shared with any third parties. We do not collect anything for tracking purposes and take all necessary technical, administrative and physical measures to protect the information we get.

Please read our privacy policy to learn what information is being sent to us during the use of AdGuard for Windows and how we store and use it afterwards.

## What data is collected and sent by AdGuard for Windows

### License status check

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

### License reset

The license is reset upon user request. When it happens, the following information is being transmitted:

* Application identifier

### Program updates check

AdGuard connects to its servers to check application updates. When it happens, the following information is being sent:

* Application ID;
* Update channel;
* Application name;
* Application version;
* Application language;
* Automatic update flag;
* OS version;

Program updates check is performed periodically or when prompted by user. We do not store and use this data in future.

### Filters updates check

AdGuard connects to its servers to check ad blocker filters updates. When it happens, nothing  is being sent to our server. The program periodically downloads a file with all filters versions and their available updates.

### Checking for available notifications

The check for available notifications is performed upon user request. When it happens, the next information is being sent:

* Application Identifier

### After the program crashes

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

### After program uninstall

After the program is uninstalled, the following information is being sent:

* Application Identifier

### Sending a web page complaint

User can submit a report on a problem with a website right from the app. The app will automatically open reports.adguard.com web page and forward some information about its configuration. User can then alter or delete it.

Unless user agrees to submit this information by manually clicking the “Submit” button, none of this information will be saved or sent anywhere. In case they do, the report will become public (but anonymous) on [GitHub](https://github.com/adguardteam/adguardfilters/issues).

### Sending a message to support

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

### Browsing Security database updates check

AdGuard uses [Safebrowsing Protocol v2](https://developers.google.com/safe-browsing/) to check browsing security local database updates. The Safebrowsing Protocol v2 is very privacy friendly, and it is used to exchange data only with AdGuard servers using hashed URLs so the server never knows the actual URLs queried by the clients. 

In case the domain is present in the local safebrowsing database, it is additionally checked against another database located on our server. Information about the domain is also sent in hashed form, so we don’t know the specific URL.

### Parental Control

When Parental Control is enabled, AdGuard uses its own web service to check websites against the database. Every time the user is about to visit the website, a request that contains this website’s domain name is sent to this web service. This information is not stored anywhere and is not used in any way other than to tell if the website is included in the Parental Control blacklist.

### Browsing Security community

If user enables the “Take part in the development of a browsing security option”, the program will periodically send anonymous security-related data:

* URLs of visited websites that AdGuard identifies as potentially untrustworthy, along with the information about the nature of the identified threats;.
* Additional statistical information about threats discovered by AdGuard software.

The information described above, when collected by AdGuard for Windows, is generally not correlated with any other personal information related to the user, and is used anonymously in aggregation with similar information from other users of the AdGuard software for analytical purposes.
