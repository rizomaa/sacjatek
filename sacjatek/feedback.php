<?php
$myemail = 'kristina.kerdyanova@gmail.com';
$email = $_POST['email'];
$message = $_POST['message'];
$mes = "E-mail: $email \nТекст: $message";

$send = mail($myemail, $header, $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");

if ($send == 'true') {
  echo "<script>alert(\"Паведамленне адпраўлена / Сообщение отправлено\");
  location.href='https://sactech.talash.by/'</script>";
} else {
  echo "<script>alert(\"Адбылася памылка, паспрабуйце яшчэ раз / Произошла ошибка, попробуйте еще раз\");
  location.href='https://sactech.talash.by/'</script>";
}
?>