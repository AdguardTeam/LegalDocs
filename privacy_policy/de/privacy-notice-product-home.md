# AdGuard Home: Datenschutzhinweis
*November 06, 2019*

> **Kernaussage**: Wir teilen oder verkaufen Ihre personenbezogenen Daten nicht. Wir sind stolz darauf, dass wir einer der Kämpfer für die Privatsphäre der Nutzer sind, und wir fühlen uns diesem Prinzip verpflichtet und sind bestrebt, so transparent wie möglich zu sein.

Diese Datenschutzerklärung enthält alle Informationen, die wir möglicherweise sammeln, und erklärt, warum wir dies tun und wie wir sie weiter verwenden. Die von uns gesammelten Informationen enthalten nur die Daten, die für die vollständige Funktionalität der AdGuard-Produkte entscheidend sind.

Wir sind überzeugt, dass die Privatsphäre ein grundlegendes Menschenrecht ist. Deshalb sind wir transparent darüber, was AdGuard tut, und erklären den Zweck jedes einzelnen Teils der Informationen, die von unseren Apps gesammelt werden.

## Welche Daten von AdGuard Home gesammelt werden können und in welchen Fällen

* [Verarbeitung von DNS-Abfragen](#dns-queries)
* [Update-Suche](#update-check)
* [Suche nach Filter-Updates](#filters-updates-check)
* [Überprüfen der Internet-Sicherheitsdomäne](#browsing-security-check)
* [Überprüfen der Kindersicherungs-Domäne](#parental-control-check)

### <a id="dns-queries"></a> Verarbeitung von DNS-Abfragen

AdGuard Home verbindet sich mit den als "Upstreams" konfigurierten DNS-Servern und sendet DNS-Abfragen an sie.

### <a id="update-check"></a> Update-Suche

AdGuard Home lädt regelmäßig eine [.json-Datei](https://github.com/AdguardTeam/AdGuardHome/blob/master/version.json) herunter, um zu überprüfen, ob es eine neuere Version gibt. In diesem Fall werden keine Informationen gesendet.

### <a id="filters-updates-check"></a> Suche nach Filter-Updates

Um die Updates der aktivierten Filter zu überprüfen, verbindet sich AdGuard Home mit den jeweiligen Servern. Wenn es passiert, wird nichts an diese Server gesendet. AdGuard Home lädt regelmäßig eine Datei mit den Versionen aller Filter und den verfügbaren Updates herunter.

### <a id="browsing-security-check"></a> Überprüfen der Internet-Sicherheitsdomäne (standardmäßig deaktiviert)

Für jede angeforderte Domain verbindet sich AdGuard Home mit dem Internet-Sicherheit-Server und übergibt ein 4-stelliges Präfix des SHA256-Hash des Domainnamens. Der Server antwortet mit einer Liste voller Hashes und AdGuard Home prüft, ob es eine Übereinstimmung gibt. Die gesendeten Präfixe werden nicht gespeichert und offenbaren keine personenbezogenen Daten.

###  <a id="parental-control-check"></a> Überprüfen der Kindersicherungs-Domäne (standardmäßig deaktiviert)

Für jede angeforderte Domain verbindet sich AdGuard Home mit dem Kindersicherungs-Webdienst und übergibt ein 4-stelliges Präfix des SHA256-Hash des Domain-Namens. Der Dienst antwortet mit einer Liste von Full-Hashes und AdGuard Home prüft, ob es eine Übereinstimmung gibt. Die gesendeten Präfixe werden nicht gespeichert und offenbaren keine personenbezogenen Daten.