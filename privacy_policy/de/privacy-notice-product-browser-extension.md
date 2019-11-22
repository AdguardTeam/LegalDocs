# AdGuard für Browsererweiterung: Datenschutzhinweis
*November 06, 2019*

> **Kernaussage**: Wir teilen oder verkaufen Ihre personenbezogenen Daten nicht. Wir sind stolz darauf, dass wir einer der Kämpfer für die Privatsphäre der Nutzer sind, und wir fühlen uns diesem Prinzip verpflichtet und sind bestrebt, so transparent wie möglich zu sein.

Diese Datenschutzerklärung enthält alle Informationen, die wir möglicherweise sammeln, und erklärt, warum wir dies tun und wie wir sie weiter verwenden. Die von uns gesammelten Informationen enthalten nur die Daten, die für die vollständige Funktionalität der AdGuard-Produkte entscheidend sind.

Wir sind überzeugt, dass die Privatsphäre ein grundlegendes Menschenrecht ist. Deshalb sind wir transparent darüber, was AdGuard tut, und erklären den Zweck jedes einzelnen Teils der Informationen, die von unseren Apps gesammelt werden.

## Welche Daten von AdGuard-Browsererweiterung gesammelt werden können und in welchen Fällen 

* [Suche nach Filter-Updates](#filters-updates-check)
* [Statistiken zur Nutzung von Werbefiltern](#ad-filters-stats)
* [Senden einer Website-Beschwerde](#web-page-complaint)
* [Überprüfen der Website-Sicherheit](#browsing-security-check)
* [Internet-Sicherheits-Community](#browsing-security-community)

### <a id="filters-updates-check"></a> Suche nach Filter-Updates

Um die Updates der Sperrfilter zu überprüfen, verbindet sich AdGuard mit seinen Servern. Wenn es passiert, werden die folgenden Informationen gesendet: 

* Browsertyp;
* Browsersprache;
* Erweiterungskennung (eine Zufallszahl, die bei der Erweiterungsinstallation erzeugt wird);
* Version der Browser-Erweiterung;
* Build-Typ der Erweiterung

Die Suche nach Filter-Updates wird einmal pro Tag durchgeführt. Wir aggregieren die auf diese Weise erhaltenen Daten, um die Anzahl der aktiven Nutzer zu bestimmen.

### <a id="ad-filters-stats"></a> Statistiken zur Nutzung von Werbefiltern

Die Option "Statistiken zur Nutzung von Werbefiltern senden" ist standardmäßig **deaktiviert**. Es wird nichts gesendet, bis der Benutzer/die Benutzerin es manuell aktiviert, um uns zu helfen, unsere Sperrfilter zu verbessern. [Dieser Wissensdatenbank-Artikel](https://kb.adguard.com/general/filter-rules-statistics) erklärt, wie uns die Aktivierung deiser Option hilft. 

Wenn der Benutzer/die Benutzerin die Option "Statistiken zur Nutzung von Werbefiltern senden" aktiviert, werden die folgenden Informationen ab und zu gesendet:

* Version der Browser-Erweiterung;
* Browsertyp;
* Liste der aktivierten Filter;
* Liste, die aus den folgenden Elementen besteht:
  * Dem besuchten Domainnamen der Webseite;
  * Der Anzahl der letzten Seitenaufrufe;
  * Der Liste der Filterregeln und Filter-IDs, die auf dieser Webseite aktiviert wurden,
  * Dem Domainnamen der blockierten Anfragen, der für URL-Regeln gesendet wird. Die Liste wird auf der Grundlage der Besuchsstatistik der Webseite seit dem letzten Senden von Statistikdaten erstellt.
 
Durch das Sammeln von Statistiken über verwendete Filterregeln können wir die nicht mehr verwendeten Regeln erkennen und sie entfernen.

### <a id="web-page-complaint"></a> Senden einer Website-Beschwerde

Die Benutzer können einen Bericht über ein Problem auf einer Webseite direkt aus der App heraus senden. Die App öffnet automatisch die Webseite `reports.adguard.com` und leitet einige Informationen über ihre Konfiguration weiter. Die Benutzer können sie dann ändern oder löschen.

Solange der Benutzer/die Benutzerin nicht zustimmt, diese Informationen durch manuelles Klicken auf die Schaltfläche "Senden" zu übermitteln, werden diese Informationen nicht gespeichert oder an Dritte weitergegeben. In diesem Fall wird der Bericht auf [GitHub](https://github.com/adguardteam/adguardfilters/issues) veröffentlicht (aber anonym).
 
### <a id="browsing-security-check"></a> Überprüfen der Website-Sicherheit 

Wenn die Option "Phishing und Malware-Schutz" aktiviert ist, überprüft AdGuard jede Webseite, bevor der Benutzer/die Benutzerin sie besucht. Wir verwenden zu diesem Zweck die Lookup-API, und die Informationen über die besuchte Webseite werden in Form von Hash-Präfixen gesendet. Dies lässt uns nicht erkennen, welche Webseite besucht wird.

### <a id="browsing-security-community"></a> Internet-Sicherheits-Community

Wenn die Option "Helfen Sie uns bei der Entwicklung der Internet-Sicherheit" aktiviert ist, sendet die App regelmäßig anonyme sicherheitsrelevante Daten:

* URLs der besuchten Webseiten, die AdGuard als potenziell nicht zuverlässig identifiziert, zusammen mit Informationen über die Art der erkannten Bedrohungen;
* Browsersprache;
* Zusätzliche statistische Informationen über die von der AdGuard-Software erkannten Bedrohungen

Die oben beschriebenen Informationen, wenn sie von AdGuard-Browsererweiterung gesammelt werden, sind im Allgemeinen nicht mit anderen personenbezogenen Daten korreliert und werden anonym in Kombination mit ähnlichen Informationen von anderen Benutzern/innen der AdGuard-Software für analytische Zwecke verwendet.
