# AdGuard-DNS: Datenschutzhinweis
*22. März 2021*

> **Kernaussage**: Wir teilen oder verkaufen Ihre personenbezogenen Daten nicht. Wir sind stolz darauf, dass wir einer der Kämpfer für die Privatsphäre der Nutzer sind, und wir fühlen uns diesem Prinzip verpflichtet und sind bestrebt, so transparent wie möglich zu sein.

Wir sind überzeugt, dass die Privatsphäre ein grundlegendes Menschenrecht ist. Deshalb sind wir transparent darüber, was AdGuard tut, und erklären den Zweck jedes einzelnen Teils der Informationen, die von unseren Apps und Diensten gesammelt werden.

Dieser Datenschutzhinweis listet alle Informationen auf, die wir über [AdGuard DNS](https://adguard.com/de/adguard-dns/overview.html) erfassen können, und erklärt, warum wir dies tun und wie wir diese Informationen verwenden. Die von uns gesammelten Informationen enthalten nur die Daten, die für die vollständige Funktionalität der AdGuard-Produkte und -Dienste entscheidend sind. *Dies ist übersetzter Text und kann geringfügig abweichen. Den Originaltext finden Sie in der [englischen Version](https://adguard.com/en/privacy/dns.html).*

## Allgemeines

Der AdGuard DNS-Service unterliegt der Rechtsprechung der Republik Zypern. Alle seine Aktivitäten und Vorgehensweisen entsprechen den relevanten EU-Richtlinien und Verordnungen sowie den relevanten nationalen und lokalen Gesetzen und Vorschriften der Republik Zypern, einschließlich, aber nicht beschränkt auf DSA und GDPR.

AdGuard DNS funktioniert als DNS-Auflöser, der je nach gewählter Konfiguration (Server) den Zugriff auf bestimmte Domains blockieren *kann*:

* *AdGuard DNS Standard* blockiert den Zugriff auf Domains, die von unserer Seite als Werbung, Tracking oder Malware eingestuft wurden. Diese Liste wird ständig auf Basis der Rückmeldungen unserer Benutzer aktualisiert.
* *AdGuard DNS Familienschutz* blockiert den Zugriff auf die gleichen Domains wie die Version * „Standard“ * und zusätzlich den Zugriff auf solche Domains, die möglicherweise Inhalte enthalten, die nur für Erwachsene geeignet sind. Es erzwingt auch die „sichere Suche“ und andere „sichere Modi“, wo immer dies möglich ist, was zu veränderten Suchergebnissen, fehlenden Kommentarbereichen und anderen Unterschieden im Erscheinungsbild von Webseiten im Vergleich zum ursprünglichen Zustand führen kann.
* *Der Nicht filternde AdGuard DNS-Service* blockiert nichts und leitet nichts um. Er gibt lediglich die IP-Adresse der angefragten Domain zurück.

Wann immer ein „AdGuard DNS“-Server (mit Ausnahme von nicht-filternden Servern) eine Anfrage an eine Domain erhält, die von unserer Seite als Werbe- oder Tracking-Domain eingestuft wurde, gibt er die Antwort „Unspezifizierte IP-Adresse“ (0.0.0.0) zurück. Wenn ein AdGuard DNS-Server (außer nicht-filternde Server) eine Anfrage an eine Domain erhält, die von uns als Malware-Domain eingestuft wurde, oder wenn ein AdGuard DNS Familienschutz-Server eine Anfrage an eine Domain erhält, die als Domain mit Inhalten, die nur für Erwachsene geeignet sind, eingestuft wurde, dann antwortet er mit einer Weiterleitung auf eine Dummy-Seite, die erklärt, was soeben geschehen ist.

Wenn Sie mit der Einstufung einer bestimmten Domain als Werbe-, Tracking-, Malware- oder Erwachsenen-Domain nicht einverstanden sind oder wenn Sie glauben, dass eine bestimmte Domain von einem der AdGuard DNS-Server blockiert werden sollte, wobei dies aber (noch) nicht der Fall ist, dann kontaktieren Sie uns bitte unter support@adguard.com.

## Welche Daten von AdGuard-DNS gesammelt werden können und wann

Wir sammeln KEINE personenbezogenen Daten über unsere Benutzer/innen. Mit anderen Worten, Ihre IP-Adresse oder irgendwelche Daten über SIE werden nicht erfasst.

**Was wir sammeln:**

* Wir speichern aggregierte Performance-Metriken unseres DNS-Servers, nämlich die Anzahl der vollständigen Anfragen an einen bestimmten Server, die Anzahl der blockierten Anfragen, die Geschwindigkeit der Bearbeitung von Anfragen.
* Wir speichern die Datenbank der in den letzten 24 Stunden angefragten Domains. Wir brauchen diese Informationen, um neue Tracker und Bedrohungen zu identifizieren und zu blockieren.
* Wir protokollieren auch, wie oft dieser oder jener Tracker blockiert worden ist. Wir benötigen diese Informationen, um veraltete Regeln aus unseren Filtern zu entfernen.

Sämtliche Daten, die wir sammeln, geben wir nicht an Dritte weiter. Sie werden ausschließlich für interne Zwecke wie z. B. die Leistungsanalyse verwendet. Die einzigen Daten, die wir möglicherweise weitergeben könnten, sind Ableitungen aus den Originaldaten, d. h. Listen von Domains, die unsere Server als Werbe-, Tracking- oder Malware-Domains erkannt haben.


