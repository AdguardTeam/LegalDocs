
# AdGuard Home Privacy Notice

*April 10, 2024*

> **Keynote:** This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. We only collect essential information for AdGuard products to function fully and properly. We do not share or sell your personal information. We are strongly committed to protecting user privacy and being as transparent as possible.

## What data AdGuard Home can collect and when

[Processing DNS queries](#processing-dns-queries)

[Checking for updates](#checking-for-updates)

[Checking for filter updates](#checking-for-filter-updates)

[Browsing Security domain check](#browsing-security-domain-check-disabled-by-default)

[Parental Control domain check](#parental-control-domain-check-disabled-by-default)

### Processing DNS queries

AdGuard Home connects to the DNS servers configured as “Upstreams” and sends DNS queries to them.

### Checking for updates

AdGuard Home periodically downloads a .json file to check if there’s a newer version. No information is sent when this happens.

### Checking for filter updates

To check for updates for enabled filters, AdGuard Home connects to their respective servers. When this happens, nothing is sent to these servers. AdGuard Home periodically downloads a file containing all filter versions and their available updates.

### Browsing Security domain check (disabled by default)

For each requested domain, AdGuard Home connects to the Browsing Security server and passes a 4-character prefix of the domain name’s SHA256 hash. The server responds with a list of full hashes and AdGuard Home checks if there’s a match. The sent prefixes are not stored and do not reveal any personal information.

### Parental Control domain check (disabled by default)

For each requested domain, AdGuard Home connects to the Parental Control web service and passes a 4-character prefix of the domain name’s SHA256 hash. The service responds with a list of full hashes and AdGuard Home checks if there’s a match. The sent prefixes are not stored and do not reveal any personal information.
