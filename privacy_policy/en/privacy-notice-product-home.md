# AdGuard Home Privacy Notice
*November 06, 2019*

> **Keynote:** We do not share or sell any of your personal data. We are proud to say that we are one of the fighters for users privacy and we are strongly committed to this principle and to being as transparent as possible.

This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. The information we collect includes no more than is crucial to provide the full functionality of AdGuard products.

We believe that privacy is a fundamental human right. That's why we are transparent about what AdGuard does and explain the purpose of every little bit of information that is gathered by our apps.

## What data can AdGuard Home collect and when

* [Processing DNS queries](#dns-queries)
* [Update check](#update-check)
* [Filters update check](#filters-updates-check)
* [Browsing Security domain check](#browsing-security-check)
* [Parental Control domain check](#parental-control-check)

### <a id="dns-queries"></a> Processing DNS queries

AdGuard Home connects to the DNS servers configured as "Upstreams", and sends DNS queries to them.

### <a id="update-check"></a> Update check

AdGuard Home periodically downloads a [.json file](https://static.adtidy.org/adguardhome/release/version.json) to check if there's a newer version. No information is being sent when that happens.

### <a id="filters-updates-check"></a> Filters update check

To check updates for enabled filters, AdGuard Home connects to their respective servers. When it happens, nothing is being sent to these servers. AdGuard Home periodically downloads a file with all filters' versions and their available updates.

### <a id="browsing-security-check"></a> Browsing Security domain check (disabled by default):

For each requested domain, AdGuard Home connects to the Browsing Security server and passes an 4-character prefix of the domain name's SHA256 hash. The server responds with a list of full hashes and AdGuard Home checks if there's a match. The sent prefixes are not being stored and do not reveal any personal information.

### <a id="parental-control-check"></a> Parental Control domain check (disabled by default):

For each requested domain, AdGuard Home connects to the Parental Control web service and passes an 4-character prefix of the domain name's SHA256 hash. The service responds with a list of full hashes and AdGuard Home checks if there's a match. The sent prefixes are not being stored and do not reveal any personal information.