# AdGuard Home: Datenschutzhinweis
*April 03, 2019*

> **Kernaussage**: Wir teilen oder verkaufen Ihre personenbezogenen Daten nicht. Wir sind stolz darauf, dass wir einer der Kämpfer für die Privatsphäre der Nutzer sind, und wir fühlen uns diesem Prinzip verpflichtet und sind bestrebt, so transparent wie möglich zu sein.

Unsere Datenschutzerklärung enthält eine Liste der gesammelten Informationen und der darauf angewandten Verarbeitung. Wir sammeln nur die Informationen, die notwendig für die volle Funktionalität der AdGuard-Produkte sind, und geben sie nie an Drittanbieter weiter. Wir sammeln keine Daten für Trackingzwecke und ergreifen alle notwendigen technischen, administrativen und physischen Maßnahmen, um die erhaltenen Informationen zu schützen. 

Bitte lesen Sie unsere Datenschutzerklärung, um zu erfahren, welche Informationen während der Nutzung von AdGuard für Android an uns gesendet werden und wie wir sie speichern und danach verwenden.

## Welche Daten von AdGuard Home gesammelt und gesendet werden

### Verarbeitung von DNS-Abfragen

AdGuard Home verbindet sich mit den als "Upstreams" konfigurierten DNS-Servern und sendet DNS-Abfragen an sie.

### Update-Suche

AdGuard Home lädt regelmäßig eine [.json-Datei](https://github.com/AdguardTeam/AdGuardHome/blob/master/version.json) herunter, um zu überprüfen, ob es eine neuere Version gibt. In diesem Fall werden keine Informationen gesendet.

### Suche nach Filter-Updates

Um die Updates der aktivierten Filter zu überprüfen, verbindet sich AdGuard Home mit den jeweiligen Servern. Wenn es passiert, wird nichts an diese Server gesendet. AdGuard Home lädt regelmäßig eine Datei mit den Versionen aller Filter und den verfügbaren Updates herunter.

### Wenn die Benutzer AdGuard Home für die Verwendung vom Internet-Sicherheit-Modul konfigurieren (standardmäßig deaktiviert):

Für jede angeforderte Domain verbindet sich AdGuard Home mit dem Internet-Sicherheit-Server und übergibt ein 8-stelliges Präfix des SHA256-Hash des Domainnamens. Der Server antwortet mit einer Liste voller Hashes und AdGuard Home prüft, ob es eine Übereinstimmung gibt. Die gesendeten Präfixe werden nicht gespeichert und offenbaren keine personenbezogenen Daten.

### Wenn die Benutzer AdGuard Home für die Verwendung vom Kindersicherungs-Modul konfigurieren (standardmäßig deaktiviert):

Für jede angeforderte Domain verbindet sich AdGuard Home mit dem Kindersicherungs-Webdienst und übergibt ein 8-stelliges Präfix des SHA256-Hash des Domain-Namens. Der Dienst antwortet mit einer Liste von Full-Hashes und AdGuard Home prüft, ob es eine Übereinstimmung gibt. Die gesendeten Präfixe werden nicht gespeichert und offenbaren keine personenbezogenen Daten.