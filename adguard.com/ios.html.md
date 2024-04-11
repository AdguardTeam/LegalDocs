
# AdGuard for iOS Privacy Notice

April 10, 2024

>**Keynote:** This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. The information we collect includes no more than is crucial to provide the full functionality of AdGuard products. We do not share or sell your personal information. We are strongly committed to protecting user privacy and being as transparent as possible.
Please note that AdGuard for iOS and AdGuard Pro are nearly identical in functionality and user data processing. However, AdGuard for iOS offers the possibility to log in with your AdGuard account, whereas AdGuard Pro does not. This is reflected in several points of this Privacy Notice.
If you are wondering why we have two almost identical apps, [check out this article](https://adguard.com/en/blog/updating-adguard-pro-for-ios.html).

## What data AdGuard for iOS and AdGuard Pro can collect and when

Here we describe all cases when and what data is sent to our server, so you can be sure that we only collect the minimum necessary for the application to work properly. The information we collect about you depends on how you interact with our application.

[Local VPN filtering](#local-vpn-filtering)

[Checking for filter updates](#checking-for-filter-updates)

[Leave feedback](#leave-feedback)

[Sending a web page complaint](#sending-a-web-page-complaint)

[Logging in to AdGuard account (only AdGuard for iOS)](#logging-in-to-adguard-account-only-adguard-for-ios)

[Logging out of AdGuard account (only AdGuard for iOS)](#logging-out-of-adguard-account-only-adguard-for-ios)

### Local VPN filtering

To implement DNS filtering, AdGuard creates a local VPN connection. This means that there is no remote connection to any server and this is only a technical means of filtering DNS traffic. When creating a local VPN connection, no personal and identifying information is collected or sent to our servers.

### Checking for filter updates

To check for filter updates, the app connects to its servers. When it happens, the following information is sent:

- App language
- App identifier

Filter updates are checked at user-defined intervals in accordance with the application’s settings. We do not store the obtained data, but we do aggregate update requests in order to determine the total number of active users.

### Leave feedback

Users can report bugs by clicking the “Send bug report” button in the app menu. When this happens, the following information is sent along with the message text and the entered email:

- App identifier
- App settings (language and enabled blocking filters)
- App and OS versions
- Device model

 If the “Attach application logs” option is enabled, the following information is sent along with the above information:

- Log file contents
- `.json` files containing rules for Safari

**Why do we need this information:** This information is used by our team to diagnose and troubleshoot the problem.

### Sending a web page complaint

The user can submit a report of a website problem directly from the app. The apps will automatically open the [reports.adguard.com](https://reports.adguard.com/new_issue.html) web page and forward some information about its configuration. The user can then alter or delete it.
Unless the user agrees to submit this information by manually clicking the “Submit” button, none of this information is stored or sent anywhere. If the user agrees, the report will become public (but anonymous) on [GitHub](https://github.com/adguardteam/adguardfilters/issues).

### Logging in to AdGuard account (only AdGuard for iOS)

AdGuard for iOS users can use this option to activate features of the full version of the app. When you log in to AdGuard account via the app, the following information is sent:

- Entered login/password pair or license key
- App identifier
- App version
- Device type (iPhone X, iPad Pro, etc.)

**Why we need this information:** To confirm the fact of the user's login and to verify the user’s license. The login and app activation details are also displayed in the AdGuard account.

### Logging out of AdGuard account (only AdGuard for iOS)

The following information is sent to our servers when you log out of your account via the app:

- App identifier
- App version
