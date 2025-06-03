# AdGuard Mail Privacy Policy

*March 18, 2025*

---

**Keynote:** This Privacy Policy lists all the information that we may collect and explains why we do it and how we use this information. We only collect essential information for AdGuard products to function fully and properly. We do not share or sell your personal information. We are strongly committed to protecting user privacy and being as transparent as possible.

---

## What data AdGuard Mail apps can collect and when

Here we describe all cases when and what data is sent to our server, so you can be sure that we only collect the minimum necessary for the application to work properly. The information we collect about you depends on how you interact with our application.

---

AdGuard Mail applications are available on multiple platforms: iOS, Android, macOS, Windows, and Web. They share identical functionality and a common code base. The following information represents the full range of data that may be collected, although the specific details gathered can vary depending on the platform, with some platforms collecting less.

---

### Starting the application

When you launch AdGuard Mail for the first time, we collect the following data:

- **App version**
- **App identifier**
- **App language**
- **Device OS**
- **OS language**
- **OS theme**
- **User-Agent**
- **App installation channel**

**Why we need this information:**

- To count the number of apps of a certain type and version
- To communicate with you in your language
- To know if the user was referred by an AdGuard affiliate, and if so, which affiliate
- To learn the source of AdGuard Mail installation
- To make the AdGuard Mail theme match the system theme

The collection of this information is a **default process** and is critical to maintaining and improving app performance.

### Using the app

AdGuard Mail periodically connects to our server to check the account status. The following information is sent:

- **Authorization token**
- **User in-app purchase data**
- **App identifier**
- **App version**
- **Device OS**
- **OS language**
- **Limits of the free version**: number of aliases and recipients used, emails forwarded to aliases, and emails sent to Temp Mail address

We need this information to check the account status and authorization on the server.

### User registration and authorization

Registration and authorization for AdGuard Mail are managed through the AdGuard web-based authentication service at [auth.adguardaccount.com](https://auth.adguardaccount.com). The privacy policy governing the AdGuard website and related sites is outlined in the document available at [adguard.com/website-privacy.html](https://adguard.com/website-privacy.html).

When you register or log in to AdGuard Mail or other AdGuard services, you will be directed to [auth.adguardaccount.com](https://auth.adguardaccount.com), where you may be required to provide your login credentials (email and password). Upon successful authorization, an OAuth access token is issued to the app.

### Mailbox management in Temp Mail

When you manage your mailboxes, including actions such as creating, retrieving, or deleting a mailbox, the following information may be transmitted:

- **Mailbox ID**: A unique identifier for the mailbox associated with your account that is used to perform the requested action.
- **Temporary email address**: The temporary email address linked to the mailbox.
- **Language preference (optional)**: The language used to create the mailbox, which is automatically determined based on the language settings of the AdGuard Mail application. These settings are derived from your operating system or browser language preferences.

The information transmitted allows us to manage your mailboxes efficiently. While mailbox IDs are used internally, the temporary email address is inherently transient and non-identifiable, reducing privacy risks.

### Message handling in Temp Mail

When interacting with messages in your in Temp Mail mailboxes, such as retrieving, updating (marking as read), or deleting messages, the following information is transmitted:

- **Mailbox ID and message ID**: Unique identifiers used to retrieve, update, or delete specific messages.
- **Message content**: When requesting an email message, the full contents of the messages and the status of read messages are transmitted.

Storing the content of incoming emails is a fundamental function of the temporary email service within AdGuard Mail. AdGuard Mail stores all information related to incoming messages, including the sender, subject, full email text, time of receipt, and more. This information is retained until you explicitly delete it or delete the account to which it belongs.

Meanwhile, the alias service of AdGuard Mail does not store incoming messages and only performs the function of forwarding messages to the target mailboxes specified by you.

### Alias and recipient management

When managing aliases and recipients, including actions like creating, retrieving, updating, or deleting, the following information is transmitted:

- **Alias ID**: The unique identifier, name, description, and status of the alias.  Fields that may contain user-defined information about the recipient.
- **Recipient ID**: The unique identifier, name, description, and status of the recipient. Fields that may contain user-defined information about the recipient.
- **Email address**: The email address associated with the recipient or alias.

Alias and recipient management involves data that directly identifies email addresses and associated users. While email addresses are considered Personally Identifiable Information (PII), they are essential for the functionality of the service.

### Session and account access management

When managing your account access or sessions, including actions like logging out, the following information may be transmitted:

- **User ID**: The unique identifier and status of your account.
- **Email address**: The email address associated with your account.
- **Session information**: Details about the active sessions associated with your account.
- **Authorization token**: A token used to authenticate and maintain your session.

This information is crucial for maintaining secure access to your account and managing sessions across multiple devices.

### Statistics and blocked senders

When viewing or managing statistics and blocked senders, the following information is transmitted:

- **Alias IDs**: Identifiers used to retrieve statistics related to specific aliases.
- **Sender email address**: The email address of the blocked sender.

This information allows you to monitor activity and manage unwanted communications effectively. The data transmitted is used primarily for user interface purposes and generally does not contain sensitive personal information.

### Sending a message to support

You can send messages to support directly from the app. If the *Send app and system info* option is enabled, the following information will be sent along with the message and the email address provided:

- **App version**
- **App identifier**
- **App language**
- **Device OS**
- **Browser or OS version**
- **App configuration**
- **Account info**: Email address, user status, limits, default recipient
- **System theme**
- **Device language**
- **Info about active temp mail address, aliases, and blocked senders**

This detailed information is used by the support team to better assist with resolving your issue.

### Automatic crash reports

The first time the app is launched, you will be asked if you want to allow AdGuard to send automatic crash reports. If you agree (and only if you agree), the following information will be sent to our servers if the app crashes:

- **App identifier and version**
- **Build identifier**
- **Crash information**: Error message, stack trace, and timezone of the user
- **Device name and model**
- **OS version, architecture, root status, and kernel build**
- **Hardware device info**: Screen orientation, resolution, and density, total and free RAM and ROM, etc.
- **Device meta info**
- **Unidentifiable device ID**

**Why we need this information:** To troubleshoot critical issues. It helps us stay informed about new problems that are not reported by users.

Crash report data is stored only on our servers. We do not use any third-party services with external hosting to collect or store crash reports. All crash reports are stored on our servers.

### Technical and interaction data

The first time the app is launched, you will be asked if you want to allow AdGuard Mail to send technical and interaction data. If you agree, the following information will be sent:

- **App identifier and version**
- **Build identifier**
- **Crash information**: Error message, stack trace, and timezone of the user
- **Device name and model**
- **OS version, architecture, root status, and kernel build**
- **Hardware device info**: Screen orientation, resolution, and density, total and free RAM and ROM, etc.
- **Device meta info**
- **Unidentifiable device ID**
- **Accessibility tool status**
- **The last time the app was launched**
- **Permissions granted by the user to the app**

When the data is sent to AdGuard, your IP address may be temporarily collected as part of our server logs.

This data is used only internally and is not shared with third parties.

**Why we need this information:**

- To find out which features are used the most
- To identify issues users may face while using the app
- To fix mistakes in the UI/UX
- To learn what people like or don’t like about our app

### Buying a subscription

We process your email address for billing and payment purposes. If you purchase a subscription to AdGuard Mail, we’ll need to know your contact details to send you information about the purchase.

We’ll also use your email address to create an account for you. This account will allow you to manage your purchased subscription.

We conduct all transactions via [Paddle.com Market Ltd](https://www.paddle.com) and [PayPro Global, Inc.](https://payproglobal.com) to enable payments if you purchase a subscription to use our software and services.
The data processed depends on the payment provider and may include the following:

- Email address
- Country of residence
- Zip or postal code
- (If you use a bank card to make a purchase) Number, name, expiration date, and the security code associated with the bank card

For the exact data that the payment provider collects about you, please see the corresponding privacy policy: [Paddle’s Privacy Policy](https://www.paddle.com/legal/privacy), [PayPro Global’s Privacy Policy](https://docs.payproglobal.com/documents/legal/privacyPolicy.pdf)

## Server data storage and logging practices

**AdGuard Mail** consists of two main components: the temporary email service and the alias service. Each component handles data storage and logging differently to ensure user privacy while maintaining essential functionality.

### Alias service

- **No logging of individual email forwarding**: The alias service does not log or store any records of individual emails being forwarded. This ensures that details of your email activity remain private.
- **Aggregated statistics**: The alias service only stores aggregated statistics related to the number of emails forwarded through each alias. These statistics do not include any details about the emails themselves, such as content or specific sender/recipient information.

### Temporary email service

- **Storage of received emails**: The temporary email service stores all emails received at the temporary email addresses you create. This allows you to access these emails as needed.
- **Email deletion**: Emails stored by the temporary email service are deleted in two scenarios:
    - When you delete the temporary mailbox associated with the email.
    - When you manually delete individual emails.

This approach ensures that the temporary email service retains emails only as long as they are needed.

## Third-party service: Amazon SES

AdGuard Mail utilizes Amazon Simple Email Service (Amazon SES) to forward emails. When emails are forwarded using AdGuard Mail, the content of these emails and associated metadata (such as sender and recipient email addresses) are temporarily stored and processed by Amazon SES to ensure successful delivery.

Amazon SES may retain certain data, such as logs, for a limited period of time for operational purposes, including tracking email deliverability and investigating service issues. However, the content of the emails is typically deleted shortly after processing is complete.

Amazon SES is a trusted service provider that complies with strict privacy and security standards. By using AdGuard Mail, you acknowledge and agree that your email data will be handled by Amazon SES in accordance with their privacy practices. For more details, please refer to [Amazon’s Privacy Notice](https://aws.amazon.com/privacy) and [AWS SES Data Handling Policies](https://docs.aws.amazon.com/ses/latest/dg/deleting-personal-data.html).
