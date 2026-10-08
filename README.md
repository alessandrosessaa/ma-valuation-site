# M&A Valuation

An English-language academic website built with Next.js, React, TypeScript and Tailwind CSS. All lab inputs are hypothetical; no corporate case studies are included.

## Run locally

Install dependencies with `pnpm install`, then use `pnpm dev`. Open http://127.0.0.1:3000. For the production preview use `pnpm build` followed by `pnpm start`.

## Verification

`pnpm test` checks independent hand-calculated cash flows, ramp timing, discounting, zero probability, net cash, nonpositive equity, the break-even identity and invalid inputs. `pnpm build` checks the production build and TypeScript.

The site was also inspected at desktop and mobile widths. Price updates, invalid-input handling and reset were checked in the browser.

## Structure

- `app/`: page, layout and responsive styles.
- `components/`: reusable citations and interactive valuation lab.
- `content/`: verified academic and institutional source links.
- `lib/valuation.ts`: validation and pure valuation calculations.
- `tests/`: calculation tests.

## Model

Standalone equity = enterprise value − net debt. Expected annual synergy cash flow = pre-tax full-realization cash flow × (1 − tax rate) × realization probability × linear ramp factor. Each year-end cash flow is discounted at the synergy discount rate. Net synergy value subtracts the certain, after-tax integration cost paid at closing. The maximum equity price is standalone equity plus net synergy value. Acquirer NPV subtracts the offered equity price.

No terminal synergy value is included. Zero ramp years means immediate full realization from year one. A forecast may end before full realization. Negative net debt means net cash. Percentage premiums are withheld when standalone equity is nonpositive. Probability and discount-rate assumptions should avoid counting the same risk twice. The model's limits and source citations are visible on the site.
