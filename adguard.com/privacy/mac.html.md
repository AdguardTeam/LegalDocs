
# AdGuard for Mac Privacy Notice

April 10, 2024

> **Keynote:** This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. We only collect essential information for AdGuard products to function fully and properly. We do not share or sell your personal information. We are strongly committed to protecting user privacy and being as transparent as possible.

## What data AdGuard for Mac can collect and when

Here we describe all cases when and what data is sent to our server, so you can be sure that we only collect the minimum necessary for the application to work properly. The information we collect about you depends on how you interact with our application.

[User authorization](#user-authorization)

[License status check](#license-status-check)

[License reset](#license-reset)

[Checking for program updates](#checking-for-program-updates)

[Checking for filter updates](#checking-for-filter-updates)

[Trial period activation](#trial-period-activation)

[Sending a web page complaint](#sending-a-web-page-complaint)

[Sending a message to support](#sending-a-message-to-support)

[App crash report](#app-crash-report)

[App uninstall](#app-uninstall)

[Browsing security website check](#browsing-security-website-check)

[Help us with Browsing security filters development](#help-us-with-browsing-security-filters-development)

### User authorization

Users have the option to activate the license by logging into their personal account in the app. The following information is sent to our servers:

- Login (email address)
- Password

Upon authorization, the app receives an active license for that account from the server.

### License status check

To validate the license status, AdGuard connects to its servers. When it happens, the following information is sent:

- Computer name

- MAC address hash

- Hardware ID hash

- OS language

- App identifier

- App version

- License key

- Build identifier

**Why we need this information:** We use this information to check the license status and display the user’s license keys in the AdGuard account. MAC and hardware ID hashes are also used to tie the license to the computer.

### License reset

The license is reset upon user request. When it happens, the app identifier is sent.

**Why we need this information:** In order to know which app to do the license reset for.

### Checking for program updates

To check for app updates, AdGuard connects to its servers. When it happens, the following information is sent:

- App identifier

- Update channel

- App name

- App version

- App language

- Automatic update flag

- OS version

**Why we need this information:** This data is sent to our servers in order to return a correct response about what updates are available for the current version of the application.

Updates checks are performed periodically or when prompted by the user. We do not store and use this data in future

### Checking for filter updates

To check for filter updates, AdGuard connects to its servers. When it happens, nothing is being sent to our server. The application periodically downloads a file with all filter versions and their available updates.

### Trial period activation

When a user activates the trial period, the following information is sent to our server:

- Computer name

- MAC address hash

- Hardware ID hash

- OS language

- App identifier

- App version

- Build identifier

**Why we need this information:** To keep track of when the app’s trial period expires.

### Sending a web page complaint

The user can submit a report of a website problem directly from the app. The app will automatically open the [reports.adguard.com](https://reports.adguard.com/new_issue.html) web page and forward some information about its configuration. The user can then alter or delete it.
Unless the user agrees to submit this information by manually clicking the “Submit” button, none of this information is stored or sent anywhere. If the user agrees, the report will become public (but anonymous) on [GitHub](https://github.com/adguardteam/adguardfilters/issues).

### Sending a message to support

Users can send messages to support right from the app. If they do, a special file containing some information about app settings and OS configuration will be sent. This data is often required to solve potential problems with the AdGuard app. Users also have an option to include a diagnostic report that contains additional information. Nothing will be sent unless the user manually confirms the submission.
The following information is included in this report:

- App identifier

- App version

- OS language

- OS version

- App settings

**Why we need this information:** This information is used by the support team to understand whether they are dealing with a paid version user or not, and to perform minimal diagnostics.

If the “Include a diagnostic report” option is enabled, the app will also send the contents of the AdGuard log file, which includes various app’s messages (errors, warnings). This more detailed information is used by the support team to help solve more complicated problems.

### App crash report

In case of a malfunction that leads to an unexpected app crash, the user is prompted to send a special crash report. The report will only be sent if the user has previously agreed to send crash reports. We will receive the following information:

- App identifier

- Device hardware hash

- Device model, its memory size and disk space

- App version

- OS and Kernel versions

- Stack trace

- List of components used by the app and their versions

- OS’s last boot timestamp

- App’s last boot timestamp

**Why we need this information:** To troubleshoot critical issues.  It keeps us aware of new problems not reported by users.
Crash report data is stored only on our servers. We do not use any third party services to collect and store crash reports. All crash reports are stored for 30 days.

### App uninstall

After AdGuard for Mac is uninstalled, the app identifier is sent.

**Why we need this information:** We need to know that the app has been uninstalled. We use the received app ID when checking the license: for example, we do not count deleted programs when counting the number of programs activated with the license key.

### Browsing security website check

If the “Phishing and malware protection” option is enabled, AdGuard checks every website before the user visits it. We use the [Lookup API](https://adguard.com/kb/general/browsing-security/) for this purpose, and the information about visited websites is sent in the form of hash prefixes. This doesn’t allow us to determine which website is being visited.

### Help us with Browsing security filters development

If the “Help us with Browsing security filters development” option is enabled, the app will periodically send anonymous security-related data:

- URLs of visited websites that AdGuard identifies as potentially untrustworthy (access to them is blocked by the “Security” module)

- Information about the nature of identified threats

The information described above, when collected by AdGuard for Mac, is generally not correlated with any other personal information and is used anonymously in aggregation with similar information from other users of the AdGuard software for analytical purposes.
