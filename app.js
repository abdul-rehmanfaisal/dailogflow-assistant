var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'faisalabdulrehman97@gmail.com',
    pass: 'xkjwpnpwxuxegzhm'
  }
});

var mailOptions = {
  from: 'faisalabdulrehman97@gmail.com',
  to: ['asmaf610@gmail.com',"minakuper@gmail.com",
"valerie.legueux@gmail.com",
"ajustanford@gmail.com",
"anjupatwardhan@creditease.cn",
"howardh@nestseekers.com",
"howardhenzel@gmail.com",
"jagjyotsna@gmail.com",
"hitehal@gmail.com",
"martina.chranckova@gmail.com",
"ricardo.escaranelli@gmail.com",
"larsparaty@gmail.com",
"seba.ocano@gmail.com",
"alessandra.bianchi91@gmail.com",
"gbalajimailbox@gmail.com",
"niamh.cooney@gmail.com",
"mohd.h.na@gmail.com",
"hn.bh.pk@gmail.com",
"jdezotti@gmail.com",
"sives.govender@gmail.com",
"joefhair@gmail.com",
"bulentersoz8@gmail.com",
"panzerita@gmail.com",
"achitkara2@gmail.com",
"sandra.dorsey@excite.com",
    "duhsimt@gmail.com",  
    "boblizek@gmail.com",
    "samaritandubai@gmail.com",  
    "classylissa@gmail.com",
    "profjanthonytravel@gmail.com",
    "longarch05@gmail.com",
    "atyabdates@gmail.com",
    "farooqiram@gmail.com",
    "duhsimt@gmail.com",  
    "ayesha.islam.mails@gmail.com",
    "808hyped@gmail.com",
    "pauljstanistreet@gmail.com",
    "capitalharmony518@gmail.com",
    "flagship@youthbeyondboundaries.com",
    "drhenrygarrett@gmail.com",
    "sajid.mscp397@iiu.edu.pk"
],
  subject: 'Enhance your business',
  html: '<style> body {font-family: Arial, sans-serif;background-color: blue;color: #333;margin: 0;padding: 0;}.card {max-width: 400px;margin: 20px auto;background-color: #fff;border-radius: 8px;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);}.card-header {background-color: #007bff;color: #fff;border- top - left - radius: 8px;border - top - right - radius: 8px;0padding: 20px;}.card - content {padding: 20px;}@media screen and(max - width: 768px) {.card -max - width: 90 %;}}</style ><body><div class="card"><div class="card-header"><h2 style="margin: 0; text-align: center;">Enhance Your Business</h2><h2 style="margin: 0; text-align: center;">with Our Chatbot Solution</h2></div><div class="card-content"><p>Dear ,</p><p>I hope this email finds you well. I wanted to take a moment to introduce you to our cutting-edge chatbot solution and share how it can significantly benefit your business.</p><ul style="list-style-type: none; padding: 0;"><li style="margin-bottom: 10px;"><strong>24/7 Customer Support:</strong> Our chatbot provides round-the-clock assistance to your customers, ensuring they receive prompt responses to their queries regardless of the time of day. This leads to increased customer satisfaction and loyalty.</li><li style="margin-bottom: 10px;"><strong>Increased Efficiency:</strong> By automating repetitive tasks and FAQs, our chatbot frees up your team to focus on more complex issues and strategic initiatives. This can significantly enhance productivity and operational efficiency.</li><li style="margin-bottom: 10px;"><strong>Personalized Interactions:</strong> Our chatbot utilizes advanced AI algorithms to deliver personalized experiences to each customer based on their preferences and past interactions. This helps build stronger relationships and drives sales.</li><li style="margin-bottom: 10px;"><strong>Cost Savings:</strong> Implementing our chatbot solution can result in substantial cost savings compared to traditional customer support methods. With fewer resources required for manual intervention, you can optimize your budget and allocate resources more effectively.</li><li style="margin-bottom: 10px;"><strong>Data Insights:</strong> Our chatbot captures valuable data and analytics on customer interactions, preferences, and pain points. This data can be leveraged to gain actionable insights and make informed business decisions.</li><li style="margin-bottom: 10px;"><strong>Scalability:</strong> Whether you are a small startup or a large enterprise, our chatbot solution is designed to scale with your business needs. It can handle growing volumes of customer inquiries without compromising on performance.</li><li style="margin-bottom: 10px;"><strong>Integeration with multiple platform:</strong>you can also integerate your chatbots with multiple platform such as whatsapp ,telegram ,facebook,messenger,discord,instagram,etc</li></ul><p>I would love to schedule a demo to show you firsthand how our chatbot can transform your business operations and drive meaningful results. Please let me know a convenient time for you, and I will make sure to accommodate your schedule.</p><p>Thank you for considering our chatbot solution. I m confident that it will be a game-changer for your business.</p><p>Best regards,</p><p>Abdul Rehman<br>AI and Chatbot developer<br>03009211889<br>For further details visit<a herf="https://www.fiverr.com/abdulrehmanf97?up_rollout=true"</p> </div></div><table><tr>TECH STACK</tr><td>dailogflow,</td><br><td>many chat,</td><br><td>kommunicate,</td><br><td>make.com,</td><br><td>zapier,</td><br><td>flowwise,</td><br><td>voiceflow.</td><br></table>'
};

      transporter.sendMail(mailOptions, function(error, info){
  if (error) {
        console.log(error);
  } else {
        console.log('Email sent: ' + info.response);
  }
});