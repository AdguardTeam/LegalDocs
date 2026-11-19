
# AdGuard DNS CLI Privacy Notice

*November 19, 2026*

---

**Keynote:** This Privacy Notice lists all the information that we may collect and explains why we do it and how we use this information. We only collect essential information for AdGuard products to function fully and properly. We do not share or sell your personal information. We are strongly committed to protecting user privacy and being as transparent as possible.

---

This Privacy Notice supplements the AdGuard DNS Privacy Policy available at [adguard-dns.io/privacy.html](https://adguard-dns.io/privacy.html), which provides you with the necessary information regarding terms and conditions of data processing by AdGuard.

## What data AdGuard DNS CLI can collect and when

AdGuard DNS CLI is an open-source command-line tool designed to route DNS queries to configured upstream servers. **It does not collect any telemetry, crash reports, usage statistics, or analytics, nor does it perform update checks.**

Configuration files, DNS query cache, and logs are stored locally on your device and are managed by you. All network connections established by AdGuard DNS CLI are strictly functional and necessary to resolve DNS queries or connect to configured services. These scenarios are described below.

### Processing DNS queries

AdGuard DNS CLI connects to upstream DNS servers and sends DNS queries to them. In the default configuration, AdGuard DNS CLI routes requests to AdGuard DNS servers. In this case, DNS queries are handled in accordance with the [AdGuard DNS Privacy Policy](https://adguard-dns.io/privacy.html).

If you configure third-party upstream DNS servers, queries are transmitted directly to those servers, and their processing is governed by the respective providers’ privacy policies.

### Bootstrap servers

Bootstrap DNS servers are used to resolve the hostnames of your configured upstream servers.

By default, the bootstrap DNS servers are set to Quad9 (9.9.9.10, 149.112.112.10, 2620:fe::10, and 2620:fe::fe:10). You can change or replace these addresses at any time in the `bootstrap` section of your configuration file.

### Fallback servers

If an upstream DNS server fails to respond, AdGuard DNS CLI sends DNS queries to the configured fallback DNS servers.

By default, the fallback server is AdGuard DNS (tls://94.140.14.140). You can change the fallback server addresses in the configuration file. Fallback cannot be disabled.

### Automatic device connection (disabled by default)

AdGuard DNS CLI supports automatic device connection for private AdGuard DNS servers. This feature is disabled by default and must be used exclusively with AdGuard DNS upstreams.

When enabled for an upstream group, AdGuard DNS CLI sends an identifier to d.adguard-dns.com as part of the DNS upstream hostname or URL, following the pattern `<device-type>-<server-id>-<human-id>`.

- **device-type**: Three-letter device type code: adr, ios, win, mac, lnx, rtr, stv, gam, otr.

- **server-id**: The 8-character Server ID from the AdGuard DNS dashboard (Servers → Server settings), stored as `profile_id` in the configuration file.

- **human-id**: An identifier for the client device. The private upstream group is used to determine this identifier; if no such group is configured, it is generated from the client’s IP address.
