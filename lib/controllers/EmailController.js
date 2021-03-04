const sgMail = require('@sendgrid/mail');

module.exports = {
    requestOffer: (reqBody) => {
        let response;
        try {
			var firstName = reqBody.firstName;
            var lastName = reqBody.lastName;
            var fullName = firstName+" "+lastName;
            var email = reqBody.email || "";
            var phone = reqBody.phone || "";;
            var description = reqBody.description || "";;
            var state = reqBody.state || "";;
            var county = reqBody.county || "";;
            var acres = reqBody.acres || "";;
            var leased = reqBody.leased || "";;
            var producing = reqBody.producing || "";;
            var comments = reqBody.comments || "";;

			sgMail.setApiKey(process.env["SENDGRID_API_KEY"]);

            var message = {
				//to: 'info@mavmp.com',
				to: 'warnerh1576@gmail.com',
                from: 'offerrequest@mavmp.com',
                subject: 'Offer Request from '+fullName,
                html:
                    '<strong>Offer Request</strong>'+
                    '<b><p> Name: </b>'+fullName+'<br><br>'+
                    '<b><p> Email: </b>'+email+'<br><br>'+
                    '<b><p> Phone: </b>'+phone+'<br><br>'+
                    '<b><p> Property description: </b>'+description+'<br><br>'+
                    '<b><p> County: </b>'+county+'<br><br>'+
                    '<b><p> State: </b>'+state+'<br><br>'+
                    '<b><p> Is your property currently leased?: </b>'+leased+'<br><br>'+
                    '<b><p> Is your property currently producing?: </b>'+producing+'<br><br>'+
                    '<b><p> Number of acres: </b>'+acres+'<br><br><br>'+
                    '<b><p> Addtional comments: </b>'+comments+'<br>'+
                    '</p>',
            };
			sgMail.send(message);
			
			response = "Request successfully sent.";

        } catch(err) {
			console.log(err);
            
            response = "Error sending request.";

		} finally {
			return response;
		}
    },

    contactUs(reqBody) {
        let response;
        try {
            var name = reqBody.name;
            var email = reqBody.email || "";
            var phone = reqBody.phone || "";
            var question = reqBody.question;

            sgMail.setApiKey(process.env["SENDGRID_API_KEY"]);

            var message = {
                //to: 'info@mavmp.com',
				to: 'warnerh1576@gmail.com',
                from: 'contactus@mavmp.com',
                subject: 'New Question from '+ name,
                text: 
                    'Contact Us Form Submittal'+
                    'Name: '+ name +
                    'Email: '+ email +
                    'Phone: '+ phone +
                    'How may we assist you?: '+ question,
                html:
                    '<strong>Contact Us Form Submittal</strong>'+
                    '<b><p> Name: </b>'+ name +'<br>'+
                    '<b><p> Email: </b>'+ email +'<br>'+
                    '<b><p> Phone: </b>'+ phone +'<br>'+
                    '<b><p> How can we help you?: </b>'+ question +'<br>'+
                    '</p>',
            };
            sgMail.send(message);

            response = "Request successfully sent.";

        } catch(err) {
            console.log(err);
			response = "Error sending request.";

        } finally {
            return response;
        }
    }
}
