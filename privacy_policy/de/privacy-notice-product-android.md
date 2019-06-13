# AdGuard für Android: Datenschutzhinweis
*June 18,2018*
> **Kernaussage**: Wir teilen oder verkaufen Ihre personenbezogenen Daten nicht. Wir sind stolz darauf, dass wir einer der Kämpfer für die Privatsphäre der Nutzer sind, und wir fühlen uns diesem Prinzip verpflichtet und sind bestrebt, so transparent wie möglich zu sein.

Unsere Datenschutzerklärung enthält eine Liste der gesammelten Informationen und der darauf angewandten Verarbeitung. Wir sammeln nur die Informationen, die notwendig für die volle Funktionalität der AdGuard-Produkte sind, und geben sie nie an Drittanbieter weiter. Wir sammeln keine Daten für Trackingzwecke und ergreifen alle notwendigen technischen, administrativen und physischen Maßnahmen, um die erhaltenen Informationen zu schützen. 

Bitte lesen Sie unsere Datenschutzerklärung, um zu erfahren, welche Informationen während der Nutzung von AdGuard für Android an uns gesendet werden und wie wir sie speichern und danach verwenden.

## Welche Daten von AdGuard für Android gesammelt und gesendet werden

### Überprüfen des Lizenzstatus

Um den Lizenzstatus zu überprüfen, verbindet sich AdGuard mit seinen Servern. Wenn es passiert, werden die folgenden Informationen gesendet:

* Anwendungskennung;
* Anwendungsversion;
* Gerätename (im persönlichen Konto verwendet, sodass die Benutzer die mit ihren Lizenzschlüsseln aktivierte Geräteliste sehen konnten);
* Lizenzschlüssel;
* Anwendungssprache;
* Build-Kennung;
* Amazon Kauf-ID (wenn über ein Amazon-Abonnement erworben wurde).

Wir verwenden diese Daten, um den Lizenzstatus zu überprüfen und die Lizenz mit dem Gerät zu verbinden. Diese Informationen werden auch verwendet, um die Lizenzschlüssel des Benutzers im persönlichen Konto von `adguard.com` anzuzeigen.

### Zurücksetzen der Lizenz

Die Lizenz wird auf Benutzeranforderung zurückgesetzt. In diesem Fall werden die folgenden Informationen übermittelt:

* Anwendungskennung

### Überprüfen der App-Updates

Um die App-Updates zu überprüfen, verbindet sich AdGuard mit seinen Servern. Wenn es passiert, werden die folgenden Informationen gesendet:

* Anwendungskennung;
* Anwendungsversion;
* Anwendungssprache;
* Update-Kanal

Die Aktualisierungsprüfungen werden regelmäßig durchgeführt. Wir speichern oder verwenden diese Daten in der Zukunft nicht (aber wir fassen sie in anonymer Form zusammen, um die Gesamtzahl der Installationen von AdGuard-Produkten zu ermitteln).

### Suche nach Filter-Updates

Um die Updates der Sperrfilter zu überprüfen, verbindet sich AdGuard mit seinen Servern. Wenn es passiert, werden keine Informationen gesendet. Die Anwendung lädt regelmäßig eine Datei mit allen Filterversionen und den verfügbaren Updates herunter.

### Anfrage zur Testperiode

Wenn der Benutzer/die Benutzerin die Testperiode anfordert, werden die folgenden Informationen an unseren Server gesendet, um die Testperiode zu aktivieren:

* Anwendungskennung;
* E-Mail-Adresse des Benutzers (die Aktivierungsanweisungen und andere Vorlesematerialien werden an die angegebene E-Mail-Adresse gesendet);
* Anwendungssprache;
* Build-Kennung

### Senden einer Website-Beschwerde

Die Benutzer können einen Bericht über ein Problem auf einer Webseite direkt aus der App heraus senden. Die App öffnet automatisch die Webseite `reports.adguard.com` und leitet einige Informationen über ihre Konfiguration weiter. Die Benutzer können sie dann ändern oder löschen.

Solange der Benutzer/die Benutzerin nicht zustimmt, diese Informationen durch manuelles Klicken auf die Schaltfläche "Senden" zu übermitteln, werden diese Informationen nicht gespeichert oder an Dritte weitergegeben. In diesem Fall wird der Bericht auf [GitHub](https://github.com/adguardteam/adguardfilters/issues) veröffentlicht (aber anonym).

### Senden einer Nachricht an den Support

Die Benutzer können direkt aus der App heraus Nachrichten an den Support senden und zusätzlich einen Diagnosebericht hinzufügen, der einige Informationen über die App und die Systemkonfiguration enthält. Es werden keine Informationen an einen anderen Ort gesendet, sofern der Benutzer/die Benutzerin die Übermittlung nicht bestätigt. 

Dieser Bericht enthält die folgenden Daten:

* Anwendungskennung;
* Anwendungsversion;
* Gerätename (der Gerätehersteller-Namen und Gerätemodell-Namen enthält);
* Android-Version;
* Kernel-Version von Android;
* Liste der aktivierten Filter;
* App-Konfiguration

Wenn die Option "Systembericht senden" aktiviert ist, sendet das Programm auch zusätzliche Informationen (zur Fehlersuche):

* Liste der Anwendungs-Threads und ihrer Stack-Traces;
* Inhalte der Protokolldatei;
* Liste der installierten Anwendungen.

### Wenn AdGuard abstürzt

Beim ersten Start werden die Benutzer gefragt, ob sie es AdGuard erlauben, automatische Absturzberichte zu versenden. Wenn sie es tun (und nur wenn sie es tun), werden die folgenden Informationen an unsere Server gesendet, wenn die App abstürzt:

* Gerätemodell und Name;
* Version des Betriebssystems and Kernel-Build;
* ROOT-Status;
* Nicht identifizierbare Android-ID;
* Gesamte und freie RAM-Menge;
* Bildschirmausrichtung;
* Bildschirm-Auflösung und -Dichte;
* Anwendungsname und Version;
* Informationen zum Absturz (Fehlermeldung und Stack-Trace);
* Die letzten Zeilen der Protokolldatei.

Diese Daten werden dann von unseren Entwicklern verwendet, um den Absturz zu untersuchen und das potenzielle Problem zu beheben.

### Überprüfen der Website-Sicherheit 

Wenn die Option "Phishing und Malware-Schutz" aktiviert ist, überprüft AdGuard jede Webseite, bevor der Benutzer/die Benutzerin sie besucht. Wir verwenden zu diesem Zweck die Lookup-API, und die Informationen über die besuchte Webseite werden in Form von Hash-Präfixen gesendet. Dies lässt uns nicht erkennen, welche Webseite besucht wird.

Wenn Internet-Sicherheit aktiviert ist, prüft AdGuard regelmäßig die Liste der Internet-Sicherheitsserver; in diesen Anfragen werden jedoch keine Informationen gesendet.

### Internet-Sicherheits-Community

Wenn die Option "Helfen Sie uns bei der Entwicklung der Internet-Sicherheit" aktiviert ist, sendet die App regelmäßig anonyme sicherheitsrelevante Daten:

* URLs der besuchten Webseiten, die AdGuard als potenziell nicht zuverlässig identifiziert (der Zugriff auf sie wird durch das Modul "Internet-Sicherheit" blockiert);
* Informationen über die Art der identifizierten Bedrohungen.

Die oben beschriebenen Informationen, wenn sie von AdGuard für Android gesammelt werden, sind im Allgemeinen nicht mit anderen personenbezogenen Daten korreliert und werden anonym in Kombination mit ähnlichen Informationen von anderen Benutzern der AdGuard-Software für analytische Zwecke verwendet.
