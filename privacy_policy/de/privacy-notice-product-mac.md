# AdGuard für Mac: Datenschutzhinweis
*November 06, 2019*

> **Kernaussage**: Wir teilen oder verkaufen Ihre personenbezogenen Daten nicht. Wir sind stolz darauf, dass wir einer der Kämpfer für die Privatsphäre der Nutzer sind, und wir fühlen uns diesem Prinzip verpflichtet und sind bestrebt, so transparent wie möglich zu sein.

Diese Datenschutzerklärung enthält alle Informationen, die wir möglicherweise sammeln, und erklärt, warum wir dies tun und wie wir sie weiter verwenden. Die von uns gesammelten Informationen enthalten nur die Daten, die für die vollständige Funktionalität der AdGuard-Produkte entscheidend sind.

Wir sind überzeugt, dass die Privatsphäre ein grundlegendes Menschenrecht ist. Deshalb sind wir transparent darüber, was AdGuard tut, und erklären den Zweck jedes einzelnen Teils der Informationen, die von unseren Apps gesammelt werden.

## Welche Daten von AdGuard für Mac gesammelt werden können und in welchen Fällen

* [Überprüfen des Lizenzstatus](#license-status-check)
* [Zurücksetzen der Lizenz](#license-reset)
* [Suche nach Filter-Updates](#filters-updates-check)
* [Aktivieren der Testperiode](#trial-period-activation)
* [Senden einer Website-Beschwerde](#web-page-complaint)
* [Senden einer Nachricht an den Support](#support-message)
* [App-Absturz](#app-crash)
* [Überprüfen der Website-Sicherheit](#browsing-security-check)
* [Internet-Sicherheits-Community](#browsing-security-community)


### <a id="license-status-check"></a> Überprüfen des Lizenzstatus

Um den Lizenzstatus zu überprüfen, verbindet sich AdGuard mit seinen Servern. Wenn es passiert, werden die folgenden Informationen gesendet:

* Computername;
* Hash der MAC-Adresse;
* Hash der Hardware-ID;
* Sprache des Betriebssystems;
* Anwendungskennung;
* Anwendungsversion;
* Lizenzschlüssel;
* Build-Kennung

Wir verwenden diese Daten, um den Lizenzstatus zu überprüfen. MAC- und Hardware-ID-Hashes werden auch verwendet, um die Lizenz an den Computer zu binden. Diese Informationen werden auch verwendet, um die Lizenzschlüssel des Benutzers/der Benutzerin im persönlichen Konto auf `adguard.com` anzuzeigen.

### <a id="license-reset"></a> Zurücksetzen der Lizenz

Die Lizenz wird auf Benutzeranforderung zurückgesetzt. In diesem Fall werden die folgenden Informationen übermittelt:

* Anwendungskennung

### <a id="filters-updates-check"></a> Suche nach Filter-Updates

Um die Updates der Sperrfilter zu überprüfen, verbindet sich AdGuard mit seinen Servern. Wenn es passiert, werden keine Informationen gesendet. Die Anwendung lädt regelmäßig eine Datei mit allen Filterversionen und den verfügbaren Updates herunter.

### <a id="trial-period-activation"></a> Aktivieren der Testperiode

Wenn der Benutzer/die Benutzerin die Testperiode aktiviert, werden die folgenden Informationen an unseren Server gesendet:

* Computername;
* Hash der MAC-Adresse;
* Hash der Hardware-ID;
* Sprache des Betriebssystems;
* Anwendungskennung;
* Anwendungsversion;
* Build-Kennung

### <a id="web-page-complaint"></a> Senden einer Website-Beschwerde

Die Benutzer/innen können einen Fehlerbericht auf einer Webseite direkt aus der App heraus senden. Die App öffnet automatisch die Webseite `reports.adguard.com` und leitet einige Informationen über ihre Konfiguration weiter. Die Benutzer können sie dann ändern oder löschen.

Solange die Benutzer/innen nicht zustimmen, diese Informationen durch manuelles Klicken auf die Schaltfläche "Senden" zu übermitteln, werden diese Informationen nicht gespeichert oder an Dritte weitergegeben. In diesem Fall wird der Bericht auf [GitHub](https://github.com/adguardteam/adguardfilters/issues) veröffentlicht (aber anonym).

### <a id="support-message"></a> Senden einer Nachricht an den Support

Die Benutzer können direkt aus der App heraus Nachrichten an den Support senden und zusätzlich einen Diagnosebericht hinzufügen, der einige Informationen über die App und die Systemkonfiguration enthält. Es werden keine Informationen an einen anderen Ort gesendet, sofern der Benutzer/die Benutzerin die Übermittlung nicht bestätigt. 

Dieser Bericht enthält die folgenden Daten:

* Anwendungskennung;
* Anwendungsversion;
* Sprache des Betriebssystems;
* Version des Betriebssystems;
* Netzwerkeinstellungen der Anwendung;
* Liste der aktivierten Filter

Wenn die Option "Diagnosebericht zur Nachricht hinzufügen" aktiviert ist, sendet das Programm auch zusätzliche Informationen (zur Fehlersuche):

### <a id="app-crash"></a> App-Absturz

Im Falle einer Fehlfunktion, die zu einem unerwarteten App-Absturz führt, wird der Benutzer/die Benutzerin aufgefordert, einen speziellen Absturzbericht zu senden. Wenn er/sie damit einverstanden ist, erhalten wir folgende Informationen:

* Anwendungskennung;
* Hardware-Hash des Geräts;
* Gerätemodell, seine Speichergröße und seinen Speicherplatz;
* Anwendungsversion;
* Betriebssystem- und Kernel-Versionen;
* Stack Trace;
* Liste der von der Anwendung verwendeten Komponenten und deren Versionen;
* Der letzte Boot-Zeitstempel des Betriebssystems;
* Der letzte Boot-Zeitstempel der Anwendung

Diese Daten werden für weitere Diagnostik und Fehlersuche verwendet.

### <a id="browsing-security-check"></a> Überprüfen der Website-Sicherheit

Wenn die Option ["Phishing und Malware-Schutz"](https://kb.adguard.com/en/general/how-malware-protection-works) aktiviert ist, überprüft AdGuard jede Webseite, bevor die Benutzer/innen sie besuchen. Wir verwenden zu diesem Zweck die Lookup-API, und die Informationen über die besuchte Webseite werden in Form von Hash-Präfixen gesendet. Dies lässt uns nicht erkennen, welche Webseite besucht wird.

### <a id="browsing-security-community"></a> Internet-Sicherheits-Community

Wenn die Option "Helfen Sie uns bei der Entwicklung der Internet-Sicherheit" aktiviert ist, sendet die App regelmäßig anonyme sicherheitsrelevante Daten:

* URLs der besuchten Webseiten, die AdGuard als potenziell nicht zuverlässig identifiziert (der Zugriff auf sie wird durch das Modul "Internet-Sicherheit" blockiert);
* Informationen über die Art der identifizierten Bedrohungen.

Die oben beschriebenen Informationen, wenn sie von AdGuard für Mac gesammelt werden, sind im Allgemeinen nicht mit anderen personenbezogenen Daten korreliert und werden anonym in Kombination mit ähnlichen Informationen von anderen Benutzern/innen der AdGuard-Software für analytische Zwecke verwendet.