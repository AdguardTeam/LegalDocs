
# AdGuard DNS for iOS Privacy Notice

*November 13, 2026*

---

**Keynote:** This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. We only collect essential information for AdGuard products to function fully and properly. We do not share or sell your personal information. We are strongly committed to protecting user privacy and being as transparent as possible.

---

This Privacy Notice supplements the AdGuard DNS Privacy Policy available at [adguard-dns.io/privacy.html](https://adguard-dns.io/privacy.html), which provides you with the necessary information regarding terms and conditions of data processing by AdGuard.

## What data AdGuard DNS for iOS can collect and when

Here we describe all cases when and what data is sent to our server, so you can be sure that we only collect the minimum necessary for the application to work properly. The information we collect about you depends on how you interact with our application.

### EULA screen

When you first launch the app, you are presented with the End User License Agreement (EULA) and the applicable privacy information. This screen explains the terms and conditions of using AdGuard DNS and allows you to review and accept them before proceeding.

No personal data or device information is transmitted to AdGuard's servers before you accept the EULA.

**Why we need this information:** Your acceptance confirms that you have reviewed and agreed to the terms governing your use of the app.

### Connecting a device

When you connect a device to AdGuard DNS, the app validates your Setup ID with our backend. If the Setup ID is valid, the app can create a new device or connect the current device to your AdGuard DNS configuration.

During this process, the app communicates with AdGuard's servers and sends the information required to validate the Setup ID and register or connect the device.

This may include:

- Your Setup ID
- Device name

**Why we need this information:** We use this information to verify your AdGuard DNS configuration and associate your device with your account, allowing it to use your DNS settings.

### Device status check

The app periodically communicates with AdGuard's servers to check the status of your connected device and retrieve the information required to maintain its DNS configuration.

During this process, the following information may be transmitted:

- Server name
- Device name
- DNS server addresses
- Bootstrap information required to establish the connection

**Why we need this information:** This information allows the app to verify that your device is correctly connected to AdGuard DNS, retrieve the necessary configuration, and ensure that DNS protection works as expected.

### DNS queries

When you use AdGuard DNS through the app, your device sends DNS queries to the DNS server configured for your connection.

Depending on your device and connection settings, DNS traffic may be handled in different ways:

- Through the operating system's native DNS-over-HTTPS (DoH) or DNS-over-TLS (DoT) support.
- Through a local proxy or VPN connection established by the app.

DNS queries are forwarded to the configured DNS resolver, which processes them according to your AdGuard DNS settings and filtering rules.

**Why we need this information:** DNS queries are necessary to translate domain names into IP addresses and apply your selected DNS filtering and protection settings.

### Technical and interaction data

You can optionally enable the collection of technical and interaction data to help us understand how the app is used and improve its functionality.

This feature is disabled by default. If you choose to enable it, the app may send us technical information and interaction events, such as a temporary visitor ID, which is retained for no longer than 24 hours.

This data does not include your Setup ID, Device ID, IP address, email address, or Wi-Fi network name (SSID).

You can enable or disable this option at any time in **Settings → Help improve AdGuard DNS**.

**Why we need this information:** We use aggregated technical and interaction data to understand how users interact with the app, identify usability issues, and improve its performance and features.

Providing this information is entirely optional. It is collected only if you explicitly enable the corresponding setting.

### Local logs

The app may generate technical logs to help diagnose connection issues and other technical problems.

When verbose logging is enabled, the app records more detailed diagnostic information about its operation. These logs are stored locally on your device.

You can export the logs and share them with our support team if you need assistance.

**Why we need this information:** Local logs help diagnose technical issues, investigate unexpected behavior, and provide support when something does not work as expected.

### Usage data (telemetry)

AdGuard DNS offers you the option of sharing anonymized usage data with us to help improve our service. This option is disabled by default and is only enabled with your consent. If enabled, we may process data related to your interaction with the app interface and technical events.

You can withdraw your consent at any time in **Settings** → **Help improve AdGuard DNS**.

We do not intend to collect personal data such as email addresses, DNS queries, or browsing history through this functionality. The data processed is limited to technical and diagnostic information, may include device-related data or system-generated identifiers, and is not used to identify you.

We use this data solely for internal analytics, diagnostics, and product improvement. We do not use third-party analytics, do not sell this data, and do not use it for advertising or tracking. Where required by applicable law, we process this data on the basis of your consent.

We retain this data for no longer than 30 days, unless a longer retention period is reasonably necessary to investigate an ongoing technical issue.

### Automatic crash reports

AdGuard DNS offers you the option of sharing crash reports with us to help improve our service. This option is disabled by default and is only enabled with your consent.

If you enable this feature, crash reports may include:

- App version
- Operating system version
- Device model
- Diagnostic information related to the crash

You can enable or disable automatic crash reporting in *Settings* → *Help improve AdGuard DNS*.

Crash reports are retained for 30 days. We do not share this information with third parties.

**Why we need this information:** Crash reports help us identify the causes of unexpected errors, diagnose technical problems, and improve the app's stability and reliability.
