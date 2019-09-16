<?php
$url_host = 'http://' . $_SERVER['HTTP_HOST'];
$pattern_document_root = addcslashes(realpath($_SERVER['DOCUMENT_ROOT']), '\\');
$pattern_uri = '/' . $pattern_document_root . '(.*)$/';

preg_match_all($pattern_uri, __DIR__, $matches);
$url_path = $url_host . $matches[1][0];
$url_path = str_replace('\\', '/', $url_path);
if (!class_exists('lessc')) {
    include ('./libs/lessc.inc.php');
}
$less = new lessc;
$less->compileFile('less/905.less', 'css/905.css');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow">
    <title>Login Screen with Form - Bootsnipp.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="<?php echo $url_path ?>/css/bootstrap-4.1.1.min.css" rel="stylesheet">
    <link href="<?php echo $url_path ?>/css/905.css" rel="stylesheet" type="text/css" />
    <script src="<?php echo $url_path ?>/js/jquery-3.2.1.min.js"></script>
    <script  src="<?php echo $url_path ?>/js/bootstrap-4.1.1.min.js"></script>
    <script src="js/905.js"></script>
</head>

<body>
<?php
    include './905-content.php';
?>
</body>

</html>