<?php

declare(strict_types=1);

$renderScript = dirname(__DIR__) . '/private/render_resume_pdf.sh';

if (!is_file($renderScript) || !is_executable($renderScript)) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=UTF-8');
    echo 'PDF generation is not available.';
    exit;
}

$tempFile = tempnam(sys_get_temp_dir(), 'resume-pdf-');

if ($tempFile === false) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=UTF-8');
    echo 'Could not allocate a temporary PDF file.';
    exit;
}

$pdfPath = $tempFile . '.pdf';
unlink($tempFile);

$command = escapeshellarg($renderScript) . ' ' . escapeshellarg($pdfPath) . ' 2>&1';
$output = [];
$exitCode = 0;
exec($command, $output, $exitCode);

if ($exitCode !== 0 || !is_file($pdfPath) || filesize($pdfPath) === 0) {
    if (is_file($pdfPath)) {
        unlink($pdfPath);
    }

    error_log('resume pdf generation failed: ' . implode("\n", $output));

    http_response_code(500);
    header('Content-Type: text/plain; charset=UTF-8');
    echo 'Resume PDF generation failed.';
    exit;
}

header('Content-Type: application/pdf');
header('Content-Disposition: attachment; filename="Jacob-Stephens-Resume.pdf"');
header('Content-Length: ' . (string) filesize($pdfPath));
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

readfile($pdfPath);
unlink($pdfPath);
