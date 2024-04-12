
# AdGuard Browser Extension Privacy Notice

April 10, 2024

This Privacy Notice lists all the information that we, Adguard Software Ltd. (“we”, “us”, or “our”), may collect when you use AdGuard Browser Extension and explains why we do it and how we use this information.

>**Keynote:** This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. We only collect essential information for AdGuard products to function fully and properly. We do not share or sell your personal information. We are strongly committed to protecting user privacy and being as transparent as possible.

## What data AdGuard Browser Extension can collect and when

Here we describe all cases when and what data is sent to our server, so you can be sure that we only collect the minimum necessary for the application to work properly. The information we collect about you depends on how you interact with our application.

[Checking for filter updates](#checking-for-filter-updates)

[Help with the development of AdGuard filters](#​​help-with-the-development-of-adguard-filters)

[Sending a web page complaint](#sending-a-web-page-complaint)

[Browsing Security website check](#browsing-security-website-check)

### Checking for filter updates

To check for filter updates, AdGuard connects to its servers. When it happens, the following information is sent:

- Browser language

- App identifier

- Extension version

Filter updates are checked at user-defined intervals in accordance with the application’s settings. We do not store this data, but we do aggregate it in an anonymous form to count the total number of active users.

### ​​Help with the development of AdGuard filters

The “Help with the development of AdGuard filters” option is **disabled by default**. Nothing will be sent unless the user manually enables it to help us improve our blocking filters. [This Knowledge base article](https://adguard.com/kb/general/ad-filtering/tracking-filter-statistics/) explains how enabling this option helps us.

If the “Send statistics for ad filters usage” option is enabled, the following information is sent periodically:

- Filter list ID

- Rule text

- How many times the rule was triggered

**Why do we need this information:** We automatically optimize filters and remove rules that are rarely used. To do this, we collect information about which rules are triggered.

### Sending a web page complaint

The user can submit a report of a website problem directly from the extension. The extension will automatically open the [reports.adguard.com](https://reports.adguard.com/new_issue.html) web page and forward some information about its configuration. The user can then alter or delete it.
Unless the user agrees to submit this information by manually clicking the “Submit” button, none of this information is stored or sent anywhere. If the user agrees, the report will become public (but anonymous) on [GitHub](https://github.com/adguardteam/adguardfilters/issues).

### Browsing Security website check

If the “Phishing and malware protection” option is enabled, AdGuard checks every website before the user visits it. We use the [Lookup API](https://adguard.com/kb/general/browsing-security/) for this purpose, and the information about visited websites is sent in the form of hash prefixes. This doesn’t allow us to determine which website is being visited.
