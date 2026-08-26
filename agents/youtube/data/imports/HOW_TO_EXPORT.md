# How to Export YouTube Analytics

The agent's weekly review reads a CSV from this folder. Export it from YouTube Studio:

1. Go to **YouTube Studio → Analytics → Advanced mode**.
2. Set the date range to the last 7 days (or the period being reviewed).
3. Make sure these columns/metrics are included:
   - Video title
   - Views
   - Impressions click-through rate (CTR)
   - Average percentage viewed (retention)
   - Subscribers gained
4. Click **Export current view → Comma-separated values (.csv)**.
5. Save the file into this folder as `youtube-analytics_YYYY-MM-DD.csv` (date = export date).
6. Never overwrite a previous export — each week's file stays, dated separately, so the agent can compare trends over time.
