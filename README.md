# Support Master

A small collection of TypeScript utility helpers: pagination, PBKDF2 password
hashing, string validation, Mongolian national-ID parsing, Cyrillic→Latin
transliteration, and leveling / pricing calculations.

## Install

```bash
npm install support-master
```

## Usage

Everything is exposed through a single default export.

```ts
import SupportMaster from "support-master";
```

### Pagination

```ts
const pagination = await SupportMaster.paginate(page, limit, totalCount);
// => { total, pageCount, start, end, skip, nextPage, prevPage }
// nextPage / prevPage are null when there is no next / previous page.
```

### String validation

```ts
await SupportMaster.containsOnlyNumbers("12345"); // true
await SupportMaster.containsOnlyString("Hello");  // true (A–Z / a–z only)
```

### Mongolian national-ID parser

```ts
const info = await SupportMaster.nationalIdChecker("АА95010112"); // register string
// => { year, month, day, gander: "men" | "women" }
```

### Password hashing (PBKDF2)

```ts
const hashed = await SupportMaster.hash.Create("myPassword");
// "<salt>$<hash>" — store this string

const ok = await SupportMaster.hash.Verify("myPassword", hashed); // true

// Lower-level helpers are also available:
SupportMaster.hash.hashCreate(password, salt);              // string
SupportMaster.hash.hashVerify(entered, storedHash, salt);  // boolean
```

### Cyrillic → Latin transliteration

```ts
SupportMaster.convert.convertCyrillicToLatin("Монгол"); // "Mongol"
```

### Leveling & pricing

```ts
// Resolve a rank/level from an experience-point total:
const level = await SupportMaster.level.levelInfo(20000);
// => { rank, point, name, user_exp }

// All level definitions:
SupportMaster.level.level_data;

// Pricing conversion (FX + profit + bonus/voucher/rank discounts):
const price = await SupportMaster.level.convert({
  el: { amount: 100, profit: 10, profit_type: "percentage", bonus: 5 },
  currencyAmount: 3450, // FX rate
  rank: { rank: 2, point: 15000, name: "Genin", user_exp: 20000 },
  voucher_discount: { discount_value: 10, discount_type: "percentage" }, // optional
});
// => detailed breakdown incl. converted_amount, profit_amount, discount, final_payable
```

### Misc

```ts
// Build a Toki mini-app deep link with query parameters:
const { result } = SupportMaster.query_parameters(miniAppId, data, version, short);

// Await a fixed delay for a number of iterations (logs each iteration):
await SupportMaster.delayLoop(3, 1000);
```

## Exports

The default export is an object with the following members:

| Member               | Kind     | Description                                             |
| -------------------- | -------- | ------------------------------------------------------ |
| `paginate`           | function | Compute pagination metadata.                           |
| `containsOnlyNumbers`| function | Check a string is all digits.                          |
| `containsOnlyString` | function | Check a string is all ASCII letters.                   |
| `nationalIdChecker`  | function | Parse birth date / gender from a national-ID string.   |
| `query_parameters`   | function | Build a Toki mini-app deep link.                        |
| `level`              | object   | `{ level_data, levelInfo, convert }` (pricing/leveling).|
| `hash`               | object   | `{ Create, Verify, hashCreate, hashVerify }`.          |
| `delayLoop`          | function | Await a delay across N iterations.                     |
| `convert`            | object   | `{ convertCyrillicToLatin }`.                          |

## License

ISC © TOGTOKH.DEV
