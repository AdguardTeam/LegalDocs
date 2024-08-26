# AdGuard Mail Privacy Notice

*August 23, 2024*

> **Keynote:** This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. We only collect essential information for AdGuard products to function fully and properly. We do not share or sell your personal information. We are strongly committed to protecting user privacy and being as transparent as possible.

## What data AdGuard Mail apps can collect and when

Here we describe all cases when and what data is sent to our server, so you can be sure that we only collect the minimum necessary for the application to work properly. The information we collect about you depends on how you interact with our application.

> AdGuard Mail applications are available on multiple platforms: iOS, Android, macOS, Windows, and Web. They share identical functionality and a common code base. The following information represents the full range of data that may be collected, although the specific details gathered can vary depending on the platform, with some platforms collecting less.

[User registration and authorization](#user-registration-and-authorization)

[Mailbox management](#mailbox-management)

[Message handling](#message-handling)

[Alias and recipient management](#alias-and-recipient-management)

[Account information](#account-information)

[Statistics and blocked senders](#statistics-and-blocked-senders)

[App updates check](#app-updates-check)

[Sending a message to support](#sending-a-message-to-support)

[Automatic crash reports](#automatic-crash-reports)

[Technical and interaction data](#technical-and-interaction-data)

### User registration and authorization

Registration and authorization for AdGuard Mail are managed through the web-based AdGuard authentication service at [auth.adguard.com](https://auth.adguard.com/). The privacy policy governing the AdGuard website and related sites is outlined in the document available at [https://adguard.com/en/privacy/website.html](https://adguard.com/en/privacy/website.html).

When you register or log in to AdGuard Mail or other AdGuard services, you will be directed to [auth.adguard.com](https://auth.adguard.com), where you may be required to provide your login credentials (email and password). Upon successful authorization, an OAuth access token is issued to the app.

### Mailbox management

When you manage your mailboxes, including actions such as creating, retrieving, or deleting a mailbox, the following information may be transmitted to our servers:

- **Mailbox ID**: A unique identifier for the mailbox associated with your account, used to perform the requested action.
- **Temporary email address**: The temporary email address linked to the mailbox.
- **Language setting (optional)**: The language used for mailbox creation, which is automatically determined based on the language settings of the AdGuard Mail application. These settings are derived from your operating system or browser language preferences.

The information transmitted allows us to manage your mailboxes efficiently. While Mailbox IDs are used internally, the temporary email address is inherently transient and non-identifiable, reducing privacy risks.

### Message handling

When interacting with messages within your mailboxes, such as retrieving, updating (marking as read), or deleting messages, the following information is transmitted:

- **Mailbox ID and message ID**: Unique identifiers used to retrieve, update, or delete specific messages.
- **Message content**: When requesting an email message, the complete content of the message is transmitted.

Storing the content of incoming emails is a fundamental function of the temporary email service within AdGuard Mail. AdGuard Mail stores all information related to incoming messages, including the sender, subject, full email text, time of receipt, and more. This information is retained until you explicitly delete it or delete the account to which it belongs.

Meanwhile, the alias service of AdGuard Mail does not store incoming messages and only performs the function of forwarding messages to the target mailboxes specified by you.

### Alias and recipient management

When managing aliases and recipients, including actions like creating, retrieving, updating, or deleting, the following information is transmitted:

- **Alias ID**: The unique identifier for the alias.
- **Recipient ID**: The unique identifier for the recipient.
- **Email Address**: The email address associated with the recipient or alias.
- **Recipient Name and Description**: Optional fields that may contain user-defined information about the recipient.

Alias and recipient management involves data that directly identifies email addresses and associated users. While email addresses are considered Personally Identifiable Information (PII), they are essential for the functionality of the service.

### Session and Account Access Management

When managing your account access or sessions, including actions like logging out, the following information may be transmitted:

- **User ID and Email Address**: Unique identifiers for your account.
- **Session Information**: Details about the active sessions associated with your account.
- **Access Token**: A token used to authenticate and maintain your session.

This information is crucial for maintaining secure access to your account and managing sessions across multiple devices.

### Statistics and Blocked Senders

When viewing or managing statistics and blocked senders, the following information is transmitted:

- **Alias IDs**: Identifiers used to retrieve statistics related to specific aliases.
- **Sender Email Address**: The email address of the sender that has been blocked.

This information allows you to monitor activity and manage unwanted communications effectively. The data transmitted is primarily used for user interface purposes and generally does not contain sensitive personal information.

### App updates check

To check for app updates, AdGuard Mail connects to its servers. During this process, the following information may be sent:

- **App platform**
- **App version**
- **App identifier**
- **App language**
- **Browser or OS version**
- **Update channel**

Update checks are performed periodically or when prompted by you. We do not store or reuse this data, but we aggregate it in an anonymous form to count the total number of AdGuard products installed.

### Sending a Message to Support

You can send messages to support directly from the app. If the *Send app and system info* option is enabled, the following information will be sent along with the message and the email address provided:

- **App platform**
- **App version**
- **App identifier**
- **App language**
- **Browser or OS version**
- **App configuration**

This detailed information is used by the support team to better assist with resolving your request.

### Automatic crash reports

The first time the app is launched, you are asked if you want to allow AdGuard to send automatic crash reports. If you agree (and only if you agree), the following information will be sent to our servers if the app crashes:

- **Device name and model**
- **OS version and kernel build**
- **Unidentifiable Device ID**
- **Total and free RAM**
- **Screen orientation**
- **Screen resolution and density**
- **App name, identifier and version**
- **Information related to the crash (error message and stack trace)**
- **App language**
- **Build identifier**

**Why we need this information:** To troubleshoot critical issues. It helps us stay informed about new problems that are not reported by users.

Crash report data is stored only on our servers. We do not use any third-party services to collect or store crash reports. All crash reports are stored for 30 days.

### Technical and interaction data

The first time the app is launched, you are asked if you want to allow AdGuard Mail to send technical and interaction data. If you agree, the following information is sent:

- **App configuration and enabled features**
- **App language**
- **Build identifier**
- **Device information (type, screen size, language, and OS version)**
- **Names of the screens viewed inside the app**

When the data is sent to AdGuard, your IP address may be temporarily collected as part of our server logs.

This data is used only internally and is not shared with third parties.

**Why we need this information:**

- To find out which features are used the most
- To identify issues users may face while using the app
- To fix mistakes in the UI/UX
- To learn what people like or don’t like about our app

## Server Data Storage and Logging Practices

**AdGuard Mail** is composed of two main components: the Temporary Email Service and the Alias Service. Each component handles data storage and logging differently to ensure user privacy while maintaining essential functionality.

### Alias Service

- **No Logging of Individual Email Forwarding**: The Alias Service does not log or store any records of individual emails being forwarded. This ensures that details of your email activity remain private.
- **Aggregated Statistics**: The Alias Service only stores aggregated statistics related to the number of emails forwarded through each alias. These statistics do not include any details about the emails themselves, such as content or specific sender/recipient information.

### Temporary email service

- **Storage of received emails**: The temporary email service stores all emails received at the temporary email addresses you create. This allows you to access these emails as needed.
- **Email deletion**: Emails stored by the temporary email service are deleted in two scenarios:
    - When you delete the temporary mailbox associated with the email.
    - When you manually delete individual emails.

This approach ensures that the temporary email service retains emails only as long as they are needed.

## Third-party service: Amazon SES

AdGuard Mail utilizes Amazon Simple Email Service (Amazon SES) to forward emails. When emails are forwarded using AdGuard Mail, the content of these emails and associated metadata (such as sender and recipient email addresses) are temporarily stored and processed by Amazon SES to ensure successful delivery.

Amazon SES may retain certain data, such as logs, for a limited time for operational purposes, including tracking email deliverability and investigating service issues. However, the content of the emails is typically deleted shortly after processing is completed.

Amazon SES is a trusted service provider that complies with stringent privacy and security standards. By using AdGuard Mail, you acknowledge and agree that your email data will be handled by Amazon SES in accordance with their privacy practices. For more details, please refer to [Amazon's Privacy Notice](https://aws.amazon.com/privacy/) and [AWS SES Data Handling Policies](https://docs.aws.amazon.com/ses/latest/dg/deleting-personal-data.html).