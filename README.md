# Diabetes in Australia (FIT3179 Data Visualisation 2)

Single-page story with 3 maps and 13 other charts, built with Vega-Lite.

- `index.html`, `css/`, `js/main.js`: the page
- `specs/`: one readable Vega-Lite JSON file per chart (`theme.json` holds the shared fonts and colours)
- `data/`: CSV and GeoJSON files used by the charts

## Data
- ABS, National Health Survey 2022, data tables 1-5 and 16 (abs.gov.au)
- AIHW, Diabetes: Australian facts (ABS National Health Measures Survey 2022-24)
- State boundaries: github.com/tonywr71/GeoJson-Data

## Run locally
`python3 -m http.server` in this folder, then open http://localhost:8000
(charts load their JSON with fetch, so opening index.html by double-click will not work).
