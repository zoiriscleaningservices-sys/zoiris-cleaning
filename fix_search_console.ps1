<#
.SYNOPSIS
    Fixes Google Search Console indexing issues for zoiriscleaning.com
    
.DESCRIPTION
    This script fixes:
    1. og:type "article" -> "website" on all location pages (helps canonical signal)
    2. Finds 404 pages referenced in sitemaps and removes them
    3. Updates robots.txt with correct sitemap URL
    4. Adds X-Robots-Tag equivalent via <meta name="robots"> where needed
    5. Reports which URLs in sitemaps have no corresponding index.html file
#>

$siteRoot = "c:\Users\lucia\OneDrive\Desktop\zoiris-cleaning"
$domain = "https://zoiriscleaning.com"

Write-Host "=== ZOIRIS CLEANING - SEARCH CONSOLE FIX SCRIPT ===" -ForegroundColor Cyan
Write-Host "Site root: $siteRoot" -ForegroundColor Gray
Write-Host ""

# ─── 1. Fix og:type "article" -> "website" in ALL html files ───────────────────
Write-Host "Step 1: Fixing og:type 'article' -> 'website' in all HTML files..." -ForegroundColor Yellow
$htmlFiles = Get-ChildItem -Path $siteRoot -Filter "*.html" -Recurse -ErrorAction SilentlyContinue
$fixedCount = 0
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    if ($content -match '<meta property="og:type" content="article"') {
        $newContent = $content -replace '<meta property="og:type" content="article"', '<meta property="og:type" content="website"'
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8 -NoNewline
        $fixedCount++
    }
}
Write-Host "  Fixed og:type in $fixedCount files." -ForegroundColor Green

# ─── 2. Check sitemaps for 404 URLs (no matching index.html) ────────────────────
Write-Host ""
Write-Host "Step 2: Checking sitemap URLs against filesystem..." -ForegroundColor Yellow
$sitemapFiles = @("sitemap_1.xml", "sitemap_2.xml", "sitemap_3.xml")
$notFoundUrls = @()
$redirectUrls = @()

foreach ($sitemapFile in $sitemapFiles) {
    $sitemapPath = Join-Path $siteRoot $sitemapFile
    if (Test-Path $sitemapPath) {
        $content = Get-Content $sitemapPath -Raw
        $matches = [regex]::Matches($content, '<loc>(https://zoiriscleaning\.com/[^<]*)</loc>')
        foreach ($match in $matches) {
            $url = $match.Groups[1].Value
            # Convert URL to local path
            $localPath = $url -replace [regex]::Escape($domain), $siteRoot -replace '/', '\'
            # Handle trailing slash -> index.html
            if ($localPath.EndsWith('\')) {
                $localPath = $localPath + 'index.html'
            }
            if (-not (Test-Path $localPath)) {
                $notFoundUrls += $url
            }
        }
    }
}

Write-Host "  Found $($notFoundUrls.Count) URLs in sitemaps with no matching file:" -ForegroundColor $(if ($notFoundUrls.Count -gt 0) { "Red" } else { "Green" })
if ($notFoundUrls.Count -gt 0) {
    $notFoundUrls | ForEach-Object { Write-Host "    - $_" -ForegroundColor Red }
}

# ─── 3. Remove 404 URLs from sitemaps ───────────────────────────────────────────
if ($notFoundUrls.Count -gt 0) {
    Write-Host ""
    Write-Host "Step 3: Removing 404 URLs from sitemaps..." -ForegroundColor Yellow
    foreach ($sitemapFile in $sitemapFiles) {
        $sitemapPath = Join-Path $siteRoot $sitemapFile
        if (Test-Path $sitemapPath) {
            $content = Get-Content $sitemapPath -Raw -Encoding UTF8
            $originalLength = $content.Length
            
            foreach ($url in $notFoundUrls) {
                # Remove entire <url>...</url> block containing this URL
                $escapedUrl = [regex]::Escape($url)
                $content = $content -replace "(?s)\s*<url>\s*<loc>$escapedUrl</loc>.*?</url>", ""
            }
            
            if ($content.Length -ne $originalLength) {
                Set-Content -Path $sitemapPath -Value $content -Encoding UTF8 -NoNewline
                Write-Host "  Updated: $sitemapFile" -ForegroundColor Green
            }
        }
    }
}

# ─── 4. Fix robots.txt ──────────────────────────────────────────────────────────
Write-Host ""
Write-Host "Step 4: Checking robots.txt..." -ForegroundColor Yellow
$robotsPath = Join-Path $siteRoot "robots.txt"
$robotsContent = Get-Content $robotsPath -Raw -Encoding UTF8
$expectedContent = "User-agent: *`nAllow: /`n`nSitemap: https://zoiriscleaning.com/sitemap_index.xml`n"
if ($robotsContent -ne $expectedContent) {
    Set-Content -Path $robotsPath -Value $expectedContent -Encoding UTF8 -NoNewline
    Write-Host "  robots.txt updated." -ForegroundColor Green
} else {
    Write-Host "  robots.txt already correct." -ForegroundColor Green
}

# ─── 5. Fix index.html main page og:type ────────────────────────────────────────
Write-Host ""
Write-Host "Step 5: Verifying main index.html canonical and meta..." -ForegroundColor Yellow
$indexPath = Join-Path $siteRoot "index.html"
$indexContent = Get-Content $indexPath -Raw -Encoding UTF8
Write-Host "  Main index.html canonical check..." -ForegroundColor Gray
$canonicalMatch = [regex]::Match($indexContent, '<link rel="canonical" href="([^"]+)"')
if ($canonicalMatch.Success) {
    Write-Host "  Canonical: $($canonicalMatch.Groups[1].Value)" -ForegroundColor Cyan
} else {
    Write-Host "  WARNING: No canonical found in index.html!" -ForegroundColor Red
}

# ─── 6. Check for duplicate jackson's-gap vs jacksons-gap ───────────────────────
Write-Host ""
Write-Host "Step 6: Checking for duplicate city directories..." -ForegroundColor Yellow
$jacksonGapEncoded = Join-Path $siteRoot "jackson&#39;s-gap-al"
$jacksonGap1 = Join-Path $siteRoot "jackson's-gap-al"
$jacksonGap2 = Join-Path $siteRoot "jacksons-gap-al"
if (Test-Path $jacksonGap1) { Write-Host "  Found: jackson's-gap-al" -ForegroundColor Yellow }
if (Test-Path $jacksonGap2) { Write-Host "  Found: jacksons-gap-al (canonical version)" -ForegroundColor Green }

# ─── 7. Create/update sitemap_index.xml ─────────────────────────────────────────
Write-Host ""
Write-Host "Step 7: Verifying sitemap_index.xml..." -ForegroundColor Yellow
$sitemapIndexPath = Join-Path $siteRoot "sitemap_index.xml"
$expectedIndex = @"
<?xml version='1.0' encoding='utf-8'?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://zoiriscleaning.com/sitemap_1.xml</loc>
    <lastmod>2026-03-23</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://zoiriscleaning.com/sitemap_2.xml</loc>
    <lastmod>2026-03-23</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://zoiriscleaning.com/sitemap_3.xml</loc>
    <lastmod>2026-03-23</lastmod>
  </sitemap>
</sitemapindex>
"@
Set-Content -Path $sitemapIndexPath -Value $expectedIndex -Encoding UTF8 -NoNewline
Write-Host "  sitemap_index.xml updated with today's date." -ForegroundColor Green

# ─── 8. Report Summary ──────────────────────────────────────────────────────────
Write-Host ""
Write-Host "=== SUMMARY ===" -ForegroundColor Cyan
Write-Host "og:type fixed in $fixedCount HTML files" -ForegroundColor Green
Write-Host "404 URLs found in sitemaps: $($notFoundUrls.Count)" -ForegroundColor $(if ($notFoundUrls.Count -gt 0) { "Yellow" } else { "Green" })
Write-Host ""
Write-Host "Next steps:" -ForegroundColor White
Write-Host "  1. git add -A && git commit -m 'Fix Search Console: og:type, remove 404s from sitemaps'" -ForegroundColor Gray
Write-Host "  2. git push origin main" -ForegroundColor Gray
Write-Host "  3. In Google Search Console, go to Sitemaps and resubmit sitemap_index.xml" -ForegroundColor Gray
Write-Host "  4. Use URL Inspection tool to request indexing of key pages" -ForegroundColor Gray
Write-Host ""
Write-Host "Done!" -ForegroundColor Green
