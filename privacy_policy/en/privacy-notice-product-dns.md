# AdGuard DNS Privacy Notice
*February 19, 2021*

> **Keynote:** We do not share or sell any of your personal data. We are proud to say that we are one of the fighters for users' privacy and we are strongly committed to this principle and to being as transparent as possible.

We believe that privacy is a fundamental human right. That's why we are transparent about what AdGuard does, and explain the purpose of every little bit of information that may be gathered by our apps and services.

This Privacy Notice lists all the information that we may collect via [AdGuard DNS](https://adguard.com/en/adguard-dns/overview.html) and explains why we do it and how we use this information. The information we collect includes no more than is crucial to provide the full functionality of AdGuard products and services.

## General points

AdGuard DNS service operates under the jurisdiction of Republic of Cyprus. All its activities and practices comply with relevant EU Directives and Regulations as well as relevant national and local legislation and regulations of Republic of Cyprus. 

AdGuard DNS operates as a DNS resolver which *can* block access to certain domains, depending on the chosen configuration (server):

* *AdGuard DNS Default* blocks access to domains that we consider ad, tracking, or malware. This list is constantly updated based on the community feedback.
* *AdGuard DNS Family* blocks access to the same domains as *Default*, and also to domains that may contain adult content. It also enforces safe search and other safe modes wherever possible, which can result in modified search results, missing comment sections, and other differences in web page appearance compared to its original state.
* *Non-filtering AdGuard DNS* doesn't block or redirect anything. It only returns the IP address of the requested domain.

Whenever an AdGuard DNS server (except non-filtering servers) receives a request to a domain that’s considered to be an ad or tracking domain, it returns an “unspecified IP” response (0.0.0.0). Whenever an AdGuard DNS server (except non-filtering servers) receives a request to a domain that’s considered to be a malware domain, or when an AdGuard DNS Family server receives a request to a domain that’s considered to be an adult domain, it replies with a redirect to a dummy page that explains what has happened.

If you disagree with us about classifying a certain domain as an ad, tracking, malware, or adult domain, or if you believe a certain domain should get blocked by one of AdGuard DNS servers but isn’t, contact us at support@adguard.com.

## What data can AdGuard DNS collect and when

We do NOT collect anything about the user specifically. In other words, your IP address or any data about YOU is not logged.

**What we do collect:**

* We store aggregated performance metrics of our DNS server, namely the number of complete requests to a particular server, the number of blocked requests, the speed of processing requests.
* We keep and store the anonymous database of domains requested in the last 24 hours. There is no information whatsoever that could link any of these domain names to the original user who sent the request. We need this information to identify and block new trackers and threats.
* We also log how many times this or that tracker has been blocked. We need this information to remove outdated rules from our filters.

All data that we collect, we do not share with any third parties. It is used solely for internal purposes such as performance analysis. The only information that we can possibly share is derivatives, i.e. lists of domains that our servers recognized as ad, tracking, or malware domains.