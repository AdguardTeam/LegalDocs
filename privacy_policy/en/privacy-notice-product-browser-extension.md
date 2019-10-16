# AdGuard Browser Extensions Privacy Notice
*October 16, 2019*

> **Keynote:** We do not share or sell any of your personal data. We are proud to say that we are one of the fighters for users privacy and we are strongly committed to this principle and to being as transparent as possible.

This Privacy Notice lists all the information that can be collected by us and explains how we use it and why we need it. All the info collected includes no more than is crucial to provide the full functionality of AdGuard products.

We believe that privacy is a fundamental human right. That's why we are transparent about what AdGuard does and explain the purpose of every little bit of information that can be collected by our apps.

## What data is collected and sent by AdGuard Browser Extension

### Blocking filters updates check

To check filter updates AdGuard connects to its servers. When it happens, the following information is being sent:

* Browser type;
* Browser language;
* Extension ID (a random number generated on extension installation);
* Browser extension version;
* Extension build type.

Check for filters updates is performed once a day. We aggregate the data obtained this way in order to identify the number of active users.


### Statistics for ad filters usage

The “Send statistics for ad filters usage” option is **disabled by default**. Nothing will be sent unless user manually enables it to help us improve our blocking filters. [This Knowledge base article](https://kb.adguard.com/general/filter-rules-statistics) explains how enabling this option helps us.

If user enables the “Send statistics for ad filters usage” option, the following information is sent periodically:

* Browser extension version;
* Browser type;
* List of enabled filters;
* The list that consists of the following elements:
  * The visited domain name of the website,
  * The number of recent page views,
  * The list of filtering rules and filter IDs which were activated on this website,
  * The domain name of blocked requests is sent for URL rules. The list is created based on the website’s visit statistics since the last time statistical data was sent.
 
By gathering statistics on used filtering rules, we can detect and remove the rules that are no longer used. As a result, it will help all those who use AdGuard.


### Sending a web page complaint

User can submit a report on a problem with a website right from the app. The app will automatically open reports.adguard.com web page and forward some information about its configuration. User can then alter or delete it.

Unless user agrees to submit this information by manually clicking the “Submit” button, none of this information will be saved or sent anywhere. In case they do, the report will become public (but anonymous) on [GitHub](https://github.com/adguardteam/adguardfilters/issues).
 
### Browsing Security website check

If user enables “Phishing and malware protection” option, AdGuard extension checks every website before user visits it. We use the Lookup API technology for this purpose, and the information about the visited website is sent in form of hash prefixes. This doesn’t allow us to determine which website is being visited.

### Browsing Security community

If user enables the “Help us in Browsing security filters development” option, the program will periodically send anonymous security-related data:

* URLs of visited websites that AdGuard identifies as potentially untrustworthy, along with information about the nature of detected threats;
* Browser language;
* Additional statistical information about the threats detected by AdGuard software.

The information described above, when collected by the AdGuard browser extension, is generally not correlated with any other personal information related to user and is used anonymously in aggregation with similar information from other users of the AdGuard software for analytical purposes.
