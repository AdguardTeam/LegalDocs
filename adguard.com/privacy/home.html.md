
# AdGuard Home Privacy Notice

*February 10, 2025*

---

**Keynote:** This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. We only collect essential information for AdGuard products to function fully and properly. We do not share or sell your personal information. We are strongly committed to protecting user privacy and being as transparent as possible.

---

This Privacy Notice supplements the AdGuard Privacy Policy available at [adguard.com/privacy.html](https://adguard.com/privacy.html), which provides you with the necessary information regarding terms and conditions of data processing by AdGuard.

## What data AdGuard Home can collect and when

AdGuard Home logs and DNS query logs that it processes are stored on the device where AdGuard Home is running. They and their retention are managed by the user.

AdGuard Home itself does not send anything to us and all cases when it connects to any servers are related to its functionality. These cases are described below.

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
