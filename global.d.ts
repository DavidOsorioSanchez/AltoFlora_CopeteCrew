type de = typeof import('./messages/de.json');
type en = typeof import('./messages/en.json');
type es = typeof import('./messages/es.json');
type fr = typeof import('./messages/fr.json');
type po = typeof import('./messages/po.json');
type ru = typeof import('./messages/ru.json');

declare interface IntlMessages extends de, en, es, fr, po, ru {}