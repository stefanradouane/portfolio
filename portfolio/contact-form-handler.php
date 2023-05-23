<?php
    $pagevalue = $_POST['page'];
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];
    $email_subject = "Bericht via Website";
    $to = array("stefan@stefanradouane.nl, stefanradouane@ziggo.nl");
    // $to = "stefan@stefanradouane.nl";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    // Create email headers
    $headers .= 'van: '.$visitor_email."\r\n".
                'reageer: '.$visitor_email."\r\n";

    $verhaal = "<html><body>";
    $verhaal .= "<h1 style='color:#1e1f26;'>Hey stefan!</h1><h2 style='color:#283655; font-weight:400;'>Mijn naam is <b>$name</b>.</h2><h3 style='color:#4d648d; font-weight:400;'>Mijn email is <b>$visitor_email</b></h3><h3 style='color:#4d648d; font-weight:400;'>Mijn telefoon nr. is <b>$tel</b></h3><p style='color:#1e1f26; margin-top:2em; font-size:15px; font-weight:600;'>$message</p><p style='font-weight:400; font-size:12px;'>Verstuurd vanaf <em>$pagevalue</em></p>";
    $verhaal .= "</body></html>";

    

    
    foreach($to as $to) {
    mail($to,$email_subject,$verhaal,$headers);
    } 
    
    if($pagevalue == "index") {
        header("location:index.html#berichtverzonden");

    }   else if($pagevalue == "portfolio"){
            header("location:portfolio.html#berichtverzonden");

    }   else if($pagevalue == "animatie"){
            header("location:loading.html#berichtverzonden");
        
    }   else if($pagevalue == "gall"){
            header("location:project-gall.html#berichtverzonden");
        
    }   else if($pagevalue == "arduino"){
            header("location:project.html#berichtverzonden");
        
    }   else if($pagevalue == "cover"){
            header("location:project-cover.html#berichtverzonden");
    
    }   else if($pagevalue == "parfum"){
            header("location:project-parfum.html#berichtverzonden");
    
    }   else if($pagevalue == "cod"){
            header("location:project-cod.html#berichtverzonden");
    }
?>

