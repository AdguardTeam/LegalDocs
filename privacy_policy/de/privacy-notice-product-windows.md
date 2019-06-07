# AdGuard für Windows: Datenschutzhinweis
*April 03, 2019*

> **Kernaussage**: Wir teilen oder verkaufen Ihre personenbezogenen Daten nicht. Wir sind stolz darauf, dass wir einer der Kämpfer für die Privatsphäre der Nutzer sind, und wir fühlen uns diesem Prinzip verpflichtet und sind bestrebt, so transparent wie möglich zu sein.

Unsere Datenschutzerklärung enthält eine Liste der gesammelten Informationen und der darauf angewandten Verarbeitung. Wir sammeln nur die Informationen, die notwendig für die volle Funktionalität der AdGuard-Produkte sind, und geben sie nie an Drittanbieter weiter. Wir sammeln keine Daten für Trackingzwecke und ergreifen alle notwendigen technischen, administrativen und physischen Maßnahmen, um die erhaltenen Informationen zu schützen. 

Bitte lesen Sie unsere Datenschutzerklärung, um zu erfahren, welche Informationen während der Nutzung von AdGuard für Android an uns gesendet werden und wie wir sie speichern und danach verwenden.

## Welche Daten von AdGuard für Windows gesammelt und gesendet werden

### Überprüfen des Lizenzstatus

Um den Lizenzstatus zu überprüfen, verbindet sich AdGuard mit seinen Servern. Wenn es passiert, werden die folgenden Informationen gesendet:

* Computername;
* MD5 Hash der MAC-Adresse;
* Hash der Hardware-ID;
* Sprache des Betriebssystems;
* Anwendungskennung;
* Anwendungsversion;
* Lizenzschlüssel;
* Anwendungssprache;
* Build-Kennung.
* Kennzeichen, das angibt, ob Sie an der Entwicklung des Internet-Sicherheitsmoduls teilnehmen.

Wir verwenden diese Daten, um den Lizenzstatus zu überprüfen. MAC- und Hardware-ID-Hashes werden auch verwendet, um die Lizenz an den Computer zu binden. Diese Informationen werden auch verwendet, um die Lizenzschlüssel des Benutzers im persönlichen Konto auf `adguard.com` anzuzeigen.

### Zurücksetzen der Lizenz

Die Lizenz wird auf Benutzeranforderung zurückgesetzt. In diesem Fall werden die folgenden Informationen übermittelt:

* Anwendungskennung

### Suche nach Programm-Updates

Um die Anwendungs-Updates zu überprüfen, verbindet sich AdGuard mit seinen Servern. Wenn es passiert, werden die folgenden Informationen gesendet:

* Anwendungskennung;
* Update-Kanal;
* Anwendungsname;
* Anwendungsversion;
* Anwendungssprache;
* Kennzeichen für automatisches Update;
* Version des Betriebssystems.

Das Überprüfen der Programm-Updates wird regelmäßig oder auf Aufforderung der Benutzer durchgeführt. Diese Daten werden von uns nicht gespeichert und in der Zukunft auch nicht verwendet.

### Suche nach Filter-Updates

Um die Updates der Sperrfilter zu überprüfen, verbindet sich AdGuard mit seinen Servern. Wenn es passiert, werden keine Informationen gesendet. Die Anwendung lädt regelmäßig eine Datei mit allen Filterversionen und den verfügbaren Updates herunter.

### Suche nach verfügbaren Benachrichtigungen

Die Suche nach verfügbaren Benachrichtigungen erfolgt auf Benutzeranforderung. Wenn es passiert, wird die folgende Information gesendet:

* Anwendungskennung

### Nach dem Programm-Absturz

Wenn AdGuard abstürzt, erstellt es einen automatischen Absturzbericht. Beim nächsten Start wird AdGuard Sie auffordern, ihn an uns zu senden. In diesem Bericht werden die folgenden Informationen gesendet:

* Stack Trace;
* Speicher-Minidump (nur im Falle eines Absturzes im nativen Code);
* Computername;
* AdGuard-Version;
* AdGuard-Einstellungen;
* Anwendungskennung;
* Name des aktiven Windows-Benutzers;
* .NET Framework-Version;
* Liste der aktiven Prozesse.

### Nach der Deinstallation des Programms

Nach der Deinstallation des Programms werden die folgenden Informationen gesendet:

* Anwendungskennung

### Senden einer Website-Beschwerde

Die Benutzer können einen Bericht über ein Problem auf einer Webseite direkt aus der App heraus senden. Die App öffnet automatisch die Webseite `reports.adguard.com` und leitet einige Informationen über ihre Konfiguration weiter. Die Benutzer können sie dann ändern oder löschen.

Solange der Benutzer/die Benutzerin nicht zustimmt, diese Informationen durch manuelles Klicken auf die Schaltfläche "Senden" zu übermitteln, werden diese Informationen nicht gespeichert oder an Dritte weitergegeben. In diesem Fall wird der Bericht auf [GitHub](https://github.com/adguardteam/adguardfilters/issues) veröffentlicht (aber anonym).

### Senden einer Nachricht an den Support

Die Benutzer können direkt aus der App heraus Nachrichten an den Support senden. Wenn sie es tun, wird eine spezielle Datei mit einigen Informationen über die App-Einstellungen und die Betriebssystem-Konfiguration gesendet. Diese Daten sind häufig für die Fehlersuche erforderlich. Die Benutzer können auch den Diagnosebericht zur Nachricht hinzufügen, der zusätzliche Informationen enthält. Es werden keine Informationen an einen anderen Ort gesendet, sofern der Benutzer/die Benutzerin die Übermittlung nicht bestätigt. 

Dieser Nachricht an Support enthält die folgenden Informationen:

* Anwendungskennung;
* Anwendungsversion;
* Anwendungssprache;
* Version des Betriebssystems;
* Version von Microsoft .NET Framework, das auf Ihrem Computer installiert wurde;
* Liste der aktivierten Filter;
* Lizenzschlüssel.

Wenn die Option "Systembericht senden" aktiviert ist, sendet das Programm auch zusätzliche Informationen (zur Fehlersuche):

* Liste der aktiven Prozesse;
* Inhalt der AdGuard-Protokolldatei, die die Liste der Fehler enthält, die seit dem letzten Start des Programms aufgetreten sind.

### Suche nach Updates der Internet-Sicherheitsdatenbank

AdGuard verwendet [Safebrowsing Protocol v2](https://developers.google.com/safe-browsing/), um die Updates der lokalen Datenbank von Internet-Sicherheit zu überprüfen. Das Safebrowsing Protocol v2 ist sehr datenschutzfreundlich und wird nur für den Datenaustausch mit AdGuard-Servern verwendet, die Hash-URLs verwenden, sodass der Server nie die tatsächlichen von den Clients abgefragten URLs kennt.

Wenn die Domain in der lokalen Safebrowsing-Datenbank vorhanden ist, wird sie zusätzlich anhand einer anderen Datenbank auf unserem Server geprüft. Die Informationen über die Domain werden auch in Hash-Form gesendet, sodass wir die spezifische URL nicht kennen.

### Kindersicherung

Wenn das Kindersicherungs-Modul aktiviert ist, verwendet AdGuard einen eigenen Webservice, um Webseiten anhand der Datenbank zu überprüfen. Jedes Mal, wenn der Benutzer/die Benutzerin die Webseite besucht, wird eine Anfrage an diesen Webservice gesendet, die den Domainnamen dieser Webseite enthält. Diese Informationen werden nirgendwo gespeichert und werden in keiner anderen Weise verwendet, als um festzustellen, ob die Webseite in die schwarze Liste der Kindersicherung eingetragen wurde.

### Internet-Sicherheits-Community

Wenn der Benutzer/die Benutzerin die Option "An der Entwicklung des Moduls “Internet-Sicherheit” teilnehmen” aktiviert, sendet das Programm regelmäßig anonyme sicherheitsrelevante Daten:

* URLs der besuchten Webseiten, die AdGuard als potenziell nicht zuverlässig identifiziert, zusammen mit Informationen über die Art der erkannten Bedrohungen;
* Zusätzliche statistische Informationen über die von der AdGuard-Software erkannten Bedrohungen.

Die oben beschriebenen Informationen, wenn sie von AdGuard für Windows gesammelt werden, sind im Allgemeinen nicht mit anderen personenbezogenen Daten korreliert und werden anonym in Kombination mit ähnlichen Informationen von anderen Benutzern der AdGuard-Software für analytische Zwecke verwendet.