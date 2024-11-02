# AdGuard Mail Privacy Policy

*August 23, 2024*

> **Keynote:** This Privacy Policy lists all the information that we may collect and explains why we do it and how we use this information. We only collect essential information for AdGuard products to function fully and properly. We do not share or sell your personal information. We are strongly committed to protecting user privacy and being as transparent as possible.

## What data AdGuard Mail apps can collect and when

Here we describe all cases when and what data is sent to our server, so you can be sure that we only collect the minimum necessary for the application to work properly. The information we collect about you depends on how you interact with our application.

> AdGuard Mail applications are available on multiple platforms: iOS, Android, macOS, Windows, and Web. They share identical functionality and a common code base. The following information represents the full range of data that may be collected, although the specific details gathered can vary depending on the platform, with some platforms collecting less.

### User registration and authorization

Registration and authorization for AdGuard Mail are managed through the AdGuard web-based authentication service at [auth.adguard.com](https://auth.adguard.com/). The privacy policy governing the AdGuard website and related sites is outlined in the document available at [https://adguard.com/privacy/website.html](https://adguard.com/privacy/website.html).

When you register or log in to AdGuard Mail or other AdGuard services, you will be directed to [auth.adguard.com](https://auth.adguard.com), where you may be required to provide your login credentials (email and password). Upon successful authorization, an OAuth access token is issued to the app.

### Mailbox management

When you manage your mailboxes, including actions such as creating, retrieving, or deleting a mailbox, the following information may be transmitted to our servers:

- **Mailbox ID**: A unique identifier for the mailbox associated with your account that is used to perform the requested action.
- **Temporary email address**: The temporary email address linked to the mailbox.
- **Language preference (optional)**: The language used to create the mailbox, which is automatically determined based on the language settings of the AdGuard Mail application. These settings are derived from your operating system or browser language preferences.

The information transmitted allows us to manage your mailboxes efficiently. While mailbox IDs are used internally, the temporary email address is inherently transient and non-identifiable, reducing privacy risks.

### Message handling

When interacting with messages in your mailboxes, such as retrieving, updating (marking as read), or deleting messages, the following information is transmitted:

- **Mailbox ID and message ID**: Unique identifiers used to retrieve, update, or delete specific messages.
- **Message content**: When requesting an email message, the complete content of the message is transmitted.

Storing the content of incoming emails is a fundamental function of the temporary email service within AdGuard Mail. AdGuard Mail stores all information related to incoming messages, including the sender, subject, full email text, time of receipt, and more. This information is retained until you explicitly delete it or delete the account to which it belongs.

Meanwhile, the alias service of AdGuard Mail does not store incoming messages and only performs the function of forwarding messages to the target mailboxes specified by you.

### Alias and recipient management

When managing aliases and recipients, including actions like creating, retrieving, updating, or deleting, the following information is transmitted:

- **Alias ID**: The unique identifier for the alias.
- **Recipient ID**: The unique identifier of the recipient.
- **Email address**: The email address associated with the recipient or alias.
- **Recipient name and description**: Optional fields that may contain user-defined information about the recipient.

Alias and recipient management involves data that directly identifies email addresses and associated users. While email addresses are considered Personally Identifiable Information (PII), they are essential for the functionality of the service.

### Session and account access management

When managing your account access or sessions, including actions like logging out, the following information may be transmitted:

- **User ID and email address**: Unique identifiers for your account.
- **Session information**: Details about the active sessions associated with your account.
- **Access token**: A token used to authenticate and maintain your session.

This information is crucial for maintaining secure access to your account and managing sessions across multiple devices.

### Statistics and blocked senders

When viewing or managing statistics and blocked senders, the following information is transmitted:

- **Alias IDs**: Identifiers used to retrieve statistics related to specific aliases.
- **Sender email address**: The email address of the blocked sender.

This information allows you to monitor activity and manage unwanted communications effectively. The data transmitted is used primarily for user interface purposes and generally does not contain sensitive personal information.

### App updates check

To check for app updates, AdGuard Mail connects to its servers. During this process, the following information may be sent:

- **App platform**
- **App version**
- **App identifier**
- **App language**
- **Browser or OS version**
- **Update channel**

Update checks are performed periodically or at your request. We do not store or reuse this data, but we aggregate it in an anonymous form to count the total number of AdGuard products installed.

### Sending a message to support

You can send messages to support directly from the app. If the *Send app and system info* option is enabled, the following information will be sent along with the message and the email address provided:

- **App platform**
- **App version**
- **App identifier**
- **App language**
- **Browser or OS version**
- **App configuration**

This detailed information is used by the support team to better assist with resolving your issue.

### Automatic crash reports

The first time the app is launched, you will be asked if you want to allow AdGuard to send automatic crash reports. If you agree (and only if you agree), the following information will be sent to our servers if the app crashes:

- **App language**
- **App name, identifier and version**
- **Build identifier**
- **Crash information (error message and stack trace)**
- **Device name and model**
- **OS version and kernel build**
- **Screen orientation**
- **Screen resolution and density**
- **Total and free RAM**
- **Unidentifiable device ID**

**Why we need this information:** To troubleshoot critical issues. It helps us stay informed about new problems that are not reported by users.

Crash report data is stored only on our servers. We do not use any third-party services to collect or store crash reports. All crash reports are stored for 30 days.

### Technical and interaction data

The first time the app is launched, you will be asked if you want to allow AdGuard Mail to send technical and interaction data. If you agree, the following information will be sent:

- **App configuration and enabled features**
- **App language**
- **Build identifier**
- **Device information (type, screen size, language, and OS version)**
- **Names of screens viewed within the app**

When the data is sent to AdGuard, your IP address may be temporarily collected as part of our server logs.

This data is used only internally and is not shared with third parties.

**Why we need this information:**

- To find out which features are used the most
- To identify issues users may face while using the app
- To fix mistakes in the UI/UX
- To learn what people like or don’t like about our app

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

Amazon SES is a trusted service provider that complies with strict privacy and security standards. By using AdGuard Mail, you acknowledge and agree that your email data will be handled by Amazon SES in accordance with their privacy practices. For more details, please refer to [Amazon’s Privacy Notice](https://aws.amazon.com/privacy/) and [AWS SES Data Handling Policies](https://docs.aws.amazon.com/ses/latest/dg/deleting-personal-data.html).
