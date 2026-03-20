# Split sitemap_0.xml into multiple smaller files (max 6,000 URLs each)
$inputFile = 'c:\Users\lucia\OneDrive\Desktop\zoiris-cleaning\sitemap_0.xml'
$outputDir = 'c:\Users\lucia\OneDrive\Desktop\zoiris-cleaning'
$baseUrl   = 'https://zoiriscleaning.com'
$maxUrls   = 6000
$today     = '2026-03-20'

Write-Host "Reading sitemap..."
$content = [System.IO.File]::ReadAllText($inputFile)

# Extract all <url>...</url> blocks
$urlMatches = [regex]::Matches($content, '(?s)<url>.*?</url>')
$totalUrls  = $urlMatches.Count
Write-Host "Total URLs found: $totalUrls"

$sitemapFiles = @()
$fileIndex = 0
$i = 0

while ($i -lt $totalUrls) {
    $chunk = $urlMatches | Select-Object -Skip $i -First $maxUrls
    $fileIndex++
    $filename = "sitemap_$fileIndex.xml"
    $outputPath = Join-Path $outputDir $filename

    $xml  = "<?xml version='1.0' encoding='utf-8'?>`n"
    $xml += "<urlset xmlns=`"http://www.sitemaps.org/schemas/sitemap/0.9`">`n"
    foreach ($m in $chunk) {
        $xml += "  " + $m.Value + "`n"
    }
    $xml += "</urlset>"

    [System.IO.File]::WriteAllText($outputPath, $xml)
    $count = $chunk.Count
    Write-Host "Created $filename with $count URLs"
    $sitemapFiles += $filename
    $i += $maxUrls
}

# Build new sitemap_index.xml
Write-Host "Updating sitemap_index.xml..."
$indexXml  = "<?xml version='1.0' encoding='utf-8'?>`n"
$indexXml += "<sitemapindex xmlns=`"http://www.sitemaps.org/schemas/sitemap/0.9`">`n"
foreach ($f in $sitemapFiles) {
    $indexXml += "  <sitemap>`n"
    $indexXml += "    <loc>$baseUrl/$f</loc>`n"
    $indexXml += "    <lastmod>$today</lastmod>`n"
    $indexXml += "  </sitemap>`n"
}
$indexXml += "</sitemapindex>"

[System.IO.File]::WriteAllText("$outputDir\sitemap_index.xml", $indexXml)
Write-Host "sitemap_index.xml updated with $($sitemapFiles.Count) sitemaps."

# Delete the old sitemap_0.xml
Remove-Item "$outputDir\sitemap_0.xml" -Force
Write-Host "Deleted old sitemap_0.xml"
Write-Host "Done!"
