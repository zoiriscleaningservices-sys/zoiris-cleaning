$root = 'c:\Users\lucia\OneDrive\Desktop\zoiris-cleaning'
$files = Get-ChildItem -Path $root -Recurse -File | Where-Object { $_.Extension -match '\.(html|xml|txt|json|js|css|py|md)$' }
$fileCount = 0
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $newContent = $content
    # Replace https:// variants first (most specific)
    $newContent = $newContent -replace 'https://www\.zoiriscleaningservices\.com', 'https://zoiriscleaning.com'
    $newContent = $newContent -replace 'http://www\.zoiriscleaningservices\.com', 'https://zoiriscleaning.com'
    $newContent = $newContent -replace 'https://zoiriscleaningservices\.com', 'https://zoiriscleaning.com'
    $newContent = $newContent -replace 'http://zoiriscleaningservices\.com', 'https://zoiriscleaning.com'
    # Replace bare domain variants
    $newContent = $newContent -replace 'www\.zoiriscleaningservices\.com', 'zoiriscleaning.com'
    $newContent = $newContent -replace 'zoiriscleaningservices\.com', 'zoiriscleaning.com'
    if ($newContent -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent)
        $fileCount++
        Write-Host "Updated: $($file.FullName)"
    }
}
Write-Host ""
Write-Host "Done. Updated $fileCount files."
