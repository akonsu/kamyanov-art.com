app = proc do |env|
    body = <<-BODY
           <html>
             <body>
               <img src="http://farm5.staticflickr.com/4025/4479863916_49131d2a6e_z_d.jpg" />
             </body>
           </html>
           BODY
    [200, { 'Content-Type' => 'text/html' }, [body]]
end

run app
