# AdGuard Home Privacy Notice
*October 16, 2019*
> **Keynote:** We do not share or sell any of your personal data. We are proud to say that we are one of the fighters for users privacy and we are strongly committed to this principle and to being as transparent as possible.

This Privacy Notice lists all the information that can be collected by us and explains how we use it and why we need it. All the info collected includes no more than is crucial to provide the full functionality of AdGuard products.

We believe that privacy is a fundamental human right. That's why we are transparent about what AdGuard does and explain the purpose of every little bit of information that can be collected by our apps.

## What data can be sent by AdGuard Home

### Processing DNS queries

AdGuard Home connects to the DNS servers configured as "Upstreams", and sends DNS queries to them.

### Update check

AdGuard Home periodically downloads a [.json file](https://github.com/AdguardTeam/AdGuardHome/blob/master/version.json) to check if there's a newer version. No information is being sent when that happens.

### Filters update check

To check updates for enabled filters, AdGuard Home connects to their respective servers. When it happens, nothing is being sent to these servers. AdGuard Home periodically downloads a file with all filters' versions and their available updates.

### When user configures AdGuard Home to use Browsing Security (disabled by default):

For each requested domain, AdGuard Home connects to the Browsing Security server and passes an 8-character prefix of the domain name's SHA256 hash. The server responds with a list of full hashes and AdGuard Home checks if there's a match. The sent prefixes are not being stored and do not reveal any personal information.

### When user configures AdGuard Home to use Parental Control (disabled by default):

For each requested domain, AdGuard Home connects to the Parental Control web service and passes an 8-character prefix of the domain name's SHA256 hash. The service responds with a list of full hashes and AdGuard Home checks if there's a match. The sent prefixes are not being stored and do not reveal any personal information.