# AdGuard Home Privacy Notice
*April 03, 2019*
> **Keynote:** We do not share or sell any of your personal data. We are proud to say that we are one of the fighters for users privacy and we are strongly committed to this principle and to being as transparent as possible.

Our privacy policy lists the information that is collected and the processing applied to it. All the info collected includes no more than is crucial to provide full functionality of AdGuard products, and is never shared with any third parties. We do not collect anything for tracking purposes and take all necessary technical, administrative and physical measures to protect the information we get.

Please read our privacy policy to learn what information is being sent to us during the use of AdGuard Home and how we store and use it afterwards.

## What data is collected and sent by AdGuard Home

### Update check

AdGuard Home periodically downloads a [.json file](https://github.com/AdguardTeam/AdGuardHome/blob/master/version.json) to check if there's a newer version. No information is being sent when that happens.

### AdGuard filters update check

AdGuard Home connects to AdGuard servers to check updates for filters developed by AdGuard. When it happens, nothing is being sent to the servers. AdGuard Home periodically downloads a file with all filters versions and their available updates.

### When user configures AdGuard Home to use one of the AdGuard DNS servers:

Whenever user tries to visit a web page, AdGuard DNS server receives the following information:

* User’s IP-address;
* DNS requests that contain domain names. 

These DNS requests are forwarded to a root or authoritative DNS server, but for the upstream server it looks as if these requests originate from AdGuard DNS server, there is absolutely no way for them to identify the original user. We, in our turn, do not log or save any of this information.

### When user configures AdGuard Home to use Browsing Security (disabled by default):

For each requested domain, AdGuard Home connects to the Browsing Security server and passes an 8-character prefix of the domain name's SHA256 hash. The server responds with a list of full hashes and AdGuard Home checks if there's a match. The sent prefixes are not being stored and do not reveal any personal information.

### When user configures AdGuard Home to use Parental Control (disabled by default):

For each requested domain, AdGuard Home connects to the Parental Control web service and passes an 8-character prefix of the domain name's SHA256 hash. The service responds with a list of full hashes and AdGuard Home checks if there's a match. The sent prefixes are not being stored and do not reveal any personal information.